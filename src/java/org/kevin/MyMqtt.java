/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.kevin;

import java.util.concurrent.TimeUnit;

import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.eclipse.paho.client.mqttv3.IMqttDeliveryToken;
import org.eclipse.paho.client.mqttv3.MqttCallback;
import org.eclipse.paho.client.mqttv3.MqttClient;
import org.eclipse.paho.client.mqttv3.MqttConnectOptions;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.eclipse.paho.client.mqttv3.persist.MemoryPersistence;

/**
 *
 * @author Administrator
 */
public class MyMqtt {

    //Listen td1 = null;
    public int td1_run_f = 0;
    public int td1_destroy_f = 0;

    public int qos = 2; //只有一次
    public String broker = "tcp://118.163.89.29:1883";
    public String userName = "kevin";
    public String passWord = "xcdswe32@";
    public MqttClient client = null;
    public String clientId = "webServer";
    List<String> subTopics = new ArrayList<>();

    public void connect() {
        MemoryPersistence persistence = new MemoryPersistence();
        MqttConnectOptions connOpts = new MqttConnectOptions();
        connOpts.setCleanSession(true);
        connOpts.setUserName(userName);
        connOpts.setPassword(passWord.toCharArray());
        connOpts.setConnectionTimeout(2);
        connOpts.setKeepAliveInterval(20);
        client = null;
//		String[] uris = {"tcp://10.100.124.206:1883","tcp://10.100.124.207:1883"};
//		connOpts.setServerURIs(uris);  //起到負載均衡和高可用的作用
        try {
            client = new MqttClient(broker, clientId, persistence);
            client.setCallback(new PushCallback("test"));
            client.connect(connOpts);

        } catch (MqttException ex) {
            Logger.getLogger(MyMqtt.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public void disConnect(String clientId) {
        if (client == null) {
            return;
        }
        try {
            client.disconnect();
        } catch (MqttException ex) {
            Logger.getLogger(MyMqtt.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public void pub(String topic, String msg) {
        if(client==null)
            return;
        MqttMessage message = new MqttMessage(msg.getBytes());
        message.setQos(qos);
        message.setRetained(false);
        try {
            client.publish(topic, message);
        } catch (MqttException ex) {
            Logger.getLogger(MyMqtt.class.getName()).log(Level.SEVERE, null, ex);
        }
    }


    public void addSubTopic(String topic) {
        subTopics.add(topic);
    }

    public void clearSubTopic(String topic) {
        subTopics.clear();
    }

    public void delSubTopic(String topic) {
        int len = subTopics.size();
        for (int i = 0; i < len; i++) {
            if (subTopics.get(i) == topic) {
                subTopics.remove(i);
                break;
            }
        }
    }

    public void sub() {
        if (client == null) {
            return;
        }
        int[] Qos = {qos};
        String[] topics = (String[]) subTopics.toArray();
        try {
            client.subscribe(topics, Qos);
        } catch (MqttException ex) {
            Logger.getLogger(MyMqtt.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public void sub(String topic) {
        if (client == null) {
            return;
        }
        int[] Qos = {qos};
        String[] topics = {topic};
        try {
            client.subscribe(topics, Qos);
        } catch (MqttException ex) {
            Logger.getLogger(MyMqtt.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public void sub(String[] topics) {
        if (client == null) {
            return;
        }
        int[] Qos = {qos};
        try {
            client.subscribe(topics, Qos);
        } catch (MqttException ex) {
            Logger.getLogger(MyMqtt.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

}

class PushCallback implements MqttCallback {

    private String threadId;

    public PushCallback(String threadId) {
        this.threadId = threadId;
    }

    public void connectionLost(Throwable cause) {

    }

    public void deliveryComplete(IMqttDeliveryToken token) {
//       System.out.println("deliveryComplete---------" + token.isComplete());
    }

    public void messageArrived(String topic, MqttMessage message) throws Exception {
        String msg = new String(message.getPayload());
        System.out.println(threadId + " " + msg);
    }
}
