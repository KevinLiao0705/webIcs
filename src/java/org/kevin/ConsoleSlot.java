package org.kevin;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import static java.lang.Double.isNaN;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Scanner;
import java.util.Timer;
import java.util.TimerTask;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.json.JSONArray;
import org.json.JSONObject;
import classes.*;
import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;

//asterisk sound location: usr/share/asterisk/sounds/en/
public class ConsoleSlot {

    static ConsoleSlot scla;
    String title_str = "title_str";
    int fullScr_f = 0;
    int winW = 1600;
    int winH = 800;
    int debug_f = 1;
    int cmdInx = 0;
    Timer tm1 = null;
    PbxSet pbxSet;
    ConsoleSlotCmdExe cexe;
    Map<String, CmdTask> taskMap;
    Map<String, ChkRxA> rxMap;
    Map<String, CmdStatus> cmdStaMap;
    Map<String, ExStatus> exStaMap;
    Map<String, ExStatus> exStaMapTmp;
    NowSlotSta nsta = new NowSlotSta();
    int pbxStatusTim = 0;
    int pbxStatusDly = 50;
    int pjsipShowAors_f = 0;
    int pjsipShowChannelStats_f = 1;
    int nstaStep = 0;
    KvComm uiComm;
    KvComm ioComm;
    //String recordPath="./record";
    //String recordPath = "E:/kevin/myCode/webIcs/web/user-webIcs/record";
    //String recordPath="D:/kevin/myCode/webIcs/web/user-webIcs/record";
    String recordPath="E:/kevin/myCode/pbxSet/record/104";
    //===========================
    public ConsoleSlot() {
        ConsoleSlot.scla = this;
    }

    public void create() {
        String str;
        //=======================================================
        final ConsoleSlot cla = this;
        //nsta.ip = "192.168,200,200";//defalu ip
        //nsta.count = 1;
        //nsta.type = "sip";
        //nsta.status=3;
        //=======================================================
        pbxSet = new PbxSet();
        pbxSet.create();
        pbxSet.shellRx = new ShellRx() {
            @Override
            public void sshRx(String str) {
                if (str != null) {
                    String[] strA = str.split("\n");
                    int inx = 0;
                    while (inx < strA.length) {
                        System.out.println(strA[inx]);
                        inx = decShell(strA, inx);
                    }
                    //System.out.print("***BREAK***");
                } else {
                    //System.out.print("***END***");
                }
            }
        };

        //=======================================
        uiComm = new KvComm("uiComm", "serverSocket", 65536 * 256);
        uiComm.serverSocket.format = 2;
        uiComm.serverSocket.rxcon_ltim = 100;
        uiComm.serverSocket.port = cla.nsta.port;
        uiComm.serverSocket.setCallBack(new BytesCallback() {
            @Override
            public String prg(byte[] bytes, int len) {
                cla.uiCommRx(bytes, len);
                return null;
            }
        });
        uiComm.open();

        //=======================================
        ioComm = new KvComm("ioComm", "serverSocket");
        ioComm.serverSocket.format = 0;
        ioComm.serverSocket.rxcon_ltim = 100;
        ioComm.serverSocket.port = GB.ctrIoPort;
        ioComm.serverSocket.stm.setCallBack(new BytesCallback() {
            @Override
            public String prg(byte[] bytes, int len) {
                cla.sskioRx(bytes, len);
                return null;
            }
        });
        ioComm.open();

        //=======================================================
        rxMap = new HashMap<String, ChkRxA>();
        taskMap = new HashMap<String, CmdTask>();
        cmdStaMap = new HashMap<String, CmdStatus>();
        //exStaMap = new HashMap<String, ExStatus>();
        cexe = new ConsoleSlotCmdExe(cla, taskMap);
        //=======================================
        //CmdTask task1 = new CmdTask("test");
        //task1.retryAmt = 0;
        //cexe.addMap(task1);
        //=====================================
        if (cla.tm1 == null) {
            cla.tm1 = new Timer();
            tm1.schedule(new ConsoleSlotTm1(cla), 1000, 20);
        }
        //=====================================
        System.out.println("Console Slot Ready.");
        boolean commandInput_b = false;
        while (commandInput_b) {
            Scanner input = new Scanner(System.in);
            str = input.nextLine().trim();
            if (!str.equals("")) {
                cmdStr(str);
            }
        }

    }

    public int decShell(String[] strA, int inx) {
        int index = inx;
        String[] strB;
        String[] strC;
        inx++;
        if (nsta.action.equals("pjsipShowAors")) {
            if (strA[index].contains("Contact:  <Aor/ContactUri...")) {
                exStaMapTmp = new HashMap<String, ExStatus>();
                pjsipShowAors_f = 1;
                return inx;
            }
            if (pjsipShowAors_f == 1) {
                if (strA[index].contains(" Aor:  ")) {
                    strB = strA[index].trim().split("\\s+");
                    ExStatus est = new ExStatus(strB[1]);
                    est.status = 1;
                    exStaMapTmp.put(strB[1], est);
                    return inx;
                }
                if (strA[index].contains("    Contact:  ")) {
                    strB = strA[index].trim().split("\\s+");
                    strC = strB[1].split("/");
                    ExStatus est = new ExStatus(strC[0]);
                    est.status = 2;
                    exStaMapTmp.put(strC[0], est);
                    return inx;
                }
                if (strA[index].contains("mainpbx@mainpbx:~$ ")) {
                    pjsipShowAors_f = 0;
                    exStaMap = exStaMapTmp;
                    return inx;
                }

            }
            return inx;
        }

        if (nsta.action.equals("pjsipShowChannelStats")) {
            if (exStaMap == null) {
                return inx;
            }
            if (strA[index].contains("No objects found.")) {
                for (String keyStr : exStaMap.keySet()) {
                    ExStatus ex = exStaMap.get(keyStr);
                    if (ex.status >= 3) {
                        ex.status = 2;
                    }
                }
                return inx;
            }
            if (strA[index].contains("BridgeId ChannelId")) {
                pjsipShowChannelStats_f = 1;
                return inx;
            }
            if (pjsipShowChannelStats_f == 1) {
                if (strA[index].contains("mainpbx@mainpbx:~$ ")) {
                    pjsipShowChannelStats_f = 0;
                    return inx;
                }
                if (strA[index].contains("not valid")) {
                    strB = strA[index].trim().split("\\s+");
                    strC = strB[0].split("-");
                    strB = strC[0].split("/");
                    ExStatus ex = exStaMap.get(strB[1]);
                    if (ex != null) {
                        ex.status = 3;
                    }
                    return inx;
                }

                strB = strA[index].trim().split("\\s+");
                if (strB.length == 13) {
                    strC = strB[1].split("-");
                    ExStatus ex = exStaMap.get(strC[0]);
                    if (ex != null) {
                        ex.status = 4;
                    }
                }
                return inx;
            }

            return inx;
        }

        switch (strA[index]) {
            case "mainpbx@mainpbx:~$ ":
                if (nsta.status <= 1) {
                    nsta.status = 2;
                    System.out.println("<ShellInf> linux is ready.");
                }
                if (nsta.action.equals("startAsterisk")) {
                    nsta.action = "";
                    nsta.asteriskSta = 1;
                    pbxStatusTim = 0;
                    System.out.println("<ShellInf> asterisk start....");
                }
                if (nsta.action.equals("stopAsterisk")) {
                    nsta.action = "";
                    nsta.asteriskSta = 0;
                    System.out.println("<ShellInf> asterisk stopped.");
                }

                return inx;
        }
        return inx;
    }

    public String cmdStr(String cmdstr) {
        final ConsoleSlot cla = this;
        String errStr = null;
        String content = null;
        if (cmdstr.equals("exit")) {
            System.exit(0);
            return errStr;
        }
        String[] strCmdA = cmdstr.split(" ");

        if (strCmdA[0].equals("stopAsterisk")) {
            nsta.action = "stopAsterisk";
            nsta.actionTim = 50;
            pbxSet.sshWriteShl("sudo asterisk -rx \"core stop now\"\n");
            return errStr;
        }
        if (strCmdA[0].equals("startAsterisk")) {
            nsta.action = "startAsterisk";
            nsta.actionTim = 500;
            pbxSet.sshWriteShl("sudo systemctl start asterisk\n");
            return errStr;
        }

        if (strCmdA[0].equals("pjsipShowAors")) {
            nsta.action = "pjsipShowAors";
            nsta.actionTim = 50;
            pbxSet.sshWriteShl("sudo asterisk -rx \"pjsip show aors\"\n");
            return errStr;
        }
        if (strCmdA[0].equals("pjsipShowChannelStats")) {
            nsta.action = "pjsipShowChannelStats";
            nsta.actionTim = 50;
            pbxSet.sshWriteShl("sudo asterisk -rx \"pjsip show channelstats\"\n");
            return errStr;
        }

        if (strCmdA[0].equals("wconf")) {
            errStr = pbxSet.cmdStr(cmdstr);
            if (errStr != null) {
                System.out.println(errStr);
            }
            return errStr;
        }

        if (strCmdA[0].equals("readFile")) {
            try {
                content = Lib.readFile("paraSet.json");
            } catch (Exception ex) {

            }

            return errStr;
        }

        if (cmdstr.equals("bypassSystemSecurity")) {
            return errStr;
        }
        if (cmdstr.equals("clearSystemSecurity")) {
            return errStr;
        }
        System.out.println("<SysInf> no this command !!!");
        return "Command Not Found !!!";

    }

    void sskioRx(byte[] bts, int len) {
    }

    void uiCommRx(byte[] bytes, int len) {
        ConsoleSlot cla = this;
        FileWriter fw;
        String jstr = "";
        String contentStr;
        String retStr;
        for (int i = 0; i < cla.uiComm.serverSocket.myRxDataList.size(); i++) {
            MyRxData mrd = cla.uiComm.serverSocket.myRxDataList.get(i);
            try {
                if (mrd.format == 2) {
                    continue;
                }
                if (mrd.format == 0) {
                    jstr = new String(bytes, mrd.offset, mrd.len, "UTF-8");
                    JSONObject jobj = new JSONObject(jstr);
                    String cmdStr = jobj.get("act").toString();
                    int cmdInx = (int) jobj.get("cmdInx");

                    if (cmdStr.equals("testResponse")) {
                        retStr = Lib.actResponse(cmdStr, "ok", cmdInx);
                        cla.uiComm.serverSocket.txPackRetJsonStr(retStr);
                        return;
                    }
                    if (cmdStr.equals("getExRecordNames")) {
                        JSONObject jout = new JSONObject();
                        jout.put("act", "actResponse");
                        jout.put("actName", cmdStr);
                        jout.put("status", "ok");
                        jout.put("cmdInx", cmdInx);
                        jout.put("reti", 1);
                        String exNumber = jobj.get("exNumber").toString();
                        String path = cla.recordPath + "/" + exNumber;
                        jout.put("path", path);
                        String[] strA = "*.gsm".split(",");
                        ArrayList<String> astr = Lib.readFileNames(path, strA);
                        String nstr = Lib.stringListToString(astr);
                        jout.put("fileNames", nstr);
                        jout.put("ip", GB.real_ip_str);
                        cla.uiComm.serverSocket.txPackRetJsonStr(jout.toString());
                        return;

                    }

                    if (cmdStr.equals("getRecordFile")) {
                        String fileName = jobj.get("fileName").toString();
                        JSONObject jout = new JSONObject();
                        jout.put("act", "actResponse");
                        jout.put("actName", cmdStr);
                        jout.put("status", "ok");
                        jout.put("cmdInx", cmdInx);
                        jout.put("reti", 1);
                        jout.put("fileName", fileName);
                        jout.put("readFilePackageId", 1);
                        //=====================================
                        TrxData txData = new TrxData(2);
                        txData.formats[0] = 0;
                        txData.packageIds[0] = 0;
                        txData.datas[0] = jout.toString().getBytes();
                        File file = new File(fileName);  // assume args[0] is the path to file
                        txData.formats[1] = 2;
                        txData.packageIds[1] = 1;
                        txData.datas[1] = Files.readAllBytes(Paths.get(fileName));
                        cla.uiComm.serverSocket.txPackRet(txData);
                        return;

                    }

                    if (cmdStr.equals("startAsterisk")) {
                        retStr = Lib.actResponse(cmdStr, "ok", cmdInx);
                        cla.uiComm.serverSocket.txPackRetJsonStr(retStr);
                        cla.cmdStr("startAsterisk");
                        return;
                    }
                    if (cmdStr.equals("stopAsterisk")) {
                        retStr = Lib.actResponse(cmdStr, "ok", cmdInx);
                        cla.uiComm.serverSocket.txPackRetJsonStr(retStr);
                        cla.cmdStr("stopAsterisk");
                        return;
                    }
                    if (cmdStr.equals("getSlotInf")) {
                        JSONObject jout = new JSONObject();
                        jout.put("act", "actResponse");
                        jout.put("actName", cmdStr);
                        jout.put("status", "ok");
                        jout.put("cmdInx", cmdInx);
                        jout.put("reti", 1);
                        jout.put("slotInf", nsta.getJson());
                        String str = "";
                        if (exStaMap != null) {
                            for (String keyStr : exStaMap.keySet()) {
                                ExStatus st = exStaMap.get(keyStr);
                                if (!str.equals("")) {
                                    str += ",";
                                }
                                str += keyStr + "-" + st.status;
                            }
                            jout.put("exInf", str);
                        }
                        cla.uiComm.serverSocket.txPackRetJsonStr(jout.toString());
                        return;

                    }

                    if (cmdStr.equals("reNewParaSet")) {
                        retStr = Lib.actResponse(cmdStr, "ok", cmdInx);
                        cla.uiComm.serverSocket.txPackRetJsonStr(retStr);
                        cla.nsta.status=3;
                        /*
                        contentStr = jobj.get("content").toString();
                        String wFileName = "paraSetTmp.json";
                        String content = jobj.get("content").toString();
                        fw = new FileWriter(wFileName);
                        fw.write(content);
                        fw.flush();
                        fw.close();
                        cla.nsta.status=3;
                        
                        pbxSet.cmdStr("wconf sip 0");
                        retStr = Lib.actResponse(cmdStr, "ok", cmdInx);
                        cla.uiComm.serverSocket.txPackRetJsonStr(retStr);
                        System.out.println("<SlotRxUi>reNewParaSet");
                        cla.cmdStr("startAsterisk");
                        */
                        return;
                    }

                    if (cmdStr.equals("upLoadFile")) {
                        String wFileName = jobj.get("wFileName").toString();
                        String content = jobj.get("content").toString();
                        fw = new FileWriter(wFileName);
                        fw.write(content);
                        fw.flush();
                        fw.close();
                        retStr = Lib.actResponse(cmdStr, "ok", cmdInx);
                        cla.uiComm.serverSocket.txPackRetJsonStr(retStr);
                        return;
                    }

                    if (cmdStr.equals("readFile")) {
                        String rFileName = jobj.get("rFileName").toString();
                        String content = Lib.fileToString(rFileName);
                        if (content == null) {
                            retStr = Lib.actResponse(cmdStr, "read file error !!!", cmdInx);
                            cla.uiComm.serverSocket.txPackRetJsonStr(retStr);
                            return;
                        }
                        JSONObject jout = new JSONObject();
                        jout.put("act", "actResponse");
                        jout.put("actName", cmdStr);
                        jout.put("status", "ok");
                        jout.put("cmdInx", cmdInx);
                        jout.put("reti", 1);
                        jout.put("rFileName", rFileName);
                        jout.put("content", content);
                        cla.uiComm.serverSocket.txPackRetJsonStr(jout.toString());
                        return;
                    }
                }
            } catch (Exception ex) {
                System.out.println(jstr);

            }
        }

    }
}

class ConsoleSlotTm1 extends TimerTask {

    String str;
    ConsoleSlot cla;

    ConsoleSlotTm1(ConsoleSlot owner) {
        cla = owner;
    }

    @Override
    public void run() {
        int i;
        i = 10;
        if (cla.nsta.actionTim > 0) {
            cla.nsta.actionTim--;
            if (cla.nsta.actionTim == 0) {
                cla.nsta.action = "";
            }
        }
        cla.cexe.exeTaskMap();
        if (++cla.pbxStatusTim > cla.pbxStatusDly) {
            if (cla.nsta.action.equals("")) {
                cla.pbxStatusTim = 0;
                if (cla.nsta.asteriskSta == 1) {
                    if (++cla.nstaStep >= 2) {
                        cla.nstaStep = 0;
                    }
                    if (cla.nstaStep == 0) {
                        cla.nsta.action = "pjsipShowAors";
                        cla.nsta.actionTim = 50;
                        cla.pbxSet.sshWriteShl("sudo asterisk -rx \"pjsip show aors\"\n");
                    }
                    if (cla.nstaStep == 1) {
                        cla.nsta.action = "pjsipShowChannelStats";
                        cla.nsta.actionTim = 50;
                        cla.pbxSet.sshWriteShl("sudo asterisk -rx \"pjsip show channelstats\"\n");
                    }
                }
            }
            /*
            if (cla.nsta.asteriskSta == 1) {
                cla.nsta.action = "pjsip show aors";
                cla.nsta.actionTim = 50;
                cla.pbxSet.sshWriteShl("sudo asterisk -rx \"pjsip show aors\"\n");
            }
             */
        }

    }

}

class ConsoleSlotCmdExe {

    ConsoleSlot cla;
    Map<String, CmdTask> taskMap;

    ConsoleSlotCmdExe(ConsoleSlot owner, Map<String, CmdTask> _taskMap) {
        cla = owner;
        taskMap = _taskMap;
    }

    public void exeTaskMap() {
        for (String key : taskMap.keySet()) {
            exeTask(taskMap.get(key));
        }
    }

    public void addMap(CmdTask task) {
        taskMap.put(task.name, task);
    }

    public int taskEnd(CmdTask task) {
        task.stepInx = 0;
        task.stepTim = 0;
        task.retryTim = 0;
        task.retryCnt += 1;
        if (task.retryAmt > 0) {
            if (task.retryCnt >= task.retryAmt) {
                taskMap.remove(task.name);
                return 1;
            }
        }
        return 0;
    }

    public int exeTask(CmdTask task) {
        if (task.retryTim < task.retryDly) {
            task.retryTim++;
            return 0;
        }
        switch (task.name) {
            case "reNewParaSet":
                return 0;
            case "test":
                return 0;
            default:
                return 0;
        }
    }
}

class NowSlotSta {

    int status = 2;//0:none(dark), 1:exist(y blink) ,2: ready(y), 3:paraSet loaded(green blink), 4:pbx run(greeen) 5:error(red),
    String ip = GB.real_ip_str;
    int port = 49999;
    String type = GB.slotType;//ctr | sip | fxo | fxs | t1s | roip | mag  | record 
    int count = GB.slotCount;
    String inf = "";
    String action = "";
    int asteriskSta = 0;//
    int actionTim = 0;
    int slotCnt = 0;
    int swFlag;
    int mcuFlag0;
    int mcuFlag1;
    int setIp;
    int channelFlag = 0;
    int ledFlag = 0;
    byte[] allSlotSta = new byte[128];
    String firmVer = "0.0";

    NowSlotSta() {
    }

    public JSONObject getJson() {
        JSONObject json = new JSONObject();
        try {
            json.put("ip", ip);
            json.put("type", type);
            json.put("count", count);
            json.put("status", status);
            json.put("inf", inf);
            json.put("action", action);
            json.put("asteriskSta", asteriskSta);
            json.put("firmVer", firmVer);
            json.put("startTime", GB.startTime);
        } catch (Exception ex) {
            return null;
        }
        return json;
    }

}
