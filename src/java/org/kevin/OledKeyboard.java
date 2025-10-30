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

import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import javax.swing.Timer;

import java.util.logging.Level;
import java.util.logging.Logger;
import org.eclipse.paho.client.mqttv3.IMqttDeliveryToken;
import org.eclipse.paho.client.mqttv3.MqttCallback;
import org.eclipse.paho.client.mqttv3.MqttClient;
import org.eclipse.paho.client.mqttv3.MqttConnectOptions;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.eclipse.paho.client.mqttv3.persist.MemoryPersistence;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 *
 * @author Administrator
 */
public class OledKeyboard {

    SerialPort uart1;
    int uart1Seted_f = 0;
    int uart1Connected_f = 0;
    CommPortSender uart1Tx;
    CommPortReceiver uart1Rx;
    int myDeviceId = 0x2303;
    int mySerialId = 0x0000;
    int devicePiioId = 0x2301;
    int devicePic24epId = 0x2300;

    int utxPackCnt = 0;
    int utxErrCnt = 0;
    int utxRecOk = 0;

    int sockUart_f = 1;

    Timer tm1 = null;
    public String errStr = "";
    public String okStr = "";
    public int errCnt = 0;
    int debug = 0;
    OledKeyboard cla;
    String commandStr = "";
    String[] commandParas = new String[10];
    int commandStep = 0;
    int commandTime = 0;
    int commandTimer = 0;
    int commandTimer_th = 0;
    String fullDir = "";

    Ssocket socketServer1;
    int socketServer1Port = 8324;

    byte[] sockUart0_buf = new byte[4096];
    int sockUart0_len = 0;
    int sockUart0_tx_f = 0;
    UartTestTm1 uartTestTm1;

    public OledKeyboard() {
        cla = this;
        if (tm1 == null) {
            uartTestTm1 = new UartTestTm1(cla);
            tm1 = new Timer(10, uartTestTm1);  //about 30ms 
            tm1.start();
        }
        openSock();
    }

    /*
    static JSONObject wsCallBack(JSONObject mesJson, String actStr, JSONObject outJson) {
        Sync cla = Sync.scla;
        JSONObject valueJson;
        Object obj;

        String[] strA=actStr.split("#");
        try {
            switch (strA[0]) {
                case "tick":
                obj = getJson(webSockOutJson, "serialTime");
                int serialTime = (int) obj;
                serialTime++;
                serialTime = serialTime % 10000;
                putJson(webSockOutJson, "serialTime", serialTime);
                if (WebSocketConn.retCommand.length() > 0) {
                    putJson(webSockOutJson, "retCommand", WebSocketConn.retCommand);
                }
                JSONObject outJson = new JSONObject();
                putJson(outJson, "act", "callBack");
                putJson(outJson, "value", webSockOutJson.toString());
                if (GB.webRetStr.length() != 0) {
                    putJson(outJson, "sockValue", GB.webRetStr);
                    GB.webRetStr = "";
                }
                session.getBasicRemote().sendText(outJson.toString());
                return;
                    
                    
                    
                    
                    HashMap<String, String> strMap = cla.fpgaData.transToStringMap();
                    JSONObject jobj = new JSONObject(strMap);
                    outJson.put("fpgaDatas", jobj.toString());
                    break;
                case "selfTest":
                case "selfTestAllStop":
                    outJson.put("status","OK");
                    outJson.put("message","Command Has Received");
                    cla.fpgaCommandPrg(actStr);
                    //valueJson = new JSONObject();
                    //outJson.put("value",valueJson.toString());
                    break;
                default:
                    outJson.put("status","ERROR");
                    outJson.put("message","No This Command");
                    //valueJson = new JSONObject();
                    //outJson.put("value",valueJson.toString());
                   break;     
            }
        } catch (Exception ex) {

        }

        return outJson;
    }
    
     */
    void load_testStmTx(MyStm stm) {
        int inx = 0;
        //=========================================================
        sockUart0_buf[inx++] = (byte) (devicePic24epId & 255);
        sockUart0_buf[inx++] = (byte) ((devicePic24epId >> 8) & 255);
        sockUart0_buf[inx++] = (byte) (0x00);//serial id
        sockUart0_buf[inx++] = (byte) (0x00);//serial id
        //=========================================================
        sockUart0_buf[inx++] = (byte) (0x00);//system
        sockUart0_buf[inx++] = (byte) (0x00);//flag
        sockUart0_buf[inx++] = (byte) (0x02);//len low
        sockUart0_buf[inx++] = (byte) (0x02);//len high
        //========================================================
        sockUart0_buf[inx++] = (byte) (0x0d);//test pack
        sockUart0_buf[inx++] = (byte) (0x00);//system
        for (int i = 0; i < 512; i++) {
            sockUart0_buf[inx++] = (byte) (i & 255);

        }
        sockUart0_len = inx;
        sockUart0_tx_f = 1;
        int stx_index = 0;
        stm.tbuf[stx_index++] = (byte) ((devicePiioId) & 255);
        stm.tbuf[stx_index++] = (byte) ((devicePiioId >> 8) & 255);
        stm.tbuf[stx_index++] = (byte) (255);
        stm.tbuf[stx_index++] = (byte) (255);
        if (sockUart0_tx_f == 1) {
            stm.tbuf[stx_index++] = (byte) (0x10);//uart0
            stm.tbuf[stx_index++] = (byte) (0x00);//flag
            stm.tbuf[stx_index++] = (byte) (sockUart0_len & 255);//len low byte
            stm.tbuf[stx_index++] = (byte) ((sockUart0_len >> 8) & 255);//len high byte
            for (int i = 0; i < sockUart0_len; i++) {
                stm.tbuf[stx_index++] = sockUart0_buf[i];
            }
        }
        stm.tbuf_byte = stx_index;
    }

    void decSockrxUart0(byte[] bts, int inx, int len) {
        int flags;
        int cmdLen;
        int deviceId = (bts[inx + 1] & 255) * 256 + (bts[inx + 0] & 255);
        if (deviceId != myDeviceId && deviceId != 0xffff) {
            return;
        }
        int serialId = (bts[inx + 3] & 255) * 256 + (bts[inx + 2] & 255);
        if (serialId != mySerialId && serialId != 0xffff) {
            return;
        }
        inx += 4;
        while ((inx + 4) <= len) {
            flags = (bts[inx + 0] & 255) + (bts[inx + 1] & 255) * 256;
            cmdLen = (bts[inx + 2] & 255) + (bts[inx + 3] & 255) * 256;
            //=========================================================
            u1rxPrg(bts, inx + 4, cmdLen);
            //=========================================================
            inx += cmdLen + 4;
        }
    }

    public void socketServer1Return() {
        MyStm stm = socketServer1.stm;
        int stx_index = 0;
        stm.tbuf[stx_index++] = (byte) ((devicePiioId) & 255);
        stm.tbuf[stx_index++] = (byte) ((devicePiioId >> 8) & 255);
        stm.tbuf[stx_index++] = (byte) (255);
        stm.tbuf[stx_index++] = (byte) (255);
        if (sockUart0_tx_f == 1) {
            sockUart0_tx_f = 0;
            stm.tbuf[stx_index++] = (byte) (0x10);//uart0
            stm.tbuf[stx_index++] = (byte) (0x00);//flag
            stm.tbuf[stx_index++] = (byte) (sockUart0_len & 255);//len low byte
            stm.tbuf[stx_index++] = (byte) ((sockUart0_len >> 8) & 255);//len high byte
            for (int i = 0; i < sockUart0_len; i++) {
                stm.tbuf[stx_index++] = sockUart0_buf[i];
            }
        } else {
            stm.tbuf[stx_index++] = (byte) (0x00);//system
            stm.tbuf[stx_index++] = (byte) (0x00);//flag
            stm.tbuf[stx_index++] = (byte) (0x0002 & 255);//len low byte
            stm.tbuf[stx_index++] = (byte) ((0x0002 >> 8) & 255);//len high byte
            stm.tbuf[stx_index++] = (byte) (0x000e & 255);//no data
            stm.tbuf[stx_index++] = (byte) ((0x000e >> 8) & 255);//no data
        }
        stm.tbuf_byte = stx_index;
        socketServer1.txReturn();
    }

    public void openSock() {
        socketServer1 = new Ssocket();
        socketServer1.format = 1;
        socketServer1.rxcon_ltim = 100;//unit 10ms
        socketServer1.stm.setCallBack(new BytesCallback() {
            @Override
            public String prg(byte[] bytes, int len) {

                int index = 0;
                int deviceId = (bytes[index + 1] & 255) * 256 + (bytes[index + 0] & 255);
                if (deviceId != myDeviceId && deviceId != 0xffff) {
                    return null;
                }
                int serialId = (bytes[index + 3] & 255) * 256 + (bytes[index + 2] & 255);
                if (serialId != mySerialId && serialId != 0xffff) {
                    return null;
                }
                int groupId = (bytes[index + 5] & 255) * 256 + (bytes[index + 4] & 255);
                int dataLen = (bytes[index + 7] & 255) * 256 + (bytes[index + 6] & 255);
                //int cmd = (bytes[index + 9] & 255) * 256 + (bytes[index + 8] & 255);
                if (groupId == 0x10)//uart
                {
                    decSockrxUart0(bytes, index + 8, index + 8 + dataLen);
                }
                if (groupId == 0x00) {
                }
                socketServer1Return();
                return null;
            }
        });

        /*
            socketServer1.sskRx = new SskRx() {
                @Override
                public void sskRx(int format) {
                    if (format == 0) {
                        String strIn = new String(socketServer1.inbuf, 0, socketServer1.inbuf_len);
                        //ta1.appendText("\nS1RX: " + strIn);
                        //socketServer1.tx_str = "This is socket 1 Return.";
                        //socketServer1.tx_port = socketServer2.port;
                        //socketServer1.tx_startMode = "txRetStr";
                        //ta1Len++;
                    } else {
                        int rxLen = socketServer1.stm.rxlen;
                        byte[] rxBytes = socketServer1.stm.rdata;
                        String strIn = "";
                        //===================================================
                        int index = 0;
                        int deviceId = (rxBytes[index + 0] & 255) * 256 + (rxBytes[index + 1] & 255);
                        if (deviceId == 0x2301) {    //piio
                            decSockrxPiio(rxBytes, 2, rxLen);
                        }
                        //====================================================
                        loadStmTx(socketServer1.stm);
                        socketServer1.txReturn();
                    }

                }
            };
         */
        socketServer1.open(socketServer1Port);

    }

    public String setUart(JSONObject cmdJso) {
        String dir = jsobjGet(cmdJso, "dir");
        String fullDir = GB.webRootPath + dir;
        cla.fullDir = fullDir;
        String userSetFile = fullDir + "/" + "userSet.json";
        String content = Lib.readStringFile(userSetFile);
        if (content == null) {
            errStr = "Open userSet.json Error !!!";
            return errStr;
        }
        JSONObject userSetJso;
        try {
            closeUart1();
            userSetJso = new JSONObject(content);
            JSONObject sysSetJso = new JSONObject(userSetJso.get("sysSet").toString());
            JSONObject sys232Jso = new JSONObject(sysSetJso.get("sys232").toString());
            int sys232Port = Lib.str2int(sys232Jso.get("port").toString(), 1);
            int sys232DataBit = Lib.str2int(sys232Jso.get("dataBit").toString(), 8);
            int sys232Boudrate = Lib.str2int(sys232Jso.get("boudrate").toString(), 115200);
            String parityStr = sys232Jso.get("parity").toString();
            int sys232StopBit = Lib.str2int(sys232Jso.get("stopBit").toString(), 1);
            String comErr = openUart1("COM" + sys232Port, parityStr, sys232Boudrate);
            if (comErr != null) {
                errStr = comErr;
                return errStr;
            }

        } catch (Exception ex) {
            ex.printStackTrace();
            errCnt = 1;
            errStr = "userSet.json Formate Error !!!";
            return errStr;
        }
        return null;
    }

    public void loadDirectSockUart(String str) {
        byte[] bts = Lib.toHexBytes(str);
        int inx = 0;
        for (int i = 0; i < bts.length; i++) {
            cla.sockUart0_buf[inx++] = bts[i];

        }
        cla.sockUart0_len = inx;
        cla.sockUart0_tx_f = 1;
    }

    public String jobjGet(JSONObject inJobj, String name, String defaultStr) {
        try {
            return inJobj.get(name).toString();
        } catch (JSONException ex) {
            return defaultStr;
        }
    }

    public String jget(JSONObject jobj, String key, String defStr) {
        try {
            String str = jobj.get(key).toString();
            return str;
        } catch (Exception ex) {
            return defStr;
        }

    }

    public boolean handleCommand(JSONObject cmdJso) {
        String retStr = "";
        retStr = jsobjGet(cmdJso, "act");
        errCnt = 0;
        switch (retStr) {
            case "rs232Start":
                if (sockUart_f == 0) {
                    errStr = setUart(cmdJso);
                    if (errStr != null) {
                        errCnt = 1;
                    }
                    break;
                }
                break;

            case "rs232Stop":
                closeUart1();
                break;
            case "resetKeyboard":
                cla.commandStr = "stopAll";
                //closeUart1();
                break;

            case "stopAction":
                cla.commandStr = "stopAll";
                //closeUart1();
                break;
            case "eraseFlash":
                if (sockUart_f == 0) {
                    errStr = setUart(cmdJso);
                    if (errStr != null) {
                        errCnt = 1;
                    }
                    break;
                }
                cla.commandStr = "eraseFlash";
                cla.commandStep = 0;
                break;

            case "eraseAllKey":
                if (sockUart_f == 0) {
                    errStr = setUart(cmdJso);
                    if (errStr != null) {
                        errCnt = 1;
                    }
                    break;
                }
                cla.commandStr = "eraseAllKey";
                cla.commandStep = 0;
                break;

            case "writeScanKey":
                if (sockUart_f == 0) {
                    errStr = setUart(cmdJso);
                    if (errStr != null) {
                        errCnt = 1;
                    }
                    break;
                }
                cla.commandStr = "writeScanKey";
                cla.commandStep = 0;
                break;

            case "setScanKey":
                if (sockUart_f == 0) {
                    errStr = setUart(cmdJso);
                    if (errStr != null) {
                        errCnt = 1;
                    }
                    break;
                }
                cla.commandStr = "setScanKey";
                cla.commandStep = 0;
                break;

            case "eraseScanKey":
                if (sockUart_f == 0) {
                    errStr = setUart(cmdJso);
                    if (errStr != null) {
                        errCnt = 1;
                    }
                    break;
                }
                cla.commandStr = "eraseScanKey";
                cla.commandStep = 0;
                break;

            case "uartTxDirect":
                String para0 = jsobjGet(cmdJso, "para0");
                if (para0 == null) {
                    return true;
                }
                loadDirectSockUart(para0);
                break;

            case "checkFlashBlank":
                if (sockUart_f == 0) {
                    errStr = setUart(cmdJso);
                    if (errStr != null) {
                        errCnt = 1;
                        break;
                    }
                }
                cla.commandStr = "checkFlashBlank";
                cla.commandStep = 0;
                break;

            case "writeFileToKeyboard":
                String dir = jsobjGet(cmdJso, "dir");
                String outFile = jsobjGet(cmdJso, "inFile");
                if (dir == null || outFile == null) {
                    return true;
                }
                String fullDir = GB.webRootPath + dir;
                cla.fullDir = fullDir;
                String userSetFile = fullDir + "/" + "userSet.json";
                String content = Lib.readStringFile(userSetFile);
                if (content == null) {
                    errCnt = 1;
                    errStr = "Open userSet.json Error !!!";
                    break;
                }
                if (sockUart_f == 0) {
                    errStr = setUart(cmdJso);
                    if (errStr != null) {
                        errCnt = 1;
                        break;
                    }
                }
                cla.commandStr = "programFlash";
                cla.commandStep = 0;
                cla.commandParas[0] = fullDir + "/flash.kvbin";
                cla.commandParas[1] = "512";//txBufSize;
                break;

            case "verifyFlash":
                dir = jsobjGet(cmdJso, "dir");
                outFile = jsobjGet(cmdJso, "inFile");
                if (dir == null || outFile == null) {
                    return true;
                }
                fullDir = GB.webRootPath + dir;
                cla.fullDir = fullDir;
                userSetFile = fullDir + "/" + "userSet.json";
                content = Lib.readStringFile(userSetFile);
                if (content == null) {
                    errCnt = 1;
                    errStr = "Open userSet.json Error !!!";
                    break;
                }
                if (sockUart_f == 0) {
                    errStr = setUart(cmdJso);
                    if (errStr != null) {
                        errCnt = 1;
                        break;
                    }
                }
                cla.commandStr = "verifyFlash";
                cla.commandStep = 0;
                cla.commandParas[0] = fullDir + "/flash.kvbin";
                cla.commandParas[1] = "512";//txBufSize;
                break;

            case "zipDirToFlashFile":
                dir = jsobjGet(cmdJso, "dir");
                outFile = jsobjGet(cmdJso, "outFile");
                if (dir == null || outFile == null) {
                    return true;
                }
                fullDir = GB.webRootPath + dir;
                userSetFile = fullDir + "/" + "userSet.json";
                content = Lib.readStringFile(userSetFile);
                if (content == null) {
                    errCnt = 1;
                    errStr = "Open userSet.json Error !!!";
                    break;
                }
                /*
                    byte[0:3]=oledKbId=0xabcd0000 H2L 
                    byte[4:7]=kbCount=0~7   L2H
                
                 */
                int seg4kInx = 0;
                byte[] bufBytes = new byte[256 * 256 * 256];//128Mbit,inxOffset 4byte        
                int dymAddr = 0x00010000;

                while (seg4kInx < 8) {
                    for (int i = 0; i < 4096; i++) {
                        bufBytes[seg4kInx * 4096 + i] = (byte) 0x00;
                    }
                    seg4kInx++;
                }
                int bInx = 0;
                int oledKbId = 0xabcd0001;
                bufBytes[bInx++] = (byte) ((oledKbId >> 24) & 255);
                bufBytes[bInx++] = (byte) ((oledKbId >> 16) & 255);
                bufBytes[bInx++] = (byte) ((oledKbId >> 8) & 255);
                bufBytes[bInx++] = (byte) ((oledKbId) & 255);
                int kbCnt = 0;

                try {
                    JSONObject userSetJso = new JSONObject(content);
                    JSONObject sysSetJso = new JSONObject(userSetJso.get("sysSet").toString());
                    JSONObject optsSetJso = new JSONObject(userSetJso.get("optsSet").toString());
                    String defaultKbName = optsSetJso.get("Model~Md_keyboardOled~typeSet").toString();
                    byte[] bytes = defaultKbName.getBytes();
                    for (int i = 0; i < defaultKbName.length(); i++) {
                        if (i >= 32) {
                            break;
                        }
                        bufBytes[0x20 + i] = bytes[i];
                    }
                    JSONObject rs422ch1 = new JSONObject(sysSetJso.get("rs422Ch1").toString());
                    JSONObject rs422ch2 = new JSONObject(sysSetJso.get("rs422Ch2").toString());
                    JSONObject usbcom = new JSONObject(sysSetJso.get("usbcom").toString());
                    JSONObject rs232 = new JSONObject(sysSetJso.get("rs232").toString());
                    for (int i = 0; i < 4; i++) {
                        JSONObject tmpObj = rs422ch1;
                        if (i == 1) {
                            tmpObj = rs422ch2;
                        }
                        if (i == 2) {
                            tmpObj = usbcom;
                        }
                        if (i == 3) {
                            tmpObj = rs232;
                        }
                        int rs232Port = 1;
                        int rs232DataBit = 8;
                        String actionStr = jobjGet(tmpObj, "action", "Disable");
                        int action = 0;
                        if (actionStr.equals("Enable")) {
                            action = 1;
                        }

                        String boudrateStr = jobjGet(tmpObj, "boudrate", "9600");
                        int rs232Boudrate = Lib.str2int(boudrateStr, 9600);
                        String parityStr = jobjGet(tmpObj, "parity", "None");
                        int rs232Parity = 0;
                        if (parityStr.equals("Odd")) {
                            rs232Parity = 1;
                        }
                        if (parityStr.equals("Even")) {
                            rs232Parity = 2;
                        }
                        String stopBitStr = jobjGet(tmpObj, "stopBit", "1");
                        int rs232StopBit = Lib.str2int(stopBitStr, 1);
                        String packageTypeStr = jobjGet(tmpObj, "packageType", "0");
                        int packageType = Lib.str2int(packageTypeStr, 0);
                        int offInx = 0x40 + 16 * i;
                        bufBytes[offInx + 0] = (byte) rs232Port;
                        bufBytes[offInx + 1] = (byte) rs232DataBit;
                        bufBytes[offInx + 2] = (byte) (rs232Boudrate & 255);
                        bufBytes[offInx + 3] = (byte) ((rs232Boudrate >> 8) & 255);
                        bufBytes[offInx + 4] = (byte) ((rs232Boudrate >> 16) & 255);
                        bufBytes[offInx + 5] = (byte) ((rs232Boudrate >> 24) & 255);
                        bufBytes[offInx + 6] = (byte) rs232Parity;
                        bufBytes[offInx + 7] = (byte) rs232StopBit;
                        bufBytes[offInx + 8] = (byte) packageType;
                        bufBytes[offInx + 9] = (byte) action;
                    }

                    JSONObject oledKbSetJso = new JSONObject(optsSetJso.get("Model~Md_keyboardOled").toString());
                    ImageHandle ihd = new ImageHandle();
                    Iterator<?> keys = oledKbSetJso.keys();
                    while (keys.hasNext()) {
                        String kbName = (String) keys.next();
                        if (kbName.equals("sys")) {
                            continue;
                        }
                        int headAddr = kbCnt * 8192 + 0x1000;
                        kbCnt++;
                        bufBytes[4] = (byte) (kbCnt);
                        JSONObject kbOptsJso = new JSONObject(oledKbSetJso.get(kbName).toString());
                        //===================================================================================
                        byte[] kbNameBytes = kbName.getBytes();
                        for (int i = 0; i < kbNameBytes.length; i++) {
                            if (i >= 32) {
                                break;
                            }
                            bufBytes[headAddr + i] = kbNameBytes[i];
                        }
                        headAddr += 32;
                        //===================================================================================
                        /*
                        JSONObject rs232Jso = new JSONObject(kbOptsJso.get("rs232").toString());
                        int rs232Port = Lib.str2int(rs232Jso.get("port").toString(), 1);
                        int rs232DataBit = Lib.str2int(rs232Jso.get("dataBit").toString(), 8);
                        int rs232Boudrate = Lib.str2int(rs232Jso.get("boudrate").toString(), 115200);
                        String parityStr = rs232Jso.get("parity").toString();
                        int rs232Parity = 0;
                        if (parityStr.equals("Odd")) {
                            rs232Parity = 1;
                        }
                        if (parityStr.equals("Even")) {
                            rs232Parity = 2;
                        }
                        int rs232StopBit = Lib.str2int(rs232Jso.get("stopBit").toString(), 1);
                         */

                        int dimIncKeyInx = Lib.str2int(kbOptsJso.get("dimIncKeyInx").toString(), 0);
                        int dimDecKeyInx = Lib.str2int(kbOptsJso.get("dimDecKeyInx").toString(), 0);
                        int testKeyInx = Lib.str2int(kbOptsJso.get("testKeyInx").toString(), 0);
                        int stopKeyInx = Lib.str2int(kbOptsJso.get("stopKeyInx").toString(), 0);

                        bufBytes[headAddr + 0] = (byte) 1;
                        bufBytes[headAddr + 1] = (byte) 8;
                        bufBytes[headAddr + 2] = (byte) (9600 & 255);
                        bufBytes[headAddr + 3] = (byte) ((9600 >> 8) & 255);
                        bufBytes[headAddr + 4] = (byte) ((9600 >> 16) & 255);
                        bufBytes[headAddr + 5] = (byte) ((9600 >> 24) & 255);
                        bufBytes[headAddr + 6] = (byte) 0;
                        bufBytes[headAddr + 7] = (byte) 1;
                        bufBytes[headAddr + 8] = (byte) dimIncKeyInx;
                        bufBytes[headAddr + 9] = (byte) dimDecKeyInx;
                        bufBytes[headAddr + 10] = (byte) testKeyInx;
                        bufBytes[headAddr + 11] = (byte) stopKeyInx;
                        headAddr += 32;
                        //===================================================================================
                        JSONArray switchKbA = new JSONArray(kbOptsJso.get("switchKb").toString());
                        int swKbLen = switchKbA.length();
                        if (swKbLen > 4) {
                            swKbLen = 4;
                        }
                        for (int i = 0; i < swKbLen; i++) {
                            JSONObject switchKbJso = new JSONObject(switchKbA.get(i).toString());
                            int keyIndex = (int) switchKbJso.get("keyIndex");
                            bufBytes[headAddr + i * 32] = (byte) (keyIndex & 255);
                            String kbdName = (String) switchKbJso.get("kbName");
                            kbNameBytes = kbdName.getBytes();
                            for (int j = 1; j < kbNameBytes.length; j++) {
                                if (j >= 32) {
                                    break;
                                }
                                bufBytes[headAddr + (i * 32) + j] = kbNameBytes[i];
                            }
                        }
                        headAddr += 7 * 32;

                        //===================================================================================
                        JSONArray kcodeObjsA = new JSONArray(kbOptsJso.get("keycodeObjs").toString());
                        for (int i = 0; i < kcodeObjsA.length(); i++) {
                            int keyHeadAddr = headAddr + i * 64;
                            String kcType = "HEX";
                            String[] kcStrA = new String[20];
                            int outputM = 0;
                            int outputPort = 0;
                            int serialType = 0;
                            for (int j = 0; j < 20; j++) {
                                kcStrA[j] = "";
                            }
                            JSONObject kcodeObj = new JSONObject(kcodeObjsA.get(i).toString());
                            kcType = jget(kcodeObj, "type", "ASCII");
                            //====================    
                            kcStrA[0] = jget(kcodeObj, "pressCode", "");
                            kcStrA[1] = jget(kcodeObj, "releaseCode", "");
                            kcStrA[2] = jget(kcodeObj, "continueCode", "");;
                            kcStrA[3] = jget(kcodeObj, "codePage0", "");;
                            kcStrA[4] = jget(kcodeObj, "codePage1", "");;
                            kcStrA[5] = jget(kcodeObj, "codePage2", "");
                            kcStrA[6] = jget(kcodeObj, "imagePage0", "");
                            kcStrA[7] = jget(kcodeObj, "imagePage1", "");
                            kcStrA[8] = jget(kcodeObj, "imagePage2", "");
                            kcStrA[9] = jget(kcodeObj, "codePage3", "");
                            kcStrA[10] = jget(kcodeObj, "codePage4", "");
                            kcStrA[11] = jget(kcodeObj, "codePage5", "");
                            kcStrA[12] = jget(kcodeObj, "codePage6", "");
                            kcStrA[13] = jget(kcodeObj, "codePage7", "");
                            kcStrA[14] = jget(kcodeObj, "imagePage3", "");
                            kcStrA[15] = jget(kcodeObj, "imagePage4", "");
                            kcStrA[16] = jget(kcodeObj, "imagePage5", "");
                            kcStrA[17] = jget(kcodeObj, "imagePage6", "");
                            kcStrA[18] = jget(kcodeObj, "imagePage7", "");
                            String outModeStr = jget(kcodeObj, "outputMode", "");
                            String outPortStr = jget(kcodeObj, "outputPort", "");
                            String serialTypeStr = jget(kcodeObj, "serialType", "");
                            outputM = 0;
                            if (outModeStr.equals("反轉")) {
                                outputM = 1;
                            }
                            if (outModeStr.equals("設定")) {
                                outputM = 2;
                            }
                            if (outModeStr.equals("清除")) {
                                outputM = 3;
                            }

                            outputPort = Lib.str2int(outPortStr, 0);
                            serialType = 0;

                            if (serialTypeStr.equals("RS422 CH2")) {
                                serialType = 1;
                            }
                            if (serialTypeStr.equals("USB COM")) {
                                serialType = 2;
                            }
                            if (serialTypeStr.equals("RS232")) {
                                serialType = 3;
                            }

                            int empty_f = 1;
                            for (int j = 0; j < 19; j++) {
                                if (kcStrA[j].length() != 0) {
                                    empty_f = 0;
                                    break;
                                }
                            }
                            if (empty_f == 1) {
                                continue;
                            }
                            //======================================================
                            //key address head size 32 byte
                            //0xAB,0xCD,(ASCII HEX,0 1)
                            //(pressCodeAdr 3B L2H),(releaseCodeAdr 3B L2H),(continueCodeAdr 3B L2H)
                            //(codePage0 3B L2H),(codePage1 3B L2H),(codePage2 3B L2H)
                            //(imagePage0 3B L2H),(imagePage1 3B L2H),(imagePage2 3B L2H)

                            bufBytes[keyHeadAddr + 0] = (byte) 0xAB;
                            bufBytes[keyHeadAddr + 1] = (byte) 0xCD;
                            if (kcType.equals("HEX")) {
                                bufBytes[keyHeadAddr + 2] = (byte) 1;
                            } else {
                                bufBytes[keyHeadAddr + 2] = (byte) 0;
                            }
                            byte[] bts;
                            String tmpStr = "";

                            for (int j = 0; j < 6; j++) {
                                bufBytes[keyHeadAddr + 3 + j * 3 + 0] = (byte) (0);
                                bufBytes[keyHeadAddr + 3 + j * 3 + 1] = (byte) (0);
                                bufBytes[keyHeadAddr + 3 + j * 3 + 2] = (byte) (0);
                                tmpStr = kcStrA[j];
                                bts = Lib.toBytes(tmpStr, kcType);
                                if (bts == null) {
                                    continue;
                                }
                                bufBytes[keyHeadAddr + 3 + j * 3 + 0] = (byte) ((dymAddr >> 2) & 255);
                                bufBytes[keyHeadAddr + 3 + j * 3 + 1] = (byte) ((dymAddr >> 10) & 255);
                                bufBytes[keyHeadAddr + 3 + j * 3 + 2] = (byte) ((dymAddr >> 18) & 255);
                                bufBytes[dymAddr++] = (byte) ((bts.length) & 255);
                                bufBytes[dymAddr++] = (byte) ((bts.length >> 8) & 255);
                                for (int k = 0; k < bts.length; k++) {
                                    bufBytes[dymAddr++] = bts[k];
                                }
                                if ((dymAddr & 3) != 0) {
                                    dymAddr &= 0xfffffffc;
                                    dymAddr += 4;
                                }
                            }

                            for (int j = 0; j < 3; j++) {
                                tmpStr = kcStrA[j + 6];
                                if (tmpStr.length() == 0) {
                                    continue;
                                }
                                String fileName = GB.webRootPath + tmpStr;
                                int btSize = ihd.transBmpToBytes(fileName, 128, 128, bufBytes, dymAddr);
                                if (btSize == 0) {
                                    continue;
                                }
                                bufBytes[keyHeadAddr + 21 + j * 3 + 0] = (byte) ((dymAddr >> 2) & 255);
                                bufBytes[keyHeadAddr + 21 + j * 3 + 1] = (byte) ((dymAddr >> 10) & 255);
                                bufBytes[keyHeadAddr + 21 + j * 3 + 2] = (byte) ((dymAddr >> 18) & 255);
                                dymAddr += btSize;
                                if ((dymAddr & 3) != 0) {
                                    dymAddr &= 0xfffffffc;
                                    dymAddr += 4;
                                }
                            }
                            bufBytes[keyHeadAddr + 31] = (byte) (serialType * 64 + outputM * 16 + outputPort);
                            //=========================================================================

                            for (int j = 0; j < 5; j++) {
                                bufBytes[keyHeadAddr + 32 + j * 3 + 0] = (byte) (0);
                                bufBytes[keyHeadAddr + 32 + j * 3 + 1] = (byte) (0);
                                bufBytes[keyHeadAddr + 32 + j * 3 + 2] = (byte) (0);
                                tmpStr = kcStrA[j + 9];
                                bts = Lib.toBytes(tmpStr, kcType);
                                if (bts == null) {
                                    continue;
                                }
                                bufBytes[keyHeadAddr + 32 + j * 3 + 0] = (byte) ((dymAddr >> 2) & 255);
                                bufBytes[keyHeadAddr + 32 + j * 3 + 1] = (byte) ((dymAddr >> 10) & 255);
                                bufBytes[keyHeadAddr + 32 + j * 3 + 2] = (byte) ((dymAddr >> 18) & 255);
                                bufBytes[dymAddr++] = (byte) ((bts.length) & 255);
                                bufBytes[dymAddr++] = (byte) ((bts.length >> 8) & 255);
                                for (int k = 0; k < bts.length; k++) {
                                    bufBytes[dymAddr++] = bts[k];
                                }
                                if ((dymAddr & 3) != 0) {
                                    dymAddr &= 0xfffffffc;
                                    dymAddr += 4;
                                }
                            }

                            for (int j = 0; j < 5; j++) {
                                tmpStr = kcStrA[j + 14];
                                if (tmpStr.length() == 0) {
                                    continue;
                                }
                                String fileName = GB.webRootPath + tmpStr;
                                int btSize = ihd.transBmpToBytes(fileName, 128, 128, bufBytes, dymAddr);
                                if (btSize == 0) {
                                    continue;
                                }
                                bufBytes[keyHeadAddr + 48 + j * 3 + 0] = (byte) ((dymAddr >> 2) & 255);
                                bufBytes[keyHeadAddr + 48 + j * 3 + 1] = (byte) ((dymAddr >> 10) & 255);
                                bufBytes[keyHeadAddr + 48 + j * 3 + 2] = (byte) ((dymAddr >> 18) & 255);
                                dymAddr += btSize;
                                if ((dymAddr & 3) != 0) {
                                    dymAddr &= 0xfffffffc;
                                    dymAddr += 4;
                                }
                            }

                            debug++;
                        }
                        debug++;
                    }
                } catch (Exception ex) {
                    System.out.println(ex.toString());

                    ex.printStackTrace();
                    errCnt = 1;
                    errStr = "userSet.json Formate Error !!!";
                    break;
                }

                File file = new File(fullDir + "/" + "flash.kvbin");
                try {
                    // create a writer
                    FileOutputStream fos = new FileOutputStream(file);
                    BufferedOutputStream writer = new BufferedOutputStream(fos);
                    writer.write(bufBytes, 0, dymAddr);
                    writer.flush();
                    // close the writer
                    writer.close();

                } catch (Exception ex) {
                    errCnt = 1;
                    errStr = "userSet.json Formate Error !!!";
                    break;
                }

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

    public void closeUart1() {
        if (uart1 != null) {
            uart1Rx.terminate();
            Lib.thSleep(10);
            uart1.setComPortTimeouts(SerialPort.TIMEOUT_NONBLOCKING, 0, 0);
            uart1.removeDataListener();
            //logger.debug("Going to close the port...");
            boolean result = uart1.closePort();
            //logger.debug("Port closed? {}", result);
            uart1 = null;
            uart1Seted_f = 0;
        }
    }

    public String u1rxPrg(byte[] bts, int len) {
        u1rxPrg(bts, 0, len);
        return null;
    }

    public String u1rxPrg(byte[] bts, int inx, int len) {
        int cmdInx = (bts[inx + 0] & 255);
        cmdInx += (bts[inx + 1] & 255) * 256;
        int para0 = (bts[inx + 2] & 255);
        para0 += (bts[inx + 3] & 255) * 256;
        int para1 = (bts[inx + 4] & 255);
        para1 += (bts[inx + 5] & 255) * 256;
        int para2 = (bts[inx + 6] & 255);
        para2 += (bts[inx + 7] & 255) * 256;
        int para3 = (bts[inx + 8] & 255);
        para3 += (bts[inx + 9] & 255) * 256;
        System.out.println("" + cmdInx);

        try {
            if (cmdInx == 0x4000) {//keypush uart tx
                JSONObject sockOutJso = new JSONObject();
                String valueStr = "";
                if (para0 == 1) {
                    valueStr = "0x";
                }
                for (int i = 0; i < len - 10; i++) {
                    if (para0 == 0) {
                        valueStr += (char) bts[inx + 10 + i];
                    } else {
                        valueStr += Lib.byteToHexString(bts[inx + 10 + i]);
                    }
                }
                sockOutJso.put("keyPressUartTx", valueStr);
                GB.webRetStr = sockOutJso.toString();
                return null;
            }

            if (cla.commandStr.equals("eraseScanKey")) {
                if (cla.commandStep == 1) {//wait to response
                    if (cmdInx == 0x0000) { //0x0001=busy 0x0000 received
                        JSONObject sockOutJso = new JSONObject();
                        sockOutJso.put("progressAction", "Begin Erase");
                        GB.webRetStr = sockOutJso.toString();
                        cla.commandStep = 2;
                        return null;
                    }
                    cla.commandStep = 2;
                    return null;
                }
                if (cla.commandStep == 2) {//wait to done
                    if (cmdInx == 0x0001) {//I am buzy
                        cla.commandTime = 0;
                        if (para1 == 0) {
                            para1 = 1;
                        }
                        int percent = (int) (para0 * 100 / para1);
                        JSONObject sockOutJso = new JSONObject();
                        sockOutJso.put("progressValue", percent);
                        GB.webRetStr = sockOutJso.toString();
                        return null;
                    }
                    if (cmdInx == 0x0002) {//I am done
                        cla.commandTime = 0;
                        cla.commandStep = 3;
                        JSONObject sockOutJso = new JSONObject();
                        sockOutJso.put("progressAction", "ERROR");
                        GB.webRetStr = sockOutJso.toString();
                        return null;
                    }

                    if (cmdInx == 0x0003) {//I am done
                        cla.commandTime = 0;
                        cla.commandStep = 3;
                        JSONObject sockOutJso = new JSONObject();
                        sockOutJso.put("progressAction", "OK");
                        GB.webRetStr = sockOutJso.toString();
                        return null;
                    }
                }
            }

            if (cla.commandStr.equals("writeScanKey") || cla.commandStr.equals("setScanKey")) {
                if (cla.commandStep == 1) {//wait to response
                    if (cmdInx == 0x0000) { //0x0001=busy 0x0000 received
                        JSONObject sockOutJso = new JSONObject();
                        sockOutJso.put("progressAction", "Begin Action");
                        GB.webRetStr = sockOutJso.toString();
                        cla.commandStep = 2;
                        return null;
                    }
                    cla.commandStep = 2;
                    return null;
                }
                if (cla.commandStep == 2) {//wait to done
                    if (cmdInx == 0x0001) {//I am buzy
                        cla.commandTime = 0;
                        if (para1 == 0) {
                            para1 = 1;
                        }
                        int percent = (int) (para0 * 100 / para1);
                        JSONObject sockOutJso = new JSONObject();
                        sockOutJso.put("progressValue", percent);
                        GB.webRetStr = sockOutJso.toString();
                        return null;
                    }
                    if (cmdInx == 0x0002) {//I am error
                        cla.commandTime = 0;
                        cla.commandStep = 3;
                        JSONObject sockOutJso = new JSONObject();
                        sockOutJso.put("progressAction", "ERROR");
                        GB.webRetStr = sockOutJso.toString();
                        return null;
                    }

                    if (cmdInx == 0x0003) {//I am done
                        cla.commandTime = 0;
                        cla.commandStep = 3;
                        JSONObject sockOutJso = new JSONObject();
                        sockOutJso.put("progressAction", "OK");
                        GB.webRetStr = sockOutJso.toString();
                        return null;
                    }
                }
            }

            if (cla.commandStr.equals("checkFlashBlank")) {
                if (cla.commandStep == 1) {//wait to response
                    if (cmdInx == 0x0000) { //0x0001=busy 0x0000 received
                        JSONObject sockOutJso = new JSONObject();
                        sockOutJso.put("progressAction", "Begin Check");
                        GB.webRetStr = sockOutJso.toString();
                        cla.commandStep = 2;
                        return null;
                    }
                    cla.commandStep = 2;
                    return null;
                }
                if (cla.commandStep == 2) {//wait to done
                    if (cmdInx == 0x0001) {//I am buzy
                        cla.commandTime = 0;
                        if (para1 == 0) {
                            para1 = 1;
                        }
                        int percent = (int) (para0 * 100 / para1);
                        JSONObject sockOutJso = new JSONObject();
                        sockOutJso.put("progressValue", percent);
                        GB.webRetStr = sockOutJso.toString();
                        return null;
                    }
                    if (cmdInx == 0x0002) {//I am done
                        cla.commandTime = 0;
                        cla.commandStep = 3;
                        JSONObject sockOutJso = new JSONObject();
                        sockOutJso.put("progressAction", "ERROR");
                        GB.webRetStr = sockOutJso.toString();
                        return null;
                    }

                    if (cmdInx == 0x0003) {//I am done
                        cla.commandTime = 0;
                        cla.commandStep = 3;
                        JSONObject sockOutJso = new JSONObject();
                        sockOutJso.put("progressAction", "OK");
                        GB.webRetStr = sockOutJso.toString();
                        return null;
                    }
                }
            }

            if (cla.commandStr.equals("eraseFlash")) {
                if (cla.commandStep == 1) {//wait to response
                    if (cmdInx == 0x0000) {
                        JSONObject sockOutJso = new JSONObject();
                        sockOutJso.put("progressAction", "Begin Erase");
                        GB.webRetStr = sockOutJso.toString();
                        cla.commandStep = 2;
                        return null;
                    }
                    cla.commandStep = 2;
                    return null;
                }
                if (cla.commandStep == 2) {//wait to done
                    if (cmdInx == 0x0001) {//I am buzy
                        cla.commandTime = 0;
                        if (para1 == 0) {
                            para1 = 1;
                        }
                        int percent = (int) (para0 * 100 / para1);
                        JSONObject sockOutJso = new JSONObject();
                        sockOutJso.put("progressValue", percent);
                        GB.webRetStr = sockOutJso.toString();
                        return null;
                    }
                    if (cmdInx == 0x0003) {//I am done
                        cla.commandTime = 0;
                        cla.commandStep = 3;
                        JSONObject sockOutJso = new JSONObject();
                        sockOutJso.put("progressAction", "OK");
                        GB.webRetStr = sockOutJso.toString();
                        return null;
                    }
                }
            }

            if (cla.commandStr.equals("programFlash")) {
                if (cla.commandStep == 1) {//wait to response
                    if (cmdInx == 0x0000) {
                        if (cla.utxPackCnt == (para0 + 1)) {
                            cla.utxRecOk = 1;
                            cla.uartTestTm1.baseTime = 0;
                            cla.uartTestTm1.commandPrg();
                        }
                        return null;
                    }
                }
            }

            if (cla.commandStr.equals("verifyFlash")) {
                if (cla.commandStep == 1) {//wait to response
                    if (cmdInx == 0x0000) {
                        if (cla.utxPackCnt == (para0 + 1)) {
                            cla.utxRecOk = 1;
                            cla.uartTestTm1.baseTime = 0;
                            cla.uartTestTm1.commandPrg();
                        }
                        return null;
                    }
                    if (cmdInx == 0x0002) {
                        cla.commandTime = 0;
                        cla.commandStep = 2;
                        JSONObject sockOutJso = new JSONObject();
                        sockOutJso.put("progressAction", "ERROR");
                        GB.webRetStr = sockOutJso.toString();
                        return null;
                    }
                }
            }

        } catch (Exception ex) {

        }

        return null;

    }

    public String openUart1(String portName, String Parity, int boudrate) {
        String comName;
        SerialPort[] ports = SerialPort.getCommPorts();
        uart1Seted_f = 0;
        if (ports.length == 0) {
            System.out.println("Uart1: No serial ports available!");
            return "Uart1: No serial ports available!";
        }
        //logger.debug("Got {} serial ports available", ports.length);
        int portToUse = -1;

        for (int i = 0; i < ports.length; i++) {
            SerialPort sp = ports[i];
            //logger.debug("\t- {}, {}", sp.getSystemPortName(), sp.getDescriptivePortName());
            comName = sp.getSystemPortName();//.toLowerCase();
            if (comName.equals(portName)) {
                portToUse = i;
                break;
            }
        }
        if (portToUse < 0) {
            System.out.println("Uart1: No this port on this system!");
            return "Uart1: No this port on this system!";
        }
        int parity = SerialPort.NO_PARITY;
        if (Parity.equals("Even")) {
            parity = SerialPort.EVEN_PARITY;
        }
        if (Parity.equals("Odd")) {
            parity = SerialPort.ODD_PARITY;
        }
        uart1 = ports[portToUse];
        uart1.setFlowControl(SerialPort.FLOW_CONTROL_DISABLED);
        uart1.setComPortParameters(boudrate, 8, SerialPort.ONE_STOP_BIT, parity);
        //serialPort.setComPortTimeouts(SerialPort.TIMEOUT_READ_BLOCKING | SerialPort.TIMEOUT_WRITE_BLOCKING, 0, 0);
        //serialPort.setComPortTimeouts(SerialPort.TIMEOUT_NONBLOCKING, 0, 0);
        //logger.debug("Going to open the port...");
        boolean result = uart1.openPort();
        if (result) {
            uart1Tx = new CommPortSender();
            uart1Tx.setWriterStream(uart1.getOutputStream());
            // setup serial port reader
            uart1Rx = new CommPortReceiver(uart1.getInputStream());
            uart1Rx.setCallBack((bytes, len) -> u1rxPrg(bytes, len));
            uart1Rx.start();
            uart1Seted_f = 1;
        } else {
            uart1Seted_f = 0;
            uart1 = null;
            System.out.println("Uart1: This port is in used !!!");
            return "Uart1: This port is in used !!!";
        }
        return null;
    }

}

class UartTestTm1 implements ActionListener {

    String str;
    OledKeyboard cla;
    int testCnt = 0;
    int sockConnectTimer = 0;
    int uartConnectTimer = 0;
    File file;
    FileInputStream reader;
    long fileLen = 0;
    byte[] btBuf = new byte[256];
    int txBufSize = 512;
    int baseTime = 0;
    int baseTimeTh = 3;

    UartTestTm1(OledKeyboard owner) {
        cla = owner;
    }

    public void commandPrg() {
        try {
            switch (cla.commandStr) {
                case "stopAll":
                    cla.commandStr = "";
                    if (reader != null) {
                        reader.close();
                        reader = null;
                    }
                    if (cla.sockUart_f == 1) {
                        int inx = 0;
                        cla.sockUart0_buf[inx++] = (byte) (cla.devicePic24epId & 255);
                        cla.sockUart0_buf[inx++] = (byte) ((cla.devicePic24epId >> 8) & 255);
                        cla.sockUart0_buf[inx++] = (byte) (0x00);//serial id
                        cla.sockUart0_buf[inx++] = (byte) (0x00);//serial id
                        //=========================================================
                        cla.sockUart0_buf[inx++] = (byte) (0x00);//system
                        cla.sockUart0_buf[inx++] = (byte) (0x00);//flag
                        cla.sockUart0_buf[inx++] = (byte) (0x02);//len low
                        cla.sockUart0_buf[inx++] = (byte) (0x00);//len high
                        cla.sockUart0_buf[inx++] = (byte) (0x0006 & 255);//command low
                        cla.sockUart0_buf[inx++] = (byte) (0x0006 >> 8);//command high
                        cla.sockUart0_len = inx;
                        cla.sockUart0_tx_f = 1;
                        //========================================================
                    }

                    if (cla.sockUart_f == 0) {
                        if (cla.uart1 != null) {
                            int tbufInx = 0;
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (cla.devicePic24epId & 255);
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) ((cla.devicePic24epId >> 8) & 255);
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//serial id
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//serial id
                            //=========================================================
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//system
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//flag
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x02);//len low
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//len high
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x0006 & 255);//command low
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x0006 >> 8);//command high
                            cla.uart1Tx.stm.tbuf_byte = tbufInx;
                            cla.uart1Tx.stm.enc_mystm();
                            cla.uart1Tx.send();
                        }
                    }
                    break;

                case "eraseFlash":
                    if (cla.commandStep == 0) {
                        if (++cla.commandTimer < cla.commandTimer_th) {
                            break;
                        }
                        cla.commandTimer = 0;
                        if (cla.sockUart_f == 1) {
                            int inx = 0;
                            cla.sockUart0_buf[inx++] = (byte) (cla.devicePic24epId & 255);
                            cla.sockUart0_buf[inx++] = (byte) ((cla.devicePic24epId >> 8) & 255);
                            cla.sockUart0_buf[inx++] = (byte) (0x00);//serial id
                            cla.sockUart0_buf[inx++] = (byte) (0x00);//serial id
                            //=========================================================
                            cla.sockUart0_buf[inx++] = (byte) (0x00);//system
                            cla.sockUart0_buf[inx++] = (byte) (0x00);//flag
                            cla.sockUart0_buf[inx++] = (byte) (0x02);//len low
                            cla.sockUart0_buf[inx++] = (byte) (0x00);//len high
                            cla.sockUart0_buf[inx++] = (byte) (0x1000 & 255);//command low
                            cla.sockUart0_buf[inx++] = (byte) (0x1000 >> 8);//command high
                            cla.sockUart0_len = inx;
                            cla.sockUart0_tx_f = 1;
                            //========================================================
                        }
                        if (cla.sockUart_f == 0) {
                            int tbufInx = 0;
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (cla.devicePic24epId & 255);
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (byte) ((cla.devicePic24epId >> 8) & 255);
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//serial id
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//serial id
                            //=========================================================
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//system
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//flag
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x02);//len low
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//len high
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x1000 & 255);//command low
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x1000 >> 8);//command high
                            cla.uart1Tx.stm.tbuf_byte = tbufInx;
                            cla.uart1Tx.stm.enc_mystm();
                            cla.uart1Tx.send();
                        }
                        cla.commandStep = 1;
                        cla.commandTimer_th = 0;

                        break;
                    }
                    if (cla.commandStep == 1) {
                        if (++cla.commandTimer < cla.commandTimer_th) {
                            break;
                        }
                        cla.commandTimer = 0;
                        cla.commandTimer_th = 0;
                        break;
                    }
                    if (cla.commandStep == 2) {
                        if (++cla.commandTimer < cla.commandTimer_th) {
                            break;
                        }
                        cla.commandTimer = 0;
                        cla.commandTimer_th = 0;
                        break;
                    }
                    if (cla.commandStep == 3) {
                        cla.commandStr = "stopAll";
                        break;
                    }
                    break;

                case "writeScanKey":
                case "eraseScanKey":
                case "setScanKey":
                    if (cla.commandStep == 0) {
                        if (++cla.commandTimer < cla.commandTimer_th) {
                            break;
                        }
                        cla.commandTimer = 0;
                        byte[] txBytes;
                        if (cla.sockUart_f == 1) {
                            txBytes = cla.sockUart0_buf;
                        } else {
                            txBytes = cla.uart1Tx.stm.tbuf;
                        }
                        int inx = 0;
                        txBytes[inx++] = (byte) (cla.devicePic24epId & 255);
                        txBytes[inx++] = (byte) ((cla.devicePic24epId >> 8) & 255);
                        txBytes[inx++] = (byte) (0x00);//serial id
                        txBytes[inx++] = (byte) (0x00);//serial id
                        //=========================================================
                        txBytes[inx++] = (byte) (0x00);//system
                        txBytes[inx++] = (byte) (0x00);//flag
                        txBytes[inx++] = (byte) (0x02);//len low
                        txBytes[inx++] = (byte) (0x00);//len high
                        if (cla.commandStr.equals("eraseScanKey")) {
                            txBytes[inx++] = (byte) (0x1004 & 255);//write all key
                            txBytes[inx++] = (byte) (0x1004 >> 8);//write all key
                        }
                        if (cla.commandStr.equals("writeScanKey")) {
                            txBytes[inx++] = (byte) (0x1005 & 255);//write all key
                            txBytes[inx++] = (byte) (0x1005 >> 8);//write all key
                        }
                        if (cla.commandStr.equals("setScanKey")) {
                            txBytes[inx++] = (byte) (0x1007 & 255);//write all key
                            txBytes[inx++] = (byte) (0x1007 >> 8);//write all key
                        }
                        cla.sockUart0_len = inx;
                        cla.sockUart0_tx_f = 1;
                        if (cla.sockUart_f == 1) {
                            cla.sockUart0_len = inx;
                            cla.sockUart0_tx_f = 1;
                        } else {
                            cla.uart1Tx.stm.tbuf_byte = inx;
                            cla.uart1Tx.stm.enc_mystm();
                            cla.uart1Tx.send();
                        }
                        cla.commandStep = 1;
                        cla.commandTimer_th = 0;
                        break;
                    }
                    /*    
                    if (cla.commandStep == 1) {
                        if (++cla.commandTimer < cla.commandTimer_th) {
                            break;
                        }
                        cla.commandTimer = 0;
                        cla.commandTimer_th = 0;
                        break;
                    }
                     */
                    break;

                case "checkFlashBlank":
                    if (cla.commandStep == 0) {
                        if (++cla.commandTimer < cla.commandTimer_th) {
                            break;
                        }
                        cla.commandTimer = 0;
                        if (cla.sockUart_f == 1) {
                            int inx = 0;
                            cla.sockUart0_buf[inx++] = (byte) (cla.devicePic24epId & 255);
                            cla.sockUart0_buf[inx++] = (byte) ((cla.devicePic24epId >> 8) & 255);
                            cla.sockUart0_buf[inx++] = (byte) (0x00);//serial id
                            cla.sockUart0_buf[inx++] = (byte) (0x00);//serial id
                            //=========================================================
                            cla.sockUart0_buf[inx++] = (byte) (0x00);//system
                            cla.sockUart0_buf[inx++] = (byte) (0x00);//flag
                            cla.sockUart0_buf[inx++] = (byte) (0x02);//len low
                            cla.sockUart0_buf[inx++] = (byte) (0x00);//len high
                            cla.sockUart0_buf[inx++] = (byte) (0x1001 & 255);//command low
                            cla.sockUart0_buf[inx++] = (byte) (0x1001 >> 8);//command high
                            cla.sockUart0_len = inx;
                            cla.sockUart0_tx_f = 1;
                            //========================================================
                        }
                        if (cla.sockUart_f == 0) {
                            int tbufInx = 0;
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (cla.devicePic24epId & 255);
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (byte) ((cla.devicePic24epId >> 8) & 255);
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//serial id
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//serial id
                            //=========================================================
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//system
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//flag
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x02);//len low
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//len high
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x1001 & 255);//command low
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x1001 >> 8);//command high
                            cla.uart1Tx.stm.tbuf_byte = tbufInx;
                            cla.uart1Tx.stm.enc_mystm();
                            cla.uart1Tx.send();
                        }
                        cla.commandStep = 1;
                        cla.commandTimer_th = 0;
                        break;
                    }
                    if (cla.commandStep == 1) {
                        if (++cla.commandTimer < cla.commandTimer_th) {
                            break;
                        }
                        cla.commandTimer = 0;
                        cla.commandTimer_th = 0;
                        break;
                    }
                    if (cla.commandStep == 2) {
                        if (++cla.commandTimer < cla.commandTimer_th) {
                            break;
                        }
                        cla.commandTimer = 0;
                        cla.commandTimer_th = 0;
                        break;
                    }
                    if (cla.commandStep == 3) {
                        cla.commandStr = "stopAll";
                        break;
                    }
                    break;

                case "programFlash":
                    if (cla.commandStep == 0) {
                        if (++cla.commandTimer < cla.commandTimer_th) {
                            break;
                        }
                        cla.commandTimer = 0;
                        String fileName = cla.commandParas[0];
                        txBufSize = Lib.str2int(cla.commandParas[1], 512);
                        Path path = Paths.get(fileName);
                        fileLen = Files.size(path);
                        file = new File(fileName);
                        reader = new FileInputStream(file);
                        cla.commandStep = 1;
                        cla.commandTimer_th = 100;
                        cla.utxPackCnt = 0;
                        cla.utxErrCnt = 0;
                        cla.utxRecOk = 1;
                        break;
                    }
                    if (cla.commandStep == 1) {
                        if (cla.utxRecOk == 1) {
                            cla.commandTimer = cla.commandTimer_th;
                        }
                        if (++cla.commandTimer < cla.commandTimer_th) {
                            break;
                        }
                        cla.commandTimer = 0;
                        if (cla.utxRecOk == 0) {
                            cla.utxErrCnt++;
                            if ((cla.utxErrCnt & 1) == 0) {
                                if (cla.sockUart_f == 0) {
                                    cla.uart1Tx.send();
                                } else {
                                    cla.sockUart0_tx_f = 1;
                                }
                            }
                            if (cla.utxErrCnt >= 10) {
                                JSONObject sockOutJso = new JSONObject();
                                sockOutJso.put("progressAction", "ERROR");
                                GB.webRetStr = sockOutJso.toString();
                                cla.commandStep = 2;
                            }
                            break;
                        }
                        cla.utxErrCnt = 0;

                        int bts = 0;

                        if (cla.sockUart_f == 1) {
                            bts = reader.read(cla.sockUart0_buf, 14, txBufSize);
                        } else {
                            bts = reader.read(cla.uart1Tx.stm.tbuf, 14, txBufSize);
                        }
                        //if(cla.utxPackCnt>=20)
                        //    bts=-1;
                        if (bts <= 0) {
                            JSONObject sockOutJso = new JSONObject();
                            sockOutJso.put("progressAction", "OK");
                            GB.webRetStr = sockOutJso.toString();
                            cla.commandStep = 2;
                            break;
                        }

                        if (cla.sockUart_f == 1) {
                            for (int i = bts; i < txBufSize; i++) {
                                cla.sockUart0_buf[i + 14] = (byte) (0);
                            }
                            int inx = 0;
                            cla.sockUart0_buf[inx++] = (byte) (cla.devicePic24epId & 255);
                            cla.sockUart0_buf[inx++] = (byte) ((cla.devicePic24epId >> 8) & 255);
                            cla.sockUart0_buf[inx++] = (byte) (0x00);//serial id
                            cla.sockUart0_buf[inx++] = (byte) (0x00);//serial id
                            //=========================================================
                            cla.sockUart0_buf[inx++] = (byte) (0x00);//system
                            cla.sockUart0_buf[inx++] = (byte) (0x00);//flag
                            cla.sockUart0_buf[inx++] = (byte) (0x02);//len low
                            cla.sockUart0_buf[inx++] = (byte) (0x00);//len high
                            cla.sockUart0_buf[inx++] = (byte) (0x1002 & 255);//command low
                            cla.sockUart0_buf[inx++] = (byte) (0x1002 >> 8);//command high
                            cla.sockUart0_buf[inx++] = (byte) (txBufSize & 255);//paras0
                            cla.sockUart0_buf[inx++] = (byte) ((txBufSize >> 8) & 255);//paras0
                            cla.sockUart0_buf[inx++] = (byte) (cla.utxPackCnt & 255);//paras0
                            cla.sockUart0_buf[inx++] = (byte) ((cla.utxPackCnt >> 8) & 255);//paras0
                            cla.sockUart0_len = txBufSize + 14;
                            cla.sockUart0_tx_f = 1;
                            //========================================================
                        }
                        if (cla.sockUart_f == 0) {
                            for (int i = bts; i < txBufSize; i++) {
                                cla.uart1Tx.stm.tbuf[i + 14] = (byte) (0);
                            }
                            int tbufInx = 0;
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (cla.devicePic24epId & 255);
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (byte) ((cla.devicePic24epId >> 8) & 255);
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//serial id
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//serial id
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//flags
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//flags
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x02);//len low
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//len high
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x1002 & 255);//command low
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x1002 >> 8);//command high
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (txBufSize & 255);//paras0
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) ((txBufSize >> 8) & 255);//paras0
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (cla.utxPackCnt & 255);//paras0
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) ((cla.utxPackCnt >> 8) & 255);//paras0
                            cla.uart1Tx.stm.tbuf_byte = txBufSize + 14;
                            cla.uart1Tx.stm.enc_mystm();
                            cla.uart1Tx.send();
                        }
                        cla.utxRecOk = 0;
                        cla.utxPackCnt++;
                        JSONObject sockOutJso = new JSONObject();
                        int percent = (int) (cla.utxPackCnt * txBufSize * 100 / fileLen);
                        sockOutJso.put("progressValue", percent);
                        GB.webRetStr = sockOutJso.toString();

                        break;
                    }
                    if (cla.commandStep == 2) {
                        if (++cla.commandTimer < cla.commandTimer_th) {
                            break;
                        }
                        cla.commandTimer = 0;
                        reader.close();
                        reader = null;
                        cla.commandStr = "";
                        cla.closeUart1();
                        break;
                    }
                    break;

                case "verifyFlash":
                    if (cla.commandStep == 0) {
                        if (++cla.commandTimer < cla.commandTimer_th) {
                            break;
                        }
                        cla.commandTimer = 0;
                        String fileName = cla.commandParas[0];
                        txBufSize = Lib.str2int(cla.commandParas[1], 512);
                        Path path = Paths.get(fileName);
                        fileLen = Files.size(path);
                        file = new File(fileName);
                        reader = new FileInputStream(file);
                        cla.commandStep = 1;
                        cla.commandTimer_th = 100;
                        cla.utxPackCnt = 0;
                        cla.utxErrCnt = 0;
                        cla.utxRecOk = 1;
                        break;
                    }
                    if (cla.commandStep == 1) {
                        if (cla.utxRecOk == 1) {
                            cla.commandTimer = cla.commandTimer_th;
                        }
                        if (++cla.commandTimer < cla.commandTimer_th) {
                            break;
                        }
                        cla.commandTimer = 0;
                        if (cla.utxRecOk == 0) {
                            cla.utxErrCnt++;
                            if ((cla.utxErrCnt & 1) == 0) {
                                if (cla.sockUart_f == 0) {
                                    cla.uart1Tx.send();
                                } else {
                                    cla.sockUart0_tx_f = 1;
                                }
                            }
                            if (cla.utxErrCnt >= 10) {
                                JSONObject sockOutJso = new JSONObject();
                                sockOutJso.put("progressAction", "ERROR");
                                GB.webRetStr = sockOutJso.toString();
                                cla.commandStep = 2;
                            }
                            break;
                        }
                        cla.utxErrCnt = 0;

                        int bts = 0;

                        if (cla.sockUart_f == 1) {
                            bts = reader.read(cla.sockUart0_buf, 14, txBufSize);
                        } else {
                            bts = reader.read(cla.uart1Tx.stm.tbuf, 14, txBufSize);
                        }
                        if (bts <= 0) {
                            JSONObject sockOutJso = new JSONObject();
                            sockOutJso.put("progressAction", "OK");
                            GB.webRetStr = sockOutJso.toString();
                            cla.commandStep = 2;
                            break;
                        }

                        if (cla.sockUart_f == 1) {
                            for (int i = bts; i < txBufSize; i++) {
                                cla.sockUart0_buf[i + 14] = (byte) (0);
                            }
                            int inx = 0;
                            cla.sockUart0_buf[inx++] = (byte) (cla.devicePic24epId & 255);
                            cla.sockUart0_buf[inx++] = (byte) ((cla.devicePic24epId >> 8) & 255);
                            cla.sockUart0_buf[inx++] = (byte) (0x00);//serial id
                            cla.sockUart0_buf[inx++] = (byte) (0x00);//serial id
                            //=========================================================
                            cla.sockUart0_buf[inx++] = (byte) (0x00);//system
                            cla.sockUart0_buf[inx++] = (byte) (0x00);//flag
                            cla.sockUart0_buf[inx++] = (byte) (0x02);//len low
                            cla.sockUart0_buf[inx++] = (byte) (0x00);//len high
                            cla.sockUart0_buf[inx++] = (byte) (0x1003 & 255);//command low
                            cla.sockUart0_buf[inx++] = (byte) (0x1003 >> 8);//command high
                            cla.sockUart0_buf[inx++] = (byte) (txBufSize & 255);//paras0
                            cla.sockUart0_buf[inx++] = (byte) ((txBufSize >> 8) & 255);//paras0
                            cla.sockUart0_buf[inx++] = (byte) (cla.utxPackCnt & 255);//paras0
                            cla.sockUart0_buf[inx++] = (byte) ((cla.utxPackCnt >> 8) & 255);//paras0
                            cla.sockUart0_len = txBufSize + 14;
                            cla.sockUart0_tx_f = 1;
                            //========================================================
                        }
                        if (cla.sockUart_f == 0) {
                            for (int i = bts; i < txBufSize; i++) {
                                cla.uart1Tx.stm.tbuf[i + 14] = (byte) (0);
                            }
                            int tbufInx = 0;
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (cla.devicePic24epId & 255);
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (byte) ((cla.devicePic24epId >> 8) & 255);
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//serial id
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//serial id
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//flags
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//flags
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x02);//len low
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x00);//len high
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x1003 & 255);//command low
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (0x1003 >> 8);//command high
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (txBufSize & 255);//paras0
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) ((txBufSize >> 8) & 255);//paras0
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) (cla.utxPackCnt & 255);//paras0
                            cla.uart1Tx.stm.tbuf[tbufInx++] = (byte) ((cla.utxPackCnt >> 8) & 255);//paras0
                            cla.uart1Tx.stm.tbuf_byte = txBufSize + 14;
                            cla.uart1Tx.stm.enc_mystm();
                            cla.uart1Tx.send();
                        }
                        cla.utxRecOk = 0;
                        cla.utxPackCnt++;
                        JSONObject sockOutJso = new JSONObject();
                        int percent = (int) (cla.utxPackCnt * txBufSize * 100 / fileLen);
                        sockOutJso.put("progressValue", percent);
                        GB.webRetStr = sockOutJso.toString();

                        break;
                    }
                    if (cla.commandStep == 2) {
                        if (++cla.commandTimer < cla.commandTimer_th) {
                            break;
                        }
                        cla.commandTimer = 0;
                        reader.close();
                        reader = null;
                        cla.commandStr = "";
                        cla.closeUart1();
                        break;
                    }
                    break;

            }

        } catch (Exception ex) {
            Logger.getLogger(UartTestTm1.class.getName()).log(Level.SEVERE, null, ex);
            cla.commandStr = "";
        }

    }

    @Override
    public void actionPerformed(ActionEvent evt) {
        baseTime++;
        if (baseTime > baseTimeTh) {
            baseTime = 0;
            commandPrg();
        }
    }
}
