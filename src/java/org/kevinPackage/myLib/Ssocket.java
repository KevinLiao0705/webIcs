/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.kevinPackage.myLib;

import java.io.BufferedOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Ssocket extends java.lang.Thread {

    int status_f = 0;
    int stop_f;
    int connect_f = 0;
    String status_str;
    String conip_address;
    int datain_f = 0;
    byte[] inbuf = new byte[4096];
    int inbuf_len;

    int inbuf_inx0 = 0;
    int inbuf_inx1 = 0;
    int port = 1234;
    public int format = 1;   //0:encode formate 
    public int rxcon_ltim = 200;//unit 10ms;

    OutputStream outstr;
    InputStream instr;

    private ServerSocket serverSocket;
    MyStm stm;

    public Ssocket() {
        stm = new MyStm();
    }

    public void rxproc(int format) {
        //System.out.println("Socket Receiver a Package !!");
        String str;
        datain_f = 0;
        connect_f = 1;
        double dbuf;
        int ibuf;
        if (format == 1) {
            switch (inbuf[0]) {
                case (byte) 0xa7:
                    //str = ""+(inbuf[23]&255);
                    //System.out.println(str);
                    //LoadDb.ip_address=(inbuf[1]&255)+"."+(inbuf[2]&255)+"."+(inbuf[3]&255)+"."+(inbuf[4]&255);   
                    //LoadDb.subnet_mask=(inbuf[5]&255)+"."+(inbuf[6]&255)+"."+(inbuf[7]&255)+"."+(inbuf[8]&255);     
                    //LoadDb.default_gateway=(inbuf[9]&255)+"."+(inbuf[10]&255)+"."+(inbuf[11]&255)+"."+(inbuf[12]&255);             
                    
                    
                    LoadDb.satelite_in_view=""+(inbuf[18]&255);
                    LoadDb.gps_fixed=""+(inbuf[19]&255);
                    ibuf=(inbuf[22]&255);
                    ibuf=(inbuf[23]&255)+ibuf*256;
                    ibuf=(inbuf[24]&255)+ibuf*256;
                    ibuf=(inbuf[25]&255)+ibuf*256;
                    dbuf=(inbuf[20]&255)*256+(inbuf[21]&255)+(ibuf/100000.0);
                    LoadDb.latitude=""+dbuf;
                    ibuf=(inbuf[28]&255);
                    ibuf=(inbuf[29]&255)+ibuf*256;
                    ibuf=(inbuf[30]&255)+ibuf*256;
                    ibuf=(inbuf[31]&255)+ibuf*256;
                    dbuf=(inbuf[26]&255)*256+(inbuf[27]&255)+(ibuf/100000.0);
                    LoadDb.longitude=""+dbuf;
                    ibuf=(inbuf[34]&255);
                    ibuf=(inbuf[35]&255)+ibuf*256;
                    ibuf=(inbuf[36]&255)+ibuf*256;
                    ibuf=(inbuf[37]&255)+ibuf*256;
                    dbuf=(inbuf[32]&255)*256+(inbuf[33]&255);
                    LoadDb.height=""+dbuf;
                    
                    
                    
                    
                    break;
            }
        }
    }

    public void create(int pt) {
        try {
            port = pt;
            serverSocket = new ServerSocket(port);
        } catch (java.io.IOException e) {
            status_str = "\n Socket啟動有問題 ! ";
            status_str += "\n IOException : " + e.toString();
            status_f = 1;
            //System.out.println("Socket啟動有問題 !");
            //System.out.println("IOException :" + e.toString());
        }
    }

    public void txout() {

        int stx_index = 0;
        int i;
        //stm.tbuf[stx_index++] = (byte) 0xA2;
        //stm.tbuf[stx_index++] = (byte) 0x12;
        //stm.tbuf[stx_index++] = (byte) 0x34;
        //stm.tbuf[stx_index++] = (byte) 0x56;
        //stm.tbuf[stx_index++] = (byte) 0x78;
        //stm.tbuf_byte = stx_index;
        stm.enc_mystm();
        for (i = 0; i < stm.txlen; i++) {
            try {
                outstr.write(stm.tdata[i]);
            } catch (IOException ex) {
                Logger.getLogger(Ssocket.class.getName()).log(Level.SEVERE, null, ex);
            }
        }

    }

    
    public void encTxoutIp(String addr,int po) {
        stm.enc_mystm();
        byte[] txb=new byte[stm.txlen];
        for (int i = 0; i < stm.txlen; i++) {
            txb[i]=stm.tdata[i];
        }
        Socket client = new Socket();
        InetSocketAddress isa = new InetSocketAddress(addr,po);
        try {
            client.connect(isa, 10000);
            BufferedOutputStream out = new BufferedOutputStream(client.getOutputStream());
            out.write(txb);
            out.flush();
            out.close();
            out = null;
            client.close();
            client = null;
        } catch (java.io.IOException e) {
            System.out.println("Error in encTxoutIp() ");
            System.out.println("IOException :" + e.toString());
        }
    }
    
    
    public void strTxoutIp(String addr,int po,String str) {
        Socket client = new Socket();
        InetSocketAddress isa = new InetSocketAddress(addr,po);
        try {
            client.connect(isa, 10000);
            BufferedOutputStream out = new BufferedOutputStream(client.getOutputStream());
            out.write(str.getBytes());
            out.flush();
            out.close();
            out = null;
            client.close();
            client = null;
        } catch (java.io.IOException e) {
            System.out.println("Error in strTxoutIp() ");
            System.out.println("IOException :" + e.toString());
        }
    }
    
    
    
    public void run() {
        Socket socket;
        //java.io.BufferedInputStream instr;
        //java.io.BufferedOutputStream outstr;
        int debug_cnt = 0;
        status_f = 1;
        status_str = "\n 伺服器已啟動 !";
        int i, j;
        //
        int length;
        byte[] bbuf = new byte[1024];
        //
        int rxdata;
        int rxcon_tim;

        while (stop_f != 1) {
            String str;
            str = "Socket Rx Tread " + debug_cnt++;
            System.out.println(str);
            try {
                synchronized (serverSocket) {
                    socket = serverSocket.accept();
                }
                conip_address = socket.getInetAddress().toString();
                status_str = "\n 取得連線 : InetAddress = " + socket.getInetAddress();
                status_f = 1;
                instr = socket.getInputStream();
                outstr = socket.getOutputStream();
                inbuf_inx0 = 0;
                if (format == 0) {
                    socket.setSoTimeout(rxcon_ltim * 10);
                    while ((length = instr.read(bbuf)) > 0)// <=0的話就是結束了
                    {
                        if (inbuf_inx0 > 4096) {
                            break;
                        }
                        for (i = 0; i < length; i++) {
                            inbuf[(inbuf_inx0 + i) & 0xfff] = bbuf[i];
                        }
                        inbuf_inx0 += length;
                        inbuf_len = inbuf_inx0;
                    }
                    instr.close();
                    instr = null;
                    socket.close();
                    datain_f = 1;
                    rxproc(0);
                }

                if (format == 1) {
                    socket.setSoTimeout(1000);
                    rxcon_tim = 0;
                    while (true) {
                        rxdata = instr.read();
                        if (rxdata == -1) {

                            Lib.thSleep(10);
                            if (++rxcon_tim >= rxcon_ltim) {
                                instr.close();
                                instr = null;
                                socket.close();
                                status_str = "\n 連線中斷 : InetAddress = " + conip_address;
                                status_f = 1;
                                break;
                            }

                            continue;
                        }
                        rxdata &= 0xff;
                        rxcon_tim = 0;
                        stm.dec_mystm((byte) rxdata);
                        if (stm.rxin_f == 1) {
                            stm.rxin_f = 0;
                            for (i = 0; i < stm.rxlen; i++) {
                                inbuf[i] = (byte) (stm.rdata[i + 1]);
                            }
                            inbuf_len = stm.rxlen;
                            datain_f = 1;
                            rxproc(1);
                            //================================
                            //txout();
                            //=================================

                        }

                    }

                }

            } catch (java.io.IOException e) {
                status_str = "\n Socket連線有問題 ! ";
                status_str += "\n IOException : " + e.toString();
                status_f = 1;
                //System.out.println("Socket連線有問題 !");
                //System.out.println("IOException :" + e.toString());
            }
        }
    }

    public static void main(String args[]) {
        (new Ssocket()).start();
    }
}
