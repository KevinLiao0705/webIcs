//package org.kevin;

//import com.mysql.cj.xdevapi.JsonParser;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.Writer;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.json.JSONArray;
import org.json.JSONException;
//import org.kevin.KvMysql;
import org.kevin.KvRedis;
import org.json.JSONObject;
import org.kevin.Root;
import org.kevin.Lib;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Timestamp;
import java.util.HashMap;
import java.util.Map;
import org.kevin.GB;
//import org.kevin.HttpUrlConnection;
import org.kevin.Https;
import org.kevin.InfConn;
import org.kevin.MyMqtt;
import org.kevin.Csocket;
import org.kevin.OledKeyboard;
import org.kevin.ImageHandle;
import org.kevin.Sync;
import org.kevin.Ics;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 *
 * @author kevin
 */
public final class AdminServlet extends HttpServlet {

    /**
     *
     * @param request
     * @param response
     * @param resbonse
     * @throws ServletException
     * @throws IOException
     */
    String dbkey;
    String hdbKey;
    String hdbTable;
    RetData retData = new RetData();

    List<UserData> lsUserData = new ArrayList<>();
    List<KeyJson> lsDashboardData = new ArrayList<>();

    String[] strA;
    String filePath;
    MyMqtt myMqtt;
    OledKeyboard oledKb = null;
    Sync sync = null;
    Ics ics = null;

    private static final String[] HEADERS_TO_TRY = {
        "X-Forwarded-For",
        "Proxy-Client-IP",
        "WL-Proxy-Client-IP",
        "HTTP_X_FORWARDED_FOR",
        "HTTP_X_FORWARDED",
        "HTTP_X_CLUSTER_CLIENT_IP",
        "HTTP_CLIENT_IP",
        "HTTP_FORWARDED_FOR",
        "HTTP_FORWARDED",
        "HTTP_VIA",
        "REMOTE_ADDR"};

    private String getClientIpAddress(HttpServletRequest request) {
        for (String header : HEADERS_TO_TRY) {
            String ip = request.getHeader(header);
            if (ip != null && ip.length() != 0 && !"unknown".equalsIgnoreCase(ip)) {
                return ip;
            }
        }

        return request.getRemoteAddr();
    }

    public AdminServlet() {
        int i, j, k;
        String userName;
        String userId;
        String password;
        String fatherName;
        Object jj, kk;
        String tt;
        JSONObject jsTmp;
        MenberInf miTmp;
        String sbuf;
        //===========================================================
        //myMqtt =new MyMqtt();
        //myMqtt.connect();
        //myMqtt.sub("kevin/test");
        //8324 websock
        //8325 to Websock
        //===========================================================
        if (GB.appName.equals("oledKeyboard")) {
            oledKb = new OledKeyboard();
        }
        if (GB.appName.equals("sync")) {
            sync = new Sync();
        }
        if (GB.appName.equals("webIcs")) {
            ics = new Ics();
        }
        //===========================================================
        int kevinAdmin_f = 0;
        int globalAdmin_f = 0;
        int demoAdmin_f = 0;
        int demoGuest_f = 0;

        /*
        
        if (hgetAll("systemUserId")) {
            int len = retData.lsKeyValue.size();
            for (i = 0; i < len; i++) {
                String key = retData.lsKeyValue.get(i).key;
                if (key.equals("systemUserId~kevin~admin")) {
                    kevinAdmin_f = 1;
                }
                if (key.equals("systemUserId~global~admin")) {
                    globalAdmin_f = 1;
                }
                if (key.equals("systemUserId~demo~admin")) {
                    demoAdmin_f = 1;
                }
                if (key.equals("systemUserId~demo~quest")) {
                    demoGuest_f = 1;
                }
                miTmp = MenberInf.toObj(retData.lsKeyValue.get(i).value);
                sbuf = miTmp.userName + "~" + miTmp.userId;
                lsUserData.add(new UserData(sbuf, miTmp, null));
            }
        }

        if (kevinAdmin_f == 0) {
            miTmp = new MenberInf();
            miTmp.userName = "kevin";
            miTmp.userId = "admin";
            miTmp.password = "1234";
            miTmp.userFather = "root";
            miTmp.permition = 0;
            miTmp.accountQuota = -1;
            miTmp.accountUsed = 0;
            miTmp.userQuota = -1;
            miTmp.priLevel = 0;
            miTmp.leftMenu = 1;
            miTmp.language = "chinese";
            lsUserData.add(new UserData("kevin~admin", miTmp, null));
        }
        if (globalAdmin_f == 0) {
            miTmp = new MenberInf();
            miTmp.userName = "global";
            miTmp.userId = "admin";
            miTmp.password = "1234";
            miTmp.userFather = "root";
            miTmp.permition = 100;
            miTmp.accountQuota = 0;
            miTmp.accountUsed = 0;
            miTmp.userQuota = 0;
            miTmp.priLevel = 100;
            miTmp.leftMenu = 1;
            miTmp.language = "english";
            lsUserData.add(new UserData("global~admin", miTmp, null));
        }
        if (demoAdmin_f == 0) {
            miTmp = new MenberInf();
            miTmp.userName = "demo";
            miTmp.userId = "admin";
            miTmp.password = "1234";
            miTmp.userFather = "root";
            miTmp.permition = 100;
            miTmp.accountQuota = 0;
            miTmp.accountUsed = 0;
            miTmp.userQuota = 0;
            miTmp.priLevel = 100;
            miTmp.leftMenu = 1;
            miTmp.language = "english";
            lsUserData.add(new UserData("demo~admin", miTmp, null));
        }

        if (demoGuest_f == 0) {
            miTmp = new MenberInf();
            miTmp.userName = "demo";
            miTmp.userId = "guest";
            miTmp.password = "0000";
            miTmp.userFather = "root~demo";
            miTmp.permition = 400;
            miTmp.accountQuota = 0;
            miTmp.accountUsed = 0;
            miTmp.userQuota = 0;
            miTmp.priLevel = 400;
            miTmp.leftMenu = 1;
            miTmp.language = "english";
            lsUserData.add(new UserData("demo~guest", miTmp, null));
        }

        for (i = 0; i < lsUserData.size(); i++) {
            userName = lsUserData.get(i).menberInf.userName;
            userId = lsUserData.get(i).menberInf.userId;
            if (!"admin".equals(userId)) {
                continue;
            }
            if (getHashData(userName)) {
                lsDashboardData.add(new KeyJson(userName, this.retData.valueStr));
            }
        }

        for (i = 0; i < lsUserData.size(); i++) {
            userName = lsUserData.get(i).menberInf.userName;
            for (j = 0; j < lsDashboardData.size(); j++) {
                if (lsDashboardData.get(j).key.equals(userName)) {
                    lsUserData.get(i).dashboardData = lsDashboardData.get(j);
                    break;
                }
            }
        }

        try {
            Https.igoreVerify();
        } catch (Exception ex) {
            ex.printStackTrace();
            Logger.getLogger(AdminServlet.class.getName()).log(Level.SEVERE, null, ex);
        }
         */
    }

    @Override
    public void init() {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        boolean isMultipart = ServletFileUpload.isMultipartContent(request);
        if (isMultipart) {
            //int maxFileSize = 50 * 1024;
            //int maxMemSize = 4 * 1024;
            File file;
            DiskFileItemFactory factory = new DiskFileItemFactory();
            // maximum size that will be stored in memory
            //factory.setSizeThreshold(maxMemSize);
            // Location to save data that is larger than maxMemSize.
            factory.setRepository(new File("c:\\temp"));
            // Create a new file upload handler
            ServletFileUpload upload = new ServletFileUpload(factory);
            // maximum file size to be uploaded.
            //upload.setSizeMax(maxFileSize);
            try {
                // Parse the request to get file items.
                List fileItems = upload.parseRequest(request);
                // Process the uploaded file items
                Iterator i = fileItems.iterator();
                while (i.hasNext()) {
                    FileItem fi = (FileItem) i.next();
                    //if (!fi.isFormField()) {
                    if (!fi.isFormField()) {
                        // Get the uploaded file parameters
                        String fieldName = fi.getFieldName();
                        String fileName = fi.getName();
                        String contentType = fi.getContentType();
                        boolean isInMemory = fi.isInMemory();
                        long sizeInBytes = fi.getSize();

                        System.out.println("fieldName=  " + fieldName);
                        System.out.println("fileName=  " + fileName);
                        System.out.println("contentType=  " + contentType);
                        System.out.println("isInMemory=  " + isInMemory);
                        System.out.println("sizeInBytes=  " + sizeInBytes);
                        String[] strF = fieldName.split("~");
                        switch (strF[0]) {
                            case "unzipFileToDir":
                                file = new File(GB.webRootPath + "tmp.zip");
                                if (file.exists()) {
                                    file.delete();
                                }
                                fi.write(file);
                                File dirFile = new File(GB.webRootPath + strF[1]);
                                if (dirFile.exists() && dirFile.isDirectory()) {
                                    Lib.deleteDir(dirFile);
                                }
                                Lib.unzipFile(GB.webRootPath + "tmp.zip", GB.webRootPath);
                                file.delete();
                                break;

                            case "saveFileToDir":
                                if (strF[2].equals("paraSet.json")) {
                                    file = new File(GB.paraSetPath +"/"+ strF[2]);

                                } else {
                                    filePath = GB.webRootPath + strF[1] + "/";
                                    if (strF.length >= 3) {
                                        file = new File(filePath + strF[2]);
                                    } else {
                                        file = new File(filePath + fileName);
                                    }
                                }
                                fi.write(file);
                                break;

                        }

                    }
                }

                JSONObject outJo = new JSONObject();
                JSONObject outOpts = new JSONObject();
                putJos(outJo, "name", "response ok");
                putJos(outJo, "type", "Commands OK !");
                putJoo(outJo, "opts", outOpts);
                response.setContentType("application/json;charset=utf-8");//指定返回的格式为JSON格式
                PrintWriter out = response.getWriter();
                out.print(outJo);
                out.close();
                return;

            } catch (Exception ex) {
                Lib.lp1(ex.toString());
                ex.printStackTrace();
                return;
            }
        }

        request.setCharacterEncoding("UTF-8");
        StringBuilder myJson = new StringBuilder();
        BufferedReader reader = request.getReader();
        String line;
        String inpStr;
        //==========================================================
        //String ipAddress =getClientIpAddress(request);
        //GB.postIpAddress = ipAddress;
        //==========================================================
        while ((line = reader.readLine()) != null) {
            myJson.append(line);
        }
        inpStr = myJson.toString();
        JSONObject outJo = new JSONObject();
        try {
            switch (inpStr.charAt(0)) {
                case '[': {
                    JSONArray ja = new JSONArray(inpStr);
                    JSONObject inpJo = new JSONObject();
                    inpJo.put("a", ja);
                    anaJoA(inpJo, outJo);
                    break;
                }
                case '{': {
                    JSONObject inpJo = new JSONObject(inpStr);
                    if (!inpJo.get("name").toString().equals("commands")) {
                        anaJo(inpJo, outJo);
                        break;
                    }

                    //=========================
                    // name:commdands
                    // type" ""
                    // opts:{userName:"xxx",objs:[{},{},....]
                    //
                    JSONObject jsCommand;
                    JSONObject inJsOpts = new JSONObject(inpJo.get("opts").toString());
                    String actionStr;
                    String keyStr;
                    String valueStr;

                    String userName = inJsOpts.get("userName").toString();
                    //System.out.println("userName= "+userName);
                    JSONArray jsCommandA = inJsOpts.getJSONArray("objs");
                    int objsArrayLen = jsCommandA.length();
                    int inx;
                    for (inx = 0; inx < objsArrayLen; inx++) {
                        //System.out.println("objsArray= "+objsArray.get(i));
                        jsCommand = new JSONObject(jsCommandA.get(inx).toString());
                        actionStr = getJos(jsCommand, "action");
                        keyStr = getJos(jsCommand, "key");
                        valueStr = getJos(jsCommand, "value");
                        //======================================================
                        JSONObject newInpJo = new JSONObject();
                        JSONObject newInpJoOpts = new JSONObject();
                        JSONObject newOutJo = new JSONObject();
                        putJos(newInpJoOpts, "table", userName);
                        putJos(newInpJoOpts, "key", keyStr);
                        putJos(newInpJoOpts, "value", valueStr);
                        //======================================================
                        putJos(newInpJo, "name", actionStr);
                        putJos(newInpJo, "type", "");
                        putJoo(newInpJo, "opts", newInpJoOpts);
                        anaJo(newInpJo, newOutJo);
                        if (newOutJo.get("name").toString().equals("response error")) {
                            outJo = newOutJo;
                            break;
                        }
                    }
                    if (inx != objsArrayLen) {
                        break;
                    }
                    JSONObject outOpts = new JSONObject();
                    System.out.println("inJsOpts= " + inJsOpts);
                    setRespAction(inJsOpts, outJo, outOpts);
                    putJos(outJo, "type", "Commands OK !");
                    putJoo(outJo, "opts", outOpts);
                    break;
                }
                default:
                    anaStr(inpStr, outJo);
                    break;
            }

        } catch (JSONException ex) {
            Logger.getLogger(AdminServlet.class.getName()).log(Level.SEVERE, null, ex);
        }
        //====================================================
        response.setContentType("application/json;charset=utf-8");//指定返回的格式为JSON格式
        PrintWriter outPrint = response.getWriter();
        outPrint.print(outJo);
        outPrint.close();

    }

    public HashMap<String, Object> getParas() {
        HashMap<String, Object> paraMap = new HashMap();
        //String fileName = GB.webRootPath + "user-" + "sync" + "/paraSet.json";
        String fileName = GB.paraSetPath + "/paraSet.json";
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
                    Object obj = jsObj.get(key);
                    paraMap.put(key, obj);
                }
                return paraMap;
            } catch (Exception ex) {
            }
        }
        return paraMap;

    }

    public HashMap<String, String> getUsreParaMap(String userName) {
        HashMap<String, String> paraMap = new HashMap();
        String fileName = GB.paraSetPath + "/paraSet.json";
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

    public String getJos(JSONObject jo, String key) {
        try {
            return jo.get(key).toString();
        } catch (JSONException ex) {
            return "";
        }
    }

    public void putJos(JSONObject jo, String key, Object value) {
        try {
            jo.put(key, value);//添加元素
        } catch (JSONException ex) {
            ex.printStackTrace();
            Logger.getLogger(AdminServlet.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public void putJoo(JSONObject jo, String key, JSONObject joo) {
        try {
            jo.put(key, joo);//添加元素
        } catch (JSONException ex) {
            ex.printStackTrace();
            Logger.getLogger(AdminServlet.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public void anaJoA(JSONObject in, JSONObject out) {
        //in.get(0).getJSONObject("Data").getJSONArray("Phone").get(0);        
        Object obj;
        JSONObject jsObj;
        Object value;
        try {
            obj = in.getJSONArray("a").get(0);
            System.out.println(obj);
            jsObj = new JSONObject(obj.toString());
            value = jsObj.get("name");
            System.out.println(value);

        } catch (JSONException ex) {
            ex.printStackTrace();
            Logger.getLogger(AdminServlet.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public boolean jsobjGet(JSONObject in, String name) {
        this.retData.err_f = false;
        try {
            this.retData.retStr = in.get(name).toString();

        } catch (JSONException ex) {
            this.retData.err_f = true;
            return false;
        }
        return true;
    }

    public boolean jsGet(JSONObject in, String name) {
        this.retData.err_f = false;
        try {
            this.retData.retObj = in.get(name);//.toString();
            Class cls = this.retData.retObj.getClass();
            String type = cls.getSimpleName();
            switch (type) {
                case "String":
                    this.retData.retStr = (String) this.retData.retObj;
                    break;
                case "Integer":
                    this.retData.reti = (int) this.retData.retObj;
                    break;
                case "Double":
                case "Float":
                    this.retData.retf = (float) this.retData.retObj;
                    break;
                default:
                    this.retData.retStr = this.retData.retObj.toString();
            }
        } catch (JSONException ex) {
            this.retData.err_f = true;
            return false;
        }
        return true;
    }

    public boolean setDbkey(JSONObject opts) {
        this.dbkey = null;
        this.hdbKey = null;
        this.hdbTable = null;

        jsobjGet(opts, "key");
        if (this.retData.err_f) {
            return false;
        }
        this.dbkey = this.retData.retStr;
        this.hdbKey = this.retData.retStr;
        jsobjGet(opts, "table");
        if (this.retData.err_f) {
            return true;
            //this.retData.retStr="empty";
        }
        this.hdbTable = this.retData.retStr;
        this.dbkey = this.retData.retStr + "~" + this.dbkey;
        return true;
    }

    public boolean setSecondKey(JSONObject opts) {
        this.dbkey = null;
        jsobjGet(opts, "secondKey");
        if (this.retData.err_f) {
            return false;
        }
        this.dbkey = this.retData.retStr;
        jsobjGet(opts, "table");
        if (this.retData.err_f) {
            return true;
            //this.retData.retStr="empty";
        }
        this.dbkey = this.retData.retStr + "~" + this.dbkey;
        return true;
    }

    public boolean chkSaveFile(JSONObject opts, String inStr) {
        String fileName;
        FileOutputStream outfile;
        jsobjGet(opts, "saveFileName");
        if (this.retData.err_f) {
            return true;
        }
        fileName = GB.webRootPath + this.retData.retStr;
        return Lib.saveFile(fileName, inStr);
    }

    //=========================================================
    public boolean saveFile(String _fileName, String inStr) {
        String fileName;
        FileOutputStream outfile;
        try {
            fileName = GB.webRootPath + _fileName;
            outfile = new FileOutputStream(fileName);
            outfile.write(inStr.getBytes());
            outfile.close();
            return true;
        } catch (FileNotFoundException ex) {
            ex.printStackTrace();
            return false;
        } catch (IOException ex) {
            ex.printStackTrace();
            return false;
        }
    }
    //=========================================================

    public void setRespAction(JSONObject inOpts, JSONObject out, JSONObject outOpts) {
        jsobjGet(inOpts, "responseType");
        if (this.retData.err_f) {
            putJos(out, "name", "response none");
        } else {
            switch (this.retData.retStr) {
                case "response ok":
                    putJos(out, "name", "response ok");
                    break;
                case "response error message ok":
                case "message ok":
                    putJos(out, "name", "message ok");
                    break;
                default:
                    putJos(out, "name", "response none");
                    break;
            }
        }
        //====
        jsobjGet(inOpts, "messageTime");
        if (!this.retData.err_f) {
            putJos(outOpts, "messageTime", Integer.parseInt(this.retData.retStr));
        }
        //====
        jsobjGet(inOpts, "responseAction");
        if (!this.retData.err_f) {
            putJos(outOpts, "responseAction", this.retData.retStr);
        }
        //====
        jsobjGet(inOpts, "callBackFunc");
        if (!this.retData.err_f) {
            putJos(outOpts, "callBackFunc", this.retData.retStr);
        }
        //====
        jsobjGet(inOpts, "loadToElemId");
        if (!this.retData.err_f) {
            putJos(outOpts, "loadToElemId", this.retData.retStr);
        }
        //====
        jsobjGet(inOpts, "saveVar");
        if (!this.retData.err_f) {
            putJos(outOpts, "saveVar", this.retData.retStr);
        }
    }

    public String addUserData(String userName, String userData) {
        List<String> lsClassName;
        String userClassNames;
        lsClassName = Lib.getFileClassNames(GB.webRootPath + "user-" + userName + "/userLib.js",
                new String[]{"classStart=<", ">", "classEnd=<", ">"});
        userClassNames = "{\"key\":\"" + userName + "~userClassNames\",\"value\":\"";
        for (int i = 0; i < lsClassName.size(); i++) {
            if (i != 0) {
                userClassNames += "~";
            }
            userClassNames += lsClassName.get(i);
        }
        userClassNames += "\"}";
        String valueStr = userData.substring(0, userData.length() - 1);
        if (valueStr.length() > 2) {
            valueStr += ",";
        }
        valueStr += userClassNames;

        if (!userName.equals("global")) {
            getUserData("global", "admin", "1234");
            if (!this.retData.err_f) {
                String globStr = this.retData.valueStr.substring(1, this.retData.valueStr.length() - 1);
                if (globStr.length() != 0) {
                    valueStr += "," + globStr;
                }
            }

            lsClassName = Lib.getFileClassNames(GB.webRootPath + "user-" + "global" + "/userLib.js",
                    new String[]{"classStart=<", ">", "classEnd=<", ">"});
            userClassNames = "{\"key\":\"" + "global" + "~userClassNames\",\"value\":\"";
            for (int i = 0; i < lsClassName.size(); i++) {
                if (i != 0) {
                    userClassNames += "~";
                }
                userClassNames += lsClassName.get(i);
            }
            userClassNames += "\"}";
            valueStr += "," + userClassNames;
        }
        valueStr += "]";
        return valueStr;
    }

    public void loadOutJsoResponseError(JSONObject optsJso, JSONObject outJso, String errStr) {
        String responseType = "response none";
        if (jsobjGet(optsJso, "responseType")) {
            responseType = this.retData.retStr;
        }
        switch (responseType) {
            case "response ok":
            case "response error":
            case "response error message ok":
                putJos(outJso, "name", "response error");
                break;
            case "message ok":
            case "message error":
                putJos(outJso, "name", "message error");
                break;
            default:
                putJos(outJso, "name", responseType);
                break;
        }
        putJos(outJso, "type", errStr);
        //putJoo(outJso, "opts", outJsoOpts);

    }

    public void loadOutJsoResponseOk(JSONObject optsJso, JSONObject outJso, String okStr) {
        jsobjGet(optsJso, "responseType");
        if (this.retData.err_f) {
            putJos(outJso, "name", "response none");
        } else {
            switch (this.retData.retStr) {
                case "response ok":
                    putJos(outJso, "name", "response ok");
                    break;
                case "response error message ok":
                case "message ok":
                    putJos(outJso, "name", "message ok");
                    break;
                default:
                    putJos(outJso, "name", "response none");
                    break;
            }
        }
        putJos(outJso, "type", okStr);
    }

    public void copyOptsJsoDefault(JSONObject optsJso, JSONObject outOpts) {
        jsobjGet(optsJso, "messageTime");
        if (!this.retData.err_f) {
            putJos(outOpts, "messageTime", Integer.parseInt(this.retData.retStr));
        }
        //====
        jsobjGet(optsJso, "responseAction");
        if (!this.retData.err_f) {
            putJos(outOpts, "responseAction", this.retData.retStr);
        }
        //====
        jsobjGet(optsJso, "callBackFunc");
        if (!this.retData.err_f) {
            putJos(outOpts, "callBackFunc", this.retData.retStr);
        }
        //====
        jsobjGet(optsJso, "loadToElemId");
        if (!this.retData.err_f) {
            putJos(outOpts, "loadToElemId", this.retData.retStr);
        }
        //====
        jsobjGet(optsJso, "saveVar");
        if (!this.retData.err_f) {
            putJos(outOpts, "saveVar", this.retData.retStr);
        }
    }

    public void anaJo(JSONObject inJso, JSONObject outJso) {
        String action;
        JSONObject optsJso;
        JSONObject outJsoOpts = new JSONObject();
        String outStr;
        String fileName;
        String userName;
        String password;
        String typeStr;
        String initDir;

        try {

            action = inJso.get("name").toString();
            optsJso = new JSONObject(inJso.get("opts").toString());
            copyOptsJsoDefault(optsJso, outJsoOpts);
            putJoo(outJso, "opts", outJsoOpts);

            switch (action) {
                case "writeImageFile":
                    loadOutJsoResponseError(optsJso, outJso, "writeImageFile Error !!!");
                    if (!jsobjGet(optsJso, "path")) {
                        break;
                    }
                    String path = GB.webRootPath + this.retData.retStr;
                    if (!jsobjGet(optsJso, "value")) {
                        break;
                    }
                    JSONObject imageJso = new JSONObject(this.retData.retStr);
                    if (!jsobjGet(imageJso, "fileName")) {
                        break;
                    }
                    strA = this.retData.retStr.split("\\.");
                    String fullImageName = path + "/" + strA[0] + ".png";
                    if (!jsGet(imageJso, "width")) {
                        break;
                    }
                    int imageWidth = this.retData.reti;
                    if (!jsGet(imageJso, "height")) {
                        break;
                    }
                    int imageHeight = this.retData.reti;
                    Object obj = imageJso.get("data");
                    Class cls = obj.getClass();
                    String type = cls.getSimpleName();
                    JSONObject imageData = (JSONObject) obj;
                    int[] rgbaA = new int[imageWidth * imageHeight];
                    int imageDataLen = imageWidth * imageHeight;
                    for (int i = 0; i < imageDataLen; i++) {
                        int btr = (int) (imageData.get("" + (i * 4 + 0)));
                        int btg = (int) (imageData.get("" + (i * 4 + 1)));
                        int btb = (int) (imageData.get("" + (i * 4 + 2)));
                        int bta = (int) (imageData.get("" + (i * 4 + 3)));
                        rgbaA[i] = (bta) << 24;
                        rgbaA[i] += (btr) << 16;
                        rgbaA[i] += (btg) << 8;
                        rgbaA[i] += (btb);
                    }
                    if (!ImageHandle.createBmpFile(rgbaA, imageWidth, imageHeight, fullImageName)) {
                        break;
                    }

                    setRespAction(optsJso, outJso, outJsoOpts);
                    putJos(outJso, "type", "Write OK");
                    putJoo(outJso, "opts", outJsoOpts);
                    break;

                case "sonprg":
                    loadOutJsoResponseError(optsJso, outJso, "sonprg Error !!!");
                    if (!jsobjGet(optsJso, "value")) {
                        break;
                    }
                    JSONObject sonprgJso = new JSONObject(this.retData.retStr);
                    if (!jsobjGet(sonprgJso, "sonprgName")) {
                        break;
                    }
                    if (this.retData.retStr.equals("OledKeyboard")) {
                        oledKb.handleCommand(sonprgJso);
                        if (oledKb.errCnt > 0) {
                            loadOutJsoResponseError(optsJso, outJso, oledKb.errStr);
                            break;
                        }
                        putJos(outJsoOpts, "value", "{\"status\":\"OK\"}");
                        setRespAction(optsJso, outJso, outJsoOpts);
                        putJos(outJso, "type", "Son Command OK");
                        putJoo(outJso, "opts", outJsoOpts);
                    }

                    if (this.retData.retStr.equals("Ics")) {
                        ics.handleCommand(sonprgJso);
                        if (ics.errCnt > 0) {
                            loadOutJsoResponseError(optsJso, outJso, ics.errStr);
                            break;
                        }
                        putJos(outJsoOpts, "value", "{\"status\":\"OK\",\"message\":\"" + ics.okStr + "\"}");
                        setRespAction(optsJso, outJso, outJsoOpts);
                        putJos(outJso, "type", "Son Command OK");
                        putJoo(outJso, "opts", outJsoOpts);
                    }

                    if (this.retData.retStr.equals("Sync")) {
                        sync.handleCommand(sonprgJso);
                        if (sync.errCnt > 0) {
                            loadOutJsoResponseError(optsJso, outJso, sync.errStr);
                            break;
                        }
                        putJos(outJsoOpts, "value", "{\"status\":\"OK\",\"message\":\"" + sync.okStr + "\"}");
                        setRespAction(optsJso, outJso, outJsoOpts);
                        putJos(outJso, "type", "Son Command OK");
                        putJoo(outJso, "opts", outJsoOpts);
                    }

                    break;

                case "zipDir":
                    loadOutJsoResponseError(optsJso, outJso, "zip file Error !!!");
                    if (!jsobjGet(optsJso, "dirName")) {
                        break;
                    }
                    String dirName = GB.webRootPath + this.retData.retStr;
                    if (!jsobjGet(optsJso, "zipName")) {
                        break;
                    }
                    String zipName = GB.webRootPath + this.retData.retStr;
                    Lib.zipDir(dirName, zipName);
                    putJos(outJsoOpts, "value", "{'status':'zip ok'}");
                    setRespAction(optsJso, outJso, outJsoOpts);
                    putJos(outJso, "type", "Zip Dir OK");
                    putJoo(outJso, "opts", outJsoOpts);
                    break;

                case "login":
                    loadOutJsoResponseError(optsJso, outJso, "login Error !!!");
                    if (!jsobjGet(optsJso, "systemName")) {
                        break;
                    }
                    String systemName = this.retData.retStr;
                    if (!jsobjGet(optsJso, "userName")) {
                        break;
                    }
                    userName = this.retData.retStr;
                    if (!jsobjGet(optsJso, "password")) {
                        break;
                    }
                    password = this.retData.retStr;

                    String fileFullName = GB.webRootPath + "systemSet.xml";
                    HashMap<String, String> xmlMap;
                    try {
                        xmlMap = Lib.XMLMap(fileFullName, "user");
                    } catch (Exception ex) {
                        Logger.getLogger(AdminServlet.class.getName()).log(Level.SEVERE, null, ex);
                        break;
                    }

                    HashMap<String, Object> paraSetMap = Lib.getParaSetMap(systemName);
                    if (paraSetMap != null) {
                        String[] strA = Lib.getMapArray(paraSetMap, "userAcounts");
                        for (int i = 0; i < strA.length; i++) {
                            String[] strB = strA[i].split("~");
                            if (strB.length != 3) {
                                continue;
                            }
                            String bstr = "password:" + strB[2];
                            bstr += ",priority:" + strB[1];
                            xmlMap.put(GB.appName + "~" + strB[0], bstr);
                        }
                    }

                    //=========================================================
                    /*
                    xmlMap=new HashMap<String, String>();
                    xmlMap.put("oled","password:1234,priority:0");
                    xmlMap.put("sync","password:1234,priority:0");
                    xmlMap.put("future","password:1234,priority:0");
                     */
                    //=========================================================
                    //=========================================================
                    /*
                    obj = GB.connectMap.get(userName);
                    if (obj != null) {
                        putJos(outJso, "type", "User Name Is In Use !!!");
                        break;
                    }
                     */
                    //=========================================================
                    String userValue = xmlMap.get(systemName + "~" + userName);
                    if (userValue == null) {
                        putJos(outJso, "type", "User Name  Error !!!");
                        break;
                    }

                    strA = userValue.split(",");
                    String userPassword = "16020039";
                    String userPriority = "9";
                    for (int i = 0; i < strA.length; i++) {
                        String[] strB = strA[i].split(":");
                        if (strB.length != 2) {
                            continue;
                        }
                        if (strB[0].equals("password")) {
                            userPassword = strB[1];
                        }
                        if (strB[0].equals("priority")) {
                            userPriority = strB[1];
                        }
                    }

                    fileName = GB.webRootPath + "user-" + systemName + "/userSet.json";
                    File file = new File(fileName);
                    if (!file.exists() || file.isDirectory()) {
                        putJos(outJso, "type", fileName + " is not existed !!!");
                        break;
                    }
                    String content = Lib.readStringFile(fileName);
                    if (content == null) {
                        putJos(outJso, "type", "Read File Content Error !!!");
                        break;
                    }

                    String paraContent = "{}";
                    fileName = GB.paraSetPath + "/paraSet.json";
                    file = new File(fileName);
                    if (file.exists() && !file.isDirectory()) {
                        paraContent = Lib.readStringFile(fileName);
                        if (paraContent == null) {
                            paraContent = "{}";
                        }
                    }

                    //GB.userParaMap=this.getUsreParaMap(systemName);
                    if (!password.equals(userPassword)) {

                        putJos(outJso, "type", "Password Error !!!");
                        JSONObject jsobj = new JSONObject(content);
                        if (!jsobjGet(jsobj, "sysSet")) {
                            break;
                        }
                        String sysSet = this.retData.retStr;
                        jsobj = new JSONObject(sysSet);
                        if (!jsobjGet(jsobj, "loginPassword")) {
                            break;
                        }
                        if (!password.equals(this.retData.retStr)) {
                            break;
                        }
                    }

                    GB.paraSetMap = this.getParas();
                    //JSONObject paraMap=new JSONObject(GB.paraMap);
                    Lib.netInf(0);
                    putJos(outJsoOpts, "value", content);
                    putJos(outJsoOpts, "paras", paraContent);

                    String[] strX = GB.real_ip_str.split("\\.");
                    String netAddr = strX[0] + "." + strX[1] + "." + strX[2] + ".99";
                    String virtualIp = netAddr;

                    putJos(outJsoOpts, "webIp", virtualIp);
                    putJoo(outJso, "opts", outJsoOpts);
                    loadOutJsoResponseOk(optsJso, outJso, "Login OK.");
                    Root.log(1, "UserName: " + userName + " login.");

                    break;
//=============================================================================================================================                    

//=============================================================================================================================                    
                case "copyFile":
                    putJos(outJso, "type", "Copy File Error!");
                    if (!jsobjGet(optsJso, "fromFileName")) {
                        break;
                    }
                    String fromFileName = GB.webRootPath + this.retData.retStr;
                    if (!jsobjGet(optsJso, "toFileName")) {
                        break;
                    }
                    String toFileName = GB.webRootPath + this.retData.retStr;
                    file = new File(fromFileName);
                    if (!file.exists()) {
                        putJos(outJso, "type", "File Source Is Not Exist !!!");
                        break;
                    }
                    if (!jsobjGet(optsJso, "overWrite")) {
                        file = new File(toFileName);
                        if (file.exists() && !file.isDirectory()) {
                            putJos(outJso, "type", "File Destination Is Exist !!!");
                            break;
                        }
                    }
                    if (Lib.copyFile(fromFileName, toFileName) != 0) {
                        break;
                    }
                    setRespAction(optsJso, outJso, outJsoOpts);
                    putJos(outJso, "type", "Copy File OK");
                    putJoo(outJso, "opts", outJsoOpts);
                    break;
//=============================================================================================================================                    
                case "testServerResponse":
                    setRespAction(optsJso, outJso, outJsoOpts);
                    putJos(outJso, "type", "Test Server OK");
                    putJoo(outJso, "opts", outJsoOpts);
                    break;
                case "readFileNames":
                    putJos(outJso, "type", "Read File Names Error!");
                    if (!jsobjGet(optsJso, "initDir")) {
                        return;
                    }
                    initDir = GB.webRootPath + this.retData.retStr;
                    if (!jsobjGet(optsJso, "compareNames")) {
                        return;
                    }
                    String[] compareNames = this.retData.retStr.split(",");
                    ArrayList<String> alFileNames = Lib.readFileNames(initDir, compareNames);
                    outStr = Lib.stringListToString(alFileNames);
                    setRespAction(optsJso, outJso, outJsoOpts);
                    putJos(outJso, "type", "Read File Names OK");
                    putJos(outJsoOpts, "value", outStr);
                    putJoo(outJso, "opts", outJsoOpts);
                    break;

                case "loadUserParaMap":
                    putJos(outJso, "type", "loadUserParaMap Error!");
                    if (!jsobjGet(optsJso, "userName")) {
                        break;
                    }
                    userName = this.retData.retStr;
                    GB.userParaMap = this.getUsreParaMap(userName);
                    setRespAction(optsJso, outJso, outJsoOpts);
                    putJos(outJsoOpts, "status", "OK");
                    putJos(outJso, "type", "loadUserParaMap OK");
                    putJoo(outJso, "opts", outJsoOpts);
                    break;

                case "saveStringToFile":
                    putJos(outJso, "type", "Save To File Error!");
                    if (!jsobjGet(optsJso, "fileName")) {
                        break;
                    }
                    fileName = this.retData.retStr;
                    if (!jsobjGet(optsJso, "value")) {
                        break;
                    }
                    String valueData = this.retData.retStr;
                    String[] strC = fileName.split("/");
                    if (strC[strC.length - 1].equals("paraSet.json")) {
                        fileName = GB.paraSetPath + "/paraSet.json";
                        BufferedWriter outf = new BufferedWriter(new OutputStreamWriter(
                                new FileOutputStream(fileName), "UTF-8"));
                        try {
                            outf.write(valueData);
                        } catch (Exception ex) {
                            ex.printStackTrace();
                        } finally {
                            outf.close();
                        }
                        if (ics != null) {
                            ics.handleCommand(new JSONObject("{\"act\":\"saveParaSet\"}"));
                        }
                    } else {

                        fileName = GB.webRootPath + fileName;
                        BufferedWriter outf = new BufferedWriter(new OutputStreamWriter(
                                new FileOutputStream(fileName), "UTF-8"));
                        try {
                            outf.write(valueData);
                        } catch (Exception ex) {
                            ex.printStackTrace();
                        } finally {
                            outf.close();
                        }

                    }
                    setRespAction(optsJso, outJso, outJsoOpts);
                    putJos(outJsoOpts, "status", "OK");
                    putJos(outJso, "type", "Save To File OK");
                    putJoo(outJso, "opts", outJsoOpts);
                    strA = fileName.split("/");
                    if (strA[strA.length - 1].equals("paraSet.json")) {
                        GB.paraSetMap = this.getParas();

                    }

                    break;
                case "readFile":
                    putJos(outJso, "type", "Read File Error!");
                    if (!jsobjGet(optsJso, "fileName")) {
                        break;
                    }
                    fileName = GB.webRootPath + this.retData.retStr;
                    String outName = null;
                    if (jsobjGet(optsJso, "outName")) {
                        outName = this.retData.retStr;
                    }
                    content = Lib.readStringFile(fileName);
                    if (content == null) {
                        putJos(outJso, "type2", "Read File Content Error !!!");
                        break;
                    }
                    setRespAction(optsJso, outJso, outJsoOpts);
                    putJos(outJsoOpts, "value", content);
                    if (outName != null) {
                        putJos(outJsoOpts, "outName", outName);
                    }
                    typeStr = "Read File OK! ";
                    putJos(outJso, "type", typeStr);
                    putJoo(outJso, "opts", outJsoOpts);
                    break;

                case "deleteFilesInDir":
                    putJos(outJso, "type", "Delete File Error !!!");
                    if (!jsobjGet(optsJso, "dir")) {
                        return;
                    }
                    String actDir = GB.webRootPath + this.retData.retStr;
                    if (!jsobjGet(optsJso, "fileNames")) {
                        return;
                    }
                    JSONArray jaFileNames = new JSONArray(this.retData.retStr);
                    String[] fileNames = Lib.toStringArray(jaFileNames);
                    ArrayList<String> fileNameList = new ArrayList<String>();

                    for (int ii = 0; ii < fileNames.length; ii++) {
                        filePath = actDir + "/";
                        file = new File(filePath + fileNames[ii]);
                        if (file.exists() && !file.isDirectory()) {
                            file.delete();
                            fileNameList.add(fileNames[ii]);
                        }
                    }
                    outStr = Lib.stringListToString(fileNameList);
                    setRespAction(optsJso, outJso, outJsoOpts);
                    putJos(outJso, "type", "Delete Files OK.");
                    putJos(outJsoOpts, "value", outStr);
                    putJoo(outJso, "opts", outJsoOpts);
                    break;

            }

        } catch (Exception ex) {
            ex.printStackTrace();
            Logger.getLogger(AdminServlet.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

    public JSONObject getMenberInf(String userName, String userId, String password) {
        int i;
        for (i = 0; i < lsUserData.size(); i++) {
            if (lsUserData.get(i).id.equals(userName + "~" + userId)) {
                int hh = lsUserData.get(i).menberInf.leftMenu;
                return lsUserData.get(i).menberInf.toJson();
            }
        }
        return null;
    }

    public boolean getUserData(String userName, String userId, String password) {
        this.retData.errStr = "";
        this.retData.err_f = true;
        boolean myMenber_f = false;
        String outStr;
        String bufKey, bufValue;
        JSONObject jsTmp;
        int ibuf;
        int i;
        this.retData.valueStr = "[]";
        if (!chkLogin(userName, userId, password)) {
            return false;
        }
        int userDataInx = this.retData.reti;
        /*
        if (this.retData.retObj != null) {
            KeyJson dashboardObj = (KeyJson) this.retData.retObj;
            this.retData.valueStr = dashboardObj.value;
            this.retData.err_f = false;
            return true;
        }
         */
        if (getHashData(userName)) {
            for (i = 0; i < lsDashboardData.size(); i++) {
                if (lsDashboardData.get(i).key.equals(userName)) {
                    lsDashboardData.remove(i);
                    break;
                }
            }
            KeyJson boardData = new KeyJson(userName, this.retData.valueStr);
            lsDashboardData.add(boardData);
            lsUserData.get(userDataInx).dashboardData = boardData;
            this.retData.valueStr = boardData.value;
            this.retData.err_f = false;
            return true;
        }
        this.retData.err_f = false;
        return true;
    }

    public boolean getHashData(String userName) {
        this.retData.errStr = "";
        this.retData.err_f = true;
        boolean myMenber_f = false;
        String outStr;
        String bufKey, bufValue;
        JSONObject jsTmp;
        int ibuf;
        int i;
        if (KvRedis.keyOp("hgetall", new String[]{"hash~" + userName})) {
            if (KvRedis.map.size() > 0) {

                this.retData.lsKeyValue.clear();
                this.retData.errStr = "noon";
                this.retData.err_f = true;

                outStr = "[\n";
                ibuf = 0;
                for (Map.Entry<String, String> entry : KvRedis.map.entrySet()) {
                    bufKey = entry.getKey();
                    bufValue = entry.getValue().trim();
                    if (ibuf != 0) {
                        outStr += ",";
                    }
                    outStr += "{\"key\":\"" + bufKey + "\",";
                    char ch = bufValue.charAt(0);
                    if (ch == '\"' || ch == '[' || ch == '{') {
                        outStr += "\"value\":" + bufValue + "}\n";
                    } else {
                        outStr += "\"value\":\"" + bufValue + "\"}\n";
                    }
                    this.retData.lsKeyValue.add(new KeyValue(bufKey, bufValue));
                    ibuf++;
                }
                outStr += "]";
                this.retData.valueStr = outStr;
                this.retData.err_f = false;
                return true;
            }
        }
        return false;
    }

    public boolean chkLogin(String userName, String userId, String password) {
        JSONObject jsTmp;
        boolean dashboardExist_f = false;
        String userNameId = userName + "~" + userId;
        String[] strAA;
        for (int i = 0; i < lsUserData.size(); i++) {
            strAA = lsUserData.get(i).id.split("~");
            if (strAA.length != 2) {
                continue;
            }
            if (strAA[0].equals(userName)) {
                dashboardExist_f = true;
            }
            if (!lsUserData.get(i).id.equals(userNameId)) {
                continue;
            }
            if (!lsUserData.get(i).menberInf.password.equals(password)) {
                this.retData.errStr = "passwordError";
                this.retData.err_f = true;
                return false;
            }
            this.retData.retObj = lsUserData.get(i).dashboardData;
            this.retData.errStr = "";
            this.retData.reti = i;
            this.retData.err_f = false;
            return true;
        }
        if (!dashboardExist_f) {
            this.retData.errStr = "noDashboard";
        } else {
            this.retData.errStr = "noUserId";
        }
        this.retData.err_f = true;
        return false;

    }

    public boolean hgetAll(String tableName) {
        this.retData.lsKeyValue.clear();
        this.retData.errStr = "noon";
        this.retData.err_f = true;
        if (!KvRedis.keyOp("hgetall", new String[]{"hash~" + tableName})) {
            return false;
        }
        if (KvRedis.map.size() > 0) {
            String outStr;
            String bufValue;
            String bufKey;
            int ibuf;

            outStr = "[\n";
            ibuf = 0;
            for (Map.Entry<String, String> entry : KvRedis.map.entrySet()) {
                bufKey = entry.getKey();
                bufValue = entry.getValue().trim();
                if (ibuf != 0) {
                    outStr += ",";
                }
                outStr += "{\"key\":\"" + bufKey + "\",";
                char ch = bufValue.charAt(0);
                if (ch == '\"' || ch == '[' || ch == '{') {
                    outStr += "\"value\":" + bufValue + "}\n";
                } else {
                    outStr += "\"value\":\"" + bufValue + "\"}\n";
                }
                this.retData.lsKeyValue.add(new KeyValue(bufKey, bufValue));
                ibuf++;
            }
            outStr += "]";
            this.retData.valueStr = outStr;
            this.retData.err_f = false;
            return true;

        }

        return false;
    }

    public boolean getValues(String keyStr) {
        this.retData.lsKeyValue.clear();
        this.retData.errStr = "noon";
        this.retData.err_f = true;
        this.dbkey = keyStr;
        //==========================================================
        if (!KvRedis.keyOp("findKeys", new String[]{this.dbkey})) {
            this.retData.errStr = "linkDatabaseError";
            return false;
        }
        Iterator<String> it;
        it = KvRedis.setList.iterator();
        boolean err_f = false;
        String outStr;
        String bufStr;
        String getKey;
        int ibuf;
        outStr = "[\n";
        ibuf = 0;
        while (it.hasNext()) {
            getKey = it.next();
            if (!KvRedis.keyOp("get", new String[]{getKey})) {
                err_f = true;
                break;
            }
            bufStr = KvRedis.valueStr.trim();

            if (ibuf != 0) {
                outStr += ",";
            }
            outStr += "{\"key\":\"" + getKey + "\",";
            outStr += "\"value\":" + bufStr + "}\n";
            this.retData.lsKeyValue.add(new KeyValue(getKey, bufStr));
            ibuf++;
        }
        outStr += "]";
        if (err_f == true) {
            this.retData.errStr = "getDatabaseError";
            return false;
        }
        this.retData.valueStr = outStr;
        this.retData.err_f = false;
        return true;
    }

    public void anaStr(String inpJo, JSONObject outJo) {

    }

    /**
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.err.println("Get 1049");

        request.setCharacterEncoding("UTF-8");
        StringBuilder myJson = new StringBuilder();
        BufferedReader reader = request.getReader();
        String line;
        while ((line = reader.readLine()) != null) {
            myJson.append(line);
        }
        System.out.println(myJson.toString());
        //===============================================
        //response.setContentType("text/html; charset=utf-8");
        //String a = "任意内容";
        //PrintWriter out = response.getWriter();
        //out.write(a);        
        //out.close();
        //====================================================
        response.setContentType("application/json;charset=utf-8");//指定返回的格式为JSON格式
        JSONObject ob = new JSONObject();
        try {
            ob.accumulate("name", "小明");//添加元素
            ob.accumulate("age", 18);
        } catch (JSONException ex) {
            ex.printStackTrace();
            Logger.getLogger(AdminServlet.class.getName()).log(Level.SEVERE, null, ex);
        }
        PrintWriter out = response.getWriter();
        out.print(ob);
        out.close();

        /*
        try {
            String cmdstr = "";
            String str;
            String[] strA;
            String[] strB;
            String para0, para1, para2, para3;
            request.setCharacterEncoding("utf-8");
            resbonse.setContentType("text/html; charset=utf-8");
            PrintWriter out = resbonse.getWriter();
            out.println("dsadadas");
            para0 = request.getParameter("para0");
            switch (para0) {
                case "set table data":
                    para1 = request.getParameter("para1");//key
                    para2 = request.getParameter("para2");//value
                    para3 = request.getParameter("para3");//table
                    System.out.println("para2= " + para2);

                    //if(!KvRedis.keyOp("set", new String[]{para3+"~"+para1,para2})){
                    String para = para3 + para1;
                    System.err.println(para);
                    if (!KvRedis.keyOp("set", new String[]{para3 + para1, para2})) {
                        out.println("ErrorMessage" + "~" + KvRedis.actStr);
                        break;
                    }
                    out.println("OkMessage" + "~" + para0 + "  OK!");
                    break;
                case "get table data":
                    para1 = request.getParameter("para1");//key
                    para2 = request.getParameter("para2");//count
                    para3 = request.getParameter("para3");//table
                    if (!KvRedis.keyOp("get", new String[]{para1})) {
                        out.println("ErrorMessage" + "~" + KvRedis.actStr);
                        break;
                    }
                    out.println("OkMessage" + "~" + para0 + "  OK!");
                    break;

                case "insert table data":
                    para1 = request.getParameter("para1");//key
                    para2 = request.getParameter("para2");//value
                    para3 = request.getParameter("para3");//table
                    KvMysql.table=para3;
                    if (!KvMysql.insert(para1,para2)) {
                        out.println("ErrorMessage" + "~" + KvMysql.errStr);
                        break;
                    }
                    out.println("OkMessage" + "~" +para0 +"  OK!");
                    break;
                case "edit table data":
                    para1 = request.getParameter("para1");//key
                    para2 = request.getParameter("para2");//value
                    para3 = request.getParameter("para3");//table
                    KvMysql.table=para3;
                    if (!KvMysql.edit(para1,para2)) {
                        out.println("ErrorMessage" + "~" + KvMysql.errStr);
                        break;
                    }
                    out.println("OkMessage" + "~" +para0 +"  OK!");
                    break;
                case "insertEdit table data":
                    para1 = request.getParameter("para1");//key
                    para2 = request.getParameter("para2");//value
                    para3 = request.getParameter("para3");//table
                    KvMysql.table=para3;
                    if (!KvMysql.insertEdit(para1,para2)) {
                        out.println("ErrorMessage" + "~" + KvMysql.errStr);
                        break;
                    }
                    out.println("OkMessage" + "~" +para0 +"  OK!");
                    break;
                case "get table value":
                    para1 = request.getParameter("para1");//key
                    para2 = request.getParameter("para2");//count
                    para3 = request.getParameter("para3");//table
                    KvMysql.table=para3;
                    if (!KvMysql.getValue(para1,para2)) {
                        out.println("ErrorMessage" + "~" + KvMysql.errStr);
                        break;
                    }
                    out.println("OkMessage" + "~" +para0 +"  OK!~"+KvMysql.getValue);
                    break;
            }
        } catch (IOException | NumberFormatException e) {
        }
         */
    }

}

class RetData {

    boolean err_f = false;
    String errStr = "";
    String statusStr = "";
    String valueStr = "";
    String retStr = "";
    int reti = 0;
    float retf = 0;
    Object retObj;
    List<KeyValue> lsKeyValue = new ArrayList<>();
}

class KeyValue {

    String key;
    String value;

    KeyValue(String _key, String _value) {
        key = _key;
        value = _value;
    }
}

class Menber {

    String name;
    String password;
    int permition;
    int accountQuota;
    int accountUsed;
    String father;
    String usrSetData;

    Menber(String _name, String _password, int _permition, int _accQuota, String _father) {
        name = _name;
        father = _father;
        password = _password;
        permition = _permition;
        accountQuota = _accQuota;
        accountUsed = 0;
        usrSetData = null;
    }
}

class KeyJson {

    String key, value;

    KeyJson(String _key, String _value) {
        key = _key;
        value = _value;//jsonStr
    }

    public static boolean lsEditNew(List<KeyJson> _lsObj, KeyJson _obj) {
        int i;
        int len = _lsObj.size();
        for (i = 0; i < len; i++) {
            if (_lsObj.get(i).key.equals(_obj.key)) {
                _lsObj.remove(i);
                _lsObj.add(_obj);
                return true;
            }
        }
        _lsObj.add(_obj);
        return false;
    }

    public static boolean lsDel(List<KeyJson> _lsObj, String _key) {
        int i;
        int len = _lsObj.size();
        for (i = 0; i < len; i++) {
            if (_lsObj.get(i).key.equals(_key)) {
                _lsObj.remove(i);
                return true;
            }
        }
        return false;
    }

    public static KeyJson lsGet(List<KeyJson> _lsObj, String _key) {
        int i;
        int len = _lsObj.size();
        for (i = 0; i < len; i++) {
            if (_lsObj.get(i).key.equals(_key)) {
                return _lsObj.get(i);
            }
        }
        return null;
    }

}

class MenberInf {

    String userName = "demo";
    String userId = "gest";
    String password = "0000";
    String userFather = "";
    int permition = 400;
    int accountQuota = 0;
    int accountUsed = 0;
    int userQuota = 0;
    int priLevel = 400;
    //========================
    String language = "english";
    int leftMenu = 1;
    int fullScreen = 0;

    public JSONObject toJson() {
        JSONObject jsObj = new JSONObject();
        Lib.putJos(jsObj, "userName", userName);
        Lib.putJos(jsObj, "userId", userId);
        Lib.putJos(jsObj, "password", password);
        Lib.putJos(jsObj, "userFather", userFather);
        Lib.putJos(jsObj, "permition", permition);
        Lib.putJos(jsObj, "accountQuota", accountQuota);
        Lib.putJos(jsObj, "accountUsed", accountUsed);
        Lib.putJos(jsObj, "userQuota", userQuota);
        Lib.putJos(jsObj, "priLevel", priLevel);
        Lib.putJos(jsObj, "language", language);
        Lib.putJos(jsObj, "leftMenu", leftMenu);
        Lib.putJos(jsObj, "fullScreen", fullScreen);
        return jsObj;

    }

    public static MenberInf toObj(String jsonStr) {
        JSONObject jsTmp;
        MenberInf miTmp;
        miTmp = new MenberInf();
        try {
            jsTmp = new JSONObject(jsonStr);
            miTmp.userName = (String) jsTmp.get("userName");
            miTmp.userId = (String) jsTmp.get("userId");
            miTmp.password = (String) jsTmp.get("password");
            miTmp.userFather = (String) jsTmp.get("userFather");
            miTmp.permition = (int) jsTmp.get("permition");
            miTmp.accountQuota = (int) jsTmp.get("accountQuota");
            miTmp.accountUsed = (int) jsTmp.get("accountUsed");
            miTmp.userQuota = (int) jsTmp.get("userQuota");
            miTmp.priLevel = (int) jsTmp.get("priLevel");
            //=========================================
            miTmp.language = (String) jsTmp.get("language");
            miTmp.leftMenu = (int) jsTmp.get("leftMenu");
            miTmp.fullScreen = (int) jsTmp.get("fullScreen");
        } catch (JSONException ex) {
            Logger.getLogger(MenberInf.class.getName()).log(Level.SEVERE, null, ex);
            return miTmp;
        }
        return miTmp;

    }

}

class UserData {

    String id;//dashbordName~userId
    MenberInf menberInf;//jsonStr     
    KeyJson dashboardData;//key,jsonObj
    static int reti;
    static String retStr;

    UserData(String _nameId, MenberInf _menberInf, KeyJson _dashboardData) {
        id = _nameId;
        menberInf = _menberInf;
        dashboardData = _dashboardData;
    }

    //return true edit
    //return false new
    public static boolean lsEditNew(List<UserData> _lsObj, UserData _obj) {
        int i;
        int len = _lsObj.size();
        for (i = 0; i < len; i++) {
            if (_lsObj.get(i).id.equals(_obj.id)) {
                _lsObj.remove(i);
                _lsObj.add(_obj);
                return true;
            }
        }
        _lsObj.add(_obj);
        return false;
    }

    public static boolean lsDel(List<UserData> _lsObj, String _id) {
        int i;
        int len = _lsObj.size();
        for (i = 0; i < len; i++) {
            if (_lsObj.get(i).id.equals(_id)) {
                _lsObj.remove(i);
                return true;
            }
        }
        return false;
    }

    public static UserData lsGet(List<UserData> _lsObj, String _id) {
        int i;
        int len = _lsObj.size();
        for (i = 0; i < len; i++) {
            if (_lsObj.get(i).id.equals(_id)) {
                return _lsObj.get(i);
            }
        }
        return null;
    }

    public static boolean lsCheckExist(List<UserData> _lsObj, String _id) {
        int i;
        int len = _lsObj.size();
        for (i = 0; i < len; i++) {
            if (_lsObj.get(i).id.equals(_id)) {
                return true;
            }
        }
        return false;
    }

}
