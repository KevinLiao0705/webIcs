/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.kevin;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.Timer;
import java.util.TimerTask;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 *
 * @author Administrator
 */
public class PbxSet {

    byte[] ioBuf = new byte[16];
    //===============================
    int shellCommandStatus = 0;      //0:ready,1:play dial tone
    //==============================
    int shlFirstIn_f = 0;
    //============================
    Ssh sshShl = null;
    ShlrxTd shlrxTd = null;
    ShlconTd shlconTd = null;
    int shlrxTd_run_f = 0;
    int shlrxTd_destroy_f = 0;
    int shlconTd_run_f = 0;
    int shlconTd_destroy_f = 0;
    ShellRx shellRx;

    //============================

    Timer tm1 = null;//for display
    Vt100 vtshl;

    PbxSet() {
        int i;
    }

    public void create() {

        int i = 0;

        final PbxSet cla = this;

        //=================================================
        vtshl = new Vt100();
        vtshl.clr_telscr();
        vtshl.vtcmp = new Vtcmp() {
            @Override
            public void cmp() {
                cla.vtcmpShl();
            }
        };

        if (cla.shlrxTd == null) {
            cla.shlrxTd = new ShlrxTd(cla);
            cla.shlrxTd.start();
            cla.shlrxTd_run_f = 1;
            cla.shlrxTd_destroy_f = 0;
        }
        if (cla.shlconTd == null) {
            cla.shlconTd = new ShlconTd(cla);
            cla.shlconTd.start();
            cla.shlconTd_run_f = 1;
            cla.shlconTd_destroy_f = 0;
        }

        
        
        
        //===================================================
        //general timer
        if (cla.tm1 == null) {
            cla.tm1 = new Timer();
            //tm1.schedule(new PbxSetTm1(cla), 1000, 20);
        }
        //======================================
        
        
        

    }

    void vtcmpShl() {
        PbxSet cla = this;
        int i = 0;
        String str;
        //============================================
        if (cla.vtshl.cmp("@raspberrypi:~$")) {
            if (shlFirstIn_f == 0) {

            }
            return;
        }
        if (cla.vtshl.cmp("Playing WAVE")) {
            shellCommandStatus = 1;
            return;
        }
    }

    public void sshWriteShl(String shellCommand) {
        PbxSet cla = this;
        if (cla.sshShl == null || cla.sshShl.connect_f == 0) {
            return;
        }
        try {
            cla.sshShl.outStrm.write(shellCommand.getBytes());
        } catch (IOException ex) {
        }
        try {
            cla.sshShl.outStrm.flush();
        } catch (IOException ex) {
        }
    }
    public void sshWriteByteShl(byte[] bytes) {
        PbxSet cla = this;
        if (cla.sshShl == null || cla.sshShl.connect_f == 0) {
            return;
        }
        try {
            cla.sshShl.outStrm.write(bytes);
        } catch (IOException ex) {
        }
        try {
            cla.sshShl.outStrm.flush();
        } catch (IOException ex) {
        }
    }
    
    

    
    

    void reset_network(String ipStr,String maskStr,String gatewayStr) {
        String cmdStr;
        cmdStr = "sudo ifconfig eth0 ";
        cmdStr += ipStr;
        cmdStr += " netmask ";
        cmdStr += maskStr;
        cmdStr += " broadcast ";
        cmdStr += gatewayStr;
        Lib.exe(cmdStr);

        GB.real_ip_str = ipStr;
        GB.real_ipmask_str = maskStr;
        GB.real_gateway_str = gatewayStr;

        //============================    
    }

    void txShellEsc() {
        byte[] bytes;
        bytes = new byte[2];
        bytes[0] = 0x03;
        bytes[1] = 13;
        //sshWriteShl(new String(bytes));
        sshWriteShl("kill $PID\n");
        shellCommandStatus = 0;

    }


    void txret_ssksip_inf(Ssocket ssk) {
        PbxSet cla = this;
        byte[] bytes;
        int i;
        try {
            for (i = 0; i < ssk.stm.txlen; i++) {
                ssk.outstr.write(ssk.stm.tdata[i]);
            }
        } catch (IOException ex) {
        }
    }
    
     public String getIaxHead(String type) {
        String iaxHead;
        for (;;) {
            if (type.equals("fxo")) {
                iaxHead = "IAX2/fxopbx1/";
                break;
            }
            if (type.equals("fxo")) {
                iaxHead = "IAX2/fxopbx2/";
                break;
            }
            if (type.equals("fxs1")) {
                iaxHead = "IAX2/fxspbx1/";
                break;
            }
            if (type.equals("fxs2")) {
                iaxHead = "IAX2/fxspbx2/";
                break;
            }
            if (type.equals("t1")) {
                iaxHead = "IAX2/t1pbx/";
                break;
            }
            iaxHead = "PJSIP/";
            break;
        }
        return iaxHead;
    }
   
    
    public String getFxoIaxHead(String type) {
        String iaxHead;
        for (;;) {
            if (type.equals("fxo")) {
                iaxHead = "IAX2/fxopbx1/";
                break;
            }
            if (type.equals("fxs1")) {
                iaxHead = "IAX2/fxspbx1/";
                break;
            }
            if (type.equals("fxs2")) {
                iaxHead = "IAX2/fxspbx2/";
                break;
            }
            if (type.equals("t1")) {
                iaxHead = "IAX2/t1pbx/";
                break;
            }
            if (type.equals("sip")) {
                iaxHead = "IAX2/mainpbx/";
                break;
            }
            iaxHead = "IAX2/mainpbx/";
            break;
        }
        return iaxHead;
    }
    
    
    //*000 call sipPbx1
    //*001 call sipPbx2
    //*010 call fxoPbx1
    //*011 call fxoPbs2
    //*020 call fxsPbx1
    //*021 call fxsPbs2
    //*030 call t1Pbx1
    //*031 call t1Pbs2
    public String getIaxConf(String sipType) {
        String content = "";
        content += "\n[general]";
        content += "\nbandwidth=low";
        content += "\ndisallow=lpc10";
        content += "\njitterbuffer=no";
        content += "\nencryption=yes";
        content += "\nautokill=yes";

        content += "\n";
        content += "\n[guest]";
        content += "\ntype=user";
        content += "\ncontext=public";
        content += "\ncallerid=\"Guest IAX User\"";
        content += "\n";
        content += "\n[iaxtel]";
        content += "\ntype=user";
        content += "\ncontext=default";
        content += "\nauth=rsa";
        content += "\ninkeys=iaxtel";
        content += "\n";
        content += "\n[iaxfwd]";
        content += "\ntype=user";
        content += "\ncontext=default";
        content += "\nauth=rsa";
        content += "\ninkeys=freeworlddialup";
        content += "\n";
        content += "\n[pbxin]";
        content += "\ntype=user";
        if (sipType.equals("sip")) {
            content += "\ncontext=from-pstn";
        }
        if (sipType.equals("fxo")) {
            content += "\ncontext=from-internal";
        }

        JSONArray jsArr;
        int len;
        String[] strA;
        try {
            jsArr = (JSONArray) GB.paraSetMap.get("slotInfos");
            len = jsArr.length();
            for (int i = 0; i < len; i++) {
                String infoStr = jsArr.get(i).toString() + " ";
                strA = infoStr.split(",");
                if (strA.length != 6) {
                    continue;
                }
                int yes_f = 0;
                if (strA[0].equals("sip")) {
                    yes_f = 1;
                }
                if (strA[0].equals("fxo")) {
                    yes_f = 1;
                }
                if (strA[0].equals("fxs")) {
                    yes_f = 1;
                }
                if (strA[0].equals("t1")) {
                    yes_f = 1;
                }
                if (yes_f == 0) {
                    continue;
                }

                content += "\n";
                content += "\n[" + strA[4] + "]";
                content += "\ntost=" + strA[5];
                content += "\ntype=peer";
                content += "\nqualify=yes";
                content += "\ncontext=from-pstn";

            }

        } catch (Exception ex) {
            System.err.println(ex.getClass().getName() + ": " + ex.getMessage());

        }

        return content;

    }
    
    
     public String getPjsipConf() {
        String content = "";
        String exRegisterPin = GB.paraSetMap.get("exRegisterPin").toString();

        content += "\n[transport-udp]";
        content += "\ntype=transport";
        content += "\nprotocol=udp";
        content += "\nbind=0.0.0.0";
        int len;
        String[] strA;
        try {
            for (String key : GB.exNoMap.keySet()) {
                ExNoObj obj = GB.exNoMap.get(key);
                int yes_f = 0;
                if (obj.type.equals("sip")) {
                    yes_f = 1;
                }
                if (obj.type.equals("soft")) {
                    yes_f = 1;
                }
                if (obj.type.equals("roip")) {
                    yes_f = 1;
                }
                if (obj.type.equals("magnet")) {
                    yes_f = 1;
                }
                if (yes_f == 0) {
                    continue;
                }
                content += "\n;=====================================";
                content += "\n[" + obj.no + "]";
                content += "\ntype=endpoint";
                content += "\ncontext=from-pstn";
                content += "\ndisallow=all";
                content += "\nallow=ulaw";
                content += "\ntransport=transport-udp";
                content += "\nauth=" + obj.no + "";
                content += "\naors=" + obj.no + "";
                content += "\n[" + obj.no + "]";
                content += "\ntype=auth";
                content += "\nauth_type=userpass";
                content += "\npassword=" + exRegisterPin + "";
                content += "\nusername="+ obj.no + "";
                content += "\n[" + obj.no + "]";
                content += "\ntype=aor";
                content += "\nmax_contacts=1";
                content += "\n";

            }

        } catch (Exception ex) {
            System.err.println(ex.getClass().getName() + ": " + ex.getMessage());

        }

        return content;

    }
   
    public String getSipExtensions() {
        String bstr;
        try {
            String processType = GB.paraSetMap.get("processType").toString();

            String content = "";
            content += "\n[general]";
            content += "\nstatic=yes";
            content += "\nwriteprotect=no";
            content += "\nclearglobalvars=no";
            content += "\n";
            content += "\n[globals]";
            content += "\nCONSOLE=Console/dsp";
            content += "\n";
            content += "\n[from-pstn]";
            content += "\nexten => 10000,1,Answer()";
            content += "\n  same => n,Playback(hello-world)";

            String iaxHead = "";
            int fxsCnt = 0;
            for (String key : GB.exNoMap.keySet()) {
                ExNoObj obj = GB.exNoMap.get(key);

                int sipStep = 1;
                content += "\n";
                content += "\n; Type:" + obj.type + ", Name:" + obj.name + ", No:" + obj.no;
                content += "\n; JmpGroup:" + obj.reTakeGroup + ", ReTakeGroup:" + obj.jmpGroup;
                content += "\nexten => " + obj.no + "," + sipStep + ",NoOp(${CALLERID})";
                sipStep++;
                ArrayList<String> strList = new ArrayList<String>();
                strList.add(obj.no);
                if (obj.reTakeGroup != null) {
                    ExGroupObj objGroup = GB.exGroupMap.get(obj.reTakeGroup);
                    if (objGroup != null) {
                        for (int i = 0; i < objGroup.noList.size(); i++) {
                            String noStr = objGroup.noList.get(i);
                            if (!noStr.equals(obj.no)) {
                                strList.add(noStr);
                            }
                        }
                    }
                }
                if (strList.size() <= 1) {
                    //content += "\nexten => " + phNo + ",1,Goto(sipContext,${EXTEN},1)";
                    content += "\n  same => " + sipStep + ",GotoIf($[\"${CALLERID(num)}\" = \"" + obj.no + "\"]?callSelf)";
                    sipStep++;
                    content += "\n  same => " + sipStep + ",Dial(" + getIaxHead(obj.type) + "${EXTEN}," + obj.sipPhoneRingTime + ")";
                    sipStep++;
                } else {
                    bstr = "";
                    for (int i = 0; i < strList.size(); i++) {
                        if (i != 0) {
                            bstr += "&";
                        }
                        bstr += getIaxHead(obj.type) + strList.get(i);
                    }
                    content += "\n  same => " + sipStep + ",Dial(" + bstr + "," + obj.sipPhoneRingTime + ")";
                    sipStep++;

                }
                if (obj.jmpGroup != null) {
                    ExGroupObj objGroup = GB.exGroupMap.get(obj.jmpGroup);
                    if (objGroup != null) {
                        for (int i = 0; i < objGroup.noList.size(); i++) {
                            String noStr = objGroup.noList.get(i);
                            if (noStr.equals(obj.no)) {
                                continue;
                            }
                            content += "\n  same => " + sipStep + ",GotoIf($[\"${CALLERID(num)}\" = \"" + noStr + "\"]?" + (sipStep + 2) + ")";
                            sipStep++;
                            content += "\n  same => " + sipStep + ",Dial(" + getIaxHead(obj.type) + noStr + "," + obj.sipPhoneRingTime + ")";
                            sipStep++;
                            content += "\n  same => " + sipStep + ",NoOp()";
                            sipStep++;
                        }
                    }
                }

                content += "\n  same => " + sipStep + ",Hangup()";
                sipStep++;
                content += "\n  same => " + sipStep + "(callSelf),Goto(canclePhone,10000,1)";
                sipStep++;
            }
            JSONArray jsArr;
            int len;

            //Broadcast
            content += "\n";
            content += "\n;Broadcast";
            content += "\n;=============================================";
            jsArr = (JSONArray) GB.paraSetMap.get("broadGroups");
            len = jsArr.length();
            for (int i = 0; i < len; i++) {
                String groupStr = jsArr.get(i).toString() + " ";
                String[] strA = groupStr.split("~");
                if (strA.length != 3) {
                    continue;
                }
                String[] strB = strA[1].split(",");
                String[] strC = strA[2].split(",");
                if (strB.length < 1) {
                    continue;
                }
                if (strC.length < 1) {
                    continue;
                }

                bstr = "";
                int next = 0;
                for (int j = 0; j < strC.length; j++) {
                    ExNoObj obj = GB.exNoMap.get(strC[j].trim());
                    if (obj == null) {
                        continue;
                    }
                    if (next >= 1) {
                        bstr += "&";
                    }
                    next++;
                    bstr += getIaxHead(obj.type);
                    bstr += obj.no;
                }

                //            content += "\n  same => " + sipStep + ",GotoIf($[\"${CALLERID(num)}\" = \"" + noStr + "\"]?" + (sipStep + 2) + ")";
                if (i != 0) {
                    content += "\n";
                }
                content += "\nexten => " + strA[0].trim() + ",1,NoOp()";
                content += "\n  same => n,Answer()";
                for (int j = 0; j < strB.length; j++) {
                    content += "\n  same => n,GotoIf($[\"${CALLERID(num)}\" = \"" + strB[j] + "\"]?" + "broadEntry" + ")";
                }
                content += "\n  same => n,Goto(errPermission,10000,1)";
                content += "\n  same => n(broadEntry),NoOp()";
                content += "\n  same => n,Set(CALLERID(num)=*" + strA[0].trim() + ")";
                content += "\n  same => n,Page(" + bstr + ",i,10)";
                content += "\n  same => n,Hangup()";
            }
            content += "\n;=============================================";

            //Conference
            content += "\n";
            content += "\n;Conference";
            content += "\n;=============================================";
            jsArr = (JSONArray) GB.paraSetMap.get("meetGroups");
            len = jsArr.length();
            for (int i = 0; i < len; i++) {
                String groupStr = jsArr.get(i).toString() + " ";
                String[] strA = groupStr.split("~");
                if (strA.length != 4) {
                    continue;
                }
                String[] strB = strA[2].split(",");
                String[] strC = strA[3].split(",");
                if (strB.length < 1) {
                    continue;
                }
                if (strC.length < 1) {
                    continue;
                }

                //            content += "\n  same => " + sipStep + ",GotoIf($[\"${CALLERID(num)}\" = \"" + noStr + "\"]?" + (sipStep + 2) + ")";
                if (i != 0) {
                    content += "\n";
                }
                content += "\nexten => " + strA[0].trim() + ",1,NoOp()";
                content += "\n  same => n,Answer()";
                content += "\n  same => n,GotoIf($[${GROUP_COUNT(1@${EXTEN})} > 0]?userMenber)";
                if (strB[0].trim().equals("all")) {
                    content += "\n  same => n,GotoIf($[1 > 0]?adminEntry)";
                } else {
                    for (int j = 0; j < strB.length; j++) {
                        content += "\n  same => n,GotoIf($[\"${CALLERID(num)}\" = \"" + strB[j].trim() + "\"]?" + "adminEntry" + ")";
                    }
                }
                content += "\n  same => n,Goto(errPermission,10000,1)";

                content += "\n  same => n(adminEntry),NoOp()";
                content += "\n  same => n,Read(ConfPin,josn/pinPass," + strA[1].length() + ",,2,5)";
                content += "\n  same => n,GotoIf($[\"${ConfPin}\" = \"" + strA[1] + "\"]?" + "meetEntry" + ")";
                content += "\n  same => n,Goto(pinError,10000,1)";

                content += "\n  same => n(userMenber),NoOp()";
                if (strC[0].trim().equals("all")) {
                    content += "\n  same => n,GotoIf($[1 > 0]?meetEntry)";
                } else {
                    for (int j = 0; j < strC.length; j++) {
                        content += "\n  same => n,GotoIf($[\"${CALLERID(num)}\" = \"" + strC[j].trim() + "\"]?" + "meetEntry" + ")";
                    }
                }
                content += "\n  same => n,Goto(errPermission,10000,1)";

                content += "\n  same => n(meetEntry),NoOp()";
                content += "\n  same => n,Set(GROUP(${EXTEN})=1)";
                content += "\n  same => n,ConfBridge(1,myconferenceroom,admin_user)";
                content += "\n  same => n,Hangup()";
            }
            content += "\n;=============================================";

            int sipStep = 1;
            content += "\n";
            content += "\nexten => " + "_*01." + "," + "1" + ",Goto(sipTrunk1,${EXTEN:3},1)";
            content += "\nexten => " + "_*02." + "," + "1" + ",Goto(sipTrunk2,${EXTEN:3},1)";
            content += "\nexten => " + "_*11." + "," + "1" + ",Goto(fxoTrunk1,${EXTEN:3},1)";
            content += "\nexten => " + "_*12." + "," + "1" + ",Goto(fxoTrunk2,${EXTEN:3},1)";
            content += "\nexten => " + "_*21." + "," + "1" + ",Goto(fxsTrunk1,${EXTEN:3},1)";
            content += "\nexten => " + "_*22." + "," + "1" + ",Goto(fxsTrunk2,${EXTEN:3},1)";
            content += "\nexten => " + "_*31." + "," + "1" + ",Goto(t1Trunk1,${EXTEN:3},1)";
            content += "\nexten => " + "_*32." + "," + "1" + ",Goto(t1Trunk2,${EXTEN:3},1)";
            content += "\nexten => " + "_*9." + "," + "1" + ",Goto(fxoDirect,${EXTEN},1)";

            String[] aixHeadTbl = {
                "IAX2/mainpbx1/", "IAX2/mainpbx2/",
                "IAX2/fxopbx1/", "IAX2/fxopbx2/",
                "IAX2/fxspbx1/", "IAX2/fxspbx2/",
                "IAX2/t1pbx1/", "IAX2/t1pbx2/"
            };
            String[] trunkTbl = {
                "sipTrunk1", "sipTrunk2",
                "fxoTrunk1", "fxoTrunk2",
                "fxsTrunk1", "fxsTrunk2",
                "t1Trunk1", "t1Trunk2"
            };
            for (int i = 0; i < 8; i++) {
                content += "\n";
                content += "\n[" + trunkTbl[i] + "]";
                content += "\nexten => " + "_X!" + ",1,NoOp()";
                content += "\n  same => n,Dial(" + aixHeadTbl[i] + "${EXTEN})";
                content += "\n  same => n,Hangup()";
            }
            //===================================================================================
            content += "\n";
            content += "\n[" + "fxoDirect" + "]";
            content += "\nexten => " + "_*9X!" + ",1,NoOp()";
            content += "\n  same => n,Dial(" + "IAX2/fxopbx1/" + "${EXTEN})";
            content += "\n  same => n,Hangup()";

            //===================================================================================
            content += "\n";
            content += "\n[errPermission]";
            content += "\nexten => " + "10000" + ",1,NoOp()";
            content += "\n  same => n,Playback(josn/errorPermission)";
            content += "\n  same => n,Hangup()";
            //===================================================================================
            content += "\n";
            content += "\n[canclePhone]";
            content += "\nexten => " + "10000" + ",1,NoOp()";
            content += "\n  same => n,Hangup()";
            //===================================================================================
            content += "\n";
            content += "\n[pinError]";
            content += "\nexten => " + "10000" + ",1,NoOp()";
            content += "\n  same => n,Playback(josn/pinError)";
            content += "\n  same => n,Hangup()";

            content += "\n";
            content += "\n;same => n,SayDigits(${CALLERID(num)})";
            content += "\n;same => n,Set(CALLERID(all)=\"Jane Smith\"<2095551213>)";
            content += "\n;same => n,Set(CALLERID(name)=KevinLiao)";
            content += "\n;same => n,Set(CALLERID(num)=2095551214)";

            content += "\n";
            return content;
        } catch (Exception ex) {
            System.err.println(ex.getClass().getName() + ": " + ex.getMessage());

        }
        return null;
    }
    
    
    public String getFxoExtensions() {
        String bstr;
        int test_f = 1;
        int sipStep;
        try {
            String processType = GB.paraSetMap.get("processType").toString();
            String content = "";
            content += "\n[general]";
            content += "\nstatic=yes";
            content += "\nwriteprotect=no";
            content += "\nclearglobalvars=no";
            content += "\n";
            content += "\n[globals]";
            content += "\nCONSOLE=Console/dsp";
            content += "\nIAXINFO=guest";
            content += "\nTRUNK=DAHDI/G2";
            content += "\nTRUNKMSD=1";

            content += "\n";
            content += "\n[from-internal]";
            content += "\nexten => 1900,1,Answer()";
            content += "\n  same => n,Playback(hello-world)";
            content += "\n  same => n,Hangup()";

            content += "\n";
            content += "\nexten => _*9.,1,NoOp()";
            content += "\n  same => n,Answer()";
            content += "\n  same => n,Dial(DAHDI/G1/${EXTEN:2})";
            content += "\n  same => n,Hangup()";

            for (String key : GB.exNoMap.keySet()) {
                ExNoObj obj = GB.exNoMap.get(key);
                if (obj.type.equals("fxo")) {
                    content += "\n";
                    content += "\nexten => " + obj.no + ",1,NoOp()";
                    content += "\n  same => n,Answer()";
                    content += "\n  same => n,Dial(DAHDI/G1/" + obj.jmpNo + ")";
                    content += "\n  same => n,Hangup()";

                }
            }

            content += "\n";
            content += "\n[autocall]";
            content += "\nexten => s,1,NoOp()";
            content += "\n  same => 2,Answer()";
            content += "\n  same => 3,Read(DtmfIn,josn/inputExNumber,0,,2,2)";
            sipStep = 4;
            String iaxHead = "";
            int fxsCnt = 0;
            for (String key : GB.exNoMap.keySet()) {
                ExNoObj obj = GB.exNoMap.get(key);
                if (!obj.type.equals("fxo")) {
                    content += "\n  same => " + sipStep + ",GotoIf($[\"${DtmfIn}\" != \"" + obj.no + "\"]?" + (sipStep + 2) + ")";
                    sipStep++;
                    content += "\n  same => " + sipStep + ",Dial(" + getFxoIaxHead(obj.type) + obj.no + "," + obj.sipPhoneRingTime + ")";
                    sipStep++;
                    content += "\n  same => " + sipStep + ",NoOp()";
                    sipStep++;
                }
            }

            content += "\n";
            content += "\n;Broadcast";
            content += "\n;=============================================";
            JSONArray jsArr;
            int len;
            jsArr = (JSONArray) GB.paraSetMap.get("broadGroups");
            len = jsArr.length();
            for (int i = 0; i < len; i++) {
                String groupStr = jsArr.get(i).toString() + " ";
                String[] strA = groupStr.split("~");
                if (strA.length != 3) {
                    continue;
                }
                content += "\n  same => " + sipStep + ",GotoIf($[\"${DtmfIn}\" != \"" + strA[0] + "\"]?" + (sipStep + 3) + ")";
                sipStep++;
                content += "\n  same => n,Set(CALLERID(name)=${CALLERID(num)})";
                sipStep++;
                content += "\n  same => " + sipStep + ",Dial(" + getFxoIaxHead("sip") + strA[0] + "," + "30" + ")";
                sipStep++;
            }

            content += "\n";
            content += "\n;Conference Call";
            content += "\n;=============================================";
            jsArr = (JSONArray) GB.paraSetMap.get("meetGroups");
            len = jsArr.length();
            for (int i = 0; i < len; i++) {
                String groupStr = jsArr.get(i).toString() + " ";
                String[] strA = groupStr.split("~");
                if (strA.length != 4) {
                    continue;
                }
                content += "\n  same => " + sipStep + ",GotoIf($[\"${DtmfIn}\" != \"" + strA[0] + "\"]?" + (sipStep + 3) + ")";
                sipStep++;
                content += "\n  same => n,Set(CALLERID(name)=${CALLERID(num)})";
                sipStep++;
                content += "\n  same => " + sipStep + ",Dial(" + getFxoIaxHead("sip") + strA[0] + "," + "30" + ")";
                sipStep++;
            }

            content += "\n  same => " + sipStep + ",Playback(josn/noExNumber)";
            sipStep++;
            content += "\n  same => " + sipStep + ",Goto(autocall,${EXTEN},3)";
            sipStep++;
            content += "\n  same => " + sipStep + ",Hangup()";

            //===================================================================================
            content += "\n";
            content += "\n[errPermission]";
            content += "\nexten => " + "10000" + ",1,NoOp()";
            content += "\n  same => n,Playback(josn/errorPermission)";
            content += "\n  same => n,Hangup()";
            //===================================================================================
            content += "\n";
            content += "\n[canclePhone]";
            content += "\nexten => " + "10000" + ",1,NoOp()";
            content += "\n  same => n,Hangup()";
            //===================================================================================
            content += "\n";
            content += "\n[pinError]";
            content += "\nexten => " + "10000" + ",1,NoOp()";
            content += "\n  same => n,Playback(josn/pinError)";
            content += "\n  same => n,Hangup()";

            if (test_f == 1) {
                return content;
            }

            //broadcast
            //===================================================================================
            jsArr = (JSONArray) GB.paraSetMap.get("broadGroups");
            len = jsArr.length();
            for (int i = 0; i < len; i++) {
                String groupStr = jsArr.get(i).toString() + " ";
                String[] strA = groupStr.split(",");
                if (strA.length < 2) {
                    continue;
                }
                bstr = "";
                int next = 0;
                for (int j = 1; j < strA.length; j++) {
                    ExNoObj obj = GB.exNoMap.get(strA[j].trim());
                    if (obj == null) {
                        continue;
                    }
                    if (next >= 1) {
                        bstr += "&";
                    }
                    next++;
                    bstr += getIaxHead(obj.type);
                    bstr += obj.no;
                }
                content += "\n";
                content += "\nexten => " + strA[0] + ",1,NoOp()";
                content += "\n  same => n,Set(CALLERID(num)=*" + strA[0].trim() + ")";
                content += "\n  same => n,Page(" + bstr + ",i,10)";
                content += "\n  same => n,Hangup()";
            }

            //===================================================================================
            //broadcast
            //===================================================================================
            jsArr = (JSONArray) GB.paraSetMap.get("meetGroups");
            len = jsArr.length();
            for (int i = 0; i < len; i++) {
                String groupStr = jsArr.get(i).toString() + " ";
                String[] strA = groupStr.split("~");
                if (strA.length != 4) {
                    continue;
                }
                String[] strB = strA[2].split(",");
                String[] strC = strA[3].split(",");
                if (strB.length < 1) {
                    continue;
                }
                if (strC.length < 1) {
                    continue;
                }

                bstr = "";
                int next = 0;
                for (int j = 1; j < strA.length; j++) {
                    ExNoObj obj = GB.exNoMap.get(strA[j].trim());
                    if (obj == null) {
                        continue;
                    }
                    if (next >= 1) {
                        bstr += "&";
                    }
                    next++;
                    bstr += getIaxHead(obj.type);
                    bstr += obj.no;
                }

                //            content += "\n  same => " + sipStep + ",GotoIf($[\"${CALLERID(num)}\" = \"" + noStr + "\"]?" + (sipStep + 2) + ")";
                content += "\n";
                content += "\nexten => " + strA[0].trim() + ",1,NoOp()";
                content += "\n  same => n,Answer()";
                content += "\n  same => n,GotoIf($[${GROUP_COUNT(1@${EXTEN})} > 0]?userMenber)";
                for (int j = 0; j < strB.length; j++) {
                    content += "\n  same => n,GotoIf($[\"${CALLERID(num)}\" = \"" + strB[j] + "\"]?" + "adminEntry" + ")";
                }
                content += "\n  same => n,Goto(canclePhone,10000,1)";
                content += "\n  same => n(adminEntry),NoOp()";
                content += "\n  same => n,Read(ConfPin,josn/pinPass," + strA[1].length() + ",,2,5)";
                content += "\n  same => n,GotoIf($[\"${ConfPin}\" = \"" + strA[1] + "\"]?" + "meetEntry" + ")";
                content += "\n  same => n,Goto(pinError,10000,1)";
                content += "\n  same => n(userMenber),NoOp()";
                for (int j = 0; j < strC.length; j++) {
                    content += "\n  same => n,GotoIf($[\"${CALLERID(num)}\" = \"" + strC[j] + "\"]?" + "meetEntry" + ")";
                }
                content += "\n  same => n,Goto(canclePhone,10000,1)";
                content += "\n  same => n(meetEntry),NoOp()";
                content += "\n  same => n,Set(GROUP(${EXTEN})=1)";
                content += "\n  same => n,ConfBridge(1,myconferenceroom,admin_user)";
                content += "\n  same => n,Hangup()";
            }

            //===================================================================================
            content += "\n";
            content += "\n[errPermission]";
            content += "\nexten => " + "10000" + ",1,NoOp()";
            content += "\n  same => n,Playback(josn/errorPermission)";
            content += "\n  same => n,Hangup()";
            //===================================================================================
            content += "\n";
            content += "\n[canclePhone]";
            content += "\nexten => " + "10000" + ",1,NoOp()";
            content += "\n  same => n,Hangup()";
            //===================================================================================
            content += "\n";
            content += "\n[pinError]";
            content += "\nexten => " + "10000" + ",1,NoOp()";
            content += "\n  same => n,Playback(josn/pinError)";
            content += "\n  same => n,Hangup()";
            return content;
        } catch (Exception ex) {
            System.err.println(ex.getClass().getName() + ": " + ex.getMessage());

        }
        return null;
    }
    
    
    
    public String cmdStr(String cmdstr){
        String errStr = null;
        String[] strCmdA = cmdstr.split(" ");
        if (strCmdA[0].equals("wconf")) {
            if(strCmdA.length!=2)
                return "Error: must input format like <wconf type>";
            JSONArray jsArr;
            int inx;
            int len;
            try {
                /*
                BufferedReader reader = new BufferedReader(new FileReader("./paraSet.json"));
                StringBuilder stringBuilder = new StringBuilder();
                char[] buffer = new char[10];
                while (reader.read(buffer) != -1) {
                    stringBuilder.append(new String(buffer));
                    buffer = new char[10];
                }
                reader.close();
                */
                String content=Lib.readFile("paraSet.json");

                GB.paraSetMap.clear();
                //String content = stringBuilder.toString();
                JSONObject jsPara = new JSONObject(content);
                Iterator<String> it = jsPara.keys();
                while (it.hasNext()) {
                    String key = it.next();
                    GB.paraSetMap.put(key, jsPara.get(key));
                }

                String bstr = GB.paraSetMap.get("sipPhoneRingTime").toString();
                int sipPhoneRingTime = Lib.str2int(bstr, 60);
                jsArr = (JSONArray) GB.paraSetMap.get("phExNos");
                len = jsArr.length();
                GB.exNoMap.clear();
                for (inx = 0; inx < len; inx++) {
                    String strPhExNo = jsArr.get(inx).toString() + " ";
                    String[] strA = strPhExNo.split(",");
                    if (strA.length < 8) {
                        continue;
                    }
                    ExNoObj exNoObj = new ExNoObj();
                    exNoObj.type = strA[0].trim();
                    exNoObj.name = strA[1].trim();
                    exNoObj.no = strA[2].trim();
                    exNoObj.jmpNo = strA[3].trim();
                    exNoObj.broadGroup = strA[4].trim();
                    exNoObj.meetGroup = strA[5].trim();
                    exNoObj.reTakeGroup = strA[6].trim();
                    exNoObj.jmpGroup = strA[7].trim();
                    exNoObj.sipPhoneRingTime = sipPhoneRingTime;
                    GB.exNoMap.put(exNoObj.no, exNoObj);
                }

                jsArr = (JSONArray) GB.paraSetMap.get("exNoGroups");
                len = jsArr.length();
                GB.exGroupMap.clear();
                for (inx = 0; inx < len; inx++) {
                    String strGroups = jsArr.get(inx).toString();
                    String[] strA = strGroups.split(",");
                    if (strA.length < 2) {
                        continue;
                    }
                    ExGroupObj exGroupObj = new ExGroupObj();
                    exGroupObj.name = strA[0].trim();
                    if (exGroupObj.name.length() == 0) {
                        continue;
                    }
                    for (int i = 1; i < strA.length; i++) {
                        String strNo = strA[i].trim();
                        if (strNo.length() > 0) {
                            exGroupObj.noList.add(strA[i].trim());
                        }
                    }
                    GB.exGroupMap.put(exGroupObj.name, exGroupObj);
                }

                String wfName = "./extensions.conf";
                String contentStr = "";
                FileWriter fw;
                if (strCmdA[1].equals("sip")) {
                    contentStr = getSipExtensions();
                    wfName = "./extensions/sipExten/extensions.conf";
                    fw = new FileWriter(wfName);
                    fw.write(contentStr);
                    fw.flush();
                    fw.close();
                    //
                    contentStr = getIaxConf("sip");
                    wfName = "./extensions/sipExten/iax.conf";
                    fw = new FileWriter(wfName);
                    fw.write(contentStr);
                    fw.flush();
                    fw.close();
                    //
                    contentStr = getPjsipConf();
                    wfName = "./extensions/sipExten/pjsip.conf";
                    fw = new FileWriter(wfName);
                    fw.write(contentStr);
                    fw.flush();
                    fw.close();

                }
                if (strCmdA[1].equals("fxo")) {
                    contentStr = getFxoExtensions();
                    wfName = "./extensions/fxoExten/extensions.conf";
                    fw = new FileWriter(wfName);
                    fw.write(contentStr);
                    fw.flush();
                    fw.close();
                    contentStr = getIaxConf("fxo");
                    wfName = "./extensions/fxoExten/iax.conf";
                    fw = new FileWriter(wfName);
                    fw.write(contentStr);
                    fw.flush();
                    fw.close();
                }
                System.out.println("ok\n");

            } catch (Exception ex) {
                System.err.println(ex.getClass().getName() + ": " + ex.getMessage());
                return ex.toString();
            }
            return errStr;
        }
        if (cmdstr.equals("bypassSystemSecurity")) {
            //Base3.scla.netInf(1);
            return errStr;
        }
        if (cmdstr.equals("clearSystemSecurity")) {
            //Base3.scla.editNewDb("syssec", "");
            return errStr;
        }
        return "Command Not Found !!!";
    }
    

}

class ShlconTd extends Thread {

    PbxSet cla;
    int dis_connect_tim = 0;

    ShlconTd(PbxSet owner) {
        cla = owner;
    }

    @Override
    public void run() { // override Thread's run()
        //Test cla=Test.thisCla;
        for (;;) {
            if (cla.shlconTd_run_f == 1) {
                //==========================
                int ibuf;
                ibuf = Lib.ping(GB.sshIp);
                if (ibuf == 0) {
                    dis_connect_tim = 0;
                    if (cla.sshShl == null) {
                        cla.sshShl = new Ssh(GB.sshIp, GB.sshName, GB.sshPassword);
                        cla.sshShl.connect();
                        if (cla.sshShl.connect_f == 0) {
                            cla.sshShl = null;
                        }

                    }
                } else {
                    dis_connect_tim++;
                    if (dis_connect_tim >= 5) {
                        if (cla.sshShl != null) {
                            cla.sshShl.connect_f = 0;
                            cla.sshShl = null;
                        }
                    }
                }
                //==========================
                Lib.thSleep(100);
                if (cla.shlconTd_destroy_f == 1) {
                    break;
                }
            }
        }
    }
}

class ShlrxTd extends Thread {

    PbxSet cla;

    ShlrxTd(PbxSet owner) {
        cla = owner;
    }

    @Override
    public void run() { // override Thread's run()
        //Test cla=Test.thisCla;
        String str;
        int inData_f=0;
        for (;;) {
            if (cla.shlrxTd_run_f == 1) {
                if (cla.sshShl != null && cla.sshShl.connect_f == 1) {
                    try {
                        int lineCnt = 0;

                        if (cla.sshShl.inStrm.available() > 0) {
                            byte[] data = new byte[cla.sshShl.inStrm.available()];
                            int nLen = cla.sshShl.inStrm.read(data);
                            if (nLen < 0) {
                            } else if (nLen != 0) {
                                /*
                                for(int i=0;i<nLen;i++){
                                    str=Lib.byteToHexString(data[i]);
                                    if(lineCnt!=0)
                                        str=","+str;
                                    else
                                        str="\n"+str;
                                    System.out.print(str);
                                    lineCnt+=1;
                                    if(lineCnt>=16)
                                        lineCnt=0;
                                }
                                 */
                                cla.vtshl.dataAvailable(data);            //<<debug
                                cla.shellRx.sshRx(cla.vtshl.incha);       //<<debug
                                inData_f=1;
                            } else {
                            }
                        }
                        else{
                            if(inData_f==1){
                                cla.shellRx.sshRx(null);       //<<debug
                            }
                            inData_f=0;
                        }

                    } catch (IOException ex) {
                    }
                }
                Lib.thSleep(10);
                if (cla.shlrxTd_destroy_f == 1) {
                    break;
                }
            }
        }
    }
}

// unit =20ms
//at PhoneCs.java
abstract class ShellRx {
    public abstract void sshRx(String str);
}

abstract class SskUiRx {
    public abstract void socketRx(int format);
}


abstract class PbxSetRx {

    public abstract void sshRx(String str);
}


class ExNoObj {
    String type;
    String name;
    String no;
    String jmpNo;
    int channel;
    String broadGroup;
    String meetGroup;
    String reTakeGroup;
    String jmpGroup;
    int sipPhoneRingTime;

    ExNoObj() {
    }
}

class ExGroupObj {

    String name;
    ArrayList<String> noList;

    ExGroupObj() {
        noList = new ArrayList<String>();
    }
}
