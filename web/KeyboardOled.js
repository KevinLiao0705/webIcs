//===========================================
class Md_keyboardOled {
    static init() {
        var bobj = gr.modelOpts["Md_keyboardOled"] = {};
        var dsc = bobj["optsDsc"] = {};
        var sobj = bobj["subOpts"] = {};
        bobj.propertyWidth = 0;
        bobj.propertyHeight = 0;
        bobj.title = "DYNAMIC KEYBOARD";
        bobj.keyMode = 0;
        bobj.nowPage = 0;
        bobj.modelSet = "Model";
        bobj.templateSet = "Md_keyboardOled";
        bobj.setKeyId_f = 0;

        var sobj = sobj["sys"] = {};
        if ("Md_keyboardOled~sys") {
            sobj.keyAmt = 96;
            sobj.typeSet = "sys";
            sobj.switchKb = [];
            sobj.switchKb.push({keyIndex: 0, kbName: ""});
            sobj.switchKb.push({keyIndex: 0, kbName: ""});
            sobj.switchKb.push({keyIndex: 0, kbName: ""});
            sobj.dimIncKeyInx = 16;
            sobj.dimDecKeyInx = 15;
            sobj.testKeyInx = 14;
            sobj.stopKeyInx = 13;


            sobj.keycodeObjs = [];
            for (var i = 0; i < sobj.keyAmt; i++) {
                var keyObj = {};
                keyObj.serialType = "RS422 CH1";//HEX
                keyObj.type = "ASCII";//HEX
                keyObj.pressCode = "";
                keyObj.releaseCode = "";
                keyObj.continueCode = "";
                keyObj.codePage0 = "";
                keyObj.codePage1 = "";
                keyObj.codePage2 = "";
                keyObj.codePage3 = "";
                keyObj.codePage4 = "";
                keyObj.codePage5 = "";
                keyObj.codePage6 = "";
                keyObj.codePage7 = "";
                keyObj.imagePage0 = "";
                keyObj.imagePage1 = "";
                keyObj.imagePage2 = "";
                keyObj.imagePage3 = "";
                keyObj.imagePage4 = "";
                keyObj.imagePage5 = "";
                keyObj.imagePage6 = "";
                keyObj.imagePage7 = "";




                keyObj.outputMode = "None";
                keyObj.outputPort = 0;
                sobj.keycodeObjs.push(JSON.parse(JSON.stringify(keyObj)));
            }

            sobj.rs232 = {};
            sobj.rs232.port = "1";
            sobj.rs232.boudrate = "115200";
            sobj.rs232.dataBit = "8";
            sobj.rs232.parity = "None";
            sobj.rs232.stopBit = "1";



        }



    }
    constructor() {
        this.tickTimeK = 5;
        this.tickTime = -20;
        this.webSocketConnetCnt = 0;
        this.webSocketConnectCntK = 10;
        this.webSocketConnect_f = 0;
        this.rxCnt = 0;
    }
    initOpts(md) {
        return Model.getOpts(md.baseType, md.subType);
    }

    afterCreate() {
        var self = this;
        var md = self.md;
        var mesObj = md.compRefs["message"];
        gr.messageKobj = mesObj;
        var sta3Obj = md.compRefs["status3"];
        sys.setInputWatch(sta3Obj, "directName", "gr.status3", "innerText");
        var sta2Obj = md.compRefs["status2"];
        sys.setInputWatch(sta2Obj, "directName", "gr.status2", "innerText");
        var sta1Obj = md.compRefs["status1"];
        sys.setInputWatch(sta1Obj, "directName", "gr.status1", "innerText");
        self.socketPrg();
        return;

    }

    socketPrg() {
        var self = this;
        var md = self.md;
        gr.ws = new WebSocket('ws://' + gr.webIp + ':' + gr.webSocketPort + '/websocket');
        //gr.ws = new WebSocket('ws://192.168.0.10:80/websocket');
        gr.wsok = null;
        gr.ws.onopen = function ()
        {
            gr.wsok = gr.ws;
            console.log("WebSocket on Open");
        };
        gr.ws.onclose = function ()
        {
            gr.wsok = null;
            console.log("WebSocket Disconnect...");
        };
        gr.ws.onmessage = function (evt)
        {
            var md = self.md;
            if (self.webSocketConnect_f === 0) {
                self.webSocketConnect_f = 1;
            }
            self.webSocketConnectCnt = 0;
            var received_msg = evt.data;
            var recObj = JSON.parse(received_msg);
            if (recObj.sockValue) {
                var sockObj = JSON.parse(recObj.sockValue);
                if (sockObj["keyPressUartTx"]) {
                    if (md.opts.keyMode === 0) {
                        var txDataObj = md.compRefs["txData"];
                        self.rxCnt++;
                        if (self.rxCnt >= 10)
                            self.rxCnt = 0;
                        if (txDataObj.opts.editValue.includes(" RX")) {
                            txDataObj.opts.editValue = "";
                        }
                        txDataObj.opts.editValue += " RX" + self.rxCnt + ":" + sockObj["keyPressUartTx"];
                        txDataObj.reCreate();
                    }
                }


                if (md.stas.processBox) {
                    if (sockObj.progressValue) {
                        md.stas.processBox.opts.progressValues[0] = sockObj.progressValue;
                    }
                    if (sockObj.progressAction) {
                        md.stas.processBox.opts.actionStr = sockObj.progressAction;
                        if (sockObj.progressAction === "ERROR") {
                            md.stas.processBox.opts.titleColor = "#f88";
                        }
                        if (sockObj.progressAction === "OK") {
                            md.stas.processBox.opts.titleColor = "#8f8";
                            md.stas.processBox.opts.progressValues[0] = 100;
                            if (md.stas.processBoxOkPrg) {
                                md.stas.processBoxOkPrg();
                            }
                        }

                    }
                }
            }
            //console.log(received_msg);
            var obj = JSON.parse(recObj.wsSysJson);
            gr.status1 = "Connected " + (obj.serialTime % 10);

        };
        return;
    }
    closeSocket() {
        if (gr.wsok) {
            gr.wsok.close();
        }

    }
    sendSocket(jstr) {
        if (gr.wsok)
            gr.wsok.send(jstr);

    }

    chkWatch() {
        var self = this;
        self.tickTime++;
        if (self.tickTime < self.tickTimeK)
            return;
        self.tickTime = 0;
        var obj = {};
        obj.deviceId = "oledKeyboard";
        obj.act = "tick";
        var jstr = JSON.stringify(obj);
        self.sendSocket(jstr);
        gr.status3 = ani.dispFs;



    }

    prerCreate() {
        var self = this;
        var md = self.md;
        var op = md.opts;

    }

    build(md) {
        var self = this;
        this.md = md;
        var op = md.opts;
        var lyMap = md.lyMap;
        var comps = op.comps;
        var models = op.models;
        var layouts = op.layouts;
        var layoutGroups = op.layoutGroups;
        //======================================================================
        var cname = "c";
        var opts = {};
        opts.xc = 1;
        opts.yc = 5;
        opts.ihO = {};
        opts.ihO.c0 = 60;
        opts.ihO.c1 = 10;
        opts.ihO.c2 = 9999;
        opts.ihO.c3 = 80;
        opts.ihO.c4 = 24;
        opts.borderColor = "#ccf";
        opts.borderWidth = 3;
        layouts[cname] = {name: cname, type: "base", opts: opts};
        lyMap.set("body", cname);
        //======================================================================
        if ("headPanel") {
            var cname = lyMap.get("body") + "~" + 0;
            var opts = {};
            opts.xc = 4;
            opts.iwO = {};
            opts.iwO.c0 = 300;
            opts.iwO.c1 = 9999;
            opts.iwO.c2 = 220;
            opts.iwO.c3 = 120;
            layouts[cname] = {name: cname, type: "base", opts: opts};
            lyMap.set("headPanel", cname);
            //===============================
            var cname = lyMap.get("headPanel") + "~" + 0;
            var opts = {};
            opts.innerText = op.title;
            //opts.textAlign = "center";
            opts.fontWeight = "bold";
            opts.baseColor = "#ccc";
            opts.baseColor = "#ccf";
            opts.fontSize = 0;
            comps[cname] = {name: "title", type: "label~sys", opts: opts};
            //===============================
            var cname = lyMap.get("headPanel") + "~" + 1;
            var opts = {};

            var setObj = sys.getOptsSet("buttonSelect", op.typeSet);
            setObj.name = "";
            var keys = [];
            var baseOpts = gr.modelOpts ["Md_keyboardOled"];
            var subOpts = baseOpts["subOpts"];
            keys = Object.keys(subOpts);
            for (var key in keys)
                setObj.enum.push(keys[key]);
            var optsSet = us.set.optsSet;
            var userSetName = "Model" + "~" + "Md_keyboardOled";
            if (optsSet[userSetName]) {
                var userKeys = Object.keys(optsSet[userSetName]);
            }
            if (userKeys) {
                if (userKeys.length > 0)
                    setObj.enum.push("kvd:sepLineH");
                for (key in userKeys)
                    setObj.enum.push(userKeys[key]);
            }
            setObj.titleWidth = 0;
            opts.setObj = setObj;
            opts.setObj.value = op.typeSet;
            opts.actionFunc = function (iobj) {
                op.typeSet = iobj.value;
                md.opts = mac.getOpts(op.modelSet, op.templateSet, op.typeSet);
                md.opts.typeSet = iobj.value;
                md.opts.keyMode = 0;
                md.type = op.templateSet + "~" + op.typeSet;
                md.opts.nowPage = 0;
                md.reCreate();
                return;
            };

            models[cname] = {name: "typeButton", type: "Md_editOptsLine~sys", opts: opts};




            var cname = lyMap.get("headPanel") + "~" + 2;
            var opts = {};
            opts.menuKexts = {};
            //==================

            var menuClickPrg = function (obj) {

                if (obj.act === "itemClick") {
                    var kvObj = obj.kvObj;
                    var itemId = kvObj.opts.itemId;
                    if (itemId === "menuSaveAs") {
                        mac.saveAsOpts(op.modelSet, op.templateSet, md.opts);
                        return;
                    }

                    if (itemId === "menuEdit") {
                        var callBackPrg = function (iobj) {
                            Test.server_saveStringToFile("response ok", "", JSON.stringify(us.set), "user-" + gr.systemName + "/userSet.json");
                            op.typeSet = "sys";
                            md.reCreate();
                        };
                        mac.typeSetEdit(op.modelSet, op.templateSet, callBackPrg);
                        return;
                    }
                    if (itemId === "menuSave") {
                        mac.saveOpts(op.modelSet, op.templateSet, op.typeSet, md.opts);
                        return;
                    }
                    return;
                }
            };

            var kexts = [];
            var head = "";
            kexts.push(new Kext("menuSave", '<i class="gf">&#xe161;</i>', "", {enHint: "Save"}));
            kexts.push(new Kext("menuSaveAs", '<i class="gf">&#xeb60;</i>', "", {enHint: "Save AS"}));
            kexts.push(new Kext("menuEdit", '<i class="gf">&#xe3c9;</i>', "", {enHint: "Edit"}));
            opts.menuKexts["rootMenu"] = kexts;
            opts.buttonType = "menuButton";
            //==================
            opts.actionFunc = menuClickPrg;
            opts.buttonType = "menuButton";

            models[cname] = {name: "", type: "Md_menu", opts: opts};





            var cname = lyMap.get("headPanel") + "~" + 3;
            var opts = {};
            opts.mouseUpFunc = function (event) {
                if (op.keyMode !== 1)
                    return;
                opts = {};
                opts.title = "頁面選擇";
                opts.xc = 2;
                opts.yc = 4;
                opts.selects = [
                    "第 1 頁"
                            , "第 2 頁"
                            , "第 3 頁"
                            , "第 4 頁"
                            , "第 5 頁"
                            , "第 6 頁"
                            , "第 7 頁"
                            , "第 8 頁"
                ];

                opts.actionFunc = function (iobj) {
                    console.log(iobj);
                    if (iobj.act === "selected") {
                        op.nowPage = iobj.inx;
                        md.reCreate();
                    }
                };
                mac.selectBox(opts, 500, 340);
                return;

            };
            opts.innerText = "Page: " + (op.nowPage + 1);
            comps[cname] = {name: "pageLabel", type: "button~sys", opts: opts};


            //======================================================================
        }
        //======================================================================
        var cname = lyMap.get("body") + "~" + 2;
        var opts = {};
        opts.xc = 1;
        opts.yc = 2;
        opts.ihO = {};
        opts.ihO.c0 = 50;
        opts.ihO.c1 = 9999;
        opts.margin = 10;
        opts.tm = 50;
        opts.bm = 50;
        layouts[cname] = {name: cname, type: "base", opts: opts};
        lyMap.set("kbPanel", cname);
        //======================================================================
        if ("txPanel") {
            var cname = lyMap.get("kbPanel") + "~" + 0;
            var opts = {};
            opts.xc = 3;
            opts.iwO = {};
            opts.iwO.c0 = 9999;
            opts.iwO.c1 = 120;
            opts.iwO.c2 = 120;
            layouts[cname] = {name: cname, type: "base", opts: opts};
            lyMap.set("txPanel", cname);
            //===============================
            var cname = lyMap.get("txPanel") + "~" + 0;
            var opts = {};
            opts.preText = "Tx Data: ";
            opts.editValue = "";
            comps[cname] = {name: "txData", type: "input~text", opts: opts};
            //===============================
            var testTxPrg = function (iobj) {
                if (op.keyMode !== 0)
                    return;
                var txDataElem = md.compRefs["txData"].elems["input"];
                var rxStr = txDataElem.value;
                if (!rxStr)
                    return;

                var obj = {};
                obj.sonprgName = "OledKeyboard";
                obj.act = "uartTxDirect";
                var bytes = [];
                if (iobj.kvObj.name === "testTxAsciiButton") {
                    for (var j = 0; j < rxStr.length; j++) {
                        var char = rxStr.charCodeAt(j);
                        bytes.push(char & 0xFF);
                    }
                }
                if (iobj.kvObj.name === "testTxHexButton") {
                    var hex = 0;
                    for (var j = 0; j < rxStr.length; j++) {
                        var char = rxStr.charCodeAt(j);
                        if (j % 2) {
                            hex = hex * 16;
                            hex += KvLib.asciiToHex(char);
                            bytes.push(hex);
                        } else {
                            hex = KvLib.asciiToHex(char);
                        }
                    }
                }

                var len = bytes.length + 2;
                var uartCmd = 0x5000;
                obj.para0 = "00,23,00,00,00,00";
                obj.para0 += "," + (len & 255).toString(16);
                obj.para0 += "," + (len >> 8).toString(16);
                obj.para0 += "," + (uartCmd & 255).toString(16);
                obj.para0 += "," + (uartCmd >> 8).toString(16);
                for (var j = 0; j < bytes.length; j++)
                    obj.para0 += "," + bytes[j].toString(16);
                var jsonStr = JSON.stringify(obj);
                Test.server_sonprg("response error", null, jsonStr);


                for (i = 0; i < op.keyAmt; i++) {
                    var kobj = op.keycodeObjs[i];
                    var inx = -1;
                    if (rxStr === kobj.codePage2)
                        inx = 2;
                    if (rxStr === kobj.codePage1)
                        inx = 1;
                    if (rxStr === kobj.codePage0)
                        inx = 0;

                    if (inx >= 0) {
                        var kvobj = md.compRefs["oled#" + i];
                        kvobj.opts.backgroundInx = inx;
                        kvobj.reCreate();

                    }
                }


            };
            var cname = lyMap.get("txPanel") + "~" + 1;
            var opts = {};
            opts.innerText = "TEST TX ASCII";
            opts.clickFunc = testTxPrg;
            comps[cname] = {name: "testTxAsciiButton", type: "button~sys", opts: opts};

            var cname = lyMap.get("txPanel") + "~" + 2;
            var opts = {};
            opts.innerText = "TEST TX HEX";
            opts.clickFunc = testTxPrg;
            comps[cname] = {name: "testTxHexButton", type: "button~sys", opts: opts};



        }
        //======================================================================
        if ("oledPanel") {
            var cname = lyMap.get("kbPanel") + "~" + 1;
            var opts = {};
            opts.xc = 16;
            opts.yc = 6;
            opts.margin = 10;
            opts.xm = 8;
            opts.ym = 8;
            layouts[cname] = {name: cname, type: "base", opts: opts};
            lyMap.set("keyPanel", cname);


            var oledKeyPrg = function (event) {
                console.log(event);
                var strA = event.kvObj.name.split("#");
                if (op.setKeyId_f) {
                    if (event.act === "mouseDown") {
                        var obj = {};
                        obj.sonprgName = "OledKeyboard";
                        obj.act = "uartTxDirect";
                        var hexStr = parseInt(strA[1]).toString(16);
                        obj.para0 = "00,23,00,00,00,00,02,00," + hexStr + ",34";
                        var jsonStr = JSON.stringify(obj);
                        Test.server_sonprg("response error", null, jsonStr);
                    }
                    return;
                }




                if (op.keyMode === 0) {
                    for (var i = 0; i < op.switchKb.length; i++) {
                        var sobj = op.switchKb[i];
                        if (sobj.keyIndex === 0)
                            continue;
                        if (!sobj.kbName)
                            continue;
                        if (sobj.keyIndex !== (parseInt(strA[1]) + 1))
                            continue;
                        if (event.act !== "mouseDown")
                            continue;
                        var typeSet = sobj.kbName;
                        md.opts = mac.getOpts(op.modelSet, op.templateSet, typeSet);
                        md.opts.typeSet = typeSet;
                        md.opts.keyMode = 0;
                        md.opts.nowPage = 0;
                        md.reCreate();
                        break;
                    }



                    var kcodeObj = op.keycodeObjs[parseInt(strA[1])];
                    var txDataObj = md.compRefs["txData"];
                    if (event.act === "mouseDown") {
                        if (kcodeObj.pressCode)
                            txDataObj.opts.editValue = kcodeObj.type + ":[" + kcodeObj.pressCode + "]";
                        else
                            txDataObj.opts.editValue = "";
                        txDataObj.reCreate();

                        var obj = {};
                        obj.sonprgName = "OledKeyboard";
                        obj.act = "uartTxDirect";
                        var hexStr = parseInt(strA[1]).toString(16);
                        obj.para0 = "00,23,00,00,00,00,02,00," + hexStr + ",30";
                        var jsonStr = JSON.stringify(obj);
                        Test.server_sonprg("response error", null, jsonStr);
                        return;
                    }

                    if (event.act === "mouseUp") {
                        if (kcodeObj.releaseCode)
                            txDataObj.opts.editValue = kcodeObj.type + ":[" + kcodeObj.releaseCode + "]";
                        else
                            txDataObj.opts.editValue = "";
                        txDataObj.reCreate();

                        var obj = {};
                        obj.sonprgName = "OledKeyboard";
                        obj.act = "uartTxDirect";
                        var hexStr = parseInt(strA[1]).toString(16);
                        obj.para0 = "00,23,00,00,00,00,02,00," + hexStr + ",31";
                        var jsonStr = JSON.stringify(obj);
                        Test.server_sonprg("response error", null, jsonStr);

                        return;
                    }

                }

                if (event.act !== "mouseUp")
                    return;

                if (op.keyMode === 2) {
                    var actionFunc = function (iobj) {
                        var keycodeObj = op.keycodeObjs[parseInt(strA[1])];
                        keycodeObj.type = iobj.value.type;
                        keycodeObj.pressCode = iobj.value.pressCode;
                        keycodeObj.releaseCode = iobj.value.releaseCode;
                        //keycodeObj.continueCode = iobj.value.continueCode;
                        keycodeObj.continueCode = "";
                        keycodeObj.codePage0 = iobj.value.codePage0;
                        keycodeObj.codePage1 = iobj.value.codePage1;
                        keycodeObj.codePage2 = iobj.value.codePage2;
                        keycodeObj.codePage3 = iobj.value.codePage3;
                        keycodeObj.codePage4 = iobj.value.codePage4;
                        keycodeObj.codePage5 = iobj.value.codePage5;
                        keycodeObj.codePage6 = iobj.value.codePage6;
                        keycodeObj.codePage7 = iobj.value.codePage7;



                        keycodeObj.outputMode = iobj.value.outputMode;
                        keycodeObj.outputPort = iobj.value.outputPort;
                        keycodeObj.serialType = iobj.value.serialType;

                    };
                    var keycodeObj = op.keycodeObjs[parseInt(strA[1])];
                    var setObjs = [];

                    var setObj = sys.setOptsSetFix("串列管道", "fontStyle");
                    setObj.enum = ["RS422 CH1", "RS422 CH2", "USB COM","RS232"];
                    setObj.value = keycodeObj.serialType;
                    setObj.id = "serialType";
                    setObjs.push(setObj);


                    var setObj = sys.setOptsSetFix("碼型", "fontStyle");
                    setObj.enum = ["ASCII", "HEX"];
                    setObj.value = keycodeObj.type;
                    setObj.id = "type";
                    setObjs.push(setObj);

                    var setObj = sys.setOptsSetFix("放開碼", "nstr");
                    setObj.value = keycodeObj.releaseCode;
                    setObj.textAlign = "left";
                    setObj.id = "releaseCode";
                    setObjs.push(setObj);

                    var setObj = sys.setOptsSetFix("按下碼", "nstr");
                    setObj.value = keycodeObj.pressCode;
                    setObj.textAlign = "left";
                    setObj.id = "pressCode";
                    setObjs.push(setObj);

                    var setObj = sys.setOptsSetFix("頁 1 切換碼", "nstr");
                    setObj.value = keycodeObj.codePage0;
                    setObj.textAlign = "left";
                    setObj.id = "codePage0";
                    setObjs.push(setObj);

                    var setObj = sys.setOptsSetFix("頁 2 切換碼", "nstr");
                    setObj.value = keycodeObj.codePage1;
                    setObj.textAlign = "left";
                    setObj.id = "codePage1";
                    setObjs.push(setObj);

                    var setObj = sys.setOptsSetFix("頁 3 切換碼", "nstr");
                    setObj.value = keycodeObj.codePage2;
                    setObj.textAlign = "left";
                    setObj.id = "codePage2";
                    setObjs.push(setObj);

                    var setObj = sys.setOptsSetFix("頁 4 切換碼", "nstr");
                    setObj.value = keycodeObj.codePage3;
                    setObj.textAlign = "left";
                    setObj.id = "codePage3";
                    setObjs.push(setObj);

                    var setObj = sys.setOptsSetFix("頁 5 切換碼", "nstr");
                    setObj.value = keycodeObj.codePage4;
                    setObj.textAlign = "left";
                    setObj.id = "codePage4";
                    setObjs.push(setObj);

                    var setObj = sys.setOptsSetFix("頁 6 切換碼", "nstr");
                    setObj.value = keycodeObj.codePage5;
                    setObj.textAlign = "left";
                    setObj.id = "codePage5";
                    setObjs.push(setObj);

                    var setObj = sys.setOptsSetFix("頁 7 切換碼", "nstr");
                    setObj.value = keycodeObj.codePage6;
                    setObj.textAlign = "left";
                    setObj.id = "codePage6";
                    setObjs.push(setObj);

                    var setObj = sys.setOptsSetFix("頁 8 切換碼", "nstr");
                    setObj.value = keycodeObj.codePage7;
                    setObj.textAlign = "left";
                    setObj.id = "codePage7";
                    setObjs.push(setObj);

                    var setObj = sys.setOptsSetFix("IO輸出模式", "fontStyle");
                    setObj.enum = ["無", "反轉", "設定", "清除"];
                    setObj.value = keycodeObj.outputMode;
                    setObj.id = "outputMode";
                    setObjs.push(setObj);

                    var setObj = sys.setOptsSetFix("IO輸出位址", "nature");
                    setObj.value = keycodeObj.outputPort;
                    setObj.min = 0;
                    setObj.max = 15;
                    setObj.id = "outputPort";
                    setObjs.push(setObj);

                    /*
                     var setObj = sys.setOptsSetFix("按住碼", "str");
                     setObj.value = keycodeObj.continueCode;
                     setObj.textAlign = "left";
                     setObj.id = "continueCode";
                     setObjs.push(setObj);
                     */


                    mac.setBox("按鍵碼設定", setObjs, 800, 14, actionFunc);
                    return;
                }
                if (op.keyMode === 1) {
                    var actionFunc = function (selStr) {
                        op.keycodeObjs[parseInt(strA[1])]['imagePage' + op.nowPage] = selStr;
                        event.kvObj.opts.backgroundImageUrls[op.nowPage] = selStr;
                        event.kvObj.reCreate();
                        console.log(selStr);
                    };
                    var opts = {};
                    opts.color = "#0ff";
                    opts.actionFunc = actionFunc;
                    var mod = new Model("", "Md_filePicker~sys", opts, {});
                    sys.popModel(mod, 0, 0);
                    return;
                }



            };


            var oledInx = 0;
            for (var j = 0; j < 96; j++) {
                var cname = lyMap.get("keyPanel") + "~" + j;
                var opts = {};
                opts.ihO = {};
                opts.ihO.c0 = 20;
                opts.ihO.c1 = 9999;
                opts.xc = 1;
                opts.yc = 2;
                opts.xm = 8;
                opts.whr = 0.8;
                layouts[cname] = {name: cname, type: "base", opts: opts};
                lyMap.set("keyPanel" + j, cname);
                if (j === 16 || j === 17)
                    continue;
                if (j === 30 || j === 31)
                    continue;


                var cname = lyMap.get("keyPanel" + j) + "~" + 0;
                var opts = {};
                opts.innerText = "" + (oledInx + 1);
                opts.textAlign = "center";
                comps[cname] = {name: "label#" + oledInx, type: "label~sys", opts: opts};
                var cname = lyMap.get("keyPanel" + j) + "~" + 1;
                var opts = {};
                //opts.clickFunc = oledKeyPrg;

                var keyObj = op.keycodeObjs[oledInx];
                if (keyObj.imagePage1) {
                    var io = 0;
                }
                if (op.setKeyId_f === 0) {
                    opts.backgroundInx = op.nowPage;
                    var keyObj = op.keycodeObjs[oledInx];
                    opts.backgroundImageUrls = [
                        keyObj.imagePage0
                                , keyObj.imagePage1
                                , keyObj.imagePage2
                                , keyObj.imagePage3
                                , keyObj.imagePage4
                                , keyObj.imagePage5
                                , keyObj.imagePage6
                                , keyObj.imagePage7
                    ];
                } else {

                    opts.innerText = "" + (oledInx + 1);
                    opts.backgroundImageUrls = [];
                    opts.innerTextColor = '#ccc';
                }

                opts.mouseDownFunc = oledKeyPrg;
                opts.mouseUpFunc = oledKeyPrg;
                //opts.mouseOutFunc = oledKeyPrg;
                comps[cname] = {name: "oled#" + oledInx, type: "button~icon", opts: opts};
                oledInx++;


            }
        }
        //======================================================================
        if ("buttonPanel") {
            var cname = lyMap.get("body") + "~" + 3;
            var opts = {};
            opts.xc = 6;
            opts.yc = 2;
            layouts[cname] = {name: cname, type: "base", opts: opts};
            lyMap.set("buttonPanel", cname);

            var funcKeyPrg = function (event) {
                var name = event.kvObj.name;
                var strA = name.split("#");
                if (strA[1] === "15") {
                    window.close();
                    return;
                }



                if (strA[1] === "0" || strA[1] === "1" || strA[1] === "2") {
                    op.nowPage = 0;
                    md.opts.keyMode = parseInt(strA[1]);
                    md.reCreate();
                    return;
                }


                if (strA[1] === "4") {
                    var actionFunc = function (iobj) {
                        var valueObj = iobj.value;
                        for (var key in valueObj) {
                            if (key === "dimIncKeyInx") {
                                op.dimIncKeyInx = valueObj[key];
                                continue;
                            }
                            if (key === "dimDecKeyInx") {
                                op.dimDecKeyInx = valueObj[key];
                                continue;
                            }
                            if (key === "testKeyInx") {
                                op.testKeyInx = valueObj[key];
                                continue;
                            }
                            if (key === "stopKeyInx") {
                                op.stopKeyInx = valueObj[key];
                                continue;
                            }


                            var strA = key.split("#");
                            var inx = parseInt(strA[1]);
                            op.switchKb[inx][strA[0]] = valueObj[key];
                        }

                        console.log(iobj);

                    };
                    var setObjs = [];
                    var i = 0;
                    for (i = 0; i < op.switchKb.length; i++) {
                        var setObj = sys.setOptsSetFix("" + (i + 1) + ": 切換按鍵編號", "nature");
                        setObj.id = "keyIndex#" + i;
                        setObj.value = parseInt(op.switchKb[i].keyIndex);
                        setObj.titleWidth = 300;
                        setObj.nameFontSize = "0.6rh";
                        setObjs.push(setObj);
                        var setObj = sys.setOptsSetFix("切換鍵盤名稱", "fontStyle");
                        var optsSet = us.set.optsSet;
                        var userSetName = op.modelSet + "~" + op.templateSet;
                        if (optsSet[userSetName]) {
                            var userKeys = Object.keys(optsSet[userSetName]);
                        }
                        setObj.enum = [];
                        setObj.enum.push("");
                        if (userKeys) {
                            for (var key in userKeys) {
                                setObj.enum.push(userKeys[key]);
                            }
                        }
                        setObj.value = op.switchKb[i].kbName;
                        setObj.id = "kbName#" + i;
                        setObj.titleWidth = 300;
                        setObj.nameFontSize = "0.6rh";
                        setObjs.push(setObj);
                    }
                    var setObj = sys.setOptsSetFix("" + (i + 1) + ": 亮度+ 按鍵編號", "nature");
                    setObj.id = "dimIncKeyInx";
                    setObj.value = op.dimIncKeyInx;
                    setObj.titleWidth = 300;
                    setObj.nameFontSize = "0.6rh";
                    setObjs.push(setObj);

                    var setObj = sys.setOptsSetFix("" + (i + 2) + ": 亮度- 按鍵編號", "nature");
                    setObj.id = "dimDecKeyInx";
                    setObj.value = op.dimDecKeyInx;
                    setObj.titleWidth = 300;
                    setObj.nameFontSize = "0.6rh";
                    setObjs.push(setObj);

                    var setObj = sys.setOptsSetFix("" + (i + 3) + ": 測試 按鍵編號", "nature");
                    setObj.id = "testKeyInx";
                    setObj.value = op.testKeyInx;
                    setObj.titleWidth = 300;
                    setObj.nameFontSize = "0.6rh";
                    setObjs.push(setObj);

                    var setObj = sys.setOptsSetFix("" + (i + 4) + ": 停止 按鍵編號", "nature");
                    setObj.id = "stopKeyInx";
                    setObj.value = op.stopKeyInx;
                    setObj.titleWidth = 300;
                    setObj.nameFontSize = "0.6rh";
                    setObjs.push(setObj);




                    mac.setBox("特殊按鍵設定", setObjs, 800, op.switchKb.length * 2 + 4, actionFunc);
                    return;


                }

                if (strA[1] === "6") {
                    opts = {};
                    opts.title = "自測";
                    opts.xc = 1;
                    opts.yc = 7;
                    var sels = opts.selects = [];
                    sels.push("測試停止");
                    sels.push("測試 1");
                    sels.push("測試 2");
                    sels.push("測試 3");
                    sels.push("測試 4");
                    sels.push("測試 5");
                    sels.push("測試 6");
                    var stopAllActionFunc = function () {
                    };
                    opts.actionFunc = function (iobj) {
                        console.log(iobj);
                        if (iobj.act === "cancle")
                            return;
                        obj = {};
                        obj.sonprgName = "OledKeyboard";
                        obj.act = "uartTxDirect";
                        obj.para0 = "00,23,00,00,00,00,02,00," + iobj.inx + ",20";
                        var jsonStr = JSON.stringify(obj);
                        Test.server_sonprg("response error", null, jsonStr);
                        return;
                    };
                    mac.selectBox(opts, 500, 450);
                    return;
                }
                if (strA[1] === "7") {
                    obj = {};
                    obj.sonprgName = "OledKeyboard";
                    obj.act = "zipDirToFlashFile";
                    obj.dir = "user-" + gr.systemName;
                    obj.outFile = "flash.kvbin";
                    var jsonStr = JSON.stringify(obj);
                    Test.server_sonprg("response ok", "", jsonStr);
                    return;
                }
                if (strA[1] === "8") {
                    opts = {};
                    opts.title = "系統設定";
                    opts.xc = 1;
                    opts.yc = 7;
                    opts.selects = [
                        "RS422 CH1 設定",
                        "RS422 CH2 設定",
                        "USB COM 設定",
                        "RS232 設定",
                        "按鍵 ID 設定",
                        "密碼設定",
                        "登出"
                    ];

                    opts.actionFunc = function (iobj) {

                        if (iobj.inx === 4) {
                            sys.popOff(2);
                            op.keyMode = 999;
                            op.setKeyId_f = 1;
                            md.reCreate();
                            return;
                        }

                        if (iobj.inx === 6) {
                            gr.repaint_f = 1;
                            gr.showLogo_f = 1;
                            document.cookie = 'userName=' + "" + "; max-age=3600";
                            document.cookie = 'password=' + "" + "; max-age=3600";
                            return;
                        }

                        if (iobj.inx === 5) {
                            var retPrg = function (iobj) {
                                if (!us.set.sysSet)
                                    us.set.sysSet = {};
                                var sysSet = us.set.sysSet;
                                sysSet['loginPassword'] = iobj;
                            };
                            mac.setPassword(retPrg);
                            return;
                        }

                        if (iobj.inx <= 3) {
                            if (iobj.inx === 0) {
                                var objName = "rs422Ch1";
                                var objTitle = "RS422 CH1 設定";
                            }
                            if (iobj.inx === 1) {
                                var objName = "rs422Ch2";
                                var objTitle = "RS422 CH2 設定";
                            }
                            if (iobj.inx === 2) {
                                var objName = "usbcom";
                                var objTitle = "USB COM 設定";
                            }
                            if (iobj.inx === 3) {
                                var objName = "rs232";
                                var objTitle = "RS232 設定";
                            }
                            var actionFunc = function (iobj) {
                                console.log(iobj);
                                var sys232Obj = iobj.value;
                                var obj = {};
                                //obj.port = sys232Obj.Port;
                                obj.action = sys232Obj.Action;
                                obj.boudrate = sys232Obj.Boudrate;
                                //obj.dataBit = sys232Obj.DataBit;
                                obj.parity = sys232Obj.Parity;
                                obj.stopBit = sys232Obj.StopBit;
                                obj.packageType = sys232Obj.PackeageType;
                                if (!us.set.sysSet)
                                    us.set.sysSet = {};
                                var sysSet = us.set.sysSet;
                                sysSet[objName] = obj;
                            };
                            if (!us.set.sysSet)
                                us.set.sysSet = {};
                            if (!us.set.sysSet[objName]) {
                                var obj = {};
                                obj.port = 1;
                                obj.action = "disable";
                                obj.boudrate = "9600";
                                obj.dataBit = "8";
                                obj.parity = "None";
                                obj.stopBit = "1";
                                obj.packageType = "0";
                                us.set.sysSet[objName] = obj;
                            }
                            var sys232Obj = us.set.sysSet[objName];
                            var setObjs = [];
                            //var setObj = sys.setOptsSetFix("Port", "nature");
                            //setObj.value = parseInt(sys232Obj.port);
                            //setObj.min = 1;
                            //setObjs.push(setObj);
                            var setObj = sys.setOptsSetFix("Action", "fontStyle");
                            setObj.enum = ["Disable", "Enable"];
                            setObj.value = sys232Obj.action;
                            setObjs.push(setObj);


                            var setObj = sys.setOptsSetFix("Boudrate", "fontStyle");
                            setObj.enum = ["9600", "57600", "115200"];
                            setObj.value = sys232Obj.boudrate;
                            setObjs.push(setObj);
                            //var setObj = sys.setOptsSetFix("DataBit", "fontStyle");
                            //setObj.enum = ["8", "7"];
                            //setObj.value = sys232Obj.dataBit;
                            //setObjs.push(setObj);
                            var setObj = sys.setOptsSetFix("Parity", "fontStyle");
                            setObj.enum = ["None", "Odd", "Even"];
                            setObj.value = sys232Obj.parity;
                            setObjs.push(setObj);

                            var setObj = sys.setOptsSetFix("StopBit", "fontStyle");
                            setObj.enum = ["1", "2"];
                            setObj.value = sys232Obj.stopBit;
                            setObjs.push(setObj);

                            var setObj = sys.setOptsSetFix("PackageType", "fontStyle");
                            setObj.enum = ["0", "1", "2", "3", "4", "5", "6", "7"];
                            setObj.value = sys232Obj.packageType;
                            setObjs.push(setObj);


                            mac.setBox(objTitle, setObjs, 800, 5, actionFunc);
                            return;


                        }


                    };
                    mac.selectBox(opts, 500, 450);
                    return;
                }
                if (strA[1] === "9") {
                    opts = {};
                    opts.title = "檔案管理";
                    opts.xc = 1;
                    opts.yc = 4;
                    var sels = opts.selects = [];
                    sels.push("另存使用者設定");
                    sels.push("載入使用者設定");
                    sels.push("載入圖檔");
                    sels.push("建立字串圖檔");
                    //sels.push("載入所有檔案");
                    opts.actionFunc = function (iobj) {
                        console.log(iobj);
                        switch (iobj.inx) {
                            case 0:
                                var fileName = "all.kvzip";
                                gr.serverResponseFunc = function (mes) {
                                    console.log(mes);
                                    if (mes.type === "Zip Dir OK") {
                                        mac.saveFileToLocal("user-" + gr.systemName + "/all.kvzip", "all.kvzip");
                                    }
                                };
                                Test.server_zipDir("response none", "", "user-" + gr.systemName, "user-" + gr.systemName + "/" + fileName);
                                return;
                                mac.saveFileToLocal();
                                return;
                                mac.saveStringToLocalFile(JSON.stringify(us.set));
                                return;
                            case 1:
                                var actionFunc = function (files) {
                                    sv.uploadFiles(files, "user-" + gr.systemName, "unzipFileToDir");
                                };
                                mac.uploadeFiles(actionFunc, ".kvzip");
                                return;

                                var actionFunc = function (content) {
                                    try {
                                        var usSet = JSON.parse(content);
                                    } catch (ex) {
                                        sys.mesBox("cr~Error", 500, "File Formate Error !!!");
                                        return;

                                    }
                                    us.set = usSet;
                                    var typeSet = mac.getSaveType(op.modelSet, op.templateSet);
                                    md.opts = mac.getOpts(op.modelSet, op.templateSet, typeSet);
                                    md.opts.typeSet = typeSet;
                                    md.opts.keyMode = 0;
                                    md.reCreate();
                                };
                                mac.loadLocalFile(actionFunc);
                                return;
                            case 2:
                                var actionFunc = function (files) {
                                    sv.uploadFiles(files, "user-" + gr.systemName, "saveFileToDir");
                                };
                                mac.uploadeFiles(actionFunc);
                                return;

                            case 3:
                                opts = {};
                                opts.actionFunc = function (iobj) {
                                    var md = this.md;
                                    var fileLoaded = function (xobj) {
                                        var func = function (yobj) {
                                            var inFileName = yobj.value.fileName.toLowerCase();
                                            for (var i = 0; i < xobj.length; i++) {
                                                if (inFileName === xobj[i].toLowerCase()) {
                                                    sys.mesBox("cr~Error", 500, "Name Has Existed !!!");
                                                    return;
                                                }
                                            }
                                            iobj.fileName = inFileName;
                                            Test.server_writeImageFile("response ok", "", "user-keyboardOled", iobj);
                                        };
                                        var sobj = sys.setOptsSetFix("fileName", "str");
                                        mac.inputLineBox("Input File Name", sobj, 800, func);
                                    };
                                    gr.serverCallBack = fileLoaded;
                                    Test.server_readFileNames("response error", "exeCallBackFunc", "user-keyboardOled");
                                };
                                mac.fontImageCreater(opts, 600, 600);
                                return;





                        }
                    };
                    mac.selectBox(opts, 500, 320);
                    return;
                }

                if (strA[1] === "10") {
                    opts = {};
                    opts.title = "寫入鍵盤";
                    opts.xc = 1;
                    opts.yc = 8;
                    var sels = opts.selects = [];
                    sels.push("ERASE FLASH");
                    sels.push("CHECK BLANK");
                    sels.push("PROGRAM FLASH");
                    sels.push("VERIFIY FLASH");
                    sels.push("AUTO PROGRAM");
                    sels.push("ERASE ALL KEY");
                    sels.push("WRITE ALL KEY");
                    sels.push("SET ALL KEY");

                    //sels.push("載入所有檔案");
                    var stopAllActionFunc = function () {
                        obj = {};
                        obj.sonprgName = "OledKeyboard";
                        obj.act = "stopAction";
                        var jsonStr = JSON.stringify(obj);
                        Test.server_sonprg("response none", "", jsonStr);
                        md.stas.processBox = null;
                    };
                    opts.actionFunc = function (iobj) {
                        console.log(iobj);
                        switch (iobj.inx) {
                            case 0:
                                var eraseCheckPrg = function (iobj) {
                                    console.log(iobj);
                                    if (iobj.buttonName !== "OK")
                                        return;
                                    obj = {};
                                    obj.sonprgName = "OledKeyboard";
                                    obj.act = "eraseFlash";
                                    obj.dir = "user-" + gr.systemName;
                                    var jsonStr = JSON.stringify(obj);
                                    gr.serverCallBack = function (iobj, mes) {
                                        if (iobj) {
                                            console.log(iobj);
                                            if (iobj.status === "OK") {
                                                obj = {};
                                                obj.title = "ERASE FLASH";
                                                obj.progressNames = [""];
                                                obj.progressValues = [0];
                                                obj.actionFunc = stopAllActionFunc;
                                                md.stas.processBox = sys.processBox(obj);
                                                md.stas.processBoxOkPrg = null;
                                            }
                                        }
                                    };
                                    Test.server_sonprg("response error", "exeCallBackFunc", jsonStr);
                                };
                                sys.mesBox("cy~Warnning", 600, "Erase All Flash ?", ["OK", "ESC"], eraseCheckPrg);
                                return;
                            case 1:
                                obj = {};
                                obj.sonprgName = "OledKeyboard";
                                obj.act = "checkFlashBlank";
                                obj.dir = "user-" + gr.systemName;
                                var jsonStr = JSON.stringify(obj);
                                gr.serverCallBack = function (iobj, mes) {
                                    if (iobj) {
                                        console.log(iobj);
                                        if (iobj.status === "OK") {
                                            obj = {};
                                            obj.title = "CHECK FLASH BLANK";
                                            obj.progressNames = [""];
                                            obj.progressValues = [0];
                                            obj.actionFunc = stopAllActionFunc;
                                            md.stas.processBox = sys.processBox(obj);
                                            md.stas.processBoxOkPrg = null;
                                        }
                                    }
                                };
                                Test.server_sonprg("response error", "exeCallBackFunc", jsonStr);
                                return;
                            case 2:
                                var programCheckPrg = function (iobj) {
                                    console.log(iobj);
                                    if (iobj.buttonName !== "OK")
                                        return;
                                    obj = {};
                                    obj.sonprgName = "OledKeyboard";
                                    obj.act = "writeFileToKeyboard";
                                    obj.dir = "user-" + gr.systemName;
                                    obj.inFile = "flash.kvbin";
                                    var jsonStr = JSON.stringify(obj);
                                    gr.serverCallBack = function (iobj, mes) {
                                        if (iobj) {
                                            console.log(iobj);
                                            if (iobj.status === "OK") {
                                                obj = {};
                                                obj.title = "Program Flash";
                                                obj.progressNames = [""];
                                                obj.progressValues = [0];
                                                obj.actionFunc = stopAllActionFunc;
                                                md.stas.processBox = sys.processBox(obj);
                                                md.stas.processBoxOkPrg = null;
                                            }
                                        }
                                    };
                                    Test.server_sonprg("response error", "exeCallBackFunc", jsonStr);
                                };
                                sys.mesBox("cy~Warnning", 600, "Program All Flash ?", ["OK", "ESC"], programCheckPrg);
                                return;
                            case 3:
                                obj = {};
                                obj.sonprgName = "OledKeyboard";
                                obj.act = "verifyFlash";
                                obj.dir = "user-" + gr.systemName;
                                obj.inFile = "flash.kvbin";
                                var jsonStr = JSON.stringify(obj);
                                gr.serverCallBack = function (iobj, mes) {
                                    if (iobj) {
                                        console.log(iobj);
                                        if (iobj.status === "OK") {
                                            obj = {};
                                            obj.title = "Verify Flash";
                                            obj.progressNames = [""];
                                            obj.progressValues = [0];
                                            obj.actionFunc = stopAllActionFunc;
                                            md.stas.processBox = sys.processBox(obj);
                                            md.stas.processBoxOkPrg = null;
                                        }
                                    }
                                };
                                Test.server_sonprg("response error", "exeCallBackFunc", jsonStr);
                                return;
                            case 4:
                                var autoCheckPrg = function (iobj) {
                                    console.log(iobj);
                                    if (iobj.buttonName !== "OK")
                                        return;
                                    obj = {};
                                    obj.sonprgName = "OledKeyboard";
                                    obj.act = "eraseFlash";
                                    obj.dir = "user-" + gr.systemName;
                                    var jsonStr = JSON.stringify(obj);
                                    gr.serverCallBack = function (iobj, mes) {
                                        if (iobj) {
                                            console.log(iobj);
                                            if (iobj.status === "OK") {
                                                obj = {};
                                                obj.title = "ERASE FLASH";
                                                obj.progressNames = [""];
                                                obj.progressValues = [0];
                                                obj.actionFunc = stopAllActionFunc;
                                                md.stas.processBox = sys.processBox(obj);
                                                var processBoxOkPrg = function () {
                                                    sys.popOff(2);
                                                    obj = {};
                                                    obj.sonprgName = "OledKeyboard";
                                                    obj.act = "writeFileToKeyboard";
                                                    obj.dir = "user-" + gr.systemName;
                                                    obj.inFile = "flash.kvbin";
                                                    var jsonStr = JSON.stringify(obj);
                                                    gr.serverCallBack = function (iobj, mes) {
                                                        if (iobj) {
                                                            console.log(iobj);
                                                            if (iobj.status === "OK") {
                                                                obj = {};
                                                                obj.title = "Program Flash";
                                                                obj.progressNames = [""];
                                                                obj.progressValues = [0];
                                                                obj.actionFunc = stopAllActionFunc;
                                                                md.stas.processBox = sys.processBox(obj);
                                                                md.stas.processBoxOkPrg = null;
                                                            }
                                                        }
                                                    };
                                                    Test.server_sonprg("response error", "exeCallBackFunc", jsonStr);
                                                    return;
                                                };
                                                md.stas.processBoxOkPrg = processBoxOkPrg;
                                            }
                                        }
                                    };
                                    Test.server_sonprg("response error", "exeCallBackFunc", jsonStr);
                                    return;
                                };
                                sys.mesBox("cy~Warnning", 600, "Erase And Program All Flash ?", ["OK", "ESC"], autoCheckPrg);
                                return;


                            case 5:
                                var eraseKeyCheckPrg = function (iobj) {
                                    console.log(iobj);
                                    if (iobj.buttonName !== "OK")
                                        return;
                                    obj = {};
                                    obj.sonprgName = "OledKeyboard";
                                    obj.act = "eraseScanKey";
                                    obj.sonprgName = "OledKeyboard";
                                    obj.dir = "user-" + gr.systemName;
                                    var jsonStr = JSON.stringify(obj);
                                    gr.serverCallBack = function (iobj, mes) {
                                        if (iobj) {
                                            console.log(iobj);
                                            if (iobj.status === "OK") {
                                                obj = {};
                                                obj.title = "Erase Key";
                                                obj.progressNames = [""];
                                                obj.progressValues = [0];
                                                obj.actionFunc = stopAllActionFunc;
                                                md.stas.processBox = sys.processBox(obj);
                                                md.stas.processBoxOkPrg = null;
                                            }
                                        }
                                    };
                                    Test.server_sonprg("response error", "exeCallBackFunc", jsonStr);
                                };


                                sys.mesBox("cy~Warnning", 600, "Erase All Key ?", ["OK", "ESC"], eraseKeyCheckPrg);
                                return;

                            case 6:
                                var writeCheckPrg = function (iobj) {
                                    console.log(iobj);
                                    if (iobj.buttonName !== "OK")
                                        return;
                                    obj = {};
                                    obj.sonprgName = "OledKeyboard";
                                    obj.act = "writeScanKey";
                                    obj.sonprgName = "OledKeyboard";
                                    obj.dir = "user-" + gr.systemName;
                                    var jsonStr = JSON.stringify(obj);
                                    gr.serverCallBack = function (iobj, mes) {
                                        if (iobj) {
                                            console.log(iobj);
                                            if (iobj.status === "OK") {
                                                obj = {};
                                                obj.title = "Write Key";
                                                obj.progressNames = [""];
                                                obj.progressValues = [0];
                                                obj.actionFunc = stopAllActionFunc;
                                                md.stas.processBox = sys.processBox(obj);
                                                md.stas.processBoxOkPrg = null;
                                            }
                                        }
                                    };
                                    Test.server_sonprg("response error", "exeCallBackFunc", jsonStr);
                                };
                                sys.mesBox("cy~Warnning", 600, "Write Data To Key ?", ["OK", "ESC"], autoCheckPrg);
                                return;
                            case 7:
                                obj = {};
                                obj.sonprgName = "OledKeyboard";
                                obj.act = "setScanKey";
                                obj.sonprgName = "OledKeyboard";
                                obj.dir = "user-" + gr.systemName;
                                var jsonStr = JSON.stringify(obj);
                                gr.serverCallBack = function (iobj, mes) {
                                    if (iobj) {
                                        console.log(iobj);
                                        if (iobj.status === "OK") {
                                            obj = {};
                                            obj.title = "Set Key";
                                            obj.progressNames = [""];
                                            obj.progressValues = [0];
                                            obj.actionFunc = stopAllActionFunc;
                                            md.stas.processBox = sys.processBox(obj);
                                            md.stas.processBoxOkPrg = null;
                                        }
                                    }
                                };
                                Test.server_sonprg("response error", "exeCallBackFunc", jsonStr);
                                return;


                        }






                    };
                    mac.selectBox(opts, 500, 460);
                    return;
                }
                if (strA[1] === "5") {
                    var obj = {};
                    obj.sonprgName = "OledKeyboard";
                    obj.act = "uartTxDirect";
                    var hexStr = parseInt(strA[1]).toString(16);
                    obj.para0 = "00,23,00,00,00,00,02,00," + hexStr + ",35";//resetkeyboard
                    var jsonStr = JSON.stringify(obj);
                    Test.server_sonprg("response error", null, jsonStr);
                    op.keyMode = 0;
                    op.setKeyId_f = 0;
                    md.reCreate();
                    return;

                }


            };

            for (var i = 0; i < 12; i++) {
                var cname = lyMap.get("buttonPanel") + "~" + i;
                var opts = {};
                opts.clickFunc = funcKeyPrg;

                if (op.keyMode === i) {
                    opts.baseColor = "#ccf";
                }
                opts.actionFunc = function (iobj) {
                    console.log(iobj);
                };
                opts.innerText = "";
                if (i === 0) {
                    opts.innerText = "模擬鍵盤";
                }
                if (i === 1) {
                    opts.innerText = "設定按鍵圖片";
                }
                if (i === 2) {
                    opts.innerText = "設定按鍵功能";
                }
                if (i === 4) {
                    opts.innerText = "特殊按鍵設定";
                }
                if (i === 5) {
                    opts.innerText = "重置鍵盤";
                }
                if (i === 6) {
                    opts.innerText = "自測模式";
                }
                if (i === 7) {
                    opts.innerText = "轉檔";
                }
                if (i === 8) {
                    //opts.innerText = "另存檔案";
                    opts.innerText = "系統設定";
                }
                if (i === 9) {
                    opts.innerText = "檔案管理";
                    //opts.innerText = "載入檔案";
                }
                if (i === 10) {
                    opts.innerText = "寫入鍵盤";
                }
                if (i === 11) {
                    opts.innerText = "離開";
                }


                comps[cname] = {name: "button#" + i, type: "button~sys", opts: opts};
            }
        }
        //======================================================================
        var cname = lyMap.get("body") + "~" + 4;
        mac.setFootBar(layouts, lyMap, comps, cname);
    }
}
