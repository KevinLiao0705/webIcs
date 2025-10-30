/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.kevinPackage.myLib;

import java.io.UnsupportedEncodingException;

/**
 *
 * @author Administrator
 */
public class Mlb {
    public static String test_str="qwerasdf";    
    
    @SuppressWarnings("empty-statement")
    public static String big5(String str) {
        try {
            String big5str = new String(str.getBytes("ISO-8859-1"), "UTF-8");
            return big5str;
        } catch (UnsupportedEncodingException ex) {
        };
        return "";
    }
    
}
