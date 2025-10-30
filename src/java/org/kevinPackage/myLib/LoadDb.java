/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.kevinPackage.myLib;

import java.io.FileReader;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Connection;
import java.io.File;
import java.lang.reflect.Field;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Administrator
 */
public class LoadDb {

    //public static String socket_ip="192.168.0.41";//
    public static int linuxWin_f=0;
    public static Ssocket webssk;
    public static int init_f=0;
    public static String socket_ip="127.0.0.1";//
    public static int socket_port=1235;
    public static String realPath="./";
    //public static String interfaces="interfaces";
    public static String interfaces="/etc/network/interfaces";
    
    //=================================================================
    public static String[] paraName = new String[256];
    public static String[] paraValue = new String[256];
    public static int paraLen = 0;
    //table1                                                            
    //=================================================================
    public static String server_time = "00000000";
    public static String ip_address = "0.0.0.0";
    public static String subnet_mask = "0.0.0.0";
    public static String default_gateway = "0.0.0.0";
    public static String mac_address = "00,00,00,00,00,00";
    public static String latitude = "122.2345E";
    public static String longitude = "22.3455N";
    public static String height = "67";
    public static String gps_fixed = "0";
    public static String satelite_in_view = "0";


    public void loadPara2Form() {

        LoadDb cla = this;
        Class type;
        Object obj;
        int i;
        String str;
        String[] strA;

        Field[] f3 = cla.getClass().getDeclaredFields();
        for (i = 0; i < f3.length; i++) {
            f3[i].setAccessible(true);
            try {
                obj = f3[i].get(cla);
                if (obj instanceof String[]) {
                    str=f3[i].getName();
                    strA = (String[]) obj;
                    for (int j = 0; j < paraLen; j++) {
                        String[] sbufA;
                        sbufA=paraName[j].split("~");
                        if(sbufA.length==2)
                        {    
                            if (str.equals(sbufA[0])) {
                                strA[Integer.parseInt(sbufA[1])]=paraValue[j];
                            }
                        }
                    }
                    
                    //int len=strA.length;
                } else if (obj instanceof String) {
                    str = f3[i].getName();
                    for (int j = 0; j < paraLen; j++) {
                        if (str.equals(paraName[j])) {
                            f3[i].set(cla, paraValue[j]);
                        }
                    }
                } else {

                }
            } catch (IllegalArgumentException | IllegalAccessException ex) {
                Logger.getLogger(LoadDb.class.getName()).log(Level.SEVERE, null, ex);
            }

        }
    }

    public void loadPara2Reg() {
        int i;
        for(i=0;i<paraLen;i++){
            switch(paraName[i]){
                case "socket_ip":
                    LoadDb.socket_ip=paraValue[i];
                    break;
                case "socket_port":
                    LoadDb.socket_port=Integer.parseInt(paraValue[i]);
                    break;
                case "server_time":
                    LoadDb.server_time=paraValue[i];
                    break;
                case "ip_address":
                    LoadDb.ip_address=paraValue[i];
                    break;
                case "subnet_mask":
                    LoadDb.subnet_mask=paraValue[i];
                    break;
                    
                case "default_gateway":
                    LoadDb.default_gateway=paraValue[i];
                    break;
                case "mac_address":
                    LoadDb.mac_address=paraValue[i];
                    break;
                case "latitude":
                    LoadDb.latitude=paraValue[i];
                    break;
                case "longitude":
                    LoadDb.longitude=paraValue[i];
                    break;
                case "height":
                    LoadDb.height=paraValue[i];
                    break;
                case "gps_fixed":
                    LoadDb.subnet_mask=paraValue[i];
                    break;
                case "satelite_in_view":
                    LoadDb.subnet_mask=paraValue[i];
                    break;
                    
            }

            
            
            
        }
            
    
    }
    public void loadData(String filePath) {

        String fileName;
        fileName = filePath + "setdata.xml";
        readSetdata(fileName);
        fileName = filePath + "setdata.db";
        readDb(fileName);
        loadPara2Reg();
        loadPara2Form();
    }

    public void readSetdata(String file) {
        String str;
        FileReader reader;
        BufferedReader br = null;
        try {
            reader = new FileReader(file);
            br = new BufferedReader(reader);
        } catch (IOException e) {
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }

        int line;
        String paraN;
        String paraV;
        for (int i = 0; i < LoadDb.paraLen; i++) {
            LoadDb.paraName[i] = null;
            LoadDb.paraValue[i] = null;
            LoadDb.paraLen = 0;
        }
        //line = cla.ta1.getLineCount();
        try {
            String sCurrentLine;
            while ((sCurrentLine = br.readLine()) != null) {
                System.out.println(sCurrentLine);
                if (Lib.search(sCurrentLine, "[", "]") == 1) {
                    paraN = Lib.retstr;
                    if (Lib.search(sCurrentLine, "<", ">") == 1) {
                        paraV = Lib.retstr;
                        LoadDb.newPara(paraN, paraV);
                    }
                }
            }

        } catch (IOException e) {
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }


    }

    public static int newPara(String name, String value) {
        if (paraLen >= 256) {
            return 0;
        }
        paraName[paraLen] = name;
        paraValue[paraLen] = value;
        paraLen++;
        return 1;
    }

    public static int editPara(String name, String value) {
        int i;
        for (i = 0; i < paraLen; i++) {
            if (paraName[i].equals(name)) {
                paraValue[i] = value;
                return 1;
            }
        }
        return 0;
    }

    public static int editNewPara(String name, String value) {
        if (editPara(name, value) == 0) {
            return newPara(name, value);
        }
        return 1;
    }

    public static String getPara(String name) {
        int i;
        for (i = 0; i < paraLen; i++) {
            if (paraName[i].equals(name)) {
                return paraValue[i];
            }
        }
        return null;
    }

    public static int deletePara(String name) {
        int i;
        for (i = 0; i < paraLen; i++) {
            if (paraName[i].equals(name)) {
                i++;
                for (; i < paraLen; i++) {
                    paraName[i - 1] = paraName[i];
                    paraValue[i - 1] = paraValue[i];
                }
                paraLen--;
                return 1;
            }
        }
        return 0;
    }

    public void readDb(String fileName) {
        Connection con = null;
        String pName;
        String pValue;
        String sbuf;
        try {
            Class.forName("org.sqlite.JDBC");
            con = DriverManager.getConnection("jdbc:sqlite:" + fileName);
            con.setAutoCommit(false);
            //==============================================
            java.sql.Statement stmt = con.createStatement();
            sbuf = "SELECT * FROM paraTable;";
            ResultSet rs = stmt.executeQuery(sbuf);
            while (rs.next()) {
                pName = rs.getString("paraName");
                pValue = rs.getString("paraValue");
                LoadDb.editNewPara(pName, pValue);
            }
            rs.close();
            stmt.close();
            con.close();
        } catch (Exception e) {
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }

    public boolean checkDb(String fileName, String paraName) {
        Connection con = null;
        String pName;
        String pValue;
        String sbuf;
        boolean ret = false;
        try {
            Class.forName("org.sqlite.JDBC");
            con = DriverManager.getConnection("jdbc:sqlite:" + fileName);
            con.setAutoCommit(false);
            //==============================================
            java.sql.Statement stmt = con.createStatement();
            sbuf = "SELECT * FROM paraTable;";
            ResultSet rs = stmt.executeQuery(sbuf);
            while (rs.next()) {
                pName = rs.getString("paraName");
                if (pName.equals(paraName)) {
                    ret = true;
                    break;
                }
            }
            rs.close();
            stmt.close();
            con.close();
        } catch (Exception e) {
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
        return ret;
    }

    
    
    public int editNewDb(String fileName, String paraName, String paraValue) {
        int line=0;
        line=editDb(fileName,paraName,paraValue);
        if(line>0)
            return line;
        line=insertDb(fileName,paraName,paraValue);
        return line;
    }

    
    public int editDb(String fileName, String paraName, String paraValue) {
        Connection con = null;
        String sql;
        int chgLine=0;
        try {
            Class.forName("org.sqlite.JDBC");
            con = DriverManager.getConnection("jdbc:sqlite:" + fileName);
            con.setAutoCommit(false);
            java.sql.Statement stmt = con.createStatement();
            //UPDATE paraTable set 
            sql = "UPDATE paraTable set paraValue = \"";
            sql = sql + paraValue;
            sql = sql + "\" where paraName=\"";
            sql = sql + paraName;
            sql = sql + "\";";
            chgLine = stmt.executeUpdate(sql);
            con.commit();
            stmt.close();
            con.close();
        } catch (Exception e) {
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
        }
        return chgLine;
    }

    //statement.executeUpdate("INSERT INTO Customers " + "VALUES (1001, 'Simpson', 'Mr.', 'Springfield', 2001)");
    public int insertDb(String fileName, String paraName, String paraValue) {
        Connection con = null;
        String sql;
        int chgLine=0;
        try {
            Class.forName("org.sqlite.JDBC");
            con = DriverManager.getConnection("jdbc:sqlite:" + fileName);
            con.setAutoCommit(false);
            java.sql.Statement stmt = con.createStatement();
            sql = "INSERT INTO paraTable VALUES ('";
            sql+= paraName;
            sql+= "','";
            sql+= paraValue;
            sql+="');";
            chgLine = stmt.executeUpdate(sql);
            con.commit();
            stmt.close();
            con.close();
        } catch (Exception e) {
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
        }
        return chgLine;
    }

}
