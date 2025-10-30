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
import java.util.HashMap;
import java.util.Iterator;
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
public class Sync {

    static Sync scla;
    //====================
    MyComm fpgaComm;
    MyComm webComm;

    SerialPort uart1;
    int uart1Seted_f = 0;
    int uart1Connected_f = 0;
    CommPortSender uart1Tx;
    CommPortReceiver uart1Rx;

    //====================
    int fpgaDeviceId = 0x2401;
    FpgaData fpgaData = new FpgaData();
    int socketServerId = 0x0000;

    int myDeviceId = 0x2403;
    int mySerialId = 0x0000;
    int devicePcioId = 0x2301;
    int deviceFpgaId = 0x2400;

    int utxPackCnt = 0;
    int utxErrCnt = 0;
    int utxRecOk = 0;

    int sockUart_f = 1;

    Timer tm1 = null;
    public String errStr = "";
    public String okStr = "";
    public int errCnt = 0;
    int debug = 0;
    Sync cla;
    String commandStr = "";
    String[] commandParas = new String[10];
    int commandStep = 0;
    int commandTime = 0;
    int commandTimer = 0;
    int commandTimer_th = 0;
    String fullDir = "";

    Ssocket socketServer;
    int socketServerPort = 8324;
    ServerReturnC serverRet_uart0 = new ServerReturnC(4096);

    byte[] sockUartData_buf = new byte[4096];
    int sockUartData_len = 0;
    int sockUartData_tx_f = 0;

    byte[] sockUartCmd_buf = new byte[4096];
    int sockUartCmd_len = 0;
    int sockUartCmd_tx_f = 0;

    SyncTm1 syncTm1;
    int emuTimer = 0;
    HashMap<String, String> myParas;

    public Sync() {
        cla = this;
        Sync.scla = this;
        this.myParas = this.getParas();
        //====================================
        openSock();
        //====================================
        fpgaComm = new MyComm(cla, "fpgaData", "uart");
        String uartx = "uart0";
        fpgaComm.uartC.portStr = cla.myParas.get(uartx + "_port");
        fpgaComm.uartC.boudrateStr = cla.myParas.get(uartx + "_boudrate");
        fpgaComm.uartC.parityStr = cla.myParas.get(uartx + "_parity");
        fpgaComm.open();
        //====================================
        MyComm webComm = new MyComm(cla, "webData", "webSocket");
        if (tm1 == null) {
            syncTm1 = new SyncTm1(cla);
            tm1 = new Timer(32, syncTm1);  //about 30ms 
            tm1.start();
        }
        fpgaComm.open();
        //===============
    }

    public void socketServerReturn() {
        MyStm stm = socketServer.stm;
        int stx_index = 0;
        stm.tbuf[stx_index++] = (byte) ((devicePcioId) & 255);
        stm.tbuf[stx_index++] = (byte) ((devicePcioId >> 8) & 255);
        stm.tbuf[stx_index++] = (byte) (255);
        stm.tbuf[stx_index++] = (byte) (255);
        if (sockUartCmd_tx_f == 1) {
            sockUartCmd_tx_f = 0;
            stm.tbuf[stx_index++] = (byte) (0x10);//uart0
            stm.tbuf[stx_index++] = (byte) (0x00);//flag
            stm.tbuf[stx_index++] = (byte) (sockUartCmd_len & 255);//len low byte
            stm.tbuf[stx_index++] = (byte) ((sockUartCmd_len >> 8) & 255);//len high byte
            for (int i = 0; i < sockUartCmd_len; i++) {
                stm.tbuf[stx_index++] = sockUartCmd_buf[i];
            }
            stm.tbuf_byte = stx_index;
            socketServer.txReturn();
            return;
        } else {
            int inx = 0;
            cla.sockUartData_buf[inx++] = (byte) (cla.fpgaDeviceId & 255);
            cla.sockUartData_buf[inx++] = (byte) ((cla.fpgaDeviceId >> 8) & 255);
            cla.sockUartData_buf[inx++] = (byte) (0x00);//serial id
            cla.sockUartData_buf[inx++] = (byte) (0x00);//serial id
            //=========================================================
            cla.sockUartData_buf[inx++] = (byte) (0x00);//groupId
            cla.sockUartData_buf[inx++] = (byte) (0x00);//flag
            cla.sockUartData_buf[inx++] = (byte) (0x0a);//len low
            cla.sockUartData_buf[inx++] = (byte) (0x00);//len high
            cla.sockUartData_buf[inx++] = (byte) (0x1000 & 255);//command low
            cla.sockUartData_buf[inx++] = (byte) (0x1000 >> 8);//command high
            cla.sockUartData_buf[inx++] = (byte) (0x10);//para0 low byte
            cla.sockUartData_buf[inx++] = (byte) (0x32);//para0 high byte
            cla.sockUartData_buf[inx++] = (byte) (0x54);//para1 low byte
            cla.sockUartData_buf[inx++] = (byte) (0x76);//para1 high byte
            cla.sockUartData_buf[inx++] = (byte) (0x98);//para2 low byte
            cla.sockUartData_buf[inx++] = (byte) (0xba);//para2 high byte
            cla.sockUartData_buf[inx++] = (byte) (0xdc);//para3 low byte
            cla.sockUartData_buf[inx++] = (byte) (0xfe);//para3 high byte
            cla.sockUartData_len = inx;
            sockUartData_tx_f = 1;

        }
        if (sockUartData_tx_f == 1) {
            sockUartData_tx_f = 0;
            stm.tbuf[stx_index++] = (byte) (0x09);//uart0
            stm.tbuf[stx_index++] = (byte) (0x00);//flag
            stm.tbuf[stx_index++] = (byte) (sockUartData_len & 255);//len low byte
            stm.tbuf[stx_index++] = (byte) ((sockUartData_len >> 8) & 255);//len high byte
            for (int i = 0; i < sockUartData_len; i++) {
                stm.tbuf[stx_index++] = sockUartData_buf[i];
            }
            stm.tbuf_byte = stx_index;
            socketServer.txReturn();
            return;
        } else {

            stm.tbuf[stx_index++] = (byte) (0x00);//system
            stm.tbuf[stx_index++] = (byte) (0x00);//flag
            stm.tbuf[stx_index++] = (byte) (0x0002 & 255);//len low byte
            stm.tbuf[stx_index++] = (byte) ((0x0002 >> 8) & 255);//len high byte
            stm.tbuf[stx_index++] = (byte) (0x000e & 255);//no data
            stm.tbuf[stx_index++] = (byte) ((0x000e >> 8) & 255);//no data
            stm.tbuf_byte = stx_index;
            socketServer.txReturn();
            return;

            /*
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
             */
        }

    }

    public String gnRxPrg(String name, byte[] bts, int len) {
        int inx = 0;
        int inxLim = len;

        int packageId = (bts[inx + 1] & 255) * 256 + (bts[inx + 0] & 255);
        int packageSerialId = (bts[inx + 3] & 255) * 256 + (bts[inx + 2] & 255);
        int packageGroupId = (bts[inx + 4] & 255);
        int packageFlags = (bts[inx + 5] & 255);
        int packageLen = (bts[inx + 7] & 255) * 256 + (bts[inx + 6] & 255);
        inx += 8;
        if (packageId == 0x2303 && packageGroupId == 0x10) {//from Pcio uart11
            int deviceId = (bts[inx + 1] & 255) * 256 + (bts[inx + 0] & 255);
            int deviceSerialId = (bts[inx + 3] & 255) * 256 + (bts[inx + 2] & 255);
            inx += 4;
            if (deviceId == 0x2401 && deviceSerialId == 0x00) {//from fpga serial 0
                while (inx + 4 < inxLim) {
                    int dataId = (bts[inx + 0] & 255);
                    int dataFlags = (bts[inx + 1] & 255);
                    int dataLen = (bts[inx + 3] & 255) * 256 + (bts[inx + 2] & 255);
                    if (dataId == 0xab) {//dataBeginId
                        gnCmdPrg(bts, inx + 4, dataLen, dataFlags);
                    }
                    inx += dataLen + 4;
                }
            }
        }
        return null;
    }

    public void openSock() {
        socketServer = new Ssocket();
        socketServer.format = 1;
        socketServer.rxcon_ltim = 100;//unit 10ms
        socketServer.stm.setCallBack(new BytesCallback() {
            @Override
            public String prg(byte[] bytes, int len) {
                gnRxPrg("", bytes, len);
                socketServerReturn();
                return null;
            }
        });
        socketServer.open(socketServerPort);
    }

    public void loadDirectSockUart(String str) {
        byte[] bts = Lib.toHexBytes(str);
        int inx = 0;
        for (int i = 0; i < bts.length; i++) {
            cla.sockUartCmd_buf[inx++] = bts[i];

        }
        cla.sockUartCmd_len = inx;
        cla.sockUartCmd_tx_f = 1;
    }

    public HashMap<String, String> getParas() {
        HashMap<String, String> paraMap = new HashMap();
        String fileName = GB.webRootPath + "user-" + "sync" + "/paraSet.json";
        File file = new File(fileName);
        if (file.exists() && !file.isDirectory()) {
            String jsonStr = Lib.readStringFile(fileName);
            if (jsonStr == null) {
                return paraMap;
            }
            try {
                JSONObject jsObj = new JSONObject(jsonStr);
                Iterator<String> it = jsObj.keys();
                while (it.hasNext()) {
                    String key = it.next();
                    String valueStr = (String) jsObj.get(key);
                    paraMap.put(key, valueStr);
                }
                return paraMap;
            } catch (Exception ex) {
            }
        }
        return paraMap;

    }

    public void sockUartTxStd(int command, int para10, int para32) {
        int inx = 0;
        cla.sockUartCmd_buf[inx++] = (byte) (cla.fpgaDeviceId & 255);
        cla.sockUartCmd_buf[inx++] = (byte) ((cla.fpgaDeviceId >> 8) & 255);
        cla.sockUartCmd_buf[inx++] = (byte) (0x00);//serial id
        cla.sockUartCmd_buf[inx++] = (byte) (0x00);//serial id
        //=========================================================
        cla.sockUartCmd_buf[inx++] = (byte) (0x00);//groupId
        cla.sockUartCmd_buf[inx++] = (byte) (0x00);//flag
        int cmdLen = 10;
        cla.sockUartCmd_buf[inx++] = (byte) (cmdLen & 255);//len low
        cla.sockUartCmd_buf[inx++] = (byte) (cmdLen >> 8);//len high
        cla.sockUartCmd_buf[inx++] = (byte) (command & 255);//command low  //pulseGenStart
        cla.sockUartCmd_buf[inx++] = (byte) (command >> 8);//command high
        cla.sockUartCmd_buf[inx++] = (byte) ((para10 >> 0) & 255);//
        cla.sockUartCmd_buf[inx++] = (byte) ((para10 >> 8) & 255);
        cla.sockUartCmd_buf[inx++] = (byte) ((para10 >> 16) & 255);
        cla.sockUartCmd_buf[inx++] = (byte) ((para32 >> 24) & 255);
        cla.sockUartCmd_buf[inx++] = (byte) ((para32 >> 0) & 255);
        cla.sockUartCmd_buf[inx++] = (byte) ((para32 >> 8) & 255);
        cla.sockUartCmd_buf[inx++] = (byte) ((para32 >> 16) & 255);
        cla.sockUartCmd_buf[inx++] = (byte) ((para32 >> 24) & 255);
        cla.sockUartCmd_len = inx;
        sockUartCmd_tx_f = 1;

    }

    public boolean handleCommand(JSONObject cmdJso) {
        String retStr = "";
        retStr = jsobjGet(cmdJso, "act");
        errCnt = 0;
        okStr = "";
        errStr = "";
        try {
            switch (retStr) {
                case "testResponse":
                    JSONObject webOut = new JSONObject();
                    webOut.put("status", "OK");
                    GB.webRetStr = webOut.toString();
                    break;
                case "pulseGenStart":
                    float fbuf;
                    int ibuf;
                    int flags = 0;
                    int protect_f = 1;

                    if (protect_f != 0) {
                        flags |= 1;
                    }
                    retStr = jsobjGet(cmdJso, "trigAfterSetTime");
                    fbuf = Lib.str2float(retStr, -1);
                    if (fbuf < 0) {
                        break;
                    }
                    int trigAfterSetTime = (int) (fbuf * 1);
                    //========================================
                    retStr = jsobjGet(cmdJso, "rfAfterTrigTime");
                    fbuf = Lib.str2float(retStr, -1);
                    if (fbuf < 0) {
                        break;
                    }
                    int rfAfterTrigTime = (int) (fbuf * 1);
                    //========================================
                    retStr = jsobjGet(cmdJso, "trigAfterRfTime");
                    fbuf = Lib.str2float(retStr, -1);
                    if (fbuf < 0) {
                        break;
                    }
                    int trigAfterRfTime = (int) (fbuf * 1);
                    //========================================
                    retStr = jsobjGet(cmdJso, "pulseGenFreq");
                    fbuf = Lib.str2float(retStr, -1);
                    if (fbuf < 0) {
                        break;
                    }
                    int rfFreq = (int) ((fbuf - 2.9) * 10);
                    //=======================================
                    retStr = jsobjGet(cmdJso, "pulseGenRandom");
                    ibuf = Lib.str2int(retStr, -1);
                    if (ibuf < 0) {
                        break;
                    }
                    if (ibuf != 0) {
                        flags |= 0x04;
                    }
                    //=======================================
                    retStr = jsobjGet(cmdJso, "pulseGenValues");
                    if (retStr == null) {
                        break;
                    }
                    String[] strA = retStr.split("~");
                    if (strA.length != 30) {
                        break;
                    }
                    int err = 0;
                    int enableA[] = new int[30];
                    int widthA[] = new int[30];
                    int dutyA[] = new int[30];
                    int timesA[] = new int[30];

                    for (int ii = 0; ii < 30; ii++) {
                        String[] strB = strA[ii].split(",");
                        if (strB.length != 4) {
                            err = 1;
                            break;
                        }
                        for (int jj = 0; jj < 4; jj++) {
                            ibuf = Lib.str2int(strB[jj], -1);
                            if (ibuf < 0) {
                                err = 1;
                                break;
                            }
                            if (jj == 0) {
                                enableA[ii] = ibuf;
                            }
                            if (jj == 1) {
                                widthA[ii] = ibuf * 1;
                            }
                            if (jj == 2) {
                                dutyA[ii] = ibuf;
                            }
                            if (jj == 3) {
                                timesA[ii] = ibuf;
                            }
                        }
                        if (err == 1) {
                            break;
                        }

                    }

                    if (err == 1) {
                        break;
                    }
                    //=======================================

                    int inx = 0;
                    cla.sockUartCmd_buf[inx++] = (byte) (cla.fpgaDeviceId & 255);
                    cla.sockUartCmd_buf[inx++] = (byte) ((cla.fpgaDeviceId >> 8) & 255);
                    cla.sockUartCmd_buf[inx++] = (byte) (0x00);//serial id
                    cla.sockUartCmd_buf[inx++] = (byte) (0x00);//serial id
                    //=========================================================
                    cla.sockUartCmd_buf[inx++] = (byte) (0x00);//groupId
                    cla.sockUartCmd_buf[inx++] = (byte) (0x00);//flag
                    int cmdLen = 10 + 30 * 6;
                    cla.sockUartCmd_buf[inx++] = (byte) (cmdLen & 255);//len low
                    cla.sockUartCmd_buf[inx++] = (byte) (cmdLen >> 8);//len high
                    cla.sockUartCmd_buf[inx++] = (byte) (0x1100 & 255);//command low  //pulseGenStart
                    cla.sockUartCmd_buf[inx++] = (byte) (0x1100 >> 8);//command high
                    cla.sockUartCmd_buf[inx++] = (byte) (trigAfterSetTime & 255);//trigAfterSetTime
                    cla.sockUartCmd_buf[inx++] = (byte) ((trigAfterSetTime >> 8) & 255);//
                    cla.sockUartCmd_buf[inx++] = (byte) (rfAfterTrigTime);//rfAfterTrigTime
                    cla.sockUartCmd_buf[inx++] = (byte) (trigAfterRfTime);//
                    cla.sockUartCmd_buf[inx++] = (byte) (0);//freq
                    cla.sockUartCmd_buf[inx++] = (byte) (0);//
                    cla.sockUartCmd_buf[inx++] = (byte) (flags & 255);//
                    cla.sockUartCmd_buf[inx++] = (byte) ((flags >> 8) & 255);//
                    for (int ii = 0; ii < 30; ii++) {
                        cla.sockUartCmd_buf[inx++] = (byte) (widthA[ii] & 255);
                        cla.sockUartCmd_buf[inx++] = (byte) (widthA[ii] >> 8);
                        cla.sockUartCmd_buf[inx++] = (byte) (dutyA[ii] & 255);
                        cla.sockUartCmd_buf[inx++] = (byte) (dutyA[ii] >> 8);
                        cla.sockUartCmd_buf[inx++] = (byte) (enableA[ii] & 255);
                        cla.sockUartCmd_buf[inx++] = (byte) (timesA[ii] & 255);
                    }
                    cla.sockUartCmd_len = inx;
                    sockUartCmd_tx_f = 1;
                    break;

                case "pulseGenStop":
                    cla.sockUartTxStd(0x1200, 0, 0);
                    break;
                case "setLocal":
                    cla.sockUartTxStd(0x1300, 0, 0);
                    break;
                case "setRemote":
                    cla.sockUartTxStd(0x1400, 0, 0);
                    break;
                    
                case "powerSuplyOnOff":
                    retStr = jsobjGet(cmdJso, "index");
                    int index=Integer.parseInt(retStr);
                    cla.sockUartTxStd(0x1500, index, 0);
                    break;
                    
                case "listUart":
                    okStr = UartC.listUart();
                    break;
                case "openFpgaComm":
                    break;
                case "closeFpgaComm":
                    break;
                case "rs232Start":
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

    public String gnCmdPrg(byte[] bts, int inx, int len, int flags) {
        int ibuf;
        short sbuf;
        byte bbuf;
        int cmd = (bts[inx + 0] & 255);
        cmd += (bts[inx + 1] & 255) * 256;
        int para0 = (bts[inx + 2] & 255);
        para0 += (bts[inx + 3] & 255) * 256;
        int para1 = (bts[inx + 4] & 255);
        para1 += (bts[inx + 5] & 255) * 256;
        int para2 = (bts[inx + 6] & 255);
        para2 += (bts[inx + 7] & 255) * 256;
        int para3 = (bts[inx + 8] & 255);
        para3 += (bts[inx + 9] & 255) * 256;
        inx += 10;
        //======================================
        cla.fpgaData.load_f = 1;

        sbuf = (short) ((bts[inx + 1] & 255) * 256 + (bts[inx] & 255)); //systemFlagLow
        inx += 2;
        cla.fpgaData.localRemote_f = (byte) ((sbuf >> 3) & 1);
        cla.fpgaData.pulseType = (byte) ((sbuf >> 4) & 1);
        cla.fpgaData.pulseStart_f = (byte) ((sbuf >> 5) & 1);
        sbuf = (short) ((bts[inx + 1] & 255) * 256 + (bts[inx] & 255)); //systemFlagHigh
        inx += 2;
        //
        sbuf = (short) ((bts[inx + 1] & 255) * 256 + (bts[inx] & 255)); //enviStatus
        inx += 2;
        for (int i = 0; i < cla.fpgaData.enviFlags.length; i++) {
            cla.fpgaData.enviFlags[i] = (byte) ((sbuf >> i) & 1);
        }
        sbuf = (short) ((bts[inx + 1] & 255) * 256 + (bts[inx] & 255));
        inx += 2;
        for (int i = 0; i < 3; i++) {
            cla.fpgaData.fiberRxFlags[i] = (byte) ((sbuf >> (i * 2 + 0)) & 1);
            cla.fpgaData.fiberTxFlags[i] = (byte) ((sbuf >> (i * 2 + 1)) & 1);
        }
        sbuf = (short) ((bts[inx + 1] & 255) * 256 + (bts[inx] & 255));
        inx += 2;
        for (int i = 0; i < cla.fpgaData.sspaCtrFlags.length; i++) {
            cla.fpgaData.sspaCtrFlags[i] = (byte) ((sbuf >> i) & 1);
        }
        cla.fpgaData.readyTime = (short) ((bts[inx + 1] & 255) * 256 + (bts[inx] & 255));
        inx += 2;
        cla.fpgaData.attenuator = bts[inx++];
        cla.fpgaData.testMode = bts[inx++];
        cla.fpgaData.testItem = bts[inx++];
        cla.fpgaData.testResult = bts[inx++];
        cla.fpgaData.rfFreq = bts[inx++];
        inx++;
        for (int i = 0; i < 6; i++) {
            cla.fpgaData.meterAd[i] = (short) ((bts[inx + 1] & 255) * 256 + (bts[inx] & 255));
            inx += 2;
        }
        if (para3 >= 32) {
            return "moniData over size";
        }
        cla.fpgaData.sspaMoniDatas_len = para3;
        for (int i = 0; i < 36; i++) {
            int binx=i*64;    
            for (int j = 0; j < para3 * 2; j++) {
                cla.fpgaData.sspaMoniDatas[binx++] = (byte) (bts[inx++] & 255);
            }
        }
        return null;
    }

    public void fpgaCommandPrg(String commandStr) {
        String[] strA = commandStr.split("#");
        if (strA[0].equals("selfTest")) {
            fpgaData.testMode = 1;
            fpgaData.testResult = 0;
            fpgaData.testItem = (byte) (Integer.parseInt(strA[2]));
            emuTimer = 0;
            return;
        }
        if (strA[0].equals("selfTestAllStop")) {
            fpgaData.testMode = 0;
            fpgaData.testResult = 0;
            return;
        }

    }

    static JSONObject wsCallBack(String userName,JSONObject mesJson, String actStr, JSONObject outJson) {
        Sync cla = Sync.scla;
        JSONObject valueJson;
        String[] strA = actStr.split("#");
        try {
            switch (strA[0]) {
                case "tick":
                    HashMap<String, String> strMap = cla.fpgaData.transToStringMap();
                    JSONObject jobj = new JSONObject(strMap);
                    outJson.put("fpgaDatas", jobj.toString());
                    break;
                case "selfTest":
                case "selfTestAllStop":
                    outJson.put("status", "OK");
                    outJson.put("message", "Command Has Received");
                    cla.fpgaCommandPrg(actStr);
                    break;
                default:
                    outJson.put("status", "ERROR");
                    outJson.put("message", "No This Command");
                    break;
            }
        } catch (Exception ex) {

        }

        return outJson;

    }

}

class FpgaData {

    byte[] dataBuf = new byte[4096];
    int dataBuf_len = 0;
    //==============================
    short load_f = 1;
    short readyTime = 99;
    byte radiation_f = 0;
    byte testMode = 0;//0:none, 1:on test.
    byte testItem = 0;
    byte testResult = 0;//0:none, 1:ok, else:error code
    byte localRemote_f = 0;//0:local, 1:remote;
    byte pulseType = 0;//0:random, 1:fixed;
    byte pulseStart_f = 0;
    byte attenuator = 0;

    byte rfFreq = 13;//2.9~3.5G 1:0.01G
    short trigAfterSetTime = 2 * 10;
    byte rfAfterTrigTime = 1 * 10;
    byte trigAfterRfTime = 1 * 10;

    byte[] enviFlags = new byte[15];
    byte[] fiberTxFlags = new byte[12];
    byte[] fiberRxFlags = new byte[12];
    byte[] sspaCtrFlags = new byte[10];

    byte[] pulseFlags = new byte[4];
    byte[] psFlags = new byte[36];
    byte[] sspaFlags = new byte[36];

    //================================
    short[] meterAd = new short[6];

    int sspaMoniDatas_len = 0;
    byte[] sspaMoniDatas = new byte[36 * 64];

    /*
    short[] psVolt = new short[36];
    short[] psCurrent = new short[36];
    short[] psTemperature = new short[36];
    short[] sspaInput = new short[36];
    short[] sspaOutput = new short[36];
    short[] sspaTemperature = new short[36];
    short[] sspaFlag = new short[36];
    short[] sspaAngle = new short[36];
     */
    short[] pulseWaves = new short[2 * 120];
    String cmdStr = "";
    String errString = "";

    FpgaData() {

    }

    HashMap<String, String> transToStringMap() {
        String str = "";
        HashMap<String, String> dataMap = new HashMap();
        if (load_f != 0) {
            dataMap.put("readyTime", "" + readyTime);
            dataMap.put("radiation_f", "" + radiation_f);
            dataMap.put("testMode", "" + testMode);
            dataMap.put("testItem", "" + testItem);
            dataMap.put("testResult", "" + testResult);
            dataMap.put("localRemote_f", "" + localRemote_f);
            dataMap.put("pulseType", "" + pulseType);
            dataMap.put("pulseStart_f", "" + pulseStart_f);
            dataMap.put("attenuator", "" + attenuator);
        }

        str = "";
        for (int i = 0; i < enviFlags.length; i++) {
            if (i != 0) {
                str += ",";
            }
            str += enviFlags[i];
        }
        dataMap.put("enviFlags", str);

        str = "";
        for (int i = 0; i < pulseFlags.length; i++) {
            if (i != 0) {
                str += ",";
            }
            str += pulseFlags[i];
        }
        dataMap.put("pulseFlags", str);

        str = "";
        for (int i = 0; i < psFlags.length; i++) {
            if (i != 0) {
                str += ",";
            }
            str += psFlags[i];
        }
        dataMap.put("psFlags", str);

        str = "";
        for (int i = 0; i < sspaFlags.length; i++) {
            if (i != 0) {
                str += ",";
            }
            str += sspaFlags[i];
        }
        dataMap.put("sspaFlags", str);

        str = "";
        for (int i = 0; i < fiberTxFlags.length; i++) {
            if (i != 0) {
                str += ",";
            }
            str += fiberTxFlags[i];
        }
        dataMap.put("fiberTxFlags", str);

        str = "";
        for (int i = 0; i < fiberRxFlags.length; i++) {
            if (i != 0) {
                str += ",";
            }
            str += fiberRxFlags[i];
        }
        dataMap.put("fiberRxFlags", str);

        str = "";
        for (int i = 0; i < meterAd.length; i++) {
            if (i != 0) {
                str += ",";
            }
            str += meterAd[i];
        }
        dataMap.put("meterAd", str);
        //============
        str = "";
        for (int j = 0; j < 36; j++) {
            int binx=j*64;
            if (j != 0) {
                str += "~";
            }
            for (int i = 0; i < sspaMoniDatas_len*2; i++) {
                if (i != 0) {
                    str += ",";
                }
                str += (sspaMoniDatas[binx++]&255);
            }
        }
        dataMap.put("sspaMoniDatas", str);

        str = "";
        for (int i = 0; i < pulseWaves.length; i++) {
            if (i != 0) {
                str += ",";
            }
            str += pulseWaves[i];
        }
        dataMap.put("pulseWaves", str);

        if (cmdStr.length() > 0) {
            dataMap.put("cmdString", cmdStr);
        }

        if (errString.length() > 0) {
            dataMap.put("errString", errString);
        }
        return dataMap;

    }

}

class SyncTm1 implements ActionListener {

    String str;
    Sync cla;
    File file;
    FileInputStream reader;
    int secBaseTime = 0;
    int tm1Cnt = 0;
    int tm1Buf = 0;
    int tm1Flag = 0;
    int secCnt = 0;

    SyncTm1(Sync owner) {
        cla = owner;
    }

    public void commandPrg() {
        try {
            switch (cla.commandStr) {
                case "":
                    break;
            }

        } catch (Exception ex) {
            Logger.getLogger(UartTestTm1.class.getName()).log(Level.SEVERE, null, ex);
            cla.commandStr = "";
        }
        cla.commandStr = "";
    }

    public void emuPrg() {
        try {
            if (cla.fpgaData.readyTime >= 999) {
                cla.fpgaData.readyTime = 20;
            }
            if (secBaseTime == 0) {
                if (cla.fpgaData.readyTime > 0) {
                    cla.fpgaData.readyTime--;
                } else {
                    cla.fpgaData.radiation_f = 1;
                }
            }

            byte flash = 0;
            if ((secCnt & 1) != 0) {
                flash = 1;
            }

            for (int i = 0; i < cla.fpgaData.enviFlags.length; i++) {
                cla.fpgaData.enviFlags[i] = flash;
            }
            for (int i = 0; i < cla.fpgaData.psFlags.length; i++) {
                cla.fpgaData.psFlags[i] = flash;
            }
            for (int i = 0; i < cla.fpgaData.pulseFlags.length; i++) {
                cla.fpgaData.pulseFlags[i] = flash;
            }
            for (int i = 0; i < cla.fpgaData.sspaFlags.length; i++) {
                cla.fpgaData.sspaFlags[i] = flash;
            }
            for (int i = 0; i < cla.fpgaData.fiberTxFlags.length; i++) {
                cla.fpgaData.fiberTxFlags[i] = flash;
            }

            for (int i = 0; i < cla.fpgaData.fiberRxFlags.length; i++) {
                cla.fpgaData.fiberRxFlags[i] = flash;
            }

            if (cla.fpgaData.testMode == 1) {
                cla.emuTimer++;
                if (cla.emuTimer == 50) {
                    cla.fpgaData.testMode = 0;
                    if (cla.fpgaData.testItem == 2) {
                        cla.fpgaData.testResult = 2;
                    } else {
                        cla.fpgaData.testResult = 1;
                    }
                }
            }
            /*
            for (int i = 0; i < 36; i++) {
                if (cla.fpgaData.psVolt[i] > 150) {
                    cla.fpgaData.psVolt[i] = 0;
                }
                cla.fpgaData.psVolt[i] += 1;

                if (cla.fpgaData.psCurrent[i] > 100) {
                    cla.fpgaData.psCurrent[i] = 0;
                }
                cla.fpgaData.psCurrent[i] += 1;

                if (cla.fpgaData.psTemperature[i] > 120) {
                    cla.fpgaData.psTemperature[i] = 0;
                }
                cla.fpgaData.psTemperature[i] += 1;

                if ((tm1Flag & 0x08) != 0) {
                    cla.fpgaData.sspaInput[i] = (short) (340 + Math.random() * 20);
                }

                if ((tm1Flag & 0x08) != 0) {
                    cla.fpgaData.sspaOutput[i] = (short) (700 + Math.random() * 20);
                }

                if ((tm1Flag & 0x20) != 0) {
                    cla.fpgaData.sspaTemperature[i] = (short) (70 + Math.random() * 5);
                }
                if ((tm1Flag & 0x10) != 0) {
                    cla.fpgaData.sspaAngle[i] = (short) (Math.random() * 360);
                }

            }
            */
            for (int i = 0; i < 6; i++) {
                if (cla.fpgaData.meterAd[i] > 1000) {
                    cla.fpgaData.meterAd[i] = 0;
                }
                cla.fpgaData.meterAd[i] += 11;
            }

        } catch (Exception ex) {
            Logger.getLogger(UartTestTm1.class.getName()).log(Level.SEVERE, null, ex);
        }
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
        //emuPrg();
        commandPrg();
    }
}

class UartC {

    Sync cla;
    String name;
    SerialPort uartPort;
    int seted_f = 0;
    CommPortSender uartTx;
    CommPortReceiver uartRx;
    String portStr = "1";
    String boudrateStr = "115200";
    String parityStr = "None";//Noen | Even | Odd

    UartC(Sync owner, String _name) {
        cla = owner;
        name = _name;
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
        cla.gnRxPrg(name, bts, len);
        return null;
    }

}

class ServerReturnCxxx {

    byte[] buf;
    int len = 0;
    int tx_f = 0;
    int size = 0;

    ServerReturnCxxx(int _size) {
        size = _size;
        buf = new byte[size];
    }
}

class MyComm {

    Sync cla;
    String name;
    String instComm;
    UartC uartC;
    int txInx = 0;

    MyComm(Sync owner, String _name, String _instComm) {
        cla = owner;
        name = _name;
        instComm = _instComm;
        if (instComm.equals("uart")) {
            uartC = new UartC(cla, name);
            return;
        }
    }

    String open() {
        String errStr = "instComm inavailable !!!";
        if (instComm.equals("uart")) {
            errStr = uartC.setUart();
        }
        return errStr;
    }

    void close() {
        if (instComm.equals("uart")) {
            uartC.closeUart();
            return;
        }
    }

    void loadTxStart() {
        txInx = 0;
    }

    void loadTxByte(byte bs) {
        if (instComm == "uart") {
            uartC.uartTx.stm.tbuf[txInx++] = bs;
            return;
        }
    }

    void loadTxEnd() {
        if (instComm == "uart") {
            uartC.uartTx.stm.tbuf_byte = txInx;
            uartC.uartTx.stm.enc_mystm();
            uartC.uartTx.send();
            return;
        }
    }

}
