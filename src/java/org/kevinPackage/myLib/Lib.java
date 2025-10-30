package org.kevinPackage.myLib;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.net.UnknownHostException;
import java.util.Enumeration;

 

public class Lib
{
    static String retstr;
    static int search(String str,String st,String end)
    {
        int sti,endi;
        sti=str.indexOf(st);
        if(sti<0) return -1; 
        endi=str.indexOf(end,sti+st.length());
        if(endi<0) return -1; 
        retstr=str.substring(sti+st.length(), endi);
        return 1;
    }   
    static int searchEnd(String str,String st,String end)
    {
        int sti,endi;
        sti=str.indexOf(st);
        if(sti<0) return -1; 
        endi=str.indexOf(end, sti+st.length());
        if(endi<0)
            endi=str.length();
        retstr=str.substring(sti+st.length(), endi);
        return 1;
    }   
    
    static int fsearchEnd(String fileName,String st,String end)
    {
        File f = new File(fileName);
        if(!f.exists())
            return -1;
        if(f.isDirectory()) 
            return -1;
        FileReader fr;
        BufferedReader br;
        String []fields;
        String tmp;
        try 
        {
            fr = new FileReader(fileName);
            br = new BufferedReader(fr);
            while((tmp=br.readLine())!=null)
            {
                if(searchEnd(tmp,st,end)==1)
                {
                    fr.close();
                    br.close();
                    return 1;
                }
            }
            fr.close();
            br.close();
            return 0;
        } 
        
        catch (FileNotFoundException e) 
        {
           System.err.println( e.getClass().getName() + ": " + e.getMessage() );
        } 
        catch (IOException e) 
        {
           System.err.println( e.getClass().getName() + ": " + e.getMessage() );
        }
        return -1;
    }   
    
    
    
public static String getLocalAddressByFile(String fnameInterfaces,String paraName)
   {
        
        File f = new File(fnameInterfaces);
        if(f.exists() && !f.isDirectory()) 
        {
            FileReader fr;
            BufferedReader br;
            String []fields;
            String tmp;
            try 
            {
                fr = new FileReader(fnameInterfaces);
                br = new BufferedReader(fr);
                while((tmp=br.readLine())!=null)
                {
                    if( tmp.contains(paraName) )
                    {
                        fields = tmp.split("[ ]+");
                        return fields[1];
                    }
                }
                fr.close();
                br.close();
                return "Invalid interfaces file";
            } 
            catch (FileNotFoundException ex) 
            {
            } 
            catch (IOException ex) 
            {
            }
 		
        }
        else
        {
            try 
            {
                return InetAddress.getLocalHost().getHostAddress();
            } 
            catch (UnknownHostException ex) 
            {
                return null;
            }
        }
        return null;
      
    }
    
    
    
    public static int wrInterfaces()
   {
        String fname;
        String bstr;
        fname=LoadDb.realPath+LoadDb.interfaces;
        try
        {
            FileWriter fw = new FileWriter(fname);
            fw.write("auto lo\n");
            fw.write("iface lo inet loopback\n");
            fw.write("\n");
            fw.write("auto eth0\n");
            fw.write("iface eth0 inet static\n");
            bstr="address "+LoadDb.ip_address+"\n";
            fw.write(bstr);
            bstr="netmask "+LoadDb.subnet_mask+"\n";
            fw.write(bstr);
            bstr="gateway "+LoadDb.default_gateway+"\n";
            fw.write(bstr);
            fw.flush();
            fw.close();
            return 1;
        }
        catch (FileNotFoundException e) 
        {
           System.err.println( e.getClass().getName() + ": " + e.getMessage() );
        } 
        catch (IOException e) 
        {
           System.err.println( e.getClass().getName() + ": " + e.getMessage() );
        }
        return 0;
    }
   
   
    static public int ping(String ip,int wait_tim) 
    {        
        int i=0;
        try
        {    
              if(InetAddress.getByName(ip).isReachable(wait_tim))
                  return 0;
              else
                  return -1;
        } 
        catch (UnknownHostException e) 
        {
           System.err.println( e.getClass().getName() + ": " + e.getMessage() );
            return -1;
        } 
        catch (IOException e) 
        {
           System.err.println( e.getClass().getName() + ": " + e.getMessage() );
            return -1;
        }
    }    
    
    public static final int ping(String hostname) 
    {
        try 
        {
            if(LoadDb.linuxWin_f==0)
                return Runtime.getRuntime().exec("ping -c 1 "+hostname).waitFor();
            else
                return Runtime.getRuntime().exec("ping -n 1 -w 1000 "+hostname).waitFor();
            //n=tx count w=wait time
        } 
        catch (InterruptedException | IOException e) { e.printStackTrace();return -1; }
    }
    
    public static final int exeShell(String exestr) 
    {
        try 
        {
            if(LoadDb.linuxWin_f==0)
                return Runtime.getRuntime().exec(exestr).waitFor();
            else
                return Runtime.getRuntime().exec(exestr).waitFor();
            
        } 
        catch (InterruptedException | IOException e) { e.printStackTrace();return -1; }
    }



    
    public static void thSleep(int ms)    
    {   
        try
        {    
          Thread.sleep(ms);
        }                
        catch (InterruptedException ex) 
        {
        }
    }




    public static void getMac() throws SocketException{    
           
        InetAddress ip;
        String localIp=null;
        int sti,i;
        String str;
        try {

            Enumeration e = NetworkInterface.getNetworkInterfaces();
            while (e.hasMoreElements()) {
                NetworkInterface n = (NetworkInterface) e.nextElement();
                Enumeration ee = n.getInetAddresses();
                while (ee.hasMoreElements()) {
                    InetAddress ia = (InetAddress) ee.nextElement();
                    str = ia.getHostAddress();
                    System.out.println(str);
                    sti = str.indexOf("192.168.");
                    if (sti >= 0) {
                        localIp = str;
                    }
                }
            }

            if (localIp == null) {
                return;
            }
            //ip = InetAddress.getLocalHost();
            //ip = InetAddress.getByName("192.168.0.57");
            ip = InetAddress.getByName(localIp);
            System.out.println("Current IP address : " + ip.getHostAddress());

            NetworkInterface network = NetworkInterface.getByInetAddress(ip);

            //if(network==null)
            //    return;
            byte[] mac = network.getHardwareAddress();

            System.out.print("Current MAC address : ");

            StringBuilder sb = new StringBuilder();
            for (i = 0; i < mac.length; i++) {
                sb.append(String.format("%02X%s", mac[i], (i < mac.length - 1) ? "-" : ""));
            }
            LoadDb.mac_address=sb.toString();
            System.out.println(sb.toString());


            
            

        } catch (UnknownHostException | SocketException e) {
        }
    
    }
}



