package classes;

import org.json.JSONObject;

public class ExStatus {
    public String name;
    public int sta=0;//0:unregister, 1:register, 2:login, 3:used
    public ExStatus(String _key) {
        name = _key;
    }
}