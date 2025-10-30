/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.kevin;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;
import org.json.JSONException;
import org.json.JSONObject;

/**
 *
 * @author Kevin
 */
@ServerEndpoint("/websocket")
public class WebSocketConn {

    WebSocketConn cla;
    JSONObject mtxJson = new JSONObject();
    JSONObject webSockOutJson = new JSONObject();
    JSONObject wsSysJson = new JSONObject();

    static public String retCommand = "";

    public void init() {
        putJson(wsSysJson, "serialTime", 0);
        //========================
    }

    public void putJson(JSONObject jobj, String key, Object value) {
        try {
            jobj.put(key, value);//添加元素
        } catch (JSONException ex) {
        }
    }

    Object getJson(JSONObject jobj, String key) {
        try {
            return jobj.get(key);//添加元素
        } catch (JSONException ex) {
        }
        return null;
    }

    @OnMessage
    public void onMessage(String message, Session session) throws IOException, InterruptedException {
        cla = this;
        Object obj;
        JSONObject mesJson;
        try {
            mesJson = new JSONObject(message);
        } catch (JSONException ex) {
            Logger.getLogger(WebSocketConn.class.getName()).log(Level.SEVERE, null, ex);
            return;
        }
        //======================================================================
        obj = getJson(wsSysJson, "serialTime");
        int serialTime = (int) obj;
        serialTime++;
        serialTime = serialTime % 10000;
        System.out.println("testBackValue " + serialTime);
        putJson(wsSysJson, "serialTime", serialTime);
        //======================================================================
        String userName = "";
        try {
            obj = mesJson.get("userName").toString();
            if (obj != null) {
                userName = obj.toString();
                ConnectCla conObj = GB.connectMap.get(userName);
                if (conObj != null) {
                    conObj.time = 0;
                } else {
                    conObj = new ConnectCla(userName, 100);//unit 20ms
                    GB.connectMap.put(userName, conObj);
                    //Root.log(1, "UserName: " + userName  + " jmp in.");

                }
            }
        } catch (Exception ex) {

        }

        obj = getJson(mesJson, "deviceId");
        String deviceId = (String) obj;
        obj = getJson(mesJson, "act");
        String actStr = (String) obj;
        JSONObject outJson = new JSONObject();
        putJson(outJson, "act", actStr + "~react");
        putJson(outJson, "wsSysJson", wsSysJson.toString());
        switch (deviceId) {
            case "syncUi":
                outJson = Sync.wsCallBack(userName, mesJson, actStr, outJson);
                break;
            case "icsUi":
                break;
            case "oledKeyboard":
                //OledKeyboard.wsCallBack(mesJson,actStr,outJson);
                if (GB.webRetStr.length() != 0) {
                    putJson(outJson, "sockValue", GB.webRetStr);
                    GB.webRetStr = "";
                }
                if (actStr.equals("txJsonToUrl")) {
                    //=========================================================
                    obj = getJson(mesJson, "address");
                    String address = (String) obj;
                    obj = getJson(mesJson, "port");
                    int port = (int) obj;
                    obj = getJson(mesJson, "value");
                    String jsonStr = obj.toString();
                    Csocket csocket = new Csocket(address, port);
                    csocket.tx(jsonStr);
                    System.out.println("txJsonToUrl " + address + " " + port);
                }
                break;
        }
        session.getBasicRemote().sendText(outJson.toString());
        return;

        /*

        if ("oledKeyboard".equals(deviceId)) {
            obj = getJson(mesObj, "act");
            String actStr = (String) obj;
            if (actStr.equals("tick")) {
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
            }
        
        
            if (actStr.equals("txJsonToUrl")) {
                //=========================================================
                System.out.println("txJsonToUrl");

                obj = getJson(mesObj, "address");
                String address = (String) obj;
                obj = getJson(mesObj, "port");
                int port = (int) obj;
                obj = getJson(mesObj, "value");
                String jsonStr = obj.toString();
                Csocket csocket = new Csocket(address, port);
                csocket.tx(jsonStr);
                System.out.println("txJsonToUrl " + address + " " + port);

                if (GB.webRetStr.length() != 0) {
                    JSONObject outJson = new JSONObject();
                    putJson(outJson, "act", "callBack");
                    putJson(outJson, "sockValue", GB.webRetStr);
                    session.getBasicRemote().sendText(outJson.toString());
                    GB.webRetStr = "";
                }
                return;

            }
        }
         */
    }

    @OnOpen
    public void onOpen() {
        cla = this;
        cla.init();
        System.out.println("與客戶端建立連線了！");
    }

    @OnClose
    public void onClose() {
        System.out.println("連線關閉！");
    }

    @OnError
    public void onError(Session session, Throwable t) {
        System.out.println("連線發生錯誤！");
    }

}
