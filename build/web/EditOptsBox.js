/* global gr, sys, Model, Component, KvLib, mac, us */

//===========================================
class Md_editOptsBox {
    initOpts(md) {
        var obj = {};
        //obj.modelSet = "Model";
        //obj.templateSet = "Md_userModel";
        //obj.typeSet = "sys";

        obj.modelSet = "Component";
        obj.templateSet = "scope";
        obj.typeSet = "sys";

        //obj.modelSet = "Component";
        //obj.templateSet = "grid";
        //obj.typeSet = "sys";

        //obj.modelSet = "Model";
        //obj.templateSet = "Md_kextEditor";
        //obj.typeSet = "sys";

        //obj.modelSet = "Component";
        //obj.templateSet = "button";
        //obj.typeSet = "sys";

        obj.kvObjOpts = {};
        //==============================
        obj.viewSetPanel_f = 1;
        obj.viewRightPanel_f = 1;
        obj.showFrame_f = 0;
        obj.insertObj_f = 0;
        obj.editObj_f = 0;
        obj.deleteObj_f = 0;
        obj.editLayout_f = 0;
        obj.insertLayout_f = 0;
        obj.removeLayout_f = 0;
        obj.editLy_f = 0;
        obj.moveWhrLayout_f = 0;
        obj.moveLayout_f = 0;
        obj.resizeWhrLayout_f = 0;
        obj.resizeLayout_f = 0;
        obj.moveFront_f = 0;
        obj.moveRear_f = 0;
        obj.disableSet_f = 0;
        return obj;
    }

    setIdObjPrg() {
        var self = this;
        var md = self.md;
        var op = md.opts;
        var setIdObj = {};
        setIdObj["showFrame"] = op.showFrame_f;
        setIdObj["insertObj"] = op.insertObj_f;
        setIdObj["editObj"] = op.editObj_f;
        setIdObj["deleteObj"] = op.deleteObj_f;
        setIdObj["editLayout"] = op.editLayout_f;
        setIdObj["insertLayout"] = op.insertLayout_f;
        setIdObj["removeLayout"] = op.removeLayout_f;
        setIdObj["editLy"] = op.editLy_f;
        setIdObj["moveWhrLayout"] = op.moveWhrLayout_f;
        setIdObj["moveLayout"] = op.moveLayout_f;
        setIdObj["resizeWhrLayout"] = op.resizeWhrLayout_f;
        setIdObj["resizeLayout"] = op.resizeLayout_f;
        setIdObj["moveFront"] = op.moveFront_f;
        setIdObj["moveRear"] = op.moveRear_f;
        return setIdObj;
    }

    saveUndoPrg() {
        var self = this;
        var md = self.md;
        var op = md.opts;
        var nowUndoObj = {};
        nowUndoObj.modelSet = op.modelSet;
        nowUndoObj.templateSet = op.templateSet;
        nowUndoObj.typeSet = op.typeSet;
        nowUndoObj.kvObjOpts = op.kvObjOpts;
        var nowJsStr = JSON.stringify(nowUndoObj);
        var save_f = 0;
        if (gr.editUndoEnd < 0) {
            save_f = 1;
        } else {
            var backJsStr = gr.editUndoStack[gr.editUndoInx];
            if (backJsStr !== nowJsStr)
                save_f = 1;
        }
        if (save_f) {
            gr.editUndoEnd++;
            if (gr.editUndoEnd >= gr.editUndoMax)
                gr.editUndoStack.splice(0, 1);
            gr.editUndoStack.push(nowJsStr);
            gr.editUndoEnd = gr.editUndoStack.length - 1;
            gr.editUndoInx = gr.editUndoEnd;
        }
    }

    undoRedoPrg(redo_f) {
        var self = this;
        var md = self.md;
        var op = md.opts;
        if (redo_f) {
            if (gr.editUndoInx >= gr.editUndoEnd)
                return 0;
            gr.editUndoInx++;

        } else {
            if (gr.editUndoInx <= 0)
                return 0;
            gr.editUndoInx--;
        }
        var backJsStr = gr.editUndoStack[gr.editUndoInx];
        var undoObj = JSON.parse(backJsStr);
        op.modelSet = undoObj.modelSet;
        op.templateSet = undoObj.templateSet;
        op.typeSet = undoObj.typeSet;
        op.kvObjOpts = undoObj.kvObjOpts;
        gr.status1 = "Undo: " + gr.editUndoInx + "/" + gr.editUndoEnd;
        return 1;
    }

    chkWatch() {
        var self = this;
        if (self.md.watch["optsChanged"]) {
            if (self.md.watch["xxselectInx"]) {
                delete self.md.watch["selectInx"];
                /*  action */
                return;
            }
            self.md.reCreate();
            self.setScroll(this.md.opts.topScroll);
            self.md.watch = {};
        }
    }

    actionFunc(obj) {
    }

    clearFlag() {
        var op = this.md.opts;
        op.insertObj_f = 0;
        op.editObj_f = 0;
        op.deleteObj_f = 0;
        op.editLayout_f = 0;
        op.insertLayout_f = 0;
        op.removeLayout_f = 0;
        op.editLy_f = 0;
        op.moveWhrLayout_f = 0;
        op.moveLayout_f = 0;
        op.resizeWhrLayout_f = 0;
        op.resizeLayout_f = 0;
        op.moveFront_f = 0;
        op.moveRear_f = 0;
        gr.message = "";
        gr.status1 = "";
        gr.status2 = "";


    }

    preCreate() {
        var self = this;
        var md = self.md;
        var op = md.opts;
        console.log("fsdfsdf")
        if (gr.editUndoEnd < 0) {
            return;
        }
        var backJsStr = gr.editUndoStack[gr.editUndoInx];
        var undoObj = JSON.parse(backJsStr);
        op.modelSet = undoObj.modelSet;
        op.templateSet = undoObj.templateSet;
        op.typeSet = undoObj.typeSet;
        op.kvObjOpts = undoObj.kvObjOpts;

        return;



    }
    afterCreate() {
        var self = this;
        var md = self.md;
        var op = md.opts;
        if (gr.editUndoEnd < 0) {
            self.saveUndoPrg();
            return;
        }
        return;

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
        //===================================
        var cname = "c";
        var opts = {};
        opts.xc = 3;
        opts.yc = 1;
        opts.iwO = {};
        opts.iwO.c0 = 9999;
        if (op.viewSetPanel_f)
            opts.iwO.c1 = 500;
        else
            opts.iwO.c1 = 0;
        if (op.viewRightPanel_f)
            opts.iwO.c2 = 40;
        else
            opts.iwO.c2 = 0;


        layouts[cname] = {name: cname, type: "base", opts: opts};
        lyMap.set("body", cname);
        //===
        var cname = "c~0";
        var opts = {};
        opts.xc = 1;
        opts.yc = 2;
        opts.ihO = {};
        opts.ihO.c0 = 9999;
        opts.ihO.c1 = 0;
        layouts[cname] = {name: cname, type: "base", opts: opts};
        lyMap.set("bodyLeft", cname);
        //====================================================================================
        var cname = lyMap.get("body") + "~" + 2;
        var opts = {};
        opts.menuKexts = {};
        //====================================================================================
        var setMenuFunc = function () {
            var kexts = [];
            if (op.viewSetPanel_f)
                kexts.push(new Kext("viewSetPanel", '<i class="gf">&#xe089;</i>', "", {enHint: "hide set panel"}));
            else
                kexts.push(new Kext("viewSetPanel", '<i class="gf">&#xe5c4;</i>', "", {enHint: "show set panel"}));

            kexts.push(new Kext("reDraw", '<i class="gf">&#xe243;</i>', "", {enHint: "repaint"}));
            kexts.push(new Kext("showFrame", '<i class="gf">&#xe3c2;</i>', "", {enHint: "show frame"}));



            if (op.modelSet === "Model" && op.templateSet === "Md_layout") {
                kexts.push(new Kext("editLayout", '<i class="gf">&#xe06b;</i>', "", {enHint: "edit layout"}));
            }
            if (op.modelSet === "Model" && op.templateSet === "Md_userModel" && op.typeSet !== "") {

                kexts.push(new Kext("undo", '<i class="gf">&#xe166;</i>', "", {enHint: "undo"}));
                kexts.push(new Kext("redo", '<i class="gf">&#xe15a;</i>', "", {enHint: "redo"}));
                kexts.push(new Kext("editObject", 'kvd:sepLineH', ""));


                kexts.push(new Kext("insertObj", '<i class="gf">&#xe146;</i>', "", {enHint: "insert object"}));
                kexts.push(new Kext("editObj", '<i class="gf">&#xe9a2;</i>', "", {enHint: "edit object"}));
                kexts.push(new Kext("deleteObj", '<i class="gf">&#xe92e;</i>', "", {enHint: "delete object"}));
                kexts.push(new Kext("editObject", 'kvd:sepLineH', ""));
                kexts.push(new Kext("editLayout", '<i class="gf">&#xe06b;</i>', "", {enHint: "edit layout"}));

                if (op.editLayout_f) {
                    kexts.push(new Kext("insertLayout", '<i class="gf">&#xe39d;</i>', "", {enHint: "insert layout"}));
                    kexts.push(new Kext("removeLayout", '<i class="gf">&#xe872;</i>', "", {enHint: "remove layout"}));
                    kexts.push(new Kext("editLy", '<i class="gf">&#xe3c9;</i>', "", {enHint: "edit layout"}));
                    kexts.push(new Kext("moveWhrLayout", '<i class="gf">&#xe89f;</i>', "", {enHint: "move propotion"}));
                    kexts.push(new Kext("moveLayout", '<i class="gf">&#xe55f;</i>', "", {enHint: "move absolute"}));
                    kexts.push(new Kext("resizeWhrLayout", '<i class="gf">&#xe94f;</i>', "", {enHint: "resize propotion"}));
                    kexts.push(new Kext("resizeLayout", '<i class="gf">&#xe85b;</i>', "", {enHint: "resize absolute"}));
                    kexts.push(new Kext("moveFront", '<i class="gf">&#xe883;</i>', "", {enHint: "move to front"}));
                    kexts.push(new Kext("moveRear", '<i class="gf">&#xe882;</i>', "", {enHint: "move to rear"}));
                }
            }
            return kexts;
        };
        //====================================================================================
        var menuFunc = function (iobj) {
            var kvObj = iobj.kvObj;
            var itemId = kvObj.opts.itemId;
            //=================
            var deleteLayoutFunc = function (event) {
                console.log(event);
                var elem = event.target;
                var userModel = elem.kvd.model;
                var rectName = elem.kvd.lyRect.name;
                if (rectName === "c~0")
                    return;
                var strA = rectName.split("~");
                var fcname = "";
                for (var i = 0; i < strA.length - 1; i++) {
                    if (i !== 0)
                        fcname += "~";
                    fcname += strA[i];
                }
                var objArr = [];
                for (var i = 0; i < userModel.opts.kvObjs.length; i++) {
                    kvObj = userModel.opts.kvObjs[i];
                    if (!kvObj.cname.includes(fcname)) {
                        objArr.push(kvObj);
                    }
                }
                userModel.opts.kvObjs = objArr;
                for (var key in userModel.opts.userRects) {
                    if (key.includes(rectName))
                        delete userModel.opts.userRects[key];
                }
                var optsObj = md.modelRefs["optsPanel"];
                optsObj.opts.editOpts.kvObjs = userModel.opts.kvObjs;
                md.opts.kvObjOpts = optsObj.opts.editOpts;
                md = md.reCreate();
                self.saveUndoPrg();
            };
            //=================
            var deleteFunc = function (event) {
                console.log(event);
                var elem = event.target;
                var userModel = elem.kvd.model;
                var rectName = elem.kvd.lyRect.name;
                for (var i = 0; i < userModel.opts.kvObjs.length; i++) {
                    kvObj = userModel.opts.kvObjs[i];
                    if (kvObj.cname === rectName) {
                        userModel.opts.kvObjs.splice(i, 1);
                        break;
                    }
                }
                var optsObj = md.modelRefs["optsPanel"];
                optsObj.opts.editOpts.kvObjs = userModel.opts.kvObjs;
                md.opts.kvObjOpts = optsObj.opts.editOpts;
                md.mdClass.clearFlag();
                md.paras = {};
                md = md.reCreate();
                self.saveUndoPrg();
            };
            //=================
            var editInsFunc = function (event) {
                console.log(event);
                var elem = event.target;
                var userModel = elem.kvd.model;
                var rectName = elem.kvd.lyRect.name;
                if (op.editLy_f) {
                    var strA = rectName.split("~");
                    var rectName = "";
                    for (var i = 0; i < strA.length - 1; i++) {
                        if (i !== 0)
                            rectName += "~";
                        rectName += strA[i];
                    }
                }

                var newViewObjOpts = {};//newViewObjOpts
                newViewObjOpts.modelSet = "Model";
                newViewObjOpts.templateSet = "Md_editOptsBox";
                newViewObjOpts.typeSet = "sys";
                newViewObjOpts.iw = 0;
                newViewObjOpts.ih = 0;
                newViewObjOpts.borderWidth = 2;
                newViewObjOpts.buttons = ["ESC", "OK"];
                newViewObjOpts.kvObjOpts = {};


                if (op.editObj_f || op.insertObj_f) {
                    if (op.editObj_f) {
                        for (var i = 0; i < userModel.opts.kvObjs.length; i++) {
                            kvObj = userModel.opts.kvObjs[i];
                            if (kvObj.cname === rectName) {
                                gr.lastEditModeSet = kvObj.modelSet;
                                gr.lastEditTemplateSet = kvObj.templateSet;
                                gr.lastEditTypeSet = kvObj.typeSet;
                                newViewObjOpts.kvObjOpts.kvObjOpts = kvObj.opts;
                                break;
                            }
                        }
                    }
                    if (!gr.lastEditModeSet)
                        gr.lastEditModeSet = "Component";
                    if (!gr.lastEditTemplateSet)
                        gr.lastEditTemplateSet = "button";
                    if (!gr.lastEditTypeSet)
                        gr.lastEditTypeSet = "sys";
                    newViewObjOpts.kvObjOpts.modelSet = gr.lastEditModeSet;
                    newViewObjOpts.kvObjOpts.templateSet = gr.lastEditTemplateSet;
                    newViewObjOpts.kvObjOpts.typeSet = gr.lastEditTypeSet;
                }

                if (op.editLy_f || op.insertLayout_f) {
                    for (var i = 0; i < userModel.opts.kvObjs.length; i++) {
                        kvObj = userModel.opts.kvObjs[i];
                        if (kvObj.cname === rectName) {
                            newViewObjOpts.kvObjOpts.kvObjOpts = kvObj.opts;
                            break;
                        }
                    }
                    newViewObjOpts.kvObjOpts.modelSet = "Model";
                    newViewObjOpts.kvObjOpts.templateSet = "Md_layout";
                    newViewObjOpts.kvObjOpts.typeSet = "sys";
                    newViewObjOpts.kvObjOpts.editLayout_f = 1;
                    newViewObjOpts.kvObjOpts.disableSet_f = 1;
                }

                newViewObjOpts.kvObjOpts.viewRightPanel_f = 0;
                var mod = new Model("", "Md_viewKvObj~sys", newViewObjOpts, {});
                var popOpts = {};
                popOpts.kvObj = mod;
                popOpts.w = -200;
                popOpts.h = -200;
                var viewKvObj = sys.popOnModel(popOpts);
                var editBox = viewKvObj.modelRefs["kvObj"];
                var innerViewKvObj = editBox.modelRefs["viewKvObj"];


                viewKvObj.opts.actionFunc = function (iobj) {
                    console.log(iobj);
                    if (iobj.kvObj.opts.innerText !== "OK")
                        return;

                    var editBox = viewKvObj.modelRefs["kvObj"];
                    var optsPanel = editBox.modelRefs["optsPanel"];
                    var editOpts = optsPanel.opts.editOpts;

                    var obj = {};
                    obj.cname = rectName;
                    if (op.editLy_f || op.insertLayout_f) {
                        obj.modelSet = "Layout";
                        obj.templateSet = "base";
                        obj.typeSet = "sys";
                        var baseOpts = Model.getOpts("Md_layout", "base");
                    } else {
                        obj.modelSet = optsPanel.opts.modelSet;
                        obj.templateSet = optsPanel.opts.templateSet;
                        obj.typeSet = optsPanel.opts.typeSet;
                        gr.lastEditModeSet = obj.modelSet;
                        gr.lastEditTemplateSet = obj.templateSet;
                        gr.lastEditTypeSet = obj.typeSet;
                        if (obj.modelSet === "Component")
                            var baseOpts = Component.getOpts(obj.templateSet, obj.typeSet);
                        if (obj.modelSet === "Model")
                            var baseOpts = Model.getOpts(obj.templateSet, obj.typeSet);
                    }

                    var newOpts = editOpts;
                    var outOpts = KvLib.deepCompareObject(baseOpts, newOpts);
                    obj.opts = outOpts;


                    if (op.editObj_f || op.editLy_f) {
                        for (var i = 0; i < userModel.opts.kvObjs.length; i++) {
                            kvObj = userModel.opts.kvObjs[i];
                            if (kvObj.cname === rectName) {
                                userModel.opts.kvObjs[i] = obj;
                                break;
                            }
                        }
                    }
                    if (op.insertObj_f || op.insertLayout_f)
                        userModel.opts.kvObjs.push(obj);
                    var optsObj = md.modelRefs["optsPanel"];
                    optsObj.opts.editOpts.kvObjs = userModel.opts.kvObjs;
                    md.opts.kvObjOpts = optsObj.opts.editOpts;
                    if (op.editLy_f || op.insertLayout_f) {
                        md = md.reCreate();
                        self.saveUndoPrg();
                        return;
                    }
                    md.opts.insertObj_f = 0;
                    md.opts.editObj_f = 0;
                    md.paras = {};
                    md = md.reCreate();
                    self.saveUndoPrg();
                    return;
                };

            };
            //=================
            var chgLayoutFunc = function (userRects, rectName, paras) {
                //var paras = md.paras;
                if (paras.act === "moveWhrLayout") {
                    var xx = userRects[rectName].x;
                    var yy = userRects[rectName].y;
                    var ww = userRects[rectName].w;
                    var hh = userRects[rectName].h;
                    var fw = userRects[rectName].fw;
                    var fh = userRects[rectName].fh;
                    userRects[rectName].x = "" + (xx / fw).toFixed(3) + "rw";
                    userRects[rectName].y = "" + (yy / fh).toFixed(3) + "rh";
                    userRects[rectName].w = "" + (ww / fw).toFixed(3) + "rw";
                    userRects[rectName].h = "" + (hh / fh).toFixed(3) + "rh";
                }
                if (paras.act === "resizeWhrLayout") {
                    var xx = userRects[rectName].x;
                    var yy = userRects[rectName].y;
                    var ww = userRects[rectName].w;
                    var hh = userRects[rectName].h;
                    var fw = userRects[rectName].fw;
                    var fh = userRects[rectName].fh;
                    userRects[rectName].x = "" + (xx / fw).toFixed(3) + "rw";
                    userRects[rectName].y = "" + (yy / fh).toFixed(3) + "rh";
                    userRects[rectName].w = "" + (ww / fw).toFixed(3) + "rw";
                    userRects[rectName].h = "" + (hh / fh).toFixed(3) + "rh";
                }
                var zz = userRects[rectName].z;
                //var viewObj = md.modelRefs["viewKvObj"];
                var optsObj = md.modelRefs["optsPanel"];
                //viewObj.opts.kvObjOpts.userRects = userRects;
                optsObj.opts.editOpts.userRects = userRects;
                if (paras.act === "moveRear") {
                    var kvObjs = optsObj.opts.editOpts.kvObjs;
                    for (var i = 0; i < kvObjs.length; i++) {
                        kvObj = kvObjs[i];
                        var cname = kvObj.cname;
                        if (cname.includes(rectName)) {
                            kvObj.opts.zIndex = zz + 1;
                        }
                    }

                } else {
                    var kvObjs = optsObj.opts.editOpts.kvObjs;
                    for (var i = 0; i < kvObjs.length; i++) {
                        kvObj = kvObjs[i];
                        var cname = kvObj.cname;
                        if (cname.includes(rectName)) {
                            kvObj.opts.zIndex = zz + 1;
                        }
                    }

                }
                md.opts.kvObjOpts = optsObj.opts.editOpts;
                var viewKvObj = md.modelRefs["viewKvObj"];
                viewKvObj.opts.kvObjOpts = op.kvObjOpts;
                viewKvObj.reCreate();
                self.saveUndoPrg();
                return;
            };
            //=================
            if (itemId === "viewSetPanel") {
                op.viewSetPanel_f ^= 1;
                var funcMenu = md.modelRefs["funcMenu"];
                funcMenu.opts.menuKexts["rootMenu"] = setMenuFunc();
                var viewKvObj = md.modelRefs["viewKvObj"];
                var viewKvObjOpts = JSON.stringify(viewKvObj.opts);
                md.paras = {};
                md = md.reCreate();
                var viewKvObj = md.modelRefs["viewKvObj"];
                viewKvObj.opts = JSON.parse(viewKvObjOpts);
                viewKvObj.reCreate();
                return;
            }
            if (itemId === "showFrame") {
                op.showFrame_f ^= 1;
                var funcMenu = md.modelRefs["funcMenu"];
                funcMenu.opts.setIdObj = self.setIdObjPrg();
                funcMenu.reCreate();
                var viewKvObj = md.modelRefs["viewKvObj"];
                viewKvObj.opts.showFrame_f = op.showFrame_f;
                viewKvObj.reCreate();
                return;
            }
            if (itemId === "reDraw") {
                var viewKvObj = md.modelRefs["viewKvObj"];
                viewKvObj.reCreate();
                return;
            }
            if (itemId === "undo") {
                self.clearFlag();
                var retf = self.undoRedoPrg();
                if (!retf)
                    return;
                md.reCreate();
                return;

                var funcMenu = md.modelRefs["funcMenu"];
                funcMenu.opts.setIdObj = self.setIdObjPrg();
                funcMenu.reCreate();
                var viewKvObj = md.modelRefs["viewKvObj"];
                viewKvObj.opts.kvObjOpts = op.kvObjOpts;
                viewKvObj.reCreate();
                return;
            }
            if (itemId === "redo") {
                self.clearFlag();
                var retf = self.undoRedoPrg(1);
                if (!retf)
                    return;
                md.reCreate();
                return;



                var funcMenu = md.modelRefs["funcMenu"];
                funcMenu.opts.setIdObj = self.setIdObjPrg();
                funcMenu.reCreate();
                var viewKvObj = md.modelRefs["viewKvObj"];
                viewKvObj.reCreate();
                return;
            }

            if (itemId === "insertObj") {
                md.paras = {};
                var bak = op.insertObj_f ^= 1;
                self.clearFlag();
                op.insertObj_f = bak;
                if (op.insertObj_f) {
                    md.paras.mode = "editObj";
                    md.paras.act = "insertObj";
                    md.paras.actionFunc = editInsFunc;
                }
                md = md.reCreate();
                return;
            }

            if (itemId === "editObj") {
                md.paras = {};
                var bak = op.editObj_f ^= 1;
                self.clearFlag();
                op.editObj_f = bak;
                if (op.editObj_f) {
                    md.paras.mode = "editObj";
                    md.paras.act = "editObj";
                    md.paras.actionFunc = editInsFunc;
                }
                md = md.reCreate();
                return;
            }




            if (itemId === "deleteObj") {
                md.paras = {};
                var bak = op.deleteObj_f ^= 1;
                self.clearFlag();
                op.deleteObj_f = bak;
                var funcMenu = md.modelRefs["funcMenu"];
                funcMenu.opts.setIdObj = self.setIdObjPrg();
                funcMenu.reCreate();
                var viewKvObj = md.modelRefs["viewKvObj"];
                viewKvObj.paras = {};
                if (op.deleteObj_f) {
                    viewKvObj.paras.mode = "editObj";
                    viewKvObj.paras.act = "deleteObj";
                    viewKvObj.paras.actionFunc = deleteFunc;
                }
                viewKvObj = viewKvObj.reCreate();

                return;


                if (op.deleteObj_f) {
                    md.paras.mode = "editObj";
                    md.paras.act = "deleteObj";
                    md.paras.actionFunc = deleteFunc;
                }
                md = md.reCreate();
                return;
            }
            if (itemId === "editLayout") {
                var bak = op.editLayout_f ^= 1;
                op.insertObj_f = 0;
                op.deleteObj_f = 0;
                op.editObj_f = 0;
                op.editLayout_f = bak;
                var funcMenu = md.modelRefs["funcMenu"];
                funcMenu.opts.setIdObj = self.setIdObjPrg();
                funcMenu.opts.menuKexts["rootMenu"] = setMenuFunc();
                funcMenu.reCreate();
                var viewKvObj = md.modelRefs["viewKvObj"];
                viewKvObj.paras = {};
                if (op.editLayout_f) {
                    viewKvObj.paras.mode = "edit";
                }
                viewKvObj.reCreate();
                return;
            }
            if (op.editLayout_f) {
                var bak = op[itemId + "_f"] ^= 1;
                self.clearFlag();
                op[itemId + "_f"] = bak;
                op.editLayout_f = 1;
                var funcMenu = md.modelRefs["funcMenu"];
                funcMenu.opts.setIdObj = self.setIdObjPrg();
                funcMenu.opts.menuKexts["rootMenu"] = setMenuFunc();
                funcMenu.reCreate();

                var viewKvObj = md.modelRefs["viewKvObj"];
                viewKvObj.paras = {};
                viewKvObj.paras.mode = "edit";
                if (bak) {
                    viewKvObj.paras.act = itemId;
                    if (itemId === "removeLayout")
                        viewKvObj.paras.actionFunc = deleteLayoutFunc;
                    if (itemId === "insertLayout")
                        viewKvObj.paras.actionFunc = editInsFunc;
                    if (itemId === "editLy")
                        viewKvObj.paras.actionFunc = editInsFunc;
                    if (itemId === "moveWhrLayout")
                        viewKvObj.paras.actionFunc = chgLayoutFunc;
                    if (itemId === "moveLayout")
                        viewKvObj.paras.actionFunc = chgLayoutFunc;
                    if (itemId === "resizeWhrLayout")
                        viewKvObj.paras.actionFunc = chgLayoutFunc;
                    if (itemId === "resizeLayout")
                        viewKvObj.paras.actionFunc = chgLayoutFunc;
                    if (itemId === "moveFront")
                        viewKvObj.paras.actionFunc = chgLayoutFunc;
                    if (itemId === "moveRear")
                        viewKvObj.paras.actionFunc = chgLayoutFunc;
                }
                viewKvObj = viewKvObj.reCreate();
                return;
            }
        };
        opts.menuKexts["rootMenu"] = setMenuFunc();
        opts.buttonType = "menuButton";
        opts.vhMode = "vertical";
        opts.setIdColor = "#ccf";
        opts.setIdObj = self.setIdObjPrg();
        opts.actionFunc = menuFunc;
        models[cname] = {name: "funcMenu", type: "Md_menu", opts: opts};
        //====================================================================================

        var cname = lyMap.get("body") + "~" + 1;
        var opts = {};
        opts.modelSet = op.modelSet;
        opts.templateSet = op.templateSet;
        opts.typeSet = op.typeSet;
        if (op.modelSet === "Model") {
            var editOpts = Model.getOpts(opts.templateSet, opts.typeSet);
        }
        if (op.modelSet === "Component") {
            var editOpts = Component.getOpts(opts.templateSet, opts.typeSet);
        }
        KvLib.deepCoverObject(editOpts, op.kvObjOpts);
        opts.editOpts = editOpts;
        opts.disableSet_f = op.disableSet_f;
        opts.actionFunc = function (iobj) {
            var optsPanel = iobj.kvObj;
            op.modelSet = optsPanel.opts.modelSet;
            op.templateSet = optsPanel.opts.templateSet;
            op.typeSet = optsPanel.opts.typeSet;
            if (iobj.act === "valueChange") {
                op.kvObjOpts = optsPanel.opts.editOpts;
                var viewKvObj = md.modelRefs["viewKvObj"];
                viewKvObj.opts.modelSet = op.modelSet;
                viewKvObj.opts.temmplateSet = op.templateSet;
                viewKvObj.opts.typeSet = op.typeSet;
                viewKvObj.opts.kvObjOpts = op.kvObjOpts;
                viewKvObj.opts.iw = op.kvObjOpts.propertyWidth;
                viewKvObj.opts.ih = op.kvObjOpts.propertyHeight;
                viewKvObj.reCreate();
            }
            if (iobj.act === "setChange") {
                gr.editUndoInx = -1;
                gr.editUndoEnd = -1;
                gr.editUndoStack = [];
                op.kvObjOpts = {};
                self.clearFlag();
                md = md.reCreate();
            }
        };
        models[cname] = {name: "optsPanel", type: "Md_optsPanel", opts: opts};
        //==========================================================================

        if (op.modelSet && op.templateSet && op.typeSet) {
            var cname = lyMap.get("bodyLeft") + "~" + 0;
            var opts = {};
            opts.modelSet = op.modelSet;
            opts.templateSet = op.templateSet;
            opts.typeSet = op.typeSet;
            opts.iw = editOpts.propertyWidth;
            opts.ih = editOpts.propertyHeight;
            opts.showFrame_f = op.showFrame_f;
            opts.kvObjOpts = editOpts;
            opts.zIndex = -1;
            models[cname] = {name: "viewKvObj", type: "Md_viewKvObj", opts: opts};
        }
        //======================================================================
    }
}
//===========================================
class Md_optsPanel {
    constructor() {

    }
    initOpts(md) {
        var self = this;
        var obj = {};
        obj.modelSet = "Component";
        obj.templateSet = "button~sys";
        obj.typeSet = "";
        obj.disableSet_f = 0;
        obj.editOpts = {};
        obj.actionFunc = null;
        return obj;
    }

    chkWatch() {
        var self = this;
        if (self.md.watch["optsChanged"]) {
            if (self.md.watch["xxselectInx"]) {
                delete self.md.watch["selectInx"];
                /*  action */
                return;
            }
            self.md.reCreate();
            self.setScroll(this.md.opts.topScroll);
            self.md.watch = {};
        }

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
        //===================================
        var actionFunc = function (obj) {
            console.log(obj);
            var kvObj = obj.kvObj;
            var name = kvObj.name;
            var strA = name.split("~");
            var clrViewKvObj = function () {
                var editOptsBox = md.fatherMd;
                var viewKvObj = editOptsBox.modelRefs["viewKvObj"];
                viewKvObj.opts.modelSet = "Component";
                viewKvObj.opts.templateSet = "plate";
                viewKvObj.opts.typeSet = "none";
                viewKvObj.opts.kvObjOpts = {};
                viewKvObj.opts.iw = 0;
                viewKvObj.opts.ih = 0;
                viewKvObj.reCreate();
            };


            if (obj.act === "itemClick") {
                var itemId = kvObj.opts.itemId;

                if (itemId === "menuSaveAs") {
                    if (!op.typeSet || !op.templateSet)
                        return;
                    var func = function (iobj) {
                        console.log(iobj);
                        var typeEditLineObj = md.modelRefs["typeButton"];
                        var setObj = typeEditLineObj.opts.setObj;
                        var enums = setObj.enum;
                        var setObj = iobj.kvObj.opts.setObjs[0];
                        for (var ii in enums) {
                            if (setObj.value === enums[ii]) {
                                sys.mesBox("cr~Error", 500, "This Name has existed !!!");
                                return;
                            }
                        }
                        enums.push(setObj.value);
                        if (op.modelSet === "Component")
                            var baseOpts = Component.getOpts(op.templateSet, "base");
                        if (op.modelSet === "Model")
                            var baseOpts = Model.getOpts(op.templateSet, "base");
                        var newOpts = md.opts.editOpts;
                        var outOpts = KvLib.deepCompareObject(baseOpts, newOpts);
                        var optsSet = us.set.optsSet;
                        var userSetName = op.modelSet + "~" + op.templateSet;
                        if (!optsSet[userSetName])
                            optsSet[userSetName] = {};
                        optsSet[userSetName][setObj.value] = outOpts;
                        op.typeSet = setObj.value;
                        md.reCreate();
                        Test.server_saveStringToFile("response ok", "", JSON.stringify(us.set), "user-" + gr.userName + "/userSet.json");

                    };
                    var sobj = sys.getOptsSet("text", "");
                    mac.inputLineBox("Input Type Name", sobj, 1000, func);
                    return;
                }

                if (itemId === "menuEdit") {
                    if (!op.typeSet || !op.templateSet)
                        return;
                    var func = function (iobj) {

                    };
                    var optsSet = us.set.optsSet;
                    var userSetName = op.modelSet + "~" + op.templateSet;
                    if (optsSet[userSetName]) {
                        var userKeys = Object.keys(optsSet[userSetName]);
                    }
                    var values = [];
                    for (key in userKeys) {
                        values.push(userKeys[key]);
                    }
                    var opts = {};
                    opts.arrayName = "Set Type";
                    opts.values = values;
                    var setObj = sys.getOptsSet("text", "");
                    setObj.readOnly_f = 1;
                    setObj.titleWidth = 0;
                    setObj.showName_f = 0;
                    setObj.showDataType_f = 0;
                    setObj.setType = setObj.setType.split("~")[0];
                    setObj.titleWidth = 0;


                    opts.setObj = setObj;
                    opts.selectAble_f = 1;
                    opts.menuNew_f = 0;
                    opts.readOnly_f = 1;




                    opts.actionFunc = function (iobj) {
                        console.log(iobj);
                        var newSet = {};
                        for (var i = 0; i < iobj.setObjs.length; i++) {
                            var setObj = iobj.setObjs[i];
                            newSet[setObj.value] = optsSet[userSetName][setObj.value];
                        }
                        optsSet[userSetName] = JSON.parse(JSON.stringify(newSet));
                        op.typeSet = "";
                        md.reCreate();
                        clrViewKvObj();
                    };
                    console.log(obj.kvObj.fatherMd.opts);
                    var mod = new Model("", "Md_setArray", opts, {});
                    sys.popModel(mod, 600, 500);
                    return;
                }


                if (itemId === "menuSave") {
                    if (!op.typeSet || !op.templateSet)
                        return;
                    var saveYesFunc = function (iobj) {
                        if (iobj.buttonName === "YES") {
                            if (op.modelSet === "Component")
                                var baseOpts = Component.getOpts(op.templateSet, "base");
                            if (op.modelSet === "Model")
                                var baseOpts = Model.getOpts(op.templateSet, "base");
                            var newOpts = md.opts.editOpts;
                            var outOpts = KvLib.deepCompareObject(baseOpts, newOpts);
                            var optsSet = us.set.optsSet;
                            var userSetName = op.modelSet + "~" + op.templateSet;
                            optsSet[userSetName][op.typeSet] = outOpts;
                            Test.server_saveStringToFile("response ok", "", JSON.stringify(us.set), "user-" + gr.userName + "/userSet.json");

                        }
                    };
                    var optsSet = us.set.optsSet;
                    var userSetName = op.modelSet + "~" + op.templateSet;
                    if (optsSet[userSetName]) {
                        if (optsSet[userSetName][op.typeSet])
                            sys.mesBox("cy~Warnning", 500, "Save All Changes To " + op.typeSet + " ?", ["NO", "YES"], saveYesFunc);
                    }
                }
                return;
            }

            var setChange = 0;
            if (name === "modelButton") {
                md.opts.modelSet = obj.value;
                md.opts.templateSet = "";
                md.opts.typeSet = "";
                setChange = 1;
            }
            if (name === "templateButton") {
                md.opts.templateSet = obj.value;
                md.opts.typeSet = "";
                setChange = 1;
            }
            if (name === "typeButton") {
                md.opts.typeSet = obj.value;
                setChange = 1;
            }
            if (setChange) {
                sys.popOff(2);
                if (op.actionFunc) {
                    var oobj = {};
                    oobj.act = "setChange";
                    oobj.kvObj = md;
                    op.actionFunc(oobj);
                }
                return;
            }

            if (strA[0] === "mdEditOptsLine") {
                if (obj.valueChange) {
                    var setObj = kvObj.opts.setObj;
                    var eopts = md.opts.editOpts;
                    eopts[setObj.name] = setObj.value;
                    if (op.actionFunc) {
                        var oobj = {};
                        oobj.act = "valueChange";
                        oobj.kvObj = md;
                        op.actionFunc(oobj);
                    }
                    return;
                }
                return;
            }

        };

        var cname = "c";
        var opts = {};
        opts.xc = 1;
        opts.yc = 5;
        opts.ihO = {};
        opts.ihO.c0 = 30;
        opts.ihO.c1 = 30;
        opts.ihO.c2 = 30;
        opts.ihO.c3 = 30;
        opts.ihO.c4 = 9999;
        layouts[cname] = {name: cname, type: "base", opts: opts};
        lyMap.set("body", cname);
        //==============================================
        var cname = lyMap.get("body") + "~" + 1;
        var opts = {};

        var setObj = sys.getOptsSet("buttonSelect", op.modelSet);
        setObj.name = "Class";
        setObj.enum.push("Component");
        setObj.enum.push("Model");
        setObj.enum.push("Layout");
        setObj.titleWidth = 0;
        setObj.preTextWidth = 120;
        opts.setObj = setObj;
        opts.disable_f = op.disableSet_f;
        opts.actionFunc = actionFunc;
        models[cname] = {name: "modelButton", type: "Md_editOptsLine~sys", opts: opts};
        //==============================================



        var cname = lyMap.get("body") + "~" + 2;
        var opts = {};
        var setObj = sys.getOptsSet("buttonSelect", op.templateSet);
        setObj.name = "Template";
        var keys = [];
        if (op.modelSet === "Component") {
            keys = Object.keys(gr.compOpts);
        }
        if (op.modelSet === "Model") {
            keys = Object.keys(gr.modelOpts);
        }
        for (key in keys)
            setObj.enum.push(keys[key]);
        setObj.titleWidth = 0;
        setObj.preTextWidth = 120;
        opts.setObj = setObj;
        opts.actionFunc = actionFunc;
        opts.disable_f = op.disableSet_f;
        models[cname] = {name: "templateButton", type: "Md_editOptsLine~sys", opts: opts};

        //==============================================
        var cname = lyMap.get("body") + "~" + 3;
        var opts = {};
        var setObj = sys.getOptsSet("buttonSelect", op.typeSet);
        setObj.name = "Type";
        var keys = [];
        if (op.modelSet && op.templateSet) {
            if (op.modelSet === "Component") {
                var baseOpts = gr.compOpts [op.templateSet];
                if (baseOpts) {
                    var subOpts = baseOpts["subOpts"];
                    keys = Object.keys(subOpts);
                }
            }
            if (op.modelSet === "Model") {
                var baseOpts = gr.modelOpts [op.templateSet];
                if (baseOpts) {
                    var subOpts = baseOpts["subOpts"];
                    keys = Object.keys(subOpts);
                }
            }
            if (op.modelSet === "Layout") {
                keys = Object.keys(gr.compOpts);
            }
        }
        for (key in keys)
            setObj.enum.push(keys[key]);
        var optsSet = us.set.optsSet;
        var userSetName = op.modelSet + "~" + op.templateSet;
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
        setObj.preTextWidth = 120;
        opts.setObj = setObj;
        opts.actionFunc = actionFunc;
        opts.disable_f = op.disableSet_f;
        models[cname] = {name: "typeButton", type: "Md_editOptsLine~sys", opts: opts};







        var cname = lyMap.get("body") + "~" + 4;
        var opts = {};
        //opts.actionFunc = itemClickFunc;
        opts.margin = 0;
        opts.borderColor = "#444 #000 #000 #444";
        opts.borderWidth = 1;
        opts.setObjs = [];

        var eopts = {};
        if (op.typeSet && op.templateSet) {
            if (op.modelSet === "Component") {
                var eopts = Component.getOpts(op.templateSet, op.typeSet);
                var optsDsc = gr.compOpts[op.templateSet]["optsDsc"];
                KvLib.deepCoverObject(eopts, op.editOpts);

            }
            if (op.modelSet === "Model") {
                var eopts = Model.getOpts(op.templateSet, op.typeSet);
                var optsDsc = gr.modelOpts[op.templateSet]["optsDsc"];
                KvLib.deepCoverObject(eopts, op.editOpts);
            }
        }
        opts.setObjs = [];
        for (var key in eopts) {
            if (key === "end")
                break;
            var setObj = null;
            if (optsDsc) {
                var setObj = optsDsc[key];
                if (setObj) {
                    if (setObj.dataType === "object") {
                        var sobj = eopts[key];
                        var sons = setObj.sons;
                        if (sons) {
                            for (var i = 0; i < sons.length; i++) {
                                for (var key in sobj) {
                                    if (key === sons[i].name) {
                                        sons[i].value = sobj[key];
                                        break;
                                    }
                                }
                            }
                        }
                    } else {
                        setObj.value = eopts[key];
                    }
                }
            }
            if (!setObj)
                var setObj = sys.getOptsSet(key, eopts[key]);
            if (setObj.setType === "system")
                continue;
            opts.setObjs.push(setObj);
        }
        opts.rm = gr.scrollWidth;
        opts.tagOn_f = 0;
        opts.actionFunc = actionFunc;
        models[cname] = {name: "optsList", type: "Md_setList~light", opts: opts};







        var cname = lyMap.get("body") + "~" + 0;
        var opts = {};
        opts.menuKexts = {};
        //==================
        var kexts = [];
        var head = "";
        kexts.push(new Kext("menuSave", '<i class="gf">&#xe161;</i>', "", {enHint: "Save"}));
        kexts.push(new Kext("menuSaveAs", '<i class="gf">&#xeb60;</i>', "", {enHint: "Save AS"}));
        kexts.push(new Kext("menuEdit", '<i class="gf">&#xe3c9;</i>', "", {enHint: "Edit"}));
        opts.menuKexts["rootMenu"] = kexts;
        opts.buttonType = "menuButton";
        //==================
        opts.actionFunc = actionFunc;
        opts.buttonType = "menuButton";

        models[cname] = {name: "", type: "Md_menu", opts: opts};


        //======================================================================
    }
}
class Md_setList {
    initOpts(md) {
        var obj = {};
        obj.tagOn_f = 1;
        obj.tagColor = "#ccc";
        obj.tagWidth = 30;
        obj.dispNo_f = 1;
        obj.noOffset = 0;
        obj.ih = 24;
        obj.selectAble_f = 0;
        obj.selects = {};
        obj.showTitle_f = 1;
        obj.showDataType_f = 1;
        obj.titleWidth = 100;
        obj.baseColor = "#222";
        obj.rm = gr.scrollWidth;
        obj.margin = 0;
        obj.ym = 0;
        obj.rowCnt = 0;
        //==================================
        obj.setObjs = [];
        obj.topScroll = 0;
        return obj;
    }
    setScroll(pos) {
        var self = this;
        var rootElem = document.getElementById(self.md.stas.rootId);
        if (rootElem)
            rootElem.scrollTop = pos;

    }
    getScroll() {
        var self = this;
        var rootElem = document.getElementById(self.md.stas.rootId);
        if (rootElem)
            return rootElem.scrollTop;
        return 0;
    }

    setScrollEnd() {
        var self = this;
        var rootElem = document.getElementById(self.md.stas.rootId);
        if (!rootElem)
            return;
        var pos = rootElem.scrollHeight - rootElem.clientHeight;
        rootElem.scrollTop = pos;
    }

    chkWatch() {
        var self = this;
        if (self.md.watch["optsChanged"]) {
            self.md.reCreate();
            self.setScroll(this.md.opts.topScroll);
            self.md.watch = {};
        }
    }

    afterCreate() {
        var md = this.md;
        var elem = document.getElementById(md.stas.rootId);
        var exist = KvLib.scrollVExist(elem);
        if (md.opts.rm) {
            if (!exist) {
                md.opts.rm = 0;
                md.reCreate();
            }
        } else {
            if (exist) {
                md.opts.rm = gr.scrollWidth;
                md.reCreate();
            }
        }
    }

    selectFunc(iobj) {
        console.log(iobj);
        var kvObj = iobj.kvObj;
        var strA = kvObj.name.split("~");
        if (!kvObj.opts.preText) {
            kvObj.opts.preText = "✔";
            kvObj.opts.preTextLpd = 4;
            kvObj.opts.preTextAlign = "left";
            kvObj.fatherMd.opts.selects[strA[1]] = 1;
        } else {
            kvObj.opts.preText = "";
            delete kvObj.fatherMd.opts.selects[strA[1]];
        }
        console.log(kvObj.fatherMd.opts.selects);
        kvObj.reCreate();

    }

    dataChangeFunc(iobj) {
        var editLineObj = iobj.kvObj.fatherMd;
        var strA = editLineObj.name.split("~");
        var inx = KvLib.toInt(strA[1], -1);
        if (inx < 0)
            return;
        editLineObj.fatherMd.opts.setObjs[inx].value = iobj.value;

    }
    build(md) {
        var self = this;
        this.md = md;
        var op = md.opts;
        var comps = op.comps;
        var models = op.models;
        //===================


        var index = 0;
        var nowSetObjs = [];
        for (var i = 0; i < op.setObjs.length; i++) {
            var opts = {};
            var setObj = op.setObjs[i];
            setObj["inGroup_f"] = 0;
            var strA = setObj.name.split("~");
            if (strA[0] === "group" && strA.length === 2) {
                var groupSetObj = setObj;
                nowSetObjs.push(setObj);
                continue;
            } else {
                if (groupSetObj) {
                    for (var j = 0; j < groupSetObj.group.length; j++) {
                        if (groupSetObj.group[j] === setObj.name) {
                            setObj["inGroup_f"] = 1;
                            break;
                        }
                    }
                }
                if (!setObj["inGroup_f"]) {
                    groupSetObj = null;
                    nowSetObjs.push(setObj);
                    continue;
                } else {
                    if (!groupSetObj.value[0]) {
                        continue;
                    }
                    nowSetObjs.push(setObj);
                }
            }
        }










        var lyOpts = {};
        var name = "c";
        lyOpts.xc = 2;
        if (op.rowCount)
            lyOpts.yc = op.rowCount;
        else
            lyOpts.yc = op.setObjs.length;
        lyOpts.ih = op.ih;
        lyOpts.rm = op.rm + op.margin;//gr.scrollWidth;
        lyOpts.overflowY = "auto";
        lyOpts.ym = op.ym;
        lyOpts.margin = op.margin;
        lyOpts.color = op.baseColor;
        lyOpts.borderWidth = op.borderWidth;
        lyOpts.borderColor = op.borderColor;
        lyOpts.ihO = {};
        lyOpts.iwO = {};
        if (op.tagOn_f)
            lyOpts.iwO.c0 = op.tagWidth;
        else
            lyOpts.iwO.c0 = 0;
        lyOpts.iwO.c1 = 9999;


        md.opts.layouts[name] = {name: name, type: "base", opts: lyOpts};

        var itemClick = function (actObj) {
            var kvObj = actObj.kvObj;
            if (md.opts.actionFunc) {
                var obj = {};
                obj.act = "itemClick";
                obj.index = parseInt(kvObj.name.split("~")[1]);
                var rootElem = document.getElementById(md.stas.rootId);
                obj.scrollTop = rootElem.scrollTop;
                obj.scrollHeight = rootElem.scrollHeight - rootElem.clientHeight;
                obj.scrollRate = obj.scrollTop / obj.scrollHeight;
                obj.kvObj = kvObj;
                md.opts.actionFunc(obj);
            }
        };
        var index = 0;
        for (var i = 0; i < nowSetObjs.length; i++) {

            if (op.rowCount) {
                if (i >= op.rowCount)
                    break;
            }
            if (op.tagOn_f) {
                var opts = {};
                var cname = "c" + "~" + (i * 2);
                var opts = {};
                if (!op.selectAble_f)
                    opts.disable_f = 1;
                opts.disableTextColor = "#000";
                if (op.dispNo_f) {
                    opts.innerText = (i + 1 + op.noOffset);
                    opts.textAlign = "right";
                    opts.rpd = 4;
                }
                if (op.selectAble_f) {
                    opts.clickFunc = self.selectFunc;
                }
                if (op.selects["" + i]) {
                    opts.preText = "✔";
                    opts.preTextLpd = 4;
                    opts.preTextAlign = "left";

                }
                opts.preTextLpd = 4;
                opts.actionFunc = op.actionFunc;
                comps[cname] = {name: "tagButton~" + i, type: "button~sys", opts: opts};
            }
            var opts = {};
            var setObj = nowSetObjs[i];
            var strA = setObj.name.split("~");
            var cname = "c" + "~" + (i * 2 + 1);
            opts.setObj = setObj;
            var actPrg = function (iobj) {
                if (iobj.valueChange) {
                    name = iobj.kvObj.name;
                    var strA = name.split("~");
                    var inx = parseInt(strA[1]);
                    op.setObjs[inx].value = iobj.value;
                }
                if (op.actionFunc)
                    op.actionFunc(iobj);
            };
            //opts.actionFunc = op.actionFunc;
            opts.actionFunc = actPrg;
            models[cname] = {name: "mdEditOptsLine~" + i, type: "Md_editOptsLine~sys", opts: opts};

        }
        //======================================================================
    }
}
//===========================================
