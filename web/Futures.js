//===========================================
class Md_futures {
    constructor() {
        this.tickTimeK = 5;
        this.tickTime = -20;
        this.webSocketConnetCnt = 0;
        this.webSocketConnectCntK = 10;
        this.webSocketConnect_f = 0;
        this.futuresBuf = [];
        this.futuresBufEnd = 0;
        this.futuresBufLen = 0;
        this.futuresBufMax = 1000;
    }
    initOpts(md) {
        var self = this;
        var obj = {};
        obj.knobName = "";
        obj.knobValue = null;
        obj.chInx = 0;
        return obj;
    }
    afterCreate() {
        var self = this;
        var md = self.md;
        gr.futuresMd = md;
        
        var mesObj = md.compRefs["message"];
        gr.messageKobj = mesObj;
        var sta3Obj = md.compRefs["status3"];
        sys.setInputWatch(sta3Obj, "directName", "gr.status3", "innerText");
        var sta2Obj = md.compRefs["status2"];
        sys.setInputWatch(sta2Obj, "directName", "gr.status2", "innerText");
        var sta1Obj = md.compRefs["status1"];
        sys.setInputWatch(sta1Obj, "directName", "gr.status1", "innerText");
        
        var sta3Obj = md.compRefs["status3"];
        sys.setInputWatch(sta3Obj, "directName", "ani.dispFs", "innerText");
        
        var plotObj = md.compRefs["plot"];
        var plotCtr = md.modelRefs["plotCtr"];
        plotCtr.paras.plot = plotObj;
        
        self.socketPrg();

    }

    socketPrg() {
        var md = gr.futuresMd;
        var self = md.mdClass;
        var op = self.md.opts;
        if (gr.wsok)
            return;
        gr.ws = new WebSocket('ws://' + gr.webSocketAddress + ':' + gr.webSocketPort + '/websocket');
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
            var md = gr.futuresMd;
            var self = md.mdClass;
            var op = self.md.opts;
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
                        txDataObj.opts.editValue = "RX:" + sockObj["keyPressUartTx"];
                        txDataObj.reCreate();
                    }
                }


                if (md.stas.processBox) {
                    if (sockObj.progressValue) {
                        md.stas.processBox.opts.progressValues[0] = sockObj.progressValue;
                    }
                    if (sockObj.progressAction) {
                        md.stas.processBox.opts.actionStr = sockObj.progressAction;
                        if (sockObj.progressAction === "OK") {
                            md.stas.processBox.opts.titleColor = "#8f8";
                            md.stas.processBox.opts.progressValues[0] = 100;
                        }
                        if (sockObj.progressAction === "ERROR") {
                            md.stas.processBox.opts.titleColor = "#f88";
                        }

                    }
                }
            }
            //console.log(received_msg);
            var wsSysObj = JSON.parse(recObj.wsSysJson);
            gr.status1 = "Connected " + (wsSysObj.serialTime % 10);
            if (recObj.act !== "tick~react")
                var yy = 0;
            if (gr.socketRetPrgTbl[recObj.act])
                gr.socketRetPrgTbl[recObj.act](recObj);
            if (recObj.fpgaDatas) {

            }
        };
        return;
    }
    closeSocket() {
        if (gr.wsok) {
            gr.wsok.close();
        }

    }

    sendSocket(obj) {
        var self = this;
        if (!gr.wsok) {
            self.socketPrg();
            return;
        }
        obj.deviceId = "futuresUi";
        gr.wsok.send(JSON.stringify(obj));
    }

    chkWatch() {
        var self = this;
        self.tickTime++;
        if (self.tickTime < self.tickTimeK)
            return;
        self.tickTime = 0;
        var obj = {};
        obj.act = "tick";
        self.sendSocket(obj);



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
        opts.yc = 3;
        opts.ihO = {};
        opts.ihO.c0 = 9999;
        opts.ihO.c1 = 40;
        opts.ihO.c2 = 24;
        layouts[cname] = {name: cname, type: "base", opts: opts};
        lyMap.set("body", cname);
        //======================================================================
        var cname = lyMap.get("body") + "~" + 0;
        var opts = {};
        opts.xc = 3;
        opts.iwO = {};
        opts.iwO.c0 = 500;
        opts.iwO.c1 = 9999;
        opts.iwO.c2 = 250;
        layouts[cname] = {name: cname, type: "base", opts: opts};
        lyMap.set("bodyUp", cname);
        //======================================================================
        var cname = lyMap.get("bodyUp") + "~" + 2;
        var opts = {};
        models[cname] = {name: "plotCtr", type: "Md_plotCtr~sys", opts: opts};



        var cname = lyMap.get("bodyUp") + "~" + 0;
        var opts = {};
        opts.xc = 1;
        opts.yc = 30;
        layouts[cname] = {name: cname, type: "base", opts: opts};
        lyMap.set("pnLeft", cname);
        //==============================================
        var serInx = 0;
        var cname = lyMap.get("pnLeft") + "~" + serInx;
        var opts = {};
        var setObj = {};
        setObj.name = "Opration Server";
        setObj.value = "None";
        setObj.setType = "viewer";
        setObj.dataType = "text";
        setObj.titleWidth = 0;
        setObj.preTextWidth = 200;
        opts.setObj = setObj;
        models[cname] = {name: "mdEditOptsLine~" + serInx, type: "Md_editOptsLine~sys", opts: opts};
        //==============================================
        serInx++;
        var cname = lyMap.get("pnLeft") + "~" + serInx;
        var opts = {};
        var setObj = {};
        setObj.name = "Security Server";
        setObj.value = "Connect";
        setObj.setType = "buttonSelect";
        setObj.setType = "viewer";
        setObj.dataType = "text";
        setObj.titleWidth = 0;
        setObj.preTextWidth = 200;
        opts.setObj = setObj;
        models[cname] = {name: "mdEditOptsLine~" + serInx, type: "Md_editOptsLine~sys", opts: opts};
        //==============================================
        serInx++;
        var cname = lyMap.get("pnLeft") + "~" + serInx;
        var opts = {};
        var setObj = {};
        setObj.name = "Commodity";
        setObj.value = "MTX";
        setObj.setType = "buttonSelect";
        setObj.dataType = "text";
        setObj.enum= ["MTX", "TX"];
        setObj.titleWidth = 0;
        setObj.preTextWidth = 200;
        opts.setObj = setObj;
        models[cname] = {name: "mdEditOptsLine~" + serInx, type: "Md_editOptsLine~sys", opts: opts};
        //==============================================
        serInx++;
        var cname = lyMap.get("pnLeft") + "~" + serInx;
        var opts = {};
        var setObj = {};
        setObj.name = "Buy Position";
        setObj.value = "37";
        setObj.setType = "viewer";
        setObj.dataType = "num";
        setObj.titleWidth = 0;
        setObj.preTextWidth = 200;
        opts.setObj = setObj;
        models[cname] = {name: "mdEditOptsLine~" + serInx, type: "Md_editOptsLine~sys", opts: opts};
        //==============================================
        serInx++;
        var cname = lyMap.get("pnLeft") + "~" + serInx;
        var opts = {};
        var setObj = {};
        setObj.name = "Sell Position";
        setObj.value = "0";
        setObj.setType = "viewer";
        setObj.dataType = "num";
        setObj.titleWidth = 0;
        setObj.preTextWidth = 200;
        opts.setObj = setObj;
        models[cname] = {name: "mdEditOptsLine~" + serInx, type: "Md_editOptsLine~sys", opts: opts};
        //==============================================
        serInx++;
        var cname = lyMap.get("pnLeft") + "~" + serInx;
        var opts = {};
        var setObj = {};
        setObj.name = "AI Deal";
        
        
        
        setObj.value = 1;
        setObj.setType = "buttonAction";
        setObj.titleWidth = 100;
        setObj.onColor = "#0f0";
        setObj.dataType = "flag";
        setObj.showName_f = 1;
        setObj.showDataType_f = 0;
        opts.setObj = setObj;
        
        opts.setObj = setObj;
        models[cname] = {name: "mdEditOptsLine~" + serInx, type: "Md_editOptsLine~sys", opts: opts};
        //==============================================
        
        
        
        serInx++;
        var cname = lyMap.get("pnLeft") + "~" + serInx;
        var opts = {};
        var setObj = {};
        setObj.name = "Force Liquidation";
        setObj.setType = "buttonAction";
        setObj.titleWidth = 0;
        opts.setObj = setObj;
        models[cname] = {name: "mdEditOptsLine~" + serInx, type: "Md_editOptsLine~sys", opts: opts};
        //==============================================
        serInx++;
        var cname = lyMap.get("pnLeft") + "~" + serInx;
        var opts = {};
        var setObj = {};
        setObj.name = "Force Buy";
        setObj.setType = "buttonAction";
        setObj.titleWidth = 0;
        opts.setObj = setObj;
        models[cname] = {name: "mdEditOptsLine~" + serInx, type: "Md_editOptsLine~sys", opts: opts};
        //==============================================
        serInx++;
        var cname = lyMap.get("pnLeft") + "~" + serInx;
        var opts = {};
        var setObj = {};
        setObj.name = "Force Sell";
        setObj.setType = "buttonAction";
        setObj.titleWidth = 0;
        opts.setObj = setObj;
        models[cname] = {name: "mdEditOptsLine~" + serInx, type: "Md_editOptsLine~sys", opts: opts};
        //==============================================
        serInx++;
        var cname = lyMap.get("pnLeft") + "~" + serInx;
        var opts = {};
        var setObj = {};
        setObj.name = "Now Price";
        setObj.value = 16588;
        setObj.setType = "viewer";
        setObj.dataType = "num";
        setObj.titleWidth = 0;
        setObj.preTextWidth = 200;
        opts.setObj = setObj;
        models[cname] = {name: "mdEditOptsLine~" + serInx, type: "Md_editOptsLine~sys", opts: opts};
        //==============================================
        serInx++;
        var cname = lyMap.get("pnLeft") + "~" + serInx;
        var opts = {};
        var setObj = {};
        setObj.name = "Deal Quantity";
        setObj.value = 230116;
        setObj.setType = "viewer";
        setObj.dataType = "num";
        setObj.titleWidth = 0;
        setObj.preTextWidth = 200;
        opts.setObj = setObj;
        models[cname] = {name: "mdEditOptsLine~" + serInx, type: "Md_editOptsLine~sys", opts: opts};
        //==============================================
        serInx++;
        var cname = lyMap.get("pnLeft") + "~" + serInx;
        var opts = {};
        var setObj = {};
        setObj.name = "Total Net of Day";
        setObj.value = 130245;
        setObj.setType = "viewer";
        setObj.dataType = "num";
        setObj.titleWidth = 0;
        setObj.preTextWidth = 200;
        opts.setObj = setObj;
        models[cname] = {name: "mdEditOptsLine~" + serInx, type: "Md_editOptsLine~sys", opts: opts};
        //==============================================
        serInx++;
        var cname = lyMap.get("pnLeft") + "~" + serInx;
        var opts = {};
        var setObj = {};
        setObj.name = "Average Net of Day";
        setObj.value = 1120;
        setObj.setType = "viewer";
        setObj.dataType = "float";
        setObj.titleWidth = 0;
        setObj.preTextWidth = 200;
        opts.setObj = setObj;
        models[cname] = {name: "mdEditOptsLine~" + serInx, type: "Md_editOptsLine~sys", opts: opts};
        //==============================================
        serInx++;
        var cname = lyMap.get("pnLeft") + "~" + serInx;
        var opts = {};
        var setObj = {};
        setObj.name = "Exchange Times";
        setObj.value = 17;
        setObj.setType = "viewer";
        setObj.dataType = "num";
        setObj.titleWidth = 0;
        setObj.preTextWidth = 200;
        opts.setObj = setObj;
        models[cname] = {name: "mdEditOptsLine~" + serInx, type: "Md_editOptsLine~sys", opts: opts};
        //==============================================
        serInx++;
        var cname = lyMap.get("pnLeft") + "~" + serInx;
        var opts = {};
        var setObj = {};
        setObj.name = "Account Base";
        setObj.value = 2000000;
        setObj.setType = "viewer";
        setObj.dataType = "num";
        setObj.titleWidth = 0;
        setObj.preTextWidth = 200;
        opts.setObj = setObj;
        models[cname] = {name: "mdEditOptsLine~" + serInx, type: "Md_editOptsLine~sys", opts: opts};
        //==============================================
        serInx++;
        var cname = lyMap.get("pnLeft") + "~" + serInx;
        var opts = {};
        var setObj = {};
        setObj.name = "Account Rest";
        setObj.value = 100000;
        setObj.setType = "viewer";
        setObj.dataType = "num";
        setObj.titleWidth = 0;
        setObj.preTextWidth = 200;
        opts.setObj = setObj;
        models[cname] = {name: "mdEditOptsLine~" + serInx, type: "Md_editOptsLine~sys", opts: opts};
        //==============================================
        serInx++;
        var cname = lyMap.get("pnLeft") + "~" + serInx;
        var opts = {};
        var setObj = {};
        setObj.name = "Account Margin";
        setObj.value = 4561258;
        setObj.setType = "viewer";
        setObj.dataType = "num";
        setObj.titleWidth = 0;
        setObj.preTextWidth = 200;
        opts.setObj = setObj;
        models[cname] = {name: "mdEditOptsLine~" + serInx, type: "Md_editOptsLine~sys", opts: opts};
        //==============================================
        
        
        serInx++;
        var cname = lyMap.get("pnLeft") + "~" + serInx;
        var opts = {};
        var setObj = {};
        setObj.name = "Max Deal Action Lot";
        setObj.setType = "inputNumber";
        setObj.titleWidth = 200;
        setObj.value = 9999;
        setObj.dataType = "num";
        opts.setObj = setObj;
        models[cname] = {name: "mdEditOptsLine~" + serInx, type: "Md_editOptsLine~sys", opts: opts};
        //==============================================
        serInx++;
        var cname = lyMap.get("pnLeft") + "~" + serInx;
        var opts = {};
        var setObj = {};
        setObj.name = "Limit Loss Point";
        setObj.setType = "inputNumber";
        setObj.titleWidth = 200;
        setObj.value = 100;
        setObj.dataType = "num";
        opts.setObj = setObj;
        models[cname] = {name: "mdEditOptsLine~" + serInx, type: "Md_editOptsLine~sys", opts: opts};
        //==============================================
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        


        //======================================================================
        var cname = lyMap.get("bodyUp") + "~" + 1;
        var opts = {};
        comps[cname] = {name: "plot", type: "plot~sys", opts: opts};
        //======================================================================
        var cname = lyMap.get("body") + "~" + 1;
        var opts = {};
        opts.menuKexts = {};
        var head = "rootMenu";
        var kexts = [];
        kexts.push(new Kext("btDown#0", "Advance Setting"));
        kexts.push(new Kext("btDown#1", "2345"));
        kexts.push(new Kext("btDown#2", "3456"));

        opts.menuKexts[head] = kexts;
        opts.fontSize = 0;

        opts.actionFunc = function (iobj) {
            console.log(iobj);
            var inx=iobj.id.split('#')[1];
            switch(inx){
                case "0":
                    
                    var setBoxActionFunc = function (iobj) {
                        console.log(iobj);
                        /*
                        var keycodeObj = op.keycodeObjs[parseInt(strA[1])];
                        keycodeObj.type = iobj.value.type;
                        keycodeObj.pressCode = iobj.value.pressCode;
                        keycodeObj.releaseCode = iobj.value.releaseCode;
                        //keycodeObj.continueCode = iobj.value.continueCode;
                        keycodeObj.continueCode = "";
                        keycodeObj.codePage0 = iobj.value.codePage0;
                        keycodeObj.codePage1 = iobj.value.codePage1;
                        keycodeObj.codePage2 = iobj.value.codePage2;
                        */
                    };
                    var setObjs = [];
                    var setObj = sys.setOptsSetFix("Mtx Operation Server Ip", "str");
                    setObj.value = "192.168.23.45";
                    setObj.id = "mtxOperationIp";
                    setObj.titleWidth = 400;
                    setObjs.push(setObj);
                    
                    var setObj = sys.setOptsSetFix("Mtx Security Server Ip", "str");
                    setObj.value = "192.168.23.45";
                    setObj.id = "mtxSecurityIp";
                    setObj.titleWidth = 400;
                    setObjs.push(setObj);
                    
                    var setObj = sys.setOptsSetFix("Tx Operation Server Ip", "str");
                    setObj.value = "192.168.23.45";
                    setObj.id = "txOperationIp";
                    setObj.titleWidth = 400;
                    setObjs.push(setObj);
                    
                    var setObj = sys.setOptsSetFix("tx Security Server Ip", "str");
                    setObj.value = "192.168.23.45";
                    setObj.id = "txSecurityIp";
                    setObj.titleWidth = 400;
                    setObjs.push(setObj);


                    mac.setBox("Advance Setting", setObjs, 1000, 10, setBoxActionFunc);
                    
                    
                    
                    
                    break
                
            }
        };
        models[cname] = {name: "buttons", type: "Md_buttons", opts: opts};
        //======================================================================
        var cname = lyMap.get("body") + "~" + 2;
        mac.setFootBar(layouts, lyMap, comps, cname);
    }
}
//===========================================



