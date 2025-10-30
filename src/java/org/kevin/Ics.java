/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.kevin;

import com.fazecast.jSerialComm.SerialPort;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import javax.swing.Timer;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 *
 * @author Administrator
 */
public class Ics {

    static Ics scla;
    Ics cla;
    public String errStr = "";
    public String okStr = "";
    public int errCnt = 0;

    Map<String, CmdTask> taskMap;

    //====================
    KvComm fpgaComm;
    KvComm sip0Comm;
    KvComm sip1Comm;
    KvComm sip2Comm;
    int mainSoftPhone_exist_f = 1;
    int subSoftPhone_exist_f = 1;
    int monitorPhone_exist_f = 1;
    //String mainSoftPhone_ip = "192.168.0.33";
    //String subSoftPhone_ip = "192.168.0.39";
    int mainSoftPhone_port = 1236;
    int subSoftPhone_port = 1236;
    int sipSocketPort0 = 1336;
    int sipSocketPort1 = 1337;
    //====================
    int myDeviceId = 0x2712;
    int mySerialId = 0x0000;
    int sipDeviceId = 0xd300;
    int sipSerialId = 0x0000;
    int rs485DeviceId = 0x2402;
    int devicePcioId = 0x2501;
    IcsData icsData;
    //====================
    String commandStr = "";
    Ssocket socketServer;
    int socketServerPort = 8324;
    //========================================================
    byte[] sockUartData_buf = new byte[4096];
    int sockUartData_len = 0;
    int sockUartData_tx_f = 0;
    //====================
    byte[] sockUartCmd_buf = new byte[4096];
    int sockUartCmd_len = 0;
    int sockUartCmd_tx_f = 0;

    String tickBackUserName = "";
    //========================================================

    Timer icsTimer = null;
    int emuTimer = 0;
    HashMap<String, Object> sip0Commands;
    HashMap<String, Object> sip1Commands;
    HashMap<String, Object> sip2Commands;
    TaskStack taskStack;
    ConsoleMain cm1;
    ConsoleSlot cs1, cs2, cs3, cs4, cs5, cs6;

    JSONObject tickBackValue;
    JSONObject testBackValue;
    int debugCnt = 1;
    HashMap<String, Object> paraSetMap = new HashMap();

    public Ics() {
        cla = this;
        Ics.scla = this;

    }

    public boolean handleCommand(JSONObject cmdJso) {
        String retStr = "";
        retStr = jsobjGet(cmdJso, "act");
        errCnt = 0;
        okStr = "";
        errStr = "";
        JSONObject webOut;
        try {
            switch (retStr) {
                case "saveParaSet":
                    break;
                case "testResponse":
                    webOut = new JSONObject();
                    webOut.put("status", "OK");
                    GB.webRetStr = webOut.toString();
                    break;
                case "transGsmToMp3":
                    /*
                    retStr = jsobjGet(cmdJso, "path");
                    if (retStr == null) {
                        return true;
                    }
                    String path = retStr.toString();
                    retStr = jsobjGet(cmdJso, "inFileName");
                    if (retStr == null) {
                        return true;
                    }
                    String inFileName = retStr.toString();
                    retStr = jsobjGet(cmdJso, "outFileName");
                    if (retStr == null) {
                        return true;
                    }
                    String outFileName = retStr.toString();
                    path = GB.webRootPath + "user-webIcs/record/";
                    String exeStr = "ffmpeg.exe -y -i " + inFileName + " -vn -ar 8000 -ac 1 -b:a 192k " + outFileName;
                    //path="D:/kevin/myCode/webIcs/build/web/user-webIcs/record/";
                    Process process = Runtime.getRuntime().exec(path + exeStr, null, new File(path));
                    process.waitFor();
                    */

                    break;
                default:
                    errCnt = 1;
                    errStr = "No this Command !!!";
                    break;
            }
        } catch (Exception ex) {
            errCnt = 1;
            errStr = "userSet.json Formate Error !!!";
        }
        return true;
    }

    public String jsobjGet(JSONObject in, String name) {
        try {
            String retStr = in.get(name).toString();
            return retStr;
        } catch (JSONException ex) {
            return null;
        }
    }

}

class IcsData {

    byte load_f;
    SipData sipData0;
    SipData sipData1;
    SipData sipData2;
    SlotData[] slotDatas = new SlotData[14];
    String actionStr = "";
    int actionStep = 0;
    int actionStatus = 0;
    int actionInx = 0;
    String actionInf = "";
    int selfSlot = 0;
    int debugCnt = 0;
    public HashMap<String, Object> exStatusMap = new HashMap();

    IcsData() {
        load_f = 1;
        for (int i = 0; i < slotDatas.length; i++) {
            slotDatas[i] = new SlotData();
        }
        sipData0 = new SipData();
        sipData1 = new SipData();
        sipData2 = new SipData();
        debug();
    }

    void debug() {
        Date dNow = new Date();
        SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        String tstr = ft.format(dNow);
        //=================================
        int debug_f = 0;
        if (debug_f == 0) {
            return;
        }

        slotDatas[0].exist_f = 0;
        slotDatas[0].type = "";
        slotDatas[0].count = 0;
        slotDatas[0].ip = "127.0.0.1";
        slotDatas[0].port = 23499;
        //status = 0;//0:none(dark), 1:exist(y blink) ,2: ready(y), 3:paraSet loaded(green blink), 4:pbx run(g), 5:error(red)
        slotDatas[0].status = 4;
        slotDatas[0].inf = "系統啟動完成";

        slotDatas[2].exist_f = 0;
        slotDatas[2].type = "";
        slotDatas[2].count = 0;
        //slotDatas[2].ip = "192.168.191.4";
        slotDatas[2].ip = "192.168.0.28";
        slotDatas[2].port = 23400;
        slotDatas[2].status = 1;
        slotDatas[2].inf = "";

        slotDatas[4].exist_f = 0;
        slotDatas[4].type = "";
        slotDatas[4].count = 0;
        slotDatas[4].ip = "192.168.191.2";
        //slotDatas[4].ip = "192.168.0.28";
        slotDatas[4].port = 23400;
        slotDatas[4].status = 1;
        slotDatas[4].inf = "";

        slotDatas[6].exist_f = 0;
        slotDatas[6].type = "";
        slotDatas[6].count = 0;
        slotDatas[6].ip = "192.168.191.5";
        slotDatas[6].port = 23400;
        slotDatas[6].status = 1;
        slotDatas[6].inf = "";

        slotDatas[8].exist_f = 0;
        slotDatas[8].type = "";
        slotDatas[8].count = 0;
        slotDatas[8].ip = "192.168.191.20";
        slotDatas[8].port = 23400;
        slotDatas[8].status = 4;
        slotDatas[8].inf = "";

        slotDatas[10].exist_f = 0;
        slotDatas[10].type = "";
        slotDatas[10].count = 0;
        slotDatas[10].ip = "192.168.191.3";
        slotDatas[10].port = 23400;
        slotDatas[10].status = 4;
        slotDatas[10].inf = "";

        slotDatas[12].exist_f = 0;
        slotDatas[12].type = "";
        slotDatas[12].count = 0;
        slotDatas[12].ip = "192.168.191.20";
        slotDatas[12].port = 23400;
        slotDatas[12].status = 0;
        slotDatas[12].inf = "";

        /*
        slotDatas[1].type = "ctr";
        slotDatas[1].count = 1;

        slotDatas[2].type = "sip";
        slotDatas[2].ip = "127.0.0.1";

        slotDatas[3].type = "fxo";

        slotDatas[4].type = "fxs";

        slotDatas[5].type = "fxs";
        slotDatas[5].count = 1;

        slotDatas[6].type = "t1s";

        slotDatas[7].type = "roip";

        slotDatas[8].type = "roip";
        slotDatas[8].count = 1;

        slotDatas[9].type = "mag";

        slotDatas[10].type = "record";
        //status = 0;//0:none(dark), 1:exist(y blink) ,2: ready(y), 3:paraSet loaded(green blink), 4:pbx run(g), 5:error(red)
        slotDatas[0].status = 1;
        slotDatas[1].status = 2;
        slotDatas[2].status = 3;
        slotDatas[3].status = 4;
        slotDatas[4].status = 5;
        slotDatas[0].inf = "系統啟動中";
        slotDatas[1].inf = "系統啟動完成";
        slotDatas[2].inf = "載入使用者設定";
        slotDatas[3].inf = "裝置功能備便";
        slotDatas[4].inf = "板卡異常";
         */
 /*
        ExStatus exSt0 = new ExStatus("102");
        exSt0.status = 1;
        exStatusMap.put(exSt0.name, exSt0);
        ExStatus exSt1 = new ExStatus("104");
        exSt1.status = 2;
        exStatusMap.put(exSt1.name, exSt1);
        ExStatus exSt2 = new ExStatus("106");
        exSt2.status = 3;
        exSt2.callWith = "102";
        exStatusMap.put(exSt2.name, exSt2);
         */
    }
}

class IcsTm1 implements ActionListener {

    String str;
    Ics cla;
    File file;
    FileInputStream reader;
    int secBaseTime = 0;
    int tm1Cnt = 0;
    int tm1Buf = 0;
    int tm1Flag = 0;
    int secCnt = 0;

    IcsTm1(Ics owner) {
        cla = owner;
    }

    public void commandPrg() {
        try {
            String[] strA = cla.commandStr.split("#");
            switch (strA[0]) {
                case "selfTest":
                    break;
            }

        } catch (Exception ex) {
            Logger.getLogger(UartTestTm1.class.getName()).log(Level.SEVERE, null, ex);
            cla.commandStr = "";
        }
        cla.commandStr = "";
    }

    public void commSip(KvComm comm, HashMap<String, Object> cmds) {
        byte[] bytes = comm.serverSocket.stm.tbuf;
        int len;
        int inx = 0;
        bytes[inx++] = (byte) (cla.myDeviceId & 255);
        bytes[inx++] = (byte) ((cla.myDeviceId >> 8) & 255);
        bytes[inx++] = (byte) (cla.mySerialId & 255);
        bytes[inx++] = (byte) ((cla.mySerialId >> 8) & 255);
        //==================================================================================
        for (String key : cmds.keySet()) {
            String[] strA = key.split("#");
            Object obj = cmds.get(key);
            if (strA[0].equals("click")) {
                bytes[inx++] = (byte) (0xAB);//dataId
                bytes[inx++] = (byte) (0);//flags
                len = 10;
                bytes[inx++] = (byte) (len & 255);
                bytes[inx++] = (byte) ((len >> 8) & 255);
                int cmdInx = 0x1000;    //tick
                bytes[inx++] = (byte) (cmdInx & 255);
                bytes[inx++] = (byte) ((cmdInx >> 8) & 255);
                String[] strB = GB.nowIp_str.split("\\.");
                int para0 = Integer.parseInt(strB[0]) + Integer.parseInt(strB[1]) * 256;
                int para1 = Integer.parseInt(strB[2]) + Integer.parseInt(strB[3]) * 256;
                int para2 = comm.serverSocket.port;
                int para3 = 0x00;
                bytes[inx++] = (byte) (para0 & 255);
                bytes[inx++] = (byte) ((para0 >> 8) & 255);
                bytes[inx++] = (byte) (para1 & 255);
                bytes[inx++] = (byte) ((para1 >> 8) & 255);
                bytes[inx++] = (byte) (para2 & 255);
                bytes[inx++] = (byte) ((para2 >> 8) & 255);
                bytes[inx++] = (byte) (para3 & 255);
                bytes[inx++] = (byte) ((para3 >> 8) & 255);

            }
            if (strA[0].equals("keyIn")) {
                String keyInStr = (String) obj;
                byte[] byteArray = keyInStr.getBytes();
                bytes[inx++] = (byte) (0xAB);//dataId
                bytes[inx++] = (byte) (0);//flags
                len = byteArray.length + 2;
                bytes[inx++] = (byte) (len & 255);
                bytes[inx++] = (byte) ((len >> 8) & 255);
                int cmdInx = 0x1001;    //keyIn comman
                bytes[inx++] = (byte) (cmdInx & 255);
                bytes[inx++] = (byte) ((cmdInx >> 8) & 255);
                for (int i = 0; i < byteArray.length; i++) {
                    bytes[inx++] = byteArray[i];
                }
                cmds.remove(key);
                break;
            }

            if (strA[0].equals("callNumber")) {
                String commandStr = (String) obj;
                byte[] byteArray = commandStr.getBytes();
                bytes[inx++] = (byte) (0xAB);//dataId
                bytes[inx++] = (byte) (0);//flags
                len = byteArray.length + 2;
                bytes[inx++] = (byte) (len & 255);
                bytes[inx++] = (byte) ((len >> 8) & 255);
                int cmdInx = 0x1002;    //call number
                bytes[inx++] = (byte) (cmdInx & 255);
                bytes[inx++] = (byte) ((cmdInx >> 8) & 255);
                for (int i = 0; i < byteArray.length; i++) {
                    bytes[inx++] = byteArray[i];
                }
                cmds.remove(key);
                break;
            }

        }
        comm.serverSocket.stm.tbuf_byte = inx;
        comm.serverSocket.tx_startMode = "txIpStm";
    }

    public void emuPrg() {
    }

    @Override
    public void actionPerformed(ActionEvent evt) {
        secBaseTime++;
        if (secBaseTime > 20) {
            secBaseTime = 0;
            secCnt += 1;

        }
        tm1Cnt++;
        tm1Flag = tm1Cnt ^ tm1Buf;
        tm1Buf = tm1Cnt;

        for (String key : GB.connectMap.keySet()) {
            ConnectCla conObj = GB.connectMap.get(key);
            if (conObj == null) {
                continue;
            }
            conObj.time++;
            if (conObj.time >= conObj.timeTh) {
                GB.connectMap.remove(key);
                break;
            }
        }

        /*
        for (String key : cla.icsData.exStatusMap.keySet()) {
            ExStatus exObj = (ExStatus) cla.icsData.exStatusMap.get(key);
            if(exObj.status<2)
                continue;
            if (exObj.status != exObj.preStatus) {
                int chg = exObj.preStatus * 16 + exObj.status;
                exObj.preStatus = exObj.status;
                if (chg == 0x24) {
                    Root.log(1, "Extension " + key + " dial to " + exObj.callWith + ".");
                    continue;
                }
                if (chg == 0x43) {
                    Root.log(1, "Extension " + key + " connect to " + exObj.callWith + ".");
                    continue;
                }
                if (chg == 0x32) {
                    Root.log(1, "Extension " + key + " disconnect.");
                    continue;
                }
            }
        }
         */
        try {
            String icsUiSet = cla.paraSetMap.get("icsUiSet").toString();
            String[] strA = icsUiSet.split("~");
            if (cla.mainSoftPhone_exist_f != 0) {
                cla.sip0Comm.serverSocket.tx_ip = strA[1];
                cla.sip0Comm.serverSocket.tx_port = cla.mainSoftPhone_port;
                cla.sip0Commands.put("click", 0);
                if (cla.sip0Comm.serverSocket.tx_startMode.length() == 0) {
                    commSip(cla.sip0Comm, cla.sip0Commands);
                    cla.icsData.sipData0.connectTime++;
                    if (cla.icsData.sipData0.connectTime == 10) {
                        cla.icsData.sipData0.sipStatus = "中山科學研究院";
                        cla.icsData.sipData0.sipAction = "軟體電話 (未連線)";
                    }
                }

            }

            if (cla.subSoftPhone_exist_f != 0) {
                cla.sip1Comm.serverSocket.tx_ip = strA[2];
                cla.sip1Comm.serverSocket.tx_port = cla.subSoftPhone_port;
                cla.sip1Commands.put("click", 0);
                if (cla.sip1Comm.serverSocket.tx_startMode.length() == 0) {
                    commSip(cla.sip1Comm, cla.sip1Commands);
                    cla.icsData.sipData1.connectTime++;
                    if (cla.icsData.sipData1.connectTime == 10) {
                        cla.icsData.sipData1.sipStatus = "中山科學研究院";
                        cla.icsData.sipData1.sipAction = "軟體電話 (未連線)";
                    }
                }
            }
            
            if (cla.monitorPhone_exist_f != 0) {
                cla.sip2Comm.serverSocket.tx_ip = strA[3];
                cla.sip2Comm.serverSocket.tx_port = cla.subSoftPhone_port;
                cla.sip2Commands.put("click", 0);
                if (cla.sip2Comm.serverSocket.tx_startMode.length() == 0) {
                    commSip(cla.sip2Comm, cla.sip2Commands);
                    cla.icsData.sipData2.connectTime++;
                    if (cla.icsData.sipData2.connectTime == 10) {
                        cla.icsData.sipData2.sipStatus = "中山科學研究院";
                        cla.icsData.sipData2.sipAction = "軟體電話 (未連線)";
                    }
                }
            }
            
            
            commandPrg();
        } catch (Exception ex) {
            System.out.println("ics tm1 error !!!");
        }

    }
}

class IcsUartC {

    String name;
    SerialPort uartPort;
    int seted_f = 0;
    CommPortSender uartTx;
    CommPortReceiver uartRx;
    String portStr = "1";
    String boudrateStr = "115200";
    String parityStr = "None";//Noen | Even | Odd
    public BytesCallback cbk;

    IcsUartC(String _name) {
        name = _name;
    }

    void setCallBack(BytesCallback callBackPrg) {
        cbk = callBackPrg;
    }

    public static String listUart() {
        String comName;
        SerialPort[] ports = SerialPort.getCommPorts();
        String str = "";
        for (int i = 0; i < ports.length; i++) {
            SerialPort sp = ports[i];
            comName = sp.getSystemPortName();
            if (i != 0) {
                str += ",";
            }
            str += comName;
        }
        return str;
    }

    public String setUart() {
        String errStr = null;
        try {
            closeUart();
            int sys232Port = Lib.str2int(portStr, 1);
            int sys232DataBit = 8;
            int sys232Boudrate = Lib.str2int(boudrateStr, 115200);
            String comErr = openUart("COM" + sys232Port, parityStr, sys232Boudrate);
            return comErr;
        } catch (Exception ex) {
            String comErr = "userSet.json Formate Error !!!";
            return comErr;
        }
    }

    public void closeUart() {
        if (uartPort != null) {
            uartRx.terminate();
            Lib.thSleep(10);
            uartPort.setComPortTimeouts(SerialPort.TIMEOUT_NONBLOCKING, 0, 0);
            uartPort.removeDataListener();
            boolean result = uartPort.closePort();
            uartPort = null;
            seted_f = 0;
        }
    }

    public String openUart(String portName, String Parity, int boudrate) {
        String comName;
        SerialPort[] ports = SerialPort.getCommPorts();
        seted_f = 0;
        if (ports.length == 0) {
            return "Uart1: No serial ports available!";
        }
        int portToUse = -1;
        for (int i = 0; i < ports.length; i++) {
            SerialPort sp = ports[i];
            comName = sp.getSystemPortName();//.toLowerCase();
            if (comName.equals(portName)) {
                portToUse = i;
                break;
            }
        }
        if (portToUse < 0) {
            return "Uart1: No this port on this system!";
        }
        int parity = SerialPort.NO_PARITY;
        if (Parity.equals("Even")) {
            parity = SerialPort.EVEN_PARITY;
        }
        if (Parity.equals("Odd")) {
            parity = SerialPort.ODD_PARITY;
        }
        uartPort = ports[portToUse];
        uartPort.setFlowControl(SerialPort.FLOW_CONTROL_DISABLED);
        uartPort.setComPortParameters(boudrate, 8, SerialPort.ONE_STOP_BIT, parity);
        //serialPort.setComPortTimeouts(SerialPort.TIMEOUT_READ_BLOCKING | SerialPort.TIMEOUT_WRITE_BLOCKING, 0, 0);
        //serialPort.setComPortTimeouts(SerialPort.TIMEOUT_NONBLOCKING, 0, 0);
        //logger.debug("Going to open the port...");
        boolean result = uartPort.openPort();
        if (result) {
            uartTx = new CommPortSender();
            uartTx.setWriterStream(uartPort.getOutputStream());
            // setup serial port reader
            uartRx = new CommPortReceiver(uartPort.getInputStream());
            uartRx.setCallBack((bytes, len) -> rxPrg(bytes, len));
            uartRx.start();
            seted_f = 1;
        } else {
            seted_f = 0;
            uartPort = null;
            return "Uart1: This port is in used !!!";
        }
        return null;
    }

    String rxPrg(byte[] bts, int len) {
        if (cbk != null) {
            cbk.prg(bts, len);
        }
        return null;
    }

}

class ServerReturnC {

    byte[] buf;
    int len = 0;
    int tx_f = 0;
    int size = 0;

    ServerReturnC(int _size) {
        size = _size;
        buf = new byte[size];
    }
}

class SipData {

    int ioBuf;
    byte phoneSta;
    byte connectSta;
    byte handStatus;
    byte earSpeakerVol;
    byte phsetSpeakerVol;
    byte earMicSens;
    byte phsetMicSens;
    int sipFlag;
    String sipStatus;
    String sipAction;
    String callto;
    String callfrom;
    int connectTime = 0;

    SipData() {
        ioBuf = 0;
        phoneSta = 0x00;
        connectSta = 0x00;
        handStatus = 0x00;
        earSpeakerVol = 0x00;
        phsetSpeakerVol = 0x00;
        earMicSens = 0x00;
        phsetMicSens = 0x00;
        sipFlag = 0x00;
        sipStatus = "中山科學研究院";
        sipAction = "軟體電話 (未連線)";
        callto = "callto";
        callfrom = "callfrom";
    }
}

//status = 0;//0:none(dark), 1:exist(y blink) ,2: ready(y), 3:paraSet loaded(green blink), 4:pbx run(g), 5:error(red)
class SlotData {

    int exist_f = 0;
    String type;
    int count = 0;
    int status = 0;
    String inf = "";
    String softVer = GB.version;
    String firmVer = "0.0";
    String startTime = GB.startTime;
    String action = "";
    int acted_f = 0;
    String ip = "";
    int port = 23500;
    String command = "";
    String exInf = "";
    int connectTime = 0;

    SlotData() {
        type = "";
        startTime = GB.startTime;
    }
}

class ExStatus {

    public String name;
    public int status = 0;//0:unknow, 1:login, 2:register 3:connected, 4:dialing, 5:ringing
    public String callWith = "";
    public int preStatus = 0;

    ExStatus(String _noStr) {
        name = _noStr;
    }
}
