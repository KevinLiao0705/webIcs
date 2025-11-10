/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.kevin;

import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author kevin
 */
public class GB {

    static String version = "2.0";
    public static int os = 1; //0: not defined,    1: win,    2 : linux, 
    public static String appName = "webIcs";
    //================================================
    static int webSocketPort = 25666;
    
    
    static String sourceDir = "web/";
    static String sshIp = "127.0.0.1";;
    static String sshName = "mainpbx";
    static String sshPassword = "123456789";

    public static String set_ip_str = "";
    public static String set_ipmask_str = "";
    public static String set_gateway_str = "";
    public static byte[] realIp=new byte[]{0,0,0,0};

    public static int min_js_f = 0;
    public static int firstCallRoot_f = 0;
    public static int logDebug_f = 1;
    public static int logLevel = 0;
    //ics use ================================================
    static String netName = "enp2s0";
    static String maskStr = "255.255.0.0";
    static String gatewayStr = "192.168.0.1";

    //static int ctrUiPort=23499;
    static int ctrIoPort = 23499;
    public static Map<String, ExNoObj> exNoMap = new HashMap();
    public static Map<String, ExGroupObj> exGroupMap = new HashMap();
    //========================================================

    public static String real_ip_str = "";
    public static String real_ipmask_str = "";
    public static String real_gateway_str = "";
    public static Map<String, Object> paraSetMap = new HashMap();

    static String slotType = "none";
    static int slotCount = 0;
    public static String paraSetPath="";

    //==============================================
    public static String redisServerStatus = "OK";
    //=============================================
    public static String webRetStr = "{}";
    //======================================
    public static int syssec_f = 0;
    public static int syssec_xor = 0x00;
    public static String nowIp_str = "";
    public static String nowSubmask_str = "";
    public static String nowMac_str = "";
    public static String macStr;
    //======================================
    public static String webRootPath = "";
    public static String netbeanWebRootPath = "";
    public static String srcPathxxx = "";
    public static String exePath = "";
    public static HashMap<String, String> requestPara;
    public static String currentDir = "";
    public static String buildWebSourcePath = "";
    public static String webSourcePath = "";
    public static HashMap<String, String> paraMap = new HashMap();
    public static HashMap<String, String> userParaMap = new HashMap();
    public static HashMap<String, ConnectCla> connectMap = new HashMap();


    public static String setdata_xml = "./setdata.xml";
    public static String setdata_db = "./setdata.db";
    public static String interfaces_path = "./interfaces";
    public static String postIpAddress="";

    public static String syssec = "123-125-222-456-111-123";
    static String startTime="";
    
    
    public void GB(){
        GB.init();
    }
    public static void init() {
        GB.setdata_xml = "./setdata.xml";
        GB.setdata_db = "./setdata.db";
        GB.interfaces_path = "./interfaces";
        GB.paraSetPath="E:/kevin/myCode/webSet/pbxSet";
        GB.sourceDir = "web/";   
        
        
        //GB.paraSetPath="E:/kevin/myCode/syncLocal";
        if (GB.os == 2) {//linux
            GB.setdata_xml = "./setdata.xml";
            GB.setdata_db = "./setdata.db";
            GB.interfaces_path = "/etc/network/interfaces";
            GB.paraSetPath="/home/controller/kevin/pbxSetExe";
            GB.sourceDir="webapps/ROOT/";     //for deplyment use
            //GB.paraSetPath="/home/controller/kevin/pbxSetExe";
            //GB.paraSetPath="/home/adminctl/kevin/syncLocal";
        }
        Lib.netInf(0);
    }

    static String getSlotIp() {
        return GB.getSlotIp(GB.slotType, GB.slotCount);
    }

    static String getSlotIp(String slotType, int slotCnt) {
        int lip = 0;
        lip = slotCnt * 10 + 9;
        return "192.168.191." + lip;
    }

    static void chgSlotType() {

    }

}
