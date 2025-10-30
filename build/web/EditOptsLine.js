/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global gr, sys, KvLib, mac */

//===========================================
class Md_editOptsLine {
    initOpts(md) {
        var self = this;
        var obj = {};
        obj.selectAll_f = 0;
        obj.checkLegel_f = 1;
        obj.disable_f = 0;
        obj.setObj = {};
        var setObj = obj.setObj;
        setObj.name = "Name";
        setObj.value = "";
        setObj.setType = "inputNumber";
        setObj.dataType = "num";
        setObj.titleWidth = 200;
        setObj.unit = "";
        setObj.selectHint = "";
        setObj.showName_f = 1;
        setObj.showDataType_f = 1;
        setObj.dataTypeWidth = "0.9rh";
        setObj.buttonWidth = "1.2rh";
        setObj.showKeyboard_f = 1;
        setObj.fixed = null;
        setObj.nameFontSize = null;
        return obj;
    }

    chkWatch() {
    }

    static getDataIconFont(dataType) {
        var setObj = {};
        setObj.dataType = dataType;
        var obj = Md_editOptsLine.getDataIconSet(setObj);
        return obj.text;
    }

    static getDataIconSet(setObj) {
        var oobj = {};
        oobj.text = "";
        oobj.hint = "";
        if (setObj.iconType) {
            var iconType = setObj.iconType;
            if (iconType === "password") {
                oobj.text += '<i class="gf">&#xe73c;</i>';
                oobj.hint += "Password";
                return oobj;
            }
            if (iconType === "userName") {
                oobj.text += '<i class="gf">&#xe7fd;</i>';
                oobj.hint += "User Name";
                return oobj;
            }
        }

        var dataType = setObj.dataType;
        if (dataType === "str") {
            oobj.text += '<i class="gf">&#xe262;</i>';
            oobj.hint += "string";
            return oobj;
        }



        if (dataType === "num") {
            oobj.text += '<i class="gf">&#xe400;</i>';
            oobj.hint += "number";
            if (setObj.max !== null && setObj.max !== undefined)
                oobj.hint += ", max:" + setObj.max;
            if (setObj.min !== null && setObj.min !== undefined)
                oobj.hint += ", min:" + setObj.min;
            return oobj;
        }
        if (dataType === "color") {
            oobj.text += '<i class="gf">&#xe3b7;</i>';
            oobj.hint += "colorString";
            return oobj;
        }

        if (dataType === "jsText") {
            oobj.text += '<i class="gf">&#xe745;</i>';
            oobj.hint += "Editor";
            return oobj;
        }


        if (dataType === "dim") {
            oobj.text += '<i class="gf">&#xe94f;</i>';
            oobj.hint += "dimensionString: float|'<float>rw'|'<float>rh'";
            return oobj;
        }
        if (dataType === "ratio") {
            oobj.text += '<i class="gf">&#xe422;</i>';
            oobj.hint += "float";
            if (setObj.max !== null && setObj.max !== undefined)
                oobj.hint += ", max:" + setObj.max;
            if (setObj.min !== null && setObj.min !== undefined)
                oobj.hint += ", min:" + setObj.min;
            return oobj;
        }
        if (dataType === "flag") {
            oobj.text += '<i class="gf">&#xe153;</i>';
            oobj.hint += "boolean: 0 or 1";
            return oobj;
        }
        if (dataType === "enum") {
            oobj.text += '<i class="gf">&#xe8ef;</i>';
            oobj.hint += "";
            return oobj;
        }
        if (dataType === "object") {
            oobj.text += '<i class="gf">&#xead3;</i>';
            oobj.hint += "data object";
            return oobj;
        }

        if (dataType === "group") {
            oobj.text += '<i class="gf">&#xe7ef;</i>';
            oobj.hint += "";
            return oobj;
        }
        var strA = dataType.split("~");
        if (strA[1] === "array") {
            oobj.text += '<i class="gf">&#xe9b0;</i>';
            oobj.hint += strA[1] + " array";
            return oobj;
        }
        return oobj;
    }

    static setDataName(title, dataType, op) {
        var opts = {};
        opts.margin = 0;
        opts.baseColor = "#ccc";
        if (op.setObj.inGroup_f)
            opts.baseColor = "#cce";

        opts.borderWidth = 1;
        opts.borderColor = "#888";
        opts.innerTextColor = "#000";
        opts.fontFamily = "monospace";
        opts.fontSize = 0;
        if (op.setObj.nameFontSize)
            opts.fontSize = op.setObj.nameFontSize;
        opts.textAlign = "left";
        opts.lpd = 4;
        if (op.setObj.showDataType_f) {
            opts.preTextLpd = 2;
            opts.preTextRpd = 2;
            opts.preTextWidth = 0;//op.setObj.dataTypeWidth;
            opts.preTextBackgroundColor = "#cce";
            var sobj = Md_editOptsLine.getDataIconSet(op.setObj);
            opts.preText = sobj.text;
            opts.hint = sobj.hint;
            opts.preTextFontSize = "0.9rh";
            //opts.preTextBackgroundImageUrl = Md_editOptsLine.getDataIcon(dataType);
            //opts.preTextBackgroundImagePosition = "fit";
        }
        var strA = title.split("~");
        if (strA[0] === "group" && strA.length >= 2) {
            opts.innerText = strA[1];
        } else {
            opts.innerText = title;
        }
        return opts;

    }

    valueToSetObj(value) {
        var md = this.md;
        var op = md.opts;
        var setObj = op.setObj;
        //var selectObj = md.compRefs["select"];
        //var selectElem = inputObj.elems["select"];

        var strA = setObj.dataType.split("~");
        if (strA[1] === "array") {
            var inputObj = md.compRefs["input"];
            var inputElem = inputObj.elems["input"];
            var value = inputElem.value;
            setObj.value = JSON.parse(value);
            return;


        }

        var inputText_f = 0;
        if (setObj.setType === "inputText")
            inputText_f = 1;
        if (setObj.setType === "inputSelect")
            inputText_f = 1;
        if (setObj.setType === "inputPassword")
            inputText_f = 1;
        if (inputText_f) {
            var inputObj = md.compRefs["input"];
            var inputElem = inputObj.elems["input"];
            if (setObj.dataType === "str") {
                setObj.value = inputElem.value;
                return;
            }
            if (setObj.dataType === "dim") {
                setObj.value = inputElem.value;
                return;
            }
            setObj.value = inputElem.value;
            return;
        }
        if (setObj.setType === "editor" || setObj.setType === "selectEditor") {
            var inputObj = md.compRefs["input"];
            var inputElem = inputObj.elems["textarea"];
            setObj.value = inputElem.value;
            return;
        }

        if (setObj.setType === "buttonSelect") {
            if(value){
                setObj.value=value;
                return;
            }
                
            var buttonObj = md.compRefs["pullDownButton"];
            var buttonElem = buttonObj.elems["base"];
            setObj.value = buttonElem.innerText;
            return;
        }


        if (setObj.setType === "selectUrl") {
            var inputObj = md.compRefs["input"];
            var inputElem = inputObj.elems["input"];
            setObj.value = inputElem.value;
            return;
        }


        if (setObj.setType === "inputBoolean") {
            var inputObj = md.compRefs["input"];
            var inputElem = inputObj.elems["input"];
            setObj.value = KvLib.toInt(inputElem.value, 0);
            return;
        }


        if (setObj.setType === "selectColor") {
            var kvObj = md.compRefs["selectColorButton"];
            var elem = kvObj.elems["base"];
            setObj.value = elem.innerText;
            return;
        }
        if (setObj.setType === "inputNumber") {
            var inputObj = md.compRefs["input"];
            var inputElem = inputObj.elems["input"];
            if (inputElem.value === "")
                setObj.value = null;
            else
                setObj.value = KvLib.toInt(inputElem.value, 0);
            return;
        }

        if (setObj.setType === "inputFloat") {
            var inputObj = md.compRefs["input"];
            var inputElem = inputObj.elems["input"];
            if (inputElem.value === "")
                setObj.value = null;
            else
                setObj.value = KvLib.toNumber(inputElem.value, 0);
            return;
        }

        if (setObj.setType === "select") {
            var selectObj = md.compRefs["select"];
            var selectElem = selectObj.elems["select"];
            setObj.value = selectElem.options[selectElem.selectedIndex].innerHTML;
            return;
        }


    }

    //return err str;
    checkLegel(value) {
        var self = this;
        var md = self.md;
        var setObj = md.opts.setObj;
        if (!setObj.nullOk_f) {
            if (value === "") {
                return "Input Cannot Be Null !!!";
            }
        }
        if (setObj.setType === "inputText" || setObj.setType === "inputSelect") {
            if (setObj.dataType === "str" || setObj.dataType === "enum") {
                if (setObj.checkLegelType === "phoneNumberArray") {
                    var strA = value.trim().split(",");
                    if (strA.length === 0)
                        return "Format Error !!!";
                    for (var i = 0; i < strA.length; i++) {
                        var trimStr = strA[i].trim();
                        if (trimStr.length < 1)
                            return "Format Error !!!";
                        var err_f = KvLib.checkFont(trimStr, "0123456789*");
                        if (err_f)
                            return "Format Error !!!";
                    }
                    return;
                }
                if (setObj.checkLegelType === "phoneNumber") {
                    var trimStr = value.trim();
                    if (trimStr.length < 1)
                        return "Format Error !!!";
                    var errf = KvLib.checkFont(trimStr, "0123456789*");
                    if (errf)
                        return "Format Error !!!";
                    return;
                }
                if (setObj.checkLegelType === "ipAddress") {
                    if(!KvLib.checkIsIp(value))
                        return "Format Error !!!";
                    return;
                }
                return;
            }
            if (setObj.dataType === "dim") {
                if (value === "")
                    return;
                var num = KvLib.transUnit(value, "error", 100, 100);
                if (num === "error")
                    return "Format Error !!!";
                return;
            }
        }
        if (setObj.setType === "inputNumber") {
            var num = KvLib.toInt(value, "error");
            if (num === null)
                return;
            if (num === "error") {
                return "Format Error !!!";
            }
            if (setObj.max !== null && setObj.max !== undefined) {
                if (num > setObj.max)
                    return "value > " + setObj.max + " !!!";
            }
            if (setObj.min !== null && setObj.min !== undefined) {
                if (num < setObj.min)
                    return "value < " + setObj.min + " !!!";
            }
            return;
        }

        if (setObj.setType === "inputBoolean") {
            var num = KvLib.toInt(value, "error");
            if (num === null)
                return;
            if (num === "error") {
                return "Format Error !!!";
            }
            if (num === 0 || num === 1)
                return;
            return "Format Error !!!";
        }


        if (setObj.setType === "inputFloat") {
            var num = KvLib.toNumber(value, "error");
            if (num === null)
                return;
            if (num === "error") {
                return "Format Error !!!";
            }
            if (setObj.max !== null && setObj.max !== undefined) {
                if (num > setObj.max)
                    return "value > " + setObj.max + " !!!";
            }
            if (setObj.min !== null && setObj.min !== undefined) {
                if (num < setObj.min)
                    return "value < " + setObj.min + " !!!";
            }
            return;
        }

        if (setObj.setType === "select") {
            var enu = setObj.enum;
            for (var i = 0; i < enu.length; i++) {
                if (value === enu[i])
                    return;
            }
            return "Input Error !!!";
        }




    }

    setValue(value) {
        var self = this;
        var md = self.md;
        var setObj = md.opts.setObj;
        var inputText = 0;
        var strA = setObj.dataType.split("~");
        if (strA[1] === "array") {
            var inputObj = self.md.compRefs["input"];
            inputObj.opts.editValue = value;
            var elem = inputObj.elems["input"];
            elem.value = "" + value;
            return;
        }
        if (setObj.setType === "setObject") {
            inputText = 1;
            setObj.value = value;
            return;
        }

        while (1) {
            if (setObj.setType === "inputText") {
                inputText = 1;
                break;
            }
            if (setObj.setType === "inputPassword") {
                inputText = 1;
                break;
            }
            if (setObj.setType === "selectUrl") {
                inputText = 1;
                break;
            }
            if (setObj.setType === "inputSelect") {
                inputText = 1;
                break;
            }
            if (setObj.setType === "inputNumber") {
                value = KvLib.toInt(value, 0);
                if (value === null)
                    value = "";
                inputText = 1;
                break;
            }
            if (setObj.setType === "inputFloat") {
                value = KvLib.toNumber(value, 0);
                if (value === null)
                    value = "";
                inputText = 1;
                break;
            }
            if (setObj.setType === "inputBoolean") {
                value = KvLib.toNumber(value, 0);
                if (value === null)
                    value = "";
                inputText = 1;
                break;
            }
            break;
        }
        if (inputText) {
            var inputObj = self.md.compRefs["input"];
            inputObj.opts.editValue = value;
            var elem = inputObj.elems["input"];
            if (setObj.fixed === null || setObj.fixed === undefined)
                elem.value = "" + inputObj.opts.editValue;
            else
                try {
                    elem.value = "" + inputObj.opts.editValue.toFixed(setObj.fixed);
                } catch (ex) {

                }
            return;
        }

        if (setObj.setType === "editor" || setObj.setType === "selectEditor") {
            var inputObj = self.md.compRefs["input"];
            inputObj.opts.editValue = value;
            var elem = inputObj.elems["textarea"];
            if (setObj.fixed === null || setObj.fixed === undefined)
                elem.value = "" + inputObj.opts.editValue;
            else
                elem.value = "" + inputObj.opts.editValue.fixed(setObj.fixed);
            return;
        }


        if (setObj.setType === "selectColor") {
            var kvObj = self.md.compRefs["selectColorButton"];
            kvObj.opts.innerText = value;
            kvObj.opts.preTextBackgroundColor = value;
            kvObj.reCreate();
            return;
        }

    }

    getValue() {
        var self = this;
        var inputObj = self.md.compRefs["input"];
        var elem = inputObj.elems["input"];
        return elem.value;
    }

    setUnit() {
        var self = this;
        var md = self.md;
        var op = md.opts;
        var value = op.setObj.value;
        var minus = 1;
        if (value < 0) {
            value = 0 - value;
            var minus = -1;
        }
        var unit = op.setObj.unit;
        if (value >= 1000 && op.setObj.unitK) {
            value = value / 1000;
            unit = op.setObj.unitK;
            if (value >= 1000 && op.setObj.unitM) {
                value = value / 1000;
                unit = op.setObj.unitM;
                if (value >= 1000 && op.setObj.unitKM) {
                    value = value / 1000;
                    unit = op.setObj.unitKM;
                }
            }
        }
        return {"value": value * minus, "unit": unit};
    }

    build(md) {
        var self = this;
        this.md = md;
        //============================
        var op = md.opts;
        var lyMap = md.lyMap;
        var comps = op.comps;
        var models = op.models;
        var layouts = op.layouts;

        //==================================
        var setObj = op.setObj;
        var actionFunc = function (obj) {
            console.log(obj);
            var kvObj = obj.kvObj;
            var name = kvObj.name;
            while (1) {
                var valueChange = 1;
                if (obj.act === "selectColor")
                    break;
                if (obj.act === "valueAdd")
                    break;
                if (obj.act === "valueSub")
                    break;
                if (obj.act === "keypadEnter")
                    break;
                if (obj.act === "pressEnter")
                    break;
                if (obj.act === "valueChange")
                    break;
                if (obj.act === "blur") {
                    if (op.disBlurOne_f) {
                        op.disBlurOne_f = 0;
                        return;
                    }
                    break;
                }
                valueChange = 0;
                break;
            }
            if (!valueChange)
                return;

            if (md.opts.checkLegel_f) {
                var errStr = self.checkLegel(obj.value);
                if (errStr) {
                    md.opts.disBlurOne_f = 1;
                    sys.mesBox("cr~" + setObj.name, 500, errStr);
                    var kvObj = md.reCreate();
                    kvObj.opts.disBlurOne_f = 0;
                    return;
                }
            }
            self.setValue(obj.value);
            obj.valueChange = 1;
            self.valueToSetObj(obj.value);
            if (!md.opts.actionFunc)
                return;
            obj.kvObj = md;
            obj.value = md.opts.setObj.value;
            md.opts.actionFunc(obj);
        };

        var cname = "c";
        var opts = {};
        opts.xc = 2;
        opts.iwO = {};
        opts.color = "#222";
        opts.iwO.c0 = op.setObj.titleWidth;
        opts.iwO.c1 = 9999;
        if (op.setObj.inGroup_f) {
            opts.iwO.c0 = op.setObj.titleWidth - 10;
            opts.lm = 10;
        }
        layouts[cname] = {name: cname, type: "base", opts: opts};
        lyMap.set("body", cname);
        //===================================
        if (op.setObj.showName_f) {
            var cname = lyMap.get("body") + "~" + 0;
            var opts = Md_editOptsLine.setDataName(op.setObj.name, op.setObj.dataType, op);
            opts.clickFunc = actionFunc;
            opts.disableTextColor = "#000";
            if (op.setObj.setType === "buttonAction") {
                var enu = "";
                if (op.setObj.enum) {
                    enu = setObj.enum[op.setObj.value];
                    opts.fontSize = "0.5rh";
                    opts.textAlign = "center";
                } else {
                    if (op.setObj.dataType !== "flag") {
                        var value = op.setObj.value;
                        var unitObj = self.setUnit();
                        if (setObj.fixed === null || setObj.fixed === undefined)
                            enu = "" + unitObj.value;
                        else
                        if (KvLib.isFloat(unitObj.value))
                            enu = "" + unitObj.value.toFixed(op.setObj.fixed);
                        else
                            enu = "" + unitObj.value;
                        if (unitObj.unit)
                            enu += " " + unitObj.unit;
                    }
                }
                opts.innerText = enu;
                if (op.setObj.value) {
                    opts.insideShadowColor = op.setObj.onColor;
                    opts.insideShadowBlur = "0.8rh";
                }
            }
            comps[cname] = {name: "nameButton", type: "button~simple", opts: opts};
        }
        //===================================
        if (op.setObj.setType === "groupButton") {
            var cname = lyMap.get("body") + "~" + 1;
            var opts = {};
            opts.baseColor = "#ccd";
            if (op.setObj.value[0])
                opts.innerText = "➖";
            else
                opts.innerText = "➕";
            opts.clickFunc = function (iobj) {
                var kvObj = iobj.kvObj;
                var md = kvObj.fatherMd;
                var setObj = md.opts.setObj;
                if (setObj.value[0])
                    setObj.value[0] = 0;
                else
                    setObj.value[0] = 1;
                var setList = md.fatherMd;
                for (var k = 0; k < setList.opts.setObjs.length; k++) {
                    if (setList.opts.setObjs[k].name === setObj.name) {
                        setList.opts.setObjs[k].value = setObj.value[0];
                        break;
                    }
                }
                var scrollTop = setList.mdClass.getScroll();
                var keys = Object.keys(setList.modelRefs);
                for (var i = 0; i < keys.length; i++) {
                    var editOptsLine = setList.modelRefs[keys[i]];
                    var newSetObj = editOptsLine.opts.setObj;
                    for (var j = 0; j < setList.opts.setObjs.length; j++) {
                        var oldSetObj = setList.opts.setObjs[j];
                        if (oldSetObj.name === newSetObj.name) {
                            setList.opts.setObjs[j] = JSON.parse(JSON.stringify(newSetObj));
                        }
                    }
                }
                var newObj = setList.reCreate();
                newObj.mdClass.setScroll(scrollTop);

            };
            comps[cname] = {name: "groupButton", type: "button~sys", opts: opts};
        }
        //===================================

        /*    
         if (op.setObj.setType === "inputText") {
         var cname = lyMap.get("body") + "~" + 1;
         var opts = {};
         opts.xc = 2;
         opts.iwO = {};
         opts.iwO.c0 = 9999;
         opts.iwO.c1 = op.setObj.buttonWidth;
         if (!op.setObj.showKeyboard_f)
         opts.iwO.c1 = 0;
         if (op.setObj.readOnly_f)
         opts.iwO.c1 = 0;
         layouts[cname] = {name: cname, type: "base", opts: opts};
         lyMap.set("body-1", cname);
         //============================
         var cname = lyMap.get("body-1") + "~" + 0;
         var opts = {};
         opts.preText = "";
         if (op.setObj.unit) {
         opts.afterTextBackgroundColor = "#fff";
         opts.afterTextBorderWidth = 1;
         opts.afterText = op.setObj.unit;
         }
         opts.actionFunc = actionFunc;
         opts.editValue = KvLib.disJsonString(op.setObj.value);
         
         
         opts.readOnly_f=op.setObj.readOnly_f;
         comps[cname] = {name: "input", type: "input~text", opts: opts};
         
         var cname = lyMap.get("body-1") + "~" + 1;
         var opts = {};
         opts.innerText = '<i class="gf">&#xe312;</i>';
         opts.clickFunc = function () {
         var retFunc = function (iobj) {
         actionFunc(iobj);
         };
         mac.keyboard(op.setObj, retFunc);
         };
         comps[cname] = {name: "numpadButton", type: "button~icon", opts: opts};
         }
         */


        if (op.setObj.setType === "inputText" || op.setObj.setType === "inputPassword") {
            var cname = lyMap.get("body") + "~" + 1;
            var opts = {};
            opts.xc = 2;
            opts.iwO = {};
            opts.iwO.c0 = 9999;
            opts.iwO.c1 = op.setObj.buttonWidth;
            if (!op.setObj.showKeyboard_f)
                opts.iwO.c1 = 0;
            if (op.setObj.readOnly_f)
                opts.iwO.c1 = 0;
            layouts[cname] = {name: cname, type: "base", opts: opts};
            lyMap.set("body-1", cname);
            //============================
            var cname = lyMap.get("body-1") + "~" + 0;
            var opts = {};
            opts.preText = "";
            var unitObj = self.setUnit();

            if (unitObj.unit) {
                opts.afterTextBackgroundColor = "#fff";
                opts.afterTextBorderWidth = 1;
                opts.afterText = unitObj.unit;
            }
            opts.actionFunc = actionFunc;
            if (setObj.fixed !== null && setObj.fixed !== undefined)
                unitObj.value = KvLib.parseNumber(unitObj.value.toFixed(setObj.fixed));
            opts.editValue = KvLib.disJsonString(op.setObj.value);
            opts.readOnly_f = op.setObj.readOnly_f;
            if (op.setObj.textAlign)
                opts.textAlign = op.setObj.textAlign;
            if (op.setObj.setType === "inputText")
                comps[cname] = {name: "input", type: "input~text", opts: opts};
            if (op.setObj.setType === "inputPassword")
                comps[cname] = {name: "input", type: "input~password", opts: opts};

            var cname = lyMap.get("body-1") + "~" + 1;
            var opts = {};
            opts.innerText = '<i class="gf">&#xe312;</i>';
            opts.clickFunc = function () {
                var retFunc = function (iobj) {
                    actionFunc(iobj);
                };
                if (!op.setObj.padType) {
                    mac.keyboard(op.setObj, retFunc);
                    return;
                }
                mac.inputPad(op.setObj, retFunc);
            };
            opts.backgroundInx = -1;
            comps[cname] = {name: "numpadButton", type: "button~icon", opts: opts};
        }





        if (op.setObj.setType === "inputRadio") {
            var cname = lyMap.get("body") + "~" + 1;
            var opts = {};
            opts.margin = 0;
            opts.preText = "";
            opts.actionFunc = actionFunc;
            var strA = op.setObj.value.split("~");
            if (strA.length >= 2) {
                opts.selectInx = KvLib.toInt(strA[0], -1);
                opts.selectHint = op.selectHint;
                opts.options = [];
                for (var i = 1; i < strA.length; i++)
                    opts.options.push(strA[i]);
            }
            comps[cname] = {name: "nameButton", type: "select~sys", opts: opts};
        }

        if (op.setObj.setType === "inputCheckbox") {
            var cname = lyMap.get("body") + "~" + 1;
            var opts = {};
            opts.margin = 0;
            opts.preText = "";
            opts.actionFunc = actionFunc;
            var strA = op.setObj.value.split("~");
            if (strA.length === 3) {
                opts.editValue = KvLib.toInt(strA[0], 0);
                opts.enums = [strA[1], strA[2]];
            } else {
                opts.editValue = op.value;
            }
            comps[cname] = {name: "", type: "input~checkbox", opts: opts};
        }

        if (op.setObj.setType === "inputRange") {
            var cname = lyMap.get("body") + "~" + 1;
            var opts = {};
            opts.margin = 0;
            opts.preText = "";
            opts.actionFunc = actionFunc;
            opts.editValue = op.setObj.value;
            opts.afterText = op.setObj.unit;
            comps[cname] = {name: "input", type: "input~range", opts: opts};
        }

        if (op.setObj.setType === "viewer") {
            var cname = lyMap.get("body") + "~" + 1;
            var opts = {};
            opts.innerText = op.setObj.value;
            opts.preText = op.setObj.name;
            opts.preTextWidth = op.setObj.preTextWidth;
            comps[cname] = {name: "label", type: "label~namePanel", opts: opts};
        }

        if (op.setObj.setType === "buttonAction") {
            var cname = lyMap.get("body") + "~" + 1;
            var opts = {};
            opts.innerText = op.setObj.name;
            opts.clickFunc = function (iobj) {
                if (op.actionFunc)
                    op.actionFunc(iobj);
            };
            comps[cname] = {name: "buttonAction", type: "button~sys", opts: opts};
        }

        if (op.setObj.setType === "setObject") {
            var cname = lyMap.get("body") + "~" + 1;
            var opts = {};
            opts.innerText = "SET";
            opts.clickFunc = function (iobj) {
                var opts = {};
                opts.setObjs = [];
                opts.title = op.setObj.name;

                if (!op.setObj.sons) {
                    op.setObj.sons = [];
                    var keys = Object.keys(op.setObj.value);
                    for (var i = 0; i < keys.length; i++) {
                        var xx = op.setObj.value[keys[i]];
                        var typeStr = KvLib.chkType(xx);
                        op.setObj.sons.push(sys.setOptsSetFix(keys[i], typeStr));
                    }
                }
                for (var i = 0; i < op.setObj.sons.length; i++) {
                    var setObj = op.setObj.sons[i];
                    if (op.setObj.value[setObj.name] !== null && op.setObj.value[setObj.name] !== undefined)
                        setObj.value = op.setObj.value[setObj.name];
                    opts.setObjs.push(setObj);
                }
                opts.actionFunc = actionFunc;
                var mod = new Model("", "Md_inputLineBox~sys", opts, {});
                sys.popModel(mod, 800, 500);
            };
            comps[cname] = {name: "setObject", type: "button~sys", opts: opts};
        }




        if (op.setObj.setType === "inputColor") {
            var cname = lyMap.get("body") + "~" + 1;
            var opts = {};
            opts.margin = 0;
            opts.preText = "";
            opts.actionFunc = actionFunc;
            opts.editValue = KvLib.disJsonString(op.setObj.value);
            comps[cname] = {name: "input", type: "input~color", opts: opts};
        }

        if (op.setObj.setType === "selectColor") {
            var pickColorFunc = function (iobj) {
                var kvObj = iobj.kvObj;
                var elem = kvObj.elems["selectColorButton"];
                var colorSelectFunc = function (colorStr) {
                    kvObj.opts.innerText = colorStr;
                    sys.setReDraw(kvObj, "preTextBackgroundColor", colorStr);
                    var oobj = {};
                    oobj.act = "selectColor";
                    oobj.value = colorStr;
                    oobj.valueChange = 1;
                    oobj.kvObj = kvObj;
                    actionFunc(oobj);
                };
                var opts = {};
                opts.color = kvObj.opts.innerText;
                opts.actionFunc = colorSelectFunc;
                var mod = new Model("", "Md_colorPicker~sys", opts, {});
                var pos = KvLib.getPosition(kvObj.elems["base"]);
                var opts = {};
                opts.kvObj = mod;
                opts.w = 250;
                opts.h = 380;
                opts.center_f = 0;
                opts.x = pos.x;
                opts.y = pos.y;
                opts.maskTouchOff_f = 1;

                if ((opts.x + opts.w) >= (gr.clientW)) {
                    opts.x = gr.clientW - opts.w;
                }
                if ((opts.y + opts.h) >= (gr.clientH)) {
                    opts.y = opts.y - opts.h;
                }
                sys.popOnModel(opts);
            };

            var cname = lyMap.get("body") + "~" + 1;
            var opts = {};
            opts.margin = 0;
            opts.preText = "";
            opts.clickFunc = pickColorFunc;
            opts.preTextWidth = 50;
            opts.preTextBorderWidth = 1;
            opts.preText = "";
            opts.preTextBackgroundColor = op.setObj.value;
            opts.innerText = op.setObj.value;
            opts.lpd = 56;
            opts.textAlign = "left";
            comps[cname] = {name: "selectColorButton", type: "button~simple", opts: opts};
        }

        if (op.setObj.setType === "select") {
            var cname = lyMap.get("body") + "~" + 1;
            var opts = {};
            opts.margin = 0;
            opts.preText = "";
            opts.actionFunc = actionFunc;
            opts.options = [];
            opts.selectInx = 0;
            opts.textAlign = "center";
            for (var i = 0; i < op.setObj.enum.length; i++) {
                var option = op.setObj.enum[i];
                if (option === op.setObj.value)
                    opts.selectInx = i;
                opts.options.push(option);
            }
            comps[cname] = {name: "select", type: "select~sys", opts: opts};
        }






        if (op.setObj.setType === "inputNumber") {
            var cname = lyMap.get("body") + "~" + 1;
            var opts = {};
            opts.xc = 4;
            opts.yc = 1;
            opts.iwO = {};
            opts.iwO.c0 = 9999;
            opts.iwO.c1 = op.setObj.buttonWidth;
            opts.iwO.c2 = op.setObj.buttonWidth;
            opts.iwO.c3 = op.setObj.buttonWidth;


            if (!op.setObj.showKeyboard_f)
                opts.iwO.c3 = 0;
            if (op.setObj.disSetButton_f) {
                opts.iwO.c1 = 0;
                opts.iwO.c2 = 0;
            }
            opts.color = "#fff";
            layouts[cname] = {name: cname, type: "base", opts: opts};
            lyMap.set("body-1", cname);

            var cname = lyMap.get("body-1") + "~" + 0;
            var opts = {};
            opts.margin = 0;
            opts.preText = "";
            opts.actionFunc = actionFunc;
            opts.editValue = "";
            if (op.setObj.fixed === null || op.setObj.fixed === undefined)
                opts.editValue = "" + op.setObj.value;
            else
                try {
                    opts.editValue = "" + op.setObj.value.toFixed(op.setObj.fixed);
                } catch (ex) {

                }



            if (op.setObj.unit)
                opts.afterText = op.setObj.unit;
            else
                opts.afterText = "";
            opts.max = op.setObj.max;
            opts.min = op.setObj.min;
            if (op.setObj.textAlign)
                opts.textAlign = op.setObj.textAlign;
            comps[cname] = {name: "input", type: "input~text", opts: opts};
            var inputObj = comps[cname];

            var addValueFunc = function (obj) {
                var kvObj = obj.kvObj;
                var inputObj = md.compRefs["input"];
                var vi = parseInt(inputObj.opts.editValue);
                if (isNaN(vi)) {
                    return;
                }


                var setObj = md.opts.setObj;
                if (setObj.max !== null && setObj.max !== undefined) {
                    if (inputObj.opts.editValue >= inputObj.opts.max) {
                        clearTimeout(gr.addSubTimer);
                        return;
                    }
                }
                if (isNaN(inputObj.opts.editValue))
                    inputObj.opts.editValue = null;
                if (inputObj.opts.editValue === null)
                    inputObj.opts.editValue = 0;
                else {
                    inputObj.opts.editValue = parseInt(inputObj.opts.editValue);
                    inputObj.opts.editValue += 1;
                }
                var elem = inputObj.elems["input"];
                elem.value = inputObj.opts.editValue;
                var oobj = {};
                oobj.act = "valueAdd";
                oobj.valueChange = 1;
                oobj.kvObj = inputObj;
                oobj.value = parseInt(inputObj.opts.editValue);
                actionFunc(oobj);
            };




            var subValueFunc = function (obj) {
                var kvObj = obj.kvObj;
                var inputObj = md.compRefs["input"];
                var vi = parseInt(inputObj.opts.editValue);
                if (isNaN(vi)) {
                    return;
                }


                var setObj = md.opts.setObj;
                if (setObj.min !== null && setObj.min !== undefined) {
                    if (inputObj.opts.editValue <= inputObj.opts.min) {
                        clearTimeout(gr.addSubTimer);
                        return;
                    }
                }
                if (isNaN(inputObj.opts.editValue))
                    inputObj.opts.editValue = null;
                if (inputObj.opts.editValue === null)
                    inputObj.opts.editValue = 0;
                else
                    inputObj.opts.editValue -= 1;
                var elem = inputObj.elems["input"];
                elem.value = inputObj.opts.editValue;
                var oobj = {};
                oobj.act = "valueSub";
                oobj.valueChange = 1;
                oobj.kvObj = inputObj;
                oobj.value = parseInt(inputObj.opts.editValue);
                actionFunc(oobj);
            };

            var addTimerFunc = function (iobj) {
                if (!gr.mouseDown_f)
                    return;
                addValueFunc(iobj);
                var delay = 50;
                gr.addSubTimer = setTimeout(function () {
                    addTimerFunc(iobj);
                }, delay);
            };
            var subTimerFunc = function (iobj) {
                if (!gr.mouseDown_f)
                    return;
                subValueFunc(iobj);
                var delay = 50;
                gr.addSubTimer = setTimeout(function () {
                    subTimerFunc(iobj);
                }, delay);
            };
            var setAddTimer = function (iobj) {
                addValueFunc(iobj);
                var delay = 500;
                clearTimeout(gr.addSubTimer);
                gr.addSubTimer = setTimeout(function () {
                    addTimerFunc(iobj);
                }, delay);
            };
            var setSubTimer = function (iobj) {
                subValueFunc(iobj);
                var delay = 500;
                clearTimeout(gr.addSubTimer);
                gr.addSubTimer = setTimeout(function () {
                    subTimerFunc(iobj);
                }, delay);
            };
            var stopTimer = function () {
                clearTimeout(gr.addSubTimer);
            };

            var cname = lyMap.get("body-1") + "~" + 1;
            var opts = {};
            opts.innerText = '<i class="gf">&#xe145;</i>';//addIcon
            opts.mouseDownFunc = setAddTimer;
            opts.mouseUpFunc = stopTimer;
            opts.mouseOutFunc = stopTimer;
            opts.backgroundInx = -1;
            comps[cname] = {name: "addButton", type: "button~icon", opts: opts};


            var cname = lyMap.get("body-1") + "~" + 2;
            var opts = {};
            opts.innerText = '<i class="gf">&#xe15b;</i>';//subIcon
            opts.mouseDownFunc = setSubTimer;
            opts.mouseUpFunc = stopTimer;
            opts.mouseOutFunc = stopTimer;
            opts.backgroundInx = -1;
            comps[cname] = {name: "subButton", type: "button~icon", opts: opts};

            var cname = lyMap.get("body-1") + "~" + 3;
            var opts = {};
            opts.innerText = '<i class="gf">&#xe312;</i>';
            opts.clickFunc = function () {
                console.log("keypad press");
                var retFunc = function (iobj) {
                    actionFunc(iobj);
                };
                mac.numpad(op.setObj, actionFunc);
            };
            opts.backgroundInx = -1;
            comps[cname] = {name: "numpadButton", type: "button~icon", opts: opts};


        }

        if (op.setObj.setType === "inputFloat") {
            var cname = lyMap.get("body") + "~" + 1;
            var opts = {};
            opts.xc = 2;
            opts.yc = 1;
            opts.iwO = {};
            opts.iwO.c0 = 9999;
            opts.iwO.c1 = op.setObj.buttonWidth;
            if (!op.setObj.showKeyboard_f)
                opts.iwO.c1 = null;
            opts.color = "#fff";
            layouts[cname] = {name: cname, type: "base", opts: opts};
            lyMap.set("body-1", cname);

            var cname = lyMap.get("body-1") + "~" + 0;
            var opts = {};
            opts.margin = 0;
            opts.preText = "";
            opts.actionFunc = actionFunc;
            opts.editValue = op.setObj.value;
            if (op.setObj.unit)
                opts.afterText = op.setObj.unit;
            else
                opts.afterText = "";
            opts.max = op.setObj.max;
            opts.min = op.setObj.min;
            if (op.setObj.textAlign)
                opts.textAlign = op.setObj.textAlign;
            comps[cname] = {name: "input", type: "input~text", opts: opts};
            var inputObj = comps[cname];


            var cname = lyMap.get("body-1") + "~" + 1;
            var opts = {};
            opts.innerText = '<i class="material-icons">&#xe312;</i>';

            opts.clickFunc = function () {
                var retFunc = function (iobj) {
                    actionFunc(iobj);
                };
                mac.numpad(op.setObj, actionFunc);
            };
            opts.backgroundInx = -1;
            comps[cname] = {name: "numpadButton", type: "button~icon", opts: opts};


        }


        if (op.setObj.setType === "inputSelect") {
            var cname = lyMap.get("body") + "~" + 1;
            var opts = {};
            opts.xc = 3;
            opts.yc = 1;
            opts.iwO = {};
            opts.iwO.c0 = 9999;
            opts.iwO.c1 = op.setObj.buttonWidth;
            opts.iwO.c2 = op.setObj.buttonWidth;
            if (op.setObj.disSetButton_f)
                opts.iwO.c1 = 0;
            if (!op.setObj.showKeyboard_f)
                opts.iwO.c2 = 0;

            opts.color = "#fff";
            layouts[cname] = {name: cname, type: "base", opts: opts};
            lyMap.set("body-1", cname);

            var cname = lyMap.get("body-1") + "~" + 0;
            var opts = {};
            opts.margin = 0;
            opts.preText = "";
            opts.actionFunc = actionFunc;
            opts.editValue = KvLib.disJsonString(op.setObj.value);
            if (op.setObj.unit)
                opts.afterText = op.setObj.unit;
            else
                opts.afterText = "";
            if (op.setObj.readOnly_f)
                opts.readOnly_f = 1;
            if (op.setObj.textAlign)
                opts.textAlign = op.setObj.textAlign;
            comps[cname] = {name: "input", type: "input~text", opts: opts};
            var inputObj = comps[cname];

            var downFunc = function (obj) {
                var md = obj.kvObj.fatherMd;
                if (op.setObj.selectBox) {
                    var opts = {};
                    opts.xc = op.setObj.selectBox.xc;
                    opts.yc = op.setObj.selectBox.yc;
                    opts.title = op.setObj.name;
                    opts.selects = [];
                    for (var i = 0; i < op.setObj.enum.length; i++) {
                        opts.selects.push(op.setObj.enum[i]);
                    }
                    opts.actionFunc = function (iobj) {
                        console.log(iobj);
                        if (iobj.act !== "selected")
                            return;
                        var outValue = iobj.text;
                        var inValue = iobj.text;
                        if (op.setObj.selectActionStr) {
                            try {
                                eval(op.setObj.selectActionStr);
                            } catch (except) {
                                console.log("except");
                            }
                        }
                        md.opts.setObj.value = outValue;
                        md.reCreate();
                        var robj = {};
                        robj.act = "valueChange";
                        robj.value = outValue;
                        robj.kvObj = md.compRefs["pullDownButton"];
                        actionFunc(robj);
                    };
                    mac.selectBox(opts, 0, 0, 1);
                    return;
                }



                var selectOkFunc = function (iobj) {
                    var outValue = iobj.selectText;
                    var inValue = iobj.selectText;
                    if (op.setObj.selectActionStr) {
                        try {
                            eval(op.setObj.selectActionStr);
                        } catch (except) {
                            console.log("except");
                        }
                    }
                    md.compRefs["input"].elems["input"].value = outValue;
                    var robj = {};
                    robj.act = "valueChange";
                    robj.value = outValue;
                    robj.kvObj = md.compRefs["input"];
                    actionFunc(robj);
                    sys.popOff(2);
                };
                var kexts = [];
                var head = "";
                for (var i = 0; i < op.setObj.enum.length; i++)
                    kexts.push(new Kext("id" + i, op.setObj.enum[i]));
                obj.kexts = kexts;
                obj.md = md;
                obj.kvObj = md.compRefs["input"];
                obj.posType = 0;
                obj.actionFunc = selectOkFunc;
                sys.popList(obj);


            };

            var cname = lyMap.get("body-1") + "~" + 1;
            var opts = {};
            opts.margin = 0;
            opts.baseColor = "#ccc";
            opts.borderWidth = 1;
            opts.innerTextColor = "#000";
            opts.innerText = '<i class="gf">&#xead0;</i>';

            opts.clickFunc = downFunc;
            opts.backgroundInx = -1;
            comps[cname] = {name: "pullDownButton", type: "button~icon", opts: opts};


            var cname = lyMap.get("body-1") + "~" + 2;
            var opts = {};
            opts.innerText = '<i class="gf">&#xe312;</i>';
            opts.clickFunc = function () {
                var retFunc = function (iobj) {
                    actionFunc(iobj);
                };

                var retFunc = function (iobj) {
                    actionFunc(iobj);
                };
                if (!op.setObj.padType) {
                    mac.keyboard(op.setObj, retFunc);
                    return;
                }
                mac.inputPad(op.setObj, retFunc);
            };
            opts.backgroundInx = -1;
            comps[cname] = {name: "numpadButton", type: "button~icon", opts: opts};



        }



        if (op.setObj.setType === "buttonSelect") {
            var downFunc = function (obj) {
                if (op.setObj.selectBox) {
                    var md = obj.kvObj.fatherMd;
                    var opts = {};
                    opts.xc = op.setObj.selectBox.xc;
                    opts.yc = op.setObj.selectBox.yc;
                    opts.title = op.setObj.name;
                    opts.selects = [];
                    for (var i = 0; i < op.setObj.enum.length; i++) {
                        opts.selects.push(op.setObj.enum[i]);
                    }
                    opts.actionFunc = function (iobj) {
                        console.log(iobj);
                        if (iobj.act === "cancle")
                            return;
                        var outValue = iobj.text;
                        var inValue = iobj.text;
                        if (op.setObj.selectActionStr) {
                            try {
                                eval(op.setObj.selectActionStr);
                            } catch (except) {
                                console.log("except");
                            }
                        }
                        md.opts.setObj.value = outValue;
                        md.reCreate();
                        var robj = {};
                        robj.act = "valueChange";
                        robj.value = outValue;
                        robj.kvObj = md.compRefs["pullDownButton"];
                        actionFunc(robj);
                    };
                    mac.selectBox(opts, 0, 0, 1);
                    return;
                }




                var md = obj.kvObj.fatherMd;
                var selectOkFunc = function (iobj) {
                    var outValue = iobj.selectText;
                    var inValue = iobj.selectText;
                    if (op.setObj.selectActionStr) {
                        try {
                            eval(op.setObj.selectActionStr);
                        } catch (except) {
                            console.log("except");
                        }
                    }
                    md.opts.setObj.value = outValue;
                    md.reCreate();
                    var robj = {};
                    robj.act = "valueChange";
                    robj.value = iobj.selectText;
                    robj.kvObj = md.compRefs["pullDownButton"];
                    sys.popOff(2);
                    actionFunc(robj);
                };
                var kexts = [];
                var head = "";
                for (var i = 0; i < op.setObj.enum.length; i++)
                    kexts.push(new Kext("id" + i, op.setObj.enum[i]));
                obj.kexts = kexts;
                obj.md = md;
                obj.kvObj = md.compRefs["pullDownButton"];
                obj.posType = 0;
                obj.actionFunc = selectOkFunc;
                sys.popList(obj);

            };

            var cname = lyMap.get("body") + "~" + 1;
            var opts = {};
            opts.margin = 0;
            opts.baseColor = "#ccc";
            opts.borderWidth = 1;
            opts.innerTextColor = "#000";
            opts.innerText = KvLib.disJsonString(op.setObj.value);
            opts.preText = op.setObj.preText;
            if (op.setObj.preTextWidth) {
                opts.preTextWidth = op.setObj.preTextWidth;
                opts.preTextFontSize = "fix";
            }
            opts.afterText = '<i class="gf">&#xead0;</i>';
            opts.afterTextBorderWidth = 0;
            opts.afterTextBackgroundColor = "";
            opts.clickFunc = downFunc;
            opts.disable_f = op.disable_f;
            comps[cname] = {name: "pullDownButton", type: "button~sys", opts: opts};
        }


        if (op.setObj.setType === "selectUrl") {
            var cname = lyMap.get("body") + "~" + 1;
            var opts = {};
            opts.xc = 2;
            opts.yc = 1;
            opts.iwO = {};
            opts.iwO.c0 = 9999;
            opts.iwO.c1 = op.setObj.buttonWidth;
            opts.color = "#fff";
            layouts[cname] = {name: cname, type: "base", opts: opts};
            lyMap.set("body-1", cname);

            var cname = lyMap.get("body-1") + "~" + 0;
            var opts = {};
            opts.margin = 0;
            opts.preText = "";
            opts.actionFunc = actionFunc;
            opts.editValue = KvLib.disJsonString(op.setObj.value);
            opts.readOnly_f = 1;
            if (op.unit)
                opts.afterText = op.unit;
            else
                opts.afterText = "";
            if (op.setObj.textAlign)
                opts.textAlign = op.setObj.textAlign;
            comps[cname] = {name: "input", type: "input~text", opts: opts};
            var inputObj = comps[cname];

            var enterFunc = function (obj) {
                var actFunc = function (url) {
                    var robj = {};
                    robj.act = "valueChange";
                    robj.kvObj = md.compRefs["input"];
                    robj.value = url;
                    actionFunc(robj);

                };
                var opts = {};
                opts.color = "#0ff";
                opts.actionFunc = actFunc;
                var mod = new Model("", "Md_filePicker~sys", opts, {});
                sys.popModel(mod, 0, 0);
                return;

            };

            var cname = lyMap.get("body-1") + "~" + 1;
            var opts = {};
            opts.margin = 0;
            opts.baseColor = "#ccc";
            opts.borderWidth = 1;
            opts.innerTextColor = "#000";
            opts.innerText = "▶";
            opts.clickFunc = enterFunc;
            comps[cname] = {name: "enterButton", type: "button~sys", opts: opts};
        }



        if (op.setObj.setType === "editor" || op.setObj.setType === "selectEditor") {
            var cname = lyMap.get("body") + "~" + 1;
            var opts = {};
            opts.xc = 3;
            opts.yc = 1;
            opts.iwO = {};
            opts.iwO.c0 = 9999;
            opts.iwO.c1 = op.setObj.buttonWidth;
            opts.iwO.c2 = op.setObj.buttonWidth;
            if (op.setObj.setType === "editor")
                opts.iwO.c1 = 0;

            opts.color = "#fff";
            layouts[cname] = {name: cname, type: "base", opts: opts};
            lyMap.set("body-1", cname);

            var cname = lyMap.get("body-1") + "~" + 0;
            var opts = {};
            opts.margin = 0;
            opts.preText = "";
            opts.actionFunc = actionFunc;
            opts.editValue = KvLib.disJsonString(op.setObj.value);
            opts.readOnly_f = 1;
            if (op.unit)
                opts.afterText = op.unit;
            else
                opts.afterText = "";
            comps[cname] = {name: "input", type: "textarea~sys", opts: opts};
            var inputObj = comps[cname];

            var enterFunc = function (obj) {
                var opts = {};
                opts.iw = null;
                opts.ih = null;
                var kop = opts.kvObjOpts = {};
                opts.modelSet = "Component";
                opts.templateSet = "editor";
                opts.typeSet = "sys";
                opts.buttons = ["OK", "ESC"];
                kop.baseColor = "#333";
                if (op.setObj.dataType === "jsText")
                    kop.exName = "js";
                kop.editValue = op.setObj.value;
                var chA = op.setObj.value.split("");
                for (var i = 0; i < chA.length; i++) {
                    var num = chA[i].charCodeAt();
                }


                kop.urls = null;
                opts.actionFunc = function (iobj) {
                    var editor = iobj.objs["editor"];
                    var robj = {};
                    robj.act = "valueChange";
                    robj.kvObj = md.compRefs["input"];
                    robj.value = editor.getSession().getValue();
                    ;
                    actionFunc(robj);

                };
                mac.viewKvObjBox(opts, 0, 0);

            };


            var downFunc = function (obj) {
                var md = obj.kvObj.fatherMd;
                var selectOkFunc = function (iobj) {
                    md.compRefs["input"].elems["textarea"].value = iobj.selectText;
                    var robj = {};
                    robj.act = "valueChange";
                    robj.value = iobj.selectText;
                    robj.kvObj = md.compRefs["input"];
                    actionFunc(robj);
                    sys.popOff(2);
                };
                var kexts = [];
                var head = "";
                for (var i = 0; i < op.setObj.enum.length; i++)
                    kexts.push(new Kext("id" + i, op.setObj.enum[i]));
                obj.kexts = kexts;
                obj.md = md;
                obj.kvObj = md.compRefs["input"];
                obj.posType = 0;
                obj.actionFunc = selectOkFunc;
                sys.popList(obj);


            };

            var cname = lyMap.get("body-1") + "~" + 1;
            var opts = {};
            opts.margin = 0;
            opts.baseColor = "#ccc";
            opts.borderWidth = 1;
            opts.innerTextColor = "#000";
            opts.innerText = '<i class="gf">&#xead0;</i>';

            opts.clickFunc = downFunc;
            opts.backgroundInx = -1;
            comps[cname] = {name: "pullDownButton", type: "button~icon", opts: opts};




            var cname = lyMap.get("body-1") + "~" + 2;
            var opts = {};
            opts.margin = 0;
            opts.baseColor = "#ccc";
            opts.borderWidth = 1;
            opts.innerTextColor = "#000";
            opts.innerText = "✏️";
            opts.clickFunc = enterFunc;
            comps[cname] = {name: "enterButton", type: "button~sys", opts: opts};
        }








        var strA = op.setObj.dataType.split("~");

        if (strA[1] === "array") {
            var cname = lyMap.get("body") + "~" + 1;
            var opts = {};
            opts.xc = 2;
            opts.yc = 1;
            opts.iwO = {};
            opts.iwO.c0 = 9999;
            opts.iwO.c1 = op.setObj.buttonWidth;
            opts.color = "#fff";
            layouts[cname] = {name: cname, type: "base", opts: opts};
            lyMap.set("body-1", cname);

            var cname = lyMap.get("body-1") + "~" + 0;
            var opts = {};
            opts.margin = 0;
            opts.preText = "";
            opts.actionFunc = actionFunc;
            opts.editValue = JSON.stringify(op.setObj.value);
            opts.textAlign = "left";
            opts.readOnly_f = 1;
            if (op.unit)
                opts.afterText = op.unit;
            else
                opts.afterText = "";
            comps[cname] = {name: "input", type: "input~text", opts: opts};
            var inputObj = comps[cname];

            var enterFunc = function (obj) {
                var inpObj = obj.kvObj.fatherMd.compRefs["input"];
                var butObj = obj.kvObj.fatherMd.compRefs["nameButton"];
                var md = obj.kvObj.fatherMd;
                var regName = butObj.opts.innerText;
                var opts = {};
                opts.arrayName = regName;
                opts.values = obj.kvObj.fatherMd.opts.setObj.value;
                var setObj = JSON.parse(JSON.stringify(obj.kvObj.fatherMd.opts.setObj));
                var strA = setObj.dataType.split("~");
                setObj.dataType = strA[0];
                setObj.showName_f = 0;
                setObj.showDataType_f = 0;
                setObj.setType = setObj.setType.split("~")[0];
                setObj.titleWidth = 0;
                setObj.value = setObj.value[0];
                opts.setObj = setObj;

                opts.selectAble_f = 1;


                opts.actionFunc = function (iobj) {
                    var values = [];
                    for (var i = 0; i < iobj.setObjs.length; i++) {
                        var setObj = iobj.setObjs[i];
                        values.push(setObj.value);
                    }
                    var kvObj = md.compRefs["input"];
                    var oobj = {};
                    oobj.act = "valueChange";
                    oobj.kvObj = inputObj;
                    oobj.value = JSON.stringify(values);
                    actionFunc(oobj);
                };
                console.log(obj.kvObj.fatherMd.opts);
                var mod = new Model("", "Md_setArray", opts, {});

                var opts = {};
                opts.kvObj = mod;
                opts.w = 600;
                opts.h = 600;
                opts.center_f = 1;
                opts.shadow_f = 1;
                var maskOpts = {};
                gr.mdSystem.mdClass.popMaskOn(maskOpts);
                gr.mdSystem.mdClass.popOn(opts);
                md.popOnCnt += 2;





            };

            var cname = lyMap.get("body-1") + "~" + 1;
            var opts = {};
            opts.margin = 0;
            opts.baseColor = "#ccc";
            opts.borderWidth = 1;
            opts.innerTextColor = "#000";
            opts.innerText = "▶";
            opts.clickFunc = enterFunc;
            comps[cname] = {name: "enterButton", type: "button~sys", opts: opts};



        }



        if (op.setObj.setType === "inputBoolean") {
            var cname = lyMap.get("body") + "~" + 1;
            var opts = {};
            opts.xc = 2;
            opts.yc = 1;
            opts.iwO = {};
            opts.iwO.c0 = 9999;
            opts.iwO.c1 = op.setObj.buttonWidth;
            opts.color = "#fff";
            layouts[cname] = {name: cname, type: "base", opts: opts};
            lyMap.set("body-1", cname);

            var cname = lyMap.get("body-1") + "~" + 0;
            var opts = {};
            opts.margin = 0;
            opts.preText = "";
            opts.actionFunc = actionFunc;
            opts.editValue = op.setObj.value;
            opts.afterText = "";
            opts.readOnly_f = 1;

            if (op.setObj.textAlign)
                opts.textAlign = op.setObj.textAlign;


            comps[cname] = {name: "input", type: "input~text", opts: opts};
            var inputObj = comps[cname];

            var downFunc = function (obj) {
                var md = obj.kvObj.fatherMd;
                var inObj = md.compRefs["input"];
                if (inObj.opts.editValue)
                    inObj.opts.editValue = 0;
                else
                    inObj.opts.editValue = 1;
                md.mdClass.setValue(inObj.opts.editValue);
                var robj = {};
                robj.act = "valueChange";
                robj.value = inObj.opts.editValue;
                robj.kvObj = md.compRefs["input"];
                actionFunc(robj);

            };

            var cname = lyMap.get("body-1") + "~" + 1;
            var opts = {};
            opts.margin = 0;
            opts.baseColor = "#ccc";
            opts.borderWidth = 1;
            opts.innerTextColor = "#000";
            opts.innerText = "➕";
            opts.clickFunc = downFunc;
            comps[cname] = {name: "addButton", type: "button~sys", opts: opts};
        }
    }
}
//===========================================

