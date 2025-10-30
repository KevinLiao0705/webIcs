/*! Cheetah Grid v0.22.4 | license MIT */
(function(){
"use strict";

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (window) {
  (function webpackUniversalModuleDefinition(root, factory) {
    if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && (typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') exports["cheetahGrid"] = factory();else root["cheetahGrid"] = factory();
  })(window, function () {
    return (
      /******/
      function (modules) {
        // webpackBootstrap

        /******/
        // The module cache

        /******/
        var installedModules = {};
        /******/

        /******/
        // The require function

        /******/

        function __webpack_require__(moduleId) {
          /******/

          /******/
          // Check if module is in cache

          /******/
          if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
          }
          /******/
          // Create a new module (and put it into the cache)

          /******/


          var module = installedModules[moduleId] = {
            /******/
            i: moduleId,

            /******/
            l: false,

            /******/
            exports: {}
            /******/

          };
          /******/

          /******/
          // Execute the module function

          /******/

          modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
          /******/

          /******/
          // Flag the module as loaded

          /******/

          module.l = true;
          /******/

          /******/
          // Return the exports of the module

          /******/

          return module.exports;
          /******/
        }
        /******/

        /******/

        /******/
        // expose the modules object (__webpack_modules__)

        /******/


        __webpack_require__.m = modules;
        /******/

        /******/
        // expose the module cache

        /******/

        __webpack_require__.c = installedModules;
        /******/

        /******/
        // define getter function for harmony exports

        /******/

        __webpack_require__.d = function (exports, name, getter) {
          /******/
          if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
              enumerable: true,
              get: getter
            });
            /******/
          }
          /******/

        };
        /******/

        /******/
        // define __esModule on exports

        /******/


        __webpack_require__.r = function (exports) {
          /******/
          if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module'
            });
            /******/
          }
          /******/


          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          /******/
        };
        /******/

        /******/
        // create a fake namespace object

        /******/
        // mode & 1: value is a module id, require it

        /******/
        // mode & 2: merge all properties of value into the ns

        /******/
        // mode & 4: return value when already ns object

        /******/
        // mode & 8|1: behave like require

        /******/


        __webpack_require__.t = function (value, mode) {
          /******/
          if (mode & 1) value = __webpack_require__(value);
          /******/

          if (mode & 8) return value;
          /******/

          if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
          /******/

          var ns = Object.create(null);
          /******/

          __webpack_require__.r(ns);
          /******/


          Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
          });
          /******/

          if (mode & 2 && typeof value != 'string') for (var key in value) {
            __webpack_require__.d(ns, key, function (key) {
              return value[key];
            }.bind(null, key));
          }
          /******/

          return ns;
          /******/
        };
        /******/

        /******/
        // getDefaultExport function for compatibility with non-harmony modules

        /******/


        __webpack_require__.n = function (module) {
          /******/
          var getter = module && module.__esModule ?
          /******/
          function getDefault() {
            return module['default'];
          } :
          /******/
          function getModuleExports() {
            return module;
          };
          /******/

          __webpack_require__.d(getter, 'a', getter);
          /******/


          return getter;
          /******/
        };
        /******/

        /******/
        // Object.prototype.hasOwnProperty.call

        /******/


        __webpack_require__.o = function (object, property) {
          return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/

        /******/
        // __webpack_public_path__

        /******/


        __webpack_require__.p = "";
        /******/

        /******/

        /******/
        // Load entry module and return exports

        /******/

        return __webpack_require__(__webpack_require__.s = "./main.js");
        /******/
      }(
      /************************************************************************/

      /******/
      {
        /***/
        "../node_modules/cheetah-grid-icon-svg-loader/lib/index.js!../node_modules/material-design-icons/content/svg/production/ic_add_48px.svg":
        /*!*************************************************************************************************************************************!*\
          !*** ../node_modules/cheetah-grid-icon-svg-loader/lib!../node_modules/material-design-icons/content/svg/production/ic_add_48px.svg ***!
          \*************************************************************************************************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function node_modulesCheetahGridIconSvgLoaderLibIndexJsNode_modulesMaterialDesignIconsContentSvgProductionIc_add_48pxSvg(module, exports) {
          module.exports = {
            /*
            original svg
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z"/></svg>
            @ material-design-icons/content/svg/production/ic_add_48px.svg
            */
            d: 'M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z',
            width: 48,
            height: 48
          };
          /***/
        },

        /***/
        "../node_modules/cheetah-grid-icon-svg-loader/lib/index.js!../node_modules/material-design-icons/image/svg/production/ic_edit_48px.svg":
        /*!************************************************************************************************************************************!*\
          !*** ../node_modules/cheetah-grid-icon-svg-loader/lib!../node_modules/material-design-icons/image/svg/production/ic_edit_48px.svg ***!
          \************************************************************************************************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function node_modulesCheetahGridIconSvgLoaderLibIndexJsNode_modulesMaterialDesignIconsImageSvgProductionIc_edit_48pxSvg(module, exports) {
          module.exports = {
            /*
            original svg
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M6 34.5V42h7.5l22.13-22.13-7.5-7.5L6 34.5zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z"/></svg>
            @ material-design-icons/image/svg/production/ic_edit_48px.svg
            */
            d: 'M6 34.5V42h7.5l22.13-22.13-7.5-7.5L6 34.5zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z',
            width: 48,
            height: 48
          };
          /***/
        },

        /***/
        "../node_modules/cheetah-grid-icon-svg-loader/lib/index.js!../node_modules/material-design-icons/navigation/svg/production/ic_arrow_downward_48px.svg":
        /*!***************************************************************************************************************************************************!*\
          !*** ../node_modules/cheetah-grid-icon-svg-loader/lib!../node_modules/material-design-icons/navigation/svg/production/ic_arrow_downward_48px.svg ***!
          \***************************************************************************************************************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function node_modulesCheetahGridIconSvgLoaderLibIndexJsNode_modulesMaterialDesignIconsNavigationSvgProductionIc_arrow_downward_48pxSvg(module, exports) {
          module.exports = {
            /*
            original svg
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="#010101" d="M40 24l-2.82-2.82L26 32.34V8h-4v24.34L10.84 21.16 8 24l16 16 16-16z"/></svg>
            @ material-design-icons/navigation/svg/production/ic_arrow_downward_48px.svg
            */
            d: 'M40 24l-2.82-2.82L26 32.34V8h-4v24.34L10.84 21.16 8 24l16 16 16-16z',
            width: 48,
            height: 48
          };
          /***/
        },

        /***/
        "../node_modules/cheetah-grid-icon-svg-loader/lib/index.js!../node_modules/material-design-icons/navigation/svg/production/ic_arrow_upward_48px.svg":
        /*!*************************************************************************************************************************************************!*\
          !*** ../node_modules/cheetah-grid-icon-svg-loader/lib!../node_modules/material-design-icons/navigation/svg/production/ic_arrow_upward_48px.svg ***!
          \*************************************************************************************************************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function node_modulesCheetahGridIconSvgLoaderLibIndexJsNode_modulesMaterialDesignIconsNavigationSvgProductionIc_arrow_upward_48pxSvg(module, exports) {
          module.exports = {
            /*
            original svg
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M8 24l2.83 2.83L22 15.66V40h4V15.66l11.17 11.17L40 24 24 8 8 24z"/></svg>
            @ material-design-icons/navigation/svg/production/ic_arrow_upward_48px.svg
            */
            d: 'M8 24l2.83 2.83L22 15.66V40h4V15.66l11.17 11.17L40 24 24 8 8 24z',
            width: 48,
            height: 48
          };
          /***/
        },

        /***/
        "../node_modules/cheetah-grid-icon-svg-loader/lib/index.js!../node_modules/material-design-icons/toggle/svg/production/ic_star_24px.svg":
        /*!*************************************************************************************************************************************!*\
          !*** ../node_modules/cheetah-grid-icon-svg-loader/lib!../node_modules/material-design-icons/toggle/svg/production/ic_star_24px.svg ***!
          \*************************************************************************************************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function node_modulesCheetahGridIconSvgLoaderLibIndexJsNode_modulesMaterialDesignIconsToggleSvgProductionIc_star_24pxSvg(module, exports) {
          module.exports = {
            /*
            original svg
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            @ material-design-icons/toggle/svg/production/ic_star_24px.svg
            */
            d: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
            width: 24,
            height: 24
          };
          /***/
        },

        /***/
        "../node_modules/cheetah-grid-icon-svg-loader/lib/index.js!../node_modules/material-design-icons/toggle/svg/production/ic_star_border_24px.svg":
        /*!********************************************************************************************************************************************!*\
          !*** ../node_modules/cheetah-grid-icon-svg-loader/lib!../node_modules/material-design-icons/toggle/svg/production/ic_star_border_24px.svg ***!
          \********************************************************************************************************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function node_modulesCheetahGridIconSvgLoaderLibIndexJsNode_modulesMaterialDesignIconsToggleSvgProductionIc_star_border_24pxSvg(module, exports) {
          module.exports = {
            /*
            original svg
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
            @ material-design-icons/toggle/svg/production/ic_star_border_24px.svg
            */
            d: 'M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z',
            width: 24,
            height: 24
          };
          /***/
        },

        /***/
        "../node_modules/cheetah-grid-icon-svg-loader/lib/index.js!../node_modules/material-design-icons/toggle/svg/production/ic_star_half_24px.svg":
        /*!******************************************************************************************************************************************!*\
          !*** ../node_modules/cheetah-grid-icon-svg-loader/lib!../node_modules/material-design-icons/toggle/svg/production/ic_star_half_24px.svg ***!
          \******************************************************************************************************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function node_modulesCheetahGridIconSvgLoaderLibIndexJsNode_modulesMaterialDesignIconsToggleSvgProductionIc_star_half_24pxSvg(module, exports) {
          module.exports = {
            /*
            original svg
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
            @ material-design-icons/toggle/svg/production/ic_star_half_24px.svg
            */
            d: 'M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z',
            width: 24,
            height: 24
          };
          /***/
        },

        /***/
        "../node_modules/css-loader/index.js?minimize!../src/js/columns/action/internal/InlineInputElement.css":
        /*!****************************************************************************************************!*\
          !*** ../node_modules/css-loader?minimize!../src/js/columns/action/internal/InlineInputElement.css ***!
          \****************************************************************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function node_modulesCssLoaderIndexJsMinimizeSrcJsColumnsActionInternalInlineInputElementCss(module, exports, __webpack_require__) {
          exports = module.exports = __webpack_require__(
          /*! ../../../../../node_modules/css-loader/lib/css-base.js */
          "../node_modules/css-loader/lib/css-base.js")(false); // imports
          // module

          exports.push([module.i, "/* ms */\n.cheetah-grid__inline-input::-ms-clear {\n\tvisibility: hidden;\n}\n.cheetah-grid__inline-input {\n\tposition: absolute;\n\tbox-sizing: border-box;\n}\n", ""]); // exports

          /***/
        },

        /***/
        "../node_modules/css-loader/index.js?minimize!../src/js/columns/action/internal/InlineMenuElement.css":
        /*!***************************************************************************************************!*\
          !*** ../node_modules/css-loader?minimize!../src/js/columns/action/internal/InlineMenuElement.css ***!
          \***************************************************************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function node_modulesCssLoaderIndexJsMinimizeSrcJsColumnsActionInternalInlineMenuElementCss(module, exports, __webpack_require__) {
          exports = module.exports = __webpack_require__(
          /*! ../../../../../node_modules/css-loader/lib/css-base.js */
          "../node_modules/css-loader/lib/css-base.js")(false); // imports
          // module

          exports.push([module.i, ".cheetah-grid__inline-menu {\n\tposition: absolute;\n\tcolor: rgba(0, 0, 0, .87);\n\tbox-sizing: content-box;\n\tmargin: -1px auto auto -1px;\n\tpadding: 8px 0;\n\tbackground-color: #fafafa;\n\tlist-style-type: none;\n\tborder-radius: 2px;\n\tmax-height: calc(100vh - 40px);\n\toverflow-y: auto;\n}\n.cheetah-grid__inline-menu--hidden {\n\ttransform: scale(.9);\n\tbox-shadow: none;\n\topacity: 0;\n\tpointer-events: none;\n\ttransition: all 50ms ease-out;\n}\n.cheetah-grid__inline-menu--hidden * {\n\tpointer-events: none;\n}\n.cheetah-grid__inline-menu--shown {\n\ttransform: translateY(-7px);\n\tbox-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);\n\topacity: 1;\n\ttransition: all 150ms ease-out;\n}\n.cheetah-grid__inline-menu__menu-item {\n\theight: 100%;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-start;\n\toutline: none;\n\tcursor: pointer;\n\tposition: relative;\n\toverflow: hidden;\n\tpadding: 0 16px;\n}\n.cheetah-grid__inline-menu__menu-item--empty {\n\tcolor: rgba(0, 0, 0, .38);\n}\n.cheetah-grid__inline-menu__menu-item::before {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: -50%;\n\tleft: -50%;\n\twidth: 200%;\n\theight: 200%;\n\tbackground-color: #000;\n\topacity: 0;\n\tpointer-events: none;\n\ttransition: opacity 15ms linear;\n}\n.cheetah-grid__inline-menu__menu-item:hover::before {\n\topacity: .04;\n}\n.cheetah-grid__inline-menu__menu-item[data-select]::before {\n\topacity: .04;\n}\n.cheetah-grid__inline-menu__menu-item:focus::before {\n\topacity: .12;\n}\n", ""]); // exports

          /***/
        },

        /***/
        "../node_modules/css-loader/index.js?minimize!../src/js/columns/action/internal/SmallDialogInputElement.css":
        /*!*********************************************************************************************************!*\
          !*** ../node_modules/css-loader?minimize!../src/js/columns/action/internal/SmallDialogInputElement.css ***!
          \*********************************************************************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function node_modulesCssLoaderIndexJsMinimizeSrcJsColumnsActionInternalSmallDialogInputElementCss(module, exports, __webpack_require__) {
          exports = module.exports = __webpack_require__(
          /*! ../../../../../node_modules/css-loader/lib/css-base.js */
          "../node_modules/css-loader/lib/css-base.js")(false); // imports
          // module

          exports.push([module.i, "/* ms */\n.cheetah-grid__small-dialog-input__input::-ms-clear {\n\tvisibility: hidden;\n}\n\n@keyframes cheetah-grid__small-dialog-input--hidden-animation {\n\t0% {\n\t\topacity: 1;\n\t}\n\t99% {\n\t\topacity: 1;\n\t}\n\t100% {\n\t\topacity: 0;\n\t}\n}\n.cheetah-grid__small-dialog-input {\n\tposition: absolute;\n\tbox-sizing: content-box;\n\tmargin: -1px auto auto -1px;\n\tborder-radius: 3px;\n\tbackground-color: #fafafa;\n\ttransition: padding 150ms ease-out, box-shadow 150ms ease-out;\n}\n.cheetah-grid__small-dialog-input--hidden {\n\tbox-shadow: none;\n\tpadding: 0;\n\tpointer-events: none;\n\tanimation: cheetah-grid__small-dialog-input--hidden-animation  150ms ease-out;\n\topacity: 0;\n}\n.cheetah-grid__small-dialog-input--shown {\n\tbox-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);\n\tpadding: 8px 24px;\n}\n.cheetah-grid__small-dialog-input__input {\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tpadding: 3px 2px 0 4px;\n\tborder: none;\n\tborder-bottom: solid 1px rgba(0, 0, 0, .87);\n\toutline: none;\n\tbackground-color: transparent;\n\ttransition: all 300ms ease-out;\n}\n.cheetah-grid__small-dialog-input__input:focus {\n\tborder-bottom: solid 1px #2196f3;\n\tbox-shadow: 0 1px 0 0 #2196f3;\n}\n.cheetah-grid__small-dialog-input::after {\n\tcontent: '';\n\tfont-family: Roboto;\n\tfont-size: 12px;\n\tfont-size: .75rem;\n\tmin-height: 1em;\n\tline-height: 1;\n\tdisplay: block;\n\twidth: 100%;\n\tpadding-top: 8px;\n}\n.cheetah-grid__small-dialog-input.helper-text--right-justified::after {\n\ttext-align: right;\n}\n.cheetah-grid__small-dialog-input[data-helper-text]::after {\n\tcontent: attr(data-helper-text);\n\tcolor: rgba(0, 0, 0, .87);\n}\n.cheetah-grid__small-dialog-input[data-error-message] input {\n\tborder-bottom: solid 1px #ff1744;\n\tbox-shadow: 0 1px 0 0 #ff1744;\n}\n.cheetah-grid__small-dialog-input[data-error-message]::after {\n\tcontent: attr(data-error-message);\n\tcolor: #ff1744;\n\ttext-align: left;\n}\n", ""]); // exports

          /***/
        },

        /***/
        "../node_modules/css-loader/index.js?minimize!../src/js/columns/message/internal/ErrorMessageElement.css":
        /*!******************************************************************************************************!*\
          !*** ../node_modules/css-loader?minimize!../src/js/columns/message/internal/ErrorMessageElement.css ***!
          \******************************************************************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function node_modulesCssLoaderIndexJsMinimizeSrcJsColumnsMessageInternalErrorMessageElementCss(module, exports, __webpack_require__) {
          exports = module.exports = __webpack_require__(
          /*! ../../../../../node_modules/css-loader/lib/css-base.js */
          "../node_modules/css-loader/lib/css-base.js")(false); // imports
          // module

          exports.push([module.i, ".cheetah-grid__error-message-element {\n\tborder-top: solid 1px #ff1744;\n\tcolor: #ff1744;\n}\n", ""]); // exports

          /***/
        },

        /***/
        "../node_modules/css-loader/index.js?minimize!../src/js/columns/message/internal/MessageElement.css":
        /*!*************************************************************************************************!*\
          !*** ../node_modules/css-loader?minimize!../src/js/columns/message/internal/MessageElement.css ***!
          \*************************************************************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function node_modulesCssLoaderIndexJsMinimizeSrcJsColumnsMessageInternalMessageElementCss(module, exports, __webpack_require__) {
          exports = module.exports = __webpack_require__(
          /*! ../../../../../node_modules/css-loader/lib/css-base.js */
          "../node_modules/css-loader/lib/css-base.js")(false); // imports
          // module

          exports.push([module.i, ".cheetah-grid__message-element {\n\tposition: absolute;\n\tmargin-top: -2px;\n\tbox-sizing: border-box;\n\tborder-radius: 0 0 3px 3px;\n\tbackground-color: rgba(250, 250, 250, .85);\n\tpadding: 8px 2px;\n\tpointer-events: none;\n\tuser-select: none;\n\tborder-top: solid 1px rgba(0, 0, 0, .87);\n\tcolor: rgba(0, 0, 0, .87);\n}\n.cheetah-grid__message-element--hidden {\n\tdisplay: none;\n}\n.cheetah-grid__message-element--shown {\n\tdisplay: block;\n}\n.cheetah-grid__message-element__message {\n\tfont-family: Roboto;\n\tfont-size: 12px;\n\tfont-size: .75rem;\n\tmin-height: 1em;\n\tline-height: 1;\n\tdisplay: block;\n\twidth: 100%;\n}\n", ""]); // exports

          /***/
        },

        /***/
        "../node_modules/css-loader/index.js?minimize!../src/js/columns/message/internal/WarningMessageElement.css":
        /*!********************************************************************************************************!*\
          !*** ../node_modules/css-loader?minimize!../src/js/columns/message/internal/WarningMessageElement.css ***!
          \********************************************************************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function node_modulesCssLoaderIndexJsMinimizeSrcJsColumnsMessageInternalWarningMessageElementCss(module, exports, __webpack_require__) {
          exports = module.exports = __webpack_require__(
          /*! ../../../../../node_modules/css-loader/lib/css-base.js */
          "../node_modules/css-loader/lib/css-base.js")(false); // imports
          // module

          exports.push([module.i, ".cheetah-grid__warning-message-element {\n\tborder-top: solid 1px #dd2c00;\n\tcolor: #dd2c00;\n}\n", ""]); // exports

          /***/
        },

        /***/
        "../node_modules/css-loader/index.js?minimize!../src/js/internal/style.css":
        /*!************************************************************************!*\
          !*** ../node_modules/css-loader?minimize!../src/js/internal/style.css ***!
          \************************************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function node_modulesCssLoaderIndexJsMinimizeSrcJsInternalStyleCss(module, exports, __webpack_require__) {
          exports = module.exports = __webpack_require__(
          /*! ../../../node_modules/css-loader/lib/css-base.js */
          "../node_modules/css-loader/lib/css-base.js")(false); // imports
          // module

          exports.push([module.i, "/**\n * core styles\n */\n.cheetah-grid .grid-scrollable {\n\theight: 100%;\n\twidth: 100%;\n\tposition: absolute;\n\toverflow: scroll;\n}\n.cheetah-grid .grid-scroll-end-point {\n\topacity: 0;\n\tposition: relative;\n}\n.cheetah-grid {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n}\n.cheetah-grid > canvas {\n\tposition: absolute;\n\twidth: 0;\n\theight: 0;\n}\n.cheetah-grid .grid-focus-control {\n\tposition: relative !important;\n\twidth: 1px;\n\theight: 1px;\n\topacity: 0;\n\tpadding: 0;\n\tmargin: 0;\n\tbox-sizing: border-box;\n\tpointer-events: none;\n\tmax-width: 0;\n\tmax-height: 0;\n\tfloat: none !important;\n}\n.cheetah-grid input.grid-focus-control::-ms-clear {\n\tvisibility: hidden;\n}\n.cheetah-grid input.grid-focus-control.composition {\n\topacity: 1;\n\tmax-width: none;\n\tmax-height: none;\n}\n", ""]); // exports

          /***/
        },

        /***/
        "../node_modules/css-loader/index.js?minimize!../src/js/tooltip/internal/TooltipElement.css":
        /*!*****************************************************************************************!*\
          !*** ../node_modules/css-loader?minimize!../src/js/tooltip/internal/TooltipElement.css ***!
          \*****************************************************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function node_modulesCssLoaderIndexJsMinimizeSrcJsTooltipInternalTooltipElementCss(module, exports, __webpack_require__) {
          exports = module.exports = __webpack_require__(
          /*! ../../../../node_modules/css-loader/lib/css-base.js */
          "../node_modules/css-loader/lib/css-base.js")(false); // imports
          // module

          exports.push([module.i, "@keyframes cheetah-grid__tooltip-element--shown-animation {\n\t0% {\n\t\topacity: 0;\n\t\ttransform: scale(.8) translateX(-60%);\n\t}\n\t100% {\n\t\topacity: 1;\n\t\ttransform: scale(1) translateX(-50%);\n\t}\n}\n.cheetah-grid__tooltip-element {\n\tposition: absolute;\n\tbox-sizing: border-box;\n\tborder-radius: 3px;\n\tbackground-color: #232f34;\n\tpadding: 8px;\n\tpointer-events: none;\n\tuser-select: none;\n\tcolor: #fff;\n}\n.cheetah-grid__tooltip-element--hidden {\n\topacity: 0;\n\ttransform: translateX(-50%);\n\ttransition: opacity 75ms linear;\n}\n.cheetah-grid__tooltip-element--shown {\n\topacity: 1;\n\ttransform: translateX(-50%);\n\tanimation: cheetah-grid__tooltip-element--shown-animation 150ms ease-out;\n}\n.cheetah-grid__tooltip-element__content {\n\tfont-family: Roboto;\n\tfont-size: 12px;\n\tfont-size: .75rem;\n\tmin-height: 1em;\n\tline-height: 1;\n\twidth: 100%;\n\tdisplay: block;\n\twhite-space: pre-wrap;\n\tmargin: 0;\n\tbox-sizing: border-box;\n}\n", ""]); // exports

          /***/
        },

        /***/
        "../node_modules/css-loader/lib/css-base.js":
        /*!**************************************************!*\
          !*** ../node_modules/css-loader/lib/css-base.js ***!
          \**************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function node_modulesCssLoaderLibCssBaseJs(module, exports) {
          /*
          	MIT License http://www.opensource.org/licenses/mit-license.php
          	Author Tobias Koppers @sokra
          */
          // css base code, injected by the css-loader
          module.exports = function (useSourceMap) {
            var list = []; // return the list of modules as css string

            list.toString = function toString() {
              return this.map(function (item) {
                var content = cssWithMappingToString(item, useSourceMap);

                if (item[2]) {
                  return "@media " + item[2] + "{" + content + "}";
                } else {
                  return content;
                }
              }).join("");
            }; // import a list of modules into the list


            list.i = function (modules, mediaQuery) {
              if (typeof modules === "string") modules = [[null, modules, ""]];
              var alreadyImportedModules = {};

              for (var i = 0; i < this.length; i++) {
                var id = this[i][0];
                if (typeof id === "number") alreadyImportedModules[id] = true;
              }

              for (i = 0; i < modules.length; i++) {
                var item = modules[i]; // skip already imported module
                // this implementation is not 100% perfect for weird media query combinations
                //  when a module is imported multiple times with different media queries.
                //  I hope this will never occur (Hey this way we have smaller bundles)

                if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                  if (mediaQuery && !item[2]) {
                    item[2] = mediaQuery;
                  } else if (mediaQuery) {
                    item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                  }

                  list.push(item);
                }
              }
            };

            return list;
          };

          function cssWithMappingToString(item, useSourceMap) {
            var content = item[1] || '';
            var cssMapping = item[3];

            if (!cssMapping) {
              return content;
            }

            if (useSourceMap && typeof btoa === 'function') {
              var sourceMapping = toComment(cssMapping);
              var sourceURLs = cssMapping.sources.map(function (source) {
                return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
              });
              return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
            }

            return [content].join('\n');
          } // Adapted from convert-source-map (MIT)


          function toComment(sourceMap) {
            // eslint-disable-next-line no-undef
            var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
            var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
            return '/*# ' + data + ' */';
          }
          /***/

        },

        /***/
        "../node_modules/style-loader/lib/addStyles.js":
        /*!*****************************************************!*\
          !*** ../node_modules/style-loader/lib/addStyles.js ***!
          \*****************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function node_modulesStyleLoaderLibAddStylesJs(module, exports, __webpack_require__) {
          /*
          	MIT License http://www.opensource.org/licenses/mit-license.php
          	Author Tobias Koppers @sokra
          */
          var stylesInDom = {};

          var memoize = function memoize(fn) {
            var memo;
            return function () {
              if (typeof memo === "undefined") memo = fn.apply(this, arguments);
              return memo;
            };
          };

          var isOldIE = memoize(function () {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            return window && document && document.all && !window.atob;
          });

          var getTarget = function getTarget(target, parent) {
            if (parent) {
              return parent.querySelector(target);
            }

            return document.querySelector(target);
          };

          var getElement = function (fn) {
            var memo = {};
            return function (target, parent) {
              // If passing function in options, then use it for resolve "head" element.
              // Useful for Shadow Root style i.e
              // {
              //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
              // }
              if (typeof target === 'function') {
                return target();
              }

              if (typeof memo[target] === "undefined") {
                var styleTarget = getTarget.call(this, target, parent); // Special case to return head of iframe instead of iframe itself

                if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                  try {
                    // This will throw an exception if access to iframe is blocked
                    // due to cross-origin restrictions
                    styleTarget = styleTarget.contentDocument.head;
                  } catch (e) {
                    styleTarget = null;
                  }
                }

                memo[target] = styleTarget;
              }

              return memo[target];
            };
          }();

          var singleton = null;
          var singletonCounter = 0;
          var stylesInsertedAtTop = [];

          var fixUrls = __webpack_require__(
          /*! ./urls */
          "../node_modules/style-loader/lib/urls.js");

          module.exports = function (list, options) {
            if (typeof DEBUG !== "undefined" && DEBUG) {
              if ((typeof document === "undefined" ? "undefined" : _typeof(document)) !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
            }

            options = options || {};
            options.attrs = _typeof(options.attrs) === "object" ? options.attrs : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
            // tags it will allow on a page

            if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE(); // By default, add <style> tags to the <head> element

            if (!options.insertInto) options.insertInto = "head"; // By default, add <style> tags to the bottom of the target

            if (!options.insertAt) options.insertAt = "bottom";
            var styles = listToStyles(list, options);
            addStylesToDom(styles, options);
            return function update(newList) {
              var mayRemove = [];

              for (var i = 0; i < styles.length; i++) {
                var item = styles[i];
                var domStyle = stylesInDom[item.id];
                domStyle.refs--;
                mayRemove.push(domStyle);
              }

              if (newList) {
                var newStyles = listToStyles(newList, options);
                addStylesToDom(newStyles, options);
              }

              for (var i = 0; i < mayRemove.length; i++) {
                var domStyle = mayRemove[i];

                if (domStyle.refs === 0) {
                  for (var j = 0; j < domStyle.parts.length; j++) {
                    domStyle.parts[j]();
                  }

                  delete stylesInDom[domStyle.id];
                }
              }
            };
          };

          function addStylesToDom(styles, options) {
            for (var i = 0; i < styles.length; i++) {
              var item = styles[i];
              var domStyle = stylesInDom[item.id];

              if (domStyle) {
                domStyle.refs++;

                for (var j = 0; j < domStyle.parts.length; j++) {
                  domStyle.parts[j](item.parts[j]);
                }

                for (; j < item.parts.length; j++) {
                  domStyle.parts.push(addStyle(item.parts[j], options));
                }
              } else {
                var parts = [];

                for (var j = 0; j < item.parts.length; j++) {
                  parts.push(addStyle(item.parts[j], options));
                }

                stylesInDom[item.id] = {
                  id: item.id,
                  refs: 1,
                  parts: parts
                };
              }
            }
          }

          function listToStyles(list, options) {
            var styles = [];
            var newStyles = {};

            for (var i = 0; i < list.length; i++) {
              var item = list[i];
              var id = options.base ? item[0] + options.base : item[0];
              var css = item[1];
              var media = item[2];
              var sourceMap = item[3];
              var part = {
                css: css,
                media: media,
                sourceMap: sourceMap
              };
              if (!newStyles[id]) styles.push(newStyles[id] = {
                id: id,
                parts: [part]
              });else newStyles[id].parts.push(part);
            }

            return styles;
          }

          function insertStyleElement(options, style) {
            var target = getElement(options.insertInto);

            if (!target) {
              throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            }

            var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

            if (options.insertAt === "top") {
              if (!lastStyleElementInsertedAtTop) {
                target.insertBefore(style, target.firstChild);
              } else if (lastStyleElementInsertedAtTop.nextSibling) {
                target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
              } else {
                target.appendChild(style);
              }

              stylesInsertedAtTop.push(style);
            } else if (options.insertAt === "bottom") {
              target.appendChild(style);
            } else if (_typeof(options.insertAt) === "object" && options.insertAt.before) {
              var nextSibling = getElement(options.insertAt.before, target);
              target.insertBefore(style, nextSibling);
            } else {
              throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            }
          }

          function removeStyleElement(style) {
            if (style.parentNode === null) return false;
            style.parentNode.removeChild(style);
            var idx = stylesInsertedAtTop.indexOf(style);

            if (idx >= 0) {
              stylesInsertedAtTop.splice(idx, 1);
            }
          }

          function createStyleElement(options) {
            var style = document.createElement("style");

            if (options.attrs.type === undefined) {
              options.attrs.type = "text/css";
            }

            if (options.attrs.nonce === undefined) {
              var nonce = getNonce();

              if (nonce) {
                options.attrs.nonce = nonce;
              }
            }

            addAttrs(style, options.attrs);
            insertStyleElement(options, style);
            return style;
          }

          function createLinkElement(options) {
            var link = document.createElement("link");

            if (options.attrs.type === undefined) {
              options.attrs.type = "text/css";
            }

            options.attrs.rel = "stylesheet";
            addAttrs(link, options.attrs);
            insertStyleElement(options, link);
            return link;
          }

          function addAttrs(el, attrs) {
            Object.keys(attrs).forEach(function (key) {
              el.setAttribute(key, attrs[key]);
            });
          }

          function getNonce() {
            if (false) {}

            return __webpack_require__.nc;
          }

          function addStyle(obj, options) {
            var style, update, remove, result; // If a transform function was defined, run it on the css

            if (options.transform && obj.css) {
              result = typeof options.transform === 'function' ? options.transform(obj.css) : options.transform["default"](obj.css);

              if (result) {
                // If transform returns a value, use that instead of the original css.
                // This allows running runtime transformations on the css.
                obj.css = result;
              } else {
                // If the transform function returns a falsy value, don't add this css.
                // This allows conditional loading of css
                return function () {// noop
                };
              }
            }

            if (options.singleton) {
              var styleIndex = singletonCounter++;
              style = singleton || (singleton = createStyleElement(options));
              update = applyToSingletonTag.bind(null, style, styleIndex, false);
              remove = applyToSingletonTag.bind(null, style, styleIndex, true);
            } else if (obj.sourceMap && typeof URL === "function" && typeof URL.createObjectURL === "function" && typeof URL.revokeObjectURL === "function" && typeof Blob === "function" && typeof btoa === "function") {
              style = createLinkElement(options);
              update = updateLink.bind(null, style, options);

              remove = function remove() {
                removeStyleElement(style);
                if (style.href) URL.revokeObjectURL(style.href);
              };
            } else {
              style = createStyleElement(options);
              update = applyToTag.bind(null, style);

              remove = function remove() {
                removeStyleElement(style);
              };
            }

            update(obj);
            return function updateStyle(newObj) {
              if (newObj) {
                if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                  return;
                }

                update(obj = newObj);
              } else {
                remove();
              }
            };
          }

          var replaceText = function () {
            var textStore = [];
            return function (index, replacement) {
              textStore[index] = replacement;
              return textStore.filter(Boolean).join('\n');
            };
          }();

          function applyToSingletonTag(style, index, remove, obj) {
            var css = remove ? "" : obj.css;

            if (style.styleSheet) {
              style.styleSheet.cssText = replaceText(index, css);
            } else {
              var cssNode = document.createTextNode(css);
              var childNodes = style.childNodes;
              if (childNodes[index]) style.removeChild(childNodes[index]);

              if (childNodes.length) {
                style.insertBefore(cssNode, childNodes[index]);
              } else {
                style.appendChild(cssNode);
              }
            }
          }

          function applyToTag(style, obj) {
            var css = obj.css;
            var media = obj.media;

            if (media) {
              style.setAttribute("media", media);
            }

            if (style.styleSheet) {
              style.styleSheet.cssText = css;
            } else {
              while (style.firstChild) {
                style.removeChild(style.firstChild);
              }

              style.appendChild(document.createTextNode(css));
            }
          }

          function updateLink(link, options, obj) {
            var css = obj.css;
            var sourceMap = obj.sourceMap;
            /*
            	If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
            	and there is no publicPath defined then lets turn convertToAbsoluteUrls
            	on by default.  Otherwise default to the convertToAbsoluteUrls option
            	directly
            */

            var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

            if (options.convertToAbsoluteUrls || autoFixUrls) {
              css = fixUrls(css);
            }

            if (sourceMap) {
              // http://stackoverflow.com/a/26603875
              css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
            }

            var blob = new Blob([css], {
              type: "text/css"
            });
            var oldSrc = link.href;
            link.href = URL.createObjectURL(blob);
            if (oldSrc) URL.revokeObjectURL(oldSrc);
          }
          /***/

        },

        /***/
        "../node_modules/style-loader/lib/urls.js":
        /*!************************************************!*\
          !*** ../node_modules/style-loader/lib/urls.js ***!
          \************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function node_modulesStyleLoaderLibUrlsJs(module, exports) {
          /**
           * When source maps are enabled, `style-loader` uses a link element with a data-uri to
           * embed the css on the page. This breaks all relative urls because now they are relative to a
           * bundle instead of the current page.
           *
           * One solution is to only use full urls, but that may be impossible.
           *
           * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
           *
           * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
           *
           */
          module.exports = function (css) {
            // get current location
            var location = typeof window !== "undefined" && window.location;

            if (!location) {
              throw new Error("fixUrls requires window.location");
            } // blank or null?


            if (!css || typeof css !== "string") {
              return css;
            }

            var baseUrl = location.protocol + "//" + location.host;
            var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

            /*
            This regular expression is just a way to recursively match brackets within
            a string.
            	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
               (  = Start a capturing group
                 (?:  = Start a non-capturing group
                     [^)(]  = Match anything that isn't a parentheses
                     |  = OR
                     \(  = Match a start parentheses
                         (?:  = Start another non-capturing groups
                             [^)(]+  = Match anything that isn't a parentheses
                             |  = OR
                             \(  = Match a start parentheses
                                 [^)(]*  = Match anything that isn't a parentheses
                             \)  = Match a end parentheses
                         )  = End Group
                         *\) = Match anything and then a close parens
                     )  = Close non-capturing group
                     *  = Match anything
                  )  = Close capturing group
             \)  = Match a close parens
            	 /gi  = Get all matches, not the first.  Be case insensitive.
             */

            var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
              // strip quotes (if they exist)
              var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
                return $1;
              }).replace(/^'(.*)'$/, function (o, $1) {
                return $1;
              }); // already a full url? no change

              if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
                return fullMatch;
              } // convert the url to a full url


              var newUrl;

              if (unquotedOrigUrl.indexOf("//") === 0) {
                //TODO: should we add protocol?
                newUrl = unquotedOrigUrl;
              } else if (unquotedOrigUrl.indexOf("/") === 0) {
                // path should be relative to the base url
                newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
              } else {
                // path should be relative to current directory
                newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
              } // send back the fixed url(...)


              return "url(" + JSON.stringify(newUrl) + ")";
            }); // send back the fixed css

            return fixedCss;
          };
          /***/

        },

        /***/
        "../node_modules/webpack/buildin/global.js":
        /*!*************************************************!*\
          !*** ../node_modules/webpack/buildin/global.js ***!
          \*************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function node_modulesWebpackBuildinGlobalJs(module, exports) {
          var g; // This works in non-strict mode

          g = function () {
            return this;
          }();

          try {
            // This works if eval is allowed (see CSP)
            g = g || new Function("return this")();
          } catch (e) {
            // This works if the window reference is available
            if (_typeof(window) === "object") g = window;
          } // g can still be undefined, but nothing to do about it...
          // We return undefined, instead of nothing here, so it's
          // easier to handle this case. if(!global) { ...}


          module.exports = g;
          /***/
        },

        /***/
        "../src/js/columns/action/internal/InlineInputElement.css":
        /*!****************************************************************!*\
          !*** ../src/js/columns/action/internal/InlineInputElement.css ***!
          \****************************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function srcJsColumnsActionInternalInlineInputElementCss(module, exports, __webpack_require__) {
          var content = __webpack_require__(
          /*! !../../../../../node_modules/css-loader?minimize!./InlineInputElement.css */
          "../node_modules/css-loader/index.js?minimize!../src/js/columns/action/internal/InlineInputElement.css");

          if (typeof content === 'string') content = [[module.i, content, '']];
          var transform;
          var insertInto;
          var options = {
            "hmr": true
          };
          options.transform = transform;
          options.insertInto = undefined;

          var update = __webpack_require__(
          /*! ../../../../../node_modules/style-loader/lib/addStyles.js */
          "../node_modules/style-loader/lib/addStyles.js")(content, options);

          if (content.locals) module.exports = content.locals;

          if (false) {}
          /***/

        },

        /***/
        "../src/js/columns/action/internal/InlineMenuElement.css":
        /*!***************************************************************!*\
          !*** ../src/js/columns/action/internal/InlineMenuElement.css ***!
          \***************************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function srcJsColumnsActionInternalInlineMenuElementCss(module, exports, __webpack_require__) {
          var content = __webpack_require__(
          /*! !../../../../../node_modules/css-loader?minimize!./InlineMenuElement.css */
          "../node_modules/css-loader/index.js?minimize!../src/js/columns/action/internal/InlineMenuElement.css");

          if (typeof content === 'string') content = [[module.i, content, '']];
          var transform;
          var insertInto;
          var options = {
            "hmr": true
          };
          options.transform = transform;
          options.insertInto = undefined;

          var update = __webpack_require__(
          /*! ../../../../../node_modules/style-loader/lib/addStyles.js */
          "../node_modules/style-loader/lib/addStyles.js")(content, options);

          if (content.locals) module.exports = content.locals;

          if (false) {}
          /***/

        },

        /***/
        "../src/js/columns/action/internal/SmallDialogInputElement.css":
        /*!*********************************************************************!*\
          !*** ../src/js/columns/action/internal/SmallDialogInputElement.css ***!
          \*********************************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function srcJsColumnsActionInternalSmallDialogInputElementCss(module, exports, __webpack_require__) {
          var content = __webpack_require__(
          /*! !../../../../../node_modules/css-loader?minimize!./SmallDialogInputElement.css */
          "../node_modules/css-loader/index.js?minimize!../src/js/columns/action/internal/SmallDialogInputElement.css");

          if (typeof content === 'string') content = [[module.i, content, '']];
          var transform;
          var insertInto;
          var options = {
            "hmr": true
          };
          options.transform = transform;
          options.insertInto = undefined;

          var update = __webpack_require__(
          /*! ../../../../../node_modules/style-loader/lib/addStyles.js */
          "../node_modules/style-loader/lib/addStyles.js")(content, options);

          if (content.locals) module.exports = content.locals;

          if (false) {}
          /***/

        },

        /***/
        "../src/js/columns/message/internal/ErrorMessageElement.css":
        /*!******************************************************************!*\
          !*** ../src/js/columns/message/internal/ErrorMessageElement.css ***!
          \******************************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function srcJsColumnsMessageInternalErrorMessageElementCss(module, exports, __webpack_require__) {
          var content = __webpack_require__(
          /*! !../../../../../node_modules/css-loader?minimize!./ErrorMessageElement.css */
          "../node_modules/css-loader/index.js?minimize!../src/js/columns/message/internal/ErrorMessageElement.css");

          if (typeof content === 'string') content = [[module.i, content, '']];
          var transform;
          var insertInto;
          var options = {
            "hmr": true
          };
          options.transform = transform;
          options.insertInto = undefined;

          var update = __webpack_require__(
          /*! ../../../../../node_modules/style-loader/lib/addStyles.js */
          "../node_modules/style-loader/lib/addStyles.js")(content, options);

          if (content.locals) module.exports = content.locals;

          if (false) {}
          /***/

        },

        /***/
        "../src/js/columns/message/internal/MessageElement.css":
        /*!*************************************************************!*\
          !*** ../src/js/columns/message/internal/MessageElement.css ***!
          \*************************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function srcJsColumnsMessageInternalMessageElementCss(module, exports, __webpack_require__) {
          var content = __webpack_require__(
          /*! !../../../../../node_modules/css-loader?minimize!./MessageElement.css */
          "../node_modules/css-loader/index.js?minimize!../src/js/columns/message/internal/MessageElement.css");

          if (typeof content === 'string') content = [[module.i, content, '']];
          var transform;
          var insertInto;
          var options = {
            "hmr": true
          };
          options.transform = transform;
          options.insertInto = undefined;

          var update = __webpack_require__(
          /*! ../../../../../node_modules/style-loader/lib/addStyles.js */
          "../node_modules/style-loader/lib/addStyles.js")(content, options);

          if (content.locals) module.exports = content.locals;

          if (false) {}
          /***/

        },

        /***/
        "../src/js/columns/message/internal/WarningMessageElement.css":
        /*!********************************************************************!*\
          !*** ../src/js/columns/message/internal/WarningMessageElement.css ***!
          \********************************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function srcJsColumnsMessageInternalWarningMessageElementCss(module, exports, __webpack_require__) {
          var content = __webpack_require__(
          /*! !../../../../../node_modules/css-loader?minimize!./WarningMessageElement.css */
          "../node_modules/css-loader/index.js?minimize!../src/js/columns/message/internal/WarningMessageElement.css");

          if (typeof content === 'string') content = [[module.i, content, '']];
          var transform;
          var insertInto;
          var options = {
            "hmr": true
          };
          options.transform = transform;
          options.insertInto = undefined;

          var update = __webpack_require__(
          /*! ../../../../../node_modules/style-loader/lib/addStyles.js */
          "../node_modules/style-loader/lib/addStyles.js")(content, options);

          if (content.locals) module.exports = content.locals;

          if (false) {}
          /***/

        },

        /***/
        "../src/js/internal/style.css":
        /*!************************************!*\
          !*** ../src/js/internal/style.css ***!
          \************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function srcJsInternalStyleCss(module, exports, __webpack_require__) {
          var content = __webpack_require__(
          /*! !../../../node_modules/css-loader?minimize!./style.css */
          "../node_modules/css-loader/index.js?minimize!../src/js/internal/style.css");

          if (typeof content === 'string') content = [[module.i, content, '']];
          var transform;
          var insertInto;
          var options = {
            "hmr": true
          };
          options.transform = transform;
          options.insertInto = undefined;

          var update = __webpack_require__(
          /*! ../../../node_modules/style-loader/lib/addStyles.js */
          "../node_modules/style-loader/lib/addStyles.js")(content, options);

          if (content.locals) module.exports = content.locals;

          if (false) {}
          /***/

        },

        /***/
        "../src/js/tooltip/internal/TooltipElement.css":
        /*!*****************************************************!*\
          !*** ../src/js/tooltip/internal/TooltipElement.css ***!
          \*****************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function srcJsTooltipInternalTooltipElementCss(module, exports, __webpack_require__) {
          var content = __webpack_require__(
          /*! !../../../../node_modules/css-loader?minimize!./TooltipElement.css */
          "../node_modules/css-loader/index.js?minimize!../src/js/tooltip/internal/TooltipElement.css");

          if (typeof content === 'string') content = [[module.i, content, '']];
          var transform;
          var insertInto;
          var options = {
            "hmr": true
          };
          options.transform = transform;
          options.insertInto = undefined;

          var update = __webpack_require__(
          /*! ../../../../node_modules/style-loader/lib/addStyles.js */
          "../node_modules/style-loader/lib/addStyles.js")(content, options);

          if (content.locals) module.exports = content.locals;

          if (false) {}
          /***/

        },

        /***/
        "./GridCanvasHelper.js":
        /*!*****************************!*\
          !*** ./GridCanvasHelper.js ***!
          \*****************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function GridCanvasHelperJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var calc = __importStar(__webpack_require__(
          /*! ./internal/calc */
          "./internal/calc.js"));

          var canvashelper = __importStar(__webpack_require__(
          /*! ./tools/canvashelper */
          "./tools/canvashelper.js"));

          var fonts = __importStar(__webpack_require__(
          /*! ./internal/fonts */
          "./internal/fonts.js"));

          var inlineUtils = __importStar(__webpack_require__(
          /*! ./element/inlines */
          "./element/inlines.js"));

          var themes = __importStar(__webpack_require__(
          /*! ./themes */
          "./themes.js"));

          var color_1 = __webpack_require__(
          /*! ./internal/color */
          "./internal/color.js");

          var canvases_1 = __webpack_require__(
          /*! ./internal/canvases */
          "./internal/canvases.js");

          var utils_1 = __webpack_require__(
          /*! ./internal/utils */
          "./internal/utils.js");

          var InlineDrawer_1 = __webpack_require__(
          /*! ./element/InlineDrawer */
          "./element/InlineDrawer.js");

          var Rect_1 = __webpack_require__(
          /*! ./internal/Rect */
          "./internal/Rect.js");

          var _toBoxArray = utils_1.style.toBoxArray;
          var INLINE_ELLIPSIS = inlineUtils.of("\u2026");

          function invalidateCell(context, grid) {
            var col = context.col,
                row = context.row;
            grid.invalidateCell(col, row);
          }

          function _getColor(color, col, row, grid, context) {
            return utils_1.getOrApply(color, {
              col: col,
              row: row,
              grid: grid,
              context: context
            });
          }

          function getFont(font, col, row, grid, context) {
            if (font == null) {
              return undefined;
            }

            return utils_1.getOrApply(font, {
              col: col,
              row: row,
              grid: grid,
              context: context
            });
          }

          function _getThemeColor(grid) {
            for (var _len = arguments.length, names = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              names[_key - 1] = arguments[_key];
            }

            var gridThemeColor = utils_1.getChainSafe.apply(utils_1, [grid.theme].concat(names));

            if (!utils_1.isDef(gridThemeColor)) {
              // use default theme
              return utils_1.getChainSafe.apply(utils_1, [themes.getDefault()].concat(names));
            }

            if (typeof gridThemeColor !== "function") {
              return gridThemeColor;
            }

            var defaultThemeColor; // eslint-disable-next-line @typescript-eslint/no-explicit-any

            return function (args) {
              var color = gridThemeColor(args);

              if (utils_1.isDef(color)) {
                // use grid theme
                return color;
              } // use default theme


              defaultThemeColor = defaultThemeColor || utils_1.getChainSafe.apply(utils_1, [themes.getDefault()].concat(names));
              return utils_1.getOrApply(defaultThemeColor, args); // eslint-disable-next-line @typescript-eslint/no-explicit-any
            };
          }

          function _testFontLoad(font, value, context, grid) {
            if (font) {
              if (!fonts.check(font, value)) {
                fonts.load(font, value, function () {
                  return invalidateCell(context, grid);
                });
                return false;
              }
            }

            return true;
          }

          function drawInlines(ctx, inlines, rect, offset, offsetTop, offsetBottom, col, row, grid) {
            function drawInline(inline, offsetLeft, offsetRight) {
              if (inline.canDraw()) {
                ctx.save();

                try {
                  ctx.fillStyle = _getColor(inline.color() || ctx.fillStyle, col, row, grid, ctx);
                  ctx.font = inline.font() || ctx.font;
                  inline.draw({
                    ctx: ctx,
                    canvashelper: canvashelper,
                    rect: rect,
                    offset: offset,
                    offsetLeft: offsetLeft,
                    offsetRight: offsetRight,
                    offsetTop: offsetTop,
                    offsetBottom: offsetBottom
                  });
                } finally {
                  ctx.restore();
                }
              } else {
                inline.onReady(function () {
                  return grid.invalidateCell(col, row);
                }); //noop
              }
            }

            if (inlines.length === 1) {
              //1件の場合は幅計算が不要なため分岐
              var inline = inlines[0];
              drawInline(inline, 0, 0);
            } else {
              var inlineWidths = inlines.map(function (inline) {
                return (inline.width({
                  ctx: ctx
                }) || 0) - 0;
              });
              var offsetRight = inlineWidths.reduce(function (a, b) {
                return a + b;
              });
              var offsetLeft = 0;
              inlines.forEach(function (inline, index) {
                var inlineWidth = inlineWidths[index];
                offsetRight -= inlineWidth;
                drawInline(inline, offsetLeft, offsetRight);
                offsetLeft += inlineWidth;
              });
            }
          }

          function buildInlines(icons, inline) {
            return inlineUtils.buildInlines(icons, inline || "");
          }

          function inlineToString(inline) {
            return inlineUtils.string(inline);
          }

          function getOverflowInline(textOverflow) {
            if (!isAllowOverflow(textOverflow) || textOverflow === "ellipsis") {
              return INLINE_ELLIPSIS;
            }

            textOverflow = textOverflow.trim();

            if (textOverflow.length === 1) {
              return inlineUtils.of(textOverflow[0]);
            }

            return INLINE_ELLIPSIS;
          }

          function isAllowOverflow(textOverflow) {
            return Boolean(textOverflow && textOverflow !== "clip" && typeof textOverflow === "string");
          }

          function getOverflowInlinesIndex(ctx, inlines, width) {
            var maxWidth = width - 3;
            /*buffer*/

            var lineWidth = 0;

            for (var i = 0; i < inlines.length; i++) {
              var inline = inlines[i];
              var inlineWidth = (inline.width({
                ctx: ctx
              }) || 0) - 0;

              if (lineWidth + inlineWidth > maxWidth) {
                return {
                  index: i,
                  lineWidth: lineWidth,
                  remWidth: maxWidth - lineWidth
                };
              }

              lineWidth += inlineWidth;
            }

            return null;
          }

          function isOverflowInlines(ctx, inlines, width) {
            return !!getOverflowInlinesIndex(ctx, inlines, width);
          }

          function breakWidthInlines(ctx, inlines, width) {
            var indexData = getOverflowInlinesIndex(ctx, inlines, width);

            if (!indexData) {
              return {
                beforeInlines: inlines,
                overflow: false,
                afterInlines: []
              };
            }

            var index = indexData.index,
                remWidth = indexData.remWidth;
            var inline = inlines[index];
            var beforeInlines = inlines.slice(0, index);
            var afterInlines = [];

            if (inline.canBreak()) {
              var _inline$breakWord = inline.breakWord(ctx, remWidth),
                  before = _inline$breakWord.before,
                  after = _inline$breakWord.after;

              if (!before && !beforeInlines.length) {
                var _inline$breakAll = inline.breakAll(ctx, remWidth);

                before = _inline$breakAll.before;
                after = _inline$breakAll.after;
              }

              if (!before && !beforeInlines.length) {
                // Always return one char
                var _inline$splitIndex = inline.splitIndex(1);

                before = _inline$splitIndex.before;
                after = _inline$splitIndex.after;
              }

              if (before) {
                beforeInlines.push(before);
              }

              if (after) {
                afterInlines.push(after);
              }

              afterInlines.push.apply(afterInlines, _toConsumableArray(inlines.slice(index + 1)));
            } else {
              if (!beforeInlines.length) {
                // Always return one char
                beforeInlines.push(inline);
              }

              afterInlines.push.apply(afterInlines, _toConsumableArray(inlines.slice(beforeInlines.length)));
            }

            return {
              beforeInlines: beforeInlines,
              overflow: true,
              afterInlines: afterInlines
            };
          }

          function truncateInlines(ctx, inlines, width, option) {
            var indexData = getOverflowInlinesIndex(ctx, inlines, width);

            if (!indexData) {
              return {
                inlines: inlines,
                overflow: false
              };
            }

            var index = indexData.index,
                lineWidth = indexData.lineWidth;
            var inline = inlines[index];
            var overflowInline = getOverflowInline(option);
            var ellipsisWidth = overflowInline.width({
              ctx: ctx
            });
            var remWidth = width - lineWidth - ellipsisWidth;
            var result = inlines.slice(0, index);

            if (inline.canBreak()) {
              var _inline$breakAll2 = inline.breakAll(ctx, remWidth),
                  before = _inline$breakAll2.before;

              if (before) {
                result.push(before);
              }
            }

            result.push(overflowInline);
            return {
              inlines: result,
              overflow: true
            };
          }

          function _inlineRect(grid, ctx, inline, rect, col, row, _ref) {
            var offset = _ref.offset,
                color = _ref.color,
                textAlign = _ref.textAlign,
                textBaseline = _ref.textBaseline,
                font = _ref.font,
                textOverflow = _ref.textOverflow,
                icons = _ref.icons;
            //文字style
            ctx.fillStyle = _getColor(color || ctx.fillStyle, col, row, grid, ctx);
            ctx.textAlign = textAlign;
            ctx.textBaseline = textBaseline;
            ctx.font = font || ctx.font;
            var inlines = buildInlines(icons, inline);

            if (isAllowOverflow(textOverflow) && isOverflowInlines(ctx, inlines, rect.width)) {
              var _truncateInlines = truncateInlines(ctx, inlines, rect.width, textOverflow),
                  truncInlines = _truncateInlines.inlines,
                  overflow = _truncateInlines.overflow;

              inlines = truncInlines;
              grid.setCellOverflowText(col, row, overflow && inlineToString(inline));
            } else {
              grid.setCellOverflowText(col, row, false);
            }

            drawInlines(ctx, inlines, rect, offset, 0, 0, col, row, grid);
          } // eslint-disable-next-line complexity


          function _multiInlineRect(grid, ctx, multiInlines, rect, col, row, _ref2) {
            var offset = _ref2.offset,
                color = _ref2.color,
                textAlign = _ref2.textAlign,
                textBaseline = _ref2.textBaseline,
                font = _ref2.font,
                lineHeight = _ref2.lineHeight,
                autoWrapText = _ref2.autoWrapText,
                lineClamp = _ref2.lineClamp,
                textOverflow = _ref2.textOverflow,
                icons = _ref2.icons;
            //文字style
            ctx.fillStyle = _getColor(color || ctx.fillStyle, col, row, grid, ctx);
            ctx.textAlign = textAlign;
            ctx.textBaseline = textBaseline;
            ctx.font = font || ctx.font;

            if (lineClamp === "auto") {
              var rectHeight = rect.height - offset * 2 - 2;
              /*offset added by Inline#draw*/

              lineClamp = Math.max(Math.floor(rectHeight / lineHeight), 1);
            }

            var buildedMultiInlines;

            if (autoWrapText || lineClamp > 0 || isAllowOverflow(textOverflow)) {
              var width = rect.width;
              buildedMultiInlines = [];
              var procLineClamp = lineClamp > 0 ? function (inlines, hasNext) {
                if (buildedMultiInlines.length + 1 >= lineClamp) {
                  if (inlines.length === 0 && hasNext) {
                    buildedMultiInlines.push([getOverflowInline(textOverflow)]);
                    grid.setCellOverflowText(col, row, multiInlines.map(inlineToString).join("\n"));
                  } else {
                    var _truncateInlines2 = truncateInlines(ctx, inlines, width, textOverflow),
                        truncInlines = _truncateInlines2.inlines,
                        overflow = _truncateInlines2.overflow;

                    buildedMultiInlines.push(hasNext && !overflow ? truncInlines.concat([getOverflowInline(textOverflow)]) : truncInlines);

                    if (overflow || hasNext) {
                      grid.setCellOverflowText(col, row, multiInlines.map(inlineToString).join("\n"));
                    }
                  }

                  return false;
                }

                return true;
              } : function () {
                return true;
              };
              var procLine = autoWrapText ? function (inlines, hasNext) {
                if (!procLineClamp(inlines, hasNext)) {
                  return false;
                }

                while (inlines.length) {
                  if (!procLineClamp(inlines, hasNext)) {
                    return false;
                  }

                  var _breakWidthInlines = breakWidthInlines(ctx, inlines, width),
                      beforeInlines = _breakWidthInlines.beforeInlines,
                      afterInlines = _breakWidthInlines.afterInlines;

                  buildedMultiInlines.push(beforeInlines);
                  inlines = afterInlines;
                }

                return true;
              } : isAllowOverflow(textOverflow) ? function (inlines, hasNext) {
                if (!procLineClamp(inlines, hasNext)) {
                  return false;
                }

                var _truncateInlines3 = truncateInlines(ctx, inlines, width, textOverflow),
                    truncInlines = _truncateInlines3.inlines,
                    overflow = _truncateInlines3.overflow;

                buildedMultiInlines.push(truncInlines);

                if (overflow) {
                  grid.setCellOverflowText(col, row, multiInlines.map(inlineToString).join("\n"));
                }

                return true;
              } : function (inlines, hasNext) {
                if (!procLineClamp(inlines, hasNext)) {
                  return false;
                }

                buildedMultiInlines.push(inlines);
                return true;
              };
              grid.setCellOverflowText(col, row, false);

              for (var lineRow = 0; lineRow < multiInlines.length; lineRow++) {
                var inline = multiInlines[lineRow];
                var buildedInline = buildInlines(lineRow === 0 ? icons : undefined, inline);

                if (!procLine(buildedInline, lineRow + 1 < multiInlines.length)) {
                  break;
                }
              }
            } else {
              grid.setCellOverflowText(col, row, false);
              buildedMultiInlines = multiInlines.map(function (inline, lineRow) {
                return buildInlines(lineRow === 0 ? icons : undefined, inline);
              });
            }

            var paddingTop = 0;
            var paddingBottom = lineHeight * (buildedMultiInlines.length - 1);

            if (ctx.textBaseline === "top" || ctx.textBaseline === "hanging") {
              var em = canvases_1.getFontSize(ctx, ctx.font).height;
              var pad = (lineHeight - em) / 2;
              paddingTop += pad;
              paddingBottom -= pad;
            } else if (ctx.textBaseline === "bottom" || ctx.textBaseline === "alphabetic" || ctx.textBaseline === "ideographic") {
              var _em = canvases_1.getFontSize(ctx, ctx.font).height;

              var _pad = (lineHeight - _em) / 2;

              paddingTop -= _pad;
              paddingBottom += _pad;
            }

            buildedMultiInlines.forEach(function (buildedInline) {
              drawInlines(ctx, buildedInline, rect, offset, paddingTop, paddingBottom, col, row, grid);
              paddingTop += lineHeight;
              paddingBottom -= lineHeight;
            });
          }

          function calcElapsedColor(startColor, endColor, elapsedTime) {
            var startColorRGB = color_1.colorToRGB(startColor);
            var endColorRGB = color_1.colorToRGB(endColor);

            var getRGB = function getRGB(colorName) {
              var start = startColorRGB[colorName];
              var end = endColorRGB[colorName];

              if (elapsedTime >= 1) {
                return end;
              }

              if (elapsedTime <= 0) {
                return start;
              }

              var diff = start - end;
              return Math.ceil(start - diff * elapsedTime);
            };

            return "rgb(".concat(getRGB("r"), ", ").concat(getRGB("g"), ", ").concat(getRGB("b"), ")");
          }

          function drawCheckbox(ctx, rect, col, row, check, helper, _ref3) {
            var _ref3$animElapsedTime = _ref3.animElapsedTime,
                animElapsedTime = _ref3$animElapsedTime === void 0 ? 1 : _ref3$animElapsedTime,
                _ref3$uncheckBgColor = _ref3.uncheckBgColor,
                uncheckBgColor = _ref3$uncheckBgColor === void 0 ? helper.theme.checkbox.uncheckBgColor : _ref3$uncheckBgColor,
                _ref3$checkBgColor = _ref3.checkBgColor,
                checkBgColor = _ref3$checkBgColor === void 0 ? helper.theme.checkbox.checkBgColor : _ref3$checkBgColor,
                _ref3$borderColor = _ref3.borderColor,
                borderColor = _ref3$borderColor === void 0 ? helper.theme.checkbox.borderColor : _ref3$borderColor,
                _ref3$textAlign = _ref3.textAlign,
                textAlign = _ref3$textAlign === void 0 ? "center" : _ref3$textAlign,
                _ref3$textBaseline = _ref3.textBaseline,
                textBaseline = _ref3$textBaseline === void 0 ? "middle" : _ref3$textBaseline;
            var positionOpt = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {};
            var boxWidth = canvashelper.measureCheckbox(ctx).width;
            ctx.textAlign = textAlign;
            ctx.textBaseline = textBaseline;
            var pos = canvases_1.calcStartPosition(ctx, rect, boxWidth + 1
            /*罫線分+1*/
            , boxWidth + 1
            /*罫線分+1*/
            , positionOpt);
            uncheckBgColor = helper.getColor(uncheckBgColor, col, row, ctx);
            checkBgColor = helper.getColor(checkBgColor, col, row, ctx);
            borderColor = helper.getColor(borderColor, col, row, ctx);

            if (0 < animElapsedTime && animElapsedTime < 1) {
              uncheckBgColor = check ? uncheckBgColor : calcElapsedColor(checkBgColor, uncheckBgColor, animElapsedTime);
              checkBgColor = check ? calcElapsedColor(uncheckBgColor, checkBgColor, animElapsedTime) : checkBgColor;
            }

            canvashelper.drawCheckbox(ctx, pos.x, pos.y, check ? animElapsedTime : false, {
              uncheckBgColor: uncheckBgColor,
              checkBgColor: checkBgColor,
              borderColor: borderColor
            });
          }

          function drawRadioButton(ctx, rect, col, row, check, helper, _ref4) {
            var _ref4$animElapsedTime = _ref4.animElapsedTime,
                animElapsedTime = _ref4$animElapsedTime === void 0 ? 1 : _ref4$animElapsedTime,
                _ref4$checkColor = _ref4.checkColor,
                checkColor = _ref4$checkColor === void 0 ? helper.theme.radioButton.checkColor : _ref4$checkColor,
                _ref4$uncheckBorderCo = _ref4.uncheckBorderColor,
                uncheckBorderColor = _ref4$uncheckBorderCo === void 0 ? helper.theme.radioButton.uncheckBorderColor : _ref4$uncheckBorderCo,
                _ref4$checkBorderColo = _ref4.checkBorderColor,
                checkBorderColor = _ref4$checkBorderColo === void 0 ? helper.theme.radioButton.checkBorderColor : _ref4$checkBorderColo,
                _ref4$uncheckBgColor = _ref4.uncheckBgColor,
                uncheckBgColor = _ref4$uncheckBgColor === void 0 ? helper.theme.radioButton.uncheckBgColor : _ref4$uncheckBgColor,
                _ref4$checkBgColor = _ref4.checkBgColor,
                checkBgColor = _ref4$checkBgColor === void 0 ? helper.theme.radioButton.checkBgColor : _ref4$checkBgColor,
                _ref4$textAlign = _ref4.textAlign,
                textAlign = _ref4$textAlign === void 0 ? "center" : _ref4$textAlign,
                _ref4$textBaseline = _ref4.textBaseline,
                textBaseline = _ref4$textBaseline === void 0 ? "middle" : _ref4$textBaseline;
            var positionOpt = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {};
            var boxWidth = canvashelper.measureRadioButton(ctx).width;
            ctx.textAlign = textAlign;
            ctx.textBaseline = textBaseline;
            var pos = canvases_1.calcStartPosition(ctx, rect, boxWidth + 1
            /*罫線分+1*/
            , boxWidth + 1
            /*罫線分+1*/
            , positionOpt);
            checkColor = helper.getColor(checkColor, col, row, ctx);
            uncheckBorderColor = helper.getColor(uncheckBorderColor, col, row, ctx);
            checkBorderColor = helper.getColor(checkBorderColor, col, row, ctx);
            uncheckBgColor = helper.getColor(uncheckBgColor, col, row, ctx);
            checkBgColor = helper.getColor(checkBgColor, col, row, ctx);
            var borderColor = check ? checkBorderColor : uncheckBorderColor;
            var bgColor = check ? checkBgColor : uncheckBgColor;

            if (0 < animElapsedTime && animElapsedTime < 1) {
              borderColor = check ? calcElapsedColor(uncheckBorderColor, checkBorderColor, animElapsedTime) : calcElapsedColor(checkBorderColor, uncheckBorderColor, animElapsedTime);
              bgColor = check ? calcElapsedColor(uncheckBgColor, checkBgColor, animElapsedTime) : calcElapsedColor(checkBgColor, uncheckBgColor, animElapsedTime);
            }

            canvashelper.drawRadioButton(ctx, pos.x, pos.y, check ? animElapsedTime : 1 - animElapsedTime, {
              checkColor: checkColor,
              borderColor: borderColor,
              bgColor: bgColor
            });
          }

          var ThemeResolver = /*#__PURE__*/function () {
            function ThemeResolver(grid) {
              _classCallCheck(this, ThemeResolver);

              this._checkbox = null;
              this._radioButton = null;
              this._button = null;
              this._header = null;
              this._grid = grid;
            }

            _createClass(ThemeResolver, [{
              key: "getThemeColor",
              value: function getThemeColor() {
                for (var _len2 = arguments.length, name = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  name[_key2] = arguments[_key2];
                }

                return _getThemeColor.apply(void 0, [this._grid].concat(name));
              }
            }, {
              key: "font",
              get: function get() {
                return _getThemeColor(this._grid, "font");
              }
            }, {
              key: "underlayBackgroundColor",
              get: function get() {
                return _getThemeColor(this._grid, "underlayBackgroundColor");
              } // color

            }, {
              key: "color",
              get: function get() {
                return _getThemeColor(this._grid, "color");
              }
            }, {
              key: "frozenRowsColor",
              get: function get() {
                return _getThemeColor(this._grid, "frozenRowsColor");
              } // background

            }, {
              key: "defaultBgColor",
              get: function get() {
                return _getThemeColor(this._grid, "defaultBgColor");
              }
            }, {
              key: "frozenRowsBgColor",
              get: function get() {
                return _getThemeColor(this._grid, "frozenRowsBgColor");
              }
            }, {
              key: "selectionBgColor",
              get: function get() {
                return _getThemeColor(this._grid, "selectionBgColor");
              }
            }, {
              key: "highlightBgColor",
              get: function get() {
                return _getThemeColor(this._grid, "highlightBgColor");
              } // border

            }, {
              key: "borderColor",
              get: function get() {
                return _getThemeColor(this._grid, "borderColor");
              }
            }, {
              key: "frozenRowsBorderColor",
              get: function get() {
                return _getThemeColor(this._grid, "frozenRowsBorderColor");
              }
            }, {
              key: "highlightBorderColor",
              get: function get() {
                return _getThemeColor(this._grid, "highlightBorderColor");
              }
            }, {
              key: "checkbox",
              get: function get() {
                var grid = this._grid;
                return this._checkbox || (this._checkbox = {
                  get uncheckBgColor() {
                    return _getThemeColor(grid, "checkbox", "uncheckBgColor");
                  },

                  get checkBgColor() {
                    return _getThemeColor(grid, "checkbox", "checkBgColor");
                  },

                  get borderColor() {
                    return _getThemeColor(grid, "checkbox", "borderColor");
                  }

                });
              }
            }, {
              key: "radioButton",
              get: function get() {
                var grid = this._grid;
                return this._radioButton || (this._radioButton = {
                  get checkColor() {
                    return _getThemeColor(grid, "radioButton", "checkColor");
                  },

                  get uncheckBorderColor() {
                    return _getThemeColor(grid, "radioButton", "uncheckBorderColor");
                  },

                  get checkBorderColor() {
                    return _getThemeColor(grid, "radioButton", "checkBorderColor");
                  },

                  get uncheckBgColor() {
                    return _getThemeColor(grid, "radioButton", "uncheckBgColor");
                  },

                  get checkBgColor() {
                    return _getThemeColor(grid, "radioButton", "checkBgColor");
                  }

                });
              }
            }, {
              key: "button",
              get: function get() {
                var grid = this._grid;
                return this._button || (this._button = {
                  get color() {
                    return _getThemeColor(grid, "button", "color");
                  },

                  get bgColor() {
                    return _getThemeColor(grid, "button", "bgColor");
                  }

                });
              }
            }, {
              key: "header",
              get: function get() {
                var grid = this._grid;
                return this._header || (this._header = {
                  get sortArrowColor() {
                    return _getThemeColor(grid, "header", "sortArrowColor");
                  }

                });
              }
            }]);

            return ThemeResolver;
          }();

          function strokeRect(ctx, color, left, top, width, height) {
            if (!Array.isArray(color)) {
              if (color) {
                ctx.strokeStyle = color;
                ctx.strokeRect(left, top, width, height);
              }
            } else {
              var borderColors = _toBoxArray(color);

              canvashelper.strokeColorsRect(ctx, borderColors, left, top, width, height);
            }
          }

          var GridCanvasHelper = /*#__PURE__*/function () {
            function GridCanvasHelper(grid) {
              _classCallCheck(this, GridCanvasHelper);

              this._grid = grid;
              this._theme = new ThemeResolver(grid);
            }

            _createClass(GridCanvasHelper, [{
              key: "createCalculator",
              value: function createCalculator(context, font) {
                return {
                  calcWidth: function calcWidth(width) {
                    return calc.toPx(width, {
                      get full() {
                        var rect = context.getRect();
                        return rect.width;
                      },

                      get em() {
                        return canvases_1.getFontSize(context.getContext(), font).width;
                      }

                    });
                  },
                  calcHeight: function calcHeight(height) {
                    return calc.toPx(height, {
                      get full() {
                        var rect = context.getRect();
                        return rect.height;
                      },

                      get em() {
                        return canvases_1.getFontSize(context.getContext(), font).height;
                      }

                    });
                  }
                };
              }
            }, {
              key: "getColor",
              value: function getColor(color, col, row, ctx) {
                return _getColor(color, col, row, this._grid, ctx);
              }
            }, {
              key: "toBoxArray",
              value: function toBoxArray(obj) {
                return _toBoxArray(obj);
              }
            }, {
              key: "toBoxPixelArray",
              value: function toBoxPixelArray(value, context, font) {
                if (typeof value === "string" || Array.isArray(value)) {
                  var calculator = this.createCalculator(context, font);

                  var box = _toBoxArray(value);

                  return [calculator.calcHeight(box[0]), calculator.calcWidth(box[1]), calculator.calcHeight(box[2]), calculator.calcWidth(box[3])];
                }

                return _toBoxArray(value);
              }
            }, {
              key: "drawWithClip",
              value: function drawWithClip(context, draw) {
                var drawRect = context.getDrawRect();

                if (!drawRect) {
                  return;
                }

                var ctx = context.getContext();
                ctx.save();

                try {
                  ctx.beginPath();
                  ctx.rect(drawRect.left, drawRect.top, drawRect.width, drawRect.height); //clip

                  ctx.clip();
                  draw(ctx);
                } finally {
                  ctx.restore();
                }
              }
            }, {
              key: "drawBorderWithClip",
              value: function drawBorderWithClip(context, draw) {
                var drawRect = context.getDrawRect();

                if (!drawRect) {
                  return;
                }

                var rect = context.getRect();
                var ctx = context.getContext();
                ctx.save();

                try {
                  //罫線用clip
                  ctx.beginPath();
                  var clipLeft = drawRect.left;
                  var clipWidth = drawRect.width;

                  if (drawRect.left === rect.left) {
                    clipLeft += -1;
                    clipWidth += 1;
                  }

                  var clipTop = drawRect.top;
                  var clipHeight = drawRect.height;

                  if (drawRect.top === rect.top) {
                    clipTop += -1;
                    clipHeight += 1;
                  }

                  ctx.rect(clipLeft, clipTop, clipWidth, clipHeight);
                  ctx.clip();
                  draw(ctx);
                } finally {
                  ctx.restore();
                }
              }
            }, {
              key: "text",
              value: function text(_text, context) {
                var _this = this;

                var _ref5 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                    padding = _ref5.padding,
                    _ref5$offset = _ref5.offset,
                    offset = _ref5$offset === void 0 ? 2 : _ref5$offset,
                    color = _ref5.color,
                    _ref5$textAlign = _ref5.textAlign,
                    textAlign = _ref5$textAlign === void 0 ? "left" : _ref5$textAlign,
                    _ref5$textBaseline = _ref5.textBaseline,
                    textBaseline = _ref5$textBaseline === void 0 ? "middle" : _ref5$textBaseline,
                    font = _ref5.font,
                    _ref5$textOverflow = _ref5.textOverflow,
                    textOverflow = _ref5$textOverflow === void 0 ? "clip" : _ref5$textOverflow,
                    icons = _ref5.icons;

                var rect = context.getRect();
                var col = context.col,
                    row = context.row;

                if (!color) {
                  color = this.theme.color;

                  // header color
                  var isFrozenCell = this._grid.isFrozenCell(col, row);

                  if (isFrozenCell && isFrozenCell.row) {
                    color = this.theme.frozenRowsColor;
                  }
                }

                this.drawWithClip(context, function (ctx) {
                  font = getFont(font, context.col, context.row, _this._grid, ctx);

                  if (padding) {
                    var paddingNums = _this.toBoxPixelArray(padding, context, font);

                    var left = rect.left + paddingNums[3];
                    var top = rect.top + paddingNums[0];
                    var width = rect.width - paddingNums[1] - paddingNums[3];
                    var height = rect.height - paddingNums[0] - paddingNums[2];
                    rect = new Rect_1.Rect(left, top, width, height);
                  }

                  _inlineRect(_this._grid, ctx, _text, rect, col, row, {
                    offset: offset,
                    color: color,
                    textAlign: textAlign,
                    textBaseline: textBaseline,
                    font: font,
                    textOverflow: textOverflow,
                    icons: icons
                  });
                });
              }
            }, {
              key: "multilineText",
              value: function multilineText(multilines, context) {
                var _this2 = this;

                var _ref6 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                    padding = _ref6.padding,
                    _ref6$offset = _ref6.offset,
                    offset = _ref6$offset === void 0 ? 2 : _ref6$offset,
                    color = _ref6.color,
                    _ref6$textAlign = _ref6.textAlign,
                    textAlign = _ref6$textAlign === void 0 ? "left" : _ref6$textAlign,
                    _ref6$textBaseline = _ref6.textBaseline,
                    textBaseline = _ref6$textBaseline === void 0 ? "middle" : _ref6$textBaseline,
                    font = _ref6.font,
                    _ref6$lineHeight = _ref6.lineHeight,
                    lineHeight = _ref6$lineHeight === void 0 ? "1em" : _ref6$lineHeight,
                    _ref6$autoWrapText = _ref6.autoWrapText,
                    autoWrapText = _ref6$autoWrapText === void 0 ? false : _ref6$autoWrapText,
                    _ref6$lineClamp = _ref6.lineClamp,
                    lineClamp = _ref6$lineClamp === void 0 ? 0 : _ref6$lineClamp,
                    _ref6$textOverflow = _ref6.textOverflow,
                    textOverflow = _ref6$textOverflow === void 0 ? "clip" : _ref6$textOverflow,
                    icons = _ref6.icons;

                var rect = context.getRect();
                var col = context.col,
                    row = context.row;

                if (!color) {
                  color = this.theme.color;

                  // header color
                  var isFrozenCell = this._grid.isFrozenCell(col, row);

                  if (isFrozenCell && isFrozenCell.row) {
                    color = this.theme.frozenRowsColor;
                  }
                }

                this.drawWithClip(context, function (ctx) {
                  font = getFont(font, context.col, context.row, _this2._grid, ctx);

                  if (padding) {
                    var paddingNums = _this2.toBoxPixelArray(padding, context, font);

                    var left = rect.left + paddingNums[3];
                    var top = rect.top + paddingNums[0];
                    var width = rect.width - paddingNums[1] - paddingNums[3];
                    var height = rect.height - paddingNums[0] - paddingNums[2];
                    rect = new Rect_1.Rect(left, top, width, height);
                  }

                  var calculator = _this2.createCalculator(context, font);

                  lineHeight = calculator.calcHeight(lineHeight);

                  _multiInlineRect(_this2._grid, ctx, multilines, rect, col, row, {
                    offset: offset,
                    color: color,
                    textAlign: textAlign,
                    textBaseline: textBaseline,
                    font: font,
                    lineHeight: lineHeight,
                    autoWrapText: autoWrapText,
                    lineClamp: lineClamp,
                    textOverflow: textOverflow,
                    icons: icons
                  });
                });
              }
            }, {
              key: "fillText",
              value: function fillText(text, x, y, context) {
                var _ref7 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
                    color = _ref7.color,
                    _ref7$textAlign = _ref7.textAlign,
                    textAlign = _ref7$textAlign === void 0 ? "left" : _ref7$textAlign,
                    _ref7$textBaseline = _ref7.textBaseline,
                    textBaseline = _ref7$textBaseline === void 0 ? "top" : _ref7$textBaseline,
                    font = _ref7.font;

                var col = context.col,
                    row = context.row;

                if (!color) {
                  color = this.theme.color;

                  // header color
                  var isFrozenCell = this._grid.isFrozenCell(col, row);

                  if (isFrozenCell && isFrozenCell.row) {
                    color = this.theme.frozenRowsColor;
                  }
                }

                var ctx = context.getContext();
                ctx.save();

                try {
                  font = getFont(font, context.col, context.row, this._grid, ctx);
                  ctx.fillStyle = _getColor(color, col, row, this._grid, ctx);
                  ctx.textAlign = textAlign;
                  ctx.textBaseline = textBaseline;
                  ctx.font = font || ctx.font;
                  ctx.fillText(text, x, y);
                } finally {
                  ctx.restore();
                }
              }
            }, {
              key: "fillCell",
              value: function fillCell(context) {
                var _this3 = this;

                var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    _ref8$fillColor = _ref8.fillColor,
                    fillColor = _ref8$fillColor === void 0 ? this.theme.defaultBgColor : _ref8$fillColor;

                var rect = context.getRect();
                this.drawWithClip(context, function (ctx) {
                  var col = context.col,
                      row = context.row;
                  ctx.fillStyle = _getColor(fillColor, col, row, _this3._grid, ctx);
                  ctx.beginPath();
                  ctx.rect(rect.left, rect.top, rect.width, rect.height);
                  ctx.fill();
                });
              }
            }, {
              key: "fillCellWithState",
              value: function fillCellWithState(context) {
                var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                option.fillColor = this.getFillColorState(context, option);
                this.fillCell(context, option);
              }
            }, {
              key: "fillRect",
              value: function fillRect(rect, context) {
                var _ref9 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                    _ref9$fillColor = _ref9.fillColor,
                    fillColor = _ref9$fillColor === void 0 ? this.theme.defaultBgColor : _ref9$fillColor;

                var ctx = context.getContext();
                ctx.save();

                try {
                  var col = context.col,
                      row = context.row;
                  ctx.fillStyle = _getColor(fillColor, col, row, this._grid, ctx);
                  ctx.beginPath();
                  ctx.rect(rect.left, rect.top, rect.width, rect.height);
                  ctx.fill();
                } finally {
                  ctx.restore();
                }
              }
            }, {
              key: "fillRectWithState",
              value: function fillRectWithState(rect, context) {
                var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                option.fillColor = this.getFillColorState(context, option);
                this.fillRect(rect, context, option);
              }
            }, {
              key: "getFillColorState",
              value: function getFillColorState(context) {
                var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var sel = context.getSelection();
                var col = context.col,
                    row = context.row;

                if (!utils_1.cellEquals(sel.select, context) && utils_1.cellInRange(sel.range, col, row)) {
                  return this.theme.selectionBgColor;
                }

                if (option.fillColor) {
                  return option.fillColor;
                }

                if (utils_1.cellEquals(sel.select, context)) {
                  return this.theme.highlightBgColor;
                }

                var isFrozenCell = this._grid.isFrozenCell(col, row);

                if (isFrozenCell && isFrozenCell.row) {
                  return this.theme.frozenRowsBgColor;
                }

                return this.theme.defaultBgColor;
              }
            }, {
              key: "border",
              value: function border(context) {
                var _this4 = this;

                var _ref10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    _ref10$borderColor = _ref10.borderColor,
                    borderColor = _ref10$borderColor === void 0 ? this.theme.borderColor : _ref10$borderColor,
                    _ref10$lineWidth = _ref10.lineWidth,
                    lineWidth = _ref10$lineWidth === void 0 ? 1 : _ref10$lineWidth;

                var rect = context.getRect();
                this.drawBorderWithClip(context, function (ctx) {
                  var col = context.col,
                      row = context.row;

                  var borderColors = _getColor(borderColor, col, row, _this4._grid, ctx);

                  if (lineWidth === 1) {
                    ctx.lineWidth = 1;
                    strokeRect(ctx, borderColors, rect.left - 0.5, rect.top - 0.5, rect.width, rect.height);
                  } else if (lineWidth === 2) {
                    ctx.lineWidth = 2;
                    strokeRect(ctx, borderColors, rect.left, rect.top, rect.width - 1, rect.height - 1);
                  } else {
                    ctx.lineWidth = lineWidth;
                    var startOffset = lineWidth / 2 - 1;
                    strokeRect(ctx, borderColors, rect.left + startOffset, rect.top + startOffset, rect.width - lineWidth + 1, rect.height - lineWidth + 1);
                  }
                });
              } // Unused in main

            }, {
              key: "borderWithState",
              value: function borderWithState(context) {
                var _this5 = this;

                var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var rect = context.getRect();
                var sel = context.getSelection();
                var col = context.col,
                    row = context.row; //罫線

                if (utils_1.cellEquals(sel.select, context)) {
                  option.borderColor = this.theme.highlightBorderColor;
                  option.lineWidth = 2;
                  this.border(context, option);
                } else {
                  // header color
                  var isFrozenCell = this._grid.isFrozenCell(col, row);

                  if (isFrozenCell === null || isFrozenCell === void 0 ? void 0 : isFrozenCell.row) {
                    option.borderColor = this.theme.frozenRowsBorderColor;
                  }

                  option.lineWidth = 1;
                  this.border(context, option); //追加処理

                  var _sel = this._grid.selection.select;

                  if (_sel.col + 1 === col && _sel.row === row) {
                    //右が選択されている
                    this.drawBorderWithClip(context, function (ctx) {
                      var borderColors = _toBoxArray(_getColor(_this5.theme.highlightBorderColor, _sel.col, _sel.row, _this5._grid, ctx));

                      ctx.lineWidth = 1;
                      ctx.strokeStyle = borderColors[1] || ctx.strokeStyle;
                      ctx.beginPath();
                      ctx.moveTo(rect.left - 0.5, rect.top);
                      ctx.lineTo(rect.left - 0.5, rect.bottom);
                      ctx.stroke();
                    });
                  } else if (_sel.col === col && _sel.row + 1 === row) {
                    //上が選択されている
                    this.drawBorderWithClip(context, function (ctx) {
                      var borderColors = _toBoxArray(_getColor(_this5.theme.highlightBorderColor, _sel.col, _sel.row, _this5._grid, ctx));

                      ctx.lineWidth = 1;
                      ctx.strokeStyle = borderColors[0] || ctx.strokeStyle;
                      ctx.beginPath();
                      ctx.moveTo(rect.left, rect.top - 0.5);
                      ctx.lineTo(rect.right, rect.top - 0.5);
                      ctx.stroke();
                    });
                  }
                }
              }
            }, {
              key: "buildCheckBoxInline",
              value: function buildCheckBoxInline(check, context) {
                var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                // eslint-disable-next-line @typescript-eslint/no-this-alias
                var self = this;
                var ctx = context.getContext();
                var boxWidth = canvashelper.measureCheckbox(ctx).width;
                return new InlineDrawer_1.InlineDrawer({
                  draw: draw,
                  width: boxWidth + 3,
                  height: boxWidth + 1,
                  color: undefined
                });

                function draw(_ref11) {
                  var ctx = _ref11.ctx,
                      rect = _ref11.rect,
                      offset = _ref11.offset,
                      offsetLeft = _ref11.offsetLeft,
                      offsetRight = _ref11.offsetRight,
                      offsetTop = _ref11.offsetTop,
                      offsetBottom = _ref11.offsetBottom;
                  var col = context.col,
                      row = context.row;
                  drawCheckbox(ctx, rect, col, row, check, self, option, {
                    offset: offset + 1,
                    padding: {
                      left: offsetLeft + 1,
                      right: offsetRight,
                      top: offsetTop,
                      bottom: offsetBottom
                    }
                  });
                }
              }
            }, {
              key: "checkbox",
              value: function checkbox(check, context) {
                var _this6 = this;

                var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                this.drawWithClip(context, function (ctx) {
                  var col = context.col,
                      row = context.row;
                  drawCheckbox(ctx, context.getRect(), col, row, check, _this6, option);
                });
              }
            }, {
              key: "radioButton",
              value: function radioButton(check, context) {
                var _this7 = this;

                var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                this.drawWithClip(context, function (ctx) {
                  var col = context.col,
                      row = context.row;
                  drawRadioButton(ctx, context.getRect(), col, row, check, _this7, option);
                });
              }
            }, {
              key: "button",
              value: function button(caption, context) {
                var _this8 = this;

                var _ref12 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                    _ref12$bgColor = _ref12.bgColor,
                    bgColor = _ref12$bgColor === void 0 ? this.theme.button.bgColor : _ref12$bgColor,
                    padding = _ref12.padding,
                    _ref12$offset = _ref12.offset,
                    offset = _ref12$offset === void 0 ? 2 : _ref12$offset,
                    _ref12$color = _ref12.color,
                    color = _ref12$color === void 0 ? this.theme.button.color : _ref12$color,
                    _ref12$textAlign = _ref12.textAlign,
                    textAlign = _ref12$textAlign === void 0 ? "center" : _ref12$textAlign,
                    _ref12$textBaseline = _ref12.textBaseline,
                    textBaseline = _ref12$textBaseline === void 0 ? "middle" : _ref12$textBaseline,
                    shadow = _ref12.shadow,
                    font = _ref12.font,
                    _ref12$textOverflow = _ref12.textOverflow,
                    textOverflow = _ref12$textOverflow === void 0 ? "clip" : _ref12$textOverflow,
                    icons = _ref12.icons;

                var rect = context.getRect();
                this.drawWithClip(context, function (ctx) {
                  font = getFont(font, context.col, context.row, _this8._grid, ctx);
                  var col = context.col,
                      row = context.row;

                  var paddingNums = _this8.toBoxPixelArray(padding || rect.height / 8, context, font);

                  var left = rect.left + paddingNums[3];
                  var top = rect.top + paddingNums[0];
                  var width = rect.width - paddingNums[1] - paddingNums[3];
                  var height = rect.height - paddingNums[0] - paddingNums[2];
                  bgColor = _getColor(bgColor, context.col, context.row, _this8._grid, ctx);
                  canvashelper.drawButton(ctx, left, top, width, height, {
                    bgColor: bgColor,
                    radius: rect.height / 8,
                    // offset,
                    shadow: shadow
                  });

                  _inlineRect(_this8._grid, ctx, caption, new Rect_1.Rect(left, top, width, height), col, row, {
                    offset: offset,
                    color: color,
                    textAlign: textAlign,
                    textBaseline: textBaseline,
                    font: font,
                    textOverflow: textOverflow,
                    icons: icons
                  });
                });
              }
            }, {
              key: "testFontLoad",
              value: function testFontLoad(font, value, context) {
                return _testFontLoad(font, value, context, this._grid);
              }
            }, {
              key: "theme",
              get: function get() {
                return this._theme;
              }
            }]);

            return GridCanvasHelper;
          }();

          exports.GridCanvasHelper = GridCanvasHelper;
          /***/
        },

        /***/
        "./ListGrid.js":
        /*!*********************!*\
          !*** ./ListGrid.js ***!
          \*********************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function ListGridJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var icons = __importStar(__webpack_require__(
          /*! ./internal/icons */
          "./internal/icons.js"));

          var themes = __importStar(__webpack_require__(
          /*! ./themes */
          "./themes.js"));

          var data_1 = __webpack_require__(
          /*! ./data */
          "./data.js");

          var layout_map_1 = __webpack_require__(
          /*! ./list-grid/layout-map */
          "./list-grid/layout-map/index.js");

          var DrawGrid_1 = __webpack_require__(
          /*! ./core/DrawGrid */
          "./core/DrawGrid.js");

          var utils_1 = __webpack_require__(
          /*! ./internal/utils */
          "./internal/utils.js");

          var style_1 = __webpack_require__(
          /*! ./columns/style */
          "./columns/style.js");

          var GridCanvasHelper_1 = __webpack_require__(
          /*! ./GridCanvasHelper */
          "./GridCanvasHelper.js");

          var style_2 = __webpack_require__(
          /*! ./header/style */
          "./header/style.js");

          var LG_EVENT_TYPE_1 = __webpack_require__(
          /*! ./list-grid/LG_EVENT_TYPE */
          "./list-grid/LG_EVENT_TYPE.js");

          var MessageHandler_1 = __webpack_require__(
          /*! ./columns/message/MessageHandler */
          "./columns/message/MessageHandler.js");

          var Rect_1 = __webpack_require__(
          /*! ./internal/Rect */
          "./internal/Rect.js");

          var TooltipHandler_1 = __webpack_require__(
          /*! ./tooltip/TooltipHandler */
          "./tooltip/TooltipHandler.js"); //protected symbol


          var symbolManager_1 = __webpack_require__(
          /*! ./internal/symbolManager */
          "./internal/symbolManager.js");

          var paste_utils_1 = __webpack_require__(
          /*! ./internal/paste-utils */
          "./internal/paste-utils.js");
          /** @private */


          var _ = symbolManager_1.getProtectedSymbol(); //private methods

          /** @private */


          function _getCellRange(grid, col, row) {
            return grid[_].layoutMap.getCellRange(col, row);
          }
          /** @private */


          function _updateRect(grid, col, row, context) {
            context.setRectFilter(function (rect) {
              var left = rect.left,
                  right = rect.right,
                  top = rect.top,
                  bottom = rect.bottom;

              var _getCellRange2 = _getCellRange(grid, col, row),
                  _getCellRange2$start = _getCellRange2.start,
                  startCol = _getCellRange2$start.col,
                  startRow = _getCellRange2$start.row,
                  _getCellRange2$end = _getCellRange2.end,
                  endCol = _getCellRange2$end.col,
                  endRow = _getCellRange2$end.row;

              for (var c = col - 1; c >= startCol; c--) {
                left -= grid.getColWidth(c);
              }

              for (var _c2 = col + 1; _c2 <= endCol; _c2++) {
                right += grid.getColWidth(_c2);
              }

              for (var r = row - 1; r >= startRow; r--) {
                top -= grid.getRowHeight(r);
              }

              for (var _r = row + 1; _r <= endRow; _r++) {
                bottom += grid.getRowHeight(_r);
              }

              return Rect_1.Rect.bounds(left, top, right, bottom);
            });
          }
          /** @private */


          function _getCellValue(grid, col, row) {
            if (row < grid[_].layoutMap.headerRowCount) {
              return grid[_].layoutMap.getHeader(col, row).caption;
            } else {
              var _grid$_$layoutMap$get = grid[_].layoutMap.getBody(col, row),
                  field = _grid$_$layoutMap$get.field;

              return _getField(grid, field, row);
            }
          }
          /** @private */


          function _setCellValue(grid, col, row, // eslint-disable-next-line @typescript-eslint/no-explicit-any
          value) {
            if (row < grid[_].layoutMap.headerRowCount) {
              // nop
              return false;
            } else {
              var _grid$_$layoutMap$get2 = grid[_].layoutMap.getBody(col, row),
                  field = _grid$_$layoutMap$get2.field;

              if (field == null) {
                return false;
              }

              var index = _getRecordIndexByRow(grid, row);

              return grid[_].dataSource.setField(index, field, value);
            }
          }
          /** @private */


          function _getCellMessage(grid, col, row) {
            if (row < grid[_].layoutMap.headerRowCount) {
              return null;
            } else {
              var _grid$_$layoutMap$get3 = grid[_].layoutMap.getBody(col, row),
                  message = _grid$_$layoutMap$get3.message;

              if (!message) {
                return null;
              }

              return _getField(grid, message, row);
            }
          }

          function _getCellIcon0(grid, icon, row) {
            if (Array.isArray(icon)) {
              return icon.map(function (i) {
                return _getCellIcon0(grid, i, row);
              });
            }

            if (!utils_1.obj.isObject(icon) || typeof icon === "function") {
              return _getField(grid, icon, row);
            } // eslint-disable-next-line @typescript-eslint/no-explicit-any


            var retIcon = {}; // eslint-disable-next-line @typescript-eslint/no-explicit-any

            var iconOpt = icon;
            icons.iconPropKeys.forEach(function (k) {
              if (iconOpt[k]) {
                var f = _getField(grid, iconOpt[k], row);

                if (utils_1.isDef(f)) {
                  retIcon[k] = f;
                } else {
                  if (!_hasField(grid, iconOpt[k], row)) {
                    retIcon[k] = iconOpt[k];
                  }
                }
              }
            });
            return retIcon;
          }
          /** @private */


          function _getCellIcon(grid, col, row) {
            var _grid$_$layoutMap$get4 = grid[_].layoutMap.getBody(col, row),
                icon = _grid$_$layoutMap$get4.icon;

            if (icon == null) {
              return null;
            }

            return _getCellIcon0(grid, icon, row);
          }
          /** @private */


          function _getField(grid, field, row) {
            if (!utils_1.isDef(field)) {
              return null;
            }

            if (row < grid[_].layoutMap.headerRowCount) {
              return null;
            } else {
              var index = _getRecordIndexByRow(grid, row);

              return grid[_].dataSource.getField(index, field);
            }
          }
          /** @private */


          function _hasField(grid, field, row) {
            if (!utils_1.isDef(field)) {
              return false;
            }

            if (row < grid[_].layoutMap.headerRowCount) {
              return false;
            } else {
              var index = _getRecordIndexByRow(grid, row);

              return grid[_].dataSource.hasField(index, field);
            }
          }
          /** @private */


          function _onDrawValue(grid, cellValue, context, _ref13, style, // eslint-disable-next-line @typescript-eslint/no-explicit-any
          draw) {
            var col = _ref13.col,
                row = _ref13.row;
            var helper = grid[_].gridCanvasHelper;

            var drawCellBg = function drawCellBg() {
              var _ref14 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                  bgColor = _ref14.bgColor;

              var fillOpt = {
                fillColor: bgColor
              }; //cell全体を描画

              helper.fillCellWithState(context, fillOpt);
            };

            var drawCellBorder = function drawCellBorder() {
              if (context.col === grid.frozenColCount - 1) {
                //固定列罫線
                var rect = context.getRect();
                helper.drawWithClip(context, function (ctx) {
                  var borderColor = context.row >= grid.frozenRowCount ? helper.theme.borderColor : helper.theme.frozenRowsBorderColor;
                  var borderColors = helper.toBoxArray(helper.getColor(borderColor, context.col, context.row, ctx));

                  if (borderColors[1]) {
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = borderColors[1];
                    ctx.beginPath();
                    ctx.moveTo(rect.right - 2.5, rect.top);
                    ctx.lineTo(rect.right - 2.5, rect.bottom);
                    ctx.stroke();
                  }
                });
              }

              _borderWithState(grid, helper, context);
            };

            var drawCellBase = function drawCellBase() {
              var _ref15 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                  bgColor = _ref15.bgColor;

              drawCellBg({
                bgColor: bgColor
              });
              drawCellBorder();
            };

            var info = {
              getRecord: function getRecord() {
                return grid.getRowRecord(row);
              },
              getIcon: function getIcon() {
                return _getCellIcon(grid, col, row);
              },
              getMessage: function getMessage() {
                return _getCellMessage(grid, col, row);
              },
              messageHandler: grid[_].messageHandler,
              style: style,
              drawCellBase: drawCellBase,
              drawCellBg: drawCellBg,
              drawCellBorder: drawCellBorder
            };
            return draw(cellValue, info, context, grid);
          }
          /** @private */


          function _borderWithState(grid, helper, context) {
            var col = context.col,
                row = context.row;
            var sel = grid.selection.select;
            var layoutMap = grid[_].layoutMap;
            var rect = context.getRect();
            var option = {};
            var selRecordIndex = layoutMap.getRecordIndexByRow(sel.row);
            var selId = layoutMap.getCellId(sel.col, sel.row);

            function isSelectCell(col, row) {
              if (col === sel.col && row === sel.row) {
                return true;
              }

              return selId != null && layoutMap.getCellId(col, row) === selId && layoutMap.getRecordIndexByRow(row) === selRecordIndex;
            } //罫線


            if (isSelectCell(col, row)) {
              option.borderColor = helper.theme.highlightBorderColor;
              option.lineWidth = 2;
              helper.border(context, option);
            } else {
              option.lineWidth = 1; // header color

              var isFrozenCell = grid.isFrozenCell(col, row);

              if (isFrozenCell === null || isFrozenCell === void 0 ? void 0 : isFrozenCell.row) {
                option.borderColor = helper.theme.frozenRowsBorderColor;
              }

              helper.border(context, option); //追加処理

              if (col > 0 && isSelectCell(col - 1, row)) {
                //右が選択されている
                helper.drawBorderWithClip(context, function (ctx) {
                  var borderColors = helper.toBoxArray(helper.getColor(helper.theme.highlightBorderColor, sel.col, sel.row, ctx));

                  if (borderColors[1]) {
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = borderColors[1];
                    ctx.beginPath();
                    ctx.moveTo(rect.left - 0.5, rect.top);
                    ctx.lineTo(rect.left - 0.5, rect.bottom);
                    ctx.stroke();
                  }
                });
              } else if (row > 0 && isSelectCell(col, row - 1)) {
                //上が選択されている
                helper.drawBorderWithClip(context, function (ctx) {
                  var borderColors = helper.toBoxArray(helper.getColor(helper.theme.highlightBorderColor, sel.col, sel.row, ctx));

                  if (borderColors[0]) {
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = borderColors[0];
                    ctx.beginPath();
                    ctx.moveTo(rect.left, rect.top - 0.5);
                    ctx.lineTo(rect.right, rect.top - 0.5);
                    ctx.stroke();
                  }
                });
              }
            }
          }
          /** @private */


          function _refreshHeader(grid) {
            var _a;

            var protectedSpace = grid[_];

            if (protectedSpace.headerEvents) {
              protectedSpace.headerEvents.forEach(function (id) {
                return grid.unlisten(id);
              });
            }

            var headerEvents = grid[_].headerEvents = [];
            headerEvents.forEach(function (id) {
              return grid.unlisten(id);
            });
            var layoutMap;

            if (protectedSpace.layout && (!Array.isArray(protectedSpace.layout) || protectedSpace.layout.length > 0)) {
              layoutMap = protectedSpace.layoutMap = new layout_map_1.MultiLayoutMap(protectedSpace.layout);
            } else {
              layoutMap = protectedSpace.layoutMap = new layout_map_1.SimpleHeaderLayoutMap((_a = protectedSpace.header) !== null && _a !== void 0 ? _a : []);
            }

            layoutMap.headerObjects.forEach(function (cell) {
              var ids = cell.headerType.bindGridEvent(grid, cell.id);
              headerEvents.push.apply(headerEvents, _toConsumableArray(ids));

              if (cell.style) {
                if (cell.style instanceof style_2.BaseStyle) {
                  var id = cell.style.listen(style_2.BaseStyle.EVENT_TYPE.CHANGE_STYLE, function () {
                    grid.invalidate();
                  });
                  headerEvents.push(id);
                }
              }

              if (cell.action) {
                var _ids = cell.action.bindGridEvent(grid, cell.id);

                headerEvents.push.apply(headerEvents, _toConsumableArray(_ids));
              }
            });
            layoutMap.columnObjects.forEach(function (col) {
              if (col.action) {
                var ids = col.action.bindGridEvent(grid, col.id);
                headerEvents.push.apply(headerEvents, _toConsumableArray(ids));
              }

              if (col.columnType) {
                var _ids2 = col.columnType.bindGridEvent(grid, col.id);

                headerEvents.push.apply(headerEvents, _toConsumableArray(_ids2));
              }

              if (col.style) {
                if (col.style instanceof style_1.BaseStyle) {
                  var id = col.style.listen(style_1.BaseStyle.EVENT_TYPE.CHANGE_STYLE, function () {
                    grid.invalidate();
                  });
                  headerEvents.push(id);
                }
              }
            });

            for (var col = 0; col < layoutMap.columnWidths.length; col++) {
              var column = layoutMap.columnWidths[col];
              var width = column.width,
                  minWidth = column.minWidth,
                  maxWidth = column.maxWidth;

              if (width && (width > 0 || typeof width === "string")) {
                grid.setColWidth(col, width);
              }

              if (minWidth && (minWidth > 0 || typeof minWidth === "string")) {
                grid.setMinColWidth(col, minWidth);
              }

              if (maxWidth && (maxWidth > 0 || typeof maxWidth === "string")) {
                grid.setMaxColWidth(col, maxWidth);
              }
            }

            var headerRowHeight = grid[_].headerRowHeight;

            for (var row = 0; row < layoutMap.headerRowCount; row++) {
              var height = Array.isArray(headerRowHeight) ? headerRowHeight[row] : headerRowHeight;

              if (height && height > 0) {
                grid.setRowHeight(row, height);
              }
            }

            grid.colCount = layoutMap.colCount;

            _refreshRowCount(grid);

            grid.frozenRowCount = layoutMap.headerRowCount;
          }
          /** @private */


          function _refreshRowCount(grid) {
            var layoutMap = grid[_].layoutMap;
            grid.rowCount = grid[_].dataSource.length * layoutMap.bodyRowCount + layoutMap.headerRowCount;
          }
          /** @private */


          function _tryWithUpdateDataSource(grid, fn) {
            var dataSourceEventIds = grid[_].dataSourceEventIds;

            if (dataSourceEventIds) {
              dataSourceEventIds.forEach(function (id) {
                return grid[_].handler.off(id);
              });
            }

            fn(grid);
            grid[_].dataSourceEventIds = [grid[_].handler.on(grid[_].dataSource, data_1.DataSource.EVENT_TYPE.UPDATED_LENGTH, function () {
              _refreshRowCount(grid);

              grid.invalidate();
            }), grid[_].handler.on(grid[_].dataSource, data_1.DataSource.EVENT_TYPE.UPDATED_ORDER, function () {
              grid.invalidate();
            })];
          }
          /** @private */


          function _setRecords(grid) {
            var records = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            _tryWithUpdateDataSource(grid, function () {
              grid[_].records = records;
              var newDataSource = grid[_].dataSource = data_1.CachedDataSource.ofArray(records);
              grid.addDisposable(newDataSource);
            });
          }
          /** @private */


          function _setDataSource(grid, dataSource) {
            _tryWithUpdateDataSource(grid, function () {
              if (dataSource) {
                if (dataSource instanceof data_1.DataSource) {
                  grid[_].dataSource = dataSource;
                } else {
                  var newDataSource = grid[_].dataSource = new data_1.CachedDataSource(dataSource);
                  grid.addDisposable(newDataSource);
                }
              } else {
                grid[_].dataSource = data_1.DataSource.EMPTY;
              }

              grid[_].records = null;
            });
          }
          /** @private */


          function _getRecordIndexByRow(grid, row) {
            var layoutMap = grid[_].layoutMap;
            return layoutMap.getRecordIndexByRow(row);
          }
          /** @private */


          function _onRangePaste(text) {
            var _this9 = this;

            var test = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
              return true;
            };

            var _a;

            var layoutMap = this[_].layoutMap;
            var selectionRange = this.selection.range;

            var _this$getCellRange = this.getCellRange(selectionRange.start.col, selectionRange.start.row),
                start = _this$getCellRange.start;

            var _this$getCellRange2 = this.getCellRange(selectionRange.end.col, selectionRange.end.row),
                end = _this$getCellRange2.end;

            var values = paste_utils_1.parsePasteRangeBoxValues(text);
            var pasteRowCount = Math.min(Math.max(end.row - start.row + 1, values.rowCount), this.rowCount - start.row);
            var pasteColCount = Math.min(Math.max(end.col - start.col + 1, values.colCount), this.colCount - start.col);
            var hasEditable = false;
            var actionColumnsBox = [];

            for (var bodyRow = 0; bodyRow < layoutMap.bodyRowCount; bodyRow++) {
              var actionColumnsRow = [];
              actionColumnsBox.push(actionColumnsRow);

              for (var offsetCol = 0; offsetCol < pasteColCount; offsetCol++) {
                var body = layoutMap.getBody(start.col + offsetCol, bodyRow + layoutMap.headerRowCount);
                actionColumnsRow[offsetCol] = body;

                if (!hasEditable && ((_a = body.action) === null || _a === void 0 ? void 0 : _a.editable)) {
                  hasEditable = true;
                }
              }
            }

            if (!hasEditable) {
              return;
            }

            var startRow = layoutMap.getRecordStartRowByRecordIndex(layoutMap.getRecordIndexByRow(start.row));
            var startRowOffset = start.row - startRow;
            var duplicate = {};
            var actionRow = startRowOffset;
            var valuesRow = 0;

            for (var offsetRow = 0; offsetRow < pasteRowCount; offsetRow++) {
              var valuesCol = 0;

              var _loop = function _loop(_offsetCol) {
                var _actionColumnsBox$act = actionColumnsBox[actionRow][_offsetCol],
                    action = _actionColumnsBox$act.action,
                    id = _actionColumnsBox$act.id;

                if (!duplicate[id] && (action === null || action === void 0 ? void 0 : action.editable)) {
                  duplicate[id] = true;
                  var col = start.col + _offsetCol;
                  var row = start.row + offsetRow;
                  var cellValue = values.getCellValue(valuesCol, valuesRow);
                  utils_1.then(_this9.getRowRecord(row), function (record) {
                    utils_1.then(_getCellValue(_this9, col, row), function (oldValue) {
                      if (test({
                        grid: _this9,
                        record: record,
                        col: col,
                        row: row,
                        value: cellValue,
                        oldValue: oldValue
                      })) {
                        action.onPasteCellRangeBox(_this9, {
                          col: col,
                          row: row
                        }, cellValue);
                      }
                    });
                  });
                }

                valuesCol++;

                if (valuesCol >= values.colCount) {
                  valuesCol = 0;
                }
              };

              for (var _offsetCol = 0; _offsetCol < pasteColCount; _offsetCol++) {
                _loop(_offsetCol);
              }

              actionRow++;

              if (actionRow >= layoutMap.bodyRowCount) {
                actionRow = 0;
                duplicate = {};
              }

              valuesRow++;

              if (valuesRow >= values.rowCount) {
                valuesRow = 0;
              }
            }

            var newEnd = {
              col: start.col + pasteColCount - 1,
              row: start.row + pasteRowCount - 1
            };
            this.selection.range = {
              start: start,
              end: newEnd
            };
            this.invalidateCellRange(this.selection.range);
          }
          /** @private */


          function _onRangeDelete() {
            var _this10 = this;

            var _a;

            var layoutMap = this[_].layoutMap;
            var selectionRange = this.selection.range;

            var _this$getCellRange3 = this.getCellRange(selectionRange.start.col, selectionRange.start.row),
                start = _this$getCellRange3.start;

            var _this$getCellRange4 = this.getCellRange(selectionRange.end.col, selectionRange.end.row),
                end = _this$getCellRange4.end;

            var deleteRowCount = Math.min(end.row - start.row + 1, this.rowCount - start.row);
            var deleteColCount = Math.min(end.col - start.col + 1, this.colCount - start.col);
            var hasEditable = false;
            var actionColumnsBox = [];

            for (var bodyRow = 0; bodyRow < layoutMap.bodyRowCount; bodyRow++) {
              var actionColumnsRow = [];
              actionColumnsBox.push(actionColumnsRow);

              for (var offsetCol = 0; offsetCol < deleteColCount; offsetCol++) {
                var body = layoutMap.getBody(start.col + offsetCol, bodyRow + layoutMap.headerRowCount);
                actionColumnsRow[offsetCol] = body;

                if (!hasEditable && ((_a = body.action) === null || _a === void 0 ? void 0 : _a.editable)) {
                  hasEditable = true;
                }
              }
            }

            if (!hasEditable) {
              return;
            }

            var startRow = layoutMap.getRecordStartRowByRecordIndex(layoutMap.getRecordIndexByRow(start.row));
            var startRowOffset = start.row - startRow;
            var duplicate = {};
            var actionRow = startRowOffset;

            for (var offsetRow = 0; offsetRow < deleteRowCount; offsetRow++) {
              var _loop2 = function _loop2(_offsetCol2) {
                var _actionColumnsBox$act2 = actionColumnsBox[actionRow][_offsetCol2],
                    action = _actionColumnsBox$act2.action,
                    id = _actionColumnsBox$act2.id;

                if (!duplicate[id] && (action === null || action === void 0 ? void 0 : action.editable)) {
                  duplicate[id] = true;
                  var col = start.col + _offsetCol2;
                  var row = start.row + offsetRow;
                  utils_1.then(_this10.getRowRecord(row), function (_record) {
                    utils_1.then(_getCellValue(_this10, col, row), function (_oldValue) {
                      action.onDeleteCellRangeBox(_this10, {
                        col: col,
                        row: row
                      });
                    });
                  });
                }
              };

              for (var _offsetCol2 = 0; _offsetCol2 < deleteColCount; _offsetCol2++) {
                _loop2(_offsetCol2);
              }

              actionRow++;

              if (actionRow >= layoutMap.bodyRowCount) {
                actionRow = 0;
                duplicate = {};
              }
            }

            this.invalidateCellRange(selectionRange);
          }
          /** @private */


          function adjustListGridOption(options) {
            delete options.frozenRowCount;
            delete options.colCount;
            delete options.rowCount;
            return options;
          }
          /**
           * ListGrid
           * @classdesc cheetahGrid.ListGrid
           * @memberof cheetahGrid
           */


          var ListGrid = /*#__PURE__*/function (_DrawGrid_1$DrawGrid) {
            _inherits(ListGrid, _DrawGrid_1$DrawGrid);

            var _super = _createSuper(ListGrid);

            /**
             * constructor
             *
             * @constructor
             * @param options Constructor options
             */
            function ListGrid() {
              var _this11;

              var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, ListGrid);

              var _a;

              _this11 = _super.call(this, adjustListGridOption(options));
              _this11.disabled = false;
              _this11.readOnly = false;
              var protectedSpace = _this11[_];
              protectedSpace.header = options.header || [];
              protectedSpace.layout = options.layout || [];
              protectedSpace.headerRowHeight = options.headerRowHeight || [];

              if (options.dataSource) {
                _setDataSource(_assertThisInitialized(_this11), options.dataSource);
              } else {
                _setRecords(_assertThisInitialized(_this11), options.records);
              }

              protectedSpace.allowRangePaste = (_a = options.allowRangePaste) !== null && _a !== void 0 ? _a : false;

              _refreshHeader(_assertThisInitialized(_this11));

              protectedSpace.sortState = {
                col: -1,
                row: -1,
                order: undefined
              };
              protectedSpace.gridCanvasHelper = new GridCanvasHelper_1.GridCanvasHelper(_assertThisInitialized(_this11));
              protectedSpace.theme = themes.of(options.theme);
              protectedSpace.messageHandler = new MessageHandler_1.MessageHandler(_assertThisInitialized(_this11), function (col, row) {
                return _getCellMessage(_assertThisInitialized(_this11), col, row);
              });
              protectedSpace.tooltipHandler = new TooltipHandler_1.TooltipHandler(_assertThisInitialized(_this11));

              _this11.invalidate();

              protectedSpace.handler.on(window, "resize", function () {
                _this11.updateSize();

                _this11.updateScroll();

                _this11.invalidate();
              });
              return _this11;
            }

            _createClass(ListGrid, [{
              key: "dispose",

              /**
               * Dispose the grid instance.
               * @returns {void}
               */
              value: function dispose() {
                var protectedSpace = this[_];
                protectedSpace.messageHandler.dispose();
                protectedSpace.tooltipHandler.dispose();

                _get(_getPrototypeOf(ListGrid.prototype), "dispose", this).call(this);
              }
              /**
               * Gets the define of the header.
               */

            }, {
              key: "getField",

              /**
               * Get the field of the given column index.
               * @param  {number} col The column index.
               * @param  {number} row The row index.
               * @return {*} The field object.
               */
              value: function getField(col, row) {
                return this[_].layoutMap.getBody(col, row !== null && row !== void 0 ? row : this[_].layoutMap.headerRowCount).field;
              }
              /**
               * Get the column define of the given column index.
               * @param  {number} col The column index.
               * @param  {number} row The row index.
               * @return {*} The column define object.
               */

            }, {
              key: "getColumnDefine",
              value: function getColumnDefine(col, row) {
                return this[_].layoutMap.getBody(col, row !== null && row !== void 0 ? row : this[_].layoutMap.headerRowCount).define;
              }
            }, {
              key: "getColumnType",
              value: function getColumnType(col, row) {
                return this[_].layoutMap.getBody(col, row).columnType;
              }
              /**
               * Get the header field of the given header cell.
               * @param  {number} col The column index.
               * @param  {number} row The header row index.
               * @return {*} The field object.
               */
              // eslint-disable-next-line @typescript-eslint/no-explicit-any

            }, {
              key: "getHeaderField",
              value: function getHeaderField(col, row) {
                var hd = this[_].layoutMap.getHeader(col, row);

                return hd.field;
              }
              /**
               * Get the header define of the given header cell.
               * @param  {number} col The column index.
               * @param  {number} row The header row index.
               * @return {*} The header define object.
               */

            }, {
              key: "getHeaderDefine",
              value: function getHeaderDefine(col, row) {
                var hd = this[_].layoutMap.getHeader(col, row);

                return hd.define;
              }
              /**
               * Get the record of the given row index.
               * @param  {number} row The row index.
               * @return {object} The record.
               */

            }, {
              key: "getRowRecord",
              value: function getRowRecord(row) {
                if (row < this[_].layoutMap.headerRowCount) {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  return undefined;
                } else {
                  return this[_].dataSource.get(_getRecordIndexByRow(this, row));
                }
              }
              /**
               * Get the record index of the given row index.
               * @param  {number} row The row index.
               */

            }, {
              key: "getRecordIndexByRow",
              value: function getRecordIndexByRow(row) {
                return _getRecordIndexByRow(this, row);
              }
              /**
               * Gets the row index starting at the given record index.
               * @param  {number} index The record index.
               */

            }, {
              key: "getRecordStartRowByRecordIndex",
              value: function getRecordStartRowByRecordIndex(index) {
                return this[_].layoutMap.getRecordStartRowByRecordIndex(index);
              }
              /**
               * Get the column index of the given field.
               * @param  {*} field The field.
               * @return {number} The column index.
               * @deprecated use `getCellRangeByField` instead
               */

            }, {
              key: "getColumnIndexByField",
              value: function getColumnIndexByField(field) {
                var _a;

                var range = this.getCellRangeByField(field, 0);
                return (_a = range === null || range === void 0 ? void 0 : range.start.col) !== null && _a !== void 0 ? _a : null;
              }
              /**
               * Get the column index of the given field.
               * @param  {*} field The field.
               * @param  {number} index The record index
               * @return {number} The column index.
               */

            }, {
              key: "getCellRangeByField",
              value: function getCellRangeByField(field, index) {
                var layoutMap = this[_].layoutMap;
                var colObj = layoutMap.columnObjects.find(function (col) {
                  return col.field === field;
                });

                if (colObj) {
                  var layoutRange = layoutMap.getBodyLayoutRangeById(colObj.id);
                  var startRow = layoutMap.getRecordStartRowByRecordIndex(index);
                  return {
                    start: {
                      col: layoutRange.start.col,
                      row: startRow + layoutRange.start.row
                    },
                    end: {
                      col: layoutRange.end.col,
                      row: startRow + layoutRange.end.row
                    }
                  };
                }

                return null;
              }
              /**
               * Focus the cell.
               * @param  {*} field The field.
               * @param  {number} index The record index
               * @return {void}
               */

            }, {
              key: "focusGridCell",
              value: function focusGridCell(field, index) {
                var _a;

                var _this$selection$range = this.selection.range,
                    _this$selection$range2 = _this$selection$range.start,
                    startCol = _this$selection$range2.col,
                    startRow = _this$selection$range2.row,
                    _this$selection$range3 = _this$selection$range.end,
                    endCol = _this$selection$range3.col,
                    endRow = _this$selection$range3.row;
                var newFocus = (_a = this.getCellRangeByField(field, index)) === null || _a === void 0 ? void 0 : _a.start;

                if (newFocus == null) {
                  return;
                }

                this.focusCell(newFocus.col, newFocus.row);
                this.selection.select = newFocus;
                this.invalidateGridRect(startCol, startRow, endCol, endRow);
                this.invalidateCell(newFocus.col, newFocus.row);
              }
              /**
               * Scroll to where cell is visible.
               * @param  {*} field The field.
               * @param  {number} index The record index
               * @return {void}
               */

            }, {
              key: "makeVisibleGridCell",
              value: function makeVisibleGridCell(field, index) {
                var _a, _b, _c;

                var cell = (_a = this.getCellRangeByField(field, index)) === null || _a === void 0 ? void 0 : _a.start;
                this.makeVisibleCell((_b = cell === null || cell === void 0 ? void 0 : cell.col) !== null && _b !== void 0 ? _b : 0, (_c = cell === null || cell === void 0 ? void 0 : cell.row) !== null && _c !== void 0 ? _c : this[_].layoutMap.headerRowCount);
              }
            }, {
              key: "getGridCanvasHelper",
              value: function getGridCanvasHelper() {
                return this[_].gridCanvasHelper;
              }
              /**
               * Get cell range information for a given cell.
               * @param {number} col column index of the cell
               * @param {number} row row index of the cell
               * @returns {object} cell range info
               */

            }, {
              key: "getCellRange",
              value: function getCellRange(col, row) {
                return _getCellRange(this, col, row);
              }
              /**
               * Get header range information for a given cell.
               * @param {number} col column index of the cell
               * @param {number} row row index of the cell
               * @returns {object} cell range info
               * @deprecated use `getCellRange` instead
               */

            }, {
              key: "getHeaderCellRange",
              value: function getHeaderCellRange(col, row) {
                return this.getCellRange(col, row);
              }
            }, {
              key: "getCopyCellValue",
              value: function getCopyCellValue(col, row, range) {
                var _a;

                var cellRange = _getCellRange(this, col, row);

                var startCol = range ? Math.max(range.start.col, cellRange.start.col) : cellRange.start.col;
                var startRow = range ? Math.max(range.start.row, cellRange.start.row) : cellRange.start.row;

                if (startCol !== col || startRow !== row) {
                  return "";
                }

                var value = _getCellValue(this, col, row);

                if (row < this[_].layoutMap.headerRowCount) {
                  return value;
                }

                var columnData = this[_].layoutMap.getBody(col, row);

                return (_a = columnData.columnType.getCopyCellValue(value, this, {
                  col: col,
                  row: row
                })) !== null && _a !== void 0 ? _a : value;
              }
            }, {
              key: "onDrawCell",
              value: function onDrawCell(col, row, context) {
                var layoutMap = this[_].layoutMap;
                var draw;
                var style;

                if (row < layoutMap.headerRowCount) {
                  var hd = layoutMap.getHeader(col, row);
                  draw = hd.headerType.onDrawCell;
                  style = hd.style;

                  _updateRect(this, col, row, context);
                } else {
                  var column = layoutMap.getBody(col, row);
                  draw = column.columnType.onDrawCell;
                  style = column.style;

                  _updateRect(this, col, row, context);
                }

                var cellValue = _getCellValue(this, col, row);

                return _onDrawValue(this, cellValue, context, {
                  col: col,
                  row: row
                }, style, draw);
              }
            }, {
              key: "doGetCellValue",
              value: function doGetCellValue(col, row, // eslint-disable-next-line @typescript-eslint/no-explicit-any
              valueCallback) {
                if (row < this[_].layoutMap.headerRowCount) {
                  // nop
                  return false;
                } else {
                  var value = _getCellValue(this, col, row);

                  if (utils_1.isPromise(value)) {
                    //遅延中は無視
                    return false;
                  }

                  valueCallback(value);
                }

                return true;
              }
            }, {
              key: "doChangeValue",
              value: function doChangeValue(col, row, // eslint-disable-next-line @typescript-eslint/no-explicit-any
              changeValueCallback) {
                var _this12 = this;

                if (row < this[_].layoutMap.headerRowCount) {
                  // nop
                  return false;
                } else {
                  var record = this.getRowRecord(row);

                  if (utils_1.isPromise(record)) {
                    //遅延中は無視
                    return false;
                  }

                  var before = _getCellValue(this, col, row);

                  if (utils_1.isPromise(before)) {
                    //遅延中は無視
                    return false;
                  }

                  var after = changeValueCallback(before);

                  if (after === undefined) {
                    return false;
                  }

                  return utils_1.then(_setCellValue(this, col, row, after), function (ret) {
                    if (ret) {
                      var _this12$_$layoutMap$g = _this12[_].layoutMap.getBody(col, row),
                          field = _this12$_$layoutMap$g.field;

                      _this12.fireListeners(LG_EVENT_TYPE_1.LG_EVENT_TYPE.CHANGED_VALUE, {
                        col: col,
                        row: row,
                        record: record,
                        field: field,
                        value: after,
                        oldValue: before
                      });
                    }

                    return ret;
                  });
                }
              }
            }, {
              key: "doSetPasteValue",
              value: function doSetPasteValue(text, test) {
                _onRangePaste.call(this, text, test);
              } // eslint-disable-next-line @typescript-eslint/no-explicit-any

            }, {
              key: "getHeaderValue",
              value: function getHeaderValue(col, row) {
                var field = this.getHeaderField(col, row);
                return this.headerValues.get(field);
              } // eslint-disable-next-line @typescript-eslint/no-explicit-any

            }, {
              key: "setHeaderValue",
              value: function setHeaderValue(col, row, newValue) {
                var field = this.getHeaderField(col, row);
                var oldValue = this.headerValues.get(field);
                this.headerValues.set(field, newValue);
                this.fireListeners(LG_EVENT_TYPE_1.LG_EVENT_TYPE.CHANGED_HEADER_VALUE, {
                  col: col,
                  row: row,
                  field: field,
                  value: newValue,
                  oldValue: oldValue
                });
              }
            }, {
              key: "getLayoutCellId",
              value: function getLayoutCellId(col, row) {
                return this[_].layoutMap.getCellId(col, row);
              }
            }, {
              key: "bindEventsInternal",
              value: function bindEventsInternal() {
                var _this13 = this;

                var grid = this;
                grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.SELECTED_CELL, function (e) {
                  var range = _getCellRange(_this13, e.col, e.row);

                  var _range$start = range.start,
                      startCol = _range$start.col,
                      startRow = _range$start.row,
                      _range$end = range.end,
                      endCol = _range$end.col,
                      endRow = _range$end.row;

                  if (startCol !== endCol || startRow !== endRow) {
                    _this13.invalidateCellRange(range);
                  }
                });
                grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.PASTE_CELL, function (e) {
                  if (!_this13[_].allowRangePaste) {
                    return;
                  }

                  var _this13$selection$ran = _this13.selection.range,
                      start = _this13$selection$ran.start,
                      end = _this13$selection$ran.end;

                  if (!e.multi && utils_1.cellEquals(start, end)) {
                    return;
                  }

                  var layoutMap = _this13[_].layoutMap;

                  if (start.row < layoutMap.headerRowCount) {
                    return;
                  }

                  utils_1.event.cancel(e.event);

                  _onRangePaste.call(_this13, e.normalizeValue);
                });
                grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.DELETE_CELL, function (e) {
                  var start = _this13.selection.range.start;
                  var layoutMap = _this13[_].layoutMap;

                  if (start.row < layoutMap.headerRowCount) {
                    return;
                  }

                  utils_1.event.cancel(e.event);

                  _onRangeDelete.call(_this13);
                });
              }
            }, {
              key: "getMoveLeftColByKeyDownInternal",
              value: function getMoveLeftColByKeyDownInternal(_ref16) {
                var col = _ref16.col,
                    row = _ref16.row;

                var _getCellRange3 = _getCellRange(this, col, row),
                    startCol = _getCellRange3.start.col;

                col = startCol;
                return _get(_getPrototypeOf(ListGrid.prototype), "getMoveLeftColByKeyDownInternal", this).call(this, {
                  col: col,
                  row: row
                });
              }
            }, {
              key: "getMoveRightColByKeyDownInternal",
              value: function getMoveRightColByKeyDownInternal(_ref17) {
                var col = _ref17.col,
                    row = _ref17.row;

                var _getCellRange4 = _getCellRange(this, col, row),
                    endCol = _getCellRange4.end.col;

                col = endCol;
                return _get(_getPrototypeOf(ListGrid.prototype), "getMoveRightColByKeyDownInternal", this).call(this, {
                  col: col,
                  row: row
                });
              }
            }, {
              key: "getMoveUpRowByKeyDownInternal",
              value: function getMoveUpRowByKeyDownInternal(_ref18) {
                var col = _ref18.col,
                    row = _ref18.row;

                var _getCellRange5 = _getCellRange(this, col, row),
                    startRow = _getCellRange5.start.row;

                row = startRow;
                return _get(_getPrototypeOf(ListGrid.prototype), "getMoveUpRowByKeyDownInternal", this).call(this, {
                  col: col,
                  row: row
                });
              }
            }, {
              key: "getMoveDownRowByKeyDownInternal",
              value: function getMoveDownRowByKeyDownInternal(_ref19) {
                var col = _ref19.col,
                    row = _ref19.row;

                var _getCellRange6 = _getCellRange(this, col, row),
                    endRow = _getCellRange6.end.row;

                row = endRow;
                return _get(_getPrototypeOf(ListGrid.prototype), "getMoveDownRowByKeyDownInternal", this).call(this, {
                  col: col,
                  row: row
                });
              }
            }, {
              key: "getOffsetInvalidateCells",
              value: function getOffsetInvalidateCells() {
                return 1;
              }
            }, {
              key: "getCopyRangeInternal",
              value: function getCopyRangeInternal(range) {
                var _this$getCellRange5 = this.getCellRange(range.start.col, range.start.row),
                    start = _this$getCellRange5.start;

                var _this$getCellRange6 = this.getCellRange(range.end.col, range.end.row),
                    end = _this$getCellRange6.end;

                return {
                  start: start,
                  end: end
                };
              }
            }, {
              key: "fireListeners",
              value: function fireListeners(type) {
                var _get2;

                for (var _len3 = arguments.length, event = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                  event[_key3 - 1] = arguments[_key3];
                }

                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return (_get2 = _get(_getPrototypeOf(ListGrid.prototype), "fireListeners", this)).call.apply(_get2, [this, type].concat(event));
              }
            }, {
              key: "header",
              get: function get() {
                return this[_].header;
              }
              /**
               * Sets the define of the header with the given data.
               * <pre>
               * column options
               * -----
               * caption: header caption
               * field: field name
               * width: column width
               * minWidth: column min width
               * maxWidth: column max width
               * icon: icon name
               * message: message key name
               * columnType: column type
               * action: column action
               * style: column style
               * headerType: header type
               * headerStyle: header style
               * headerAction: header action
               * headerField: header field name
               * sort: define sort setting
               * -----
               *
               * multiline header
               * -----
               * caption: header caption
               * columns: columns define
               * -----
               * </pre>
               */
              ,
              set: function set(header) {
                this[_].header = header;

                _refreshHeader(this);
              }
              /**
               * Gets the define of the layout.
               */

            }, {
              key: "layout",
              get: function get() {
                return this[_].layout;
              }
              /**
               * Sets the define of the layout with the given data.
               */
              ,
              set: function set(layout) {
                this[_].layout = layout;

                _refreshHeader(this);
              }
              /**
               * Get the row count per record
               */

            }, {
              key: "recordRowCount",
              get: function get() {
                return this[_].layoutMap.bodyRowCount;
              }
              /**
               * Get the records.
               */

            }, {
              key: "records",
              get: function get() {
                return this[_].records || null;
              }
              /**
               * Set the records from given
               */
              ,
              set: function set(records) {
                if (records == null) {
                  return;
                }

                _setRecords(this, records);

                _refreshRowCount(this);

                this.invalidate();
              }
              /**
               * Get the data source.
               */

            }, {
              key: "dataSource",
              get: function get() {
                return this[_].dataSource;
              }
              /**
               * Set the data source from given
               */
              ,
              set: function set(dataSource) {
                _setDataSource(this, dataSource);

                _refreshRowCount(this);

                this.invalidate();
              }
              /**
               * Get the theme.
               */

            }, {
              key: "theme",
              get: function get() {
                return this[_].theme;
              }
              /**
               * Set the theme from given
               */
              ,
              set: function set(theme) {
                this[_].theme = themes.of(theme);
                this.invalidate();
              }
              /**
               * If set to true to allow pasting of ranges.
               */

            }, {
              key: "allowRangePaste",
              get: function get() {
                return this[_].allowRangePaste;
              },
              set: function set(allowRangePaste) {
                this[_].allowRangePaste = allowRangePaste;
              }
              /**
               * Get the font definition as a string.
               * @override
               */

            }, {
              key: "font",
              get: function get() {
                return _get(_getPrototypeOf(ListGrid.prototype), "font", this) || this[_].gridCanvasHelper.theme.font;
              }
              /**
               * Set the font definition with the given string.
               * @override
               */
              ,
              set: function set(font) {
                _set(_getPrototypeOf(ListGrid.prototype), "font", font, this, true);
              }
              /**
               * Get the background color of the underlay.
               * @override
               */

            }, {
              key: "underlayBackgroundColor",
              get: function get() {
                return _get(_getPrototypeOf(ListGrid.prototype), "underlayBackgroundColor", this) || this[_].gridCanvasHelper.theme.underlayBackgroundColor;
              }
              /**
               * Set the background color of the underlay.
               * @override
               */
              ,
              set: function set(underlayBackgroundColor) {
                _set(_getPrototypeOf(ListGrid.prototype), "underlayBackgroundColor", underlayBackgroundColor, this, true);
              }
              /**
               * Get the sort state.
               */

            }, {
              key: "sortState",
              get: function get() {
                return this[_].sortState;
              }
              /**
               * Sets the sort state.
               * If `null` to set, the sort state is initialized.
               */
              ,
              set: function set(sortState) {
                var oldState = this.sortState;
                var oldField;

                if (oldState.col >= 0 && oldState.row >= 0) {
                  oldField = this.getHeaderField(oldState.col, oldState.row);
                }

                var newState = this[_].sortState = utils_1.isDef(sortState) ? sortState : {
                  col: -1,
                  row: -1,
                  order: undefined
                };
                var newField;

                if (newState.col >= 0 && newState.row >= 0) {
                  newField = this.getHeaderField(newState.col, newState.row);
                } // bind header value


                if (utils_1.isDef(oldField) && oldField !== newField) {
                  this.setHeaderValue(oldState.col, oldState.row, undefined);
                }

                if (utils_1.isDef(newField)) {
                  this.setHeaderValue(newState.col, newState.row, newState.order);
                }
              }
              /**
               * Get the header values.
               */

            }, {
              key: "headerValues",
              get: function get() {
                return this[_].headerValues || (this[_].headerValues = new Map());
              }
              /**
               * Sets the header values.
               */
              ,
              set: function set(headerValues) {
                this[_].headerValues = headerValues || new Map();
              }
            }], [{
              key: "EVENT_TYPE",
              get: function get() {
                return LG_EVENT_TYPE_1.LG_EVENT_TYPE;
              }
            }]);

            return ListGrid;
          }(DrawGrid_1.DrawGrid);

          exports.ListGrid = ListGrid;
          /***/
        },

        /***/
        "./columns.js":
        /*!********************!*\
          !*** ./columns.js ***!
          \********************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var action = __importStar(__webpack_require__(
          /*! ./columns/action */
          "./columns/action.js"));

          exports.action = action;

          var style = __importStar(__webpack_require__(
          /*! ./columns/style */
          "./columns/style.js"));

          exports.style = style;

          var type = __importStar(__webpack_require__(
          /*! ./columns/type */
          "./columns/type.js"));

          exports.type = type;
          /***/
        },

        /***/
        "./columns/action.js":
        /*!***************************!*\
          !*** ./columns/action.js ***!
          \***************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsActionJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var Action_1 = __webpack_require__(
          /*! ./action/Action */
          "./columns/action/Action.js");

          exports.Action = Action_1.Action;

          var BaseAction_1 = __webpack_require__(
          /*! ./action/BaseAction */
          "./columns/action/BaseAction.js");

          exports.BaseAction = BaseAction_1.BaseAction;

          var ButtonAction_1 = __webpack_require__(
          /*! ./action/ButtonAction */
          "./columns/action/ButtonAction.js");

          exports.ButtonAction = ButtonAction_1.ButtonAction;

          var CheckEditor_1 = __webpack_require__(
          /*! ./action/CheckEditor */
          "./columns/action/CheckEditor.js");

          exports.CheckEditor = CheckEditor_1.CheckEditor;

          var Editor_1 = __webpack_require__(
          /*! ./action/Editor */
          "./columns/action/Editor.js");

          exports.Editor = Editor_1.Editor;

          var InlineInputEditor_1 = __webpack_require__(
          /*! ./action/InlineInputEditor */
          "./columns/action/InlineInputEditor.js");

          exports.InlineInputEditor = InlineInputEditor_1.InlineInputEditor;

          var InlineMenuEditor_1 = __webpack_require__(
          /*! ./action/InlineMenuEditor */
          "./columns/action/InlineMenuEditor.js");

          exports.InlineMenuEditor = InlineMenuEditor_1.InlineMenuEditor;

          var RadioEditor_1 = __webpack_require__(
          /*! ./action/RadioEditor */
          "./columns/action/RadioEditor.js");

          exports.RadioEditor = RadioEditor_1.RadioEditor;

          var SmallDialogInputEditor_1 = __webpack_require__(
          /*! ./action/SmallDialogInputEditor */
          "./columns/action/SmallDialogInputEditor.js");

          exports.SmallDialogInputEditor = SmallDialogInputEditor_1.SmallDialogInputEditor; // eslint-disable-next-line @typescript-eslint/no-explicit-any

          var ImmutableCheckEditor = /*#__PURE__*/function (_CheckEditor_1$CheckE) {
            _inherits(ImmutableCheckEditor, _CheckEditor_1$CheckE);

            var _super2 = _createSuper(ImmutableCheckEditor);

            function ImmutableCheckEditor() {
              _classCallCheck(this, ImmutableCheckEditor);

              return _super2.apply(this, arguments);
            }

            _createClass(ImmutableCheckEditor, [{
              key: "disabled",
              get: function get() {
                return this._disabled;
              }
            }, {
              key: "readOnly",
              get: function get() {
                return this._readOnly;
              }
            }]);

            return ImmutableCheckEditor;
          }(CheckEditor_1.CheckEditor); // eslint-disable-next-line @typescript-eslint/no-explicit-any


          var ImmutableRadioEditor = /*#__PURE__*/function (_RadioEditor_1$RadioE) {
            _inherits(ImmutableRadioEditor, _RadioEditor_1$RadioE);

            var _super3 = _createSuper(ImmutableRadioEditor);

            function ImmutableRadioEditor() {
              _classCallCheck(this, ImmutableRadioEditor);

              return _super3.apply(this, arguments);
            }

            _createClass(ImmutableRadioEditor, [{
              key: "disabled",
              get: function get() {
                return this._disabled;
              }
            }, {
              key: "readOnly",
              get: function get() {
                return this._readOnly;
              }
            }]);

            return ImmutableRadioEditor;
          }(RadioEditor_1.RadioEditor); // eslint-disable-next-line @typescript-eslint/no-explicit-any


          var ImmutableInputEditor = /*#__PURE__*/function (_SmallDialogInputEdit) {
            _inherits(ImmutableInputEditor, _SmallDialogInputEdit);

            var _super4 = _createSuper(ImmutableInputEditor);

            function ImmutableInputEditor() {
              _classCallCheck(this, ImmutableInputEditor);

              return _super4.apply(this, arguments);
            }

            _createClass(ImmutableInputEditor, [{
              key: "disabled",
              get: function get() {
                return this._disabled;
              }
            }, {
              key: "readOnly",
              get: function get() {
                return this._readOnly;
              }
            }]);

            return ImmutableInputEditor;
          }(SmallDialogInputEditor_1.SmallDialogInputEditor);

          exports.ACTIONS = {
            CHECK: new ImmutableCheckEditor(),
            INPUT: new ImmutableInputEditor(),
            RADIO: new ImmutableRadioEditor()
          };

          function of(columnAction) {
            if (!columnAction) {
              return undefined;
            } else if (typeof columnAction === "string") {
              var key = columnAction.toUpperCase();
              return exports.ACTIONS[key] || of(null);
            } else {
              return columnAction;
            }
          }

          exports.of = of;
          /***/
        },

        /***/
        "./columns/action/Action.js":
        /*!**********************************!*\
          !*** ./columns/action/Action.js ***!
          \**********************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsActionActionJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var actionBind_1 = __webpack_require__(
          /*! ./actionBind */
          "./columns/action/actionBind.js");

          var BaseAction_1 = __webpack_require__(
          /*! ./BaseAction */
          "./columns/action/BaseAction.js");

          var action_utils_1 = __webpack_require__(
          /*! ./action-utils */
          "./columns/action/action-utils.js");

          var Action = /*#__PURE__*/function (_BaseAction_1$BaseAct) {
            _inherits(Action, _BaseAction_1$BaseAct);

            var _super5 = _createSuper(Action);

            function Action() {
              var _this14;

              var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, Action);

              _this14 = _super5.call(this, option);

              _this14._action = option.action || function () {};

              return _this14;
            }

            _createClass(Action, [{
              key: "clone",
              value: function clone() {
                return new Action(this);
              }
            }, {
              key: "getState",
              value: function getState(_grid) {
                return {};
              }
            }, {
              key: "bindGridEvent",
              value: function bindGridEvent(grid, cellId) {
                var _this15 = this;

                var state = this.getState(grid);

                var action = function action(cell) {
                  if (action_utils_1.isDisabledRecord(_this15.disabled, grid, cell.row)) {
                    return;
                  }

                  var record = grid.getRowRecord(cell.row);

                  _this15._action(record, cell);
                };

                return [].concat(_toConsumableArray(actionBind_1.bindCellClickAction(grid, cellId, {
                  action: action,
                  mouseOver: function mouseOver(e) {
                    if (action_utils_1.isDisabledRecord(_this15.disabled, grid, e.row)) {
                      return false;
                    }

                    state.mouseActiveCell = {
                      col: e.col,
                      row: e.row
                    };
                    var range = grid.getCellRange(e.col, e.row);
                    grid.invalidateCellRange(range);
                    return true;
                  },
                  mouseOut: function mouseOut(e) {
                    delete state.mouseActiveCell;
                    var range = grid.getCellRange(e.col, e.row);
                    grid.invalidateCellRange(range);
                  }
                })), _toConsumableArray(actionBind_1.bindCellKeyAction(grid, cellId, {
                  action: action
                })));
              }
            }, {
              key: "onPasteCellRangeBox",
              value: function onPasteCellRangeBox() {// noop
              }
            }, {
              key: "onDeleteCellRangeBox",
              value: function onDeleteCellRangeBox() {// noop
              }
            }, {
              key: "editable",
              get: function get() {
                return false;
              }
            }, {
              key: "action",
              get: function get() {
                return this._action;
              },
              set: function set(action) {
                this._action = action;
              }
            }]);

            return Action;
          }(BaseAction_1.BaseAction);

          exports.Action = Action;
          /***/
        },

        /***/
        "./columns/action/BaseAction.js":
        /*!**************************************!*\
          !*** ./columns/action/BaseAction.js ***!
          \**************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsActionBaseActionJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var BaseAction = /*#__PURE__*/function () {
            function BaseAction() {
              var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, BaseAction);

              this._disabled = option.disabled || false;
            }

            _createClass(BaseAction, [{
              key: "onChangeDisabledInternal",
              value: function onChangeDisabledInternal() {// abstruct
              }
            }, {
              key: "disabled",
              get: function get() {
                return this._disabled;
              },
              set: function set(disabled) {
                this._disabled = disabled;
                this.onChangeDisabledInternal();
              }
            }]);

            return BaseAction;
          }();

          exports.BaseAction = BaseAction;
          /***/
        },

        /***/
        "./columns/action/BaseInputEditor.js":
        /*!*******************************************!*\
          !*** ./columns/action/BaseInputEditor.js ***!
          \*******************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsActionBaseInputEditorJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          var action_utils_1 = __webpack_require__(
          /*! ./action-utils */
          "./columns/action/action-utils.js");

          var DG_EVENT_TYPE_1 = __webpack_require__(
          /*! ../../core/DG_EVENT_TYPE */
          "./core/DG_EVENT_TYPE.js");

          var Editor_1 = __webpack_require__(
          /*! ./Editor */
          "./columns/action/Editor.js");

          var KEY_ENTER = 13;
          var KEY_F2 = 113;

          var BaseInputEditor = /*#__PURE__*/function (_Editor_1$Editor) {
            _inherits(BaseInputEditor, _Editor_1$Editor);

            var _super6 = _createSuper(BaseInputEditor);

            function BaseInputEditor() {
              var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, BaseInputEditor);

              return _super6.call(this, option);
            }

            _createClass(BaseInputEditor, [{
              key: "bindGridEvent",
              value: function bindGridEvent(grid, cellId) {
                var _this16 = this;

                var open = function open(cell) {
                  if (action_utils_1.isReadOnlyRecord(_this16.readOnly, grid, cell.row) || action_utils_1.isDisabledRecord(_this16.disabled, grid, cell.row)) {
                    return false;
                  }

                  _this16.onOpenCellInternal(grid, cell);

                  return true;
                };

                var input = function input(cell, value) {
                  if (action_utils_1.isReadOnlyRecord(_this16.readOnly, grid, cell.row) || action_utils_1.isDisabledRecord(_this16.disabled, grid, cell.row)) {
                    return;
                  }

                  _this16.onInputCellInternal(grid, cell, value);
                };

                function isTarget(col, row) {
                  return grid.getLayoutCellId(col, row) === cellId;
                }

                return [grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.INPUT_CELL, function (e) {
                  if (!isTarget(e.col, e.row)) {
                    return;
                  }

                  input({
                    col: e.col,
                    row: e.row
                  }, e.value);
                }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.PASTE_CELL, function (e) {
                  if (e.multi) {
                    // ignore multi cell values
                    return;
                  }

                  var selectionRange = grid.selection.range;

                  if (!utils_1.cellEquals(selectionRange.start, selectionRange.end)) {
                    // ignore multi paste values
                    return;
                  }

                  if (!isTarget(e.col, e.row)) {
                    return;
                  }

                  utils_1.event.cancel(e.event);
                  input({
                    col: e.col,
                    row: e.row
                  }, e.normalizeValue);
                }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.DBLCLICK_CELL, function (cell) {
                  if (!isTarget(cell.col, cell.row)) {
                    return;
                  }

                  open({
                    col: cell.col,
                    row: cell.row
                  });
                }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.DBLTAP_CELL, function (e) {
                  if (!isTarget(e.col, e.row)) {
                    return;
                  }

                  open({
                    col: e.col,
                    row: e.row
                  });
                  utils_1.event.cancel(e.event);
                }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.KEYDOWN, function (e) {
                  if (e.keyCode !== KEY_F2 && e.keyCode !== KEY_ENTER) {
                    return;
                  }

                  var sel = grid.selection.select;

                  if (!isTarget(sel.col, sel.row)) {
                    return;
                  }

                  if (open({
                    col: sel.col,
                    row: sel.row
                  })) {
                    e.stopCellMoving();
                  }
                }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SELECTED_CELL, function (e) {
                  _this16.onChangeSelectCellInternal(grid, {
                    col: e.col,
                    row: e.row
                  }, e.selected);
                }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SCROLL, function () {
                  _this16.onGridScrollInternal(grid);
                }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.EDITABLEINPUT_CELL, function (cell) {
                  if (!isTarget(cell.col, cell.row)) {
                    return false;
                  }

                  if (action_utils_1.isReadOnlyRecord(_this16.readOnly, grid, cell.row) || action_utils_1.isDisabledRecord(_this16.disabled, grid, cell.row)) {
                    return false;
                  }

                  return true;
                }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MODIFY_STATUS_EDITABLEINPUT_CELL, function (cell) {
                  if (!isTarget(cell.col, cell.row)) {
                    return;
                  }

                  if (action_utils_1.isReadOnlyRecord(_this16.readOnly, grid, cell.row) || action_utils_1.isDisabledRecord(_this16.disabled, grid, cell.row)) {
                    return;
                  }

                  var range = grid.getCellRange(cell.col, cell.row);

                  if (range.start.col !== range.end.col || range.start.row !== range.end.row) {
                    var _input = cell.input;
                    var baseRect = grid.getCellRect(cell.col, cell.row);
                    var rangeRect = grid.getCellRangeRect(range);
                    _input.style.top = "".concat((parseFloat(_input.style.top) + (rangeRect.top - baseRect.top)).toFixed(), "px");
                    _input.style.left = "".concat((parseFloat(_input.style.left) + (rangeRect.left - baseRect.left)).toFixed(), "px");
                    _input.style.width = "".concat(rangeRect.width.toFixed(), "px");
                    _input.style.height = "".concat(rangeRect.height.toFixed(), "px");
                  }

                  _this16.onSetInputAttrsInternal(grid, {
                    col: cell.col,
                    row: cell.row
                  }, cell.input);
                })];
              }
            }, {
              key: "onPasteCellRangeBox",
              value: function onPasteCellRangeBox(grid, cell, value) {
                if (action_utils_1.isReadOnlyRecord(this.readOnly, grid, cell.row) || action_utils_1.isDisabledRecord(this.disabled, grid, cell.row)) {
                  return;
                }

                grid.doChangeValue(cell.col, cell.row, function () {
                  return value;
                });
              }
            }, {
              key: "onDeleteCellRangeBox",
              value: function onDeleteCellRangeBox(grid, cell) {
                if (action_utils_1.isReadOnlyRecord(this.readOnly, grid, cell.row) || action_utils_1.isDisabledRecord(this.disabled, grid, cell.row)) {
                  return;
                }

                grid.doChangeValue(cell.col, cell.row, function () {
                  return "";
                });
              }
            }]);

            return BaseInputEditor;
          }(Editor_1.Editor);

          exports.BaseInputEditor = BaseInputEditor;
          /***/
        },

        /***/
        "./columns/action/ButtonAction.js":
        /*!****************************************!*\
          !*** ./columns/action/ButtonAction.js ***!
          \****************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsActionButtonActionJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var Action_1 = __webpack_require__(
          /*! ./Action */
          "./columns/action/Action.js");

          var symbolManager_1 = __webpack_require__(
          /*! ../../internal/symbolManager */
          "./internal/symbolManager.js");

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          var BUTTON_COLUMN_STATE_ID = symbolManager_1.getButtonColumnStateId();

          var ButtonAction = /*#__PURE__*/function (_Action_1$Action) {
            _inherits(ButtonAction, _Action_1$Action);

            var _super7 = _createSuper(ButtonAction);

            function ButtonAction() {
              _classCallCheck(this, ButtonAction);

              return _super7.apply(this, arguments);
            }

            _createClass(ButtonAction, [{
              key: "getState",
              value: function getState(grid) {
                var state = grid[BUTTON_COLUMN_STATE_ID];

                if (!state) {
                  state = {};
                  utils_1.obj.setReadonly(grid, BUTTON_COLUMN_STATE_ID, state);
                }

                return state;
              }
            }]);

            return ButtonAction;
          }(Action_1.Action);

          exports.ButtonAction = ButtonAction;
          /***/
        },

        /***/
        "./columns/action/CheckEditor.js":
        /*!***************************************!*\
          !*** ./columns/action/CheckEditor.js ***!
          \***************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsActionCheckEditorJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var actionBind_1 = __webpack_require__(
          /*! ./actionBind */
          "./columns/action/actionBind.js");

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          var action_utils_1 = __webpack_require__(
          /*! ./action-utils */
          "./columns/action/action-utils.js");

          var DG_EVENT_TYPE_1 = __webpack_require__(
          /*! ../../core/DG_EVENT_TYPE */
          "./core/DG_EVENT_TYPE.js");

          var Editor_1 = __webpack_require__(
          /*! ./Editor */
          "./columns/action/Editor.js");

          var animate_1 = __webpack_require__(
          /*! ../../internal/animate */
          "./internal/animate.js");

          var symbolManager_1 = __webpack_require__(
          /*! ../../internal/symbolManager */
          "./internal/symbolManager.js");

          var CHECK_COLUMN_STATE_ID = symbolManager_1.getCheckColumnStateId();

          var CheckEditor = /*#__PURE__*/function (_Editor_1$Editor2) {
            _inherits(CheckEditor, _Editor_1$Editor2);

            var _super8 = _createSuper(CheckEditor);

            function CheckEditor() {
              _classCallCheck(this, CheckEditor);

              return _super8.apply(this, arguments);
            }

            _createClass(CheckEditor, [{
              key: "clone",
              value: function clone() {
                return new CheckEditor(this);
              }
            }, {
              key: "bindGridEvent",
              value: function bindGridEvent(grid, cellId) {
                var _this17 = this;

                var _state = grid[CHECK_COLUMN_STATE_ID];

                if (!_state) {
                  _state = {
                    block: {},
                    elapsed: {}
                  };
                  utils_1.obj.setReadonly(grid, CHECK_COLUMN_STATE_ID, _state);
                }

                var state = _state;

                var _action = function action(cell) {
                  var range = grid.getCellRange(cell.col, cell.row);
                  var cellKey = "".concat(range.start.col, ":").concat(range.start.row);

                  if (action_utils_1.isReadOnlyRecord(_this17.readOnly, grid, cell.row) || action_utils_1.isDisabledRecord(_this17.disabled, grid, cell.row) || state.block[cellKey]) {
                    return;
                  }

                  var ret = grid.doChangeValue(cell.col, cell.row, action_utils_1.toggleValue);

                  if (ret) {
                    var onChange = function onChange() {
                      // checkbox animation
                      animate_1.animate(200, function (point) {
                        if (point === 1) {
                          delete state.elapsed[cellKey];
                        } else {
                          state.elapsed[cellKey] = point;
                        }

                        grid.invalidateCellRange(range);
                      });
                    };

                    if (utils_1.isPromise(ret)) {
                      state.block[cellKey] = true;
                      ret.then(function () {
                        delete state.block[cellKey];
                        onChange();
                      });
                    } else {
                      onChange();
                    }
                  }
                };

                function isTarget(col, row) {
                  return grid.getLayoutCellId(col, row) === cellId;
                }

                return [].concat(_toConsumableArray(actionBind_1.bindCellClickAction(grid, cellId, {
                  action: _action,
                  mouseOver: function mouseOver(e) {
                    if (action_utils_1.isDisabledRecord(_this17.disabled, grid, e.row)) {
                      return false;
                    }

                    state.mouseActiveCell = {
                      col: e.col,
                      row: e.row
                    };
                    var range = grid.getCellRange(e.col, e.row);
                    grid.invalidateCellRange(range);
                    return true;
                  },
                  mouseOut: function mouseOut(e) {
                    delete state.mouseActiveCell;
                    var range = grid.getCellRange(e.col, e.row);
                    grid.invalidateCellRange(range);
                  }
                })), _toConsumableArray(actionBind_1.bindCellKeyAction(grid, cellId, {
                  action: function action(_e) {
                    var selrange = grid.selection.range;
                    var col = grid.selection.select.col;

                    for (var row = selrange.start.row; row <= selrange.end.row; row++) {
                      if (!isTarget(col, row)) {
                        continue;
                      }

                      _action({
                        col: col,
                        row: row
                      });
                    }
                  }
                })), [// paste value
                grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.PASTE_CELL, function (e) {
                  if (e.multi) {
                    // ignore multi cell values
                    return;
                  }

                  var selectionRange = grid.selection.range;

                  if (!utils_1.cellEquals(selectionRange.start, selectionRange.end)) {
                    // ignore multi paste values
                    return;
                  }

                  if (!isTarget(e.col, e.row)) {
                    return;
                  }

                  var pasteValue = e.normalizeValue.trim();
                  grid.doGetCellValue(e.col, e.row, function (value) {
                    var newValue = action_utils_1.toggleValue(value);

                    if ("".concat(newValue).trim() === pasteValue) {
                      utils_1.event.cancel(e.event);

                      _action({
                        col: e.col,
                        row: e.row
                      });
                    }
                  });
                })]);
              }
            }, {
              key: "onPasteCellRangeBox",
              value: function onPasteCellRangeBox(grid, cell, value) {
                if (action_utils_1.isReadOnlyRecord(this.readOnly, grid, cell.row) || action_utils_1.isDisabledRecord(this.disabled, grid, cell.row)) {
                  return;
                }

                var pasteValue = value.trim();
                grid.doGetCellValue(cell.col, cell.row, function (value) {
                  var newValue = action_utils_1.toggleValue(value);

                  if ("".concat(newValue).trim() === pasteValue) {
                    grid.doChangeValue(cell.col, cell.row, action_utils_1.toggleValue);
                  }
                });
              }
            }, {
              key: "onDeleteCellRangeBox",
              value: function onDeleteCellRangeBox() {// noop
              }
            }]);

            return CheckEditor;
          }(Editor_1.Editor);

          exports.CheckEditor = CheckEditor;
          /***/
        },

        /***/
        "./columns/action/Editor.js":
        /*!**********************************!*\
          !*** ./columns/action/Editor.js ***!
          \**********************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsActionEditorJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var BaseAction_1 = __webpack_require__(
          /*! ./BaseAction */
          "./columns/action/BaseAction.js");

          var Editor = /*#__PURE__*/function (_BaseAction_1$BaseAct2) {
            _inherits(Editor, _BaseAction_1$BaseAct2);

            var _super9 = _createSuper(Editor);

            function Editor() {
              var _this18;

              var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, Editor);

              _this18 = _super9.call(this, option);
              _this18._readOnly = option.readOnly || false;
              return _this18;
            }

            _createClass(Editor, [{
              key: "onChangeReadOnlyInternal",
              value: function onChangeReadOnlyInternal() {// abstruct
              }
            }, {
              key: "editable",
              get: function get() {
                return true;
              }
            }, {
              key: "readOnly",
              get: function get() {
                return this._readOnly;
              },
              set: function set(readOnly) {
                this._readOnly = !!readOnly;
                this.onChangeReadOnlyInternal();
              }
            }]);

            return Editor;
          }(BaseAction_1.BaseAction);

          exports.Editor = Editor;
          /***/
        },

        /***/
        "./columns/action/InlineInputEditor.js":
        /*!*********************************************!*\
          !*** ./columns/action/InlineInputEditor.js ***!
          \*********************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsActionInlineInputEditorJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var BaseInputEditor_1 = __webpack_require__(
          /*! ./BaseInputEditor */
          "./columns/action/BaseInputEditor.js");

          var InlineInputElement_1 = __webpack_require__(
          /*! ./internal/InlineInputElement */
          "./columns/action/internal/InlineInputElement.js");

          var symbolManager_1 = __webpack_require__(
          /*! ../../internal/symbolManager */
          "./internal/symbolManager.js");

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          var _ = symbolManager_1.getInlineInputEditorStateId();

          function getState(grid) {
            var state = grid[_];

            if (!state) {
              state = {};
              utils_1.obj.setReadonly(grid, _, state);
            }

            return state;
          } // eslint-disable-next-line @typescript-eslint/no-explicit-any


          var globalElement = null;
          var bindGridCount = 0;

          function attachInput(grid, cell, editor, value) {
            var state = getState(grid);

            if (!globalElement) {
              globalElement = new InlineInputElement_1.InlineInputElement();
            }

            if (!state.element) {
              state.element = globalElement;
              bindGridCount++;
              grid.addDisposable({
                dispose: function dispose() {
                  bindGridCount--;

                  if (!bindGridCount) {
                    globalElement === null || globalElement === void 0 ? void 0 : globalElement.dispose();
                    globalElement = null;
                    state.element = null;
                  }
                }
              });
            }

            globalElement.attach(grid, editor, cell.col, cell.row, value);
          }

          function detachInput(gridFocus) {
            if (globalElement) {
              globalElement.detach(gridFocus);
            }
          }

          function doChangeValue(_grid) {
            if (globalElement) {
              globalElement.doChangeValue();
            }
          }

          var InlineInputEditor = /*#__PURE__*/function (_BaseInputEditor_1$Ba) {
            _inherits(InlineInputEditor, _BaseInputEditor_1$Ba);

            var _super10 = _createSuper(InlineInputEditor);

            function InlineInputEditor() {
              var _this19;

              var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, InlineInputEditor);

              _this19 = _super10.call(this, option);
              _this19._classList = option.classList;
              _this19._type = option.type;
              return _this19;
            }

            _createClass(InlineInputEditor, [{
              key: "clone",
              value: function clone() {
                return new InlineInputEditor(this);
              }
            }, {
              key: "onInputCellInternal",
              value: function onInputCellInternal(grid, cell, inputValue) {
                attachInput(grid, cell, this, inputValue);
              }
            }, {
              key: "onOpenCellInternal",
              value: function onOpenCellInternal(grid, cell) {
                var _this20 = this;

                grid.doGetCellValue(cell.col, cell.row, function (value) {
                  attachInput(grid, cell, _this20, value);
                });
              }
            }, {
              key: "onChangeSelectCellInternal",
              value: function onChangeSelectCellInternal(grid, _cell, _selected) {
                doChangeValue(grid);
                detachInput();
              }
            }, {
              key: "onGridScrollInternal",
              value: function onGridScrollInternal(grid) {
                doChangeValue(grid);
                detachInput(true);
              }
            }, {
              key: "onChangeDisabledInternal",
              value: function onChangeDisabledInternal() {
                // cancel input
                detachInput(true);
              }
            }, {
              key: "onChangeReadOnlyInternal",
              value: function onChangeReadOnlyInternal() {
                // cancel input
                detachInput(true);
              }
            }, {
              key: "onSetInputAttrsInternal",
              value: function onSetInputAttrsInternal(grid, _cell, input) {
                InlineInputElement_1.InlineInputElement.setInputAttrs(this, grid, input);
              }
            }, {
              key: "classList",
              get: function get() {
                if (!this._classList) {
                  return undefined;
                }

                return Array.isArray(this._classList) ? this._classList : [this._classList];
              },
              set: function set(classList) {
                this._classList = classList;
              }
            }, {
              key: "type",
              get: function get() {
                return this._type;
              },
              set: function set(type) {
                this._type = type;
              }
            }]);

            return InlineInputEditor;
          }(BaseInputEditor_1.BaseInputEditor);

          exports.InlineInputEditor = InlineInputEditor;
          /***/
        },

        /***/
        "./columns/action/InlineMenuEditor.js":
        /*!********************************************!*\
          !*** ./columns/action/InlineMenuEditor.js ***!
          \********************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsActionInlineMenuEditorJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          var action_utils_1 = __webpack_require__(
          /*! ./action-utils */
          "./columns/action/action-utils.js");

          var DG_EVENT_TYPE_1 = __webpack_require__(
          /*! ../../core/DG_EVENT_TYPE */
          "./core/DG_EVENT_TYPE.js");

          var Editor_1 = __webpack_require__(
          /*! ./Editor */
          "./columns/action/Editor.js");

          var InlineMenuElement_1 = __webpack_require__(
          /*! ./internal/InlineMenuElement */
          "./columns/action/internal/InlineMenuElement.js");

          var type_1 = __webpack_require__(
          /*! ../type */
          "./columns/type.js");

          var symbolManager_1 = __webpack_require__(
          /*! ../../internal/symbolManager */
          "./internal/symbolManager.js");

          var menu_items_1 = __webpack_require__(
          /*! ../../internal/menu-items */
          "./internal/menu-items.js");

          var _ = symbolManager_1.getInlineMenuEditorStateId();

          function getState(grid) {
            var state = grid[_];

            if (!state) {
              state = {};
              utils_1.obj.setReadonly(grid, _, state);
            }

            return state;
          } // eslint-disable-next-line @typescript-eslint/no-explicit-any


          var globalElement = null;
          var bindGridCount = 0;

          function attachMenu(grid, cell, editor, value, record) {
            var state = getState(grid);

            if (!globalElement) {
              globalElement = new InlineMenuElement_1.InlineMenuElement();
            }

            if (!state.element) {
              state.element = globalElement;
              bindGridCount++;
              grid.addDisposable({
                dispose: function dispose() {
                  bindGridCount--;

                  if (!bindGridCount) {
                    globalElement === null || globalElement === void 0 ? void 0 : globalElement.dispose();
                    globalElement = null;
                    state.element = null;
                  }
                }
              });
            }

            globalElement.attach(grid, editor, cell.col, cell.row, value, record);
          }

          function detachMenu(gridFocus) {
            if (globalElement) {
              globalElement.detach(gridFocus);
            }
          }

          var KEY_ENTER = 13;
          var KEY_F2 = 113;

          var InlineMenuEditor = /*#__PURE__*/function (_Editor_1$Editor3) {
            _inherits(InlineMenuEditor, _Editor_1$Editor3);

            var _super11 = _createSuper(InlineMenuEditor);

            function InlineMenuEditor() {
              var _this21;

              var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, InlineMenuEditor);

              _this21 = _super11.call(this, option);
              _this21._classList = option.classList;
              _this21._options = menu_items_1.normalizeToFn(option.options);
              return _this21;
            }

            _createClass(InlineMenuEditor, [{
              key: "dispose",
              value: function dispose() {// noop
              }
            }, {
              key: "clone",
              value: function clone() {
                return new InlineMenuEditor(this);
              }
            }, {
              key: "onChangeDisabledInternal",
              value: function onChangeDisabledInternal() {
                // cancel input
                detachMenu(true);
              }
            }, {
              key: "onChangeReadOnlyInternal",
              value: function onChangeReadOnlyInternal() {
                // cancel input
                detachMenu(true);
              }
            }, {
              key: "bindGridEvent",
              value: function bindGridEvent(grid, cellId) {
                var _this22 = this;

                var open = function open(cell) {
                  if (action_utils_1.isReadOnlyRecord(_this22.readOnly, grid, cell.row) || action_utils_1.isDisabledRecord(_this22.disabled, grid, cell.row)) {
                    return false;
                  }

                  grid.doGetCellValue(cell.col, cell.row, function (value) {
                    var record = grid.getRowRecord(cell.row);

                    if (utils_1.isPromise(record)) {
                      return;
                    }

                    attachMenu(grid, cell, _this22, value, record);
                  });
                  return true;
                };

                function isTarget(col, row) {
                  return grid.getLayoutCellId(col, row) === cellId;
                }

                return [grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.CLICK_CELL, function (cell) {
                  if (!isTarget(cell.col, cell.row)) {
                    return;
                  }

                  open({
                    col: cell.col,
                    row: cell.row
                  });
                }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.KEYDOWN, function (e) {
                  if (e.keyCode !== KEY_F2 && e.keyCode !== KEY_ENTER) {
                    return;
                  }

                  var sel = grid.selection.select;

                  if (!isTarget(sel.col, sel.row)) {
                    return;
                  }

                  if (open({
                    col: sel.col,
                    row: sel.row
                  })) {
                    e.stopCellMoving();
                  }
                }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SELECTED_CELL, function (_e) {
                  detachMenu();
                }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SCROLL, function () {
                  detachMenu(true);
                }), // mouse move
                grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEOVER_CELL, function (e) {
                  if (action_utils_1.isReadOnlyRecord(_this22.readOnly, grid, e.row) || action_utils_1.isDisabledRecord(_this22.disabled, grid, e.row)) {
                    return;
                  }

                  if (!isTarget(e.col, e.row)) {
                    return;
                  }

                  grid.getElement().style.cursor = "pointer";
                }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEMOVE_CELL, function (e) {
                  if (action_utils_1.isReadOnlyRecord(_this22.readOnly, grid, e.row) || action_utils_1.isDisabledRecord(_this22.disabled, grid, e.row)) {
                    return;
                  }

                  if (!isTarget(e.col, e.row)) {
                    return;
                  }

                  if (!grid.getElement().style.cursor) {
                    grid.getElement().style.cursor = "pointer";
                  }
                }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEOUT_CELL, function (e) {
                  if (!isTarget(e.col, e.row)) {
                    return;
                  }

                  grid.getElement().style.cursor = "";
                }), // paste value
                grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.PASTE_CELL, function (e) {
                  if (e.multi) {
                    // ignore multi cell values
                    return;
                  }

                  var selectionRange = grid.selection.range;

                  if (!utils_1.cellEquals(selectionRange.start, selectionRange.end)) {
                    // ignore multi paste values
                    return;
                  }

                  if (action_utils_1.isReadOnlyRecord(_this22.readOnly, grid, e.row) || action_utils_1.isDisabledRecord(_this22.disabled, grid, e.row)) {
                    return;
                  }

                  if (!isTarget(e.col, e.row)) {
                    return;
                  }

                  var record = grid.getRowRecord(e.row);

                  if (utils_1.isPromise(record)) {
                    return;
                  }

                  var pasteOpt = _this22._pasteDataToOptionValue(e.normalizeValue, grid, e, record);

                  if (pasteOpt) {
                    utils_1.event.cancel(e.event);
                    utils_1.then(grid.doChangeValue(e.col, e.row, function () {
                      return pasteOpt.value;
                    }), function () {
                      var range = grid.getCellRange(e.col, e.row);
                      grid.invalidateCellRange(range);
                    });
                  }
                })];
              }
            }, {
              key: "onPasteCellRangeBox",
              value: function onPasteCellRangeBox(grid, cell, value) {
                if (action_utils_1.isReadOnlyRecord(this.readOnly, grid, cell.row) || action_utils_1.isDisabledRecord(this.disabled, grid, cell.row)) {
                  return;
                }

                var record = grid.getRowRecord(cell.row);

                if (utils_1.isPromise(record)) {
                  return;
                }

                var pasteOpt = this._pasteDataToOptionValue(value, grid, cell, record);

                if (pasteOpt) {
                  grid.doChangeValue(cell.col, cell.row, function () {
                    return pasteOpt.value;
                  });
                }
              }
            }, {
              key: "onDeleteCellRangeBox",
              value: function onDeleteCellRangeBox(grid, cell) {
                if (action_utils_1.isReadOnlyRecord(this.readOnly, grid, cell.row) || action_utils_1.isDisabledRecord(this.disabled, grid, cell.row)) {
                  return;
                }

                var record = grid.getRowRecord(cell.row);

                if (utils_1.isPromise(record)) {
                  return;
                }

                var pasteOpt = this._pasteDataToOptionValue("", grid, cell, record);

                if (pasteOpt) {
                  grid.doChangeValue(cell.col, cell.row, function () {
                    return pasteOpt.value;
                  });
                }
              }
            }, {
              key: "_pasteDataToOptionValue",
              value: function _pasteDataToOptionValue(value, grid, cell, record) {
                var options = this._options(record);

                var pasteOpt = _textToOptionValue(value, options);

                if (pasteOpt) {
                  return pasteOpt;
                }

                var columnType = grid.getColumnType(cell.col, cell.row);

                if (hasOptions(columnType)) {
                  // Find with caption.
                  var pasteValue = normalizePasteValueStr(value);
                  var captionOpt = utils_1.array.find(columnType.options, function (opt) {
                    return normalizePasteValueStr(opt.label) === pasteValue;
                  });

                  if (captionOpt) {
                    return _textToOptionValue(captionOpt.value, options);
                  }
                }

                return undefined;
              }
            }, {
              key: "classList",
              get: function get() {
                if (!this._classList) {
                  return undefined;
                }

                return Array.isArray(this._classList) ? this._classList : [this._classList];
              },
              set: function set(classList) {
                this._classList = classList;
              }
            }, {
              key: "options",
              get: function get() {
                return this._options;
              },
              set: function set(options) {
                this._options = menu_items_1.normalizeToFn(options);
              }
            }]);

            return InlineMenuEditor;
          }(Editor_1.Editor);

          exports.InlineMenuEditor = InlineMenuEditor;

          function _textToOptionValue(value, options) {
            var pasteValue = normalizePasteValueStr(value);
            var pasteOpt = utils_1.array.find(options, function (opt) {
              return normalizePasteValueStr(opt.value) === pasteValue;
            });

            if (pasteOpt) {
              return pasteOpt;
            }

            return undefined;
          } // eslint-disable-next-line @typescript-eslint/no-explicit-any


          function normalizePasteValueStr(value) {
            if (value == null) {
              return "";
            }

            return "".concat(value).trim();
          } // eslint-disable-next-line @typescript-eslint/no-explicit-any


          function hasOptions(columnType) {
            if (columnType instanceof type_1.MenuColumn) {
              return true;
            } // eslint-disable-next-line @typescript-eslint/no-explicit-any


            if (Array.isArray(columnType.options)) {
              return true;
            }

            return false;
          }
          /***/

        },

        /***/
        "./columns/action/RadioEditor.js":
        /*!***************************************!*\
          !*** ./columns/action/RadioEditor.js ***!
          \***************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsActionRadioEditorJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var actionBind_1 = __webpack_require__(
          /*! ./actionBind */
          "./columns/action/actionBind.js");

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          var action_utils_1 = __webpack_require__(
          /*! ./action-utils */
          "./columns/action/action-utils.js");

          var DG_EVENT_TYPE_1 = __webpack_require__(
          /*! ../../core/DG_EVENT_TYPE */
          "./core/DG_EVENT_TYPE.js");

          var Editor_1 = __webpack_require__(
          /*! ./Editor */
          "./columns/action/Editor.js");

          var animate_1 = __webpack_require__(
          /*! ../../internal/animate */
          "./internal/animate.js");

          var symbolManager_1 = __webpack_require__(
          /*! ../../internal/symbolManager */
          "./internal/symbolManager.js");

          var utils_2 = __webpack_require__(
          /*! ../utils */
          "./columns/utils/index.js");

          var RADIO_COLUMN_STATE_ID = symbolManager_1.getRadioColumnStateId(); // eslint-disable-next-line @typescript-eslint/no-explicit-any

          var defaultGroupResolver = function defaultGroupResolver(_ref20) {
            var grid = _ref20.grid,
                col = _ref20.col,
                row = _ref20.row;
            var cellId = grid.getLayoutCellId(col, row);
            var recordStartRow = grid.getRecordStartRowByRecordIndex(grid.getRecordIndexByRow(row));
            var offsetRow = row - recordStartRow;
            var result = [];
            var rowCount = grid.rowCount,
                recordRowCount = grid.recordRowCount;

            for (var targetRow = grid.frozenRowCount + offsetRow; targetRow < rowCount; targetRow += recordRowCount) {
              if (grid.getLayoutCellId(col, targetRow) === cellId) {
                result.push({
                  col: col,
                  row: targetRow
                });
              }
            }

            return result;
          };

          var RadioEditor = /*#__PURE__*/function (_Editor_1$Editor4) {
            _inherits(RadioEditor, _Editor_1$Editor4);

            var _super12 = _createSuper(RadioEditor);

            function RadioEditor() {
              var _this23;

              var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, RadioEditor);

              _this23 = _super12.call(this, option);
              _this23._group = option.group || defaultGroupResolver;
              return _this23;
            }

            _createClass(RadioEditor, [{
              key: "clone",
              value: function clone() {
                return new RadioEditor(this);
              }
            }, {
              key: "bindGridEvent",
              value: function bindGridEvent(grid, cellId) {
                var _this24 = this;

                var _state = grid[RADIO_COLUMN_STATE_ID];

                if (!_state) {
                  _state = {
                    block: {},
                    elapsed: {}
                  };
                  utils_1.obj.setReadonly(grid, RADIO_COLUMN_STATE_ID, _state);
                }

                var state = _state;

                var action = function action(cell) {
                  _this24._action(grid, cell);
                };

                function isTarget(col, row) {
                  return grid.getLayoutCellId(col, row) === cellId;
                }

                return [].concat(_toConsumableArray(actionBind_1.bindCellClickAction(grid, cellId, {
                  action: action,
                  mouseOver: function mouseOver(e) {
                    if (action_utils_1.isDisabledRecord(_this24.disabled, grid, e.row)) {
                      return false;
                    }

                    state.mouseActiveCell = {
                      col: e.col,
                      row: e.row
                    };
                    var range = grid.getCellRange(e.col, e.row);
                    grid.invalidateCellRange(range);
                    return true;
                  },
                  mouseOut: function mouseOut(e) {
                    delete state.mouseActiveCell;
                    var range = grid.getCellRange(e.col, e.row);
                    grid.invalidateCellRange(range);
                  }
                })), _toConsumableArray(actionBind_1.bindCellKeyAction(grid, cellId, {
                  action: action
                })), [// paste value
                grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.PASTE_CELL, function (e) {
                  if (e.multi) {
                    // ignore multi cell values
                    return;
                  }

                  var selectionRange = grid.selection.range;

                  if (!utils_1.cellEquals(selectionRange.start, selectionRange.end)) {
                    // ignore multi paste values
                    return;
                  }

                  if (!isTarget(e.col, e.row)) {
                    return;
                  }

                  var pasteValue = e.normalizeValue.trim();

                  if (!utils_2.toBoolean(pasteValue)) {
                    return;
                  }

                  utils_1.event.cancel(e.event);
                  action({
                    col: e.col,
                    row: e.row
                  });
                })]);
              }
            }, {
              key: "onPasteCellRangeBox",
              value: function onPasteCellRangeBox(grid, cell, value) {
                if (action_utils_1.isReadOnlyRecord(this.readOnly, grid, cell.row) || action_utils_1.isDisabledRecord(this.disabled, grid, cell.row)) {
                  return;
                }

                var pasteValue = value.trim();

                if (!utils_2.toBoolean(pasteValue)) {
                  return;
                }

                this._action(grid, {
                  col: cell.col,
                  row: cell.row
                });
              }
            }, {
              key: "onDeleteCellRangeBox",
              value: function onDeleteCellRangeBox() {// noop
              }
            }, {
              key: "_action",
              value: function _action(grid, cell) {
                var _this25 = this;

                var state = grid[RADIO_COLUMN_STATE_ID];
                var range = grid.getCellRange(cell.col, cell.row);
                var cellKey = "".concat(range.start.col, ":").concat(range.start.row);

                if (action_utils_1.isReadOnlyRecord(this.readOnly, grid, cell.row) || action_utils_1.isDisabledRecord(this.disabled, grid, cell.row) || state.block[cellKey]) {
                  return;
                }

                grid.doGetCellValue(cell.col, cell.row, function (value) {
                  if (utils_2.toBoolean(value)) {
                    return;
                  }

                  var targets = _this25._group({
                    grid: grid,
                    col: cell.col,
                    row: cell.row
                  });

                  targets.forEach(function (_ref21) {
                    var col = _ref21.col,
                        row = _ref21.row;
                    var range = grid.getCellRange(col, row);
                    var cellKey = "".concat(range.start.col, ":").concat(range.start.row);

                    if (action_utils_1.isReadOnlyRecord(_this25.readOnly, grid, cell.row) || action_utils_1.isDisabledRecord(_this25.disabled, grid, cell.row) || state.block[cellKey]) {
                      return;
                    }

                    actionCell(grid, col, row, col === cell.col && row === cell.row);
                  });
                });
              }
            }, {
              key: "group",
              get: function get() {
                return this._group;
              },
              set: function set(group) {
                this._group = group;
              }
            }]);

            return RadioEditor;
          }(Editor_1.Editor);

          exports.RadioEditor = RadioEditor;

          function actionCell(grid, col, row, flag) {
            grid.doGetCellValue(col, row, function (value) {
              if (utils_2.toBoolean(value) === flag) {
                return;
              }

              var state = grid[RADIO_COLUMN_STATE_ID];
              var range = grid.getCellRange(col, row);
              var cellKey = "".concat(range.start.col, ":").concat(range.start.row);
              var ret = grid.doChangeValue(col, row, action_utils_1.toggleValue);

              if (ret) {
                var onChange = function onChange() {
                  // checkbox animation
                  animate_1.animate(200, function (point) {
                    if (point === 1) {
                      delete state.elapsed[cellKey];
                    } else {
                      state.elapsed[cellKey] = point;
                    }

                    grid.invalidateCellRange(range);
                  });
                };

                if (utils_1.isPromise(ret)) {
                  state.block[cellKey] = true;
                  ret.then(function () {
                    delete state.block[cellKey];
                    onChange();
                  });
                } else {
                  onChange();
                }
              }
            });
          }
          /***/

        },

        /***/
        "./columns/action/SmallDialogInputEditor.js":
        /*!**************************************************!*\
          !*** ./columns/action/SmallDialogInputEditor.js ***!
          \**************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsActionSmallDialogInputEditorJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var BaseInputEditor_1 = __webpack_require__(
          /*! ./BaseInputEditor */
          "./columns/action/BaseInputEditor.js");

          var SmallDialogInputElement_1 = __webpack_require__(
          /*! ./internal/SmallDialogInputElement */
          "./columns/action/internal/SmallDialogInputElement.js");

          var symbolManager_1 = __webpack_require__(
          /*! ../../internal/symbolManager */
          "./internal/symbolManager.js");

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          var _ = symbolManager_1.getSmallDialogInputEditorStateId();

          function getState(grid) {
            var state = grid[_];

            if (!state) {
              state = {};
              utils_1.obj.setReadonly(grid, _, state);
            }

            return state;
          } // eslint-disable-next-line @typescript-eslint/no-explicit-any


          var globalElement = null;
          var bindGridCount = 0;

          function attachInput(grid, cell, editor, value) {
            var state = getState(grid);

            if (!globalElement) {
              globalElement = new SmallDialogInputElement_1.SmallDialogInputElement();
            }

            if (!state.element) {
              state.element = globalElement;
              bindGridCount++;
              grid.addDisposable({
                dispose: function dispose() {
                  bindGridCount--;

                  if (!bindGridCount) {
                    globalElement === null || globalElement === void 0 ? void 0 : globalElement.dispose();
                    globalElement = null;
                    state.element = null;
                  }
                }
              });
            }

            globalElement.attach(grid, editor, cell.col, cell.row, value);
          }

          function detachInput(gridFocus) {
            if (globalElement) {
              globalElement.detach(gridFocus);
            }
          }

          var SmallDialogInputEditor = /*#__PURE__*/function (_BaseInputEditor_1$Ba2) {
            _inherits(SmallDialogInputEditor, _BaseInputEditor_1$Ba2);

            var _super13 = _createSuper(SmallDialogInputEditor);

            function SmallDialogInputEditor() {
              var _this26;

              var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, SmallDialogInputEditor);

              _this26 = _super13.call(this, option);
              _this26._helperText = option.helperText;
              _this26._inputValidator = option.inputValidator;
              _this26._validator = option.validator;
              _this26._classList = option.classList;
              _this26._type = option.type;
              return _this26;
            }

            _createClass(SmallDialogInputEditor, [{
              key: "dispose",
              value: function dispose() {//noop
              }
            }, {
              key: "clone",
              value: function clone() {
                return new SmallDialogInputEditor(this);
              }
            }, {
              key: "onInputCellInternal",
              value: function onInputCellInternal(grid, cell, inputValue) {
                attachInput(grid, cell, this, inputValue);
              }
            }, {
              key: "onOpenCellInternal",
              value: function onOpenCellInternal(grid, cell) {
                var _this27 = this;

                grid.doGetCellValue(cell.col, cell.row, function (value) {
                  attachInput(grid, cell, _this27, value);
                });
              }
            }, {
              key: "onChangeSelectCellInternal",
              value: function onChangeSelectCellInternal(_grid, _cell, _selected) {
                // cancel input
                detachInput();
              }
            }, {
              key: "onGridScrollInternal",
              value: function onGridScrollInternal(_grid) {
                // cancel input
                detachInput(true);
              }
            }, {
              key: "onChangeDisabledInternal",
              value: function onChangeDisabledInternal() {
                // cancel input
                detachInput(true);
              }
            }, {
              key: "onChangeReadOnlyInternal",
              value: function onChangeReadOnlyInternal() {
                // cancel input
                detachInput(true);
              }
            }, {
              key: "onSetInputAttrsInternal",
              value: function onSetInputAttrsInternal(grid, _cell, input) {
                SmallDialogInputElement_1.SmallDialogInputElement.setInputAttrs(this, grid, input);
              }
            }, {
              key: "classList",
              get: function get() {
                if (!this._classList) {
                  return undefined;
                }

                return Array.isArray(this._classList) ? this._classList : [this._classList];
              },
              set: function set(classList) {
                this._classList = classList;
              }
            }, {
              key: "type",
              get: function get() {
                return this._type;
              },
              set: function set(type) {
                this._type = type;
              }
            }, {
              key: "helperText",
              get: function get() {
                return this._helperText;
              }
            }, {
              key: "inputValidator",
              get: function get() {
                return this._inputValidator;
              }
            }, {
              key: "validator",
              get: function get() {
                return this._validator;
              }
            }]);

            return SmallDialogInputEditor;
          }(BaseInputEditor_1.BaseInputEditor);

          exports.SmallDialogInputEditor = SmallDialogInputEditor;
          /***/
        },

        /***/
        "./columns/action/action-utils.js":
        /*!****************************************!*\
          !*** ./columns/action/action-utils.js ***!
          \****************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsActionActionUtilsJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          function isDisabledRecord( // eslint-disable-next-line @typescript-eslint/no-explicit-any
          option, grid, row) {
            if (grid.disabled) {
              return true;
            }

            return getBooleanOptionOfRecord(option, grid, row);
          }

          exports.isDisabledRecord = isDisabledRecord;

          function isReadOnlyRecord( // eslint-disable-next-line @typescript-eslint/no-explicit-any
          option, grid, row) {
            if (grid.readOnly) {
              return true;
            }

            return getBooleanOptionOfRecord(option, grid, row);
          }

          exports.isReadOnlyRecord = isReadOnlyRecord;

          function toggleValue(val) {
            if (typeof val === "number") {
              if (val === 0) {
                return 1;
              } else {
                return 0;
              }
            } else if (typeof val === "string") {
              if (val === "false") {
                return "true";
              } else if (val === "off") {
                return "on";
              } else if (/^0+$/.exec(val)) {
                return val.replace(/^(0*)0$/, "$11");
              } else if (val === "true") {
                return "false";
              } else if (val === "on") {
                return "off";
              } else if (/^0*1$/.exec(val)) {
                return val.replace(/^(0*)1$/, "$10");
              }
            }

            return !val;
          }

          exports.toggleValue = toggleValue;

          function getBooleanOptionOfRecord( // eslint-disable-next-line @typescript-eslint/no-explicit-any
          option, grid, row) {
            if (typeof option === "function") {
              var record = grid.getRowRecord(row);

              if (utils_1.isPromise(record)) {
                return true;
              }

              return !!option(record);
            }

            return !!option;
          }
          /***/

        },

        /***/
        "./columns/action/actionBind.js":
        /*!**************************************!*\
          !*** ./columns/action/actionBind.js ***!
          \**************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsActionActionBindJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          var DG_EVENT_TYPE_1 = __webpack_require__(
          /*! ../../core/DG_EVENT_TYPE */
          "./core/DG_EVENT_TYPE.js");

          var KEY_ENTER = 13;
          var KEY_SPACE = 32;

          function bindCellClickAction(grid, cellId, _ref22) {
            var action = _ref22.action,
                mouseOver = _ref22.mouseOver,
                mouseOut = _ref22.mouseOut;

            function isTarget(col, row) {
              return grid.getLayoutCellId(col, row) === cellId;
            }

            return [// click
            grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.CLICK_CELL, function (e) {
              if (!isTarget(e.col, e.row)) {
                return;
              }

              if (utils_1.isPromise(grid.getRowRecord(e.row))) {
                return;
              }

              action({
                col: e.col,
                row: e.row
              });
            }), // mouse move
            grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEOVER_CELL, function (e) {
              if (!isTarget(e.col, e.row)) {
                return;
              }

              if (utils_1.isPromise(grid.getRowRecord(e.row))) {
                return;
              }

              if (mouseOver) {
                if (!mouseOver({
                  col: e.col,
                  row: e.row
                })) {
                  return;
                }
              }

              grid.getElement().style.cursor = "pointer";
            }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEOUT_CELL, function (e) {
              if (!isTarget(e.col, e.row)) {
                return;
              }

              if (mouseOut) {
                mouseOut({
                  col: e.col,
                  row: e.row
                });
              }

              grid.getElement().style.cursor = "";
            })];
          }

          exports.bindCellClickAction = bindCellClickAction;

          function bindCellKeyAction(grid, cellId, _ref23) {
            var action = _ref23.action,
                _ref23$acceptKeys = _ref23.acceptKeys,
                acceptKeys = _ref23$acceptKeys === void 0 ? [] : _ref23$acceptKeys;

            function isTarget(col, row) {
              return grid.getLayoutCellId(col, row) === cellId;
            }

            acceptKeys = [].concat(_toConsumableArray(acceptKeys), [KEY_ENTER, KEY_SPACE]);
            return [// enter key down
            grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.KEYDOWN, function (e) {
              var _a;

              if (acceptKeys.indexOf(e.keyCode) === -1) {
                return;
              }

              if (((_a = grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnEnter) && e.keyCode === KEY_ENTER) {
                // When moving with the enter key, no action is taken with the enter key.
                return;
              }

              var sel = grid.selection.select;

              if (!isTarget(sel.col, sel.row)) {
                return;
              }

              if (utils_1.isPromise(grid.getRowRecord(sel.row))) {
                return;
              }

              action({
                col: sel.col,
                row: sel.row
              });
              utils_1.event.cancel(e.event);
            })];
          }

          exports.bindCellKeyAction = bindCellKeyAction;
          /***/
        },

        /***/
        "./columns/action/internal/InlineInputElement.js":
        /*!*******************************************************!*\
          !*** ./columns/action/internal/InlineInputElement.js ***!
          \*******************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsActionInternalInlineInputElementJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var EventHandler_1 = __webpack_require__(
          /*! ../../../internal/EventHandler */
          "./internal/EventHandler.js");

          var dom_1 = __webpack_require__(
          /*! ../../../internal/dom */
          "./internal/dom.js");

          var utils_1 = __webpack_require__(
          /*! ../../../internal/utils */
          "./internal/utils.js");

          var input_value_handler_1 = __webpack_require__(
          /*! ./input-value-handler */
          "./columns/action/internal/input-value-handler.js");

          var KEY_TAB = 9;
          var KEY_ENTER = 13;
          var CLASSNAME = "cheetah-grid__inline-input";

          function createInputElement() {
            __webpack_require__(
            /*! @/columns/action/internal/InlineInputElement.css */
            "../src/js/columns/action/internal/InlineInputElement.css");

            return dom_1.createElement("input", {
              classList: CLASSNAME
            });
          }

          function _setInputAttrs(editor, _grid, input) {
            var classList = editor.classList,
                type = editor.type;

            if (classList) {
              var _input$classList;

              (_input$classList = input.classList).add.apply(_input$classList, _toConsumableArray(classList));
            }

            input.type = type || "";
          }

          var InlineInputElement = /*#__PURE__*/function () {
            function InlineInputElement() {
              _classCallCheck(this, InlineInputElement);

              this._handler = new EventHandler_1.EventHandler();
              this._input = createInputElement();

              this._bindInputEvents();
            }

            _createClass(InlineInputElement, [{
              key: "dispose",
              value: function dispose() {
                var _a;

                var input = this._input;
                this.detach();

                this._handler.dispose();

                delete this._input;
                this._beforePropEditor = null;
                (_a = input.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(input);
              }
            }, {
              key: "attach",
              value: function attach(grid, editor, col, row, value) {
                var _this28 = this;

                var input = this._input;
                var handler = this._handler;

                if (this._beforePropEditor) {
                  var classList = this._beforePropEditor.classList;

                  if (classList) {
                    var _input$classList2;

                    (_input$classList2 = input.classList).remove.apply(_input$classList2, _toConsumableArray(classList));
                  }
                }

                input.style.font = grid.font || "16px sans-serif";

                var _grid$getAttachCellsA = grid.getAttachCellsArea(grid.getCellRange(col, row)),
                    element = _grid$getAttachCellsA.element,
                    rect = _grid$getAttachCellsA.rect;

                input.style.top = "".concat(rect.top.toFixed(), "px");
                input.style.left = "".concat(rect.left.toFixed(), "px");
                input.style.width = "".concat(rect.width.toFixed(), "px");
                input.style.height = "".concat(rect.height.toFixed(), "px");
                element.appendChild(input);

                _setInputAttrs(editor, grid, input);

                input_value_handler_1.setInputValue(input, value);
                this._activeData = {
                  grid: grid,
                  col: col,
                  row: row,
                  editor: editor
                };
                this._beforePropEditor = editor;

                var focus = function focus() {
                  input.focus();
                  var end = input.value.length;

                  try {
                    if (typeof input.selectionStart !== "undefined") {
                      input.selectionStart = end;
                      input.selectionEnd = end;
                      return;
                    }
                  } catch (e) {} //ignore
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any


                  if (document.selection) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    var range = input.createTextRange();
                    range.collapse();
                    range.moveEnd("character", end);
                    range.moveStart("character", end);
                    range.select();
                  }
                };

                handler.tryWithOffEvents(input, "blur", function () {
                  focus();
                });
                this._attaching = true;
                setTimeout(function () {
                  delete _this28._attaching;
                });
              }
            }, {
              key: "detach",
              value: function detach(gridFocus) {
                if (this._isActive()) {
                  var _this$_activeData = this._activeData,
                      grid = _this$_activeData.grid,
                      col = _this$_activeData.col,
                      row = _this$_activeData.row;
                  var input = this._input;

                  this._handler.tryWithOffEvents(input, "blur", function () {
                    var _a;

                    (_a = input.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(input);
                  });

                  var range = grid.getCellRange(col, row);
                  grid.invalidateCellRange(range);

                  if (gridFocus) {
                    grid.focus();
                  }
                }

                this._activeData = null;
              }
            }, {
              key: "doChangeValue",
              value: function doChangeValue() {
                if (!this._isActive()) {
                  return;
                }

                var input = this._input;
                var value = input.value;
                var _this$_activeData2 = this._activeData,
                    grid = _this$_activeData2.grid,
                    col = _this$_activeData2.col,
                    row = _this$_activeData2.row;
                grid.doChangeValue(col, row, function () {
                  return value;
                });
              }
            }, {
              key: "_isActive",
              value: function _isActive() {
                var input = this._input;

                if (!input || !input.parentElement) {
                  return false;
                }

                if (!this._activeData) {
                  return false;
                }

                return true;
              }
            }, {
              key: "_bindInputEvents",
              value: function _bindInputEvents() {
                var _this29 = this;

                var handler = this._handler;
                var input = this._input;

                var stopPropagationOnly = function stopPropagationOnly(e) {
                  return e.stopPropagation();
                }; // gridにイベントが伝播しないように


                handler.on(input, "click", stopPropagationOnly);
                handler.on(input, "mousedown", stopPropagationOnly);
                handler.on(input, "touchstart", stopPropagationOnly);
                handler.on(input, "dblclick", stopPropagationOnly);
                handler.on(input, "compositionstart", function (_e) {
                  input.classList.add("composition");
                });
                handler.on(input, "compositionend", function (_e) {
                  input.classList.remove("composition");
                });
                handler.on(input, "keydown", function (e) {
                  if (input.classList.contains("composition")) {
                    return;
                  }

                  var keyCode = utils_1.event.getKeyCode(e);

                  if (keyCode === KEY_ENTER) {
                    _this29._onKeydownEnter(e);
                  } else if (keyCode === KEY_TAB) {
                    _this29._onKeydownTab(e);
                  }
                });
                handler.on(input, "blur", function (_e) {
                  _this29.doChangeValue();

                  _this29.detach();
                });
              }
            }, {
              key: "_onKeydownEnter",
              value: function _onKeydownEnter(e) {
                var _a;

                if (!this._isActive() || this._attaching) {
                  return;
                }

                var grid = this._activeData.grid;
                this.doChangeValue();
                this.detach(true);
                utils_1.event.cancel(e);

                if ((_a = grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnEnter) {
                  grid.onKeyDownMove(e);
                }
              }
            }, {
              key: "_onKeydownTab",
              value: function _onKeydownTab(e) {
                var _a;

                if (!this._isActive()) {
                  return;
                }

                var grid = this._activeData.grid;

                if (!((_a = grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnTab)) {
                  return;
                }

                this.doChangeValue();
                this.detach(true);
                grid.onKeyDownMove(e);
              }
            }], [{
              key: "setInputAttrs",
              value: function setInputAttrs(editor, grid, input) {
                _setInputAttrs(editor, grid, input);
              }
            }]);

            return InlineInputElement;
          }();

          exports.InlineInputElement = InlineInputElement;
          /***/
        },

        /***/
        "./columns/action/internal/InlineMenuElement.js":
        /*!******************************************************!*\
          !*** ./columns/action/internal/InlineMenuElement.js ***!
          \******************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsActionInternalInlineMenuElementJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var dom_1 = __webpack_require__(
          /*! ../../../internal/dom */
          "./internal/dom.js");

          var utils_1 = __webpack_require__(
          /*! ../../../internal/utils */
          "./internal/utils.js");

          var EventHandler_1 = __webpack_require__(
          /*! ../../../internal/EventHandler */
          "./internal/EventHandler.js");

          var KEY_TAB = 9;
          var KEY_ENTER = 13;
          var KEY_UP = 38;
          var KEY_DOWN = 40;
          var KEY_ESC = 27;
          var CLASSNAME = "cheetah-grid__inline-menu";
          var ITEM_CLASSNAME = "".concat(CLASSNAME, "__menu-item");
          var HIDDEN_CLASSNAME = "".concat(CLASSNAME, "--hidden");
          var SHOWN_CLASSNAME = "".concat(CLASSNAME, "--shown");
          var EMPTY_ITEM_CLASSNAME = "".concat(ITEM_CLASSNAME, "--empty");

          function findItemParents(target) {
            var el = target;

            while (el && !el.classList.contains(ITEM_CLASSNAME)) {
              el = el.parentElement;

              if (!el || el.classList.contains(CLASSNAME)) {
                return null;
              }
            }

            return el;
          }

          function createMenuElement() {
            __webpack_require__(
            /*! @/columns/action/internal/InlineMenuElement.css */
            "../src/js/columns/action/internal/InlineMenuElement.css");

            return dom_1.createElement("ul", {
              classList: CLASSNAME
            });
          }

          function attachElement(element, rect, menu) {
            menu.style.top = "".concat(rect.top.toFixed(), "px");
            menu.style.left = "".concat(rect.left.toFixed(), "px");
            menu.style.width = "".concat(rect.width.toFixed(), "px");
            menu.style.lineHeight = "".concat(rect.height.toFixed(), "px");
            element.appendChild(menu);
          }

          function optionToLi(_ref24, index) {
            var classList = _ref24.classList,
                label = _ref24.label,
                value = _ref24.value,
                html = _ref24.html;
            var item = dom_1.createElement("li", {
              classList: ITEM_CLASSNAME
            });
            item.tabIndex = 0;
            item.dataset.valueindex = "".concat(index);

            if (classList) {
              var _item$classList;

              (_item$classList = item.classList).add.apply(_item$classList, _toConsumableArray(Array.isArray(classList) ? classList : [classList]));
            }

            if (label) {
              var span = dom_1.createElement("span", {
                text: label
              });
              item.appendChild(span);
            } else if (html) {
              dom_1.appendHtml(item, html);
            }

            if (value === "" || !utils_1.isDef(value)) {
              item.classList.add(EMPTY_ITEM_CLASSNAME);
            }

            return item;
          }

          function openMenu(grid, editor, col, row, value, options, menu) {
            var classList = editor.classList;
            menu.classList.remove(SHOWN_CLASSNAME);
            menu.classList.add(HIDDEN_CLASSNAME);
            dom_1.empty(menu);
            menu.style.font = grid.font || "16px sans-serif";
            var emptyItemEl = null;
            var valueItemEl = null;
            options.forEach(function (option, i) {
              var item = optionToLi(option, i);
              menu.appendChild(item);

              if (option.value === value) {
                valueItemEl = item;
                item.dataset.select = "select";
              }

              if (item.classList.contains(EMPTY_ITEM_CLASSNAME)) {
                emptyItemEl = item;
              }
            });
            var focusEl = valueItemEl || emptyItemEl || menu.children[0];

            if (classList) {
              var _menu$classList;

              (_menu$classList = menu.classList).add.apply(_menu$classList, _toConsumableArray(classList));
            }

            var children = Array.prototype.slice.call(menu.children, 0);
            var focusIndex = children.indexOf(focusEl);

            var _grid$getAttachCellsA2 = grid.getAttachCellsArea(grid.getCellRange(col, row)),
                element = _grid$getAttachCellsA2.element,
                rect = _grid$getAttachCellsA2.rect; // Cover the right line


            rect.width++; // append for calculation

            attachElement(element, rect, menu); // Make the selection item at the middle

            var offset = 0;
            var allHeight = 0;

            for (var i = 0; i < children.length; i++) {
              var offsetHeight = children[i].offsetHeight;

              if (i < focusIndex) {
                offset += offsetHeight;
              }

              allHeight += offsetHeight;
            }

            rect.offsetTop(-offset);
            menu.style.transformOrigin = "center ".concat(offset + Math.ceil(children[focusIndex].offsetHeight / 2), "px 0px");
            attachElement(element, rect, menu); // Control not to overflow the screen range

            var menuClientRect = menu.getBoundingClientRect();
            var scaleDiff = (allHeight - menuClientRect.height) / 2;
            var orgMenuTop = menuClientRect.top - scaleDiff;
            var menuTop = orgMenuTop;
            var menuBottom = menuTop + allHeight;
            var winBottom = window.innerHeight;
            var winMargin = 20;

            if (menuBottom > winBottom - winMargin) {
              var diff = menuBottom - winBottom + winMargin;
              menuTop -= diff;
            }

            if (menuTop < 0
            /*winTop*/
            + winMargin) {
              menuTop = winMargin;
            }

            if (menuTop !== orgMenuTop) {
              rect.offsetTop(-(orgMenuTop - menuTop)); // re update

              attachElement(element, rect, menu);
            }

            if (focusEl) {
              focusEl.focus();
            }

            menu.classList.remove(HIDDEN_CLASSNAME);
            menu.classList.add(SHOWN_CLASSNAME);
          }

          function closeMenu(_grid, _col, _row, menu) {
            menu.classList.remove(SHOWN_CLASSNAME);
            menu.classList.add(HIDDEN_CLASSNAME);
            dom_1.disableFocus(menu);
          }

          var InlineMenuElement = /*#__PURE__*/function () {
            function InlineMenuElement() {
              _classCallCheck(this, InlineMenuElement);

              this._handler = new EventHandler_1.EventHandler();
              this._menu = createMenuElement();

              this._bindMenuEvents();
            }

            _createClass(InlineMenuElement, [{
              key: "dispose",
              value: function dispose() {
                var _a;

                var menu = this._menu;
                this.detach();

                this._handler.dispose();

                delete this._menu;
                this._beforePropEditor = null;
                (_a = menu.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(menu);
              }
            }, {
              key: "attach",
              value: function attach(grid, editor, col, row, value, record) {
                var menu = this._menu;

                if (this._beforePropEditor) {
                  var classList = this._beforePropEditor.classList;

                  if (classList) {
                    var _menu$classList2;

                    (_menu$classList2 = menu.classList).remove.apply(_menu$classList2, _toConsumableArray(classList));
                  }
                }

                var options = editor.options(record);
                openMenu(grid, editor, col, row, value, options, menu);
                this._activeData = {
                  grid: grid,
                  col: col,
                  row: row,
                  editor: editor,
                  options: options
                };
                this._beforePropEditor = editor;
              }
            }, {
              key: "detach",
              value: function detach(gridFocus) {
                if (this._isActive()) {
                  var _this$_activeData3 = this._activeData,
                      grid = _this$_activeData3.grid,
                      col = _this$_activeData3.col,
                      row = _this$_activeData3.row;
                  var menu = this._menu;
                  closeMenu(grid, col, row, menu);
                  var range = grid.getCellRange(col, row);
                  grid.invalidateCellRange(range);

                  if (gridFocus) {
                    grid.focus();
                  }
                }

                this._activeData = null;
              }
            }, {
              key: "_doChangeValue",
              value: function _doChangeValue(valueindex) {
                if (!this._isActive()) {
                  return;
                }

                var _this$_activeData4 = this._activeData,
                    grid = _this$_activeData4.grid,
                    col = _this$_activeData4.col,
                    row = _this$_activeData4.row,
                    options = _this$_activeData4.options;
                var option = options[Number(valueindex)];

                if (option) {
                  var value = option.value;
                  grid.doChangeValue(col, row, function () {
                    return value;
                  });
                }
              }
            }, {
              key: "_isActive",
              value: function _isActive() {
                var menu = this._menu;

                if (!menu || !menu.parentElement) {
                  return false;
                }

                if (!this._activeData) {
                  return false;
                }

                return true;
              }
            }, {
              key: "_bindMenuEvents",
              value: function _bindMenuEvents() {
                var _this30 = this;

                var handler = this._handler;
                var menu = this._menu;

                var stopPropagationOnly = function stopPropagationOnly(e) {
                  return e.stopPropagation();
                }; // gridにイベントが伝播しないように


                handler.on(menu, "mousedown", stopPropagationOnly);
                handler.on(menu, "touchstart", stopPropagationOnly);
                handler.on(menu, "dblclick", stopPropagationOnly);
                handler.on(menu, "click", function (e) {
                  e.stopPropagation();
                  var item = findItemParents(e.target);

                  if (!item) {
                    return;
                  }

                  var valueindex = item.dataset.valueindex;

                  _this30._doChangeValue(valueindex || "");

                  _this30.detach(true);
                });
                handler.on(menu, "keydown", function (e) {
                  var item = findItemParents(e.target);

                  if (!item) {
                    return;
                  }

                  var keyCode = utils_1.event.getKeyCode(e);

                  if (keyCode === KEY_ENTER) {
                    _this30._onKeydownEnter(menu, item, e);
                  } else if (keyCode === KEY_ESC) {
                    _this30.detach(true);

                    utils_1.event.cancel(e);
                  } else if (keyCode === KEY_UP) {
                    var n = dom_1.findPrevSiblingFocusable(item);

                    if (n) {
                      n.focus();
                      utils_1.event.cancel(e);
                    }
                  } else if (keyCode === KEY_DOWN) {
                    var _n = dom_1.findNextSiblingFocusable(item);

                    if (_n) {
                      _n.focus();

                      utils_1.event.cancel(e);
                    }
                  } else if (keyCode === KEY_TAB) {
                    _this30._onKeydownTab(menu, item, e);
                  }
                });
              }
            }, {
              key: "_onKeydownEnter",
              value: function _onKeydownEnter(_menu, item, e) {
                var _a;

                var grid = this._isActive() ? this._activeData.grid : null;
                var valueindex = item.dataset.valueindex;

                this._doChangeValue(valueindex || "");

                this.detach(true);
                utils_1.event.cancel(e);

                if (grid) {
                  if ((_a = grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnEnter) {
                    grid.onKeyDownMove(e);
                  }
                }
              }
            }, {
              key: "_onKeydownTab",
              value: function _onKeydownTab(menu, item, e) {
                var _a;

                if (this._isActive()) {
                  var grid = this._activeData.grid;

                  if ((_a = grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnTab) {
                    var valueindex = item.dataset.valueindex;

                    this._doChangeValue(valueindex || "");

                    this.detach(true);
                    grid.onKeyDownMove(e);
                    return;
                  }
                }

                if (!e.shiftKey) {
                  if (!dom_1.findNextSiblingFocusable(item)) {
                    var n = menu.querySelector(".".concat(ITEM_CLASSNAME));

                    if (!dom_1.isFocusable(n)) {
                      n = dom_1.findNextSiblingFocusable(n);
                    }

                    if (n) {
                      n.focus();
                      utils_1.event.cancel(e);
                    }
                  }
                } else {
                  if (!dom_1.findPrevSiblingFocusable(item)) {
                    var items = menu.querySelectorAll(".".concat(ITEM_CLASSNAME));
                    var _n2 = items[items.length - 1];

                    if (!dom_1.isFocusable(_n2)) {
                      _n2 = dom_1.findPrevSiblingFocusable(_n2);
                    }

                    if (_n2) {
                      _n2.focus();

                      utils_1.event.cancel(e);
                    }
                  }
                }
              }
            }]);

            return InlineMenuElement;
          }();

          exports.InlineMenuElement = InlineMenuElement;
          /***/
        },

        /***/
        "./columns/action/internal/SmallDialogInputElement.js":
        /*!************************************************************!*\
          !*** ./columns/action/internal/SmallDialogInputElement.js ***!
          \************************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsActionInternalSmallDialogInputElementJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __webpack_require__(
          /*! ../../../internal/utils */
          "./internal/utils.js");

          var EventHandler_1 = __webpack_require__(
          /*! ../../../internal/EventHandler */
          "./internal/EventHandler.js");

          var dom_1 = __webpack_require__(
          /*! ../../../internal/dom */
          "./internal/dom.js");

          var input_value_handler_1 = __webpack_require__(
          /*! ./input-value-handler */
          "./columns/action/internal/input-value-handler.js");

          var CLASSNAME = "cheetah-grid__small-dialog-input";
          var INPUT_CLASSNAME = "".concat(CLASSNAME, "__input");
          var HIDDEN_CLASSNAME = "".concat(CLASSNAME, "--hidden");
          var SHOWN_CLASSNAME = "".concat(CLASSNAME, "--shown");
          var KEY_ENTER = 13;
          var KEY_ESC = 27;

          function _focus(input, handler) {
            var focus = function focus() {
              input.focus();
              var end = input.value.length;

              try {
                if (typeof input.selectionStart !== "undefined") {
                  input.selectionStart = end;
                  input.selectionEnd = end;
                  return;
                }
              } catch (e) {} //ignore
              // eslint-disable-next-line @typescript-eslint/no-explicit-any


              if (document.selection) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var range = input.createTextRange();
                range.collapse();
                range.moveEnd("character", end);
                range.moveStart("character", end);
                range.select();
              }
            };

            handler.tryWithOffEvents(input, "blur", function () {
              focus();
            });
          }

          function createDialogElement() {
            __webpack_require__(
            /*! @/columns/action/internal/SmallDialogInputElement.css */
            "../src/js/columns/action/internal/SmallDialogInputElement.css");

            var element = dom_1.createElement("div", {
              classList: [CLASSNAME, HIDDEN_CLASSNAME]
            });
            var input = dom_1.createElement("input", {
              classList: INPUT_CLASSNAME
            });
            input.readOnly = true;
            input.tabIndex = -1;
            element.appendChild(input);
            return element;
          }

          function bindProps(grid, dialog, input, editor) {
            var classList = editor.classList,
                helperText = editor.helperText;

            if (classList) {
              var _dialog$classList;

              (_dialog$classList = dialog.classList).add.apply(_dialog$classList, _toConsumableArray(classList));
            }

            if (helperText && typeof helperText !== "function") {
              dialog.dataset.helperText = helperText;
            }

            _setInputAttrs2(editor, grid, input);
          }

          function unbindProps(_grid, dialog, input, editor) {
            var classList = editor.classList;

            if (classList) {
              var _dialog$classList2;

              (_dialog$classList2 = dialog.classList).remove.apply(_dialog$classList2, _toConsumableArray(classList));
            }

            delete dialog.dataset.helperText;
            input.type = "";
          }

          function _setInputAttrs2(editor, _grid, input) {
            var type = editor.type;
            input.type = type || "";
          }

          var SmallDialogInputElement = /*#__PURE__*/function () {
            function SmallDialogInputElement() {
              _classCallCheck(this, SmallDialogInputElement);

              this._handler = new EventHandler_1.EventHandler();
              this._dialog = createDialogElement();
              this._input = this._dialog.querySelector(".".concat(INPUT_CLASSNAME));

              this._bindDialogEvents();
            }

            _createClass(SmallDialogInputElement, [{
              key: "dispose",
              value: function dispose() {
                var dialog = this._dialog;
                this.detach();

                this._handler.dispose();

                delete this._dialog;
                delete this._input;
                this._beforePropEditor = null;

                if (dialog.parentElement) {
                  dialog.parentElement.removeChild(dialog);
                }
              }
            }, {
              key: "attach",
              value: function attach(grid, editor, col, row, value) {
                var _this31 = this;

                var handler = this._handler;
                var dialog = this._dialog;
                var input = this._input;

                if (this._beforePropEditor) {
                  unbindProps(grid, dialog, input, this._beforePropEditor);
                }

                delete dialog.dataset.errorMessage;
                dialog.classList.remove(SHOWN_CLASSNAME);
                dialog.classList.add(HIDDEN_CLASSNAME);
                input.readOnly = true;
                input.tabIndex = 0;

                var _grid$getAttachCellsA3 = grid.getAttachCellsArea(grid.getCellRange(col, row)),
                    element = _grid$getAttachCellsA3.element,
                    rect = _grid$getAttachCellsA3.rect;

                dialog.style.top = "".concat(rect.top.toFixed(), "px");
                dialog.style.left = "".concat(rect.left.toFixed(), "px");
                dialog.style.width = "".concat(rect.width.toFixed(), "px");
                input.style.height = "".concat(rect.height.toFixed(), "px");
                element.appendChild(dialog);
                input_value_handler_1.setInputValue(input, value);
                input.style.font = grid.font || "16px sans-serif";
                var activeData = {
                  grid: grid,
                  col: col,
                  row: row,
                  editor: editor
                };

                this._onInputValue(input, activeData);

                if (!utils_1.browser.IE) {
                  _focus(input, handler);
                } else {
                  // On the paste-event on IE, since it may not be focused, it will be delayed and focused.
                  setTimeout(function () {
                    return _focus(input, handler);
                  });
                }

                dialog.classList.add(SHOWN_CLASSNAME);
                dialog.classList.remove(HIDDEN_CLASSNAME);
                input.readOnly = false;
                bindProps(grid, dialog, input, editor);
                this._activeData = activeData;
                this._beforePropEditor = editor;
                this._attaching = true;
                setTimeout(function () {
                  delete _this31._attaching;
                });
              }
            }, {
              key: "detach",
              value: function detach(gridFocus) {
                if (this._isActive()) {
                  var dialog = this._dialog;
                  var input = this._input;
                  dialog.classList.remove(SHOWN_CLASSNAME);
                  dialog.classList.add(HIDDEN_CLASSNAME);
                  input.readOnly = true;
                  input.tabIndex = -1;
                  var _this$_activeData5 = this._activeData,
                      grid = _this$_activeData5.grid,
                      col = _this$_activeData5.col,
                      row = _this$_activeData5.row;
                  var range = grid.getCellRange(col, row);
                  grid.invalidateCellRange(range);

                  if (gridFocus) {
                    grid.focus();
                  }
                }

                this._activeData = null;
                this._beforeValue = null;
              }
            }, {
              key: "_doChangeValue",
              value: function _doChangeValue() {
                var _this32 = this;

                if (!this._isActive()) {
                  return false;
                }

                var input = this._input;
                var value = input.value;
                return utils_1.then(this._validate(value), function (res) {
                  if (res && value === input.value) {
                    var _this32$_activeData = _this32._activeData,
                        grid = _this32$_activeData.grid,
                        col = _this32$_activeData.col,
                        row = _this32$_activeData.row;
                    grid.doChangeValue(col, row, function () {
                      return value;
                    });
                    return true;
                  }

                  return false;
                });
              }
            }, {
              key: "_isActive",
              value: function _isActive() {
                var dialog = this._dialog;

                if (!dialog || !dialog.parentElement) {
                  return false;
                }

                if (!this._activeData) {
                  return false;
                }

                return true;
              }
            }, {
              key: "_bindDialogEvents",
              value: function _bindDialogEvents() {
                var _this33 = this;

                var handler = this._handler;
                var dialog = this._dialog;
                var input = this._input;

                var stopPropagationOnly = function stopPropagationOnly(e) {
                  return e.stopPropagation();
                }; // gridにイベントが伝播しないように


                handler.on(dialog, "click", stopPropagationOnly);
                handler.on(dialog, "dblclick", stopPropagationOnly);
                handler.on(dialog, "mousedown", stopPropagationOnly);
                handler.on(dialog, "touchstart", stopPropagationOnly);
                handler.on(input, "compositionstart", function (_e) {
                  input.classList.add("composition");
                });
                handler.on(input, "compositionend", function (_e) {
                  input.classList.remove("composition");

                  _this33._onInputValue(input);
                });

                var onKeyupAndPress = function onKeyupAndPress(_e) {
                  if (input.classList.contains("composition")) {
                    return;
                  }

                  _this33._onInputValue(input);
                };

                handler.on(input, "keyup", onKeyupAndPress);
                handler.on(input, "keypress", onKeyupAndPress);
                handler.on(input, "keydown", function (e) {
                  if (input.classList.contains("composition")) {
                    return;
                  }

                  var keyCode = utils_1.event.getKeyCode(e);

                  if (keyCode === KEY_ESC) {
                    _this33.detach(true);

                    utils_1.event.cancel(e);
                  } else if (keyCode === KEY_ENTER) {
                    _this33._onKeydownEnter(e);
                  } else {
                    _this33._onInputValue(input);
                  }
                });
              }
            }, {
              key: "_onKeydownEnter",
              value: function _onKeydownEnter(e) {
                var _this34 = this;

                if (this._attaching) {
                  return;
                }

                var input = this._input;
                var value = input.value;
                utils_1.then(this._doChangeValue(), function (r) {
                  var _a;

                  if (r && value === input.value) {
                    var grid = _this34._isActive() ? _this34._activeData.grid : null;

                    _this34.detach(true);

                    if ((_a = grid === null || grid === void 0 ? void 0 : grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnEnter) {
                      grid.onKeyDownMove(e);
                    }
                  }
                });
                utils_1.event.cancel(e);
              }
            }, {
              key: "_onInputValue",
              value: function _onInputValue(input, activeData) {
                var before = this._beforeValue;
                var value = input.value;

                if (before !== value) {
                  this._onInputValueChange(value, activeData);
                }

                this._beforeValue = value;
              }
            }, {
              key: "_onInputValueChange",
              value: function _onInputValueChange(after, activeData) {
                activeData = activeData || this._activeData;
                var dialog = this._dialog;
                var _activeData = activeData,
                    grid = _activeData.grid,
                    col = _activeData.col,
                    row = _activeData.row,
                    editor = _activeData.editor;

                if (typeof editor.helperText === "function") {
                  var helperText = editor.helperText(after, {
                    grid: grid,
                    col: col,
                    row: row
                  });

                  if (helperText) {
                    dialog.dataset.helperText = helperText;
                  } else {
                    delete dialog.dataset.helperText;
                  }
                }

                if ("errorMessage" in dialog.dataset) {
                  this._validate(after, true);
                }
              }
            }, {
              key: "_validate",
              value: function _validate(value, inputOnly) {
                var dialog = this._dialog;
                var input = this._input;
                var _this$_activeData6 = this._activeData,
                    grid = _this$_activeData6.grid,
                    col = _this$_activeData6.col,
                    row = _this$_activeData6.row,
                    editor = _this$_activeData6.editor;
                var message = "";

                if (editor.inputValidator) {
                  message = editor.inputValidator(value, {
                    grid: grid,
                    col: col,
                    row: row
                  });
                }

                return utils_1.then(message, function (message) {
                  if (!message && editor.validator && !inputOnly) {
                    message = editor.validator(value, {
                      grid: grid,
                      col: col,
                      row: row
                    });
                  }

                  return utils_1.then(message, function (message) {
                    if (message && value === input.value) {
                      dialog.dataset.errorMessage = message;
                    } else {
                      delete dialog.dataset.errorMessage;
                    }

                    return !message;
                  });
                });
              }
            }], [{
              key: "setInputAttrs",
              value: function setInputAttrs(editor, grid, input) {
                _setInputAttrs2(editor, grid, input);
              }
            }]);

            return SmallDialogInputElement;
          }();

          exports.SmallDialogInputElement = SmallDialogInputElement;
          /***/
        },

        /***/
        "./columns/action/internal/input-value-handler.js":
        /*!********************************************************!*\
          !*** ./columns/action/internal/input-value-handler.js ***!
          \********************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsActionInternalInputValueHandlerJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var EventHandler_1 = __webpack_require__(
          /*! ../../../internal/EventHandler */
          "./internal/EventHandler.js");

          function setInputValue(input, value) {
            var sign = input.type === "number" && value === "-";

            if (sign) {
              // When `type="number"`, the minus sign is not accepted, so change it to `type="text"` once.
              input.type = "";
              var handler = new EventHandler_1.EventHandler();

              var dispose = function dispose() {
                if (handler) {
                  handler.dispose();
                  handler = null;
                }
              };

              handler.once(input, "input", function (_e) {
                input.type = "number";
                dispose();
              });
              handler.once(input, "blur", function (_e) {
                dispose();
              });
            }

            input.value = value !== null && value !== void 0 ? value : "";
          }

          exports.setInputValue = setInputValue;
          /***/
        },

        /***/
        "./columns/message/BaseMessage.js":
        /*!****************************************!*\
          !*** ./columns/message/BaseMessage.js ***!
          \****************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsMessageBaseMessageJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var BaseMessage = /*#__PURE__*/function () {
            function BaseMessage(grid) {
              _classCallCheck(this, BaseMessage);

              this._messageElement = null;
              this._grid = grid;
            }

            _createClass(BaseMessage, [{
              key: "dispose",
              value: function dispose() {
                this.detachMessageElement();

                if (this._messageElement) {
                  this._messageElement.dispose();
                }

                this._messageElement = null;
              }
            }, {
              key: "_getMessageElement",
              value: function _getMessageElement() {
                return this._messageElement || (this._messageElement = this.createMessageElementInternal());
              }
            }, {
              key: "attachMessageElement",
              value: function attachMessageElement(col, row, message) {
                var messageElement = this._getMessageElement();

                messageElement.attach(this._grid, col, row, message);
              }
            }, {
              key: "moveMessageElement",
              value: function moveMessageElement(col, row) {
                var messageElement = this._getMessageElement();

                messageElement.move(this._grid, col, row);
              }
            }, {
              key: "detachMessageElement",
              value: function detachMessageElement() {
                var messageElement = this._getMessageElement();

                messageElement._detach();
              }
            }, {
              key: "drawCellMessage",
              value: function drawCellMessage(message, context, style, helper, grid, info) {
                this.drawCellMessageInternal(message, context, style, helper, grid, info);
              }
            }]);

            return BaseMessage;
          }();

          exports.BaseMessage = BaseMessage;
          /***/
        },

        /***/
        "./columns/message/ErrorMessage.js":
        /*!*****************************************!*\
          !*** ./columns/message/ErrorMessage.js ***!
          \*****************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsMessageErrorMessageJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var messageUtils = __importStar(__webpack_require__(
          /*! ./messageUtils */
          "./columns/message/messageUtils.js"));

          var BaseMessage_1 = __webpack_require__(
          /*! ./BaseMessage */
          "./columns/message/BaseMessage.js");

          var ErrorMessageElement_1 = __webpack_require__(
          /*! ./internal/ErrorMessageElement */
          "./columns/message/internal/ErrorMessageElement.js");

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          var RED_A100 = "#ff8a80";

          var ErrorMessage = /*#__PURE__*/function (_BaseMessage_1$BaseMe) {
            _inherits(ErrorMessage, _BaseMessage_1$BaseMe);

            var _super14 = _createSuper(ErrorMessage);

            function ErrorMessage() {
              _classCallCheck(this, ErrorMessage);

              return _super14.apply(this, arguments);
            }

            _createClass(ErrorMessage, [{
              key: "createMessageElementInternal",
              value: function createMessageElementInternal() {
                return new ErrorMessageElement_1.ErrorMessageElement();
              }
            }, {
              key: "drawCellMessageInternal",
              value: function drawCellMessageInternal(_message, context, style, helper, grid, _info) {
                var bgColor = style.bgColor;

                var _context$getSelection = context.getSelection(),
                    select = _context$getSelection.select;

                if (!utils_1.cellInRange(grid.getCellRange(context.col, context.row), select.col, select.row) || !grid.hasFocusGrid()) {
                  helper.drawBorderWithClip(context, function (_ctx) {
                    messageUtils.drawExclamationMarkBox(context, {
                      bgColor: RED_A100,
                      color: bgColor
                    }, helper);
                  });
                }
              }
            }]);

            return ErrorMessage;
          }(BaseMessage_1.BaseMessage);

          exports.ErrorMessage = ErrorMessage;
          /***/
        },

        /***/
        "./columns/message/InfoMessage.js":
        /*!****************************************!*\
          !*** ./columns/message/InfoMessage.js ***!
          \****************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsMessageInfoMessageJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var messageUtils = __importStar(__webpack_require__(
          /*! ./messageUtils */
          "./columns/message/messageUtils.js"));

          var BaseMessage_1 = __webpack_require__(
          /*! ./BaseMessage */
          "./columns/message/BaseMessage.js");

          var MessageElement_1 = __webpack_require__(
          /*! ./internal/MessageElement */
          "./columns/message/internal/MessageElement.js");

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          var GREY_L2 = "#e0e0e0";

          var InfoMessage = /*#__PURE__*/function (_BaseMessage_1$BaseMe2) {
            _inherits(InfoMessage, _BaseMessage_1$BaseMe2);

            var _super15 = _createSuper(InfoMessage);

            function InfoMessage() {
              _classCallCheck(this, InfoMessage);

              return _super15.apply(this, arguments);
            }

            _createClass(InfoMessage, [{
              key: "createMessageElementInternal",
              value: function createMessageElementInternal() {
                return new MessageElement_1.MessageElement();
              }
            }, {
              key: "drawCellMessageInternal",
              value: function drawCellMessageInternal(_message, context, style, helper, grid, _info) {
                var bgColor = style.bgColor;

                var _context$getSelection2 = context.getSelection(),
                    select = _context$getSelection2.select;

                if (!utils_1.cellInRange(grid.getCellRange(context.col, context.row), select.col, select.row) || !grid.hasFocusGrid()) {
                  helper.drawBorderWithClip(context, function (_ctx) {
                    messageUtils.drawExclamationMarkBox(context, {
                      bgColor: GREY_L2,
                      color: bgColor
                    }, helper);
                  });
                }
              }
            }]);

            return InfoMessage;
          }(BaseMessage_1.BaseMessage);

          exports.InfoMessage = InfoMessage;
          /***/
        },

        /***/
        "./columns/message/MessageHandler.js":
        /*!*******************************************!*\
          !*** ./columns/message/MessageHandler.js ***!
          \*******************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsMessageMessageHandlerJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var ErrorMessage_1 = __webpack_require__(
          /*! ./ErrorMessage */
          "./columns/message/ErrorMessage.js");

          var InfoMessage_1 = __webpack_require__(
          /*! ./InfoMessage */
          "./columns/message/InfoMessage.js");

          var LG_EVENT_TYPE_1 = __webpack_require__(
          /*! ../../list-grid/LG_EVENT_TYPE */
          "./list-grid/LG_EVENT_TYPE.js");

          var WarningMessage_1 = __webpack_require__(
          /*! ./WarningMessage */
          "./columns/message/WarningMessage.js");

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          var EMPTY_MESSAGE = {
            type: "error",
            message: null
          };
          var MESSAGE_INSTANCE_FACTORY = {
            error: function error(grid) {
              return new ErrorMessage_1.ErrorMessage(grid);
            },
            info: function info(grid) {
              return new InfoMessage_1.InfoMessage(grid);
            },
            warning: function warning(grid) {
              return new WarningMessage_1.WarningMessage(grid);
            }
          };

          function normalizeMessage(message) {
            if (!message || utils_1.isPromise(message)) {
              return EMPTY_MESSAGE;
            }

            if (typeof message === "string") {
              return {
                type: "error",
                message: message,
                original: message
              };
            }

            var type = message.type || "error";

            if (type && type in MESSAGE_INSTANCE_FACTORY) {
              return {
                type: type.toLowerCase(),
                message: message.message,
                original: message
              };
            }

            return {
              type: "error",
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              message: "".concat(message),
              original: message
            };
          }

          function hasMessage(message) {
            return !!normalizeMessage(message).message;
          }

          var MessageHandler = /*#__PURE__*/function () {
            function MessageHandler(grid, getMessage) {
              _classCallCheck(this, MessageHandler);

              this._attachInfo = null;
              this._grid = grid;
              this._messageInstances = {};

              this._bindGridEvent(grid, getMessage);
            }

            _createClass(MessageHandler, [{
              key: "dispose",
              value: function dispose() {
                var _a;

                var messageInstances = this._messageInstances;

                for (var k in messageInstances) {
                  (_a = messageInstances[k]) === null || _a === void 0 ? void 0 : _a.dispose();
                }

                delete this._messageInstances;
                delete this._attachInfo;
              }
            }, {
              key: "drawCellMessage",
              value: function drawCellMessage(message, context, style, helper, grid, info) {
                if (!hasMessage(message)) {
                  return;
                }

                var instance = this._getMessageInstanceOfMessage(message);

                instance.drawCellMessage(normalizeMessage(message), context, style, helper, grid, info);
              }
            }, {
              key: "_attach",
              value: function _attach(col, row, message) {
                var info = this._attachInfo;

                var instance = this._getMessageInstanceOfMessage(message);

                if (info && info.instance !== instance) {
                  info.instance.detachMessageElement();
                }

                instance.attachMessageElement(col, row, normalizeMessage(message));
                this._attachInfo = {
                  col: col,
                  row: row,
                  instance: instance
                };
              }
            }, {
              key: "_move",
              value: function _move(col, row) {
                var info = this._attachInfo;

                if (!info || info.col !== col || info.row !== row) {
                  return;
                }

                var instance = info.instance;
                instance.moveMessageElement(col, row);
              }
            }, {
              key: "_detach",
              value: function _detach() {
                var info = this._attachInfo;

                if (!info) {
                  return;
                }

                var instance = info.instance;
                instance.detachMessageElement();
                this._attachInfo = null;
              }
            }, {
              key: "_bindGridEvent",
              value: function _bindGridEvent(grid, getMessage) {
                var _this35 = this;

                var onSelectMessage = function onSelectMessage(sel) {
                  var message = getMessage(sel.col, sel.row);

                  if (!hasMessage(message)) {
                    _this35._detach();
                  } else {
                    _this35._attach(sel.col, sel.row, message);
                  }
                };

                grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.SELECTED_CELL, function (e) {
                  if (!e.selected) {
                    return;
                  }

                  if (e.before.col === e.col && e.before.row === e.row) {
                    return;
                  }

                  onSelectMessage(e);
                });
                grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.SCROLL, function () {
                  var sel = grid.selection.select;

                  _this35._move(sel.col, sel.row);
                });
                grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.CHANGED_VALUE, function (e) {
                  var sel = grid.selection.select;

                  if (sel.col !== e.col || sel.row !== e.row) {
                    return;
                  }

                  onSelectMessage(e);
                });
                grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.FOCUS_GRID, function (_e) {
                  var sel = grid.selection.select;
                  onSelectMessage(sel);
                });
                grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.BLUR_GRID, function (_e) {
                  _this35._detach();
                });
              }
            }, {
              key: "_getMessageInstanceOfMessage",
              value: function _getMessageInstanceOfMessage(message) {
                var messageInstances = this._messageInstances;

                var _normalizeMessage = normalizeMessage(message),
                    type = _normalizeMessage.type;

                return messageInstances[type] || (messageInstances[type] = MESSAGE_INSTANCE_FACTORY[type](this._grid));
              }
            }]);

            return MessageHandler;
          }();

          exports.MessageHandler = MessageHandler;
          /***/
        },

        /***/
        "./columns/message/WarningMessage.js":
        /*!*******************************************!*\
          !*** ./columns/message/WarningMessage.js ***!
          \*******************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsMessageWarningMessageJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var messageUtils = __importStar(__webpack_require__(
          /*! ./messageUtils */
          "./columns/message/messageUtils.js"));

          var BaseMessage_1 = __webpack_require__(
          /*! ./BaseMessage */
          "./columns/message/BaseMessage.js");

          var WarningMessageElement_1 = __webpack_require__(
          /*! ./internal/WarningMessageElement */
          "./columns/message/internal/WarningMessageElement.js");

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          var DEEP_ORANGE_A100 = "#ff9e80";

          var WarningMessage = /*#__PURE__*/function (_BaseMessage_1$BaseMe3) {
            _inherits(WarningMessage, _BaseMessage_1$BaseMe3);

            var _super16 = _createSuper(WarningMessage);

            function WarningMessage() {
              _classCallCheck(this, WarningMessage);

              return _super16.apply(this, arguments);
            }

            _createClass(WarningMessage, [{
              key: "createMessageElementInternal",
              value: function createMessageElementInternal() {
                return new WarningMessageElement_1.WarningMessageElement();
              }
            }, {
              key: "drawCellMessageInternal",
              value: function drawCellMessageInternal(_message, context, style, helper, grid, _info) {
                var bgColor = style.bgColor;

                var _context$getSelection3 = context.getSelection(),
                    select = _context$getSelection3.select;

                if (!utils_1.cellInRange(grid.getCellRange(context.col, context.row), select.col, select.row) || !grid.hasFocusGrid()) {
                  helper.drawBorderWithClip(context, function (_ctx) {
                    messageUtils.drawExclamationMarkBox(context, {
                      bgColor: DEEP_ORANGE_A100,
                      color: bgColor
                    }, helper);
                  });
                }
              }
            }]);

            return WarningMessage;
          }(BaseMessage_1.BaseMessage);

          exports.WarningMessage = WarningMessage;
          /***/
        },

        /***/
        "./columns/message/internal/ErrorMessageElement.js":
        /*!*********************************************************!*\
          !*** ./columns/message/internal/ErrorMessageElement.js ***!
          \*********************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsMessageInternalErrorMessageElementJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var MessageElement_1 = __webpack_require__(
          /*! ./MessageElement */
          "./columns/message/internal/MessageElement.js");

          var CLASSNAME = "cheetah-grid__error-message-element";
          var MESSAGE_CLASSNAME = "".concat(CLASSNAME, "__message");

          var ErrorMessageElement = /*#__PURE__*/function (_MessageElement_1$Mes) {
            _inherits(ErrorMessageElement, _MessageElement_1$Mes);

            var _super17 = _createSuper(ErrorMessageElement);

            function ErrorMessageElement() {
              var _this36;

              _classCallCheck(this, ErrorMessageElement);

              _this36 = _super17.call(this);

              __webpack_require__(
              /*! @/columns/message/internal/ErrorMessageElement.css */
              "../src/js/columns/message/internal/ErrorMessageElement.css");

              _this36._rootElement.classList.add(CLASSNAME);

              _this36._messageElement.classList.add(MESSAGE_CLASSNAME);

              return _this36;
            }

            return ErrorMessageElement;
          }(MessageElement_1.MessageElement);

          exports.ErrorMessageElement = ErrorMessageElement;
          /***/
        },

        /***/
        "./columns/message/internal/MessageElement.js":
        /*!****************************************************!*\
          !*** ./columns/message/internal/MessageElement.js ***!
          \****************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsMessageInternalMessageElementJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var EventHandler_1 = __webpack_require__(
          /*! ../../../internal/EventHandler */
          "./internal/EventHandler.js");

          var dom_1 = __webpack_require__(
          /*! ../../../internal/dom */
          "./internal/dom.js");

          var CLASSNAME = "cheetah-grid__message-element";
          var MESSAGE_CLASSNAME = "".concat(CLASSNAME, "__message");
          var HIDDEN_CLASSNAME = "".concat(CLASSNAME, "--hidden");
          var SHOWN_CLASSNAME = "".concat(CLASSNAME, "--shown");

          function createMessageDomElement() {
            __webpack_require__(
            /*! @/columns/message/internal/MessageElement.css */
            "../src/js/columns/message/internal/MessageElement.css");

            var rootElement = dom_1.createElement("div", {
              classList: [CLASSNAME, HIDDEN_CLASSNAME]
            });
            var messageElement = dom_1.createElement("span", {
              classList: [MESSAGE_CLASSNAME]
            });
            rootElement.appendChild(messageElement);
            return rootElement;
          }

          var MessageElement = /*#__PURE__*/function () {
            function MessageElement() {
              _classCallCheck(this, MessageElement);

              this._handler = new EventHandler_1.EventHandler();
              var rootElement = this._rootElement = createMessageDomElement();
              this._messageElement = rootElement.querySelector(".".concat(MESSAGE_CLASSNAME));
            }

            _createClass(MessageElement, [{
              key: "dispose",
              value: function dispose() {
                this.detach();

                this._handler.dispose();

                delete this._rootElement;
                delete this._messageElement;
              }
            }, {
              key: "attach",
              value: function attach(grid, col, row, message) {
                var rootElement = this._rootElement;
                var messageElement = this._messageElement;
                rootElement.classList.remove(SHOWN_CLASSNAME);
                rootElement.classList.add(HIDDEN_CLASSNAME);

                if (this._attachCell(grid, col, row)) {
                  rootElement.classList.add(SHOWN_CLASSNAME);
                  rootElement.classList.remove(HIDDEN_CLASSNAME);
                  messageElement.textContent = message.message;
                } else {
                  this._detach();
                }
              }
            }, {
              key: "move",
              value: function move(grid, col, row) {
                var rootElement = this._rootElement;

                if (this._attachCell(grid, col, row)) {
                  rootElement.classList.add(SHOWN_CLASSNAME);
                  rootElement.classList.remove(HIDDEN_CLASSNAME);
                } else {
                  this._detach();
                }
              }
            }, {
              key: "detach",
              value: function detach() {
                this._detach();
              }
            }, {
              key: "_detach",
              value: function _detach() {
                var rootElement = this._rootElement;

                if (rootElement.parentElement) {
                  rootElement.parentElement.removeChild(rootElement);
                  rootElement.classList.remove(SHOWN_CLASSNAME);
                  rootElement.classList.add(HIDDEN_CLASSNAME);
                }
              }
            }, {
              key: "_attachCell",
              value: function _attachCell(grid, col, row) {
                var rootElement = this._rootElement;

                var _grid$getAttachCellsA4 = grid.getAttachCellsArea(grid.getCellRange(col, row)),
                    element = _grid$getAttachCellsA4.element,
                    rect = _grid$getAttachCellsA4.rect;

                var top = rect.bottom,
                    left = rect.left,
                    width = rect.width;
                var frozenRowCount = grid.frozenRowCount,
                    frozenColCount = grid.frozenColCount;

                if (row >= frozenRowCount && frozenRowCount > 0) {
                  var _grid$getAttachCellsA5 = grid.getAttachCellsArea(grid.getCellRange(col, frozenRowCount - 1)),
                      frozenRect = _grid$getAttachCellsA5.rect;

                  if (top < frozenRect.bottom) {
                    return false; //範囲外
                  }
                } else {
                  if (top < 0) {
                    return false; //範囲外
                  }
                }

                if (col >= frozenColCount && frozenColCount > 0) {
                  var _grid$getAttachCellsA6 = grid.getAttachCellsArea(grid.getCellRange(frozenColCount - 1, row)),
                      _frozenRect = _grid$getAttachCellsA6.rect;

                  if (left < _frozenRect.right) {
                    return false; //範囲外
                  }
                } else {
                  if (left < 0) {
                    return false; //範囲外
                  }
                }

                var offsetHeight = element.offsetHeight,
                    offsetWidth = element.offsetWidth;

                if (offsetHeight < top) {
                  return false; //範囲外
                }

                if (offsetWidth < left) {
                  return false; //範囲外
                }

                rootElement.style.top = "".concat(top.toFixed(), "px");
                rootElement.style.left = "".concat(left.toFixed(), "px");
                rootElement.style.width = "".concat(width.toFixed(), "px");

                if (rootElement.parentElement !== element) {
                  element.appendChild(rootElement);
                }

                return true;
              }
            }]);

            return MessageElement;
          }();

          exports.MessageElement = MessageElement;
          /***/
        },

        /***/
        "./columns/message/internal/WarningMessageElement.js":
        /*!***********************************************************!*\
          !*** ./columns/message/internal/WarningMessageElement.js ***!
          \***********************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsMessageInternalWarningMessageElementJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var MessageElement_1 = __webpack_require__(
          /*! ./MessageElement */
          "./columns/message/internal/MessageElement.js");

          var CLASSNAME = "cheetah-grid__warning-message-element";
          var MESSAGE_CLASSNAME = "".concat(CLASSNAME, "__message");

          var WarningMessageElement = /*#__PURE__*/function (_MessageElement_1$Mes2) {
            _inherits(WarningMessageElement, _MessageElement_1$Mes2);

            var _super18 = _createSuper(WarningMessageElement);

            function WarningMessageElement() {
              var _this37;

              _classCallCheck(this, WarningMessageElement);

              _this37 = _super18.call(this);

              __webpack_require__(
              /*! @/columns/message/internal/WarningMessageElement.css */
              "../src/js/columns/message/internal/WarningMessageElement.css");

              _this37._rootElement.classList.add(CLASSNAME);

              _this37._messageElement.classList.add(MESSAGE_CLASSNAME);

              return _this37;
            }

            return WarningMessageElement;
          }(MessageElement_1.MessageElement);

          exports.WarningMessageElement = WarningMessageElement;
          /***/
        },

        /***/
        "./columns/message/messageUtils.js":
        /*!*****************************************!*\
          !*** ./columns/message/messageUtils.js ***!
          \*****************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsMessageMessageUtilsJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var Rect_1 = __webpack_require__(
          /*! ../../internal/Rect */
          "./internal/Rect.js");

          function drawExclamationMarkBox(context, style, helper) {
            var bgColor = style.bgColor,
                color = style.color;
            var ctx = context.getContext();
            var rect = context.getRect(); // draw box

            ctx.fillStyle = bgColor;
            var boxRect = rect.copy();
            boxRect.left = boxRect.right - 24;
            ctx.fillRect(boxRect.left, boxRect.top, boxRect.width, boxRect.height - 1); // draw exclamation mark

            var fillColor = color;
            var height = 20;
            var width = height / 5;
            var left = boxRect.left + (boxRect.width - width) / 2;
            var top = boxRect.top + (boxRect.height - height) / 2;
            helper.fillRectWithState(new Rect_1.Rect(left, top, width, height / 5 * 3), context, {
              fillColor: fillColor
            });
            helper.fillRectWithState(new Rect_1.Rect(left, top + height / 5 * 4, width, height / 5), context, {
              fillColor: fillColor
            });
          }

          exports.drawExclamationMarkBox = drawExclamationMarkBox;

          function drawInfomationMarkBox(context, style, helper) {
            var bgColor = style.bgColor,
                color = style.color;
            var ctx = context.getContext();
            var rect = context.getRect(); // draw box

            ctx.fillStyle = bgColor;
            var boxRect = rect.copy();
            boxRect.left = boxRect.right - 24;
            ctx.fillRect(boxRect.left, boxRect.top, boxRect.width, boxRect.height - 1); // draw i mark

            var fillColor = color;
            var height = 20;
            var width = height / 5;
            var left = boxRect.left + (boxRect.width - width) / 2;
            var top = boxRect.top + (boxRect.height - height) / 2;
            helper.fillRectWithState(new Rect_1.Rect(left, top, width, height / 5), context, {
              fillColor: fillColor
            });
            helper.fillRectWithState(new Rect_1.Rect(left, top + height / 5 * 2, width, height / 5 * 3), context, {
              fillColor: fillColor
            });
          }

          exports.drawInfomationMarkBox = drawInfomationMarkBox;
          /***/
        },

        /***/
        "./columns/style.js":
        /*!**************************!*\
          !*** ./columns/style.js ***!
          \**************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsStyleJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var BaseStyle_1 = __webpack_require__(
          /*! ./style/BaseStyle */
          "./columns/style/BaseStyle.js");

          exports.BaseStyle = BaseStyle_1.BaseStyle;

          var ButtonStyle_1 = __webpack_require__(
          /*! ./style/ButtonStyle */
          "./columns/style/ButtonStyle.js");

          exports.ButtonStyle = ButtonStyle_1.ButtonStyle;

          var CheckStyle_1 = __webpack_require__(
          /*! ./style/CheckStyle */
          "./columns/style/CheckStyle.js");

          exports.CheckStyle = CheckStyle_1.CheckStyle;

          var IconStyle_1 = __webpack_require__(
          /*! ./style/IconStyle */
          "./columns/style/IconStyle.js");

          exports.IconStyle = IconStyle_1.IconStyle;

          var ImageStyle_1 = __webpack_require__(
          /*! ./style/ImageStyle */
          "./columns/style/ImageStyle.js");

          exports.ImageStyle = ImageStyle_1.ImageStyle;

          var MenuStyle_1 = __webpack_require__(
          /*! ./style/MenuStyle */
          "./columns/style/MenuStyle.js");

          exports.MenuStyle = MenuStyle_1.MenuStyle;

          var MultilineTextStyle_1 = __webpack_require__(
          /*! ./style/MultilineTextStyle */
          "./columns/style/MultilineTextStyle.js");

          exports.MultilineTextStyle = MultilineTextStyle_1.MultilineTextStyle;

          var NumberStyle_1 = __webpack_require__(
          /*! ./style/NumberStyle */
          "./columns/style/NumberStyle.js");

          exports.NumberStyle = NumberStyle_1.NumberStyle;

          var PercentCompleteBarStyle_1 = __webpack_require__(
          /*! ./style/PercentCompleteBarStyle */
          "./columns/style/PercentCompleteBarStyle.js");

          exports.PercentCompleteBarStyle = PercentCompleteBarStyle_1.PercentCompleteBarStyle;

          var RadioStyle_1 = __webpack_require__(
          /*! ./style/RadioStyle */
          "./columns/style/RadioStyle.js");

          exports.RadioStyle = RadioStyle_1.RadioStyle;

          var Style_1 = __webpack_require__(
          /*! ./style/Style */
          "./columns/style/Style.js");

          exports.Style = Style_1.Style;
          var EVENT_TYPE = BaseStyle_1.BaseStyle.EVENT_TYPE;
          exports.EVENT_TYPE = EVENT_TYPE;

          function of(columnStyle, // eslint-disable-next-line @typescript-eslint/no-explicit-any
          record) {
            var StyleClassDef = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Style_1.Style;

            if (columnStyle) {
              if (columnStyle instanceof BaseStyle_1.BaseStyle) {
                return columnStyle;
              } else if (typeof columnStyle === "function") {
                return of(columnStyle(record), record, StyleClassDef);
              } else if (record && columnStyle in record) {
                return of(record[columnStyle], record, StyleClassDef);
              } // eslint-disable-next-line @typescript-eslint/no-explicit-any


              return new StyleClassDef(columnStyle);
            } else {
              return StyleClassDef.DEFAULT;
            }
          }

          exports.of = of;
          /***/
        },

        /***/
        "./columns/style/BaseStyle.js":
        /*!************************************!*\
          !*** ./columns/style/BaseStyle.js ***!
          \************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsStyleBaseStyleJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var EventTarget_1 = __webpack_require__(
          /*! ../../core/EventTarget */
          "./core/EventTarget.js");

          var STYLE_EVENT_TYPE = {
            CHANGE_STYLE: "change_style"
          };
          var defaultStyle;

          var BaseStyle = /*#__PURE__*/function (_EventTarget_1$EventT) {
            _inherits(BaseStyle, _EventTarget_1$EventT);

            var _super19 = _createSuper(BaseStyle);

            function BaseStyle() {
              var _this38;

              var _ref25 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                  bgColor = _ref25.bgColor;

              _classCallCheck(this, BaseStyle);

              _this38 = _super19.call(this);
              _this38._bgColor = bgColor;
              return _this38;
            }

            _createClass(BaseStyle, [{
              key: "doChangeStyle",
              value: function doChangeStyle() {
                this.fireListeners(STYLE_EVENT_TYPE.CHANGE_STYLE);
              }
            }, {
              key: "clone",
              value: function clone() {
                return new BaseStyle(this);
              }
            }, {
              key: "bgColor",
              get: function get() {
                return this._bgColor;
              },
              set: function set(bgColor) {
                this._bgColor = bgColor;
                this.doChangeStyle();
              }
            }], [{
              key: "EVENT_TYPE",
              get: function get() {
                return STYLE_EVENT_TYPE;
              }
            }, {
              key: "DEFAULT",
              get: function get() {
                return defaultStyle ? defaultStyle : defaultStyle = new BaseStyle();
              }
            }]);

            return BaseStyle;
          }(EventTarget_1.EventTarget);

          exports.BaseStyle = BaseStyle;
          /***/
        },

        /***/
        "./columns/style/BranchGraphStyle.js":
        /*!*******************************************!*\
          !*** ./columns/style/BranchGraphStyle.js ***!
          \*******************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsStyleBranchGraphStyleJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var BaseStyle_1 = __webpack_require__(
          /*! ./BaseStyle */
          "./columns/style/BaseStyle.js");

          var defaultStyle;

          var DEFAULT_BRANCH_COLORS = function DEFAULT_BRANCH_COLORS(_name, index) {
            switch (index % 3) {
              case 0:
                return "#979797";

              case 1:
                return "#008fb5";

              case 2:
                return "#f1c109";

              default:
            }

            return "#979797";
          };

          var BranchGraphStyle = /*#__PURE__*/function (_BaseStyle_1$BaseStyl) {
            _inherits(BranchGraphStyle, _BaseStyle_1$BaseStyl);

            var _super20 = _createSuper(BranchGraphStyle);

            function BranchGraphStyle() {
              var _this39;

              var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, BranchGraphStyle);

              _this39 = _super20.call(this, style);
              _this39._branchColors = style.branchColors || DEFAULT_BRANCH_COLORS;
              _this39._margin = style.margin || 4;
              _this39._circleSize = style.circleSize || 16;
              _this39._branchLineWidth = style.branchLineWidth || 4;
              _this39._mergeStyle = style.mergeStyle === "straight" ? "straight" : "bezier";
              return _this39;
            }

            _createClass(BranchGraphStyle, [{
              key: "clone",
              value: function clone() {
                return new BranchGraphStyle(this);
              }
            }, {
              key: "branchColors",
              get: function get() {
                return this._branchColors;
              },
              set: function set(branchColors) {
                this._branchColors = branchColors;
                this.doChangeStyle();
              }
            }, {
              key: "margin",
              get: function get() {
                return this._margin;
              },
              set: function set(margin) {
                this._margin = margin;
                this.doChangeStyle();
              }
            }, {
              key: "circleSize",
              get: function get() {
                return this._circleSize;
              },
              set: function set(circleSize) {
                this._circleSize = circleSize;
                this.doChangeStyle();
              }
            }, {
              key: "branchLineWidth",
              get: function get() {
                return this._branchLineWidth;
              },
              set: function set(branchLineWidth) {
                this._branchLineWidth = branchLineWidth;
                this.doChangeStyle();
              }
            }, {
              key: "mergeStyle",
              get: function get() {
                return this._mergeStyle;
              },
              set: function set(mergeStyle) {
                this._mergeStyle = mergeStyle;
                this.doChangeStyle();
              }
            }], [{
              key: "DEFAULT",
              get: function get() {
                return defaultStyle ? defaultStyle : defaultStyle = new BranchGraphStyle();
              }
            }]);

            return BranchGraphStyle;
          }(BaseStyle_1.BaseStyle);

          exports.BranchGraphStyle = BranchGraphStyle;
          /***/
        },

        /***/
        "./columns/style/ButtonStyle.js":
        /*!**************************************!*\
          !*** ./columns/style/ButtonStyle.js ***!
          \**************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsStyleButtonStyleJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var Style_1 = __webpack_require__(
          /*! ./Style */
          "./columns/style/Style.js");

          function adj(style) {
            var _style$textAlign = style.textAlign,
                textAlign = _style$textAlign === void 0 ? "center" : _style$textAlign;
            style.textAlign = textAlign;
            return style;
          }

          var defaultStyle;

          var ButtonStyle = /*#__PURE__*/function (_Style_1$Style) {
            _inherits(ButtonStyle, _Style_1$Style);

            var _super21 = _createSuper(ButtonStyle);

            function ButtonStyle() {
              var _this40;

              var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, ButtonStyle);

              _this40 = _super21.call(this, adj(style));
              var buttonBgColor = style.buttonBgColor;
              _this40._buttonBgColor = buttonBgColor;
              return _this40;
            }

            _createClass(ButtonStyle, [{
              key: "clone",
              value: function clone() {
                return new ButtonStyle(this);
              }
            }, {
              key: "buttonBgColor",
              get: function get() {
                return this._buttonBgColor;
              },
              set: function set(buttonBgColor) {
                this._buttonBgColor = buttonBgColor;
                this.doChangeStyle();
              }
            }], [{
              key: "DEFAULT",
              get: function get() {
                return defaultStyle ? defaultStyle : defaultStyle = new ButtonStyle();
              }
            }]);

            return ButtonStyle;
          }(Style_1.Style);

          exports.ButtonStyle = ButtonStyle;
          /***/
        },

        /***/
        "./columns/style/CheckStyle.js":
        /*!*************************************!*\
          !*** ./columns/style/CheckStyle.js ***!
          \*************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsStyleCheckStyleJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var StdBaseStyle_1 = __webpack_require__(
          /*! ./StdBaseStyle */
          "./columns/style/StdBaseStyle.js");

          function adj(style) {
            var _style$textAlign2 = style.textAlign,
                textAlign = _style$textAlign2 === void 0 ? "center" : _style$textAlign2;
            style.textAlign = textAlign;
            return style;
          }

          var defaultStyle;

          var CheckStyle = /*#__PURE__*/function (_StdBaseStyle_1$StdBa) {
            _inherits(CheckStyle, _StdBaseStyle_1$StdBa);

            var _super22 = _createSuper(CheckStyle);

            function CheckStyle() {
              var _this41;

              var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, CheckStyle);

              _this41 = _super22.call(this, adj(style));
              var uncheckBgColor = style.uncheckBgColor,
                  checkBgColor = style.checkBgColor,
                  borderColor = style.borderColor;
              _this41._uncheckBgColor = uncheckBgColor;
              _this41._checkBgColor = checkBgColor;
              _this41._borderColor = borderColor;
              return _this41;
            }

            _createClass(CheckStyle, [{
              key: "clone",
              value: function clone() {
                return new CheckStyle(this);
              }
            }, {
              key: "uncheckBgColor",
              get: function get() {
                return this._uncheckBgColor;
              },
              set: function set(uncheckBgColor) {
                this._uncheckBgColor = uncheckBgColor;
                this.doChangeStyle();
              }
            }, {
              key: "checkBgColor",
              get: function get() {
                return this._checkBgColor;
              },
              set: function set(checkBgColor) {
                this._checkBgColor = checkBgColor;
                this.doChangeStyle();
              }
            }, {
              key: "borderColor",
              get: function get() {
                return this._borderColor;
              },
              set: function set(borderColor) {
                this._borderColor = borderColor;
                this.doChangeStyle();
              }
            }], [{
              key: "DEFAULT",
              get: function get() {
                return defaultStyle ? defaultStyle : defaultStyle = new CheckStyle();
              }
            }]);

            return CheckStyle;
          }(StdBaseStyle_1.StdBaseStyle);

          exports.CheckStyle = CheckStyle;
          /***/
        },

        /***/
        "./columns/style/IconStyle.js":
        /*!************************************!*\
          !*** ./columns/style/IconStyle.js ***!
          \************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsStyleIconStyleJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var Style_1 = __webpack_require__(
          /*! ./Style */
          "./columns/style/Style.js");

          function adj(style) {
            var _style$textAlign3 = style.textAlign,
                textAlign = _style$textAlign3 === void 0 ? "center" : _style$textAlign3;
            style.textAlign = textAlign;
            return style;
          }

          var defaultStyle;

          var IconStyle = /*#__PURE__*/function (_Style_1$Style2) {
            _inherits(IconStyle, _Style_1$Style2);

            var _super23 = _createSuper(IconStyle);

            _createClass(IconStyle, null, [{
              key: "DEFAULT",
              get: function get() {
                return defaultStyle ? defaultStyle : defaultStyle = new IconStyle();
              }
            }]);

            function IconStyle() {
              var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, IconStyle);

              return _super23.call(this, adj(style));
            }

            _createClass(IconStyle, [{
              key: "clone",
              value: function clone() {
                return new IconStyle(this);
              }
            }]);

            return IconStyle;
          }(Style_1.Style);

          exports.IconStyle = IconStyle;
          /***/
        },

        /***/
        "./columns/style/ImageStyle.js":
        /*!*************************************!*\
          !*** ./columns/style/ImageStyle.js ***!
          \*************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsStyleImageStyleJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var StdBaseStyle_1 = __webpack_require__(
          /*! ./StdBaseStyle */
          "./columns/style/StdBaseStyle.js");

          var defaultStyle;

          function adj(style) {
            var _style$textAlign4 = style.textAlign,
                textAlign = _style$textAlign4 === void 0 ? "center" : _style$textAlign4;
            style.textAlign = textAlign;
            return style;
          }

          var ImageStyle = /*#__PURE__*/function (_StdBaseStyle_1$StdBa2) {
            _inherits(ImageStyle, _StdBaseStyle_1$StdBa2);

            var _super24 = _createSuper(ImageStyle);

            function ImageStyle() {
              var _this42;

              var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, ImageStyle);

              _this42 = _super24.call(this, adj(style));
              _this42._imageSizing = style.imageSizing;
              _this42._margin = style.margin || 4;
              return _this42;
            }

            _createClass(ImageStyle, [{
              key: "clone",
              value: function clone() {
                return new ImageStyle(this);
              }
            }, {
              key: "imageSizing",
              get: function get() {
                return this._imageSizing;
              },
              set: function set(imageSizing) {
                this._imageSizing = imageSizing;
                this.doChangeStyle();
              }
            }, {
              key: "margin",
              get: function get() {
                return this._margin;
              },
              set: function set(margin) {
                this._margin = margin;
                this.doChangeStyle();
              }
            }], [{
              key: "DEFAULT",
              get: function get() {
                return defaultStyle ? defaultStyle : defaultStyle = new ImageStyle();
              }
            }]);

            return ImageStyle;
          }(StdBaseStyle_1.StdBaseStyle);

          exports.ImageStyle = ImageStyle;
          /***/
        },

        /***/
        "./columns/style/MenuStyle.js":
        /*!************************************!*\
          !*** ./columns/style/MenuStyle.js ***!
          \************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsStyleMenuStyleJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var Style_1 = __webpack_require__(
          /*! ./Style */
          "./columns/style/Style.js");

          var defaultStyle;

          var MenuStyle = /*#__PURE__*/function (_Style_1$Style3) {
            _inherits(MenuStyle, _Style_1$Style3);

            var _super25 = _createSuper(MenuStyle);

            function MenuStyle() {
              var _this43;

              var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, MenuStyle);

              _this43 = _super25.call(this, style);
              var appearance = style.appearance;
              _this43._appearance = appearance;
              return _this43;
            }

            _createClass(MenuStyle, [{
              key: "clone",
              value: function clone() {
                return new MenuStyle(this);
              }
            }, {
              key: "appearance",
              get: function get() {
                return this._appearance || "menulist-button";
              },
              set: function set(appearance) {
                this._appearance = appearance;
                this.doChangeStyle();
              }
            }], [{
              key: "DEFAULT",
              get: function get() {
                return defaultStyle ? defaultStyle : defaultStyle = new MenuStyle();
              }
            }]);

            return MenuStyle;
          }(Style_1.Style);

          exports.MenuStyle = MenuStyle;
          /***/
        },

        /***/
        "./columns/style/MultilineTextStyle.js":
        /*!*********************************************!*\
          !*** ./columns/style/MultilineTextStyle.js ***!
          \*********************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsStyleMultilineTextStyleJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var Style_1 = __webpack_require__(
          /*! ./Style */
          "./columns/style/Style.js");

          function adj(style) {
            var _style$textBaseline = style.textBaseline,
                textBaseline = _style$textBaseline === void 0 ? "top" : _style$textBaseline;
            style.textBaseline = textBaseline;
            return style;
          }

          var defaultStyle;

          var MultilineTextStyle = /*#__PURE__*/function (_Style_1$Style4) {
            _inherits(MultilineTextStyle, _Style_1$Style4);

            var _super26 = _createSuper(MultilineTextStyle);

            function MultilineTextStyle() {
              var _this44;

              var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, MultilineTextStyle);

              _this44 = _super26.call(this, adj(style));
              _this44._lineHeight = style.lineHeight || "1em";
              _this44._autoWrapText = style.autoWrapText || false;
              _this44._lineClamp = style.lineClamp;
              return _this44;
            }

            _createClass(MultilineTextStyle, [{
              key: "clone",
              value: function clone() {
                return new MultilineTextStyle(this);
              }
            }, {
              key: "lineHeight",
              get: function get() {
                return this._lineHeight;
              },
              set: function set(lineHeight) {
                this._lineHeight = lineHeight;
                this.doChangeStyle();
              }
            }, {
              key: "lineClamp",
              get: function get() {
                return this._lineClamp;
              },
              set: function set(lineClamp) {
                this._lineClamp = lineClamp;
                this.doChangeStyle();
              }
            }, {
              key: "autoWrapText",
              get: function get() {
                return this._autoWrapText;
              },
              set: function set(autoWrapText) {
                this._autoWrapText = autoWrapText;
                this.doChangeStyle();
              }
            }], [{
              key: "DEFAULT",
              get: function get() {
                return defaultStyle ? defaultStyle : defaultStyle = new MultilineTextStyle();
              }
            }]);

            return MultilineTextStyle;
          }(Style_1.Style);

          exports.MultilineTextStyle = MultilineTextStyle;
          /***/
        },

        /***/
        "./columns/style/NumberStyle.js":
        /*!**************************************!*\
          !*** ./columns/style/NumberStyle.js ***!
          \**************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsStyleNumberStyleJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var Style_1 = __webpack_require__(
          /*! ./Style */
          "./columns/style/Style.js");

          function adj(style) {
            var _style$textAlign5 = style.textAlign,
                textAlign = _style$textAlign5 === void 0 ? "right" : _style$textAlign5;
            style.textAlign = textAlign;
            return style;
          }

          var defaultStyle;

          var NumberStyle = /*#__PURE__*/function (_Style_1$Style5) {
            _inherits(NumberStyle, _Style_1$Style5);

            var _super27 = _createSuper(NumberStyle);

            _createClass(NumberStyle, null, [{
              key: "DEFAULT",
              get: function get() {
                return defaultStyle ? defaultStyle : defaultStyle = new NumberStyle();
              }
            }]);

            function NumberStyle() {
              var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, NumberStyle);

              return _super27.call(this, adj(style));
            }

            _createClass(NumberStyle, [{
              key: "clone",
              value: function clone() {
                return new NumberStyle(this);
              }
            }]);

            return NumberStyle;
          }(Style_1.Style);

          exports.NumberStyle = NumberStyle;
          /***/
        },

        /***/
        "./columns/style/PercentCompleteBarStyle.js":
        /*!**************************************************!*\
          !*** ./columns/style/PercentCompleteBarStyle.js ***!
          \**************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsStylePercentCompleteBarStyleJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var Style_1 = __webpack_require__(
          /*! ./Style */
          "./columns/style/Style.js");

          var defaultStyle;

          var DEFAULT_BAR_COLOR = function DEFAULT_BAR_COLOR(num) {
            if (num > 80) {
              return "#20a8d8";
            }

            if (num > 50) {
              return "#4dbd74";
            }

            if (num > 20) {
              return "#ffc107";
            }

            return "#f86c6b";
          };

          var PercentCompleteBarStyle = /*#__PURE__*/function (_Style_1$Style6) {
            _inherits(PercentCompleteBarStyle, _Style_1$Style6);

            var _super28 = _createSuper(PercentCompleteBarStyle);

            function PercentCompleteBarStyle() {
              var _this45;

              var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, PercentCompleteBarStyle);

              _this45 = _super28.call(this, style);
              _this45._barColor = style.barColor || DEFAULT_BAR_COLOR;
              _this45._barBgColor = style.barBgColor || "#f0f3f5";
              _this45._barHeight = style.barHeight || 3;
              return _this45;
            }

            _createClass(PercentCompleteBarStyle, [{
              key: "clone",
              value: function clone() {
                return new PercentCompleteBarStyle(this);
              }
            }, {
              key: "barColor",
              get: function get() {
                return this._barColor;
              },
              set: function set(barColor) {
                this._barColor = barColor;
                this.doChangeStyle();
              }
            }, {
              key: "barBgColor",
              get: function get() {
                return this._barBgColor;
              },
              set: function set(barBgColor) {
                this._barBgColor = barBgColor;
                this.doChangeStyle();
              }
            }, {
              key: "barHeight",
              get: function get() {
                return this._barHeight;
              },
              set: function set(barHeight) {
                this._barHeight = barHeight;
                this.doChangeStyle();
              }
            }], [{
              key: "DEFAULT",
              get: function get() {
                return defaultStyle ? defaultStyle : defaultStyle = new PercentCompleteBarStyle();
              }
            }]);

            return PercentCompleteBarStyle;
          }(Style_1.Style);

          exports.PercentCompleteBarStyle = PercentCompleteBarStyle;
          /***/
        },

        /***/
        "./columns/style/RadioStyle.js":
        /*!*************************************!*\
          !*** ./columns/style/RadioStyle.js ***!
          \*************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsStyleRadioStyleJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var StdBaseStyle_1 = __webpack_require__(
          /*! ./StdBaseStyle */
          "./columns/style/StdBaseStyle.js");

          function adj(style) {
            var _style$textAlign6 = style.textAlign,
                textAlign = _style$textAlign6 === void 0 ? "center" : _style$textAlign6;
            style.textAlign = textAlign;
            return style;
          }

          var defaultStyle;

          var RadioStyle = /*#__PURE__*/function (_StdBaseStyle_1$StdBa3) {
            _inherits(RadioStyle, _StdBaseStyle_1$StdBa3);

            var _super29 = _createSuper(RadioStyle);

            function RadioStyle() {
              var _this46;

              var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, RadioStyle);

              _this46 = _super29.call(this, adj(style));
              var checkColor = style.checkColor,
                  uncheckBorderColor = style.uncheckBorderColor,
                  checkBorderColor = style.checkBorderColor,
                  uncheckBgColor = style.uncheckBgColor,
                  checkBgColor = style.checkBgColor;
              _this46._checkColor = checkColor;
              _this46._uncheckBorderColor = uncheckBorderColor;
              _this46._checkBorderColor = checkBorderColor;
              _this46._uncheckBgColor = uncheckBgColor;
              _this46._checkBgColor = checkBgColor;
              return _this46;
            }

            _createClass(RadioStyle, [{
              key: "clone",
              value: function clone() {
                return new RadioStyle(this);
              }
            }, {
              key: "checkColor",
              get: function get() {
                return this._checkColor;
              },
              set: function set(checkColor) {
                this._checkColor = checkColor;
                this.doChangeStyle();
              }
            }, {
              key: "uncheckBorderColor",
              get: function get() {
                return this._uncheckBorderColor;
              },
              set: function set(uncheckBorderColor) {
                this._uncheckBorderColor = uncheckBorderColor;
                this.doChangeStyle();
              }
            }, {
              key: "checkBorderColor",
              get: function get() {
                return this._checkBorderColor;
              },
              set: function set(checkBorderColor) {
                this._checkBorderColor = checkBorderColor;
                this.doChangeStyle();
              }
            }, {
              key: "uncheckBgColor",
              get: function get() {
                return this._uncheckBgColor;
              },
              set: function set(uncheckBgColor) {
                this._uncheckBgColor = uncheckBgColor;
                this.doChangeStyle();
              }
            }, {
              key: "checkBgColor",
              get: function get() {
                return this._checkBgColor;
              },
              set: function set(checkBgColor) {
                this._checkBgColor = checkBgColor;
                this.doChangeStyle();
              }
            }], [{
              key: "DEFAULT",
              get: function get() {
                return defaultStyle ? defaultStyle : defaultStyle = new RadioStyle();
              }
            }]);

            return RadioStyle;
          }(StdBaseStyle_1.StdBaseStyle);

          exports.RadioStyle = RadioStyle;
          /***/
        },

        /***/
        "./columns/style/StdBaseStyle.js":
        /*!***************************************!*\
          !*** ./columns/style/StdBaseStyle.js ***!
          \***************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsStyleStdBaseStyleJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var BaseStyle_1 = __webpack_require__(
          /*! ./BaseStyle */
          "./columns/style/BaseStyle.js");

          var defaultStyle;

          var StdBaseStyle = /*#__PURE__*/function (_BaseStyle_1$BaseStyl2) {
            _inherits(StdBaseStyle, _BaseStyle_1$BaseStyl2);

            var _super30 = _createSuper(StdBaseStyle);

            function StdBaseStyle() {
              var _this47;

              var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, StdBaseStyle);

              _this47 = _super30.call(this, style);
              _this47._textAlign = style.textAlign || "left";
              _this47._textBaseline = style.textBaseline || "middle";
              return _this47;
            }

            _createClass(StdBaseStyle, [{
              key: "clone",
              value: function clone() {
                return new StdBaseStyle(this);
              }
            }, {
              key: "textAlign",
              get: function get() {
                return this._textAlign;
              },
              set: function set(textAlign) {
                this._textAlign = textAlign;
                this.doChangeStyle();
              }
            }, {
              key: "textBaseline",
              get: function get() {
                return this._textBaseline;
              },
              set: function set(textBaseline) {
                this._textBaseline = textBaseline;
                this.doChangeStyle();
              }
            }], [{
              key: "DEFAULT",
              get: function get() {
                return defaultStyle ? defaultStyle : defaultStyle = new StdBaseStyle();
              }
            }]);

            return StdBaseStyle;
          }(BaseStyle_1.BaseStyle);

          exports.StdBaseStyle = StdBaseStyle;
          /***/
        },

        /***/
        "./columns/style/Style.js":
        /*!********************************!*\
          !*** ./columns/style/Style.js ***!
          \********************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsStyleStyleJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var StdBaseStyle_1 = __webpack_require__(
          /*! ./StdBaseStyle */
          "./columns/style/StdBaseStyle.js");

          var defaultStyle;

          var Style = /*#__PURE__*/function (_StdBaseStyle_1$StdBa4) {
            _inherits(Style, _StdBaseStyle_1$StdBa4);

            var _super31 = _createSuper(Style);

            function Style() {
              var _this48;

              var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, Style);

              _this48 = _super31.call(this, style);
              _this48._color = style.color;
              _this48._font = style.font;
              _this48._padding = style.padding;
              _this48._textOverflow = style.textOverflow || "clip";
              return _this48;
            }

            _createClass(Style, [{
              key: "clone",
              value: function clone() {
                return new Style(this);
              }
            }, {
              key: "color",
              get: function get() {
                return this._color;
              },
              set: function set(color) {
                this._color = color;
                this.doChangeStyle();
              }
            }, {
              key: "font",
              get: function get() {
                return this._font;
              },
              set: function set(font) {
                this._font = font;
                this.doChangeStyle();
              }
            }, {
              key: "padding",
              get: function get() {
                return this._padding;
              },
              set: function set(padding) {
                this._padding = padding;
                this.doChangeStyle();
              }
            }, {
              key: "textOverflow",
              get: function get() {
                return this._textOverflow;
              },
              set: function set(textOverflow) {
                this._textOverflow = textOverflow;
                this.doChangeStyle();
              }
            }], [{
              key: "DEFAULT",
              get: function get() {
                return defaultStyle ? defaultStyle : defaultStyle = new Style();
              }
            }]);

            return Style;
          }(StdBaseStyle_1.StdBaseStyle);

          exports.Style = Style;
          /***/
        },

        /***/
        "./columns/type.js":
        /*!*************************!*\
          !*** ./columns/type.js ***!
          \*************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsTypeJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var BranchGraphColumn_1 = __webpack_require__(
          /*! ./type/BranchGraphColumn */
          "./columns/type/BranchGraphColumn.js");

          exports.BranchGraphColumn = BranchGraphColumn_1.BranchGraphColumn;

          var ButtonColumn_1 = __webpack_require__(
          /*! ./type/ButtonColumn */
          "./columns/type/ButtonColumn.js");

          exports.ButtonColumn = ButtonColumn_1.ButtonColumn;

          var CheckColumn_1 = __webpack_require__(
          /*! ./type/CheckColumn */
          "./columns/type/CheckColumn.js");

          exports.CheckColumn = CheckColumn_1.CheckColumn;

          var Column_1 = __webpack_require__(
          /*! ./type/Column */
          "./columns/type/Column.js");

          exports.Column = Column_1.Column;

          var IconColumn_1 = __webpack_require__(
          /*! ./type/IconColumn */
          "./columns/type/IconColumn.js");

          exports.IconColumn = IconColumn_1.IconColumn;

          var ImageColumn_1 = __webpack_require__(
          /*! ./type/ImageColumn */
          "./columns/type/ImageColumn.js");

          exports.ImageColumn = ImageColumn_1.ImageColumn;

          var MenuColumn_1 = __webpack_require__(
          /*! ./type/MenuColumn */
          "./columns/type/MenuColumn.js");

          exports.MenuColumn = MenuColumn_1.MenuColumn;

          var MultilineTextColumn_1 = __webpack_require__(
          /*! ./type/MultilineTextColumn */
          "./columns/type/MultilineTextColumn.js");

          exports.MultilineTextColumn = MultilineTextColumn_1.MultilineTextColumn;

          var NumberColumn_1 = __webpack_require__(
          /*! ./type/NumberColumn */
          "./columns/type/NumberColumn.js");

          exports.NumberColumn = NumberColumn_1.NumberColumn;

          var PercentCompleteBarColumn_1 = __webpack_require__(
          /*! ./type/PercentCompleteBarColumn */
          "./columns/type/PercentCompleteBarColumn.js");

          exports.PercentCompleteBarColumn = PercentCompleteBarColumn_1.PercentCompleteBarColumn;

          var RadioColumn_1 = __webpack_require__(
          /*! ./type/RadioColumn */
          "./columns/type/RadioColumn.js");

          exports.RadioColumn = RadioColumn_1.RadioColumn;
          var TYPES = {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            DEFAULT: new Column_1.Column(),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            NUMBER: new NumberColumn_1.NumberColumn(),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            CHECK: new CheckColumn_1.CheckColumn(),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            RADIO: new RadioColumn_1.RadioColumn(),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            BUTTON: new ButtonColumn_1.ButtonColumn(),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            IMAGE: new ImageColumn_1.ImageColumn(),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            MULTILINETEXT: new MultilineTextColumn_1.MultilineTextColumn()
          };

          function of( // eslint-disable-next-line @typescript-eslint/no-explicit-any
          columnType // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ) {
            if (!columnType) {
              return TYPES.DEFAULT;
            } else if (typeof columnType === "string") {
              var key = columnType.toUpperCase();
              return TYPES[key] || of(null);
            } else {
              return columnType;
            }
          }

          exports.of = of;
          /***/
        },

        /***/
        "./columns/type/BaseColumn.js":
        /*!************************************!*\
          !*** ./columns/type/BaseColumn.js ***!
          \************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsTypeBaseColumnJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var styleContents = __importStar(__webpack_require__(
          /*! ../style */
          "./columns/style.js"));

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          var BaseStyle_1 = __webpack_require__(
          /*! ../style/BaseStyle */
          "./columns/style/BaseStyle.js");

          var animate_1 = __webpack_require__(
          /*! ../../internal/animate */
          "./internal/animate.js");

          var symbolManager_1 = __webpack_require__(
          /*! ../../internal/symbolManager */
          "./internal/symbolManager.js");

          var setReadonly = utils_1.obj.setReadonly;
          var COLUMN_FADEIN_STATE_ID = symbolManager_1.getColumnFadeinStateId();

          function isFadeinWhenCallbackInPromise(column, grid) {
            if (utils_1.isDef(column.fadeinWhenCallbackInPromise)) {
              return column.fadeinWhenCallbackInPromise;
            }

            return !!grid.configure("fadeinWhenCallbackInPromise");
          }

          function getFadinState(grid) {
            var state = grid[COLUMN_FADEIN_STATE_ID];

            if (!state) {
              state = {
                cells: {}
              };
              setReadonly(grid, COLUMN_FADEIN_STATE_ID, state);
            }

            return state;
          }

          function _generateFadinPointAction(grid, col, row, context, drawInternal, drawCellBase) {
            return function (point) {
              var state = getFadinState(grid);
              var stateKey = "".concat(row, ":").concat(col);

              if (point === 1) {
                delete state.cells[stateKey];
              } else {
                state.cells[stateKey] = {
                  opacity: point
                };
              }

              drawCellBase();
              drawInternal();
              var cellState = state.cells[stateKey];

              if (cellState) {
                //透過するため背景を透過で上書き
                var ctx = context.getContext();
                ctx.globalAlpha = 1 - cellState.opacity;

                try {
                  drawCellBase();
                } finally {
                  ctx.globalAlpha = 1;
                }
              }
            };
          }

          var fadinMgr = {
            animate: function animate(grid, col, row, context, drawInternal, drawCellBase) {
              // fadein animation
              var state = getFadinState(grid);
              var activeFadeins = [_generateFadinPointAction(grid, col, row, context, drawInternal, drawCellBase)];
              state.activeFadeins = activeFadeins;
              animate_1.animate(500, function (point) {
                activeFadeins.forEach(function (f) {
                  return f(point);
                });

                if (point === 1) {
                  delete state.activeFadeins;
                }
              });
            },
            margeAnimate: function margeAnimate(grid, col, row, context, drawInternal, drawCellBase) {
              var state = getFadinState(grid);

              if (state.activeFadeins) {
                state.activeFadeins.push(_generateFadinPointAction(grid, col, row, context, drawInternal, drawCellBase));
              } else {
                drawInternal();
              }
            }
          };

          var BaseColumn = /*#__PURE__*/function () {
            function BaseColumn() {
              var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, BaseColumn);

              this.onDrawCell = this.onDrawCell.bind(this); //スコープを固定させる
              //Promiseのcallbackでフェードイン表示する

              this._fadeinWhenCallbackInPromise = option.fadeinWhenCallbackInPromise || false;
            }

            _createClass(BaseColumn, [{
              key: "onDrawCell",
              value: function onDrawCell(cellValue, info, context, grid) {
                var _this49 = this;

                var _a;

                var style = info.style,
                    getRecord = info.getRecord,
                    drawCellBase = info.drawCellBase;
                var helper = grid.getGridCanvasHelper();
                drawCellBase();
                var record = getRecord();
                var promise;

                if (utils_1.isPromise(record)) {
                  promise = record.then(function () {
                    return cellValue;
                  });
                } else if (utils_1.isPromise(cellValue)) {
                  promise = cellValue;
                } //文字描画


                if (promise) {
                  var start = Date.now();
                  return promise.then(function (val) {
                    var currentContext = context.toCurrentContext();
                    var drawRect = currentContext.getDrawRect();

                    if (!drawRect) {
                      return;
                    }

                    var time = Date.now() - start;

                    var drawInternal = function drawInternal() {
                      var currentContext = context.toCurrentContext();
                      var drawRect = currentContext.getDrawRect();

                      if (!drawRect) {
                        return;
                      }

                      var record = getRecord();

                      if (utils_1.isPromise(record)) {
                        return;
                      }

                      var actStyle = styleContents.of(style, record, _this49.StyleClass);

                      _this49.drawInternal(_this49.convertInternal(val), currentContext, actStyle, helper, grid, info);

                      _this49.drawMessageInternal(info.getMessage(), currentContext, actStyle, helper, grid, info);
                    };

                    if (!isFadeinWhenCallbackInPromise(_this49, grid)) {
                      drawInternal(); //単純な描画
                    } else {
                      var col = context.col,
                          row = context.row;

                      if (time < 80) {
                        //80ms以内のPromiseCallbackは前アニメーションに統合
                        fadinMgr.margeAnimate(grid, col, row, context, drawInternal, drawCellBase);
                      } else {
                        //アニメーション
                        fadinMgr.animate(grid, col, row, context, drawInternal, drawCellBase);
                      }
                    }
                  });
                } else {
                  var actStyle = styleContents.of(style, record, this.StyleClass);
                  this.drawInternal(this.convertInternal(cellValue), context, actStyle, helper, grid, info);
                  this.drawMessageInternal(info.getMessage(), context, actStyle, helper, grid, info); //フェードインの場合透過するため背景を透過で上書き

                  var col = context.col,
                      row = context.row;
                  var stateKey = "".concat(col, ":").concat(row);
                  var cellState = (_a = grid[COLUMN_FADEIN_STATE_ID]) === null || _a === void 0 ? void 0 : _a.cells[stateKey];

                  if (cellState) {
                    var ctx = context.getContext();
                    ctx.globalAlpha = 1 - cellState.opacity;

                    try {
                      drawCellBase();
                    } finally {
                      ctx.globalAlpha = 1;
                    }
                  }

                  return undefined;
                }
              }
            }, {
              key: "convertInternal",
              value: function convertInternal(value) {
                return utils_1.isDef(value) ? value : "";
              }
            }, {
              key: "drawMessageInternal",
              value: function drawMessageInternal(message, context, style, helper, grid, info) {
                info.messageHandler.drawCellMessage(message, context, style, helper, grid, info);
              }
            }, {
              key: "bindGridEvent",
              value: function bindGridEvent(_grid, _cellId) {
                return [];
              }
            }, {
              key: "getCopyCellValue",
              value: function getCopyCellValue(value, _grid, _cell) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return value;
              }
            }, {
              key: "fadeinWhenCallbackInPromise",
              get: function get() {
                return this._fadeinWhenCallbackInPromise;
              }
            }, {
              key: "StyleClass",
              get: function get() {
                return BaseStyle_1.BaseStyle;
              }
            }]);

            return BaseColumn;
          }();

          exports.BaseColumn = BaseColumn;
          /***/
        },

        /***/
        "./columns/type/BranchGraphColumn.js":
        /*!*******************************************!*\
          !*** ./columns/type/BranchGraphColumn.js ***!
          \*******************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsTypeBranchGraphColumnJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          var BaseColumn_1 = __webpack_require__(
          /*! ./BaseColumn */
          "./columns/type/BaseColumn.js");

          var BranchGraphStyle_1 = __webpack_require__(
          /*! ../style/BranchGraphStyle */
          "./columns/style/BranchGraphStyle.js");

          var symbolManager_1 = __webpack_require__(
          /*! ../../internal/symbolManager */
          "./internal/symbolManager.js");

          var _ = symbolManager_1.getBranchGraphColumnStateId();

          function getAllColumnData(grid, field, callback) {
            var dataSource = grid.dataSource;
            var allData = [];
            var promise;

            var _loop3 = function _loop3(index) {
              var data = dataSource.getField(index, field);

              if (utils_1.isPromise(data)) {
                var dataIndex = allData.length;
                allData.push(undefined);

                if (!promise) {
                  promise = data.then(function (d) {
                    allData[dataIndex] = d;
                  });
                } else {
                  promise = promise.then(function () {
                    return data;
                  }).then(function (d) {
                    allData[dataIndex] = d;
                  });
                }
              } else {
                allData.push(data);
              }
            };

            for (var index = 0; index < dataSource.length; index++) {
              _loop3(index);
            }

            if (promise) {
              promise.then(function () {
                return callback(allData);
              });
            } else {
              callback(allData);
            }
          }

          var BranchLine = function BranchLine(_ref26) {
            var fromIndex = _ref26.fromIndex,
                toIndex = _ref26.toIndex,
                colorIndex = _ref26.colorIndex,
                point = _ref26.point;

            _classCallCheck(this, BranchLine);

            this.fromIndex = fromIndex;
            this.toIndex = toIndex;
            this.colorIndex = colorIndex;
            this.point = point;
          };

          var BranchPoint = /*#__PURE__*/function () {
            function BranchPoint(_ref27) {
              var index = _ref27.index,
                  _ref27$commit = _ref27.commit,
                  commit = _ref27$commit === void 0 ? false : _ref27$commit,
                  _ref27$lines = _ref27.lines,
                  lines = _ref27$lines === void 0 ? [] : _ref27$lines,
                  tag = _ref27.tag;

              _classCallCheck(this, BranchPoint);

              this.index = index;
              this.commit = commit;
              this.lines = lines;
              this.tag = tag;
            }

            _createClass(BranchPoint, null, [{
              key: "mergeLines",
              value: function mergeLines(lines) {
                var result = lines.filter(function (l) {
                  return utils_1.isDef(l.fromIndex) && utils_1.isDef(l.toIndex);
                });
                var froms = lines.filter(function (l) {
                  return utils_1.isDef(l.fromIndex) && !utils_1.isDef(l.toIndex);
                });
                var tos = lines.filter(function (l) {
                  return !utils_1.isDef(l.fromIndex) && utils_1.isDef(l.toIndex);
                });
                froms.forEach(function (f) {
                  for (var i = 0; i < tos.length; i++) {
                    var t = tos[i];

                    if (t.point) {
                      continue;
                    }

                    if (f.colorIndex === t.colorIndex) {
                      f.toIndex = t.toIndex;
                      tos.splice(i, 1);
                      break;
                    }
                  }

                  result.push(f);
                });
                return result.concat(tos);
              }
            }, {
              key: "merge",
              value: function merge(a, b) {
                if (!a) {
                  return b;
                }

                return new BranchPoint({
                  index: a.index,
                  commit: a.commit || b.commit,
                  lines: BranchPoint.mergeLines(a.lines.concat(b.lines)),
                  tag: a.tag || b.tag
                });
              }
            }]);

            return BranchPoint;
          }();

          function joinLine(timeline, branchIndex) {
            var reverse = _toConsumableArray(timeline).reverse();

            for (var i = 0; i < reverse.length; i++) {
              var f = reverse[i][branchIndex];

              if (f) {
                f.lines = BranchPoint.mergeLines(f.lines.concat([new BranchLine({
                  toIndex: branchIndex,
                  colorIndex: branchIndex
                })]));

                for (var j = 0; j < i; j++) {
                  var tl = reverse[j];
                  tl[branchIndex] = new BranchPoint({
                    index: branchIndex,
                    lines: [new BranchLine({
                      fromIndex: branchIndex,
                      toIndex: branchIndex,
                      colorIndex: branchIndex
                    })]
                  });
                }

                return true;
              }
            }

            return false;
          }

          function branch(_ref28, from, to) {
            var timeline = _ref28.timeline,
                branches = _ref28.branches;
            var fromIndex = from != null ? branches.indexOf(from) : -1;
            var toIndex = branches.indexOf(to);

            if (toIndex < 0) {
              toIndex = branches.length;
              branches.push(to);
            }

            function findBranchRootIndex() {
              for (var index = timeline.length - 1; index >= 0; index--) {
                var tl = timeline[index];
                var _from = tl[fromIndex];

                if (_from && _from.commit) {
                  return index;
                }
              }

              return -1;
            }

            if (fromIndex < 0) {
              return new BranchPoint({
                index: toIndex
              });
            } else {
              var fromTargetIndex = findBranchRootIndex();

              if (fromTargetIndex === -1) {
                return null;
              }

              var branchTargetFromIndex = fromTargetIndex + 1;
              var branchPoint = new BranchPoint({
                index: toIndex,
                lines: [new BranchLine({
                  fromIndex: fromIndex,
                  colorIndex: toIndex
                })]
              });
              var point;
              var result = null;

              if (branchTargetFromIndex < timeline.length) {
                var targetLine = timeline[branchTargetFromIndex];
                point = targetLine[toIndex] = BranchPoint.merge(targetLine[toIndex], branchPoint);
              } else {
                point = branchPoint;
                result = branchPoint;
              }

              var _from2 = timeline[fromTargetIndex][fromIndex];
              _from2.lines = BranchPoint.mergeLines(_from2.lines.concat([new BranchLine({
                toIndex: toIndex,
                colorIndex: toIndex,
                point: point
              })]));
              return result;
            }
          }

          function commit(_ref29, name) {
            var timeline = _ref29.timeline,
                branches = _ref29.branches;
            var index = branches.indexOf(name);

            if (index < 0) {
              return null;
            }

            var result = new BranchPoint({
              index: index,
              commit: true
            });

            if (joinLine(timeline, index)) {
              result.lines = BranchPoint.mergeLines(result.lines.concat([new BranchLine({
                fromIndex: index,
                colorIndex: index
              })]));
            }

            return result;
          }

          function commitTag(_ref30, name, tag) {
            var branches = _ref30.branches;
            var index = branches.indexOf(name);

            if (index < 0) {
              index = branches.length;
              branches.push(name);
            }

            return new BranchPoint({
              index: index,
              tag: tag
            });
          }

          function commitMerge(_ref31, from, to) {
            var timeline = _ref31.timeline,
                branches = _ref31.branches;
            var fromIndex = branches.indexOf(from);
            var toIndex = branches.indexOf(to);

            if (toIndex < 0 || fromIndex < 0) {
              return new BranchPoint({
                index: toIndex,
                commit: true
              });
            }

            var result = new BranchPoint({
              index: toIndex,
              commit: true,
              lines: [new BranchLine({
                fromIndex: fromIndex,
                colorIndex: fromIndex
              }), new BranchLine({
                fromIndex: toIndex,
                colorIndex: toIndex
              })]
            });

            var froms = _toConsumableArray(timeline);

            var fromTargetLine = froms.pop();

            if (fromTargetLine) {
              fromTargetLine[fromIndex] = BranchPoint.merge(fromTargetLine[fromIndex], new BranchPoint({
                index: toIndex,
                lines: [new BranchLine({
                  toIndex: toIndex,
                  colorIndex: fromIndex
                })]
              }));
            }

            if (joinLine(froms, fromIndex) && fromTargetLine) {
              fromTargetLine[fromIndex].lines = BranchPoint.mergeLines(fromTargetLine[fromIndex].lines.concat([new BranchLine({
                fromIndex: fromIndex,
                colorIndex: fromIndex
              })]));
            }

            joinLine(timeline, toIndex);
            return result;
          }

          function calcCommand(info, command) {
            var timeline = info.timeline;
            var timelineData = []; // const last = timeline.length > 0 ? timeline[timeline.length - 1] : null;

            var commands = Array.isArray(command) ? command : [command];
            commands.forEach(function (cmd) {
              if (!cmd) {
                return;
              }

              var point;

              if (cmd.command === "branch") {
                var from = utils_1.obj.isObject(cmd.branch) ? cmd.branch.from : null;
                var to = utils_1.obj.isObject(cmd.branch) ? cmd.branch.to : cmd.branch;
                point = branch(info, from, to);
              } else if (cmd.command === "commit") {
                var _branch = cmd.branch;
                point = commit(info, _branch);
              } else if (cmd.command === "merge") {
                var _cmd$branch = cmd.branch,
                    _from3 = _cmd$branch.from,
                    _to = _cmd$branch.to;
                point = commitMerge(info, _from3, _to);
              } else if (cmd.command === "tag") {
                var _branch2 = cmd.branch,
                    tag = cmd.tag;
                point = commitTag(info, _branch2, tag);
              }

              if (point && point.index > -1) {
                timelineData[point.index] = BranchPoint.merge(timelineData[point.index], point);
              }
            });
            timeline.push(timelineData);
          }

          function calcBranchesInfo(start, grid, field) {
            var result = {
              branches: [],
              timeline: []
            };
            getAllColumnData(grid, field, function (data) {
              if (start !== "top") {
                data = _toConsumableArray(data).reverse();
              }

              data.forEach(function (command) {
                calcCommand(result, command);
              });
            });
            return result;
          }

          function calcBranchXPoints(ctx, left, width, radius, branches, timeline) {
            var w = Math.max(width / branches.length + 1, 5);
            timeline.forEach(function (tl) {
              tl.forEach(function (p, index) {
                if (index <= 0) {
                  // 計算の意味が無い
                  return;
                }

                if (p.tag) {
                  var textWidth = ctx.measureText(p.tag).width;

                  if (w * index + radius * 2 + 4 + textWidth > width) {
                    w = Math.max((width - radius * 2 - 4 - textWidth) / index, 5);
                  }
                }
              });
            });
            var result = [];
            var x = left;
            branches.forEach(function () {
              result.push(Math.ceil(x + radius));
              x += w;
            });
            return result;
          }

          function renderMerge(grid, ctx, x, y, upLineIndex, downLineIndex, colorIndex, _ref32, _ref33) {
            var branchXPoints = _ref32.branchXPoints,
                branchColors = _ref32.branchColors,
                branchLineWidth = _ref32.branchLineWidth,
                mergeStyle = _ref32.mergeStyle;
            var col = _ref33.col,
                row = _ref33.row,
                branches = _ref33.branches;

            if (utils_1.isDef(upLineIndex) || utils_1.isDef(downLineIndex)) {
              ctx.strokeStyle = utils_1.getOrApply(branchColors, branches[colorIndex], colorIndex);
              ctx.lineWidth = branchLineWidth;
              ctx.lineCap = "round";
              ctx.beginPath();

              if (utils_1.isDef(upLineIndex)) {
                var upX = branchXPoints[upLineIndex];
                var upRect = grid.getCellRelativeRect(col, row - 1);
                var upY = upRect.top + upRect.height / 2;
                ctx.moveTo(upX, upY);

                if (mergeStyle === "bezier") {
                  ctx.bezierCurveTo(upX, (y + upY) / 2, x, (y + upY) / 2, x, y);
                } else {
                  ctx.lineTo(x, y);
                }
              } else {
                ctx.moveTo(x, y);
              }

              if (utils_1.isDef(downLineIndex)) {
                var downX = branchXPoints[downLineIndex];
                var downRect = grid.getCellRelativeRect(col, row + 1);
                var downY = downRect.top + downRect.height / 2;

                if (mergeStyle === "bezier") {
                  ctx.bezierCurveTo(x, (y + downY) / 2, downX, (y + downY) / 2, downX, downY);
                } else {
                  ctx.lineTo(downX, downY);
                }
              }

              ctx.stroke();
            }
          }
          /**
           * BranchGraphColumn
           *
           * Data commands
           * - mastar branch or orphan branch
           *
           * ```js
           * {
           * 	command: 'branch',
           * 	branch: 'branch name A',
           * }
           * ```
           *
           * - commit
           *
           * ```js
           * {
           * 	command: 'commit',
           * 	branch: 'branch name A'
           * }
           * ```
           *
           * - branch
           *
           * ```js
           * {
           * 	command: 'branch',
           * 	branch: {
           * 		from: 'branch name A',
           * 		to: 'branch name B'
           * 	}
           * }
           * ```
           *
           * - merge
           *
           * ```js
           * {
           * 	command: 'merge',
           * 	branch: {
           * 		from: 'branch name B',
           * 		to: 'branch name A'
           * 	}
           * }
           * ```
           *
           * - tag
           *
           * ```js
           * {
           * 	command: 'tag',
           * 	branch: 'branch name A',
           * 	tag: 'tag name'
           * }
           * ```
           *
           * @memberof cheetahGrid.columns.type
           */


          var BranchGraphColumn = /*#__PURE__*/function (_BaseColumn_1$BaseCol) {
            _inherits(BranchGraphColumn, _BaseColumn_1$BaseCol);

            var _super32 = _createSuper(BranchGraphColumn);

            function BranchGraphColumn() {
              var _this50;

              var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, BranchGraphColumn);

              _this50 = _super32.call(this, option);
              _this50._start = option.start || "bottom";
              _this50._cache = utils_1.isDef(option.cache) ? option.cache : false;
              return _this50;
            }

            _createClass(BranchGraphColumn, [{
              key: "clearCache",
              value: function clearCache(grid) {
                delete grid[_];
              }
            }, {
              key: "onDrawCell",
              value: function onDrawCell(cellValue, info, context, grid) {
                if (this._cache) {
                  var state = grid[_] || (grid[_] = new Map());
                  var col = context.col,
                      row = context.row;
                  var field = grid.getField(col, row);

                  if (!state.has(field)) {
                    state.set(field, calcBranchesInfo(this._start, grid, field));
                  }
                }

                return _get(_getPrototypeOf(BranchGraphColumn.prototype), "onDrawCell", this).call(this, cellValue, info, context, grid);
              }
            }, {
              key: "clone",
              value: function clone() {
                return new BranchGraphColumn(this);
              }
            }, {
              key: "drawInternal",
              value: function drawInternal(_value, context, style, helper, grid, _ref34) {
                var drawCellBase = _ref34.drawCellBase;

                var _a, _b;

                var col = context.col,
                    row = context.row;
                var field = grid.getField(col, row);

                var _ref35 = (_b = this._cache ? (_a = grid[_]) === null || _a === void 0 ? void 0 : _a.get(field) : null) !== null && _b !== void 0 ? _b : calcBranchesInfo(this._start, grid, field),
                    timeline = _ref35.timeline,
                    branches = _ref35.branches;

                var _ref36 = this._start !== "top" ? {
                  upLineIndexKey: "toIndex",
                  downLineIndexKey: "fromIndex"
                } : {
                  upLineIndexKey: "fromIndex",
                  downLineIndexKey: "toIndex"
                },
                    upLineIndexKey = _ref36.upLineIndexKey,
                    downLineIndexKey = _ref36.downLineIndexKey;

                var data = this._start !== "top" ? timeline[timeline.length - (row - grid.frozenRowCount) - 1] : timeline[row - grid.frozenRowCount];
                var branchColors = style.branchColors,
                    branchLineWidth = style.branchLineWidth,
                    circleSize = style.circleSize,
                    mergeStyle = style.mergeStyle,
                    margin = style.margin,
                    bgColor = style.bgColor;

                if (bgColor) {
                  drawCellBase({
                    bgColor: bgColor
                  });
                }

                var rect = context.getRect();
                var radius = circleSize / 2;
                var width = rect.width - margin * 2;
                helper.drawWithClip(context, function (ctx) {
                  ctx.textAlign = "left";
                  ctx.textBaseline = "middle";
                  var branchXPoints = calcBranchXPoints(ctx, rect.left + margin, width, radius, branches, timeline);
                  var y = rect.top + rect.height / 2; // draw join lines

                  data.map(function (point, index) {
                    return point ? point.lines.map(function (line) {
                      return {
                        colorIndex: line.colorIndex,
                        upLineIndex: line[upLineIndexKey],
                        downLineIndex: line[downLineIndexKey],
                        pointIndex: index
                      };
                    }) : [];
                  }).reduce(function (p, c) {
                    return p.concat(c);
                  }, []) // flatMap
                  // order of overlap
                  .sort(function (a, b) {
                    return b.colorIndex - a.colorIndex;
                  }).forEach(function (line) {
                    var x = branchXPoints[line.pointIndex];
                    renderMerge(grid, ctx, x, y, line.upLineIndex, line.downLineIndex, line.colorIndex, {
                      margin: margin,
                      branchXPoints: branchXPoints,
                      branchLineWidth: branchLineWidth,
                      branchColors: branchColors,
                      mergeStyle: mergeStyle
                    }, {
                      width: width,
                      col: col,
                      row: row,
                      branches: branches
                    });
                  }); // draw commit points

                  data.forEach(function (p, index) {
                    if (p && p.commit) {
                      var x = branchXPoints[index];
                      ctx.fillStyle = utils_1.getOrApply(branchColors, branches[index], index);
                      ctx.beginPath();
                      ctx.arc(x, y, radius, 0, Math.PI * 2, true);
                      ctx.fill();
                      ctx.closePath();
                    }
                  }); // draw tags

                  data.forEach(function (p, index) {
                    if (p && p.tag) {
                      ctx.fillStyle = utils_1.getOrApply(branchColors, branches[index], index);
                      ctx.fillText(p.tag, branchXPoints[index] + radius + 4, y);
                    }
                  });
                });
              }
            }, {
              key: "StyleClass",
              get: function get() {
                return BranchGraphStyle_1.BranchGraphStyle;
              }
            }]);

            return BranchGraphColumn;
          }(BaseColumn_1.BaseColumn);

          exports.BranchGraphColumn = BranchGraphColumn;
          /***/
        },

        /***/
        "./columns/type/ButtonColumn.js":
        /*!**************************************!*\
          !*** ./columns/type/ButtonColumn.js ***!
          \**************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsTypeButtonColumnJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils = __importStar(__webpack_require__(
          /*! ./columnUtils */
          "./columns/type/columnUtils.js"));

          var ButtonStyle_1 = __webpack_require__(
          /*! ../style/ButtonStyle */
          "./columns/style/ButtonStyle.js");

          var Column_1 = __webpack_require__(
          /*! ./Column */
          "./columns/type/Column.js");

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          var symbolManager_1 = __webpack_require__(
          /*! ../../internal/symbolManager */
          "./internal/symbolManager.js");

          var BUTTON_COLUMN_STATE_ID = symbolManager_1.getButtonColumnStateId();

          var ButtonColumn = /*#__PURE__*/function (_Column_1$Column) {
            _inherits(ButtonColumn, _Column_1$Column);

            var _super33 = _createSuper(ButtonColumn);

            function ButtonColumn() {
              var _this51;

              var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, ButtonColumn);

              _this51 = _super33.call(this, option);
              _this51._caption = option.caption;
              return _this51;
            }

            _createClass(ButtonColumn, [{
              key: "withCaption",
              value: function withCaption(caption) {
                var c = this.clone();
                c._caption = caption;
                return c;
              }
            }, {
              key: "clone",
              value: function clone() {
                return new ButtonColumn(this);
              }
            }, {
              key: "convertInternal",
              value: function convertInternal(value) {
                return this._caption || _get(_getPrototypeOf(ButtonColumn.prototype), "convertInternal", this).call(this, value);
              }
            }, {
              key: "drawInternal",
              value: function drawInternal(value, context, style, helper, grid, _ref37) {
                var drawCellBase = _ref37.drawCellBase,
                    getIcon = _ref37.getIcon;
                var textAlign = style.textAlign,
                    textBaseline = style.textBaseline,
                    bgColor = style.bgColor,
                    color = style.color,
                    buttonBgColor = style.buttonBgColor,
                    font = style.font,
                    padding = style.padding,
                    textOverflow = style.textOverflow;

                if (bgColor) {
                  drawCellBase({
                    bgColor: bgColor
                  });
                }

                helper.testFontLoad(font, value, context);
                var col = context.col,
                    row = context.row;
                var range = grid.getCellRange(col, row);
                var active = false;
                var state = grid[BUTTON_COLUMN_STATE_ID];

                if (state) {
                  if (state.mouseActiveCell && utils_1.cellInRange(range, state.mouseActiveCell.col, state.mouseActiveCell.row)) {
                    active = true;
                  } else {
                    var _context$getSelection4 = context.getSelection(),
                        select = _context$getSelection4.select;

                    if (utils_1.cellInRange(range, select.col, select.row)) {
                      active = true;
                    }
                  }
                }

                utils.loadIcons(getIcon(), context, helper, function (icons, context) {
                  helper.button(value, context, {
                    textAlign: textAlign,
                    textBaseline: textBaseline,
                    bgColor: buttonBgColor,
                    color: color,
                    font: font,
                    padding: padding,
                    shadow: active ? {
                      color: "rgba(0, 0, 0, 0.48)",
                      blur: 6,
                      offsetY: 3
                    } : {},
                    textOverflow: textOverflow,
                    icons: icons
                  });
                });
              }
            }, {
              key: "StyleClass",
              get: function get() {
                return ButtonStyle_1.ButtonStyle;
              }
            }, {
              key: "caption",
              get: function get() {
                return this._caption;
              }
            }]);

            return ButtonColumn;
          }(Column_1.Column);

          exports.ButtonColumn = ButtonColumn;
          /***/
        },

        /***/
        "./columns/type/CheckColumn.js":
        /*!*************************************!*\
          !*** ./columns/type/CheckColumn.js ***!
          \*************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsTypeCheckColumnJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var BaseColumn_1 = __webpack_require__(
          /*! ./BaseColumn */
          "./columns/type/BaseColumn.js");

          var CheckStyle_1 = __webpack_require__(
          /*! ../style/CheckStyle */
          "./columns/style/CheckStyle.js");

          var symbolManager_1 = __webpack_require__(
          /*! ../../internal/symbolManager */
          "./internal/symbolManager.js");

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          var utils_2 = __webpack_require__(
          /*! ../utils */
          "./columns/utils/index.js");

          var CHECK_COLUMN_STATE_ID = symbolManager_1.getCheckColumnStateId();

          var CheckColumn = /*#__PURE__*/function (_BaseColumn_1$BaseCol2) {
            _inherits(CheckColumn, _BaseColumn_1$BaseCol2);

            var _super34 = _createSuper(CheckColumn);

            function CheckColumn() {
              _classCallCheck(this, CheckColumn);

              return _super34.apply(this, arguments);
            }

            _createClass(CheckColumn, [{
              key: "clone",
              value: function clone() {
                return new CheckColumn(this);
              }
            }, {
              key: "convertInternal",
              value: function convertInternal(value) {
                return utils_2.toBoolean(value);
              }
            }, {
              key: "drawInternal",
              value: function drawInternal(value, context, style, helper, grid, _ref38) {
                var drawCellBase = _ref38.drawCellBase;

                var _a;

                var textAlign = style.textAlign,
                    textBaseline = style.textBaseline,
                    borderColor = style.borderColor,
                    checkBgColor = style.checkBgColor,
                    uncheckBgColor = style.uncheckBgColor,
                    bgColor = style.bgColor;

                if (bgColor) {
                  drawCellBase({
                    bgColor: bgColor
                  });
                }

                var col = context.col,
                    row = context.row;
                var range = grid.getCellRange(col, row);
                var cellKey = "".concat(range.start.col, ":").concat(range.start.row);
                var elapsed = (_a = grid[CHECK_COLUMN_STATE_ID]) === null || _a === void 0 ? void 0 : _a.elapsed[cellKey];
                var opt = {
                  textAlign: textAlign,
                  textBaseline: textBaseline,
                  borderColor: borderColor,
                  checkBgColor: checkBgColor,
                  uncheckBgColor: uncheckBgColor
                };

                if (utils_1.isDef(elapsed)) {
                  opt.animElapsedTime = elapsed;
                }

                helper.checkbox(value, context, opt);
              }
            }, {
              key: "StyleClass",
              get: function get() {
                return CheckStyle_1.CheckStyle;
              }
            }]);

            return CheckColumn;
          }(BaseColumn_1.BaseColumn);

          exports.CheckColumn = CheckColumn;
          /***/
        },

        /***/
        "./columns/type/Column.js":
        /*!********************************!*\
          !*** ./columns/type/Column.js ***!
          \********************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsTypeColumnJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils = __importStar(__webpack_require__(
          /*! ./columnUtils */
          "./columns/type/columnUtils.js"));

          var BaseColumn_1 = __webpack_require__(
          /*! ./BaseColumn */
          "./columns/type/BaseColumn.js");

          var Style_1 = __webpack_require__(
          /*! ../style/Style */
          "./columns/style/Style.js");

          var Column = /*#__PURE__*/function (_BaseColumn_1$BaseCol3) {
            _inherits(Column, _BaseColumn_1$BaseCol3);

            var _super35 = _createSuper(Column);

            function Column() {
              _classCallCheck(this, Column);

              return _super35.apply(this, arguments);
            }

            _createClass(Column, [{
              key: "clone",
              value: function clone() {
                return new Column(this);
              }
            }, {
              key: "drawInternal",
              value: function drawInternal(value, context, style, helper, _grid, _ref39) {
                var drawCellBase = _ref39.drawCellBase,
                    getIcon = _ref39.getIcon;
                var textAlign = style.textAlign,
                    textBaseline = style.textBaseline,
                    color = style.color,
                    font = style.font,
                    bgColor = style.bgColor,
                    padding = style.padding,
                    textOverflow = style.textOverflow;

                if (bgColor) {
                  drawCellBase({
                    bgColor: bgColor
                  });
                }

                helper.testFontLoad(font, value, context);
                utils.loadIcons(getIcon(), context, helper, function (icons, context) {
                  helper.text(value, context, {
                    textAlign: textAlign,
                    textBaseline: textBaseline,
                    color: color,
                    font: font,
                    padding: padding,
                    textOverflow: textOverflow,
                    icons: icons
                  });
                });
              }
            }, {
              key: "StyleClass",
              get: function get() {
                return Style_1.Style;
              }
            }]);

            return Column;
          }(BaseColumn_1.BaseColumn);

          exports.Column = Column;
          /***/
        },

        /***/
        "./columns/type/IconColumn.js":
        /*!************************************!*\
          !*** ./columns/type/IconColumn.js ***!
          \************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsTypeIconColumnJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var icons = __importStar(__webpack_require__(
          /*! ../../internal/icons */
          "./internal/icons.js"));

          var Column_1 = __webpack_require__(
          /*! ./Column */
          "./columns/type/Column.js");

          var IconStyle_1 = __webpack_require__(
          /*! ../style/IconStyle */
          "./columns/style/IconStyle.js");

          function repeatArray(val, count) {
            if (count === Infinity) {
              count = 0;
            }

            var a = [];

            for (var i = 0; i < count; i++) {
              a.push(val);
            }

            return a;
          }

          var IconColumn = /*#__PURE__*/function (_Column_1$Column2) {
            _inherits(IconColumn, _Column_1$Column2);

            var _super36 = _createSuper(IconColumn);

            function IconColumn() {
              var _this52;

              var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, IconColumn);

              _this52 = _super36.call(this, option);
              _this52._tagName = option.tagName || "i";
              _this52._className = option.className;
              _this52._content = option.content;
              _this52._name = option.name;
              _this52._iconWidth = option.iconWidth;
              return _this52;
            }

            _createClass(IconColumn, [{
              key: "clone",
              value: function clone() {
                return new IconColumn(this);
              }
            }, {
              key: "drawInternal",
              value: function drawInternal(value, context, style, helper, grid, info) {
                var num = Number(value);

                if (!isNaN(num)) {
                  var icon = {};
                  icons.iconPropKeys.forEach(function (k) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    icon[k] = style[k];
                  });
                  icon.className = this._className;
                  icon.tagName = this._tagName;

                  if (this._content) {
                    icon.content = this._content;
                  }

                  icon.name = this._name;

                  if (this._iconWidth) {
                    icon.width = this._iconWidth;
                  }

                  info.getIcon = function () {
                    return repeatArray(icon, num);
                  };
                } else {
                  info.getIcon = function () {
                    return null;
                  };
                }

                _get(_getPrototypeOf(IconColumn.prototype), "drawInternal", this).call(this, "", context, style, helper, grid, info);
              }
            }, {
              key: "StyleClass",
              get: function get() {
                return IconStyle_1.IconStyle;
              }
            }]);

            return IconColumn;
          }(Column_1.Column);

          exports.IconColumn = IconColumn;
          /***/
        },

        /***/
        "./columns/type/ImageColumn.js":
        /*!*************************************!*\
          !*** ./columns/type/ImageColumn.js ***!
          \*************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsTypeImageColumnJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var BaseColumn_1 = __webpack_require__(
          /*! ./BaseColumn */
          "./columns/type/BaseColumn.js");

          var ImageStyle_1 = __webpack_require__(
          /*! ../style/ImageStyle */
          "./columns/style/ImageStyle.js");

          var canvases_1 = __webpack_require__(
          /*! ../../internal/canvases */
          "./internal/canvases.js");

          var imgs_1 = __webpack_require__(
          /*! ../../internal/imgs */
          "./internal/imgs.js");

          var MAX_LRU_CACHE_SIZE = 50;

          function getImage(url) {
            return imgs_1.getCacheOrLoad("ImageColumn", MAX_LRU_CACHE_SIZE, url);
          }

          function calcKeepAspectRatioSize(width, height, maxWidth, maxHeight) {
            var newWidth = width;
            var newHeight = height;

            if (newWidth > maxWidth) {
              newWidth = maxWidth;
              newHeight = newWidth * height / width;
            }

            if (newHeight > maxHeight) {
              newHeight = maxHeight;
              newWidth = newHeight * width / height;
            }

            return {
              width: newWidth,
              height: newHeight
            };
          }

          var ImageColumn = /*#__PURE__*/function (_BaseColumn_1$BaseCol4) {
            _inherits(ImageColumn, _BaseColumn_1$BaseCol4);

            var _super37 = _createSuper(ImageColumn);

            function ImageColumn() {
              _classCallCheck(this, ImageColumn);

              return _super37.apply(this, arguments);
            }

            _createClass(ImageColumn, [{
              key: "onDrawCell",
              value: function onDrawCell(cellValue, info, context, grid) {
                return _get(_getPrototypeOf(ImageColumn.prototype), "onDrawCell", this).call(this, getImage(cellValue), info, context, grid);
              }
            }, {
              key: "clone",
              value: function clone() {
                return new ImageColumn(this);
              }
            }, {
              key: "drawInternal",
              value: function drawInternal(value, context, style, helper, _grid, _ref40) {
                var drawCellBase = _ref40.drawCellBase;

                if (value) {
                  var textAlign = style.textAlign,
                      textBaseline = style.textBaseline,
                      margin = style.margin,
                      bgColor = style.bgColor;

                  if (bgColor) {
                    drawCellBase({
                      bgColor: bgColor
                    });
                  }

                  helper.drawWithClip(context, function (ctx) {
                    ctx.textAlign = textAlign;
                    ctx.textBaseline = textBaseline;
                    var rect = context.getRect();

                    if (style.imageSizing === "keep-aspect-ratio") {
                      var _calcKeepAspectRatioS = calcKeepAspectRatioSize(value.width, value.height, rect.width - margin * 2, rect.height - margin * 2),
                          width = _calcKeepAspectRatioS.width,
                          height = _calcKeepAspectRatioS.height;

                      var pos = canvases_1.calcStartPosition(ctx, rect, width, height, {
                        offset: margin
                      });
                      ctx.drawImage(value, 0, 0, value.width, value.height, pos.x, pos.y, width, height);
                    } else {
                      ctx.drawImage(value, 0, 0, value.width, value.height, rect.left + margin, rect.top + margin, rect.width - margin * 2, rect.height - margin * 2);
                    }
                  });
                }
              }
            }, {
              key: "StyleClass",
              get: function get() {
                return ImageStyle_1.ImageStyle;
              }
            }]);

            return ImageColumn;
          }(BaseColumn_1.BaseColumn);

          exports.ImageColumn = ImageColumn;
          /***/
        },

        /***/
        "./columns/type/MenuColumn.js":
        /*!************************************!*\
          !*** ./columns/type/MenuColumn.js ***!
          \************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsTypeMenuColumnJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils = __importStar(__webpack_require__(
          /*! ./columnUtils */
          "./columns/type/columnUtils.js"));

          var BaseColumn_1 = __webpack_require__(
          /*! ./BaseColumn */
          "./columns/type/BaseColumn.js");

          var MenuStyle_1 = __webpack_require__(
          /*! ../style/MenuStyle */
          "./columns/style/MenuStyle.js");

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          var menu_items_1 = __webpack_require__(
          /*! ../../internal/menu-items */
          "./internal/menu-items.js");

          var MenuColumn = /*#__PURE__*/function (_BaseColumn_1$BaseCol5) {
            _inherits(MenuColumn, _BaseColumn_1$BaseCol5);

            var _super38 = _createSuper(MenuColumn);

            function MenuColumn() {
              var _this53;

              var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, MenuColumn);

              _this53 = _super38.call(this, option);
              _this53._options = menu_items_1.normalize(option.options);
              return _this53;
            }

            _createClass(MenuColumn, [{
              key: "clone",
              value: function clone() {
                return new MenuColumn(this);
              }
            }, {
              key: "withOptions",
              value: function withOptions(options) {
                var c = this.clone();
                c._options = menu_items_1.normalize(options);
                return c;
              }
            }, {
              key: "drawInternal",
              value: function drawInternal(value, context, style, helper, _grid, _ref41) {
                var drawCellBase = _ref41.drawCellBase,
                    getIcon = _ref41.getIcon;
                var textAlign = style.textAlign,
                    textBaseline = style.textBaseline,
                    font = style.font,
                    bgColor = style.bgColor,
                    padding = style.padding,
                    textOverflow = style.textOverflow,
                    appearance = style.appearance;
                var color = style.color;

                if (bgColor) {
                  drawCellBase({
                    bgColor: bgColor
                  });
                }

                var text = this._convertInternal(value);

                helper.testFontLoad(font, text, context);
                utils.loadIcons(getIcon(), context, helper, function (icons, context) {
                  var basePadding = helper.toBoxPixelArray(padding || 0, context, font);
                  var textPadding = basePadding.slice(0);
                  textPadding[1] += 26; // icon padding

                  var iconPadding = basePadding.slice(0);
                  iconPadding[1] += 8;

                  if (!utils_1.isDef(color) && (!utils_1.isDef(value) || value === "")) {
                    color = "rgba(0, 0, 0, .38)";
                  }

                  helper.text(text, context, {
                    textAlign: textAlign,
                    textBaseline: textBaseline,
                    color: color,
                    font: font,
                    padding: textPadding,
                    textOverflow: textOverflow,
                    icons: icons
                  });

                  if (appearance === "menulist-button") {
                    // draw dropdown arrow icon
                    helper.text("", context, {
                      textAlign: "right",
                      textBaseline: textBaseline,
                      color: color,
                      font: font,
                      icons: [{
                        path: "M0 2 5 7 10 2z",
                        width: 10,
                        color: "rgba(0, 0, 0, .54)"
                      }],
                      padding: iconPadding
                    });
                  } else if (appearance !== "none") {
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    console.warn("unsupported appearance:".concat(appearance));
                  }
                });
              }
            }, {
              key: "convertInternal",
              value: function convertInternal(value) {
                return value;
              }
            }, {
              key: "_convertInternal",
              value: function _convertInternal(value) {
                var options = this._options;

                for (var i = 0; i < options.length; i++) {
                  var option = options[i];

                  if (option.value === value) {
                    value = option.label;
                    break;
                  }
                }

                return _get(_getPrototypeOf(MenuColumn.prototype), "convertInternal", this).call(this, value);
              }
            }, {
              key: "getCopyCellValue",
              value: function getCopyCellValue(value) {
                return this._convertInternal(value);
              }
            }, {
              key: "StyleClass",
              get: function get() {
                return MenuStyle_1.MenuStyle;
              }
            }, {
              key: "options",
              get: function get() {
                return this._options;
              }
            }]);

            return MenuColumn;
          }(BaseColumn_1.BaseColumn);

          exports.MenuColumn = MenuColumn;
          /***/
        },

        /***/
        "./columns/type/MultilineTextColumn.js":
        /*!*********************************************!*\
          !*** ./columns/type/MultilineTextColumn.js ***!
          \*********************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsTypeMultilineTextColumnJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils = __importStar(__webpack_require__(
          /*! ./columnUtils */
          "./columns/type/columnUtils.js"));

          var BaseColumn_1 = __webpack_require__(
          /*! ./BaseColumn */
          "./columns/type/BaseColumn.js");

          var MultilineTextStyle_1 = __webpack_require__(
          /*! ../style/MultilineTextStyle */
          "./columns/style/MultilineTextStyle.js");

          var MultilineTextColumn = /*#__PURE__*/function (_BaseColumn_1$BaseCol6) {
            _inherits(MultilineTextColumn, _BaseColumn_1$BaseCol6);

            var _super39 = _createSuper(MultilineTextColumn);

            function MultilineTextColumn() {
              var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, MultilineTextColumn);

              return _super39.call(this, option);
            }

            _createClass(MultilineTextColumn, [{
              key: "clone",
              value: function clone() {
                return new MultilineTextColumn(this);
              }
            }, {
              key: "drawInternal",
              value: function drawInternal(value, context, style, helper, _grid, _ref42) {
                var drawCellBase = _ref42.drawCellBase,
                    getIcon = _ref42.getIcon;
                var textAlign = style.textAlign,
                    textBaseline = style.textBaseline,
                    color = style.color,
                    font = style.font,
                    bgColor = style.bgColor,
                    padding = style.padding,
                    lineHeight = style.lineHeight,
                    autoWrapText = style.autoWrapText,
                    lineClamp = style.lineClamp,
                    textOverflow = style.textOverflow;

                if (bgColor) {
                  drawCellBase({
                    bgColor: bgColor
                  });
                }

                var multilines = value.replace(/\r?\n/g, "\n").replace(/\r/g, "\n").split("\n");
                helper.testFontLoad(font, value, context);
                utils.loadIcons(getIcon(), context, helper, function (icons, context) {
                  helper.multilineText(multilines, context, {
                    textAlign: textAlign,
                    textBaseline: textBaseline,
                    color: color,
                    font: font,
                    padding: padding,
                    lineHeight: lineHeight,
                    autoWrapText: autoWrapText,
                    lineClamp: lineClamp,
                    textOverflow: textOverflow,
                    icons: icons
                  });
                });
              }
            }, {
              key: "StyleClass",
              get: function get() {
                return MultilineTextStyle_1.MultilineTextStyle;
              }
            }]);

            return MultilineTextColumn;
          }(BaseColumn_1.BaseColumn);

          exports.MultilineTextColumn = MultilineTextColumn;
          /***/
        },

        /***/
        "./columns/type/NumberColumn.js":
        /*!**************************************!*\
          !*** ./columns/type/NumberColumn.js ***!
          \**************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsTypeNumberColumnJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var Column_1 = __webpack_require__(
          /*! ./Column */
          "./columns/type/Column.js");

          var NumberStyle_1 = __webpack_require__(
          /*! ../style/NumberStyle */
          "./columns/style/NumberStyle.js");

          var defaultFotmat;

          var NumberColumn = /*#__PURE__*/function (_Column_1$Column3) {
            _inherits(NumberColumn, _Column_1$Column3);

            var _super40 = _createSuper(NumberColumn);

            function NumberColumn() {
              var _this54;

              var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, NumberColumn);

              _this54 = _super40.call(this, option);
              _this54._format = option.format;
              return _this54;
            }

            _createClass(NumberColumn, [{
              key: "clone",
              value: function clone() {
                return new NumberColumn(this);
              }
            }, {
              key: "withFormat",
              value: function withFormat(format) {
                var c = this.clone();
                c._format = format;
                return c;
              }
            }, {
              key: "convertInternal",
              value: function convertInternal(value) {
                var num = Number(value);

                if (isNaN(num)) {
                  return _get(_getPrototypeOf(NumberColumn.prototype), "convertInternal", this).call(this, value);
                }

                var format = this._format || NumberColumn.defaultFotmat;
                return format.format(num);
              }
            }, {
              key: "StyleClass",
              get: function get() {
                return NumberStyle_1.NumberStyle;
              }
            }, {
              key: "format",
              get: function get() {
                return this._format;
              }
            }], [{
              key: "defaultFotmat",
              get: function get() {
                return defaultFotmat || (defaultFotmat = new Intl.NumberFormat());
              },
              set: function set(fmt) {
                defaultFotmat = fmt;
              }
            }]);

            return NumberColumn;
          }(Column_1.Column);

          exports.NumberColumn = NumberColumn;
          /***/
        },

        /***/
        "./columns/type/PercentCompleteBarColumn.js":
        /*!**************************************************!*\
          !*** ./columns/type/PercentCompleteBarColumn.js ***!
          \**************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsTypePercentCompleteBarColumnJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          var Column_1 = __webpack_require__(
          /*! ./Column */
          "./columns/type/Column.js");

          var PercentCompleteBarStyle_1 = __webpack_require__(
          /*! ../style/PercentCompleteBarStyle */
          "./columns/style/PercentCompleteBarStyle.js");

          var MARGIN = 2;

          var PercentCompleteBarColumn = /*#__PURE__*/function (_Column_1$Column4) {
            _inherits(PercentCompleteBarColumn, _Column_1$Column4);

            var _super41 = _createSuper(PercentCompleteBarColumn);

            function PercentCompleteBarColumn() {
              var _this55;

              var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, PercentCompleteBarColumn);

              _this55 = _super41.call(this, option);
              _this55._min = option.min || 0;
              _this55._max = option.max || _this55._min + 100;

              _this55._formatter = option.formatter || function (v) {
                return v;
              };

              return _this55;
            }

            _createClass(PercentCompleteBarColumn, [{
              key: "clone",
              value: function clone() {
                return new PercentCompleteBarColumn(this);
              }
            }, {
              key: "drawInternal",
              value: function drawInternal(value, context, style, helper, grid, info) {
                _get(_getPrototypeOf(PercentCompleteBarColumn.prototype), "drawInternal", this).call(this, this._formatter(value), context, style, helper, grid, info);

                var barColor = style.barColor,
                    barBgColor = style.barBgColor,
                    barHeight = style.barHeight;
                var svalue = "".concat(value);

                if (utils_1.str.endsWith(svalue, "%")) {
                  svalue = svalue.substr(0, svalue.length - 1);
                }

                var num = Number(svalue);

                if (isNaN(num)) {
                  return;
                }

                var rate = num < this._min ? 0 : num > this._max ? 1 : (num - this._min) / (this._max - this._min);
                helper.drawWithClip(context, function (ctx) {
                  var rect = context.getRect();
                  var barMaxWidth = rect.width - MARGIN * 2 - 1;
                  /*罫線*/

                  var barTop = rect.bottom - MARGIN - barHeight - 1;
                  /*罫線*/

                  var barLeft = rect.left + MARGIN;
                  ctx.fillStyle = utils_1.getOrApply(barBgColor, rate * 100) || "#f0f3f5";
                  ctx.beginPath();
                  ctx.rect(barLeft, barTop, barMaxWidth, barHeight);
                  ctx.fill();
                  var barSize = Math.min(barMaxWidth * rate, barMaxWidth);
                  ctx.fillStyle = utils_1.getOrApply(barColor, rate * 100) || "#20a8d8";
                  ctx.beginPath();
                  ctx.rect(barLeft, barTop, barSize, barHeight);
                  ctx.fill();
                });
              }
            }, {
              key: "StyleClass",
              get: function get() {
                return PercentCompleteBarStyle_1.PercentCompleteBarStyle;
              }
            }]);

            return PercentCompleteBarColumn;
          }(Column_1.Column);

          exports.PercentCompleteBarColumn = PercentCompleteBarColumn;
          /***/
        },

        /***/
        "./columns/type/RadioColumn.js":
        /*!*************************************!*\
          !*** ./columns/type/RadioColumn.js ***!
          \*************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsTypeRadioColumnJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var BaseColumn_1 = __webpack_require__(
          /*! ./BaseColumn */
          "./columns/type/BaseColumn.js");

          var RadioStyle_1 = __webpack_require__(
          /*! ../style/RadioStyle */
          "./columns/style/RadioStyle.js");

          var symbolManager_1 = __webpack_require__(
          /*! ../../internal/symbolManager */
          "./internal/symbolManager.js");

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          var utils_2 = __webpack_require__(
          /*! ../utils */
          "./columns/utils/index.js");

          var RADIO_COLUMN_STATE_ID = symbolManager_1.getRadioColumnStateId();

          var RadioColumn = /*#__PURE__*/function (_BaseColumn_1$BaseCol7) {
            _inherits(RadioColumn, _BaseColumn_1$BaseCol7);

            var _super42 = _createSuper(RadioColumn);

            function RadioColumn() {
              _classCallCheck(this, RadioColumn);

              return _super42.apply(this, arguments);
            }

            _createClass(RadioColumn, [{
              key: "clone",
              value: function clone() {
                return new RadioColumn(this);
              }
            }, {
              key: "convertInternal",
              value: function convertInternal(value) {
                return utils_2.toBoolean(value);
              }
            }, {
              key: "drawInternal",
              value: function drawInternal(value, context, style, helper, grid, _ref43) {
                var drawCellBase = _ref43.drawCellBase;

                var _a;

                var textAlign = style.textAlign,
                    textBaseline = style.textBaseline,
                    checkColor = style.checkColor,
                    uncheckBorderColor = style.uncheckBorderColor,
                    checkBorderColor = style.checkBorderColor,
                    uncheckBgColor = style.uncheckBgColor,
                    checkBgColor = style.checkBgColor,
                    bgColor = style.bgColor;

                if (bgColor) {
                  drawCellBase({
                    bgColor: bgColor
                  });
                }

                var col = context.col,
                    row = context.row;
                var range = grid.getCellRange(col, row);
                var cellKey = "".concat(range.start.col, ":").concat(range.start.row);
                var elapsed = (_a = grid[RADIO_COLUMN_STATE_ID]) === null || _a === void 0 ? void 0 : _a.elapsed[cellKey];
                var opt = {
                  textAlign: textAlign,
                  textBaseline: textBaseline,
                  checkColor: checkColor,
                  uncheckBorderColor: uncheckBorderColor,
                  checkBorderColor: checkBorderColor,
                  uncheckBgColor: uncheckBgColor,
                  checkBgColor: checkBgColor
                };

                if (utils_1.isDef(elapsed)) {
                  opt.animElapsedTime = elapsed;
                }

                helper.radioButton(value, context, opt);
              }
            }, {
              key: "StyleClass",
              get: function get() {
                return RadioStyle_1.RadioStyle;
              }
            }]);

            return RadioColumn;
          }(BaseColumn_1.BaseColumn);

          exports.RadioColumn = RadioColumn;
          /***/
        },

        /***/
        "./columns/type/columnUtils.js":
        /*!*************************************!*\
          !*** ./columns/type/columnUtils.js ***!
          \*************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsTypeColumnUtilsJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var icons = __importStar(__webpack_require__(
          /*! ../../internal/icons */
          "./internal/icons.js"));

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          function loadIcons( // eslint-disable-next-line @typescript-eslint/no-explicit-any
          icon, context, helper, callback) {
            var argIcon = undefined;

            if (icon) {
              if (utils_1.isPromise(icon)) {
                icon.then(function (i) {
                  loadIcons(i, context.toCurrentContext(), helper, callback);
                });
              } else {
                var iconList = icons.toNormarizeArray(icon);
                iconList.forEach(function (i) {
                  if (i.font && i.content) {
                    helper.testFontLoad(i.font, i.content, context);
                  }
                });
                argIcon = iconList;
              }
            }

            callback(argIcon, context);
          }

          exports.loadIcons = loadIcons;
          /***/
        },

        /***/
        "./columns/utils/index.js":
        /*!********************************!*\
          !*** ./columns/utils/index.js ***!
          \********************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function columnsUtilsIndexJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          function toBoolean(val) {
            if (typeof val === "string") {
              if (val === "false") {
                return false;
              } else if (val === "off") {
                return false;
              } else if (/^0+$/.exec(val)) {
                return false;
              }
            }

            return Boolean(val);
          }

          exports.toBoolean = toBoolean;
          /***/
        },

        /***/
        "./core.js":
        /*!*****************!*\
          !*** ./core.js ***!
          \*****************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function coreJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var DrawGrid_1 = __webpack_require__(
          /*! ./core/DrawGrid */
          "./core/DrawGrid.js");

          exports.DrawGrid = DrawGrid_1.DrawGrid;

          var DG_EVENT_TYPE_1 = __webpack_require__(
          /*! ./core/DG_EVENT_TYPE */
          "./core/DG_EVENT_TYPE.js");

          exports.EVENT_TYPE = DG_EVENT_TYPE_1.DG_EVENT_TYPE;
          /***/
        },

        /***/
        "./core/DG_EVENT_TYPE.js":
        /*!*******************************!*\
          !*** ./core/DG_EVENT_TYPE.js ***!
          \*******************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function coreDG_EVENT_TYPEJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          /**
           * DrawGrid event types
           * @classdesc cheetahGrid.core.EVENT_TYPE
           * @memberof cheetahGrid.core
           */

          exports.DG_EVENT_TYPE = {
            CLICK_CELL: "click_cell",
            DBLCLICK_CELL: "dblclick_cell",
            DBLTAP_CELL: "dbltap_cell",
            MOUSEDOWN_CELL: "mousedown_cell",
            MOUSEUP_CELL: "mouseup_cell",
            SELECTED_CELL: "selected_cell",
            KEYDOWN: "keydown",
            MOUSEMOVE_CELL: "mousemove_cell",
            MOUSEENTER_CELL: "mouseenter_cell",
            MOUSELEAVE_CELL: "mouseleave_cell",
            MOUSEOVER_CELL: "mouseover_cell",
            MOUSEOUT_CELL: "mouseout_cell",
            CONTEXTMENU_CELL: "contextmenu_cell",
            INPUT_CELL: "input_cell",
            PASTE_CELL: "paste_cell",
            DELETE_CELL: "delete_cell",
            EDITABLEINPUT_CELL: "editableinput_cell",
            MODIFY_STATUS_EDITABLEINPUT_CELL: "modify_status_editableinput_cell",
            RESIZE_COLUMN: "resize_column",
            SCROLL: "scroll",
            FOCUS_GRID: "focus_grid",
            BLUR_GRID: "blur_grid"
          };
          /***/
        },

        /***/
        "./core/DrawGrid.js":
        /*!**************************!*\
          !*** ./core/DrawGrid.js ***!
          \**************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function coreDrawGridJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var calc = __importStar(__webpack_require__(
          /*! ../internal/calc */
          "./internal/calc.js"));

          var hiDPI = __importStar(__webpack_require__(
          /*! ../internal/hiDPI */
          "./internal/hiDPI.js"));

          var style = __importStar(__webpack_require__(
          /*! ../internal/style */
          "./internal/style.js"));

          var utils_1 = __webpack_require__(
          /*! ../internal/utils */
          "./internal/utils.js");

          var DG_EVENT_TYPE_1 = __webpack_require__(
          /*! ./DG_EVENT_TYPE */
          "./core/DG_EVENT_TYPE.js");

          var EventHandler_1 = __webpack_require__(
          /*! ../internal/EventHandler */
          "./internal/EventHandler.js");

          var EventTarget_1 = __webpack_require__(
          /*! ./EventTarget */
          "./core/EventTarget.js");

          var NumberMap_1 = __webpack_require__(
          /*! ../internal/NumberMap */
          "./internal/NumberMap.js");

          var Rect_1 = __webpack_require__(
          /*! ../internal/Rect */
          "./internal/Rect.js");

          var Scrollable_1 = __webpack_require__(
          /*! ../internal/Scrollable */
          "./internal/Scrollable.js");

          var canvases_1 = __webpack_require__(
          /*! ../internal/canvases */
          "./internal/canvases.js"); //protected symbol


          var symbolManager_1 = __webpack_require__(
          /*! ../internal/symbolManager */
          "./internal/symbolManager.js");

          var paste_utils_1 = __webpack_require__(
          /*! ../internal/paste-utils */
          "./internal/paste-utils.js");

          var _utils_1$event = utils_1.event,
              isTouchEvent = _utils_1$event.isTouchEvent,
              getMouseButtons = _utils_1$event.getMouseButtons,
              getKeyCode = _utils_1$event.getKeyCode,
              cancelEvent = _utils_1$event.cancel;
          /** @private */

          var _ = symbolManager_1.getProtectedSymbol();
          /** @private */


          function createRootElement() {
            var element = document.createElement("div");
            element.classList.add("cheetah-grid");
            return element;
          }
          /** @private */


          var KEY_BS = 8;
          /** @private */

          var KEY_TAB = 9;
          /** @private */

          var KEY_ENTER = 13;
          /** @private */

          var KEY_END = 35;
          /** @private */

          var KEY_HOME = 36;
          /** @private */

          var KEY_LEFT = 37;
          /** @private */

          var KEY_UP = 38;
          /** @private */

          var KEY_RIGHT = 39;
          /** @private */

          var KEY_DOWN = 40;
          /** @private */

          var KEY_DEL = 46;
          /** @private */

          var KEY_ALPHA_A = 65;
          /** @private */

          var KEY_ALPHA_C = 67;
          /** @private */

          var KEY_ALPHA_V = 86; //private methods

          /** @private */

          function _vibrate(e) {
            if (navigator.vibrate && isTouchEvent(e)) {
              navigator.vibrate(50);
            }
          }
          /** @private */


          function _getTargetRowAt(absoluteY) {
            var _this56 = this;

            var internal = this.getTargetRowAtInternal(absoluteY);

            if (utils_1.isDef(internal)) {
              return internal;
            }

            var findBefore = function findBefore(startRow, startBottom) {
              var bottom = startBottom;

              for (var row = startRow; row >= 0; row--) {
                var height = _getRowHeight.call(_this56, row);

                var top = bottom - height;

                if (top <= absoluteY && absoluteY < bottom) {
                  return {
                    top: top,
                    row: row
                  };
                }

                bottom = top;
              }

              return null;
            };

            var findAfter = function findAfter(startRow, startBottom) {
              var top = startBottom - _getRowHeight.call(_this56, startRow);

              var rowCount = _this56[_].rowCount;

              for (var row = startRow; row < rowCount; row++) {
                var height = _getRowHeight.call(_this56, row);

                var _bottom = top + height;

                if (top <= absoluteY && absoluteY < _bottom) {
                  return {
                    top: top,
                    row: row
                  };
                }

                top = _bottom;
              }

              return null;
            };

            var candRow = Math.min(Math.ceil(absoluteY / this[_].defaultRowHeight), this.rowCount - 1);

            var bottom = _getRowsHeight.call(this, 0, candRow);

            if (absoluteY >= bottom) {
              return findAfter(candRow, bottom);
            } else {
              return findBefore(candRow, bottom);
            }
          }
          /** @private */


          function _getTargetColAt(grid, absoluteX) {
            var left = 0;
            var colCount = grid[_].colCount;

            for (var col = 0; col < colCount; col++) {
              var width = _getColWidth(grid, col);

              var right = left + width;

              if (right > absoluteX) {
                return {
                  left: left,
                  col: col
                };
              }

              left = right;
            }

            return null;
          }
          /** @private */


          function _getTargetFrozenRowAt(grid, absoluteY) {
            if (!grid[_].frozenRowCount) {
              return null;
            }

            var top = grid[_].scroll.top;
            var rowCount = grid[_].frozenRowCount;

            for (var row = 0; row < rowCount; row++) {
              var height = _getRowHeight.call(grid, row);

              var bottom = top + height;

              if (bottom > absoluteY) {
                return {
                  top: top,
                  row: row
                };
              }

              top = bottom;
            }

            return null;
          }
          /** @private */


          function _getTargetFrozenColAt(grid, absoluteX) {
            if (!grid[_].frozenColCount) {
              return null;
            }

            var left = grid[_].scroll.left;
            var colCount = grid[_].frozenColCount;

            for (var col = 0; col < colCount; col++) {
              var width = _getColWidth(grid, col);

              var right = left + width;

              if (right > absoluteX) {
                return {
                  left: left,
                  col: col
                };
              }

              left = right;
            }

            return null;
          }
          /** @private */


          function _getFrozenRowsRect(grid) {
            if (!grid[_].frozenRowCount) {
              return null;
            }

            var top = grid[_].scroll.top;
            var height = 0;
            var rowCount = grid[_].frozenRowCount;

            for (var row = 0; row < rowCount; row++) {
              height += _getRowHeight.call(grid, row);
            }

            return new Rect_1.Rect(grid[_].scroll.left, top, grid[_].canvas.width, height);
          }
          /** @private */


          function _getFrozenColsRect(grid) {
            if (!grid[_].frozenColCount) {
              return null;
            }

            var left = grid[_].scroll.left;
            var width = 0;
            var colCount = grid[_].frozenColCount;

            for (var col = 0; col < colCount; col++) {
              width += _getColWidth(grid, col);
            }

            return new Rect_1.Rect(left, grid[_].scroll.top, width, grid[_].canvas.height);
          }
          /** @private */


          function _getCellDrawing(grid, col, row) {
            if (!grid[_].drawCells[row]) {
              return null;
            }

            return grid[_].drawCells[row][col];
          }
          /** @private */


          function _putCellDrawing(grid, col, row, context) {
            if (!grid[_].drawCells[row]) {
              grid[_].drawCells[row] = {};
            }

            grid[_].drawCells[row][col] = context;
          }
          /** @private */


          function _removeCellDrawing(grid, col, row) {
            if (!grid[_].drawCells[row]) {
              return;
            }

            delete grid[_].drawCells[row][col];

            if (Object.keys(grid[_].drawCells[row]).length === 0) {
              delete grid[_].drawCells[row];
            }
          }
          /** @private */


          function _drawCell(ctx, col, absoluteLeft, width, row, absoluteTop, height, visibleRect, skipAbsoluteTop, skipAbsoluteLeft, drawLayers) {
            var _this57 = this;

            var rect = new Rect_1.Rect(absoluteLeft - visibleRect.left, absoluteTop - visibleRect.top, width, height);
            var drawRect = Rect_1.Rect.bounds(Math.max(absoluteLeft, skipAbsoluteLeft) - visibleRect.left, Math.max(absoluteTop, skipAbsoluteTop) - visibleRect.top, rect.right, rect.bottom);

            if (drawRect.height > 0 && drawRect.width > 0) {
              ctx.save();

              try {
                var cellDrawing = _getCellDrawing(this, col, row);

                if (cellDrawing) {
                  cellDrawing.cancel();
                }

                var dcContext = new DrawCellContext(col, row, ctx, rect, drawRect, !!cellDrawing, this[_].selection, drawLayers);
                var p = this.onDrawCell(col, row, dcContext);

                if (utils_1.isPromise(p)) {
                  //遅延描画
                  _putCellDrawing(this, col, row, dcContext);

                  var pCol = col;

                  dcContext._delayMode(this, function () {
                    _removeCellDrawing(_this57, pCol, row);
                  });

                  p.then(function () {
                    dcContext.terminate();
                  });
                }
              } finally {
                ctx.restore();
              }
            }
          }
          /** @private */


          function _drawRow(grid, ctx, initFrozenCol, initCol, drawRight, row, absoluteTop, height, visibleRect, skipAbsoluteTop, drawLayers) {
            var colCount = grid[_].colCount;

            var drawOuter = function drawOuter(col, absoluteLeft) {
              //データ範囲外の描画
              if (col >= colCount - 1 && grid[_].canvas.width > absoluteLeft - visibleRect.left) {
                var outerLeft = absoluteLeft - visibleRect.left;
                ctx.save();
                ctx.beginPath();
                ctx.fillStyle = grid.underlayBackgroundColor || "#F6F6F6";
                ctx.rect(outerLeft, absoluteTop - visibleRect.top, grid[_].canvas.width - outerLeft, height);
                ctx.fill();
                ctx.restore();
              }
            };

            var skipAbsoluteLeft = 0;

            if (initFrozenCol) {
              var _absoluteLeft = initFrozenCol.left;
              var count = grid[_].frozenColCount;

              for (var col = initFrozenCol.col; col < count; col++) {
                var width = _getColWidth(grid, col);

                _drawCell.call(grid, ctx, col, _absoluteLeft, width, row, absoluteTop, height, visibleRect, skipAbsoluteTop, 0, drawLayers);

                _absoluteLeft += width;

                if (drawRight <= _absoluteLeft) {
                  //描画範囲外（終了）
                  drawOuter(col, _absoluteLeft);
                  return;
                }
              }

              skipAbsoluteLeft = _absoluteLeft;
            }

            var absoluteLeft = initCol.left;

            for (var _col2 = initCol.col; _col2 < colCount; _col2++) {
              var _width = _getColWidth(grid, _col2);

              _drawCell.call(grid, ctx, _col2, absoluteLeft, _width, row, absoluteTop, height, visibleRect, skipAbsoluteTop, skipAbsoluteLeft, drawLayers);

              absoluteLeft += _width;

              if (drawRight <= absoluteLeft) {
                //描画範囲外（終了）
                drawOuter(_col2, absoluteLeft);
                return;
              }
            }

            drawOuter(colCount - 1, absoluteLeft);
          }
          /** @private */


          function _getInitContext() {
            return this._getInitContext();
          }
          /** @private */


          function _invalidateRect(grid, drawRect) {
            var visibleRect = _getVisibleRect(grid);

            var rowCount = grid[_].rowCount;

            var ctx = _getInitContext.call(grid);

            var initRow = _getTargetRowAt.call(grid, Math.max(visibleRect.top, drawRect.top)) || {
              top: _getRowsHeight.call(grid, 0, rowCount - 1),
              row: rowCount
            };
            var initCol = _getTargetColAt(grid, Math.max(visibleRect.left, drawRect.left)) || {
              left: _getColsWidth(grid, 0, grid[_].colCount - 1),
              col: grid[_].colCount
            };
            var drawBottom = Math.min(visibleRect.bottom, drawRect.bottom);
            var drawRight = Math.min(visibleRect.right, drawRect.right);

            var initFrozenRow = _getTargetFrozenRowAt(grid, Math.max(visibleRect.top, drawRect.top));

            var initFrozenCol = _getTargetFrozenColAt(grid, Math.max(visibleRect.left, drawRect.left));

            var drawLayers = new DrawLayers();

            var drawOuter = function drawOuter(row, absoluteTop) {
              //データ範囲外の描画
              if (row >= rowCount - 1 && grid[_].canvas.height > absoluteTop - visibleRect.top) {
                var outerTop = absoluteTop - visibleRect.top;
                ctx.save();
                ctx.beginPath();
                ctx.fillStyle = grid.underlayBackgroundColor || "#F6F6F6";
                ctx.rect(0, outerTop, grid[_].canvas.width, grid[_].canvas.height - outerTop);
                ctx.fill();
                ctx.restore();
              }
            };

            var skipAbsoluteTop = 0;

            if (initFrozenRow) {
              var _absoluteTop = initFrozenRow.top;
              var count = grid[_].frozenRowCount;

              for (var row = initFrozenRow.row; row < count; row++) {
                var height = _getRowHeight.call(grid, row);

                _drawRow(grid, ctx, initFrozenCol, initCol, drawRight, row, _absoluteTop, height, visibleRect, 0, drawLayers);

                _absoluteTop += height;

                if (drawBottom <= _absoluteTop) {
                  //描画範囲外（終了）
                  drawOuter(row, _absoluteTop);
                  drawLayers.draw(ctx);
                  return;
                }
              }

              skipAbsoluteTop = _absoluteTop;
            }

            var absoluteTop = initRow.top;

            for (var _row2 = initRow.row; _row2 < rowCount; _row2++) {
              var _height = _getRowHeight.call(grid, _row2); //行の描画


              _drawRow(grid, ctx, initFrozenCol, initCol, drawRight, _row2, absoluteTop, _height, visibleRect, skipAbsoluteTop, drawLayers);

              absoluteTop += _height;

              if (drawBottom <= absoluteTop) {
                //描画範囲外（終了）
                drawOuter(_row2, absoluteTop);
                drawLayers.draw(ctx);
                return;
              }
            }

            drawOuter(rowCount - 1, absoluteTop);
            drawLayers.draw(ctx);
          }
          /** @private */


          function _toPxWidth(grid, width) {
            return Math.round(calc.toPx(width, grid[_].calcWidthContext));
          }
          /** @private */


          function _adjustColWidth(grid, col, orgWidth) {
            var limits = _getColWidthLimits(grid, col);

            return Math.max(_applyColWidthLimits(limits, orgWidth), 0);
          }
          /** @private */


          function _applyColWidthLimits(limits, orgWidth) {
            if (!limits) {
              return orgWidth;
            }

            if (limits.min) {
              if (limits.min > orgWidth) {
                return limits.min;
              }
            }

            if (limits.max) {
              if (limits.max < orgWidth) {
                return limits.max;
              }
            }

            return orgWidth;
          }
          /**
           * Gets the definition of the column width.
           * @param {DrawGrid} grid grid instance
           * @param {number} col number of column
           * @returns {string|number} width definition
           * @private
           */


          function _getColWidthDefine(grid, col) {
            var width = grid[_].colWidthsMap.get(col);

            if (width) {
              return width;
            }

            return grid.defaultColWidth;
          }
          /**
           * Gets the column width limits.
           * @param {DrawGrid} grid grid instance
           * @param {number} col number of column
           * @returns {object|null} the column width limits
           * @private
           */


          function _getColWidthLimits(grid, col) {
            var limit = grid[_].colWidthsLimit[col];

            if (!limit) {
              return null;
            }

            var result = {};

            if (limit.min) {
              result.min = _toPxWidth(grid, limit.min);
              result.minDef = limit.min;
            }

            if (limit.max) {
              result.max = _toPxWidth(grid, limit.max);
              result.maxDef = limit.max;
            }

            return result;
          }
          /**
           * Checks if the given width definition is `auto`.
           * @param {string|number} width width definition to check
           * @returns {boolean} `true ` if the given width definition is `auto`
           * @private
           */


          function isAutoDefine(width) {
            return Boolean(width && typeof width === "string" && width.toLowerCase() === "auto");
          }
          /**
           * Creates a formula to calculate the auto width.
           * @param {DrawGrid} grid grid instance
           * @returns {string} formula
           * @private
           */


          function _calcAutoColWidthExpr(grid) {
            var others = [];
            var autoCount = 0;
            var hasLimitsOnAuto = [];

            for (var col = 0; col < grid[_].colCount; col++) {
              var def = _getColWidthDefine(grid, col);

              var limits = _getColWidthLimits(grid, col);

              if (isAutoDefine(def)) {
                if (limits) {
                  hasLimitsOnAuto.push(limits);
                }

                autoCount++;
              } else {
                var expr = typeof def === "number" ? "".concat(def, "px") : def;

                if (limits) {
                  var orgWidth = _toPxWidth(grid, expr);

                  var newWidth = _applyColWidthLimits(limits, orgWidth);

                  if (orgWidth !== newWidth) {
                    expr = "".concat(newWidth, "px");
                  }
                }

                others.push(expr);
              }
            }

            if (hasLimitsOnAuto.length && others.length) {
              var autoPx = _toPxWidth(grid, "calc(100% - (".concat(others.join(" + "), "))")) / autoCount;

              for (var index = 0; index < hasLimitsOnAuto.length; index++) {
                var _limits = hasLimitsOnAuto[index];

                if (_limits.min && autoPx < _limits.min) {
                  others.push(typeof _limits.minDef === "number" ? "".concat(_limits.minDef, "px") : _limits.minDef);
                  autoCount--;
                } else if (_limits.max && _limits.max < autoPx) {
                  others.push(typeof _limits.maxDef === "number" ? "".concat(_limits.maxDef, "px") : _limits.maxDef);
                  autoCount--;
                }
              }

              if (autoCount <= 0) {
                return "".concat(autoPx, "px");
              }
            }

            if (others.length) {
              return "calc((100% - (".concat(others.join(" + "), ")) / ").concat(autoCount, ")");
            } else {
              return "".concat(100 / autoCount, "%");
            }
          }
          /**
           * Calculate the pixels of width from the definition of width.
           * @param {DrawGrid} grid grid instance
           * @param {string|number} width width definition
           * @returns {number} the pixels of width
           * @private
           */


          function _colWidthDefineToPxWidth(grid, width) {
            if (isAutoDefine(width)) {
              return _toPxWidth(grid, _calcAutoColWidthExpr(grid));
            }

            return _toPxWidth(grid, width);
          }
          /** @private */


          function _getColWidth(grid, col) {
            var width = _getColWidthDefine(grid, col);

            return _adjustColWidth(grid, col, _colWidthDefineToPxWidth(grid, width));
          }
          /** @private */


          function _setColWidth(grid, col, width) {
            grid[_].colWidthsMap.put(col, width);
          }
          /**
           * Overwrites the definition of a column whose width is set to `auto` with the current auto width formula.
           * @param {DrawGrid} grid grid instance
           * @returns {void}
           * @private
           */


          function _storeAutoColWidthExprs(grid) {
            var expr = null;

            for (var col = 0; col < grid[_].colCount; col++) {
              var def = _getColWidthDefine(grid, col);

              if (isAutoDefine(def)) {
                _setColWidth(grid, col, expr || (expr = _calcAutoColWidthExpr(grid)));
              }
            }
          }
          /** @private */


          function _getColsWidth(grid, startCol, endCol) {
            var defaultColPxWidth = _colWidthDefineToPxWidth(grid, grid.defaultColWidth);

            var colCount = endCol - startCol + 1;
            var w = defaultColPxWidth * colCount;

            grid[_].colWidthsMap.each(startCol, endCol, function (width, col) {
              w += _adjustColWidth(grid, col, _colWidthDefineToPxWidth(grid, width)) - defaultColPxWidth;
            });

            for (var col = startCol; col <= endCol; col++) {
              if (grid[_].colWidthsMap.has(col)) {
                continue;
              }

              var adj = _adjustColWidth(grid, col, defaultColPxWidth);

              if (adj !== defaultColPxWidth) {
                w += adj - defaultColPxWidth;
              }
            }

            return w;
          }
          /** @private */


          function _getRowHeight(row) {
            var internal = this.getRowHeightInternal(row);

            if (utils_1.isDef(internal)) {
              return internal;
            }

            var height = this[_].rowHeightsMap.get(row);

            if (height) {
              return height;
            }

            return this[_].defaultRowHeight;
          }
          /** @private */


          function _setRowHeight(grid, row, height) {
            grid[_].rowHeightsMap.put(row, height);
          }
          /** @private */


          function _getRowsHeight(startRow, endRow) {
            var _this58 = this;

            var internal = this.getRowsHeightInternal(startRow, endRow);

            if (utils_1.isDef(internal)) {
              return internal;
            }

            var rowCount = endRow - startRow + 1;
            var h = this[_].defaultRowHeight * rowCount;

            this[_].rowHeightsMap.each(startRow, endRow, function (height) {
              h += height - _this58[_].defaultRowHeight;
            });

            return h;
          }
          /** @private */


          function _getScrollWidth(grid) {
            return _getColsWidth(grid, 0, grid[_].colCount - 1);
          }
          /** @private */


          function _getScrollHeight(row) {
            var _this59 = this;

            var internal = this.getScrollHeightInternal(row);

            if (utils_1.isDef(internal)) {
              return internal;
            }

            var h = this[_].defaultRowHeight * this[_].rowCount;

            this[_].rowHeightsMap.each(0, this[_].rowCount - 1, function (height) {
              h += height - _this59[_].defaultRowHeight;
            });

            return h;
          }
          /** @private */


          function _onScroll(grid, _e) {
            var lastLeft = grid[_].scroll.left;
            var lastTop = grid[_].scroll.top;
            var moveX = grid[_].scrollable.scrollLeft - lastLeft;
            var moveY = grid[_].scrollable.scrollTop - lastTop; //次回計算用情報を保持

            grid[_].scroll = {
              left: grid[_].scrollable.scrollLeft,
              top: grid[_].scrollable.scrollTop
            };

            var visibleRect = _getVisibleRect(grid);

            if (Math.abs(moveX) >= visibleRect.width || Math.abs(moveY) >= visibleRect.height) {
              //全再描画
              _invalidateRect(grid, visibleRect);
            } else {
              //差分再描画
              grid[_].context.drawImage(grid[_].canvas, -moveX, -moveY);

              if (moveX !== 0) {
                //横移動の再描画範囲を計算
                var redrawRect = visibleRect.copy();

                if (moveX < 0) {
                  redrawRect.width = -moveX;

                  if (grid[_].frozenColCount > 0) {
                    //固定列がある場合固定列分描画
                    var frozenRect = _getFrozenColsRect(grid);

                    redrawRect.width += frozenRect.width;
                  }
                } else if (moveX > 0) {
                  redrawRect.left = redrawRect.right - moveX;
                } //再描画


                _invalidateRect(grid, redrawRect);

                if (moveX > 0) {
                  if (grid[_].frozenColCount > 0) {
                    //固定列がある場合固定列描画
                    _invalidateRect(grid, _getFrozenColsRect(grid));
                  }
                }
              }

              if (moveY !== 0) {
                //縦移動の再描画範囲を計算
                var _redrawRect = visibleRect.copy();

                if (moveY < 0) {
                  _redrawRect.height = -moveY;

                  if (grid[_].frozenRowCount > 0) {
                    //固定行がある場合固定行分描画
                    var _frozenRect2 = _getFrozenRowsRect(grid);

                    _redrawRect.height += _frozenRect2.height;
                  }
                } else if (moveY > 0) {
                  _redrawRect.top = _redrawRect.bottom - moveY;
                } //再描画


                _invalidateRect(grid, _redrawRect);

                if (moveY > 0) {
                  if (grid[_].frozenRowCount > 0) {
                    //固定行がある場合固定行描画
                    _invalidateRect(grid, _getFrozenRowsRect(grid));
                  }
                }
              }
            }
          }
          /** @private */
          // eslint-disable-next-line complexity


          function _onKeyDownMove(e) {
            var _a, _b, _c;

            var shiftKey = e.shiftKey;
            var keyCode = getKeyCode(e);
            var focusCell = shiftKey ? this.selection.focus : this.selection.select;

            if (keyCode === KEY_LEFT) {
              if (e.ctrlKey || e.metaKey) {
                move(this, null, "W");
              } else {
                if (!hmove.call(this, "W")) {
                  return;
                }
              }

              cancelEvent(e);
            } else if (keyCode === KEY_UP) {
              if (e.ctrlKey || e.metaKey) {
                move(this, "N", null);
              } else {
                if (!vmove.call(this, "N")) {
                  return;
                }
              }

              cancelEvent(e);
            } else if (keyCode === KEY_RIGHT) {
              if (e.ctrlKey || e.metaKey) {
                move(this, null, "E");
              } else {
                if (!hmove.call(this, "E")) {
                  return;
                }
              }

              cancelEvent(e);
            } else if (keyCode === KEY_DOWN) {
              if (e.ctrlKey || e.metaKey) {
                move(this, "S", null);
              } else {
                if (!vmove.call(this, "S")) {
                  return;
                }
              }

              cancelEvent(e);
            } else if (keyCode === KEY_HOME) {
              if (e.ctrlKey || e.metaKey) {
                move(this, "N", "W");
              } else {
                move(this, null, "W");
              }

              cancelEvent(e);
            } else if (keyCode === KEY_END) {
              if (e.ctrlKey || e.metaKey) {
                move(this, "S", "E");
              } else {
                move(this, null, "E");
              }

              cancelEvent(e);
            } else if (((_a = this.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnTab) && keyCode === KEY_TAB) {
              if (shiftKey) {
                if (!hmove.call(this, "W", false)) {
                  var row = this.getMoveUpRowByKeyDownInternal(focusCell);

                  if (0 > row) {
                    return;
                  }

                  _moveFocusCell.call(this, this.colCount - 1, row, false);
                }
              } else {
                if (!hmove.call(this, "E", false)) {
                  var _row3 = this.getMoveDownRowByKeyDownInternal(focusCell);

                  if (this.rowCount <= _row3) {
                    return;
                  }

                  _moveFocusCell.call(this, 0, _row3, false);
                }
              }

              cancelEvent(e);
            } else if (((_b = this.keyboardOptions) === null || _b === void 0 ? void 0 : _b.moveCellOnEnter) && keyCode === KEY_ENTER) {
              if (shiftKey) {
                if (!vmove.call(this, "N", false)) {
                  var col = this.getMoveLeftColByKeyDownInternal(focusCell);

                  if (0 > col) {
                    return;
                  }

                  _moveFocusCell.call(this, col, this.rowCount - 1, false);
                }
              } else {
                if (!vmove.call(this, "S", false)) {
                  var _col3 = this.getMoveRightColByKeyDownInternal(focusCell);

                  if (this.colCount <= _col3) {
                    return;
                  }

                  _moveFocusCell.call(this, _col3, Math.min(this.frozenRowCount, this.rowCount - 1), false);
                }
              }

              cancelEvent(e);
            } else if (((_c = this.keyboardOptions) === null || _c === void 0 ? void 0 : _c.selectAllOnCtrlA) && keyCode === KEY_ALPHA_A && (e.ctrlKey || e.metaKey)) {
              this.selection.range = {
                start: {
                  col: 0,
                  row: 0
                },
                end: {
                  col: this.colCount - 1,
                  row: this.rowCount - 1
                }
              };
              this.invalidate();
              cancelEvent(e);
            }

            function move(grid, vDir, hDir) {
              var row = vDir === "S" ? grid.rowCount - 1 : vDir === "N" ? 0 : focusCell.row;
              var col = hDir === "E" ? grid.colCount - 1 : hDir === "W" ? 0 : focusCell.col;

              _moveFocusCell.call(grid, col, row, shiftKey);
            }

            function vmove(vDir) {
              var shiftKeyFlg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : shiftKey;
              var row;

              if (vDir === "S") {
                row = this.getMoveDownRowByKeyDownInternal(focusCell);

                if (this.rowCount <= row) {
                  return false;
                }
              } else {
                row = this.getMoveUpRowByKeyDownInternal(focusCell);

                if (row < 0) {
                  return false;
                }
              }

              var col = focusCell.col;

              _moveFocusCell.call(this, col, row, shiftKeyFlg);

              return true;
            }

            function hmove(hDir) {
              var shiftKeyFlg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : shiftKey;
              var col;

              if (hDir === "E") {
                col = this.getMoveRightColByKeyDownInternal(focusCell);

                if (this.colCount <= col) {
                  return false;
                }
              } else {
                col = this.getMoveLeftColByKeyDownInternal(focusCell);

                if (col < 0) {
                  return false;
                }
              }

              var row = focusCell.row;

              _moveFocusCell.call(this, col, row, shiftKeyFlg);

              return true;
            }
          }
          /** @private */


          function _moveFocusCell(col, row, shiftKey) {
            var offset = this.getOffsetInvalidateCells();

            function extendRange(range) {
              if (offset > 0) {
                range.start.col -= offset;
                range.start.row -= offset;
                range.end.col += offset;
                range.end.row += offset;
              }

              return range;
            }

            var beforeRange = extendRange(this.selection.range);
            var beforeRect = this.getCellRangeRect(beforeRange);

            this.selection._setFocusCell(col, row, shiftKey);

            this.makeVisibleCell(col, row);
            this.focusCell(col, row);
            var afterRange = extendRange(this.selection.range);
            var afterRect = this.getCellRangeRect(afterRange);

            if (afterRect.intersection(beforeRect)) {
              var invalidateRect = Rect_1.Rect.max(afterRect, beforeRect);

              _invalidateRect(this, invalidateRect);
            } else {
              _invalidateRect(this, beforeRect);

              _invalidateRect(this, afterRect);
            }
          }
          /** @private */


          function _updatedSelection() {
            var focusControl = this[_].focusControl;
            var _this$_$selection$sel = this[_].selection.select,
                selCol = _this$_$selection$sel.col,
                selRow = _this$_$selection$sel.row;
            var results = this.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.EDITABLEINPUT_CELL, {
              col: selCol,
              row: selRow
            });
            var editMode = utils_1.array.findIndex(results, function (v) {
              return !!v;
            }) >= 0;
            focusControl.editMode = editMode;

            if (editMode) {
              focusControl.storeInputStatus();
              focusControl.setDefaultInputStatus();
              this.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MODIFY_STATUS_EDITABLEINPUT_CELL, {
                col: selCol,
                row: selRow,
                input: focusControl.input
              });
            }
          }
          /** @private */


          function _getMouseAbstractPoint(grid, evt) {
            var e;

            if (isTouchEvent(evt)) {
              e = evt.changedTouches[0];
            } else {
              e = evt;
            }

            var clientX = e.clientX || e.pageX + window.scrollX;
            var clientY = e.clientY || e.pageY + window.scrollY;

            var rect = grid[_].canvas.getBoundingClientRect();

            if (rect.right <= clientX) {
              return null;
            }

            if (rect.bottom <= clientY) {
              return null;
            }

            var x = clientX - rect.left + grid[_].scroll.left;
            var y = clientY - rect.top + grid[_].scroll.top;
            return {
              x: x,
              y: y
            };
          }
          /** @private */


          function _bindEvents() {
            // eslint-disable-next-line consistent-this, @typescript-eslint/no-this-alias
            var grid = this;
            var _grid$_ = grid[_],
                handler = _grid$_.handler,
                element = _grid$_.element,
                scrollable = _grid$_.scrollable;

            var getCellEventArgsSet = function getCellEventArgsSet(e) {
              var abstractPos = _getMouseAbstractPoint(grid, e);

              if (!abstractPos) {
                return {};
              }

              var cell = grid.getCellAt(abstractPos.x, abstractPos.y);

              if (cell.col < 0 || cell.row < 0) {
                return {
                  abstractPos: abstractPos,
                  cell: cell
                };
              }

              var eventArgs = {
                col: cell.col,
                row: cell.row,
                event: e
              };
              return {
                abstractPos: abstractPos,
                cell: cell,
                eventArgs: eventArgs
              };
            };

            var canResizeColumn = function canResizeColumn(col) {
              if (grid[_].disableColumnResize) {
                return false;
              }

              var limit = grid[_].colWidthsLimit[col];

              if (!limit || !limit.min || !limit.max) {
                return true;
              }

              return limit.max !== limit.min;
            };

            handler.on(element, "mousedown", function (e) {
              var eventArgsSet = getCellEventArgsSet(e);
              var abstractPos = eventArgsSet.abstractPos,
                  eventArgs = eventArgsSet.eventArgs;

              if (!abstractPos) {
                return;
              }

              if (eventArgs) {
                var results = grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEDOWN_CELL, eventArgs);

                if (utils_1.array.findIndex(results, function (v) {
                  return !v;
                }) >= 0) {
                  return;
                }
              }

              if (getMouseButtons(e) !== 1) {
                return;
              }

              var resizeCol = _getResizeColAt(grid, abstractPos.x, abstractPos.y);

              if (resizeCol >= 0 && canResizeColumn(resizeCol)) {
                //幅変更
                grid[_].columnResizer.start(resizeCol, e);
              } else {
                //選択
                grid[_].cellSelector.start(e);
              }
            });
            handler.on(element, "mouseup", function (e) {
              if (!grid.hasListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEUP_CELL)) {
                return;
              }

              var _getCellEventArgsSet = getCellEventArgsSet(e),
                  eventArgs = _getCellEventArgsSet.eventArgs;

              if (eventArgs) {
                grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEUP_CELL, eventArgs);
              }
            });
            var doubleTapBefore = null;
            var longTouchId = null;
            handler.on(element, "touchstart", function (e) {
              if (!doubleTapBefore) {
                doubleTapBefore = getCellEventArgsSet(e).eventArgs;
                setTimeout(function () {
                  doubleTapBefore = null;
                }, 350);
              } else {
                var _getCellEventArgsSet2 = getCellEventArgsSet(e),
                    eventArgs = _getCellEventArgsSet2.eventArgs;

                if (eventArgs && eventArgs.col === doubleTapBefore.col && eventArgs.row === doubleTapBefore.row) {
                  grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.DBLTAP_CELL, eventArgs);
                }

                doubleTapBefore = null;

                if (e.defaultPrevented) {
                  return;
                }
              }

              longTouchId = setTimeout(function () {
                //長押しした場合選択モード
                longTouchId = null;

                var abstractPos = _getMouseAbstractPoint(grid, e);

                if (!abstractPos) {
                  return;
                }

                var resizeCol = _getResizeColAt(grid, abstractPos.x, abstractPos.y, 15);

                if (resizeCol >= 0 && canResizeColumn(resizeCol)) {
                  //幅変更
                  grid[_].columnResizer.start(resizeCol, e);
                } else {
                  //選択
                  grid[_].cellSelector.start(e);
                }
              }, 500);
            });

            function cancel(_e) {
              if (longTouchId) {
                clearTimeout(longTouchId);
                longTouchId = null;
              }
            }

            handler.on(element, "touchcancel", cancel);
            handler.on(element, "touchmove", cancel);
            handler.on(element, "touchend", function (e) {
              if (longTouchId) {
                clearTimeout(longTouchId);

                grid[_].cellSelector.select(e);

                longTouchId = null;
              }
            });
            var isMouseover = false;
            var mouseEnterCell = null;
            var mouseOverCell = null;

            function onMouseenterCell(cell, related) {
              grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEENTER_CELL, {
                col: cell.col,
                row: cell.row,
                related: related
              });
              mouseEnterCell = cell;
            }

            function onMouseleaveCell(related) {
              var beforeMouseCell = mouseEnterCell;
              mouseEnterCell = null;

              if (beforeMouseCell) {
                grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSELEAVE_CELL, {
                  col: beforeMouseCell.col,
                  row: beforeMouseCell.row,
                  related: related
                });
              }

              return beforeMouseCell || undefined;
            }

            function onMouseoverCell(cell, related) {
              grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEOVER_CELL, {
                col: cell.col,
                row: cell.row,
                related: related
              });
              mouseOverCell = cell;
            }

            function onMouseoutCell(related) {
              var beforeMouseCell = mouseOverCell;
              mouseOverCell = null;

              if (beforeMouseCell) {
                grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEOUT_CELL, {
                  col: beforeMouseCell.col,
                  row: beforeMouseCell.row,
                  related: related
                });
              }

              return beforeMouseCell || undefined;
            }

            var scrollElement = scrollable.getElement();
            handler.on(scrollElement, "mouseover", function (_e) {
              isMouseover = true;
            });
            handler.on(scrollElement, "mouseout", function (_e) {
              isMouseover = false;
              onMouseoutCell();
            });
            handler.on(element, "mouseleave", function (_e) {
              onMouseleaveCell();
            });
            handler.on(element, "mousemove", function (e) {
              var eventArgsSet = getCellEventArgsSet(e);
              var abstractPos = eventArgsSet.abstractPos,
                  eventArgs = eventArgsSet.eventArgs;

              if (eventArgs) {
                var beforeMouseCell = mouseEnterCell;

                if (beforeMouseCell) {
                  grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEMOVE_CELL, eventArgs);

                  if (beforeMouseCell.col !== eventArgs.col || beforeMouseCell.row !== eventArgs.row) {
                    var enterCell = {
                      col: eventArgs.col,
                      row: eventArgs.row
                    };
                    var outCell = onMouseoutCell(enterCell);
                    var leaveCell = onMouseleaveCell(enterCell);
                    onMouseenterCell(enterCell, leaveCell);

                    if (isMouseover) {
                      onMouseoverCell(enterCell, outCell);
                    }
                  } else if (isMouseover && !mouseOverCell) {
                    onMouseoverCell({
                      col: eventArgs.col,
                      row: eventArgs.row
                    });
                  }
                } else {
                  var _enterCell = {
                    col: eventArgs.col,
                    row: eventArgs.row
                  };
                  onMouseenterCell(_enterCell);

                  if (isMouseover) {
                    onMouseoverCell(_enterCell);
                  }

                  grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEMOVE_CELL, eventArgs);
                }
              } else {
                onMouseoutCell();
                onMouseleaveCell();
              }

              if (grid[_].columnResizer.moving(e) || grid[_].cellSelector.moving(e)) {
                return;
              }

              var style = element.style;

              if (!abstractPos) {
                if (style.cursor === "col-resize") {
                  style.cursor = "";
                }

                return;
              }

              var resizeCol = _getResizeColAt(grid, abstractPos.x, abstractPos.y);

              if (resizeCol >= 0 && canResizeColumn(resizeCol)) {
                style.cursor = "col-resize";
              } else {
                if (style.cursor === "col-resize") {
                  style.cursor = "";
                }
              }
            });
            handler.on(element, "click", function (e) {
              if (grid[_].columnResizer.lastMoving(e) || grid[_].cellSelector.lastMoving(e)) {
                return;
              }

              if (!grid.hasListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.CLICK_CELL)) {
                return;
              }

              var _getCellEventArgsSet3 = getCellEventArgsSet(e),
                  eventArgs = _getCellEventArgsSet3.eventArgs;

              if (!eventArgs) {
                return;
              }

              grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.CLICK_CELL, eventArgs);
            });
            handler.on(element, "contextmenu", function (e) {
              if (!grid.hasListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.CONTEXTMENU_CELL)) {
                return;
              }

              var _getCellEventArgsSet4 = getCellEventArgsSet(e),
                  eventArgs = _getCellEventArgsSet4.eventArgs;

              if (!eventArgs) {
                return;
              }

              grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.CONTEXTMENU_CELL, eventArgs);
            });
            handler.on(element, "dblclick", function (e) {
              if (!grid.hasListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.DBLCLICK_CELL)) {
                return;
              }

              var _getCellEventArgsSet5 = getCellEventArgsSet(e),
                  eventArgs = _getCellEventArgsSet5.eventArgs;

              if (!eventArgs) {
                return;
              }

              grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.DBLCLICK_CELL, eventArgs);
            });

            grid[_].focusControl.onKeyDown(function (evt) {
              grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.KEYDOWN, evt);
            });

            grid[_].selection.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SELECTED_CELL, function (data) {
              grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SELECTED_CELL, data, data.selected);
            });

            scrollable.onScroll(function (e) {
              _onScroll(grid, e);

              grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SCROLL, {
                event: e
              });
            });

            grid[_].focusControl.onKeyDownMove(function (e) {
              _onKeyDownMove.call(grid, e);
            });

            grid.listen("copydata", function (range) {
              var copyRange = grid.getCopyRangeInternal(range);
              var copyValue = "";

              for (var row = copyRange.start.row; row <= copyRange.end.row; row++) {
                for (var col = copyRange.start.col; col <= copyRange.end.col; col++) {
                  var copyCellValue = grid.getCopyCellValue(col, row, copyRange);

                  if (typeof Promise !== "undefined" && copyCellValue instanceof Promise) {//非同期データは取得できない
                  } else {
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    var strCellValue = "".concat(copyCellValue);

                    if (/^\[object .*\]$/.exec(strCellValue)) {//object は無視
                    } else {
                      copyValue += strCellValue;
                    }
                  }

                  if (col < copyRange.end.col) {
                    copyValue += "\t";
                  }
                }

                copyValue += "\n";
              }

              return copyValue;
            });

            grid[_].focusControl.onCopy(function (_e) {
              return utils_1.array.find(grid.fireListeners("copydata", grid[_].selection.range), utils_1.isDef);
            });

            grid[_].focusControl.onPaste(function (_ref44) {
              var value = _ref44.value,
                  event = _ref44.event;
              var normalizeValue = value.replace(/\r?\n$/, "");
              var _grid$_$selection$sel = grid[_].selection.select,
                  col = _grid$_$selection$sel.col,
                  row = _grid$_$selection$sel.row;
              var multi = /[\r\n\u2028\u2029\t]/.test(normalizeValue); // is multi cell values

              var rangeBoxValues = null;
              var pasteCellEvent = {
                col: col,
                row: row,
                value: value,
                normalizeValue: normalizeValue,
                multi: multi,

                get rangeBoxValues() {
                  return rangeBoxValues !== null && rangeBoxValues !== void 0 ? rangeBoxValues : rangeBoxValues = paste_utils_1.parsePasteRangeBoxValues(normalizeValue);
                },

                event: event
              };
              grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.PASTE_CELL, pasteCellEvent);
            });

            grid[_].focusControl.onInput(function (value) {
              var _grid$_$selection$sel2 = grid[_].selection.select,
                  col = _grid$_$selection$sel2.col,
                  row = _grid$_$selection$sel2.row;
              grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.INPUT_CELL, {
                col: col,
                row: row,
                value: value
              });
            });

            grid[_].focusControl.onDelete(function (event) {
              var _grid$_$selection$sel3 = grid[_].selection.select,
                  col = _grid$_$selection$sel3.col,
                  row = _grid$_$selection$sel3.row;
              grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.DELETE_CELL, {
                col: col,
                row: row,
                event: event
              });
            });

            grid[_].focusControl.onFocus(function (e) {
              grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.FOCUS_GRID, e);
              grid[_].focusedGrid = true;
              var _grid$_$selection$sel4 = grid[_].selection.select,
                  col = _grid$_$selection$sel4.col,
                  row = _grid$_$selection$sel4.row;
              grid.invalidateCell(col, row);
            });

            grid[_].focusControl.onBlur(function (e) {
              grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.BLUR_GRID, e);
              grid[_].focusedGrid = false;
              var _grid$_$selection$sel5 = grid[_].selection.select,
                  col = _grid$_$selection$sel5.col,
                  row = _grid$_$selection$sel5.row;
              grid.invalidateCell(col, row);
            });
          }
          /** @private */


          function _getResizeColAt(grid, abstractX, abstractY) {
            var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;

            if (grid[_].frozenRowCount <= 0) {
              return -1;
            }

            var frozenRect = _getFrozenRowsRect(grid);

            if (!frozenRect.inPoint(abstractX, abstractY)) {
              return -1;
            }

            var cell = grid.getCellAt(abstractX, abstractY);
            var cellRect = grid.getCellRect(cell.col, cell.row);

            if (abstractX < cellRect.left + offset) {
              return cell.col - 1;
            }

            if (cellRect.right - offset < abstractX) {
              return cell.col;
            }

            return -1;
          }
          /** @private */


          function _getVisibleRect(grid) {
            var _grid$_2 = grid[_],
                _grid$_2$scroll = _grid$_2.scroll,
                left = _grid$_2$scroll.left,
                top = _grid$_2$scroll.top,
                _grid$_2$canvas = _grid$_2.canvas,
                width = _grid$_2$canvas.width,
                height = _grid$_2$canvas.height;
            return new Rect_1.Rect(left, top, width, height);
          }
          /** @private */


          function _getScrollableVisibleRect(grid) {
            var frozenColsWidth = 0;

            if (grid[_].frozenColCount > 0) {
              //固定列がある場合固定列分描画
              var frozenRect = _getFrozenColsRect(grid);

              frozenColsWidth = frozenRect.width;
            }

            var frozenRowsHeight = 0;

            if (grid[_].frozenRowCount > 0) {
              //固定列がある場合固定列分描画
              var _frozenRect3 = _getFrozenRowsRect(grid);

              frozenRowsHeight = _frozenRect3.height;
            }

            return new Rect_1.Rect(grid[_].scrollable.scrollLeft + frozenColsWidth, grid[_].scrollable.scrollTop + frozenRowsHeight, grid[_].canvas.width - frozenColsWidth, grid[_].canvas.height - frozenRowsHeight);
          }
          /** @private */


          function _toRelativeRect(grid, absoluteRect) {
            var rect = absoluteRect.copy();

            var visibleRect = _getVisibleRect(grid);

            rect.offsetLeft(-visibleRect.left);
            rect.offsetTop(-visibleRect.top);
            return rect;
          } //end private methods
          //
          //
          //
          //

          /**
           * managing mouse down moving
           * @private
           */


          var BaseMouseDownMover = /*#__PURE__*/function () {
            function BaseMouseDownMover(grid) {
              _classCallCheck(this, BaseMouseDownMover);

              this._grid = grid;
              this._handler = new EventHandler_1.EventHandler();
              this._events = {};
              this._started = false;
              this._moved = false;
            }

            _createClass(BaseMouseDownMover, [{
              key: "moving",
              value: function moving(_e) {
                return !!this._started;
              }
            }, {
              key: "lastMoving",
              value: function lastMoving(e) {
                // mouseup後すぐに、clickイベントを反応しないようにする制御要
                if (this.moving(e)) {
                  return true;
                }

                var last = this._mouseEndPoint;

                if (!last) {
                  return false;
                }

                var pt = _getMouseAbstractPoint(this._grid, e);

                return pt != null && pt.x === last.x && pt.y === last.y;
              }
            }, {
              key: "_bindMoveAndUp",
              value: function _bindMoveAndUp(e) {
                var _this60 = this;

                var events = this._events;
                var handler = this._handler;

                if (!isTouchEvent(e)) {
                  events.mousemove = handler.on(document.body, "mousemove", function (e) {
                    return _this60._mouseMove(e);
                  });
                  events.mouseup = handler.on(document.body, "mouseup", function (e) {
                    return _this60._mouseUp(e);
                  });
                } else {
                  events.touchmove = handler.on(document.body, "touchmove", function (e) {
                    return _this60._mouseMove(e);
                  }, {
                    passive: false
                  });
                  events.touchend = handler.on(document.body, "touchend", function (e) {
                    return _this60._mouseUp(e);
                  });
                  events.touchcancel = handler.on(document.body, "touchcancel", function (e) {
                    return _this60._mouseUp(e);
                  });
                }

                this._started = true;
                this._moved = false;
              }
            }, {
              key: "_mouseMove",
              value: function _mouseMove(e) {
                if (!isTouchEvent(e)) {
                  if (getMouseButtons(e) !== 1) {
                    this._mouseUp(e);

                    return;
                  }
                }

                this._moved = this._moveInternal(e) || this._moved
                /*calculation on after*/
                ;
                cancelEvent(e);
              }
            }, {
              key: "_moveInternal",
              value: function _moveInternal(_e) {
                //protected
                return false;
              }
            }, {
              key: "_mouseUp",
              value: function _mouseUp(e) {
                var _this61 = this;

                var events = this._events;
                var handler = this._handler;
                handler.off(events.mousemove);
                handler.off(events.touchmove);
                handler.off(events.mouseup);
                handler.off(events.touchend); // handler.off(this._events.mouseleave);

                handler.off(events.touchcancel);
                this._started = false;

                this._upInternal(e); // mouseup後すぐに、clickイベントを反応しないようにする制御要


                if (this._moved) {
                  //移動が発生していたら
                  this._mouseEndPoint = _getMouseAbstractPoint(this._grid, e);
                  setTimeout(function () {
                    _this61._mouseEndPoint = null;
                  }, 10);
                }
              }
            }, {
              key: "_upInternal",
              value: function _upInternal(_e) {//protected
              }
            }, {
              key: "dispose",
              value: function dispose() {
                this._handler.dispose();
              }
            }]);

            return BaseMouseDownMover;
          }();
          /**
           * managing cell selection operation with mouse
           * @private
           */


          var CellSelector = /*#__PURE__*/function (_BaseMouseDownMover) {
            _inherits(CellSelector, _BaseMouseDownMover);

            var _super43 = _createSuper(CellSelector);

            function CellSelector() {
              _classCallCheck(this, CellSelector);

              return _super43.apply(this, arguments);
            }

            _createClass(CellSelector, [{
              key: "start",
              value: function start(e) {
                var cell = this._getTargetCell(e);

                if (!cell) {
                  return;
                }

                _moveFocusCell.call(this._grid, cell.col, cell.row, e.shiftKey);

                this._bindMoveAndUp(e);

                this._cell = cell;
                cancelEvent(e);

                _vibrate(e);
              }
            }, {
              key: "select",
              value: function select(e) {
                var cell = this._getTargetCell(e);

                if (!cell) {
                  return;
                }

                _moveFocusCell.call(this._grid, cell.col, cell.row, e.shiftKey);

                this._cell = cell;
              }
            }, {
              key: "_moveInternal",
              value: function _moveInternal(e) {
                var cell = this._getTargetCell(e);

                if (!cell) {
                  return false;
                }

                var _this$_cell = this._cell,
                    oldCol = _this$_cell.col,
                    oldRow = _this$_cell.row;
                var newCol = cell.col,
                    newRow = cell.row;

                if (oldCol === newCol && oldRow === newRow) {
                  return false;
                }

                var grid = this._grid;

                _moveFocusCell.call(grid, newCol, newRow, true); //make visible


                var makeVisibleCol = function () {
                  if (newCol < oldCol && 0 < newCol) {
                    // move left
                    return newCol - 1;
                  } else if (oldCol < newCol && newCol + 1 < grid.colCount) {
                    // move right
                    return newCol + 1;
                  }

                  return newCol;
                }();

                var makeVisibleRow = function () {
                  if (newRow < oldRow && 0 < newRow) {
                    // move up
                    return newRow - 1;
                  } else if (oldRow < newRow && newRow + 1 < grid.rowCount) {
                    // move down
                    return newRow + 1;
                  }

                  return newRow;
                }();

                if (makeVisibleCol !== newCol || makeVisibleRow !== newRow) {
                  grid.makeVisibleCell(makeVisibleCol, makeVisibleRow);
                }

                this._cell = cell;
                return true;
              }
            }, {
              key: "_getTargetCell",
              value: function _getTargetCell(e) {
                var grid = this._grid;

                var abstractPos = _getMouseAbstractPoint(grid, e);

                if (!abstractPos) {
                  return null;
                }

                var cell = grid.getCellAt(abstractPos.x, abstractPos.y);

                if (cell.col < 0 || cell.row < 0) {
                  return null;
                }

                return cell;
              }
            }]);

            return CellSelector;
          }(BaseMouseDownMover);
          /**
           * managing row width changing operation with mouse
           * @private
           */


          var ColumnResizer = /*#__PURE__*/function (_BaseMouseDownMover2) {
            _inherits(ColumnResizer, _BaseMouseDownMover2);

            var _super44 = _createSuper(ColumnResizer);

            function ColumnResizer(grid) {
              var _this62;

              _classCallCheck(this, ColumnResizer);

              _this62 = _super44.call(this, grid);
              _this62._x = -1;
              _this62._preX = -1;
              _this62._invalidateAbsoluteLeft = -1;
              _this62._targetCol = -1;
              return _this62;
            }

            _createClass(ColumnResizer, [{
              key: "start",
              value: function start(col, e) {
                var pageX;

                if (!isTouchEvent(e)) {
                  pageX = e.pageX;
                } else {
                  pageX = e.changedTouches[0].pageX;
                }

                this._x = pageX;
                this._preX = 0;

                this._bindMoveAndUp(e);

                this._targetCol = col;
                this._invalidateAbsoluteLeft = _getColsWidth(this._grid, 0, col - 1);
                cancelEvent(e);

                _vibrate(e);
              }
            }, {
              key: "_moveInternal",
              value: function _moveInternal(e) {
                var pageX = isTouchEvent(e) ? e.changedTouches[0].pageX : e.pageX;
                var x = pageX - this._x;
                var moveX = x - this._preX;
                this._preX = x;

                var pre = this._grid.getColWidth(this._targetCol);

                var afterSize = _adjustColWidth(this._grid, this._targetCol, pre + moveX);

                if (afterSize < 10 && moveX < 0) {
                  afterSize = 10;
                }

                _storeAutoColWidthExprs(this._grid);

                _setColWidth(this._grid, this._targetCol, afterSize);

                var rect = _getVisibleRect(this._grid);

                rect.left = this._invalidateAbsoluteLeft;

                _invalidateRect(this._grid, rect);

                this._grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.RESIZE_COLUMN, {
                  col: this._targetCol
                });

                return true;
              }
            }, {
              key: "_upInternal",
              value: function _upInternal(_e) {
                var grid = this._grid;

                if (grid.updateScroll()) {
                  grid.invalidate();
                }
              }
            }]);

            return ColumnResizer;
          }(BaseMouseDownMover);
          /** @private */


          function setSafeInputValue(input, value) {
            var type = input.type;
            input.type = "";
            input.value = value;

            if (type) {
              input.type = type;
            }
          }
          /**
           * Manage focus
           * @private
           */


          var FocusControl = /*#__PURE__*/function (_EventTarget_1$EventT2) {
            _inherits(FocusControl, _EventTarget_1$EventT2);

            var _super45 = _createSuper(FocusControl);

            function FocusControl(grid, parentElement, scrollable) {
              var _this63;

              _classCallCheck(this, FocusControl);

              _this63 = _super45.call(this);
              _this63._grid = grid;
              _this63._scrollable = scrollable;
              var handler = _this63._handler = new EventHandler_1.EventHandler();
              var input = _this63._input = document.createElement("input");
              input.classList.add("grid-focus-control");
              input.readOnly = true;
              parentElement.appendChild(input);
              handler.on(input, "compositionstart", function (_e) {
                input.classList.add("composition");
                input.style.font = grid.font || "16px sans-serif";
                _this63._isComposition = true;

                if (_this63._compositionEnd) {
                  clearTimeout(_this63._compositionEnd);
                  delete _this63._compositionEnd;
                }

                grid.focus();
              });
              var lastInputValue;

              var inputClear = function inputClear() {
                lastInputValue = input.value;

                if (_this63._isComposition) {
                  return;
                }

                if (lastInputValue !== "") {
                  setSafeInputValue(input, "");
                }
              };

              var handleCompositionEnd = function handleCompositionEnd() {
                _this63._isComposition = false;
                input.classList.remove("composition");
                input.style.font = "";
                var value = input.value;
                inputClear();

                if (!input.readOnly) {
                  _this63.fireListeners("input", value);
                }

                if (_this63._compositionEnd) {
                  clearTimeout(_this63._compositionEnd);
                  delete _this63._compositionEnd;
                }
              };

              handler.on(input, "compositionend", function (_e) {
                _this63._compositionEnd = setTimeout(handleCompositionEnd, 1);
              });
              handler.on(input, "keypress", function (e) {
                if (_this63._isComposition) {
                  return;
                }

                if (!input.readOnly && e.key && e.key.length === 1) {
                  if (e.ctrlKey || e.metaKey) {
                    if (e.key === "c") {//copy! for Firefox & Safari
                    } else if (e.key === "v") {//paste! for Firefox & Safari
                    }
                  } else {
                    if (e.key === " ") {
                      // Since the full-width space cannot be determined, it is processed by "input".
                      return;
                    }

                    _this63.fireListeners("input", e.key);

                    cancelEvent(e);
                  }
                }

                inputClear();
              });
              handler.on(input, "keydown", function (e) {
                var _a;

                if (_this63._isComposition) {
                  if (_this63._compositionEnd) {
                    handleCompositionEnd();
                    cancelEvent(e);
                  }

                  return;
                }

                var keyCode = getKeyCode(e);
                var stopCellMove = false;
                var evt = {
                  keyCode: keyCode,
                  event: e,
                  stopCellMoving: function stopCellMoving() {
                    stopCellMove = true;
                  }
                };

                _this63.fireListeners("keydown", evt);

                if (!input.readOnly && lastInputValue) {
                  // for Safari
                  _this63.fireListeners("input", lastInputValue);
                }

                if (!stopCellMove) _this63.fireKeyDownMove(keyCode, e);

                if (((_a = _this63._grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.deleteCellValueOnDel) && (keyCode === KEY_DEL || keyCode === KEY_BS)) {
                  _this63.fireListeners("delete", e);
                }

                inputClear();
              });
              handler.on(input, "keyup", function (_e) {
                if (_this63._isComposition) {
                  if (_this63._compositionEnd) {
                    handleCompositionEnd();
                  }
                }

                inputClear();
              });
              handler.on(input, "input", function (e) {
                if (e.data === " " || e.data === "　") {
                  // Since the full-width space cannot be determined on "keypress", it is processed by "input".
                  _this63.fireListeners("input", e.data);
                }

                inputClear();
              });

              if (utils_1.browser.IE) {
                handler.on(document, "keydown", function (e) {
                  if (e.target !== input) {
                    return;
                  }

                  var keyCode = getKeyCode(e);

                  if (keyCode === KEY_ALPHA_C && e.ctrlKey) {
                    // When text is not selected copy-event is not emit, on IE.
                    setSafeInputValue(input, "dummy");
                    input.select();
                    setTimeout(function () {
                      setSafeInputValue(input, "");
                    }, 100);
                  } else if (keyCode === KEY_ALPHA_V && e.ctrlKey) {
                    // When input is read-only paste-event is not emit, on IE.
                    if (input.readOnly) {
                      input.readOnly = false;
                      setTimeout(function () {
                        input.readOnly = true;
                        setSafeInputValue(input, "");
                      }, 10);
                    }
                  }
                });
              }

              if (utils_1.browser.Edge) {
                handler.once(document, "keydown", function (e) {
                  var _a;

                  if (!utils_1.isDescendantElement(parentElement, e.target)) {
                    return;
                  } // When the input has focus on the first page opening, the paste-event and copy-event is not emit, on Edge.


                  var dummyInput = document.createElement("input");
                  grid.getElement().appendChild(dummyInput);
                  dummyInput.focus();
                  input.focus();
                  (_a = dummyInput.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(dummyInput);
                });
              }

              handler.on(document, "paste", function (e) {
                if (!utils_1.isDescendantElement(parentElement, e.target)) {
                  return;
                }

                var pasteText = undefined;

                if (utils_1.browser.IE) {
                  // IE
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  pasteText = window.clipboardData.getData("Text");
                } else {
                  var clipboardData = e.clipboardData;

                  if (clipboardData.items) {
                    // Chrome & Firefox & Edge
                    pasteText = clipboardData.getData("text/plain");
                  } else {
                    // Safari
                    if (-1 !== Array.prototype.indexOf.call(clipboardData.types, "text/plain")) {
                      pasteText = clipboardData.getData("Text");
                    }
                  }
                }

                if (utils_1.isDef(pasteText) && pasteText.length) {
                  _this63.fireListeners("paste", {
                    value: pasteText,
                    event: e
                  });
                }
              });
              handler.on(document, "copy", function (e) {
                if (_this63._isComposition) {
                  return;
                }

                if (!utils_1.isDescendantElement(parentElement, e.target)) {
                  return;
                }

                setSafeInputValue(input, "");
                var data = utils_1.array.find(_this63.fireListeners("copy"), utils_1.isDef);

                if (utils_1.isDef(data)) {
                  cancelEvent(e);

                  if (utils_1.browser.IE) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    window.clipboardData.setData("Text", data); // IE
                  } else {
                    e.clipboardData.setData("text/plain", data); // Chrome, Firefox
                  }
                }
              });
              handler.on(input, "focus", function (e) {
                _this63.fireListeners("focus", e);
              });
              handler.on(input, "blur", function (e) {
                _this63.fireListeners("blur", e);
              });
              return _this63;
            }

            _createClass(FocusControl, [{
              key: "fireKeyDownMove",
              value: function fireKeyDownMove(keyCode, e) {
                var _a, _b, _c;

                var fn = this._keyDownMoveCallback;

                if (!fn) {
                  return;
                }

                if (this._isComposition) {
                  return;
                }

                if (keyCode === KEY_LEFT || keyCode === KEY_UP || keyCode === KEY_RIGHT || keyCode === KEY_DOWN || keyCode === KEY_HOME || keyCode === KEY_END) {
                  fn(e);
                } else if (((_a = this._grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnTab) && keyCode === KEY_TAB) {
                  fn(e);
                } else if (((_b = this._grid.keyboardOptions) === null || _b === void 0 ? void 0 : _b.moveCellOnEnter) && keyCode === KEY_ENTER) {
                  fn(e);
                } else if (((_c = this._grid.keyboardOptions) === null || _c === void 0 ? void 0 : _c.selectAllOnCtrlA) && keyCode === KEY_ALPHA_A && (e.ctrlKey || e.metaKey)) {
                  fn(e);
                }
              }
            }, {
              key: "onKeyDownMove",
              value: function onKeyDownMove(fn) {
                this._keyDownMoveCallback = fn;
              }
            }, {
              key: "onKeyDown",
              value: function onKeyDown(fn) {
                return this.listen("keydown", fn);
              }
            }, {
              key: "onInput",
              value: function onInput(fn) {
                return this.listen("input", fn);
              }
            }, {
              key: "onDelete",
              value: function onDelete(fn) {
                return this.listen("delete", fn);
              }
            }, {
              key: "onCopy",
              value: function onCopy(fn) {
                return this.listen("copy", fn);
              }
            }, {
              key: "onPaste",
              value: function onPaste(fn) {
                return this.listen("paste", fn);
              }
            }, {
              key: "onFocus",
              value: function onFocus(fn) {
                return this.listen("focus", fn);
              }
            }, {
              key: "onBlur",
              value: function onBlur(fn) {
                return this.listen("blur", fn);
              }
            }, {
              key: "focus",
              value: function focus() {
                // this._input.value = '';
                this._input.focus();
              }
            }, {
              key: "setFocusRect",
              value: function setFocusRect(rect) {
                var input = this._input;

                var top = this._scrollable.calcTop(rect.top);

                input.style.top = "".concat((top - style.getScrollBarSize()).toFixed(), "px"); //position:relative だとずれるが、IEは position:relativeじゃないと最大値まで利用できない

                input.style.left = "".concat(rect.left.toFixed(), "px");
                input.style.width = "".concat(rect.width.toFixed(), "px");
                input.style.height = "".concat(rect.height.toFixed(), "px");
              }
            }, {
              key: "resetInputStatus",
              value: function resetInputStatus() {
                var _a;

                var el = this._input;

                if (!el.classList.contains("grid-focus-control--stored-status")) {
                  return;
                }

                var composition = el.classList.contains("composition");
                var atts = el.attributes;
                var removeNames = [];

                for (var i = 0, n = atts.length; i < n; i++) {
                  var att = atts[i];

                  if (!((_a = this._inputStatus) === null || _a === void 0 ? void 0 : _a.hasOwnProperty(att.nodeName))) {
                    removeNames.push(att.name);
                  }
                }

                removeNames.forEach(function (removeName) {
                  el.removeAttribute(removeName);
                });

                for (var name in this._inputStatus) {
                  el.setAttribute(name, this._inputStatus[name]);
                }

                if (composition) {
                  el.classList.add("composition");
                  el.style.font = this._grid.font || "16px sans-serif";
                } else {
                  el.classList.remove("composition");
                }

                el.classList.remove("grid-focus-control--stored-status");
              }
            }, {
              key: "storeInputStatus",
              value: function storeInputStatus() {
                var el = this._input;

                if (el.classList.contains("grid-focus-control--stored-status")) {
                  return;
                }

                var inputStatus = this._inputStatus = {};
                var atts = el.attributes;

                for (var i = 0, n = atts.length; i < n; i++) {
                  var att = atts[i];
                  inputStatus[att.name] = att.value;
                }

                el.classList.add("grid-focus-control--stored-status");
              }
            }, {
              key: "setDefaultInputStatus",
              value: function setDefaultInputStatus() {// なぜかスクロールが少しずつずれていくことがあるのでここではセットしない。
                // this._input.style.font = this._grid.font || '16px sans-serif';
              }
            }, {
              key: "dispose",
              value: function dispose() {
                _get(_getPrototypeOf(FocusControl.prototype), "dispose", this).call(this);

                this._handler.dispose();
              }
            }, {
              key: "editMode",
              get: function get() {
                return !this._input.readOnly;
              },
              set: function set(editMode) {
                this._input.readOnly = !editMode;
              }
            }, {
              key: "input",
              get: function get() {
                return this._input;
              }
            }]);

            return FocusControl;
          }(EventTarget_1.EventTarget);
          /**
           * Selected area management
           */


          var Selection = /*#__PURE__*/function (_EventTarget_1$EventT3) {
            _inherits(Selection, _EventTarget_1$EventT3);

            var _super46 = _createSuper(Selection);

            function Selection(grid) {
              var _this64;

              _classCallCheck(this, Selection);

              _this64 = _super46.call(this);
              _this64._grid = grid;
              _this64._sel = {
                col: 0,
                row: 0
              };
              _this64._focus = {
                col: 0,
                row: 0
              };
              _this64._start = {
                col: 0,
                row: 0
              };
              _this64._end = {
                col: 0,
                row: 0
              };
              return _this64;
            }

            _createClass(Selection, [{
              key: "_setSelectCell",
              value: function _setSelectCell(col, row) {
                var _this65 = this;

                this._wrapFireSelectedEvent(function () {
                  _this65._sel = {
                    col: col,
                    row: row
                  };
                  _this65._start = {
                    col: col,
                    row: row
                  };
                });
              }
            }, {
              key: "_setFocusCell",
              value: function _setFocusCell(col, row, keepSelect) {
                var _this66 = this;

                this._wrapFireSelectedEvent(function () {
                  if (!keepSelect) {
                    _this66._setSelectCell(col, row);
                  }

                  _this66._focus = {
                    col: col,
                    row: row
                  };
                  _this66._end = {
                    col: col,
                    row: row
                  };
                });
              }
            }, {
              key: "_wrapFireSelectedEvent",
              value: function _wrapFireSelectedEvent(callback) {
                if (this._isWraped) {
                  callback();
                } else {
                  this._isWraped = true;

                  try {
                    var before = {
                      col: this._sel.col,
                      row: this._sel.row,
                      selected: false
                    };
                    callback();
                    var after = {
                      col: this._sel.col,
                      row: this._sel.row,
                      selected: true,
                      before: {
                        col: before.col,
                        row: before.row
                      }
                    };
                    before.after = {
                      col: after.col,
                      row: after.row
                    };
                    this.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SELECTED_CELL, before);
                    this.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SELECTED_CELL, after);
                  } finally {
                    this._isWraped = false;
                  }
                }
              }
            }, {
              key: "_updateGridRange",
              value: function _updateGridRange() {
                var _this$_grid = this._grid,
                    rowCount = _this$_grid.rowCount,
                    colCount = _this$_grid.colCount;
                var points = [this._sel, this._focus, this._start, this._end];
                var needChange = false;

                for (var i = 0; i < points.length; i++) {
                  if (colCount <= points[i].col || rowCount <= points[i].row) {
                    needChange = true;
                    break;
                  }
                }

                if (!needChange) {
                  return false;
                }

                this._wrapFireSelectedEvent(function () {
                  points.forEach(function (p) {
                    p.col = Math.min(colCount - 1, p.col);
                    p.row = Math.min(rowCount - 1, p.row);
                  });
                });

                return true;
              }
            }, {
              key: "range",
              get: function get() {
                var start = this._start;
                var end = this._end;
                var startCol = Math.min(start.col, end.col);
                var startRow = Math.min(start.row, end.row);
                var endCol = Math.max(start.col, end.col);
                var endRow = Math.max(start.row, end.row);
                return {
                  start: {
                    col: startCol,
                    row: startRow
                  },
                  end: {
                    col: endCol,
                    row: endRow
                  }
                };
              },
              set: function set(range) {
                var _this67 = this;

                var startCol = Math.min(range.start.col, range.end.col);
                var startRow = Math.min(range.start.row, range.end.row);
                var endCol = Math.max(range.start.col, range.end.col);
                var endRow = Math.max(range.start.row, range.end.row);

                this._wrapFireSelectedEvent(function () {
                  _this67._sel = {
                    col: startCol,
                    row: startRow
                  };
                  _this67._focus = {
                    col: startCol,
                    row: startRow
                  };
                  _this67._start = {
                    col: startCol,
                    row: startRow
                  };
                  _this67._end = {
                    col: endCol,
                    row: endRow
                  };

                  _updatedSelection.call(_this67._grid);
                });
              }
            }, {
              key: "focus",
              get: function get() {
                var _this$_focus = this._focus,
                    col = _this$_focus.col,
                    row = _this$_focus.row;
                return {
                  col: col,
                  row: row
                };
              }
            }, {
              key: "select",
              get: function get() {
                var _this$_sel = this._sel,
                    col = _this$_sel.col,
                    row = _this$_sel.row;
                return {
                  col: col,
                  row: row
                };
              },
              set: function set(cell) {
                var _this68 = this;

                this._wrapFireSelectedEvent(function () {
                  var _cell$col = cell.col,
                      col = _cell$col === void 0 ? 0 : _cell$col,
                      _cell$row = cell.row,
                      row = _cell$row === void 0 ? 0 : _cell$row;

                  _this68._setSelectCell(col, row);

                  _this68._setFocusCell(col, row, true);

                  _updatedSelection.call(_this68._grid);
                });
              }
            }]);

            return Selection;
          }(EventTarget_1.EventTarget);
          /**
           * This class manages the drawing process for each layer
           */

          /** @private */


          var DrawLayers = /*#__PURE__*/function () {
            function DrawLayers() {
              _classCallCheck(this, DrawLayers);

              this._layers = {};
            }

            _createClass(DrawLayers, [{
              key: "addDraw",
              value: function addDraw(level, fn) {
                var l = this._layers[level] || (this._layers[level] = new DrawLayer(level));
                l.addDraw(fn);
              }
            }, {
              key: "draw",
              value: function draw(ctx) {
                var list = [];

                for (var k in this._layers) {
                  list.push(this._layers[k]);
                }

                list.sort(function (a, b) {
                  return a.level - b.level;
                });
                list.forEach(function (l) {
                  return l.draw(ctx);
                });
              }
            }]);

            return DrawLayers;
          }();
          /** @private */


          var DrawLayer = /*#__PURE__*/function () {
            function DrawLayer(level) {
              _classCallCheck(this, DrawLayer);

              this._level = level;
              this._list = [];
            }

            _createClass(DrawLayer, [{
              key: "addDraw",
              value: function addDraw(fn) {
                this._list.push(fn);
              }
            }, {
              key: "draw",
              value: function draw(ctx) {
                this._list.forEach(function (fn) {
                  ctx.save();

                  try {
                    fn(ctx);
                  } finally {
                    ctx.restore();
                  }
                });
              }
            }, {
              key: "level",
              get: function get() {
                return this._level;
              }
            }]);

            return DrawLayer;
          }();
          /**
           * Context of cell drawing
           * @private
           */


          var DrawCellContext = /*#__PURE__*/function () {
            //  private _grid: any;
            //  private _onTerminate: any;

            /**
             * constructor
             * @param {number} col index of column
             * @param {number} row index of row
             * @param {CanvasRenderingContext2D} ctx context
             * @param {Rect} rect rect of cell area
             * @param {Rect} drawRect rect of drawing area
             * @param {boolean} drawing `true` if drawing is in progress
             * @param {object} selection the selection
             * @param {Array} drawLayers array of draw layers
             * @private
             */
            function DrawCellContext(col, row, ctx, rect, drawRect, drawing, selection, drawLayers) {
              _classCallCheck(this, DrawCellContext);

              this._rectFilter = null;
              this._col = col;
              this._row = row;
              this._mode = 0;
              this._ctx = ctx;
              this._rect = rect;
              this._drawRect = drawRect;
              this._drawing = drawing;
              this._selection = selection;
              this._drawLayers = drawLayers;
              this._childContexts = [];
            }

            _createClass(DrawCellContext, [{
              key: "cancel",
              value: function cancel() {
                this._cancel = true;

                this._childContexts.forEach(function (ctx) {
                  ctx.cancel();
                });
              }
              /**
               * select status.
               * @return {object} select status
               */

            }, {
              key: "getSelection",
              value: function getSelection() {
                return {
                  select: this._selection.select,
                  range: this._selection.range
                };
              }
              /**
               * Canvas context.
               * @return {CanvasRenderingContext2D} Canvas context.
               */

            }, {
              key: "getContext",
              value: function getContext() {
                if (this._mode === 0) {
                  return this._ctx;
                } else {
                  return _getInitContext.call(this._grid);
                }
              }
              /**
               * Rectangle of cell.
               * @return {Rect} rect Rectangle of cell.
               */

            }, {
              key: "getRect",
              value: function getRect() {
                var rectFilter = this._rectFilter;
                return rectFilter ? rectFilter(this._getRectInternal()) : this._getRectInternal();
              }
            }, {
              key: "setRectFilter",
              value: function setRectFilter(rectFilter) {
                this._rectFilter = rectFilter;
              }
              /**
               * Rectangle of Drawing range.
               * @return {Rect} Rectangle of Drawing range.
               */

            }, {
              key: "getDrawRect",
              value: function getDrawRect() {
                if (this._cancel) {
                  return null;
                }

                if (this._mode === 0) {
                  return this._drawRect;
                } else {
                  if (this._isOutOfRange()) {
                    return null;
                  }

                  var absoluteRect = this._grid.getCellRect(this._col, this._row);

                  return this._toRelativeDrawRect(absoluteRect);
                }
              }
            }, {
              key: "_isOutOfRange",
              value: function _isOutOfRange() {
                var _this$_grid2 = this._grid,
                    colCount = _this$_grid2.colCount,
                    rowCount = _this$_grid2.rowCount;
                return colCount <= this._col || rowCount <= this._row;
              }
              /**
               * get Context of current state
               * @return {DrawCellContext} current DrawCellContext.
               */

            }, {
              key: "toCurrentContext",
              value: function toCurrentContext() {
                if (this._mode === 0) {
                  return this;
                } else {
                  var absoluteRect = this._grid.getCellRect(this._col, this._row);

                  var rect = _toRelativeRect(this._grid, absoluteRect);

                  var drawRect = this._isOutOfRange() ? null : this._toRelativeDrawRect(absoluteRect);
                  var context = new DrawCellContext(this._col, this._row, this.getContext(), rect, drawRect, this.drawing, this._selection, this._drawLayers); // toCurrentContext は自分の toCurrentContextを呼ばせる

                  context.toCurrentContext = this.toCurrentContext.bind(this);

                  this._childContexts.push(context);

                  if (this._cancel) {
                    context.cancel();
                  }

                  context._rectFilter = this._rectFilter;
                  return context;
                }
              }
            }, {
              key: "addLayerDraw",
              value: function addLayerDraw(level, fn) {
                this._drawLayers.addDraw(level, fn);
              }
            }, {
              key: "_toRelativeDrawRect",
              value: function _toRelativeDrawRect(absoluteRect) {
                var visibleRect = _getVisibleRect(this._grid);

                var rect = absoluteRect.copy();

                if (!rect.intersection(visibleRect)) {
                  return null;
                }

                var grid = this._grid;
                var isFrozenCell = grid.isFrozenCell(this._col, this._row);

                if (grid.frozenColCount >= 0 && (!isFrozenCell || !isFrozenCell.col)) {
                  var fRect = grid.getCellRect(grid.frozenColCount - 1, this._row);
                  rect = Rect_1.Rect.bounds(Math.max(rect.left, fRect.right), rect.top, rect.right, rect.bottom);
                }

                if (grid.frozenRowCount >= 0 && (!isFrozenCell || !isFrozenCell.row)) {
                  var _fRect = grid.getCellRect(this._col, grid.frozenRowCount - 1);

                  rect = Rect_1.Rect.bounds(rect.left, Math.max(rect.top, _fRect.bottom), rect.right, rect.bottom);
                }

                if (!rect.intersection(visibleRect)) {
                  return null;
                }

                rect.offsetLeft(-visibleRect.left);
                rect.offsetTop(-visibleRect.top);
                return rect;
              }
            }, {
              key: "_delayMode",
              value: function _delayMode(grid, onTerminate) {
                this._mode = 1;
                this._ctx = null;
                this._rect = null;
                this._drawRect = null;
                this._grid = grid;
                this._onTerminate = onTerminate;
              }
              /**
               * terminate
               * @return {void}
               */

            }, {
              key: "terminate",
              value: function terminate() {
                var _a;

                if (this._mode !== 0) {
                  (_a = this._onTerminate) === null || _a === void 0 ? void 0 : _a.call(this);
                }
              }
            }, {
              key: "_getRectInternal",
              value: function _getRectInternal() {
                if (this._mode === 0) {
                  return this._rect;
                } else {
                  if (this._rect) {
                    return this._rect;
                  }

                  return this._grid.getCellRelativeRect(this._col, this._row);
                }
              }
            }, {
              key: "drawing",
              get: function get() {
                if (this._mode === 0) {
                  return this._drawing;
                } else {
                  return true;
                }
              }
            }, {
              key: "row",
              get: function get() {
                return this._row;
              }
            }, {
              key: "col",
              get: function get() {
                return this._col;
              }
            }]);

            return DrawCellContext;
          }();
          /** @private */


          var protectedKey = _;
          /**
           * DrawGrid
           * @classdesc cheetahGrid.core.DrawGrid
           * @memberof cheetahGrid.core
           */

          var DrawGrid = /*#__PURE__*/function (_EventTarget_1$EventT4) {
            _inherits(DrawGrid, _EventTarget_1$EventT4);

            var _super47 = _createSuper(DrawGrid);

            function DrawGrid() {
              var _this69;

              var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, DrawGrid);

              _this69 = _super47.call(this);
              var _options$rowCount = options.rowCount,
                  rowCount = _options$rowCount === void 0 ? 10 : _options$rowCount,
                  _options$colCount = options.colCount,
                  colCount = _options$colCount === void 0 ? 10 : _options$colCount,
                  _options$frozenColCou = options.frozenColCount,
                  frozenColCount = _options$frozenColCou === void 0 ? 0 : _options$frozenColCou,
                  _options$frozenRowCou = options.frozenRowCount,
                  frozenRowCount = _options$frozenRowCou === void 0 ? 0 : _options$frozenRowCou,
                  _options$defaultRowHe = options.defaultRowHeight,
                  defaultRowHeight = _options$defaultRowHe === void 0 ? 40 : _options$defaultRowHe,
                  _options$defaultColWi = options.defaultColWidth,
                  defaultColWidth = _options$defaultColWi === void 0 ? 80 : _options$defaultColWi,
                  font = options.font,
                  underlayBackgroundColor = options.underlayBackgroundColor,
                  keyboardOptions = options.keyboardOptions,
                  parentElement = options.parentElement,
                  disableColumnResize = options.disableColumnResize;
              var protectedSpace = _this69[_] = {};
              style.initDocument();
              protectedSpace.element = createRootElement();
              protectedSpace.scrollable = new Scrollable_1.Scrollable();
              protectedSpace.handler = new EventHandler_1.EventHandler();
              protectedSpace.selection = new Selection(_assertThisInitialized(_this69));
              protectedSpace.focusControl = new FocusControl(_assertThisInitialized(_this69), protectedSpace.scrollable.getElement(), protectedSpace.scrollable);
              protectedSpace.canvas = hiDPI.transform(document.createElement("canvas"));
              protectedSpace.context = protectedSpace.canvas.getContext("2d", {
                alpha: false
              });
              protectedSpace.rowCount = rowCount;
              protectedSpace.colCount = colCount;
              protectedSpace.frozenColCount = frozenColCount;
              protectedSpace.frozenRowCount = frozenRowCount;
              protectedSpace.defaultRowHeight = defaultRowHeight;
              protectedSpace.defaultColWidth = defaultColWidth;
              protectedSpace.font = font;
              protectedSpace.underlayBackgroundColor = underlayBackgroundColor;
              protectedSpace.keyboardOptions = keyboardOptions;
              protectedSpace.disableColumnResize = disableColumnResize; /////

              protectedSpace.rowHeightsMap = new NumberMap_1.NumberMap();
              protectedSpace.colWidthsMap = new NumberMap_1.NumberMap();
              protectedSpace.colWidthsLimit = {};
              protectedSpace.calcWidthContext = {
                _: protectedSpace,

                get full() {
                  return this._.canvas.width;
                },

                get em() {
                  return canvases_1.getFontSize(this._.context, this._.font).width;
                }

              };
              protectedSpace.columnResizer = new ColumnResizer(_assertThisInitialized(_this69));
              protectedSpace.cellSelector = new CellSelector(_assertThisInitialized(_this69));
              protectedSpace.drawCells = {};
              protectedSpace.cellTextOverflows = {};
              protectedSpace.focusedGrid = false;
              protectedSpace.element.appendChild(protectedSpace.canvas);
              protectedSpace.element.appendChild(protectedSpace.scrollable.getElement());
              protectedSpace.scroll = {
                left: 0,
                top: 0
              };

              _this69.updateScroll();

              if (parentElement) {
                parentElement.appendChild(protectedSpace.element);

                _this69.updateSize();
              } else {
                _this69.updateSize();
              }

              _bindEvents.call(_assertThisInitialized(_this69));

              _this69.bindEventsInternal();

              return _this69;
            }

            _createClass(DrawGrid, [{
              key: "getElement",

              /**
               * Get root element.
               * @returns {HTMLElement} root element
               */
              value: function getElement() {
                return this[_].element;
              }
              /**
               * Get canvas element.
               */

            }, {
              key: "focus",

              /**
               * Focus the grid.
               * @return {void}
               */
              value: function focus() {
                var _this$_$selection$sel2 = this[_].selection.select,
                    col = _this$_$selection$sel2.col,
                    row = _this$_$selection$sel2.row;
                this.focusCell(col, row);
              }
            }, {
              key: "hasFocusGrid",
              value: function hasFocusGrid() {
                return this[_].focusedGrid;
              }
              /**
               * Get the selection instance.
               */

            }, {
              key: "configure",
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              value: function configure(name, value) {
                var cfg = this[_].config || (this[_].config = {});

                if (utils_1.isDef(value)) {
                  cfg[name] = value;
                }

                return cfg[name];
              }
              /**
               * Apply the changed size.
               * @return {void}
               */

            }, {
              key: "updateSize",
              value: function updateSize() {
                //スタイルをクリアしてサイズ値を取得
                var canvas = this[_].canvas;
                canvas.style.width = "";
                canvas.style.height = "";
                var width = Math.floor(canvas.offsetWidth || canvas.parentElement.offsetWidth - style.getScrollBarSize()
                /*for legacy*/
                );
                var height = Math.floor(canvas.offsetHeight || canvas.parentElement.offsetHeight - style.getScrollBarSize()
                /*for legacy*/
                );
                canvas.width = width;
                canvas.height = height; //整数で一致させるためstyleをセットして返す

                canvas.style.width = "".concat(width, "px");
                canvas.style.height = "".concat(height, "px");
                var sel = this[_].selection.select;

                this[_].focusControl.setFocusRect(this.getCellRect(sel.col, sel.row));
              }
              /**
               * Apply the changed scroll size.
               * @return {boolean} `true` if there was a change in the scroll size
               */

            }, {
              key: "updateScroll",
              value: function updateScroll() {
                var scrollable = this[_].scrollable;

                var newHeight = _getScrollHeight.call(this);

                var newWidth = _getScrollWidth(this);

                if (newHeight === scrollable.scrollHeight && newWidth === scrollable.scrollWidth) {
                  return false;
                }

                scrollable.setScrollSize(newWidth, newHeight);
                this[_].scroll = {
                  left: scrollable.scrollLeft,
                  top: scrollable.scrollTop
                };
                return true;
              }
              /**
               * Get the row height of the given the row index.
               * @param  {number} row The row index
               * @return {number} The row height
               */

            }, {
              key: "getRowHeight",
              value: function getRowHeight(row) {
                return _getRowHeight.call(this, row);
              }
              /**
               * Set the row height of the given the row index.
               * @param  {number} row The row index
               * @param  {number} height The row height
               * @return {void}
               */

            }, {
              key: "setRowHeight",
              value: function setRowHeight(row, height) {
                _setRowHeight(this, row, height);
              }
              /**
               * Get the column width of the given the column index.
               * @param  {number} col The column index
               * @return {number} The column width
               */

            }, {
              key: "getColWidth",
              value: function getColWidth(col) {
                return _getColWidth(this, col);
              }
              /**
               * Set the column widtht of the given the column index.
               * @param  {number} col The column index
               * @param  {number} width The column width
               * @return {void}
               */

            }, {
              key: "setColWidth",
              value: function setColWidth(col, width) {
                _setColWidth(this, col, width);
              }
              /**
               * Get the column max width of the given the column index.
               * @param  {number} col The column index
               * @return {number} The column max width
               */

            }, {
              key: "getMaxColWidth",
              value: function getMaxColWidth(col) {
                var obj = this[_].colWidthsLimit[col];
                return obj && obj.max || undefined;
              }
              /**
               * Set the column max widtht of the given the column index.
               * @param  {number} col The column index
               * @param  {number} maxwidth The column max width
               * @return {void}
               */

            }, {
              key: "setMaxColWidth",
              value: function setMaxColWidth(col, maxwidth) {
                var obj = this[_].colWidthsLimit[col] || (this[_].colWidthsLimit[col] = {});
                obj.max = maxwidth;
              }
              /**
               * Get the column min width of the given the column index.
               * @param  {number} col The column index
               * @return {number} The column min width
               */

            }, {
              key: "getMinColWidth",
              value: function getMinColWidth(col) {
                var obj = this[_].colWidthsLimit[col];
                return obj && obj.min || undefined;
              }
              /**
               * Set the column min widtht of the given the column index.
               * @param  {number} col The column index
               * @param  {number} minwidth The column min width
               * @return {void}
               */

            }, {
              key: "setMinColWidth",
              value: function setMinColWidth(col, minwidth) {
                var obj = this[_].colWidthsLimit[col] || (this[_].colWidthsLimit[col] = {});
                obj.min = minwidth;
              }
              /**
               * Get the rect of the cell.
               * @param {number} col index of column, of the cell
               * @param {number} row index of row, of the cell
               * @returns {Rect} the rect of the cell.
               */

            }, {
              key: "getCellRect",
              value: function getCellRect(col, row) {
                var isFrozenCell = this.isFrozenCell(col, row);

                var absoluteLeft = _getColsWidth(this, 0, col - 1);

                var width = _getColWidth(this, col);

                if (isFrozenCell && isFrozenCell.col) {
                  absoluteLeft += this[_].scroll.left;
                }

                var absoluteTop = _getRowsHeight.call(this, 0, row - 1);

                var height = _getRowHeight.call(this, row);

                if (isFrozenCell && isFrozenCell.row) {
                  absoluteTop += this[_].scroll.top;
                }

                return new Rect_1.Rect(absoluteLeft, absoluteTop, width, height);
              }
              /**
               * Get the relative rectangle of the cell.
               * @param {number} col index of column, of the cell
               * @param {number} row index of row, of the cell
               * @returns {Rect} the rect of the cell.
               */

            }, {
              key: "getCellRelativeRect",
              value: function getCellRelativeRect(col, row) {
                return _toRelativeRect(this, this.getCellRect(col, row));
              }
              /**
               * Get the rectangle of the cells area.
               * @param {number} startCol index of the starting column, of the cell
               * @param {number} startRow index of the starting row, of the cell
               * @param {number} endCol index of the ending column, of the cell
               * @param {number} endRow index of the ending row, of the cell
               * @returns {Rect} the rect of the cells.
               */

            }, {
              key: "getCellsRect",
              value: function getCellsRect(startCol, startRow, endCol, endRow) {
                var isFrozenStartCell = this.isFrozenCell(startCol, startRow);
                var isFrozenEndCell = this.isFrozenCell(endCol, endRow);

                var absoluteLeft = _getColsWidth(this, 0, startCol - 1);

                var width = _getColsWidth(this, startCol, endCol);

                if (isFrozenStartCell && isFrozenStartCell.col) {
                  var scrollLeft = this[_].scroll.left;
                  absoluteLeft += scrollLeft;

                  if (!isFrozenEndCell || !isFrozenEndCell.col) {
                    width -= scrollLeft;
                    width = Math.max(width, _getColsWidth(this, startCol, this.frozenColCount - 1));
                  }
                }

                var absoluteTop = _getRowsHeight.call(this, 0, startRow - 1);

                var height = _getRowsHeight.call(this, startRow, endRow);

                if (isFrozenStartCell && isFrozenStartCell.row) {
                  var scrollTop = this[_].scroll.top;
                  absoluteTop += scrollTop;

                  if (!isFrozenEndCell || !isFrozenEndCell.row) {
                    height -= scrollTop;
                    height = Math.max(height, _getColsWidth(this, startRow, this.frozenRowCount - 1));
                  }
                }

                return new Rect_1.Rect(absoluteLeft, absoluteTop, width, height);
              }
            }, {
              key: "getCellRangeRect",
              value: function getCellRangeRect(range) {
                return this.getCellsRect(range.start.col, range.start.row, range.end.col, range.end.row);
              }
            }, {
              key: "isFrozenCell",
              value: function isFrozenCell(col, row) {
                var _this$_ = this[_],
                    frozenRowCount = _this$_.frozenRowCount,
                    frozenColCount = _this$_.frozenColCount;
                var isFrozenRow = frozenRowCount > 0 && row < frozenRowCount;
                var isFrozenCol = frozenColCount > 0 && col < frozenColCount;

                if (isFrozenRow || isFrozenCol) {
                  return {
                    row: isFrozenRow,
                    col: isFrozenCol
                  };
                } else {
                  return null;
                }
              }
            }, {
              key: "getRowAt",
              value: function getRowAt(absoluteY) {
                var frozen = _getTargetFrozenRowAt(this, absoluteY);

                if (frozen) {
                  return frozen.row;
                }

                var row = _getTargetRowAt.call(this, absoluteY);

                return row ? row.row : -1;
              }
            }, {
              key: "getColAt",
              value: function getColAt(absoluteX) {
                var frozen = _getTargetFrozenColAt(this, absoluteX);

                if (frozen) {
                  return frozen.col;
                }

                var col = _getTargetColAt(this, absoluteX);

                return col ? col.col : -1;
              }
            }, {
              key: "getCellAt",
              value: function getCellAt(absoluteX, absoluteY) {
                return {
                  row: this.getRowAt(absoluteY),
                  col: this.getColAt(absoluteX)
                };
              }
              /**
               * Scroll to where cell is visible.
               * @param  {number} col The column index.
               * @param  {number} row The row index
               * @return {void}
               */

            }, {
              key: "makeVisibleCell",
              value: function makeVisibleCell(col, row) {
                var isFrozenCell = this.isFrozenCell(col, row);

                if (isFrozenCell && isFrozenCell.col && isFrozenCell.row) {
                  return;
                }

                var rect = this.getCellRect(col, row);

                var visibleRect = _getScrollableVisibleRect(this);

                if (visibleRect.contains(rect)) {
                  return;
                }

                var scrollable = this[_].scrollable;

                if (!isFrozenCell || !isFrozenCell.col) {
                  if (rect.left < visibleRect.left) {
                    scrollable.scrollLeft -= visibleRect.left - rect.left;
                  } else if (visibleRect.right < rect.right) {
                    scrollable.scrollLeft -= visibleRect.right - rect.right;
                  }
                }

                if (!isFrozenCell || !isFrozenCell.row) {
                  if (rect.top < visibleRect.top) {
                    scrollable.scrollTop -= visibleRect.top - rect.top;
                  } else if (visibleRect.bottom < rect.bottom) {
                    scrollable.scrollTop -= visibleRect.bottom - rect.bottom;
                  }
                }
              }
              /**
               * Moves the focus cursor to the given cell.
               * @param  {number} col The column index.
               * @param  {number} row The row index
               * @return {void}
               */

            }, {
              key: "setFocusCursor",
              value: function setFocusCursor(col, row) {
                var focusControl = this[_].focusControl;
                var oldEditMode = focusControl.editMode;
                focusControl.setFocusRect(this.getCellRect(col, row));

                _updatedSelection.call(this);

                if (oldEditMode && !focusControl.editMode) {
                  focusControl.resetInputStatus();
                }
              }
              /**
               * Focus the cell.
               * @param  {number} col The column index.
               * @param  {number} row The row index
               * @return {void}
               */

            }, {
              key: "focusCell",
              value: function focusCell(col, row) {
                this.setFocusCursor(col, row); // Failure occurs in IE if focus is not last

                this[_].focusControl.focus();
              }
              /**
               * Redraws the range of the given cell.
               * @param  {number} col The column index of cell.
               * @param  {number} row The row index of cell.
               * @return {void}
               */

            }, {
              key: "invalidateCell",
              value: function invalidateCell(col, row) {
                this.invalidateGridRect(col, row);
              }
              /**
               * Redraws the range of the given cells.
               * @param {number} startCol index of the starting column, of the cell
               * @param {number} startRow index of the starting row, of the cell
               * @param {number} endCol index of the ending column, of the cell
               * @param {number} endRow index of the ending row, of the cell
               * @return {void}
               */

            }, {
              key: "invalidateGridRect",
              value: function invalidateGridRect(startCol, startRow) {
                var endCol = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : startCol;
                var endRow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : startRow;
                var offset = this.getOffsetInvalidateCells();

                if (offset > 0) {
                  startCol -= offset;
                  startRow -= offset;
                  endCol += offset;
                  endRow += offset;
                }

                var visibleRect = _getVisibleRect(this);

                var cellsRect = this.getCellsRect(startCol, startRow, endCol, endRow);
                var invalidateTarget = visibleRect.intersection(cellsRect);

                if (invalidateTarget) {
                  var _this$_2 = this[_],
                      frozenColCount = _this$_2.frozenColCount,
                      frozenRowCount = _this$_2.frozenRowCount;

                  if (frozenColCount > 0 && endCol >= frozenColCount) {
                    var frozenRect = _getFrozenColsRect(this);

                    if (frozenRect.intersection(invalidateTarget)) {
                      invalidateTarget.left = Math.min(frozenRect.right - 1, invalidateTarget.left);
                    }
                  }

                  if (frozenRowCount > 0 && endRow >= frozenRowCount) {
                    var _frozenRect4 = _getFrozenRowsRect(this);

                    if (_frozenRect4.intersection(invalidateTarget)) {
                      invalidateTarget.top = Math.min(_frozenRect4.bottom - 1, invalidateTarget.top);
                    }
                  }

                  _invalidateRect(this, invalidateTarget);
                }
              }
            }, {
              key: "invalidateCellRange",
              value: function invalidateCellRange(range) {
                this.invalidateGridRect(range.start.col, range.start.row, range.end.col, range.end.row);
              }
              /**
               * Redraws the whole grid.
               * @return {void}
               */

            }, {
              key: "invalidate",
              value: function invalidate() {
                var visibleRect = _getVisibleRect(this);

                _invalidateRect(this, visibleRect);
              }
              /**
               * Get the number of scrollable rows fully visible in the grid. visibleRowCount does not include the frozen rows counted by the frozenRowCount property. It does not include any partially visible rows on the bottom of the grid.
               * @returns {number}
               */

            }, {
              key: "getCopyCellValue",

              /**
               * Get the value of cell with the copy action.
               * <p>
               * Please implement
               * </p>
               *
               * @protected
               * @param col Column index of cell.
               * @param row Row index of cell.
               * @param range Copy range.
               * @return {string} the value of cell
               */
              value: function getCopyCellValue(_col, _row, _range) {} //Please implement get cell value!!

              /**
               * Get the overflowed text in the cell rectangle, from the given cell.
               * @param  {number} col The column index.
               * @param  {number} row The row index
               * @return {string | null} The text overflowing the cell rect.
               */

            }, {
              key: "getCellOverflowText",
              value: function getCellOverflowText(col, row) {
                var key = "".concat(col, ":").concat(row);
                return this[_].cellTextOverflows[key] || null;
              }
              /**
               * Set the overflowed text in the cell rectangle, to the given cell.
               * @param  {number} col The column index.
               * @param  {number} row The row index
               * @param  {string} overflowText The overflowed text in the cell rectangle.
               * @return {void}
               */

            }, {
              key: "setCellOverflowText",
              value: function setCellOverflowText(col, row, overflowText) {
                var key = "".concat(col, ":").concat(row);

                if (overflowText) {
                  this[_].cellTextOverflows[key] = typeof overflowText === "string" ? overflowText.trim() : overflowText;
                } else {
                  delete this[_].cellTextOverflows[key];
                }
              }
            }, {
              key: "addDisposable",
              value: function addDisposable(disposable) {
                if (!disposable || !disposable.dispose || typeof disposable.dispose !== "function") {
                  throw new Error("not disposable!");
                }

                var disposables = this[_].disposables = this[_].disposables || [];
                disposables.push(disposable);
              }
              /**
               * Dispose the grid instance.
               * @returns {void}
               */

            }, {
              key: "dispose",
              value: function dispose() {
                _get(_getPrototypeOf(DrawGrid.prototype), "dispose", this).call(this);

                var protectedSpace = this[_];
                protectedSpace.handler.dispose();
                protectedSpace.scrollable.dispose();
                protectedSpace.focusControl.dispose();
                protectedSpace.columnResizer.dispose();
                protectedSpace.cellSelector.dispose();

                if (protectedSpace.disposables) {
                  protectedSpace.disposables.forEach(function (disposable) {
                    return disposable.dispose();
                  });
                  protectedSpace.disposables = null;
                }

                var parentElement = protectedSpace.element.parentElement;

                if (parentElement) {
                  parentElement.removeChild(protectedSpace.element);
                }
              }
            }, {
              key: "getAttachCellsArea",
              value: function getAttachCellsArea(range) {
                return {
                  element: this.getElement(),
                  rect: _toRelativeRect(this, this.getCellRangeRect(range))
                };
              }
            }, {
              key: "onKeyDownMove",
              value: function onKeyDownMove(evt) {
                _onKeyDownMove.call(this, evt);
              }
            }, {
              key: "bindEventsInternal",
              value: function bindEventsInternal() {//nop
              }
            }, {
              key: "getTargetRowAtInternal",
              value: function getTargetRowAtInternal(_absoluteY) {//継承用 設定を無視して計算する場合継承して実装
              }
            }, {
              key: "getRowsHeightInternal",
              value: function getRowsHeightInternal(_startRow, _endRow) {//継承用 設定を無視して計算する場合継承して実装
              }
            }, {
              key: "getRowHeightInternal",
              value: function getRowHeightInternal(_row) {//継承用 設定を無視して計算する場合継承して実装
              }
            }, {
              key: "getScrollHeightInternal",
              value: function getScrollHeightInternal(_row) {//継承用 設定を無視して計算する場合継承して実装
              }
            }, {
              key: "getMoveLeftColByKeyDownInternal",
              value: function getMoveLeftColByKeyDownInternal(_ref45) {
                var col = _ref45.col;
                return col - 1;
              }
            }, {
              key: "getMoveRightColByKeyDownInternal",
              value: function getMoveRightColByKeyDownInternal(_ref46) {
                var col = _ref46.col;
                return col + 1;
              }
            }, {
              key: "getMoveUpRowByKeyDownInternal",
              value: function getMoveUpRowByKeyDownInternal(_ref47) {
                var row = _ref47.row;
                return row - 1;
              }
            }, {
              key: "getMoveDownRowByKeyDownInternal",
              value: function getMoveDownRowByKeyDownInternal(_ref48) {
                var row = _ref48.row;
                return row + 1;
              }
            }, {
              key: "getOffsetInvalidateCells",
              value: function getOffsetInvalidateCells() {
                return 0;
              }
            }, {
              key: "getCopyRangeInternal",
              value: function getCopyRangeInternal(range) {
                return range;
              }
            }, {
              key: "_getInitContext",
              value: function _getInitContext() {
                var ctx = this[_].context; //初期化

                ctx.fillStyle = "white";
                ctx.strokeStyle = "black";
                ctx.textAlign = "left";
                ctx.textBaseline = "top";
                ctx.lineWidth = 1;
                ctx.font = this.font || "16px sans-serif";
                return ctx;
              }
            }, {
              key: "fireListeners",
              value: function fireListeners(type) {
                var _get3;

                for (var _len4 = arguments.length, event = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                  event[_key4 - 1] = arguments[_key4];
                }

                return (_get3 = _get(_getPrototypeOf(DrawGrid.prototype), "fireListeners", this)).call.apply(_get3, [this, type].concat(event));
              }
            }, {
              key: "canvas",
              get: function get() {
                return this[_].canvas;
              }
            }, {
              key: "selection",
              get: function get() {
                return this[_].selection;
              }
              /**
               * Get the number of rows.
               */

            }, {
              key: "rowCount",
              get: function get() {
                return this[_].rowCount;
              }
              /**
               * Set the number of rows.
               */
              ,
              set: function set(rowCount) {
                this[_].rowCount = rowCount;
                this.updateScroll();

                if (this[_].selection._updateGridRange()) {
                  var _this$_$selection$foc = this[_].selection.focus,
                      col = _this$_$selection$foc.col,
                      row = _this$_$selection$foc.row;
                  this.makeVisibleCell(col, row);
                  this.setFocusCursor(col, row);
                }
              }
              /**
               * Get the number of columns.
               */

            }, {
              key: "colCount",
              get: function get() {
                return this[_].colCount;
              }
              /**
               * Set the number of columns.
               */
              ,
              set: function set(colCount) {
                this[_].colCount = colCount;
                this.updateScroll();

                if (this[_].selection._updateGridRange()) {
                  var _this$_$selection$foc2 = this[_].selection.focus,
                      col = _this$_$selection$foc2.col,
                      row = _this$_$selection$foc2.row;
                  this.makeVisibleCell(col, row);
                  this.setFocusCursor(col, row);
                }
              }
              /**
               * Get the number of frozen columns.
               */

            }, {
              key: "frozenColCount",
              get: function get() {
                return this[_].frozenColCount;
              }
              /**
               * Set the number of frozen columns.
               */
              ,
              set: function set(frozenColCount) {
                this[_].frozenColCount = frozenColCount;
              }
              /**
               * Get the number of frozen rows.
               */

            }, {
              key: "frozenRowCount",
              get: function get() {
                return this[_].frozenRowCount;
              }
              /**
               * Set the number of frozen rows.
               */
              ,
              set: function set(frozenRowCount) {
                this[_].frozenRowCount = frozenRowCount;
              }
              /**
               * Get the default row height.
               *
               */

            }, {
              key: "defaultRowHeight",
              get: function get() {
                return this[_].defaultRowHeight;
              }
              /**
               * Set the default row height.
               */
              ,
              set: function set(defaultRowHeight) {
                this[_].defaultRowHeight = defaultRowHeight;
              }
              /**
               * Get the default column width.
               */

            }, {
              key: "defaultColWidth",
              get: function get() {
                return this[_].defaultColWidth;
              }
              /**
               * Set the default column width.
               */
              ,
              set: function set(defaultColWidth) {
                this[_].defaultColWidth = defaultColWidth;
              }
              /**
               * Get the font definition as a string.
               */

            }, {
              key: "font",
              get: function get() {
                return this[_].font;
              }
              /**
               * Set the font definition with the given string.
               */
              ,
              set: function set(font) {
                this[_].font = font;
              }
              /**
               * Get the background color of the underlay.
               */

            }, {
              key: "underlayBackgroundColor",
              get: function get() {
                return this[_].underlayBackgroundColor;
              }
              /**
               * Set the background color of the underlay.
               */
              ,
              set: function set(underlayBackgroundColor) {
                this[_].underlayBackgroundColor = underlayBackgroundColor;
              }
            }, {
              key: "keyboardOptions",
              get: function get() {
                var _a;

                return (_a = this[_].keyboardOptions) !== null && _a !== void 0 ? _a : null;
              },
              set: function set(keyboardOptions) {
                this[_].keyboardOptions = keyboardOptions !== null && keyboardOptions !== void 0 ? keyboardOptions : undefined;
              }
            }, {
              key: "visibleRowCount",
              get: function get() {
                var frozenRowCount = this.frozenRowCount;

                var visibleRect = _getVisibleRect(this);

                var visibleTop = frozenRowCount > 0 ? visibleRect.top + _getRowsHeight.call(this, 0, frozenRowCount - 1) : visibleRect.top;

                var initRow = _getTargetRowAt.call(this, visibleTop);

                if (!initRow) {
                  return 0;
                }

                var startRow = Math.max(initRow.top >= visibleTop ? initRow.row : initRow.row + 1, frozenRowCount);

                var absoluteTop = _getRowsHeight.call(this, 0, startRow - 1);

                var count = 0;
                var rowCount = this.rowCount;

                for (var row = startRow; row < rowCount; row++) {
                  var height = _getRowHeight.call(this, row);

                  var bottom = absoluteTop + height;

                  if (visibleRect.bottom < bottom) {
                    break;
                  }

                  count++;
                  absoluteTop = bottom;
                }

                return count;
              }
              /**
               * Get the number of scrollable columns fully visible in the grid. visibleColCount does not include the frozen columns counted by the frozenColCount property. It does not include any partially visible columns on the right of the grid.
               * @returns {number}
               */

            }, {
              key: "visibleColCount",
              get: function get() {
                var frozenColCount = this.frozenColCount;

                var visibleRect = _getVisibleRect(this);

                var visibleLeft = frozenColCount > 0 ? visibleRect.left + _getColsWidth(this, 0, frozenColCount - 1) : visibleRect.left;

                var initCol = _getTargetColAt(this, visibleLeft);

                if (!initCol) {
                  return 0;
                }

                var startCol = Math.max(initCol.left >= visibleLeft ? initCol.col : initCol.col + 1, frozenColCount);

                var absoluteLeft = _getColsWidth(this, 0, startCol - 1);

                var count = 0;
                var colCount = this.colCount;

                for (var col = startCol; col < colCount; col++) {
                  var width = _getColWidth(this, col);

                  var right = absoluteLeft + width;

                  if (visibleRect.right < right) {
                    break;
                  }

                  count++;
                  absoluteLeft = right;
                }

                return count;
              }
              /**
               * Get the index of the first row in the scrollable region that is visible.
               * @returns {number}
               */

            }, {
              key: "topRow",
              get: function get() {
                var frozenRowCount = this.frozenRowCount;

                var visibleRect = _getVisibleRect(this);

                var visibleTop = frozenRowCount > 0 ? visibleRect.top + _getRowsHeight.call(this, 0, frozenRowCount - 1) : visibleRect.top;

                var initRow = _getTargetRowAt.call(this, visibleTop);

                if (!initRow) {
                  return 0;
                }

                return Math.max(initRow.top >= visibleTop ? initRow.row : initRow.row + 1, frozenRowCount);
              }
              /**
               * Get the index of the first column in the scrollable region that is visible.
               * @returns {number}
               */

            }, {
              key: "leftCol",
              get: function get() {
                var frozenColCount = this.frozenColCount;

                var visibleRect = _getVisibleRect(this);

                var visibleLeft = frozenColCount > 0 ? visibleRect.left + _getColsWidth(this, 0, frozenColCount - 1) : visibleRect.left;

                var initCol = _getTargetColAt(this, visibleLeft);

                if (!initCol) {
                  return 0;
                }

                return Math.max(initCol.left >= visibleLeft ? initCol.col : initCol.col + 1, frozenColCount);
              }
              /**
               * gets or sets the number of pixels that an element's content is scrolled vertically
               */

            }, {
              key: "scrollTop",
              get: function get() {
                return this[_].scrollable.scrollTop;
              },
              set: function set(scrollTop) {
                this[_].scrollable.scrollTop = scrollTop;
              }
              /**
               * gets or sets the number of pixels that an element's content is scrolled from its left edge
               */

            }, {
              key: "scrollLeft",
              get: function get() {
                return this[_].scrollable.scrollLeft;
              },
              set: function set(scrollLeft) {
                this[_].scrollable.scrollLeft = scrollLeft;
              }
            }], [{
              key: "EVENT_TYPE",
              get: function get() {
                return DG_EVENT_TYPE_1.DG_EVENT_TYPE;
              }
            }]);

            return DrawGrid;
          }(EventTarget_1.EventTarget);

          exports.DrawGrid = DrawGrid;
          /***/
        },

        /***/
        "./core/EventTarget.js":
        /*!*****************************!*\
          !*** ./core/EventTarget.js ***!
          \*****************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function coreEventTargetJs(module, exports, __webpack_require__) {
          "use strict";

          var _a;

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __webpack_require__(
          /*! ../internal/utils */
          "./internal/utils.js");

          var symbolManager_1 = __webpack_require__(
          /*! ../internal/symbolManager */
          "./internal/symbolManager.js"); //private symbol

          /** @private */


          var _ = symbolManager_1.get();
          /** @private */


          var nextId = 1;
          /**
           * event target.
           */

          var EventTarget = /*#__PURE__*/function () {
            function EventTarget() {
              _classCallCheck(this, EventTarget);

              this[_a] = {
                listeners: {},
                listenerData: {}
              };
            }
            /**
             * Adds an event listener.
             * @param  {string} type The event type id.
             * @param  {function} listener Callback method.
             * @return {number} unique id for the listener.
             */


            _createClass(EventTarget, [{
              key: "listen",
              value: function listen(type, listener) {
                var _this70 = this;

                var list = this[_].listeners[type] || (this[_].listeners[type] = []);
                list.push(listener);
                var id = nextId++;
                this[_].listenerData[id] = {
                  type: type,
                  listener: listener,
                  remove: function remove() {
                    delete _this70[_].listenerData[id];
                    var index = list.indexOf(listener);
                    list.splice(index, 1);

                    if (!_this70[_].listeners[type].length) {
                      delete _this70[_].listeners[type];
                    }
                  }
                };
                return id;
              }
              /**
               * Removes an event listener which was added with listen() by the id returned by listen().
               * @param  {number} id the id returned by listen().
               * @return {void}
               */

            }, {
              key: "unlisten",
              value: function unlisten(id) {
                if (!this[_]) {
                  return;
                }

                this[_].listenerData[id].remove();
              }
            }, {
              key: "addEventListener",
              value: function addEventListener(type, listener) {
                this.listen(type, listener);
              }
            }, {
              key: "removeEventListener",
              value: function removeEventListener(type, listener) {
                var _this71 = this;

                if (!this[_]) {
                  return;
                }

                utils_1.each(this[_].listenerData, function (obj, id) {
                  if (obj.type === type && obj.listener === listener) {
                    _this71.unlisten(id);
                  }
                });
              }
            }, {
              key: "hasListeners",
              value: function hasListeners(type) {
                return !!this[_].listeners[type];
              }
              /**
               * Fires all registered listeners
               * @param  {string}    type The type of the listeners to fire.
               * @param  {...*} args fire arguments
               * @return {*} the result of the last listener
               */
              // eslint-disable-next-line @typescript-eslint/no-explicit-any

            }, {
              key: "fireListeners",
              value: function fireListeners(type) {
                var _this72 = this;

                for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
                  args[_key5 - 1] = arguments[_key5];
                }

                var list = this[_].listeners[type];

                if (!list) {
                  return [];
                }

                return list.map(function (listener) {
                  return listener.call.apply(listener, [_this72].concat(args));
                }).filter(utils_1.isDef);
              }
            }, {
              key: "dispose",
              value: function dispose() {
                delete this[_];
              }
            }]);

            return EventTarget;
          }();

          exports.EventTarget = EventTarget;
          _a = _;
          /***/
        },

        /***/
        "./data.js":
        /*!*****************!*\
          !*** ./data.js ***!
          \*****************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function dataJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var DataSource_1 = __webpack_require__(
          /*! ./data/DataSource */
          "./data/DataSource.js");

          exports.DataSource = DataSource_1.DataSource;

          var CachedDataSource_1 = __webpack_require__(
          /*! ./data/CachedDataSource */
          "./data/CachedDataSource.js");

          exports.CachedDataSource = CachedDataSource_1.CachedDataSource;

          var FilterDataSource_1 = __webpack_require__(
          /*! ./data/FilterDataSource */
          "./data/FilterDataSource.js");

          exports.FilterDataSource = FilterDataSource_1.FilterDataSource;
          /***/
        },

        /***/
        "./data/CachedDataSource.js":
        /*!**********************************!*\
          !*** ./data/CachedDataSource.js ***!
          \**********************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function dataCachedDataSourceJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var DataSource_1 = __webpack_require__(
          /*! ./DataSource */
          "./data/DataSource.js");
          /** @private */


          function _setFieldCache( // eslint-disable-next-line @typescript-eslint/no-explicit-any
          fCache, index, field, // eslint-disable-next-line @typescript-eslint/no-explicit-any
          value) {
            var recCache = fCache[index] || (fCache[index] = new Map());
            recCache.set(field, value);
          }
          /**
           * grid data source for caching Promise data
           *
           * @classdesc cheetahGrid.data.CachedDataSource
           * @memberof cheetahGrid.data
           */


          var CachedDataSource = /*#__PURE__*/function (_DataSource_1$DataSou) {
            _inherits(CachedDataSource, _DataSource_1$DataSou);

            var _super48 = _createSuper(CachedDataSource);

            function CachedDataSource(opt) {
              var _this73;

              _classCallCheck(this, CachedDataSource);

              _this73 = _super48.call(this, opt);
              _this73._rCache = {};
              _this73._fCache = {};
              return _this73;
            }

            _createClass(CachedDataSource, [{
              key: "getOriginal",
              value: function getOriginal(index) {
                if (this._rCache && this._rCache[index]) {
                  return this._rCache[index];
                }

                return _get(_getPrototypeOf(CachedDataSource.prototype), "getOriginal", this).call(this, index);
              }
            }, {
              key: "getOriginalField",
              value: function getOriginalField(index, field) {
                var rowCache = this._fCache && this._fCache[index];

                if (rowCache) {
                  var cache = rowCache.get(field);

                  if (cache) {
                    return cache;
                  }
                }

                return _get(_getPrototypeOf(CachedDataSource.prototype), "getOriginalField", this).call(this, index, field);
              }
            }, {
              key: "setOriginalField",
              value: function setOriginalField(index, field, // eslint-disable-next-line @typescript-eslint/no-explicit-any
              value) {
                var fCache = this._fCache;

                if (fCache && fCache[index]) {
                  delete fCache[index]; // clear row cache
                }

                return _get(_getPrototypeOf(CachedDataSource.prototype), "setOriginalField", this).call(this, index, field, value);
              }
            }, {
              key: "clearCache",
              value: function clearCache() {
                if (this._rCache) {
                  this._rCache = {};
                }

                if (this._fCache) {
                  this._fCache = {};
                }
              }
            }, {
              key: "fieldPromiseCallBackInternal",
              value: function fieldPromiseCallBackInternal(index, field, // eslint-disable-next-line @typescript-eslint/no-explicit-any
              value) {
                _setFieldCache(this._fCache, index, field, value);
              }
            }, {
              key: "recordPromiseCallBackInternal",
              value: function recordPromiseCallBackInternal(index, // eslint-disable-next-line @typescript-eslint/no-explicit-any
              record) {
                this._rCache[index] = record;
              }
            }, {
              key: "dispose",
              value: function dispose() {
                _get(_getPrototypeOf(CachedDataSource.prototype), "dispose", this).call(this);
              }
            }], [{
              key: "ofArray",
              value: function ofArray(array) {
                return new CachedDataSource({
                  get: function get(index) {
                    return array[index];
                  },
                  length: array.length,
                  source: array
                });
              }
            }, {
              key: "EVENT_TYPE",
              get: function get() {
                return DataSource_1.DataSource.EVENT_TYPE;
              }
            }]);

            return CachedDataSource;
          }(DataSource_1.DataSource);

          exports.CachedDataSource = CachedDataSource;
          /***/
        },

        /***/
        "./data/DataSource.js":
        /*!****************************!*\
          !*** ./data/DataSource.js ***!
          \****************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function dataDataSourceJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _sort = __importStar(__webpack_require__(
          /*! ../internal/sort */
          "./internal/sort.js"));

          var utils_1 = __webpack_require__(
          /*! ../internal/utils */
          "./internal/utils.js");

          var EventTarget_1 = __webpack_require__(
          /*! ../core/EventTarget */
          "./core/EventTarget.js");
          /** @private */


          function isFieldAssessor(field) {
            if (utils_1.obj.isObject(field)) {
              var a = field;

              if (a.get && a.set) {
                return true;
              }
            }

            return false;
          }
          /** @private */


          var EVENT_TYPE = {
            UPDATE_LENGTH: "update_length",
            UPDATED_LENGTH: "updated_length",
            UPDATED_ORDER: "updated_order"
          };
          /** @private */

          function getValue(value, setPromiseBack) {
            var maybePromiseValue = utils_1.getOrApply(value);

            if (utils_1.isPromise(maybePromiseValue)) {
              var promiseValue = maybePromiseValue.then(function (r) {
                setPromiseBack(r);
                return r;
              }); //一時的にキャッシュ

              setPromiseBack(promiseValue);
              return promiseValue;
            } else {
              return maybePromiseValue;
            }
          }
          /** @private */


          function getField(record, field, // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setPromiseBack) {
            if (!utils_1.isDef(record)) {
              return undefined;
            }

            if (utils_1.isPromise(record)) {
              return record.then(function (r) {
                return getField(r, field, setPromiseBack);
              });
            }

            var fieldGet = isFieldAssessor(field) ? field.get : field;

            if (fieldGet in record) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              var _fieldResult = record[fieldGet]; // eslint-disable-next-line @typescript-eslint/no-explicit-any

              return getValue(_fieldResult, setPromiseBack);
            }

            if (typeof fieldGet === "function") {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              var _fieldResult2 = fieldGet(record);

              return getValue(_fieldResult2, setPromiseBack);
            } // eslint-disable-next-line @typescript-eslint/restrict-template-expressions


            var ss = "".concat(fieldGet).split(".");

            if (ss.length <= 1) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              var _fieldResult3 = record[fieldGet];
              return getValue(_fieldResult3, setPromiseBack);
            }

            var fieldResult = utils_1.applyChainSafe.apply(utils_1, [record, // eslint-disable-next-line @typescript-eslint/no-explicit-any
            function (val, name) {
              return getField(val, name, utils_1.emptyFn);
            }].concat(_toConsumableArray(ss)));
            return getValue(fieldResult, setPromiseBack);
          }
          /** @private */


          function setField(record, field, // eslint-disable-next-line @typescript-eslint/no-explicit-any
          value) {
            if (record == null) {
              return false;
            }

            var fieldSet = isFieldAssessor(field) ? field.set : field;

            if (fieldSet in record) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              record[fieldSet] = value;
            } else if (typeof fieldSet === "function") {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              return fieldSet(record, value);
            } else if (typeof fieldSet === "string") {
              var ss = "".concat(fieldSet).split("."); // eslint-disable-next-line @typescript-eslint/no-explicit-any

              var obj = record;
              var length = ss.length;

              for (var i = 0; i < length; i++) {
                var f = ss[i];

                if (i === length - 1) {
                  obj[f] = value;
                } else {
                  obj = obj[f] || (obj[f] = {});
                }
              }
            } else {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              record[fieldSet] = value;
            }

            return true;
          }
          /** @private */


          function _getIndex(sortedIndexMap, index) {
            if (!sortedIndexMap) {
              return index;
            }

            var mapIndex = sortedIndexMap[index];
            return utils_1.isDef(mapIndex) ? mapIndex : index;
          }
          /**
           * grid data source
           *
           * @classdesc cheetahGrid.data.DataSource
           * @memberof cheetahGrid.data
           */


          var DataSource = /*#__PURE__*/function (_EventTarget_1$EventT5) {
            _inherits(DataSource, _EventTarget_1$EventT5);

            var _super49 = _createSuper(DataSource);

            function DataSource(obj) {
              var _this74;

              _classCallCheck(this, DataSource);

              var _a;

              _this74 = _super49.call(this);
              _this74._sortedIndexMap = null; // eslint-disable-next-line @typescript-eslint/no-explicit-any

              _this74._get = (obj === null || obj === void 0 ? void 0 : obj.get.bind(obj)) || undefined;
              _this74._length = (obj === null || obj === void 0 ? void 0 : obj.length) || 0;
              _this74._source = (_a = obj === null || obj === void 0 ? void 0 : obj.source) !== null && _a !== void 0 ? _a : obj;
              return _this74;
            }

            _createClass(DataSource, [{
              key: "get",
              value: function get(index) {
                return this.getOriginal(_getIndex(this._sortedIndexMap, index));
              }
            }, {
              key: "getField",
              value: function getField(index, field) {
                return this.getOriginalField(_getIndex(this._sortedIndexMap, index), field);
              } // eslint-disable-next-line @typescript-eslint/no-explicit-any

            }, {
              key: "hasField",
              value: function hasField(index, field) {
                return this.hasOriginalField(_getIndex(this._sortedIndexMap, index), field);
              }
            }, {
              key: "setField",
              value: function setField(index, field, // eslint-disable-next-line @typescript-eslint/no-explicit-any
              value) {
                return this.setOriginalField(_getIndex(this._sortedIndexMap, index), field, value);
              }
            }, {
              key: "sort",
              value: function sort(field, order) {
                var _this75 = this;

                var sortedIndexMap = new Array(this._length);
                var orderFn = order !== "desc" ? function (v1, v2) {
                  return v1 === v2 ? 0 : v1 > v2 ? 1 : -1;
                } : function (v1, v2) {
                  return v1 === v2 ? 0 : v1 < v2 ? 1 : -1;
                };
                return _sort.sortPromise(function (index) {
                  return utils_1.isDef(sortedIndexMap[index]) ? sortedIndexMap[index] : sortedIndexMap[index] = index;
                }, function (index, rel) {
                  sortedIndexMap[index] = rel;
                }, this._length, orderFn, function (index) {
                  return _this75.getOriginalField(index, field);
                }).then(function () {
                  _this75._sortedIndexMap = sortedIndexMap;

                  _this75.fireListeners(EVENT_TYPE.UPDATED_ORDER);
                });
              }
            }, {
              key: "dispose",
              value: function dispose() {
                _get(_getPrototypeOf(DataSource.prototype), "dispose", this).call(this);
              }
            }, {
              key: "getOriginal",
              value: function getOriginal(index) {
                var _this76 = this;

                return getValue(this._get(index), function (val) {
                  _this76.recordPromiseCallBackInternal(index, val);
                });
              }
            }, {
              key: "getOriginalField",
              value: function getOriginalField(index, field) {
                var _this77 = this;

                if (!utils_1.isDef(field)) {
                  return undefined;
                }

                var record = this.getOriginal(index);
                return getField(record, field, function (val) {
                  _this77.fieldPromiseCallBackInternal(index, field, val);
                });
              }
            }, {
              key: "hasOriginalField",
              value: function hasOriginalField(index, field) {
                if (!utils_1.isDef(field)) {
                  return false;
                }

                if (typeof field === "function") {
                  return true;
                }

                var record = this.getOriginal(index);
                return Boolean(record && field in record);
              }
            }, {
              key: "setOriginalField",
              value: function setOriginalField(index, field, // eslint-disable-next-line @typescript-eslint/no-explicit-any
              value) {
                if (!utils_1.isDef(field)) {
                  return false;
                }

                var record = this.getOriginal(index);

                if (utils_1.isPromise(record)) {
                  return record.then(function (r) {
                    return setField(r, field, value);
                  });
                }

                return setField(record, field, value);
              }
            }, {
              key: "fieldPromiseCallBackInternal",
              value: function fieldPromiseCallBackInternal(_index, _field, // eslint-disable-next-line @typescript-eslint/no-explicit-any
              _value) {//
              }
            }, {
              key: "recordPromiseCallBackInternal",
              value: function recordPromiseCallBackInternal(_index, _record) {//
              }
            }, {
              key: "source",
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              get: function get() {
                return this._source;
              }
            }, {
              key: "length",
              get: function get() {
                return this._length;
              },
              set: function set(length) {
                if (this._length === length) {
                  return;
                }

                var results = this.fireListeners(EVENT_TYPE.UPDATE_LENGTH, length);

                if (utils_1.array.findIndex(results, function (v) {
                  return !v;
                }) >= 0) {
                  return;
                }

                this._length = length;
                this.fireListeners(EVENT_TYPE.UPDATED_LENGTH, this._length);
              }
            }, {
              key: "dataSource",
              get: function get() {
                return this;
              }
            }], [{
              key: "ofArray",
              value: function ofArray(array) {
                return new DataSource({
                  get: function get(index) {
                    return array[index];
                  },
                  length: array.length,
                  source: array
                });
              }
            }, {
              key: "EVENT_TYPE",
              get: function get() {
                return EVENT_TYPE;
              }
            }]);

            return DataSource;
          }(EventTarget_1.EventTarget);

          exports.DataSource = DataSource; // eslint-disable-next-line @typescript-eslint/no-explicit-any

          DataSource.EMPTY = new DataSource({
            get: function get() {
              /*noop */
            },
            length: 0
          });
          /***/
        },

        /***/
        "./data/FilterDataSource.js":
        /*!**********************************!*\
          !*** ./data/FilterDataSource.js ***!
          \**********************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function dataFilterDataSourceJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __webpack_require__(
          /*! ../internal/utils */
          "./internal/utils.js");

          var DataSource_1 = __webpack_require__(
          /*! ./DataSource */
          "./data/DataSource.js");

          var EventHandler_1 = __webpack_require__(
          /*! ../internal/EventHandler */
          "./internal/EventHandler.js");
          /** @private */


          var DataSourceIterator = /*#__PURE__*/function () {
            function DataSourceIterator(dataSource) {
              _classCallCheck(this, DataSourceIterator);

              this._dataSource = dataSource;
              this._curIndex = -1;
              this._data = [];
            }

            _createClass(DataSourceIterator, [{
              key: "hasNext",
              value: function hasNext() {
                var next = this._curIndex + 1;
                return this._dataSource.length > next;
              }
            }, {
              key: "next",
              value: function next() {
                var next = this._curIndex + 1;

                var data = this._getIndexData(next);

                this._curIndex = next;
                return data;
              }
            }, {
              key: "movePrev",
              value: function movePrev() {
                this._curIndex--;
              }
            }, {
              key: "_getIndexData",
              value: function _getIndexData(index, nest) {
                var dataSource = this._dataSource;
                var data = this._data;

                if (index < data.length) {
                  return data[index];
                }

                if (dataSource.length <= index) {
                  return undefined;
                }

                var record = this._dataSource.get(index);

                data[index] = record;

                if (utils_1.isPromise(record)) {
                  record.then(function (val) {
                    data[index] = val;
                  });

                  if (!nest) {
                    for (var i = 1; i <= 100; i++) {
                      this._getIndexData(index + i, true);
                    }
                  }
                }

                return record;
              }
            }]);

            return DataSourceIterator;
          }();
          /** @private */


          var FilterData = /*#__PURE__*/function () {
            function FilterData(dc, original, filter) {
              _classCallCheck(this, FilterData);

              this._cancel = false;
              this._owner = dc;
              this._dataSourceItr = new DataSourceIterator(original);
              this._filter = filter;
              this._filterdList = [];
              this._queues = [];
            }

            _createClass(FilterData, [{
              key: "get",
              value: function get(index) {
                if (this._cancel) {
                  return undefined;
                }

                var filterdList = this._filterdList;

                if (index < filterdList.length) {
                  return filterdList[index];
                }

                var queues = this._queues;
                var indexQueue = queues[index];

                if (indexQueue) {
                  return indexQueue;
                }

                return queues[index] || this._findIndex(index);
              }
            }, {
              key: "cancel",
              value: function cancel() {
                this._cancel = true;
              }
            }, {
              key: "_findIndex",
              value: function _findIndex(index) {
                if (window.Promise) {
                  var timeout = Date.now() + 100;
                  var count = 0;
                  return this._findIndexWithTimeout(index, function () {
                    count++;

                    if (count >= 100) {
                      count = 0;
                      return timeout < Date.now();
                    }

                    return false;
                  });
                }

                return this._findIndexWithTimeout(index, function () {
                  return false;
                });
              }
            }, {
              key: "_findIndexWithTimeout",
              value: function _findIndexWithTimeout(index, testTimeout) {
                var _this78 = this;

                var filterdList = this._filterdList;
                var filter = this._filter;
                var dataSourceItr = this._dataSourceItr;
                var queues = this._queues;

                while (dataSourceItr.hasNext()) {
                  if (this._cancel) {
                    return undefined;
                  }

                  var record = dataSourceItr.next();

                  if (utils_1.isPromise(record)) {
                    dataSourceItr.movePrev();
                    var queue = record.then(function (_value) {
                      queues[index] = null;
                      return _this78.get(index);
                    });
                    queues[index] = queue;
                    return queue;
                  }

                  if (filter(record)) {
                    filterdList.push(record);

                    if (index < filterdList.length) {
                      return filterdList[index];
                    }
                  }

                  if (testTimeout()) {
                    var promise = new Promise(function (resolve) {
                      setTimeout(function () {
                        resolve();
                      }, 300);
                    });

                    var _queue = promise.then(function () {
                      queues[index] = null;
                      return _this78.get(index);
                    });

                    queues[index] = _queue;
                    return _queue;
                  }
                }

                var dc = this._owner;
                dc.length = filterdList.length;
                return undefined;
              }
            }]);

            return FilterData;
          }();
          /**
           * grid data source for filter
           *
           * @classdesc cheetahGrid.data.FilterDataSource
           * @memberof cheetahGrid.data
           */


          var FilterDataSource = /*#__PURE__*/function (_DataSource_1$DataSou2) {
            _inherits(FilterDataSource, _DataSource_1$DataSou2);

            var _super50 = _createSuper(FilterDataSource);

            function FilterDataSource(dataSource, filter) {
              var _this79;

              _classCallCheck(this, FilterDataSource);

              _this79 = _super50.call(this, dataSource);
              _this79._filterData = null;
              _this79._dataSource = dataSource;
              _this79.filter = filter;
              var handler = _this79._handler = new EventHandler_1.EventHandler();
              handler.on(dataSource, DataSource_1.DataSource.EVENT_TYPE.UPDATED_ORDER, function () {
                // reset
                // eslint-disable-next-line no-self-assign
                _this79.filter = _this79.filter;
              });
              utils_1.each(DataSource_1.DataSource.EVENT_TYPE, function (type) {
                handler.on(dataSource, type, function () {
                  var _this80;

                  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                    args[_key6] = arguments[_key6];
                  }

                  return (_this80 = _this79).fireListeners.apply(_this80, [type].concat(args));
                });
              });
              return _this79;
            }

            _createClass(FilterDataSource, [{
              key: "getOriginal",
              value: function getOriginal(index) {
                if (!this._filterData) {
                  return _get(_getPrototypeOf(FilterDataSource.prototype), "getOriginal", this).call(this, index);
                }

                return this._filterData.get(index);
              }
            }, {
              key: "sort",
              value: function sort(field, order) {
                return this._dataSource.sort(field, order);
              } // eslint-disable-next-line @typescript-eslint/no-explicit-any

            }, {
              key: "dispose",
              value: function dispose() {
                this._handler.dispose();

                _get(_getPrototypeOf(FilterDataSource.prototype), "dispose", this).call(this);
              }
            }, {
              key: "filter",
              get: function get() {
                var _a;

                return ((_a = this._filterData) === null || _a === void 0 ? void 0 : _a._filter) || null;
              },
              set: function set(filter) {
                if (this._filterData) {
                  this._filterData.cancel();
                }

                this._filterData = filter ? new FilterData(this, this._dataSource, filter) : null;
                this.length = this._dataSource.length;
              }
            }, {
              key: "source",
              get: function get() {
                return this._dataSource.source;
              }
            }, {
              key: "dataSource",
              get: function get() {
                return this._dataSource;
              }
            }], [{
              key: "EVENT_TYPE",
              get: function get() {
                return DataSource_1.DataSource.EVENT_TYPE;
              }
            }]);

            return FilterDataSource;
          }(DataSource_1.DataSource);

          exports.FilterDataSource = FilterDataSource;
          /***/
        },

        /***/
        "./element/Inline.js":
        /*!***************************!*\
          !*** ./element/Inline.js ***!
          \***************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function elementInlineJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __webpack_require__(
          /*! ../internal/utils */
          "./internal/utils.js");

          function getWidth(ctx, content) {
            return ctx.measureText(content).width;
          }

          function breakWidth(ctx, content, itr, candidateIndex, width) {
            var chars = [];
            var ret = itr.next();

            for (var i = 0; i < candidateIndex && ret !== null; i++, ret = itr.next()) {
              chars.push(ret);
            }

            var beforeWidth = getWidth(ctx, chars.join(""));

            if (beforeWidth > width) {
              while (chars.length) {
                var c = chars.pop();
                beforeWidth -= getWidth(ctx, c || "");

                if (beforeWidth <= width) {
                  break;
                }
              }
            } else if (beforeWidth < width) {
              while (ret !== null) {
                var charWidth = getWidth(ctx, ret);

                if (beforeWidth + charWidth > width) {
                  break;
                }

                chars.push(ret);
                beforeWidth += charWidth;
                ret = itr.next();
              }
            }

            var beforeContent = chars.join("").replace(/\s+$/, "");
            var afterContent = content.slice(beforeContent.length).replace(/^\s+/, "");
            return {
              before: beforeContent ? new Inline(beforeContent) : null,
              after: afterContent ? new Inline(afterContent) : null
            };
          }

          var Inline = /*#__PURE__*/function () {
            function Inline(content) {
              _classCallCheck(this, Inline);

              this._content = utils_1.isDef(content) ? content : "";
            }

            _createClass(Inline, [{
              key: "width",
              value: function width(_ref49) {
                var ctx = _ref49.ctx;
                return getWidth(ctx, this._content);
              }
            }, {
              key: "font",
              value: function font() {
                return null;
              }
            }, {
              key: "color",
              value: function color() {
                return null;
              }
            }, {
              key: "canDraw",
              value: function canDraw() {
                return true;
              } // eslint-disable-next-line @typescript-eslint/no-empty-function

            }, {
              key: "onReady",
              value: function onReady(_callback) {}
            }, {
              key: "draw",
              value: function draw(_ref50) {
                var ctx = _ref50.ctx,
                    canvashelper = _ref50.canvashelper,
                    rect = _ref50.rect,
                    offset = _ref50.offset,
                    offsetLeft = _ref50.offsetLeft,
                    offsetRight = _ref50.offsetRight,
                    offsetTop = _ref50.offsetTop,
                    offsetBottom = _ref50.offsetBottom;
                canvashelper.fillTextRect(ctx, this._content, rect.left, rect.top, rect.width, rect.height, {
                  offset: offset + 1,
                  padding: {
                    left: offsetLeft,
                    right: offsetRight,
                    top: offsetTop,
                    bottom: offsetBottom
                  }
                });
              }
            }, {
              key: "canBreak",
              value: function canBreak() {
                return !!this._content;
              }
            }, {
              key: "splitIndex",
              value: function splitIndex(index) {
                var content = this._content;
                var itr = utils_1.str.genChars(content);
                var chars = [];
                var ret = itr.next();

                for (var i = 0; i < index && ret !== null; i++, ret = itr.next()) {
                  chars.push(ret);
                }

                var beforeContent = chars.join("");
                var afterContent = content.slice(beforeContent.length);
                return {
                  before: beforeContent ? new Inline(beforeContent) : null,
                  after: afterContent ? new Inline(afterContent) : null
                };
              }
            }, {
              key: "breakWord",
              value: function breakWord(ctx, width) {
                var content = this._content;
                var allWidth = this.width({
                  ctx: ctx
                });
                var candidate = Math.floor(this._content.length * width / allWidth);
                var itr = utils_1.str.genWords(content);
                return breakWidth(ctx, content, itr, candidate, width);
              }
            }, {
              key: "breakAll",
              value: function breakAll(ctx, width) {
                var content = this._content;
                var allWidth = this.width({
                  ctx: ctx
                });
                var candidate = Math.floor(this._content.length * width / allWidth);
                var itr = utils_1.str.genChars(content);
                return breakWidth(ctx, content, itr, candidate, width);
              }
            }, {
              key: "toString",
              value: function toString() {
                return this._content;
              }
            }]);

            return Inline;
          }();

          exports.Inline = Inline;
          /***/
        },

        /***/
        "./element/InlineDrawer.js":
        /*!*********************************!*\
          !*** ./element/InlineDrawer.js ***!
          \*********************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function elementInlineDrawerJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var Inline_1 = __webpack_require__(
          /*! ./Inline */
          "./element/Inline.js");

          var InlineDrawer = /*#__PURE__*/function (_Inline_1$Inline) {
            _inherits(InlineDrawer, _Inline_1$Inline);

            var _super51 = _createSuper(InlineDrawer);

            function InlineDrawer(_ref51) {
              var _this81;

              var draw = _ref51.draw,
                  width = _ref51.width,
                  color = _ref51.color;

              _classCallCheck(this, InlineDrawer);

              _this81 = _super51.call(this);
              _this81._draw = draw;
              _this81._width = width; // this._height = height;

              _this81._color = color;
              return _this81;
            }

            _createClass(InlineDrawer, [{
              key: "width",
              value: function width(_arg) {
                return this._width;
              }
            }, {
              key: "font",
              value: function font() {
                return null;
              }
            }, {
              key: "color",
              value: function color() {
                var _a;

                return (_a = this._color) !== null && _a !== void 0 ? _a : null;
              }
            }, {
              key: "canDraw",
              value: function canDraw() {
                return true;
              } // eslint-disable-next-line @typescript-eslint/no-empty-function

            }, {
              key: "onReady",
              value: function onReady(_callback) {}
            }, {
              key: "draw",
              value: function draw(_ref52) {
                var ctx = _ref52.ctx,
                    canvashelper = _ref52.canvashelper,
                    rect = _ref52.rect,
                    offset = _ref52.offset,
                    offsetLeft = _ref52.offsetLeft,
                    offsetRight = _ref52.offsetRight,
                    offsetTop = _ref52.offsetTop,
                    offsetBottom = _ref52.offsetBottom;

                this._draw({
                  ctx: ctx,
                  canvashelper: canvashelper,
                  rect: rect,
                  offset: offset,
                  offsetLeft: offsetLeft,
                  offsetRight: offsetRight,
                  offsetTop: offsetTop,
                  offsetBottom: offsetBottom
                });
              }
            }, {
              key: "canBreak",
              value: function canBreak() {
                return false;
              }
            }, {
              key: "toString",
              value: function toString() {
                return "";
              }
            }]);

            return InlineDrawer;
          }(Inline_1.Inline);

          exports.InlineDrawer = InlineDrawer;
          /***/
        },

        /***/
        "./element/InlineIcon.js":
        /*!*******************************!*\
          !*** ./element/InlineIcon.js ***!
          \*******************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function elementInlineIconJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var fonts = __importStar(__webpack_require__(
          /*! ../internal/fonts */
          "./internal/fonts.js"));

          var Inline_1 = __webpack_require__(
          /*! ./Inline */
          "./element/Inline.js");

          var InlineIcon = /*#__PURE__*/function (_Inline_1$Inline2) {
            _inherits(InlineIcon, _Inline_1$Inline2);

            var _super52 = _createSuper(InlineIcon);

            function InlineIcon(icon) {
              var _this82;

              _classCallCheck(this, InlineIcon);

              _this82 = _super52.call(this);
              _this82._icon = icon || {};
              return _this82;
            }

            _createClass(InlineIcon, [{
              key: "width",
              value: function width(_ref53) {
                var ctx = _ref53.ctx;
                var icon = this._icon;

                if (icon.width) {
                  return icon.width;
                }

                if (icon.font && fonts.check(icon.font, icon.content || "")) {
                  ctx.save();
                  ctx.canvas.style.letterSpacing = "normal";

                  try {
                    ctx.font = icon.font || ctx.font;
                    return ctx.measureText(icon.content || "").width;
                  } finally {
                    ctx.canvas.style.letterSpacing = "";
                    ctx.restore();
                  }
                }

                return 0; //unknown
              }
            }, {
              key: "font",
              value: function font() {
                var _a;

                return (_a = this._icon.font) !== null && _a !== void 0 ? _a : null;
              }
            }, {
              key: "color",
              value: function color() {
                var _a;

                return (_a = this._icon.color) !== null && _a !== void 0 ? _a : null;
              }
            }, {
              key: "canDraw",
              value: function canDraw() {
                var icon = this._icon;
                return icon.font ? fonts.check(icon.font, icon.content || "") : true;
              }
            }, {
              key: "onReady",
              value: function onReady(callback) {
                var icon = this._icon;

                if (icon.font && !fonts.check(icon.font, icon.content || "")) {
                  fonts.load(icon.font, icon.content || "", callback);
                }
              }
            }, {
              key: "draw",
              value: function draw(_ref54) {
                var ctx = _ref54.ctx,
                    canvashelper = _ref54.canvashelper,
                    rect = _ref54.rect,
                    offset = _ref54.offset,
                    offsetLeft = _ref54.offsetLeft,
                    offsetRight = _ref54.offsetRight,
                    offsetTop = _ref54.offsetTop,
                    offsetBottom = _ref54.offsetBottom;
                var icon = this._icon;

                if (icon.content) {
                  ctx.canvas.style.letterSpacing = "normal";

                  try {
                    // eslint-disable-next-line no-self-assign
                    ctx.font = ctx.font; // To apply letterSpacing, we need to reset it.

                    canvashelper.fillTextRect(ctx, icon.content, rect.left, rect.top, rect.width, rect.height, {
                      offset: offset + 1,
                      padding: {
                        left: offsetLeft,
                        right: offsetRight,
                        top: offsetTop,
                        bottom: offsetBottom
                      }
                    });
                  } finally {
                    ctx.canvas.style.letterSpacing = "";
                  }
                }
              }
            }, {
              key: "canBreak",
              value: function canBreak() {
                return false;
              }
            }, {
              key: "toString",
              value: function toString() {
                return "";
              }
            }]);

            return InlineIcon;
          }(Inline_1.Inline);

          exports.InlineIcon = InlineIcon;
          /***/
        },

        /***/
        "./element/InlineImage.js":
        /*!********************************!*\
          !*** ./element/InlineImage.js ***!
          \********************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function elementInlineImageJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var Inline_1 = __webpack_require__(
          /*! ./Inline */
          "./element/Inline.js");

          var imgs_1 = __webpack_require__(
          /*! ../internal/imgs */
          "./internal/imgs.js");

          var utils_1 = __webpack_require__(
          /*! ../internal/utils */
          "./internal/utils.js");

          var InlineImage = /*#__PURE__*/function (_Inline_1$Inline3) {
            _inherits(InlineImage, _Inline_1$Inline3);

            var _super53 = _createSuper(InlineImage);

            function InlineImage(_ref55) {
              var _this83;

              var src = _ref55.src,
                  width = _ref55.width,
                  height = _ref55.height,
                  imageLeft = _ref55.imageLeft,
                  imageTop = _ref55.imageTop,
                  imageWidth = _ref55.imageWidth,
                  imageHeight = _ref55.imageHeight;

              _classCallCheck(this, InlineImage);

              _this83 = _super53.call(this);
              _this83._inlineImgPromise = null;
              _this83._inlineImg = null;
              _this83._src = src;
              _this83._width = width;
              _this83._height = height;
              _this83._imageLeft = imageLeft;
              _this83._imageTop = imageTop;
              _this83._imageWidth = imageWidth;
              _this83._imageHeight = imageHeight;
              _this83._onloaded = [];

              if (utils_1.isPromise(src)) {
                src.then(function (s) {
                  _this83._src = s;

                  _this83._loadImage(s);
                });
              } else {
                _this83._loadImage(src);
              }

              return _this83;
            }

            _createClass(InlineImage, [{
              key: "_loadImage",
              value: function _loadImage(src) {
                var _this84 = this;

                var img = this._inlineImgPromise = imgs_1.getCacheOrLoad("InlineImage", 50, src);

                if (utils_1.isPromise(img)) {
                  img.then(function (i) {
                    _this84._inlineImg = i;

                    _this84._onloaded.forEach(function (fn) {
                      return fn();
                    });
                  });
                } else {
                  this._inlineImg = img;
                }
              }
            }, {
              key: "width",
              value: function width(_arg) {
                var _a, _b;

                return this._width || ((_b = (_a = this._inlineImg) === null || _a === void 0 ? void 0 : _a.width) !== null && _b !== void 0 ? _b : 0);
              }
            }, {
              key: "font",
              value: function font() {
                return null;
              }
            }, {
              key: "color",
              value: function color() {
                return null;
              }
            }, {
              key: "canDraw",
              value: function canDraw() {
                return !!this._inlineImg;
              }
            }, {
              key: "onReady",
              value: function onReady(callback) {
                if (utils_1.isPromise(this._src) || utils_1.isPromise(this._inlineImgPromise)) {
                  this._onloaded.push(function () {
                    return callback();
                  });
                }
              }
            }, {
              key: "draw",
              value: function draw(_ref56) {
                var ctx = _ref56.ctx,
                    canvashelper = _ref56.canvashelper,
                    rect = _ref56.rect,
                    offset = _ref56.offset,
                    offsetLeft = _ref56.offsetLeft,
                    offsetRight = _ref56.offsetRight,
                    offsetTop = _ref56.offsetTop,
                    offsetBottom = _ref56.offsetBottom;
                var img = this._inlineImg;
                canvashelper.drawInlineImageRect(ctx, img, this._imageLeft || 0, this._imageTop || 0, this._imageWidth || img.width, this._imageHeight || img.height, this._width || img.width, this._height || img.height, rect.left, rect.top, rect.width, rect.height, {
                  offset: offset + 1,
                  padding: {
                    left: offsetLeft,
                    right: offsetRight,
                    top: offsetTop,
                    bottom: offsetBottom
                  }
                });
              }
            }, {
              key: "canBreak",
              value: function canBreak() {
                return false;
              }
            }, {
              key: "toString",
              value: function toString() {
                return "";
              }
            }]);

            return InlineImage;
          }(Inline_1.Inline);

          exports.InlineImage = InlineImage;
          /***/
        },

        /***/
        "./element/InlinePath2D.js":
        /*!*********************************!*\
          !*** ./element/InlinePath2D.js ***!
          \*********************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function elementInlinePath2DJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var path2DManager = __importStar(__webpack_require__(
          /*! ../internal/path2DManager */
          "./internal/path2DManager.js"));

          var Inline_1 = __webpack_require__(
          /*! ./Inline */
          "./element/Inline.js");

          var canvases_1 = __webpack_require__(
          /*! ../internal/canvases */
          "./internal/canvases.js");

          var InlinePath2D = /*#__PURE__*/function (_Inline_1$Inline4) {
            _inherits(InlinePath2D, _Inline_1$Inline4);

            var _super54 = _createSuper(InlinePath2D);

            function InlinePath2D(_ref57) {
              var _this85;

              var path = _ref57.path,
                  width = _ref57.width,
                  height = _ref57.height,
                  color = _ref57.color;

              _classCallCheck(this, InlinePath2D);

              _this85 = _super54.call(this); // このタイミングでないとIEでPath2Dのpolyfillが反映されない

              var Path2D = path2DManager.getPath2D();
              _this85._path = new Path2D(path);
              _this85._width = width;
              _this85._height = height;
              _this85._color = color;
              return _this85;
            }

            _createClass(InlinePath2D, [{
              key: "width",
              value: function width(_arg) {
                return this._width;
              }
            }, {
              key: "font",
              value: function font() {
                return null;
              }
            }, {
              key: "color",
              value: function color() {
                var _a;

                return (_a = this._color) !== null && _a !== void 0 ? _a : null;
              }
            }, {
              key: "canDraw",
              value: function canDraw() {
                return true;
              } // eslint-disable-next-line @typescript-eslint/no-empty-function

            }, {
              key: "onReady",
              value: function onReady(_callback) {}
            }, {
              key: "draw",
              value: function draw(_ref58) {
                var ctx = _ref58.ctx,
                    rect = _ref58.rect,
                    offset = _ref58.offset,
                    offsetLeft = _ref58.offsetLeft,
                    offsetRight = _ref58.offsetRight,
                    offsetTop = _ref58.offsetTop,
                    offsetBottom = _ref58.offsetBottom;
                offset++;
                var padding = {
                  left: offsetLeft,
                  right: offsetRight,
                  top: offsetTop,
                  bottom: offsetBottom
                };
                ctx.save();

                try {
                  ctx.beginPath();
                  ctx.rect(rect.left, rect.top, rect.width, rect.height); //clip

                  ctx.clip(); //文字描画

                  var pos = canvases_1.calcStartPosition(ctx, rect, this._width, this._height, {
                    offset: offset,
                    padding: padding
                  });
                  ctx.translate(pos.x, pos.y);
                  ctx.fill(this._path);
                } finally {
                  ctx.restore();
                }
              }
            }, {
              key: "canBreak",
              value: function canBreak() {
                return false;
              }
            }, {
              key: "toString",
              value: function toString() {
                return "";
              }
            }]);

            return InlinePath2D;
          }(Inline_1.Inline);

          exports.InlinePath2D = InlinePath2D;
          /***/
        },

        /***/
        "./element/InlineSvg.js":
        /*!******************************!*\
          !*** ./element/InlineSvg.js ***!
          \******************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function elementInlineSvgJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __webpack_require__(
          /*! ../internal/utils */
          "./internal/utils.js");

          var InlineImage_1 = __webpack_require__(
          /*! ./InlineImage */
          "./element/InlineImage.js");

          function buildSvgDataUrl(svg) {
            var data = typeof svg === "string" ? svg : new XMLSerializer().serializeToString(svg);
            var url = "data:image/svg+xml;charset=utf-8,".concat(encodeURIComponent(data)); //svgデータをbase64に変換

            return url;
          }

          function getSvgElement(svg) {
            if (typeof svg === "string") {
              var parser = new DOMParser();
              return parser.parseFromString(svg, "image/svg+xml").children[0];
            } else {
              return svg;
            }
          }

          var InlineSvg = /*#__PURE__*/function (_InlineImage_1$Inline) {
            _inherits(InlineSvg, _InlineImage_1$Inline);

            var _super55 = _createSuper(InlineSvg);

            function InlineSvg(_ref59) {
              var svg = _ref59.svg,
                  width = _ref59.width,
                  height = _ref59.height;

              _classCallCheck(this, InlineSvg);

              var _a, _b;

              var svgElem = utils_1.then(svg, getSvgElement);
              var elmWidth = !utils_1.isPromise(svgElem) ? (_a = svgElem.getAttribute("width")) !== null && _a !== void 0 ? _a : undefined : undefined;
              var elmHeight = !utils_1.isPromise(svgElem) ? (_b = svgElem.getAttribute("height")) !== null && _b !== void 0 ? _b : undefined : undefined;
              var numElmWidth = elmWidth != null ? Number(elmWidth) : undefined;
              var numElmHeight = elmHeight != null ? Number(elmHeight) : undefined;
              return _super55.call(this, {
                src: utils_1.then(svg, buildSvgDataUrl),
                width: width || numElmWidth,
                height: height || numElmHeight,
                imageWidth: numElmWidth,
                imageHeight: numElmHeight
              });
            }

            _createClass(InlineSvg, [{
              key: "canBreak",
              value: function canBreak() {
                return false;
              }
            }, {
              key: "toString",
              value: function toString() {
                return "";
              }
            }]);

            return InlineSvg;
          }(InlineImage_1.InlineImage);

          exports.InlineSvg = InlineSvg;
          /***/
        },

        /***/
        "./element/inlines.js":
        /*!****************************!*\
          !*** ./element/inlines.js ***!
          \****************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function elementInlinesJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var icons = __importStar(__webpack_require__(
          /*! ../icons */
          "./icons.js"));

          var path2DManager = __importStar(__webpack_require__(
          /*! ../internal/path2DManager */
          "./internal/path2DManager.js"));

          var Inline_1 = __webpack_require__(
          /*! ./Inline */
          "./element/Inline.js");

          var canvases_1 = __webpack_require__(
          /*! ../internal/canvases */
          "./internal/canvases.js");

          var InlineDrawer_1 = __webpack_require__(
          /*! ./InlineDrawer */
          "./element/InlineDrawer.js");

          var InlineIcon_1 = __webpack_require__(
          /*! ./InlineIcon */
          "./element/InlineIcon.js");

          var InlineImage_1 = __webpack_require__(
          /*! ./InlineImage */
          "./element/InlineImage.js");

          var InlinePath2D_1 = __webpack_require__(
          /*! ./InlinePath2D */
          "./element/InlinePath2D.js");

          var InlineSvg_1 = __webpack_require__(
          /*! ./InlineSvg */
          "./element/InlineSvg.js");

          var utils_1 = __webpack_require__(
          /*! ../internal/utils */
          "./internal/utils.js");

          function drawRegisteredIcon(ctx, icon, drawWidth, drawHeight, left, top, width, height) {
            var _ref60 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : {},
                _ref60$offset = _ref60.offset,
                offset = _ref60$offset === void 0 ? 2 : _ref60$offset,
                padding = _ref60.padding;

            var rect = {
              left: left,
              top: top,
              width: width,
              height: height,
              right: left + width,
              bottom: top + height
            };
            ctx.save();

            try {
              ctx.beginPath();
              ctx.rect(rect.left, rect.top, rect.width, rect.height); //clip

              ctx.clip(); //文字描画

              var pos = canvases_1.calcStartPosition(ctx, rect, drawWidth, drawHeight, {
                offset: offset,
                padding: padding
              });
              path2DManager.fill(icon, ctx, pos.x, pos.y, drawWidth, drawHeight);
            } finally {
              ctx.restore();
            }
          }

          function isIconConstructorOption(icon) {
            if (icon.font && icon.content) {
              return true;
            }

            return false;
          }

          function isInlineImageConstructorOption(icon) {
            if (icon.src) {
              return true;
            }

            return false;
          }

          function isInlineSvgConstructorOption(icon) {
            if (icon.path) {
              return true;
            }

            return false;
          }

          function iconOf(icon) {
            if (icon instanceof Inline_1.Inline) {
              return icon;
            }

            if (!icon) {
              return null;
            }

            if (isIconConstructorOption(icon)) {
              return new InlineIcon_1.InlineIcon(icon);
            }

            if (isInlineImageConstructorOption(icon)) {
              return new InlineImage_1.InlineImage({
                src: icon.src,
                width: icon.width,
                height: icon.width
              });
            }

            if (icon.svg) {
              return new InlineSvg_1.InlineSvg({
                svg: icon.svg,
                width: icon.width,
                height: icon.width
              });
            }

            if (isInlineSvgConstructorOption(icon)) {
              return new InlinePath2D_1.InlinePath2D({
                path: icon.path,
                width: icon.width,
                height: icon.width,
                color: icon.color
              });
            }

            var regedIcons = icons.get();

            if (icon.name && regedIcons[icon.name]) {
              var regedIcon = regedIcons[icon.name];
              var width = icon.width || Math.max(regedIcon.width, regedIcon.height);
              return new InlineDrawer_1.InlineDrawer({
                draw: function draw(_ref61) {
                  var ctx = _ref61.ctx,
                      rect = _ref61.rect,
                      offset = _ref61.offset,
                      offsetLeft = _ref61.offsetLeft,
                      offsetRight = _ref61.offsetRight,
                      offsetTop = _ref61.offsetTop,
                      offsetBottom = _ref61.offsetBottom;
                  drawRegisteredIcon(ctx, regedIcon, width, width, rect.left, rect.top, rect.width, rect.height, {
                    offset: offset + 1,
                    padding: {
                      left: offsetLeft,
                      right: offsetRight,
                      top: offsetTop,
                      bottom: offsetBottom
                    }
                  });
                },
                width: width,
                height: width,
                color: icon.color
              });
            }

            return new InlineIcon_1.InlineIcon(icon);
          }

          exports.iconOf = iconOf;

          function of(content) {
            if (!utils_1.isDef(content)) {
              return null;
            }

            if (content instanceof Inline_1.Inline) {
              return content;
            }

            return new Inline_1.Inline(content);
          }

          exports.of = of;

          function buildInlines(icons, inline) {
            var result = [];

            if (icons) {
              result.push.apply(result, _toConsumableArray(icons.map(function (icon) {
                return iconOf(icon);
              }).filter(utils_1.isDef)));
            }

            if (Array.isArray(inline) // && inline.filter(il => il instanceof Inline).length <- ?
            ) {
                result.push.apply(result, _toConsumableArray(inline.map(function (il) {
                  return of(il);
                }).filter(utils_1.isDef)));
              } else {
              var il = of(inline);

              if (il) {
                result.push(il);
              }
            }

            return result;
          }

          exports.buildInlines = buildInlines;

          function string(inline) {
            return buildInlines(undefined, inline).join("");
          }

          exports.string = string;
          /***/
        },

        /***/
        "./get-internal.js":
        /*!*************************!*\
          !*** ./get-internal.js ***!
          \*************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function getInternalJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          function getInternal() {
            console.warn("use internal!!");
            return {
              color: __webpack_require__(
              /*! ./internal/color */
              "./internal/color.js"),
              sort: __webpack_require__(
              /*! ./internal/sort */
              "./internal/sort.js"),
              calc: __webpack_require__(
              /*! ./internal/calc */
              "./internal/calc.js"),
              symbolManager: __webpack_require__(
              /*! ./internal/symbolManager */
              "./internal/symbolManager.js"),
              path2DManager: __webpack_require__(
              /*! ./internal/path2DManager */
              "./internal/path2DManager.js")
            };
          }

          exports.getInternal = getInternal;
          /***/
        },

        /***/
        "./header/action.js":
        /*!**************************!*\
          !*** ./header/action.js ***!
          \**************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function headerActionJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var BaseAction_1 = __webpack_require__(
          /*! ./action/BaseAction */
          "./header/action/BaseAction.js");

          exports.BaseAction = BaseAction_1.BaseAction;

          var CheckHeaderAction_1 = __webpack_require__(
          /*! ./action/CheckHeaderAction */
          "./header/action/CheckHeaderAction.js");

          exports.CheckHeaderAction = CheckHeaderAction_1.CheckHeaderAction;

          var SortHeaderAction_1 = __webpack_require__(
          /*! ./action/SortHeaderAction */
          "./header/action/SortHeaderAction.js");

          exports.SortHeaderAction = SortHeaderAction_1.SortHeaderAction;

          var ImmutableSortHeaderAction = /*#__PURE__*/function (_SortHeaderAction_1$S) {
            _inherits(ImmutableSortHeaderAction, _SortHeaderAction_1$S);

            var _super56 = _createSuper(ImmutableSortHeaderAction);

            function ImmutableSortHeaderAction() {
              _classCallCheck(this, ImmutableSortHeaderAction);

              return _super56.apply(this, arguments);
            }

            _createClass(ImmutableSortHeaderAction, [{
              key: "disabled",
              get: function get() {
                return this._disabled;
              }
            }]);

            return ImmutableSortHeaderAction;
          }(SortHeaderAction_1.SortHeaderAction);

          var ImmutableCheckHeaderAction = /*#__PURE__*/function (_CheckHeaderAction_1$) {
            _inherits(ImmutableCheckHeaderAction, _CheckHeaderAction_1$);

            var _super57 = _createSuper(ImmutableCheckHeaderAction);

            function ImmutableCheckHeaderAction() {
              _classCallCheck(this, ImmutableCheckHeaderAction);

              return _super57.apply(this, arguments);
            }

            _createClass(ImmutableCheckHeaderAction, [{
              key: "disabled",
              get: function get() {
                return this._disabled;
              }
            }]);

            return ImmutableCheckHeaderAction;
          }(CheckHeaderAction_1.CheckHeaderAction);

          exports.ACTIONS = {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            SORT: new ImmutableSortHeaderAction(),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            CHECK: new ImmutableCheckHeaderAction()
          };

          function of(headerAction) {
            if (!headerAction) {
              return undefined;
            } else if (typeof headerAction === "string") {
              var key = headerAction.toUpperCase();
              return exports.ACTIONS[key] || of(null);
            } else {
              return headerAction;
            }
          }

          exports.of = of;

          function ofCell(headerCell) {
            if (headerCell.sort) {
              if (typeof headerCell.sort === "function") {
                var sortMethod = headerCell.sort; // 0.9.0 Backward compatibility

                var sort = function sort(_ref62) {
                  var order = _ref62.order,
                      col = _ref62.col,
                      grid = _ref62.grid;
                  return sortMethod.call(headerCell, order, col, grid);
                };

                return new ImmutableSortHeaderAction({
                  sort: sort
                });
              }

              return exports.ACTIONS.SORT;
            }

            return of(headerCell.headerAction);
          }

          exports.ofCell = ofCell;
          /***/
        },

        /***/
        "./header/action/BaseAction.js":
        /*!*************************************!*\
          !*** ./header/action/BaseAction.js ***!
          \*************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function headerActionBaseActionJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var BaseAction = /*#__PURE__*/function () {
            function BaseAction() {
              var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, BaseAction);

              this._disabled = option.disabled || false;
            }

            _createClass(BaseAction, [{
              key: "clone",
              value: function clone() {
                return new BaseAction(this);
              }
            }, {
              key: "bindGridEvent",
              value: function bindGridEvent(_grid, _cellId) {
                return [];
              }
            }, {
              key: "onChangeDisabledInternal",
              value: function onChangeDisabledInternal() {// impl
              }
            }, {
              key: "disabled",
              get: function get() {
                return this._disabled;
              },
              set: function set(disabled) {
                this._disabled = disabled;
                this.onChangeDisabledInternal();
              }
            }]);

            return BaseAction;
          }();

          exports.BaseAction = BaseAction;
          /***/
        },

        /***/
        "./header/action/CheckHeaderAction.js":
        /*!********************************************!*\
          !*** ./header/action/CheckHeaderAction.js ***!
          \********************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function headerActionCheckHeaderActionJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var actionBind_1 = __webpack_require__(
          /*! ./actionBind */
          "./header/action/actionBind.js");

          var BaseAction_1 = __webpack_require__(
          /*! ./BaseAction */
          "./header/action/BaseAction.js");

          var animate_1 = __webpack_require__(
          /*! ../../internal/animate */
          "./internal/animate.js");

          var symbolManager_1 = __webpack_require__(
          /*! ../../internal/symbolManager */
          "./internal/symbolManager.js");

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          var CHECK_HEADER_STATE_ID = symbolManager_1.getCheckHeaderStateId();

          function getState(grid) {
            var state = grid[CHECK_HEADER_STATE_ID];

            if (!state) {
              state = {
                elapsed: {},
                block: {}
              };
              utils_1.obj.setReadonly(grid, CHECK_HEADER_STATE_ID, state);
            }

            return state;
          }

          var CheckHeaderAction = /*#__PURE__*/function (_BaseAction_1$BaseAct3) {
            _inherits(CheckHeaderAction, _BaseAction_1$BaseAct3);

            var _super58 = _createSuper(CheckHeaderAction);

            function CheckHeaderAction() {
              _classCallCheck(this, CheckHeaderAction);

              return _super58.apply(this, arguments);
            }

            _createClass(CheckHeaderAction, [{
              key: "clone",
              value: function clone() {
                return new CheckHeaderAction(this);
              }
            }, {
              key: "bindGridEvent",
              value: function bindGridEvent(grid, cellId) {
                var _this86 = this;

                var state = getState(grid);

                var action = function action(_ref63) {
                  var col = _ref63.col,
                      row = _ref63.row;
                  var range = grid.getCellRange(col, row);
                  var cellKey = "".concat(range.start.col, ":").concat(range.start.row);

                  if (_this86.disabled || state.block[cellKey]) {
                    return;
                  }

                  var checked = grid.getHeaderValue(range.start.col, range.start.row);
                  grid.setHeaderValue(range.start.col, range.start.row, !checked);

                  var onChange = function onChange() {
                    // checkbox animation
                    animate_1.animate(200, function (point) {
                      if (point === 1) {
                        delete state.elapsed[cellKey];
                      } else {
                        state.elapsed[cellKey] = point;
                      }

                      grid.invalidateCellRange(range);
                    });
                  };

                  onChange();
                };

                return [].concat(_toConsumableArray(actionBind_1.bindCellClickAction(grid, cellId, {
                  action: action,
                  mouseOver: function mouseOver(e) {
                    if (_this86.disabled) {
                      return false;
                    }

                    state.mouseActiveCell = {
                      col: e.col,
                      row: e.row
                    };
                    var range = grid.getCellRange(e.col, e.row);
                    grid.invalidateCellRange(range);
                    return true;
                  },
                  mouseOut: function mouseOut(e) {
                    delete state.mouseActiveCell;
                    var range = grid.getCellRange(e.col, e.row);
                    grid.invalidateCellRange(range);
                  }
                })), _toConsumableArray(actionBind_1.bindCellKeyAction(grid, cellId, {
                  action: action
                })));
              }
            }]);

            return CheckHeaderAction;
          }(BaseAction_1.BaseAction);

          exports.CheckHeaderAction = CheckHeaderAction;
          /***/
        },

        /***/
        "./header/action/SortHeaderAction.js":
        /*!*******************************************!*\
          !*** ./header/action/SortHeaderAction.js ***!
          \*******************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function headerActionSortHeaderActionJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var BaseAction_1 = __webpack_require__(
          /*! ./BaseAction */
          "./header/action/BaseAction.js");

          var actionBind_1 = __webpack_require__(
          /*! ./actionBind */
          "./header/action/actionBind.js");

          var SortHeaderAction = /*#__PURE__*/function (_BaseAction_1$BaseAct4) {
            _inherits(SortHeaderAction, _BaseAction_1$BaseAct4);

            var _super59 = _createSuper(SortHeaderAction);

            function SortHeaderAction() {
              var _this87;

              var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, SortHeaderAction);

              var _a;

              _this87 = _super59.call(this, option);
              _this87._sort = (_a = option.sort) !== null && _a !== void 0 ? _a : true;
              return _this87;
            }

            _createClass(SortHeaderAction, [{
              key: "clone",
              value: function clone() {
                return new SortHeaderAction(this);
              }
            }, {
              key: "_executeSort",
              value: function _executeSort(newState, grid) {
                if (typeof this._sort === "function") {
                  this._sort({
                    order: newState.order || "asc",
                    col: newState.col,
                    row: newState.row,
                    grid: grid
                  });
                } else {
                  var fieldRow = Math.min(grid.recordRowCount - 1, newState.row) + grid.frozenRowCount;
                  var field = grid.getField(newState.col, fieldRow);

                  if (field == null) {
                    return;
                  }

                  grid.dataSource.sort(field, newState.order || "asc");
                }
              }
            }, {
              key: "bindGridEvent",
              value: function bindGridEvent(grid, cellId) {
                var _this88 = this;

                function isTarget(col, row) {
                  return grid.getLayoutCellId(col, row) === cellId;
                }

                var action = function action(cell) {
                  if (_this88.disabled) {
                    return;
                  }

                  var state = grid.sortState;
                  var newState;
                  var range = grid.getCellRange(cell.col, cell.row);

                  if (isTarget(state.col, cell.row)) {
                    newState = {
                      col: range.start.col,
                      row: range.start.row,
                      order: state.order === "asc" ? "desc" : "asc"
                    };
                  } else {
                    newState = {
                      col: range.start.col,
                      row: range.start.row,
                      order: "asc"
                    };
                  }

                  grid.sortState = newState;

                  _this88._executeSort(newState, grid);

                  grid.invalidateGridRect(0, 0, grid.colCount - 1, grid.rowCount - 1);
                };

                return _toConsumableArray(actionBind_1.bindCellClickAction(grid, cellId, {
                  action: action,
                  mouseOver: function mouseOver(_e) {
                    if (_this88.disabled) {
                      return false;
                    }

                    return true;
                  }
                }));
              }
            }, {
              key: "sort",
              get: function get() {
                return this._sort;
              },
              set: function set(sort) {
                this._sort = sort;
                this.onChangeDisabledInternal();
              }
            }]);

            return SortHeaderAction;
          }(BaseAction_1.BaseAction);

          exports.SortHeaderAction = SortHeaderAction;
          /***/
        },

        /***/
        "./header/action/actionBind.js":
        /*!*************************************!*\
          !*** ./header/action/actionBind.js ***!
          \*************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function headerActionActionBindJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var DG_EVENT_TYPE_1 = __webpack_require__(
          /*! ../../core/DG_EVENT_TYPE */
          "./core/DG_EVENT_TYPE.js");

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          var KEY_ENTER = 13;

          function bindCellClickAction(grid, cellId, _ref64) {
            var action = _ref64.action,
                mouseOver = _ref64.mouseOver,
                mouseOut = _ref64.mouseOut;

            function isTarget(col, row) {
              return grid.getLayoutCellId(col, row) === cellId;
            }

            var inMouse;
            return [// click
            grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.CLICK_CELL, function (e) {
              if (!isTarget(e.col, e.row)) {
                return;
              }

              action({
                col: e.col,
                row: e.row
              });
            }), // mouse move
            grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEOVER_CELL, function (e) {
              if (!isTarget(e.col, e.row)) {
                return;
              }

              if (mouseOver) {
                if (!mouseOver({
                  col: e.col,
                  row: e.row
                })) {
                  return;
                }
              }

              grid.getElement().style.cursor = "pointer";
              inMouse = true;
            }), //横からMOUSEENTERした場合、'col-resize'の処理と競合するのでmoveを監視して処理する
            grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEMOVE_CELL, function (e) {
              if (!isTarget(e.col, e.row)) {
                return;
              }

              if (inMouse && !grid.getElement().style.cursor) {
                grid.getElement().style.cursor = "pointer";
              }
            }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEOUT_CELL, function (e) {
              if (!isTarget(e.col, e.row)) {
                return;
              }

              if (mouseOut) {
                mouseOut({
                  col: e.col,
                  row: e.row
                });
              }

              grid.getElement().style.cursor = "";
              inMouse = false;
            })];
          }

          exports.bindCellClickAction = bindCellClickAction;

          function bindCellKeyAction(grid, cellId, _ref65) {
            var action = _ref65.action,
                _ref65$acceptKeys = _ref65.acceptKeys,
                acceptKeys = _ref65$acceptKeys === void 0 ? [] : _ref65$acceptKeys;
            acceptKeys = [].concat(_toConsumableArray(acceptKeys), [KEY_ENTER]);

            function isTarget(col, row) {
              return grid.getLayoutCellId(col, row) === cellId;
            }

            return [// enter key down
            grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.KEYDOWN, function (e) {
              var _a;

              if (acceptKeys.indexOf(e.keyCode) === -1) {
                return;
              }

              if (((_a = grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnEnter) && e.keyCode === KEY_ENTER) {
                // When moving with the enter key, no action is taken with the enter key.
                return;
              }

              var sel = grid.selection.select;

              if (!isTarget(sel.col, sel.row)) {
                return;
              }

              action({
                col: sel.col,
                row: sel.row
              });
              utils_1.event.cancel(e.event);
            })];
          }

          exports.bindCellKeyAction = bindCellKeyAction;
          /***/
        },

        /***/
        "./header/style.js":
        /*!*************************!*\
          !*** ./header/style.js ***!
          \*************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function headerStyleJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var BaseStyle_1 = __webpack_require__(
          /*! ./style/BaseStyle */
          "./header/style/BaseStyle.js");

          exports.BaseStyle = BaseStyle_1.BaseStyle;

          var CheckHeaderStyle_1 = __webpack_require__(
          /*! ./style/CheckHeaderStyle */
          "./header/style/CheckHeaderStyle.js");

          exports.CheckHeaderStyle = CheckHeaderStyle_1.CheckHeaderStyle;

          var MultilineTextHeaderStyle_1 = __webpack_require__(
          /*! ./style/MultilineTextHeaderStyle */
          "./header/style/MultilineTextHeaderStyle.js");

          exports.MultilineTextHeaderStyle = MultilineTextHeaderStyle_1.MultilineTextHeaderStyle;

          var SortHeaderStyle_1 = __webpack_require__(
          /*! ./style/SortHeaderStyle */
          "./header/style/SortHeaderStyle.js");

          exports.SortHeaderStyle = SortHeaderStyle_1.SortHeaderStyle;

          var Style_1 = __webpack_require__(
          /*! ./style/Style */
          "./header/style/Style.js");

          exports.Style = Style_1.Style;

          function of(headerStyle, StyleClass) {
            if (headerStyle) {
              if (headerStyle instanceof Style_1.Style) {
                return headerStyle;
              } else if (typeof headerStyle === "function") {
                return of(headerStyle(), StyleClass);
              }

              return new StyleClass(headerStyle);
            } else {
              return StyleClass.DEFAULT;
            }
          }

          exports.of = of;
          /***/
        },

        /***/
        "./header/style/BaseStyle.js":
        /*!***********************************!*\
          !*** ./header/style/BaseStyle.js ***!
          \***********************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function headerStyleBaseStyleJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var EventTarget_1 = __webpack_require__(
          /*! ../../core/EventTarget */
          "./core/EventTarget.js");

          var EVENT_TYPE = {
            CHANGE_STYLE: "change_style"
          };
          var defaultStyle;

          var BaseStyle = /*#__PURE__*/function (_EventTarget_1$EventT6) {
            _inherits(BaseStyle, _EventTarget_1$EventT6);

            var _super60 = _createSuper(BaseStyle);

            function BaseStyle() {
              var _this89;

              var _ref66 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                  bgColor = _ref66.bgColor;

              _classCallCheck(this, BaseStyle);

              _this89 = _super60.call(this);
              _this89._bgColor = bgColor;
              return _this89;
            }

            _createClass(BaseStyle, [{
              key: "doChangeStyle",
              value: function doChangeStyle() {
                this.fireListeners(EVENT_TYPE.CHANGE_STYLE);
              }
            }, {
              key: "clone",
              value: function clone() {
                return new BaseStyle(this);
              }
            }, {
              key: "bgColor",
              get: function get() {
                return this._bgColor;
              },
              set: function set(bgColor) {
                this._bgColor = bgColor;
                this.doChangeStyle();
              }
            }], [{
              key: "EVENT_TYPE",
              get: function get() {
                return EVENT_TYPE;
              }
            }, {
              key: "DEFAULT",
              get: function get() {
                return defaultStyle ? defaultStyle : defaultStyle = new BaseStyle();
              }
            }]);

            return BaseStyle;
          }(EventTarget_1.EventTarget);

          exports.BaseStyle = BaseStyle;
          /***/
        },

        /***/
        "./header/style/CheckHeaderStyle.js":
        /*!******************************************!*\
          !*** ./header/style/CheckHeaderStyle.js ***!
          \******************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function headerStyleCheckHeaderStyleJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var Style_1 = __webpack_require__(
          /*! ./Style */
          "./header/style/Style.js");

          function adj(style) {
            var _style$textAlign7 = style.textAlign,
                textAlign = _style$textAlign7 === void 0 ? "center" : _style$textAlign7;
            style.textAlign = textAlign;
            return style;
          }

          var defaultStyle;

          var CheckHeaderStyle = /*#__PURE__*/function (_Style_1$Style7) {
            _inherits(CheckHeaderStyle, _Style_1$Style7);

            var _super61 = _createSuper(CheckHeaderStyle);

            function CheckHeaderStyle() {
              var _this90;

              var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, CheckHeaderStyle);

              _this90 = _super61.call(this, adj(style));
              var uncheckBgColor = style.uncheckBgColor,
                  checkBgColor = style.checkBgColor,
                  borderColor = style.borderColor;
              _this90._uncheckBgColor = uncheckBgColor;
              _this90._checkBgColor = checkBgColor;
              _this90._borderColor = borderColor;
              return _this90;
            }

            _createClass(CheckHeaderStyle, [{
              key: "clone",
              value: function clone() {
                return new CheckHeaderStyle(this);
              }
            }, {
              key: "uncheckBgColor",
              get: function get() {
                return this._uncheckBgColor;
              },
              set: function set(uncheckBgColor) {
                this._uncheckBgColor = uncheckBgColor;
                this.doChangeStyle();
              }
            }, {
              key: "checkBgColor",
              get: function get() {
                return this._checkBgColor;
              },
              set: function set(checkBgColor) {
                this._checkBgColor = checkBgColor;
                this.doChangeStyle();
              }
            }, {
              key: "borderColor",
              get: function get() {
                return this._borderColor;
              },
              set: function set(borderColor) {
                this._borderColor = borderColor;
                this.doChangeStyle();
              }
            }], [{
              key: "DEFAULT",
              get: function get() {
                return defaultStyle ? defaultStyle : defaultStyle = new CheckHeaderStyle();
              }
            }]);

            return CheckHeaderStyle;
          }(Style_1.Style);

          exports.CheckHeaderStyle = CheckHeaderStyle;
          /***/
        },

        /***/
        "./header/style/MultilineTextHeaderStyle.js":
        /*!**************************************************!*\
          !*** ./header/style/MultilineTextHeaderStyle.js ***!
          \**************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function headerStyleMultilineTextHeaderStyleJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var Style_1 = __webpack_require__(
          /*! ./Style */
          "./header/style/Style.js");

          var defaultStyle;

          var MultilineTextHeaderStyle = /*#__PURE__*/function (_Style_1$Style8) {
            _inherits(MultilineTextHeaderStyle, _Style_1$Style8);

            var _super62 = _createSuper(MultilineTextHeaderStyle);

            function MultilineTextHeaderStyle() {
              var _this91;

              var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, MultilineTextHeaderStyle);

              _this91 = _super62.call(this, style);
              _this91._lineHeight = style.lineHeight || "1em";
              _this91._autoWrapText = style.autoWrapText || false;
              _this91._lineClamp = style.lineClamp;
              return _this91;
            }

            _createClass(MultilineTextHeaderStyle, [{
              key: "clone",
              value: function clone() {
                return new MultilineTextHeaderStyle(this);
              }
            }, {
              key: "lineHeight",
              get: function get() {
                return this._lineHeight;
              },
              set: function set(lineHeight) {
                this._lineHeight = lineHeight;
                this.doChangeStyle();
              }
            }, {
              key: "lineClamp",
              get: function get() {
                return this._lineClamp;
              },
              set: function set(lineClamp) {
                this._lineClamp = lineClamp;
                this.doChangeStyle();
              }
            }, {
              key: "autoWrapText",
              get: function get() {
                return this._autoWrapText;
              },
              set: function set(autoWrapText) {
                this._autoWrapText = autoWrapText;
                this.doChangeStyle();
              }
            }], [{
              key: "DEFAULT",
              get: function get() {
                return defaultStyle ? defaultStyle : defaultStyle = new MultilineTextHeaderStyle();
              }
            }]);

            return MultilineTextHeaderStyle;
          }(Style_1.Style);

          exports.MultilineTextHeaderStyle = MultilineTextHeaderStyle;
          /***/
        },

        /***/
        "./header/style/SortHeaderStyle.js":
        /*!*****************************************!*\
          !*** ./header/style/SortHeaderStyle.js ***!
          \*****************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function headerStyleSortHeaderStyleJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var Style_1 = __webpack_require__(
          /*! ./Style */
          "./header/style/Style.js");

          var defaultStyle;

          var SortHeaderStyle = /*#__PURE__*/function (_Style_1$Style9) {
            _inherits(SortHeaderStyle, _Style_1$Style9);

            var _super63 = _createSuper(SortHeaderStyle);

            function SortHeaderStyle() {
              var _this92;

              var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, SortHeaderStyle);

              _this92 = _super63.call(this, style);
              _this92._sortArrowColor = style.sortArrowColor;
              return _this92;
            }

            _createClass(SortHeaderStyle, [{
              key: "clone",
              value: function clone() {
                return new SortHeaderStyle(this);
              }
            }, {
              key: "sortArrowColor",
              get: function get() {
                return this._sortArrowColor;
              },
              set: function set(sortArrowColor) {
                this._sortArrowColor = sortArrowColor;
                this.doChangeStyle();
              }
            }], [{
              key: "DEFAULT",
              get: function get() {
                return defaultStyle ? defaultStyle : defaultStyle = new SortHeaderStyle();
              }
            }]);

            return SortHeaderStyle;
          }(Style_1.Style);

          exports.SortHeaderStyle = SortHeaderStyle;
          /***/
        },

        /***/
        "./header/style/StdBaseStyle.js":
        /*!**************************************!*\
          !*** ./header/style/StdBaseStyle.js ***!
          \**************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function headerStyleStdBaseStyleJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var BaseStyle_1 = __webpack_require__(
          /*! ./BaseStyle */
          "./header/style/BaseStyle.js");

          var defaultStyle;

          var StdBaseStyle = /*#__PURE__*/function (_BaseStyle_1$BaseStyl3) {
            _inherits(StdBaseStyle, _BaseStyle_1$BaseStyl3);

            var _super64 = _createSuper(StdBaseStyle);

            function StdBaseStyle() {
              var _this93;

              var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, StdBaseStyle);

              _this93 = _super64.call(this, style);
              _this93._textAlign = style.textAlign || "left";
              _this93._textBaseline = style.textBaseline || "middle";
              return _this93;
            }

            _createClass(StdBaseStyle, [{
              key: "clone",
              value: function clone() {
                return new StdBaseStyle(this);
              }
            }, {
              key: "textAlign",
              get: function get() {
                return this._textAlign;
              },
              set: function set(textAlign) {
                this._textAlign = textAlign;
                this.doChangeStyle();
              }
            }, {
              key: "textBaseline",
              get: function get() {
                return this._textBaseline;
              },
              set: function set(textBaseline) {
                this._textBaseline = textBaseline;
                this.doChangeStyle();
              }
            }], [{
              key: "DEFAULT",
              get: function get() {
                return defaultStyle ? defaultStyle : defaultStyle = new StdBaseStyle();
              }
            }]);

            return StdBaseStyle;
          }(BaseStyle_1.BaseStyle);

          exports.StdBaseStyle = StdBaseStyle;
          /***/
        },

        /***/
        "./header/style/Style.js":
        /*!*******************************!*\
          !*** ./header/style/Style.js ***!
          \*******************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function headerStyleStyleJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var StdBaseStyle_1 = __webpack_require__(
          /*! ./StdBaseStyle */
          "./header/style/StdBaseStyle.js");

          var defaultStyle;

          var Style = /*#__PURE__*/function (_StdBaseStyle_1$StdBa5) {
            _inherits(Style, _StdBaseStyle_1$StdBa5);

            var _super65 = _createSuper(Style);

            function Style() {
              var _this94;

              var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, Style);

              _this94 = _super65.call(this, style);
              _this94._color = style.color;
              _this94._font = style.font;
              _this94._textOverflow = style.textOverflow || "ellipsis";
              return _this94;
            }

            _createClass(Style, [{
              key: "clone",
              value: function clone() {
                return new Style(this);
              }
            }, {
              key: "color",
              get: function get() {
                return this._color;
              },
              set: function set(color) {
                this._color = color;
                this.doChangeStyle();
              }
            }, {
              key: "font",
              get: function get() {
                return this._font;
              },
              set: function set(font) {
                this._font = font;
                this.doChangeStyle();
              }
            }, {
              key: "textOverflow",
              get: function get() {
                return this._textOverflow;
              },
              set: function set(textOverflow) {
                this._textOverflow = textOverflow;
                this.doChangeStyle();
              }
            }], [{
              key: "DEFAULT",
              get: function get() {
                return defaultStyle ? defaultStyle : defaultStyle = new Style();
              }
            }]);

            return Style;
          }(StdBaseStyle_1.StdBaseStyle);

          exports.Style = Style;
          /***/
        },

        /***/
        "./header/type.js":
        /*!************************!*\
          !*** ./header/type.js ***!
          \************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function headerTypeJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var BaseHeader_1 = __webpack_require__(
          /*! ./type/BaseHeader */
          "./header/type/BaseHeader.js");

          exports.BaseHeader = BaseHeader_1.BaseHeader;

          var CheckHeader_1 = __webpack_require__(
          /*! ./type/CheckHeader */
          "./header/type/CheckHeader.js");

          exports.CheckHeader = CheckHeader_1.CheckHeader;

          var Header_1 = __webpack_require__(
          /*! ./type/Header */
          "./header/type/Header.js");

          exports.Header = Header_1.Header;

          var MultilineTextHeader_1 = __webpack_require__(
          /*! ./type/MultilineTextHeader */
          "./header/type/MultilineTextHeader.js");

          exports.MultilineTextHeader = MultilineTextHeader_1.MultilineTextHeader;

          var SortHeader_1 = __webpack_require__(
          /*! ./type/SortHeader */
          "./header/type/SortHeader.js");

          exports.SortHeader = SortHeader_1.SortHeader;
          var TYPES = {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            DEFAULT: new Header_1.Header(),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            SORT: new SortHeader_1.SortHeader(),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            CHECK: new CheckHeader_1.CheckHeader(),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            MULTILINETEXT: new MultilineTextHeader_1.MultilineTextHeader()
          };

          function of(headerType) {
            if (!headerType) {
              return TYPES.DEFAULT;
            } else if (typeof headerType === "string") {
              var key = headerType.toUpperCase();
              return TYPES[key] || of(null);
            } else {
              return headerType;
            }
          }

          exports.of = of;

          function ofCell(headerCell) {
            if (headerCell.sort) {
              return TYPES.SORT;
            }

            return of(headerCell.headerType);
          }

          exports.ofCell = ofCell;
          /***/
        },

        /***/
        "./header/type/BaseHeader.js":
        /*!***********************************!*\
          !*** ./header/type/BaseHeader.js ***!
          \***********************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function headerTypeBaseHeaderJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var styleContents = __importStar(__webpack_require__(
          /*! ../style */
          "./header/style.js"));

          var BaseStyle_1 = __webpack_require__(
          /*! ../style/BaseStyle */
          "./header/style/BaseStyle.js");

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          var BaseHeader = /*#__PURE__*/function () {
            function BaseHeader() {
              var _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

              _classCallCheck(this, BaseHeader);

              this.onDrawCell = this.onDrawCell.bind(this); //スコープを固定させる
            }

            _createClass(BaseHeader, [{
              key: "onDrawCell",
              value: function onDrawCell(cellValue, info, context, grid) {
                var style = info.style,
                    drawCellBase = info.drawCellBase;
                var helper = grid.getGridCanvasHelper();
                drawCellBase(); //文字描画

                this.drawInternal(this.convertInternal(cellValue), context, styleContents.of(style, this.StyleClass), helper, grid, info);
              }
            }, {
              key: "convertInternal",
              value: function convertInternal(value) {
                if (typeof value === "function") {
                  value = value();
                } // eslint-disable-next-line @typescript-eslint/restrict-template-expressions


                return utils_1.isDef(value) ? "".concat(value) : "";
              }
            }, {
              key: "bindGridEvent",
              value: function bindGridEvent(_grid, _cellId) {
                return [];
              }
            }, {
              key: "StyleClass",
              get: function get() {
                return BaseStyle_1.BaseStyle;
              }
            }]);

            return BaseHeader;
          }();

          exports.BaseHeader = BaseHeader;
          /***/
        },

        /***/
        "./header/type/CheckHeader.js":
        /*!************************************!*\
          !*** ./header/type/CheckHeader.js ***!
          \************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function headerTypeCheckHeaderJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          var BaseHeader_1 = __webpack_require__(
          /*! ./BaseHeader */
          "./header/type/BaseHeader.js");

          var CheckHeaderStyle_1 = __webpack_require__(
          /*! ../style/CheckHeaderStyle */
          "./header/style/CheckHeaderStyle.js");

          var symbolManager_1 = __webpack_require__(
          /*! ../../internal/symbolManager */
          "./internal/symbolManager.js");

          var CHECK_HEADER_STATE_ID = symbolManager_1.getCheckHeaderStateId(); // eslint-disable-next-line @typescript-eslint/no-explicit-any

          function getState(grid) {
            var state = grid[CHECK_HEADER_STATE_ID];

            if (!state) {
              state = {
                elapsed: {},
                block: {}
              };
              utils_1.obj.setReadonly(grid, CHECK_HEADER_STATE_ID, state);
            }

            return state;
          }

          var CheckHeader = /*#__PURE__*/function (_BaseHeader_1$BaseHea) {
            _inherits(CheckHeader, _BaseHeader_1$BaseHea);

            var _super66 = _createSuper(CheckHeader);

            function CheckHeader() {
              _classCallCheck(this, CheckHeader);

              return _super66.apply(this, arguments);
            }

            _createClass(CheckHeader, [{
              key: "clone",
              value: function clone() {
                return new CheckHeader(this);
              }
            }, {
              key: "drawInternal",
              value: function drawInternal(value, context, style, helper, // eslint-disable-next-line @typescript-eslint/no-explicit-any
              grid, _ref67) {
                var drawCellBase = _ref67.drawCellBase;
                var textAlign = style.textAlign,
                    textBaseline = style.textBaseline,
                    borderColor = style.borderColor,
                    checkBgColor = style.checkBgColor,
                    uncheckBgColor = style.uncheckBgColor,
                    bgColor = style.bgColor,
                    color = style.color,
                    font = style.font,
                    textOverflow = style.textOverflow;

                if (bgColor) {
                  drawCellBase({
                    bgColor: bgColor
                  });
                }

                var col = context.col,
                    row = context.row;
                var range = grid.getCellRange(col, row);
                var cellKey = "".concat(range.start.col, ":").concat(range.start.row);

                var _getState = getState(grid),
                    elapsed = _getState.elapsed[cellKey];

                var checked = grid.getHeaderValue(range.start.col, range.start.row);
                var opt = {
                  textAlign: textAlign,
                  textBaseline: textBaseline,
                  borderColor: borderColor,
                  checkBgColor: checkBgColor,
                  uncheckBgColor: uncheckBgColor
                };

                if (utils_1.isDef(elapsed)) {
                  opt.animElapsedTime = elapsed;
                }

                var inlineCheck = helper.buildCheckBoxInline(!!checked, context, opt);
                helper.text([inlineCheck, value], context, {
                  textAlign: textAlign,
                  textBaseline: textBaseline,
                  color: color,
                  font: font,
                  textOverflow: textOverflow
                });
              }
            }, {
              key: "StyleClass",
              get: function get() {
                return CheckHeaderStyle_1.CheckHeaderStyle;
              }
            }]);

            return CheckHeader;
          }(BaseHeader_1.BaseHeader);

          exports.CheckHeader = CheckHeader;
          /***/
        },

        /***/
        "./header/type/Header.js":
        /*!*******************************!*\
          !*** ./header/type/Header.js ***!
          \*******************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function headerTypeHeaderJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var BaseHeader_1 = __webpack_require__(
          /*! ./BaseHeader */
          "./header/type/BaseHeader.js");

          var Style_1 = __webpack_require__(
          /*! ../style/Style */
          "./header/style/Style.js");

          var Header = /*#__PURE__*/function (_BaseHeader_1$BaseHea2) {
            _inherits(Header, _BaseHeader_1$BaseHea2);

            var _super67 = _createSuper(Header);

            function Header() {
              _classCallCheck(this, Header);

              return _super67.apply(this, arguments);
            }

            _createClass(Header, [{
              key: "drawInternal",
              value: function drawInternal(value, context, style, helper, _grid, _ref68) {
                var drawCellBase = _ref68.drawCellBase;
                var textAlign = style.textAlign,
                    textBaseline = style.textBaseline,
                    color = style.color,
                    font = style.font,
                    bgColor = style.bgColor,
                    textOverflow = style.textOverflow;

                if (bgColor) {
                  drawCellBase({
                    bgColor: bgColor
                  });
                }

                helper.text(value, context, {
                  textAlign: textAlign,
                  textBaseline: textBaseline,
                  color: color,
                  font: font,
                  textOverflow: textOverflow
                });
              }
            }, {
              key: "StyleClass",
              get: function get() {
                return Style_1.Style;
              }
            }]);

            return Header;
          }(BaseHeader_1.BaseHeader);

          exports.Header = Header;
          /***/
        },

        /***/
        "./header/type/MultilineTextHeader.js":
        /*!********************************************!*\
          !*** ./header/type/MultilineTextHeader.js ***!
          \********************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function headerTypeMultilineTextHeaderJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var BaseHeader_1 = __webpack_require__(
          /*! ./BaseHeader */
          "./header/type/BaseHeader.js");

          var MultilineTextHeaderStyle_1 = __webpack_require__(
          /*! ../style/MultilineTextHeaderStyle */
          "./header/style/MultilineTextHeaderStyle.js");

          var MultilineTextHeader = /*#__PURE__*/function (_BaseHeader_1$BaseHea3) {
            _inherits(MultilineTextHeader, _BaseHeader_1$BaseHea3);

            var _super68 = _createSuper(MultilineTextHeader);

            function MultilineTextHeader() {
              _classCallCheck(this, MultilineTextHeader);

              return _super68.apply(this, arguments);
            }

            _createClass(MultilineTextHeader, [{
              key: "clone",
              value: function clone() {
                return new MultilineTextHeader(this);
              }
            }, {
              key: "drawInternal",
              value: function drawInternal(value, context, style, helper, _grid, _ref69) {
                var drawCellBase = _ref69.drawCellBase;
                var textAlign = style.textAlign,
                    textBaseline = style.textBaseline,
                    color = style.color,
                    font = style.font,
                    bgColor = style.bgColor,
                    lineHeight = style.lineHeight,
                    autoWrapText = style.autoWrapText,
                    lineClamp = style.lineClamp,
                    textOverflow = style.textOverflow;

                if (bgColor) {
                  drawCellBase({
                    bgColor: bgColor
                  });
                }

                var multilines = value.replace(/\r?\n/g, "\n").replace(/\r/g, "\n").split("\n");
                helper.testFontLoad(font, value, context);
                helper.multilineText(multilines, context, {
                  textAlign: textAlign,
                  textBaseline: textBaseline,
                  color: color,
                  font: font,
                  lineHeight: lineHeight,
                  autoWrapText: autoWrapText,
                  lineClamp: lineClamp,
                  textOverflow: textOverflow
                });
              }
            }, {
              key: "StyleClass",
              get: function get() {
                return MultilineTextHeaderStyle_1.MultilineTextHeaderStyle;
              }
            }]);

            return MultilineTextHeader;
          }(BaseHeader_1.BaseHeader);

          exports.MultilineTextHeader = MultilineTextHeader;
          /***/
        },

        /***/
        "./header/type/SortHeader.js":
        /*!***********************************!*\
          !*** ./header/type/SortHeader.js ***!
          \***********************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function headerTypeSortHeaderJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __webpack_require__(
          /*! ../../internal/utils */
          "./internal/utils.js");

          var BaseHeader_1 = __webpack_require__(
          /*! ./BaseHeader */
          "./header/type/BaseHeader.js");

          var SortHeaderStyle_1 = __webpack_require__(
          /*! ../style/SortHeaderStyle */
          "./header/style/SortHeaderStyle.js");

          var canvases_1 = __webpack_require__(
          /*! ../../internal/canvases */
          "./internal/canvases.js");

          var SortHeader = /*#__PURE__*/function (_BaseHeader_1$BaseHea4) {
            _inherits(SortHeader, _BaseHeader_1$BaseHea4);

            var _super69 = _createSuper(SortHeader);

            function SortHeader() {
              _classCallCheck(this, SortHeader);

              return _super69.apply(this, arguments);
            }

            _createClass(SortHeader, [{
              key: "drawInternal",
              value: function drawInternal(value, context, style, helper, grid, _ref70) {
                var drawCellBase = _ref70.drawCellBase;
                var textAlign = style.textAlign,
                    _style$textBaseline2 = style.textBaseline,
                    textBaseline = _style$textBaseline2 === void 0 ? "middle" : _style$textBaseline2,
                    color = style.color,
                    bgColor = style.bgColor,
                    font = style.font,
                    textOverflow = style.textOverflow,
                    sortArrowColor = style.sortArrowColor;

                if (bgColor) {
                  drawCellBase({
                    bgColor: bgColor
                  });
                }

                var state = grid.sortState;
                var order = undefined;
                var col = context.col,
                    row = context.row;
                var range = grid.getCellRange(col, row);

                if (utils_1.cellInRange(range, state.col, state.row)) {
                  order = state.order;
                }

                var ctx = context.getContext();
                var arrowSize = canvases_1.getFontSize(ctx, font).width * 1.2;
                helper.text(value, context, {
                  textAlign: textAlign,
                  textBaseline: textBaseline,
                  color: color,
                  font: font,
                  textOverflow: textOverflow,
                  icons: [{
                    name: utils_1.isDef(order) ? order === "asc" ? "arrow_downward" : "arrow_upward" : undefined,
                    width: arrowSize,
                    color: helper.getColor(sortArrowColor || helper.theme.header.sortArrowColor, col, row, ctx) || "rgba(0, 0, 0, 0.38)"
                  }]
                });
              }
            }, {
              key: "StyleClass",
              get: function get() {
                return SortHeaderStyle_1.SortHeaderStyle;
              }
            }]);

            return SortHeader;
          }(BaseHeader_1.BaseHeader);

          exports.SortHeader = SortHeader;
          /***/
        },

        /***/
        "./headers.js":
        /*!********************!*\
          !*** ./headers.js ***!
          \********************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function headersJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var action = __importStar(__webpack_require__(
          /*! ./header/action */
          "./header/action.js"));

          exports.action = action;

          var style = __importStar(__webpack_require__(
          /*! ./header/style */
          "./header/style.js"));

          exports.style = style;

          var type = __importStar(__webpack_require__(
          /*! ./header/type */
          "./header/type.js"));

          exports.type = type;
          /***/
        },

        /***/
        "./icons.js":
        /*!******************!*\
          !*** ./icons.js ***!
          \******************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function iconsJs(module, exports, __webpack_require__) {
          "use strict";
          /*eslint-disable @typescript-eslint/camelcase*/

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __webpack_require__(
          /*! ./internal/utils */
          "./internal/utils.js");

          var icons_1 = __webpack_require__(
          /*! ./plugins/icons */
          "./plugins/icons.js");

          var builtins = {
            get arrow_upward() {
              return __webpack_require__(
              /*! cheetah-grid-icon-svg-loader!material-design-icons/navigation/svg/production/ic_arrow_upward_48px.svg */
              "../node_modules/cheetah-grid-icon-svg-loader/lib/index.js!../node_modules/material-design-icons/navigation/svg/production/ic_arrow_upward_48px.svg");
            },

            get arrow_downward() {
              return __webpack_require__(
              /*! cheetah-grid-icon-svg-loader!material-design-icons/navigation/svg/production/ic_arrow_downward_48px.svg */
              "../node_modules/cheetah-grid-icon-svg-loader/lib/index.js!../node_modules/material-design-icons/navigation/svg/production/ic_arrow_downward_48px.svg");
            },

            get edit() {
              return __webpack_require__(
              /*! cheetah-grid-icon-svg-loader!material-design-icons/image/svg/production/ic_edit_48px.svg */
              "../node_modules/cheetah-grid-icon-svg-loader/lib/index.js!../node_modules/material-design-icons/image/svg/production/ic_edit_48px.svg");
            },

            get add() {
              return __webpack_require__(
              /*! cheetah-grid-icon-svg-loader!material-design-icons/content/svg/production/ic_add_48px.svg */
              "../node_modules/cheetah-grid-icon-svg-loader/lib/index.js!../node_modules/material-design-icons/content/svg/production/ic_add_48px.svg");
            },

            get star() {
              return __webpack_require__(
              /*! cheetah-grid-icon-svg-loader!material-design-icons/toggle/svg/production/ic_star_24px.svg */
              "../node_modules/cheetah-grid-icon-svg-loader/lib/index.js!../node_modules/material-design-icons/toggle/svg/production/ic_star_24px.svg");
            },

            get star_border() {
              return __webpack_require__(
              /*! cheetah-grid-icon-svg-loader!material-design-icons/toggle/svg/production/ic_star_border_24px.svg */
              "../node_modules/cheetah-grid-icon-svg-loader/lib/index.js!../node_modules/material-design-icons/toggle/svg/production/ic_star_border_24px.svg");
            },

            get star_half() {
              return __webpack_require__(
              /*! cheetah-grid-icon-svg-loader!material-design-icons/toggle/svg/production/ic_star_half_24px.svg */
              "../node_modules/cheetah-grid-icon-svg-loader/lib/index.js!../node_modules/material-design-icons/toggle/svg/production/ic_star_half_24px.svg");
            }

          };

          function get() {
            return utils_1.extend(builtins, icons_1.icons);
          }

          exports.get = get;
          /***/
        },

        /***/
        "./internal/EventHandler.js":
        /*!**********************************!*\
          !*** ./internal/EventHandler.js ***!
          \**********************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalEventHandlerJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __webpack_require__(
          /*! ./utils */
          "./internal/utils.js");
          /** @private */


          var nextId = 1;

          var EventHandler = /*#__PURE__*/function () {
            function EventHandler() {
              _classCallCheck(this, EventHandler);

              this._listeners = {};
            }

            _createClass(EventHandler, [{
              key: "on",
              value: function on(target, type, listener) {
                for (var _len7 = arguments.length, options = new Array(_len7 > 3 ? _len7 - 3 : 0), _key7 = 3; _key7 < _len7; _key7++) {
                  options[_key7 - 3] = arguments[_key7];
                }

                if (target.addEventListener) {
                  target.addEventListener.apply(target, [type, listener].concat(options));
                }

                var obj = {
                  target: target,
                  type: type,
                  listener: listener,
                  options: options
                };
                var id = nextId++;
                this._listeners[id] = obj;
                return id;
              }
            }, {
              key: "once",
              value: function once(target, type, listener) {
                var _this95 = this;

                for (var _len8 = arguments.length, options = new Array(_len8 > 3 ? _len8 - 3 : 0), _key8 = 3; _key8 < _len8; _key8++) {
                  options[_key8 - 3] = arguments[_key8];
                }

                var id = this.on.apply(this, [target, type, function () {
                  _this95.off(id);

                  listener.apply(void 0, arguments);
                }].concat(options));
                return id;
              }
            }, {
              key: "tryWithOffEvents",
              value: function tryWithOffEvents(target, type, call) {
                var list = [];

                try {
                  utils_1.each(this._listeners, function (obj) {
                    if (obj.target === target && obj.type === type) {
                      if (obj.target.removeEventListener) {
                        var _obj$target;

                        (_obj$target = obj.target).removeEventListener.apply(_obj$target, [obj.type, obj.listener].concat(_toConsumableArray(obj.options)));
                      }

                      list.push(obj);
                    }
                  });
                  call();
                } finally {
                  list.forEach(function (obj) {
                    if (obj.target.addEventListener) {
                      var _obj$target2;

                      (_obj$target2 = obj.target).addEventListener.apply(_obj$target2, [obj.type, obj.listener].concat(_toConsumableArray(obj.options)));
                    }
                  });
                }
              }
            }, {
              key: "off",
              value: function off(id) {
                if (id == null) {
                  return;
                }

                var obj = this._listeners[id];

                if (!obj) {
                  return;
                }

                delete this._listeners[id];

                if (obj.target.removeEventListener) {
                  var _obj$target3;

                  (_obj$target3 = obj.target).removeEventListener.apply(_obj$target3, [obj.type, obj.listener].concat(_toConsumableArray(obj.options)));
                }
              } // eslint-disable-next-line @typescript-eslint/no-explicit-any

            }, {
              key: "fire",
              value: function fire(target, type) {
                for (var _len9 = arguments.length, args = new Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
                  args[_key9 - 2] = arguments[_key9];
                }

                utils_1.each(this._listeners, function (obj) {
                  if (obj.target === target && obj.type === type) {
                    var _obj$listener;

                    (_obj$listener = obj.listener).call.apply(_obj$listener, [obj.target].concat(args));
                  }
                });
              }
            }, {
              key: "hasListener",
              value: function hasListener(target, type) {
                var result = false;
                utils_1.each(this._listeners, function (obj) {
                  if (obj.target === target && obj.type === type) {
                    result = true;
                  }
                });
                return result;
              }
            }, {
              key: "clear",
              value: function clear() {
                utils_1.each(this._listeners, function (obj) {
                  if (obj.target.removeEventListener) {
                    var _obj$target4;

                    (_obj$target4 = obj.target).removeEventListener.apply(_obj$target4, [obj.type, obj.listener].concat(_toConsumableArray(obj.options)));
                  }
                });
                this._listeners = {};
              }
            }, {
              key: "dispose",
              value: function dispose() {
                this.clear(); // eslint-disable-next-line @typescript-eslint/no-explicit-any

                this._listeners = null;
              }
            }]);

            return EventHandler;
          }();

          exports.EventHandler = EventHandler;
          /***/
        },

        /***/
        "./internal/LRUCache.js":
        /*!******************************!*\
          !*** ./internal/LRUCache.js ***!
          \******************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalLRUCacheJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var LRUCache = /*#__PURE__*/function () {
            function LRUCache(cacheSize) {
              _classCallCheck(this, LRUCache);

              this._list = [];
              this._map = {};
              this._cacheSize = cacheSize || 50;
            }

            _createClass(LRUCache, [{
              key: "get",
              value: function get(key) {
                var val = this._map[key];

                if (val) {
                  var list = this._list;
                  var idx = list.indexOf(key);
                  list.splice(idx, 1);
                  list.push(key);
                }

                return val;
              }
            }, {
              key: "put",
              value: function put(key, value) {
                var list = this._list;
                var map = this._map;

                if (map[key]) {
                  var idx = list.indexOf(key);
                  list.splice(idx, 1);
                }

                map[key] = value;
                list.push(key);

                if (list.length > this._cacheSize) {
                  var remKey = list.shift() || "";
                  delete map[remKey];
                }
              }
            }]);

            return LRUCache;
          }();

          exports.LRUCache = LRUCache;
          /***/
        },

        /***/
        "./internal/NumberMap.js":
        /*!*******************************!*\
          !*** ./internal/NumberMap.js ***!
          \*******************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalNumberMapJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var indexFirst = function indexFirst(arr, elm) {
            var low = 0;
            var high = arr.length - 1;

            while (low <= high) {
              var i = Math.floor((low + high) / 2);

              if (arr[i] === elm) {
                return i;
              } else if (arr[i] > elm) {
                high = i - 1;
              } else {
                low = i + 1;
              }
            }

            return high < 0 ? 0 : high;
          };

          var NumberMap = /*#__PURE__*/function () {
            function NumberMap() {
              _classCallCheck(this, NumberMap);

              this._keys = [];
              this._vals = {};
              this._sorted = false;
            }

            _createClass(NumberMap, [{
              key: "put",
              value: function put(key, value) {
                if (!(key in this._vals)) {
                  this._keys.push(key);

                  this._sorted = false;
                }

                this._vals[key] = value;
              }
            }, {
              key: "get",
              value: function get(key) {
                return this._vals[key];
              }
            }, {
              key: "has",
              value: function has(key) {
                return this._vals[key] != null;
              }
            }, {
              key: "each",
              value: function each(keyFrom, keyTo, fn) {
                var keys = this._keys;
                var length = keys.length;

                if (!this._sorted) {
                  keys.sort(function (a, b) {
                    if (a < b) {
                      return -1;
                    }

                    if (a > b) {
                      return 1;
                    }

                    return 0;
                  });
                  this._sorted = true;
                }

                for (var i = indexFirst(keys, keyFrom); i < length; i++) {
                  var key = keys[i];

                  if (keyFrom <= key && key <= keyTo) {
                    fn(this.get(key), key);
                  } else if (keyTo < key) {
                    return;
                  }
                }
              }
            }]);

            return NumberMap;
          }();

          exports.NumberMap = NumberMap;
          /***/
        },

        /***/
        "./internal/Rect.js":
        /*!**************************!*\
          !*** ./internal/Rect.js ***!
          \**************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalRectJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var Rect = /*#__PURE__*/function () {
            function Rect(left, top, width, height) {
              _classCallCheck(this, Rect);

              this._left = left;
              this._top = top;
              this._width = width;
              this._height = height;
            }

            _createClass(Rect, [{
              key: "offsetLeft",
              value: function offsetLeft(offset) {
                this._left += offset;
                this._right = undefined;
              }
            }, {
              key: "offsetTop",
              value: function offsetTop(offset) {
                this._top += offset;
                this._bottom = undefined;
              }
            }, {
              key: "copy",
              value: function copy() {
                return new Rect(this.left, this.top, this.width, this.height);
              }
            }, {
              key: "intersection",
              value: function intersection(rect) {
                var x0 = Math.max(this.left, rect.left);
                var x1 = Math.min(this.left + this.width, rect.left + rect.width);

                if (x0 <= x1) {
                  var y0 = Math.max(this.top, rect.top);
                  var y1 = Math.min(this.top + this.height, rect.top + rect.height);

                  if (y0 <= y1) {
                    return Rect.bounds(x0, y0, x1, y1);
                  }
                }

                return null;
              }
            }, {
              key: "contains",
              value: function contains(another) {
                return this.left <= another.left && this.left + this.width >= another.left + another.width && this.top <= another.top && this.top + this.height >= another.top + another.height;
              }
            }, {
              key: "inPoint",
              value: function inPoint(x, y) {
                return this.left <= x && this.left + this.width >= x && this.top <= y && this.top + this.height >= y;
              }
            }, {
              key: "left",
              get: function get() {
                return this._left;
              },
              set: function set(left) {
                var right = this.right;
                this._left = left;
                this.right = right;
              }
            }, {
              key: "top",
              get: function get() {
                return this._top;
              },
              set: function set(top) {
                var bottom = this.bottom;
                this._top = top;
                this.bottom = bottom;
              }
            }, {
              key: "width",
              get: function get() {
                return this._width;
              },
              set: function set(width) {
                this._width = width;
                this._right = undefined;
              }
            }, {
              key: "height",
              get: function get() {
                return this._height;
              },
              set: function set(height) {
                this._height = height;
                this._bottom = undefined;
              }
            }, {
              key: "right",
              get: function get() {
                return this._right !== undefined ? this._right : this._right = this.left + this.width;
              },
              set: function set(right) {
                this._right = right;
                this.width = right - this.left;
              }
            }, {
              key: "bottom",
              get: function get() {
                return this._bottom !== undefined ? this._bottom : this._bottom = this.top + this.height;
              },
              set: function set(bottom) {
                this._bottom = bottom;
                this.height = bottom - this.top;
              }
            }], [{
              key: "bounds",
              value: function bounds(left, top, right, bottom) {
                return new Rect(left, top, right - left, bottom - top);
              }
            }, {
              key: "max",
              value: function max(rect1, rect2) {
                return Rect.bounds(Math.min(rect1.left, rect2.left), Math.min(rect1.top, rect2.top), Math.max(rect1.right, rect2.right), Math.max(rect1.bottom, rect2.bottom));
              }
            }]);

            return Rect;
          }();

          exports.Rect = Rect;
          /***/
        },

        /***/
        "./internal/Scrollable.js":
        /*!********************************!*\
          !*** ./internal/Scrollable.js ***!
          \********************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalScrollableJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var style = __importStar(__webpack_require__(
          /*! ./style */
          "./internal/style.js"));

          var EventHandler_1 = __webpack_require__(
          /*! ./EventHandler */
          "./internal/EventHandler.js");

          var utils_1 = __webpack_require__(
          /*! ./utils */
          "./internal/utils.js");

          var MAX_SCROLL = utils_1.browser.heightLimit - 1000;

          var Scrollable = /*#__PURE__*/function () {
            function Scrollable() {
              _classCallCheck(this, Scrollable);

              this._p = 1;
              this._handler = new EventHandler_1.EventHandler();
              this._scrollable = document.createElement("div");

              this._scrollable.classList.add("grid-scrollable");

              this._height = 0;
              this._width = 0;
              this._endPointElement = document.createElement("div");

              this._endPointElement.classList.add("grid-scroll-end-point");

              this._update();

              this._scrollable.appendChild(this._endPointElement); // const mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? 'DOMMouseScroll' : 'mousewheel'; //FF doesn't recognize mousewheel as of FF3.x
              // this._handler.on(this._scrollable, mousewheelevt, (evt) => {
              // const delta = evt.detail ? evt.detail * (-120) : evt.wheelDelta;
              // const point = Math.min(Math.abs(delta) / 12, this.scrollHeight / 5);
              // this.scrollTop += delta < 0 ? point : -point;
              // });

            }

            _createClass(Scrollable, [{
              key: "calcTop",
              value: function calcTop(top) {
                var relativeTop = top - this.scrollTop;
                return this._scrollable.scrollTop + relativeTop;
              }
            }, {
              key: "getElement",
              value: function getElement() {
                return this._scrollable;
              }
            }, {
              key: "setScrollSize",
              value: function setScrollSize(width, height) {
                this._width = width;
                this._height = height;

                this._update();
              }
            }, {
              key: "onScroll",
              value: function onScroll(fn) {
                this._handler.on(this._scrollable, "scroll", fn);
              }
            }, {
              key: "dispose",
              value: function dispose() {
                this._handler.dispose();
              }
            }, {
              key: "_update",
              value: function _update() {
                var domHeight;

                if (this._height > MAX_SCROLL) {
                  var sbSize = style.getScrollBarSize();
                  var offsetHeight = this._scrollable.offsetHeight;
                  var vScrollRange = MAX_SCROLL - offsetHeight + sbSize;
                  var rScrollRange = this._height - offsetHeight + sbSize;
                  this._p = vScrollRange / rScrollRange;
                  domHeight = MAX_SCROLL;
                } else {
                  this._p = 1;
                  domHeight = this._height;
                }

                this._endPointElement.style.top = "".concat(domHeight.toFixed(), "px");
                this._endPointElement.style.left = "".concat(this._width.toFixed(), "px");
              }
            }, {
              key: "scrollWidth",
              get: function get() {
                return this._width;
              },
              set: function set(width) {
                this._width = width;

                this._update();
              }
            }, {
              key: "scrollHeight",
              get: function get() {
                return this._height;
              },
              set: function set(height) {
                this._height = height;

                this._update();
              }
            }, {
              key: "scrollLeft",
              get: function get() {
                return Math.max(Math.ceil(this._scrollable.scrollLeft), 0);
              },
              set: function set(scrollLeft) {
                this._scrollable.scrollLeft = scrollLeft;
              }
            }, {
              key: "scrollTop",
              get: function get() {
                return Math.max(Math.ceil(this._scrollable.scrollTop / this._p), 0);
              },
              set: function set(scrollTop) {
                this._scrollable.scrollTop = scrollTop * this._p;
              }
            }]);

            return Scrollable;
          }();

          exports.Scrollable = Scrollable;
          /***/
        },

        /***/
        "./internal/animate.js":
        /*!*****************************!*\
          !*** ./internal/animate.js ***!
          \*****************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalAnimateJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __webpack_require__(
          /*! ./utils */
          "./internal/utils.js");

          function cubicBezier(x2, y2, x3, y3) {
            var step;
            var err = 0.0001;
            x2 *= 3;
            y2 *= 3;
            x3 *= 3;
            y3 *= 3;
            return function (t) {
              var p, a, b, c, d, x, s;

              if (t < 0 || 1 < t) {
                throw new Error("".concat(t));
              }

              p = step || t;

              do {
                a = 1 - p;
                b = a * a;
                c = p * p;
                d = c * p;
                x = x2 * b * p + x3 * a * c + d;
                s = t - x;
                p += s * 0.5;
              } while (err < Math.abs(s));

              step = p;
              return y2 * b * p + y3 * a * c + d;
            };
          }

          var EASINGS = {
            linear: function linear(p) {
              return p;
            },
            easeIn: cubicBezier(0.42, 0.0, 1.0, 1.0),
            easeOut: cubicBezier(0.0, 0.0, 0.58, 1.0),
            easeInOut: cubicBezier(0.42, 0.0, 0.58, 1.0)
          };
          var raf = utils_1.isNode ? function () {} : window.requestAnimationFrame || // eslint-disable-next-line @typescript-eslint/no-explicit-any
          function (fn) {
            return setTimeout(fn, 1);
          };

          function now() {
            return Date.now();
          }
          /**
           * <pre>
           * Animates.
           * </pre>
           * @function
           * @param {number} duration animation time.
           * @param {function} step step
           * @param {function|string} easing easing
           * @returns {object} Deferred object.
           */


          function animate(duration, step, easing) {
            var startedAt = now();
            var easingFn = easing == null ? EASINGS.easeInOut : typeof easing === "string" ? EASINGS[easing] : easing;
            var canceledFlg = false;

            var createAnim = function createAnim(resolve, reject) {
              var anim = function anim() {
                var point = now() - startedAt;

                if (canceledFlg) {
                  //cancel
                  if (reject) {
                    reject();
                  }
                } else if (point >= duration) {
                  //end
                  step(1);

                  if (resolve) {
                    resolve();
                  }
                } else {
                  step(easingFn(point / duration));
                  raf(anim);
                }
              };

              return anim;
            };

            var cancel = function cancel() {
              canceledFlg = true;
            };

            if (typeof Promise !== "undefined") {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              var result = new Promise(function (resolve, reject) {
                var anim = createAnim(resolve, reject);
                step(0);
                anim();
              });
              result.cancel = cancel;
              return result;
            } else {
              var anim = createAnim(function () {}, function () {});
              step(0);
              anim();
              return {
                cancel: cancel
              };
            }
          }

          exports.animate = animate;
          /***/
        },

        /***/
        "./internal/calc.js":
        /*!**************************!*\
          !*** ./internal/calc.js ***!
          \**************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalCalcJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __webpack_require__(
          /*! ./utils */
          "./internal/utils.js");

          var TYPE_PUNCTURE = "p";
          var TYPE_UNIT = "u";
          var TYPE_OPERATOR = "o";
          var TYPE_NUMBER = "n";
          var NODE_TYPE_UNIT = "u";
          var NODE_TYPE_BINARY_EXPRESSION = "b";
          var NODE_TYPE_NUMBER = "n";

          function createError(calc) {
            return new Error("calc parse error: ".concat(calc));
          }
          /**
           * tokenize
           * @param {string} calc calc expression
           * @returns {Array} tokens
           * @private
           */


          function tokenize(calc) {
            var exp = calc.replace(/calc\(/g, "(");
            var reUnit = /^[-+]?(\d*\.\d+|\d+)[a-z%]+/i;
            var reNum = /^[-+]?(\d*\.\d+|\d+)/i;
            var reOp = /^[-+*/]/;
            var tokens = [];
            var re;

            while (exp = exp.trim()) {
              if (exp[0] === "(" || exp[0] === ")") {
                tokens.push({
                  value: exp[0],
                  type: TYPE_PUNCTURE
                });
                exp = exp.slice(1);
              } else if (re = reUnit.exec(exp)) {
                tokens.push({
                  value: re[0],
                  type: TYPE_UNIT
                });
                exp = exp.slice(re[0].length);
              } else if (re = reNum.exec(exp)) {
                tokens.push({
                  value: re[0],
                  type: TYPE_NUMBER
                });
                exp = exp.slice(re[0].length);
              } else if (re = reOp.exec(exp)) {
                tokens.push({
                  value: re[0],
                  type: TYPE_OPERATOR
                });
                exp = exp.slice(re[0].length);
              } else {
                throw createError(calc);
              }
            }

            return tokens;
          }

          var PRECEDENCE = {
            "*": 3,
            "/": 3,
            "+": 2,
            "-": 2
          };

          function lex(tokens, calc) {
            var _a;

            function buildBinaryExpNode(stack) {
              var right = stack.pop();
              var op = stack.pop();
              var left = stack.pop();

              if (!left || !left.nodeType || !op || op.type !== TYPE_OPERATOR || !right || !right.nodeType) {
                throw createError(calc);
              }

              return {
                nodeType: NODE_TYPE_BINARY_EXPRESSION,
                left: left,
                op: op,
                right: right
              };
            }

            var stack = [];

            while (tokens.length) {
              var token = tokens.shift();

              if (token.type === TYPE_PUNCTURE && token.value === "(") {
                (function () {
                  var deep = 0;
                  var closeIndex = utils_1.array.findIndex(tokens, function (t) {
                    if (t.type === TYPE_PUNCTURE && t.value === "(") {
                      deep++;
                    } else if (t.type === TYPE_PUNCTURE && t.value === ")") {
                      if (!deep) {
                        return true;
                      }

                      deep--;
                    }

                    return false;
                  });

                  if (closeIndex === -1) {
                    throw createError(calc);
                  }

                  stack.push(lex(tokens.slice(0, closeIndex), calc));
                  tokens.splice(0, closeIndex + 1);
                })();
              } else if (token.type === TYPE_OPERATOR) {
                if (stack.length >= 3) {
                  var beforeOp = stack[stack.length - 2].value;

                  if (PRECEDENCE[token.value] <= PRECEDENCE[beforeOp]) {
                    stack.push(buildBinaryExpNode(stack));
                  }
                }

                stack.push(token);
              } else if (token.type === TYPE_UNIT) {
                var value = token.value;
                var num = parseFloat(value);
                var unit = ((_a = /[a-z%]+/i.exec(value)) === null || _a === void 0 ? void 0 : _a[0]) || "";
                stack.push({
                  nodeType: NODE_TYPE_UNIT,
                  value: num,
                  unit: unit
                });
              } else if (token.type === TYPE_NUMBER) {
                stack.push({
                  nodeType: NODE_TYPE_NUMBER,
                  value: parseFloat(token.value)
                });
              }
            }

            while (stack.length > 1) {
              stack.push(buildBinaryExpNode(stack));
            }

            return stack[0];
          }

          function parse(calcStr) {
            var tokens = tokenize(calcStr);
            return lex(tokens, calcStr);
          }

          function calcNode(node, context) {
            if (node.nodeType === NODE_TYPE_BINARY_EXPRESSION) {
              var left = calcNode(node.left, context);
              var right = calcNode(node.right, context);

              switch (node.op.value) {
                case "+":
                  return left + right;

                case "-":
                  return left - right;

                case "*":
                  return left * right;

                case "/":
                  return left / right;

                default:
                  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                  throw new Error("calc error. unknown operator: ".concat(node.op.value));
              }
            } else if (node.nodeType === NODE_TYPE_UNIT) {
              switch (node.unit) {
                case "%":
                  return node.value * context.full / 100;

                case "em":
                  return node.value * context.em;

                case "px":
                  return node.value;

                default:
                  throw new Error("calc error. unknown unit: ".concat(node.unit));
              }
            } else if (node.nodeType === NODE_TYPE_NUMBER) {
              return node.value;
            }

            throw new Error("calc error.");
          }

          function toPxInternal(value, context) {
            var ast = parse(value);
            return calcNode(ast, context);
          }

          function toPx(value, context) {
            if (typeof value === "string") {
              return toPxInternal(value.trim(), context);
            }

            return value - 0;
          }

          exports.toPx = toPx;
          /***/
        },

        /***/
        "./internal/canvases.js":
        /*!******************************!*\
          !*** ./internal/canvases.js ***!
          \******************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalCanvasesJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          var fontSizeCache = {};

          function getFontSize(ctx, font) {
            var fontName = font || ctx.font;

            if (fontSizeCache[fontName]) {
              return fontSizeCache[fontName];
            }

            var bk = ctx.font;

            try {
              ctx.font = fontName;
              var em = ctx.measureText("あ").width;
              return fontSizeCache[fontName] = {
                width: em,
                height: em
              };
            } finally {
              ctx.font = bk;
            }
          }

          exports.getFontSize = getFontSize;

          function calcBasePosition(ctx, rect) {
            var _ref71 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                _ref71$offset = _ref71.offset,
                offset = _ref71$offset === void 0 ? 0 : _ref71$offset,
                _ref71$padding = _ref71.padding;

            _ref71$padding = _ref71$padding === void 0 ? {} : _ref71$padding;
            var _ref71$padding$left = _ref71$padding.left,
                paddingLeft = _ref71$padding$left === void 0 ? 0 : _ref71$padding$left,
                _ref71$padding$right = _ref71$padding.right,
                paddingRight = _ref71$padding$right === void 0 ? 0 : _ref71$padding$right,
                _ref71$padding$top = _ref71$padding.top,
                paddingTop = _ref71$padding$top === void 0 ? 0 : _ref71$padding$top,
                _ref71$padding$bottom = _ref71$padding.bottom,
                paddingBottom = _ref71$padding$bottom === void 0 ? 0 : _ref71$padding$bottom;
            return calcStartPosition(ctx, rect, 0, 0, {
              offset: offset,
              padding: {
                left: paddingLeft,
                right: paddingRight,
                top: paddingTop,
                bottom: paddingBottom
              }
            });
          }

          exports.calcBasePosition = calcBasePosition;

          function calcStartPosition(ctx, rect, width, height) {
            var _ref72 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
                _ref72$offset = _ref72.offset,
                offset = _ref72$offset === void 0 ? 0 : _ref72$offset,
                _ref72$padding = _ref72.padding;

            _ref72$padding = _ref72$padding === void 0 ? {} : _ref72$padding;
            var _ref72$padding$left = _ref72$padding.left,
                paddingLeft = _ref72$padding$left === void 0 ? 0 : _ref72$padding$left,
                _ref72$padding$right = _ref72$padding.right,
                paddingRight = _ref72$padding$right === void 0 ? 0 : _ref72$padding$right,
                _ref72$padding$top = _ref72$padding.top,
                paddingTop = _ref72$padding$top === void 0 ? 0 : _ref72$padding$top,
                _ref72$padding$bottom = _ref72$padding.bottom,
                paddingBottom = _ref72$padding$bottom === void 0 ? 0 : _ref72$padding$bottom;
            var textAlign = ctx.textAlign || "left";
            var textBaseline = ctx.textBaseline || "middle";
            ctx.textAlign = textAlign;
            ctx.textBaseline = textBaseline;
            var x = rect.left + offset + paddingLeft;

            if (textAlign === "right" || textAlign === "end") {
              x = rect.right - width - offset - paddingRight;
            } else if (textAlign === "center") {
              x = rect.left + (rect.width - width + paddingLeft - paddingRight) / 2;
            }

            var y = rect.top + offset + paddingTop;

            if (textBaseline === "bottom" || textBaseline === "alphabetic" || textBaseline === "ideographic") {
              y = rect.bottom - height - offset - paddingBottom;
            } else if (textBaseline === "middle") {
              y = rect.top + (rect.height - height + paddingTop - paddingBottom) / 2;
            }

            return {
              x: x,
              y: y
            };
          }

          exports.calcStartPosition = calcStartPosition;
          /***/
        },

        /***/
        "./internal/color.js":
        /*!***************************!*\
          !*** ./internal/color.js ***!
          \***************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalColorJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          var rgbMap = {};

          function styleColorToRGB(color) {
            var dummy = document.createElement("div");
            var style = dummy.style;
            style.color = color;
            style.position = "fixed";
            style.height = "1px";
            style.width = "1px";
            style.opacity = "0";
            document.body.appendChild(dummy);

            var _getComputedStyle = (document.defaultView || window).getComputedStyle(dummy, ""),
                styleColor = _getComputedStyle.color;

            document.body.removeChild(dummy);
            return colorToRGB0(styleColor || "");
          }

          function hexToNum(hex) {
            return parseInt(hex, 16);
          }

          function createRGB(r, g, b) {
            var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
            return {
              r: r,
              g: g,
              b: b,
              a: a
            };
          }

          function tripleHexToRGB(_ref73) {
            var r = _ref73[1],
                g = _ref73[2],
                b = _ref73[3];
            return createRGB(hexToNum(r + r), hexToNum(g + g), hexToNum(b + b));
          }

          function sextupleHexToRGB(_ref74) {
            var r1 = _ref74[1],
                r2 = _ref74[2],
                g1 = _ref74[3],
                g2 = _ref74[4],
                b1 = _ref74[5],
                b2 = _ref74[6];
            return createRGB(hexToNum(r1 + r2), hexToNum(g1 + g2), hexToNum(b1 + b2));
          }

          function testRGB(_ref75) {
            var r = _ref75.r,
                g = _ref75.g,
                b = _ref75.b,
                a = _ref75.a;
            return 0 <= r && r <= 255 && 0 <= g && g <= 255 && 0 <= b && b <= 255 && 0 <= a && a <= 1;
          }

          function rateToByte(r) {
            return Math.ceil(r * 255 / 100);
          }

          function colorToRGB0(color) {
            if (/^#[0-9a-f]{3}$/i.exec(color)) {
              return tripleHexToRGB(color);
            }

            if (/^#[0-9a-f]{6}$/i.exec(color)) {
              return sextupleHexToRGB(color);
            }

            var ret = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i.exec(color);

            if (ret) {
              var rgb = createRGB(Number(ret[1]), Number(ret[2]), Number(ret[3]));

              if (testRGB(rgb)) {
                return rgb;
              }
            }

            ret = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d(\.\d)?)\s*\)$/i.exec(color);

            if (ret) {
              var _rgb = createRGB(Number(ret[1]), Number(ret[2]), Number(ret[3]), Number(ret[4]));

              if (testRGB(_rgb)) {
                return _rgb;
              }
            }

            ret = /^rgb\(\s*(\d{1,3}(\.\d)?)%\s*,\s*(\d{1,3}(\.\d)?)%\s*,\s*(\d{1,3}(\.\d)?)%\s*\)$/i.exec(color);

            if (ret) {
              var _rgb2 = createRGB(rateToByte(Number(ret[1])), rateToByte(Number(ret[3])), rateToByte(Number(ret[5])));

              if (testRGB(_rgb2)) {
                return _rgb2;
              }
            }

            ret = /^rgba\(\s*(\d{1,3}(\.\d)?)%\s*,\s*(\d{1,3}(\.\d)?)%\s*,\s*(\d{1,3}(\.\d)?)%\s*,\s*(\d(\.\d)?)\s*\)$/i.exec(color);

            if (ret) {
              var _rgb3 = createRGB(rateToByte(Number(ret[1])), rateToByte(Number(ret[3])), rateToByte(Number(ret[5])), Number(ret[7]));

              if (testRGB(_rgb3)) {
                return _rgb3;
              }
            }

            return null;
          }

          function colorToRGB(color) {
            if (typeof color !== "string") {
              return createRGB(0, 0, 0, 0);
            }

            color = color.toLowerCase().trim();

            if (rgbMap[color]) {
              return rgbMap[color];
            }

            return colorToRGB0(color) || (rgbMap[color] = styleColorToRGB(color));
          }

          exports.colorToRGB = colorToRGB;
          /***/
        },

        /***/
        "./internal/dom.js":
        /*!*************************!*\
          !*** ./internal/dom.js ***!
          \*************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalDomJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __webpack_require__(
          /*! ./utils */
          "./internal/utils.js");

          function createElement(tagName) {
            var _ref76 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                classList = _ref76.classList,
                text = _ref76.text,
                html = _ref76.html;

            var element = document.createElement(tagName);

            if (classList) {
              if (Array.isArray(classList)) {
                var _element$classList;

                (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(classList));
              } else {
                element.classList.add(classList);
              }
            }

            if (text) {
              element.textContent = text;
            } else if (html) {
              element.innerHTML = html;
            }

            return element;
          }

          exports.createElement = createElement;

          function empty(dom) {
            var c;

            while (c = dom.firstChild) {
              dom.removeChild(c);
            }
          }

          exports.empty = empty;

          function isNode(arg) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return !!(arg.nodeType && arg.nodeName);
          }

          function toNode(arg) {
            if (isNode(arg)) {
              return arg;
            }

            var dom = createElement("div", {
              html: arg
            });
            return Array.prototype.slice.call(dom.childNodes);
          }

          function toNodeList(arg) {
            if (Array.isArray(arg)) {
              var result = [];
              arg.forEach(function (e) {
                result.push.apply(result, _toConsumableArray(toNodeList(e)));
              });
              return result;
            }

            var node = toNode(arg);
            return Array.isArray(node) ? node : [node];
          }

          exports.toNodeList = toNodeList;

          function appendHtml(dom, inner) {
            toNodeList(inner).forEach(function (node) {
              dom.appendChild(node);
            });
          }

          exports.appendHtml = appendHtml;

          function disableFocus(el) {
            el.dataset.disableBeforeTabIndex = "".concat(el.tabIndex);
            el.tabIndex = -1;
            Array.prototype.slice.call(el.children, 0).forEach(disableFocus);
          }

          exports.disableFocus = disableFocus;

          function enableFocus(el) {
            if ("disableBeforeTabIndex" in el.dataset) {
              el.tabIndex = Number(el.dataset.disableBeforeTabIndex);
            }

            Array.prototype.slice.call(el.children, 0).forEach(enableFocus);
          }

          exports.enableFocus = enableFocus;

          function isFocusable(el) {
            return utils_1.isDef(el.tabIndex) && el.tabIndex > -1;
          }

          exports.isFocusable = isFocusable;

          function findPrevSiblingFocusable(el) {
            var n = el.previousSibling;

            while (n && !isFocusable(n)) {
              n = n.previousSibling;
            }

            return n;
          }

          exports.findPrevSiblingFocusable = findPrevSiblingFocusable;

          function findNextSiblingFocusable(el) {
            var n = el.nextSibling;

            while (n && !isFocusable(n)) {
              n = n.nextSibling;
            }

            return n;
          }

          exports.findNextSiblingFocusable = findNextSiblingFocusable;
          /***/
        },

        /***/
        "./internal/fonts.js":
        /*!***************************!*\
          !*** ./internal/fonts.js ***!
          \***************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalFontsJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __webpack_require__(
          /*! ./utils */
          "./internal/utils.js");

          var loads = {};
          var load;
          exports.load = load;
          var check;
          exports.check = check;

          if (utils_1.isNode) {
            exports.load = load = function load(_font, _testStr, callback) {
              callback();
            };

            exports.check = check = function check() {
              return false;
            };
          } else {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var fontFaceSet = document.fonts;
            var legacy = !fontFaceSet;
            exports.load = load = legacy ? function (font, testStr, callback) {
              //for legacy(IE)
              if (loads["".concat(font, " @ ").concat(testStr)]) {
                callback();
                return;
              }

              __webpack_require__(
              /*! ./legacy/fontwatch/FontWatchRunner */
              "./internal/legacy/fontwatch/FontWatchRunner.js").load(font, testStr, function () {
                loads["".concat(font, " @ ").concat(testStr)] = true;
                callback();
              }, function () {
                loads["".concat(font, " @ ").concat(testStr)] = true;
                callback();
              });
            } : function (font, _testStr, callback) {
              if (loads.all || loads[font]) {
                callback();
                return;
              }

              fontFaceSet.ready.then(function () {
                loads.all = true;
              });
              fontFaceSet.load(font).then(function () {
                loads[font] = true;
                callback();
              });
            };
            exports.check = check = legacy ? function (font, testStr) {
              //for legacy(IE)
              if (loads["".concat(font, " @ ").concat(testStr)]) {
                return true;
              }

              load(font, testStr, function () {});
              return false;
            } : function (font, testStr) {
              if (loads.all || loads[font]) {
                return true;
              }

              if (!fontFaceSet.check(font)) {
                load(font, testStr, function () {});
                return false;
              }

              return true;
            };
          }
          /***/

        },

        /***/
        "./internal/hiDPI.js":
        /*!***************************!*\
          !*** ./internal/hiDPI.js ***!
          \***************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalHiDPIJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var EventHandler_1 = __webpack_require__(
          /*! ./EventHandler */
          "./internal/EventHandler.js");

          var utils_1 = __webpack_require__(
          /*! ./utils */
          "./internal/utils.js");

          var handler = new EventHandler_1.EventHandler();
          var ratio = 1;

          function setRatio() {
            if (utils_1.isNode) {
              ratio = 1;
            } else {
              ratio = Math.ceil(window.devicePixelRatio || 1);

              if (ratio > 1 && ratio % 2 !== 0) {
                ratio += 1;
              }
            }
          }

          setRatio();

          if (!utils_1.isNode) {
            handler.on(window, "resize", setRatio);
          }

          function transform(canvas) {
            var ctx = canvas.getContext("2d");
            var getAttribute = canvas.getAttribute,
                setAttribute = canvas.setAttribute;

            canvas.getAttribute = function (name) {
              var result = getAttribute.call(this, name);

              if (name === "width" || name === "height") {
                result = "".concat(Number(result) / ratio);
              }

              return result;
            };

            canvas.setAttribute = function (name, val) {
              var wh = name === "width" || name === "height";

              if (wh) {
                val = "".concat(Number(val) * ratio);
              }

              var result = setAttribute.call(this, name, val);

              if (wh) {
                ctx.scale(ratio, ratio);
              }

              return result;
            };

            Object.defineProperty(canvas, "width", {
              get: function get() {
                return Number(canvas.getAttribute("width"));
              },
              set: function set(val) {
                canvas.setAttribute("width", "".concat(Math.floor(val)));
              },
              configurable: true,
              enumerable: true
            });
            Object.defineProperty(canvas, "height", {
              get: function get() {
                return Number(canvas.getAttribute("height"));
              },
              set: function set(val) {
                canvas.setAttribute("height", "".concat(Math.floor(val)));
              },
              configurable: true,
              enumerable: true
            });
            var drawImage = ctx.drawImage; // eslint-disable-next-line @typescript-eslint/no-explicit-any

            ctx.drawImage = function (img) {
              for (var _len10 = arguments.length, args = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
                args[_key10 - 1] = arguments[_key10];
              }

              if (img !== canvas || ratio === 1) {
                return drawImage.call.apply(drawImage, [this, img].concat(args));
              }

              this.save();

              try {
                this.scale(1 / ratio, 1 / ratio);

                if (args.length > 4) {
                  args[4] *= ratio;
                  args[5] *= ratio;
                } else {
                  args[0] *= ratio;
                  args[1] *= ratio;
                }

                return drawImage.call.apply(drawImage, [this, img].concat(args));
              } finally {
                this.restore();
              }
            };

            return canvas;
          }

          exports.transform = transform;
          /***/
        },

        /***/
        "./internal/icons.js":
        /*!***************************!*\
          !*** ./internal/icons.js ***!
          \***************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalIconsJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __webpack_require__(
          /*! ./utils */
          "./internal/utils.js");

          var ICON_PROP_KEYS = ["content", "font", "color", "className", "tagName", "isLiga", "width", "src", "svg", "name", "path"];

          function quote(name) {
            var quoted = [];
            var split = name.split(/,\s*/);

            for (var i = 0; i < split.length; i++) {
              var part = split[i].replace(/['"]/g, "");

              if (part.indexOf(" ") === -1 && !/^\d/.test(part)) {
                quoted.push(part);
              } else {
                quoted.push("'".concat(part, "'"));
              }
            }

            return quoted.join(",");
          }

          var doms = {};
          var props = {};

          function getIconProps(tagName, className) {
            var tagProps = props[tagName] || (props[tagName] = {});

            if (tagProps[className]) {
              return tagProps[className];
            }

            var dom = doms[tagName] || (doms[tagName] = document.createElement(tagName));
            dom.className = className;
            document.body.appendChild(dom);

            try {
              var beforeStyle = (document.defaultView || window).getComputedStyle(dom, "::before");
              var content = beforeStyle.getPropertyValue("content");

              if (content.length >= 3 && (content[0] === '"' || content[0] === "'")) {
                if (content[0] === content[content.length - 1]) {
                  content = content.substr(1, content.length - 2);
                }
              }

              var font = beforeStyle.getPropertyValue("font");

              if (!font) {
                font = "".concat(beforeStyle.getPropertyValue("font-style"), " ").concat(beforeStyle.getPropertyValue("font-variant"), " ").concat(beforeStyle.getPropertyValue("font-weight"), " ").concat(beforeStyle.getPropertyValue("font-size"), "/").concat(beforeStyle.getPropertyValue("line-height"), " ").concat(quote(beforeStyle.getPropertyValue("font-family")));
              }

              var color = beforeStyle.getPropertyValue("color");
              var width = dom.clientWidth;
              var isLiga = (beforeStyle.getPropertyValue("font-feature-settings") || "").indexOf("liga") > -1;
              return tagProps[className] = {
                content: content,
                font: font,
                color: color,
                width: width,
                isLiga: isLiga
              };
            } finally {
              document.body.removeChild(dom);
            }
          }

          exports.getIconProps = getIconProps;

          function toPropArray(prop, count) {
            var result = [];

            if (Array.isArray(prop)) {
              result.push.apply(result, _toConsumableArray(prop));

              for (var i = prop.length; i < count; i++) {
                result.push(null);
              }
            } else {
              for (var _i = 0; _i < count; _i++) {
                result.push(prop);
              }
            }

            return result;
          }

          function toSimpleArray(iconProps) {
            if (!iconProps) {
              return iconProps;
            } else if (Array.isArray(iconProps)) {
              return iconProps;
            }

            var workData = {};
            var count = 0;
            ICON_PROP_KEYS.forEach(function (k) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              var prop = iconProps[k];

              if (prop) {
                if (Array.isArray(prop)) {
                  count = Math.max(count, prop.length);
                } else {
                  count = Math.max(count, 1);
                }
              }
            });
            ICON_PROP_KEYS.forEach(function (k) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              var arr = toPropArray(iconProps[k], count); // eslint-disable-next-line @typescript-eslint/no-explicit-any

              workData[k] = arr;
            });
            var result = [];

            var _loop4 = function _loop4(i) {
              var data = {};
              ICON_PROP_KEYS.forEach(function (k) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var val = workData[k][i]; // eslint-disable-next-line @typescript-eslint/no-explicit-any

                data[k] = val;
              });
              result.push(data);
            };

            for (var i = 0; i < count; i++) {
              _loop4(i);
            }

            return result;
          }

          function normarize(iconProps) {
            var data = {};

            for (var k in iconProps) {
              if (k === "className") {
                continue;
              }

              if (isIconKey(k)) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                data[k] = iconProps[k];
              }
            }

            if (iconProps.className) {
              var prop = getIconProps(iconProps.tagName || "i", iconProps.className);

              for (var _k2 in prop) {
                if (isIconKey(_k2)) {
                  if (!utils_1.isDef(iconProps[_k2])) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    data[_k2] = prop[_k2];
                  }
                }
              }
            }

            return data;
          }

          function toNormarizeArray(iconProps) {
            var icons = toSimpleArray(iconProps);

            if (!icons) {
              return icons;
            }

            return icons.map(function (icon) {
              return normarize(icon);
            });
          }

          exports.toNormarizeArray = toNormarizeArray;
          exports.iconPropKeys = ICON_PROP_KEYS;

          function isIconKey(k) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return ICON_PROP_KEYS.indexOf(k) >= 0;
          }
          /***/

        },

        /***/
        "./internal/imgs.js":
        /*!**************************!*\
          !*** ./internal/imgs.js ***!
          \**************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalImgsJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var LRUCache_1 = __webpack_require__(
          /*! ./LRUCache */
          "./internal/LRUCache.js");

          var utils_1 = __webpack_require__(
          /*! ./utils */
          "./internal/utils.js");

          var allCache = {};

          function isDataUrl(url) {
            return url.search(/^(data:)/) !== -1;
          }

          function loadImage(src) {
            if (typeof Promise === "undefined") {
              console.error("Promise is not loaded. load Promise before this process.");
              return {
                then: function then() {
                  return this;
                }
              };
            }

            var img = new Image();
            var result = new Promise(function (resolve) {
              img.onload = function () {
                resolve(img);
              };
            });

            img.onerror = function () {
              var url = src.length > 200 ? "".concat(src.substr(0, 200), "...") : src;
              console.warn("cannot load: ".concat(url));
              throw new Error("IMAGE LOAD ERROR: ".concat(url));
            };

            img.src = isDataUrl(src) ? src : "".concat(src, "?").concat(Date.now());
            return result;
          }

          exports.loadImage = loadImage;

          function getCacheOrLoad0(cache, src) {
            return utils_1.then(src, function (src) {
              var c = cache.get(src);

              if (c) {
                return c;
              }

              var result = loadImage(src).then(function (img) {
                cache.put(src, img);
                return img;
              });
              cache.put(src, result);
              return result;
            });
          }

          function getCacheOrLoad(cacheName, cacheSize, src) {
            var cache = allCache[cacheName] || (allCache[cacheName] = new LRUCache_1.LRUCache(cacheSize));
            return getCacheOrLoad0(cache, src);
          }

          exports.getCacheOrLoad = getCacheOrLoad;
          /***/
        },

        /***/
        "./internal/legacy/canvas/Path2DShim.js":
        /*!**********************************************!*\
          !*** ./internal/legacy/canvas/Path2DShim.js ***!
          \**********************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalLegacyCanvasPath2DShimJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var PathCommandsParser_1 = __webpack_require__(
          /*! ./PathCommandsParser */
          "./internal/legacy/canvas/PathCommandsParser.js");

          var parser = new PathCommandsParser_1.PathCommandsParser();

          var Path2DShim = /*#__PURE__*/function () {
            function Path2DShim(arg) {
              _classCallCheck(this, Path2DShim);

              this._ops = [];

              if (arg === undefined) {
                return;
              }

              if (typeof arg === "string") {
                // try {
                this._ops = parser.parse(arg); // } catch (e) {
                // 	throw e;
                // }
              } else if (arg.hasOwnProperty("_ops")) {
                this._ops = _toConsumableArray(arg._ops);
              } else {
                throw new Error("Error: ".concat(_typeof(arg), " is not a valid argument to Path"));
              }
            }

            _createClass(Path2DShim, [{
              key: "arc",
              value: function arc() {
                for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
                  args[_key11] = arguments[_key11];
                }

                this._ops.push({
                  op: "arc",
                  args: args
                });
              }
            }, {
              key: "arcTo",
              value: function arcTo() {
                for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
                  args[_key12] = arguments[_key12];
                }

                this._ops.push({
                  op: "arcTo",
                  args: args
                });
              }
            }, {
              key: "bezierCurveTo",
              value: function bezierCurveTo() {
                for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
                  args[_key13] = arguments[_key13];
                }

                this._ops.push({
                  op: "bezierCurveTo",
                  args: args
                });
              }
            }, {
              key: "closePath",
              value: function closePath() {
                for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
                  args[_key14] = arguments[_key14];
                }

                this._ops.push({
                  op: "closePath",
                  args: args
                });
              }
            }, {
              key: "ellipse",
              value: function ellipse() {
                for (var _len15 = arguments.length, args = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
                  args[_key15] = arguments[_key15];
                }

                this._ops.push({
                  op: "ellipse",
                  args: args
                });
              }
            }, {
              key: "lineTo",
              value: function lineTo() {
                for (var _len16 = arguments.length, args = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
                  args[_key16] = arguments[_key16];
                }

                this._ops.push({
                  op: "lineTo",
                  args: args
                });
              }
            }, {
              key: "moveTo",
              value: function moveTo() {
                for (var _len17 = arguments.length, args = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
                  args[_key17] = arguments[_key17];
                }

                this._ops.push({
                  op: "moveTo",
                  args: args
                });
              }
            }, {
              key: "quadraticCurveTo",
              value: function quadraticCurveTo() {
                for (var _len18 = arguments.length, args = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
                  args[_key18] = arguments[_key18];
                }

                this._ops.push({
                  op: "quadraticCurveTo",
                  args: args
                });
              }
            }, {
              key: "rect",
              value: function rect() {
                for (var _len19 = arguments.length, args = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
                  args[_key19] = arguments[_key19];
                }

                this._ops.push({
                  op: "rect",
                  args: args
                });
              }
            }]);

            return Path2DShim;
          }();

          exports.Path2DShim = Path2DShim;
          var CanvasRenderingContext2D = window.CanvasRenderingContext2D;
          var originalFill = CanvasRenderingContext2D.prototype.fill; // eslint-disable-next-line @typescript-eslint/no-explicit-any

          CanvasRenderingContext2D.prototype.fill = function () {
            var _this96 = this;

            for (var _len20 = arguments.length, args = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
              args[_key20] = arguments[_key20];
            }

            if (args[0] instanceof Path2DShim) {
              var path = args[0];
              this.beginPath();

              path._ops.forEach(function (op) {
                var fn = _this96[op.op];
                fn.apply(_this96, op.args);
              });

              originalFill.apply(this, Array.prototype.slice.call(args, 1));
            } else {
              originalFill.apply(this, args);
            }
          };
          /***/

        },

        /***/
        "./internal/legacy/canvas/PathCommands.js":
        /*!************************************************!*\
          !*** ./internal/legacy/canvas/PathCommands.js ***!
          \************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalLegacyCanvasPathCommandsJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          /*eslint new-cap: "off"*/

          function mag(v) {
            return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
          }

          function dot(u, v) {
            return u[0] * v[0] + u[1] * v[1];
          }

          function ratio(u, v) {
            return dot(u, v) / (mag(u) * mag(v));
          }

          function clamp(value, min, max) {
            return Math.min(Math.max(value, min), max);
          }

          function angle(u, v) {
            var sign = 1.0;

            if (u[0] * v[1] - u[1] * v[0] < 0) {
              sign = -1.0;
            }

            return sign * Math.acos(clamp(ratio(u, v), -1, 1));
          }

          function rotClockwise(v, angle) {
            var cost = Math.cos(angle);
            var sint = Math.sin(angle);
            return [cost * v[0] + sint * v[1], -1 * sint * v[0] + cost * v[1]];
          }

          function rotCounterClockwise(v, angle) {
            var cost = Math.cos(angle);
            var sint = Math.sin(angle);
            return [cost * v[0] - sint * v[1], sint * v[0] + cost * v[1]];
          }

          function midPoint(u, v) {
            return [(u[0] - v[0]) / 2.0, (u[1] - v[1]) / 2.0];
          }

          function meanVec(u, v) {
            return [(u[0] + v[0]) / 2.0, (u[1] + v[1]) / 2.0];
          }

          function pointMul(u, v) {
            return [u[0] * v[0], u[1] * v[1]];
          }

          function scale(c, v) {
            return [c * v[0], c * v[1]];
          }

          function sum(u, v) {
            return [u[0] + v[0], u[1] + v[1]];
          } // Convert an SVG elliptical arc to a series of canvas commands.
          //
          // x1, y1, x2, y2: start and stop coordinates of the ellipse.
          // rx, ry: radii of the ellipse.
          // phi: rotation of the ellipse.
          // fA: large arc flag.
          // fS: sweep flag.


          function ellipseFromEllipticalArc(ctx, x1, y1, rx, ry, phi, fA, fS, x2, y2) {
            // Convert from endpoint to center parametrization, as detailed in:
            //   http://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes
            if (rx === 0 || ry === 0) {
              ctx.lineTo(x2, x1);
              return;
            }

            phi *= Math.PI / 180.0;
            rx = Math.abs(rx);
            ry = Math.abs(ry);
            var xPrime = rotClockwise(midPoint([x1, y1], [x2, y2]), phi); // F.6.5.1

            var xPrime2 = pointMul(xPrime, xPrime);
            var rx2 = Math.pow(rx, 2);
            var ry2 = Math.pow(ry, 2);
            var lambda = Math.sqrt(xPrime2[0] / rx2 + xPrime2[1] / ry2);

            if (lambda > 1) {
              rx *= lambda;
              ry *= lambda;
              rx2 = Math.pow(rx, 2);
              ry2 = Math.pow(ry, 2);
            }

            var factor = Math.sqrt(Math.abs(rx2 * ry2 - rx2 * xPrime2[1] - ry2 * xPrime2[0]) / (rx2 * xPrime2[1] + ry2 * xPrime2[0]));

            if (fA === fS) {
              factor *= -1.0;
            }

            var cPrime = scale(factor, [rx * xPrime[1] / ry, -ry * xPrime[0] / rx]); // F.6.5.2

            var c = sum(rotCounterClockwise(cPrime, phi), meanVec([x1, y1], [x2, y2])); // F.6.5.3

            var x1UnitVector = [(xPrime[0] - cPrime[0]) / rx, (xPrime[1] - cPrime[1]) / ry];
            var x2UnitVector = [(-1.0 * xPrime[0] - cPrime[0]) / rx, (-1.0 * xPrime[1] - cPrime[1]) / ry];
            var theta = angle([1, 0], x1UnitVector); // F.6.5.5

            var deltaTheta = angle(x1UnitVector, x2UnitVector); // F.6.5.6

            var start = theta;
            var end = theta + deltaTheta;
            ctx.save();
            ctx.translate(c[0], c[1]);
            ctx.rotate(phi);
            ctx.scale(rx, ry);
            ctx.arc(0, 0, 1, start, end, !fS);
            ctx.restore();
          }

          var PathCommands = function PathCommands(ctx) {
            var _this97 = this;

            _classCallCheck(this, PathCommands);

            var lMx;
            var lMy;
            var lx = 0;
            var ly = 0;
            var reflected;
            var lastCommand = "";

            function makeReflected() {
              if ("CcSsQqTt".indexOf(lastCommand) < 0) {
                return {
                  x: lx,
                  y: ly
                };
              }

              return reflected;
            }

            this.M = function (px, py) {
              ctx.moveTo(px, py);
              lMx = px;
              lMy = py;
              lx = px;
              ly = py;
              lastCommand = "M";
              return _this97;
            };

            this.m = function (px, py) {
              return _this97.M(px + lx, py + ly);
            };

            this.L = function (px, py) {
              ctx.lineTo(px, py);
              lx = px;
              ly = py;
              lastCommand = "L";
              return _this97;
            };

            this.l = function (px, py) {
              return _this97.L(px + lx, py + ly);
            };

            this.H = function (px) {
              return _this97.L(px, ly);
            };

            this.h = function (px) {
              return _this97.H(px + lx);
            };

            this.V = function (py) {
              return _this97.L(lx, py);
            };

            this.v = function (py) {
              return _this97.V(py + ly);
            };

            this.Z = function () {
              ctx.closePath();
              lx = lMx;
              ly = lMy;
              lastCommand = "Z";
              return _this97;
            };

            this.z = function () {
              return _this97.Z();
            }; //C x1 y1, x2 y2, x y (or c dx1 dy1, dx2 dy2, dx dy)


            this.C = function (cp1x, cp1y, cp2x, cp2y, px, py) {
              ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, px, py);
              lx = px;
              ly = py;
              reflected = {
                x: 2 * px - cp2x,
                y: 2 * py - cp2y
              };
              lastCommand = "C";
              return _this97;
            };

            this.c = function (cp1x, cp1y, cp2x, cp2y, px, py) {
              return _this97.C(cp1x + lx, cp1y + ly, cp2x + lx, cp2y + ly, px + lx, py + ly);
            }; //S x2 y2, x y (or s dx2 dy2, dx dy)


            this.S = function (cpx, cpy, px, py) {
              var _makeReflected = makeReflected(),
                  cp1x = _makeReflected.x,
                  cp1y = _makeReflected.y;

              return _this97.C(cp1x, cp1y, cpx, cpy, px, py);
            };

            this.s = function (cpx, cpy, px, py) {
              return _this97.S(cpx + lx, cpy + ly, px + lx, py + ly);
            }; //Q x1 y1, x y (or q dx1 dy1, dx dy)


            this.Q = function (cpx, cpy, px, py) {
              ctx.quadraticCurveTo(cpx, cpy, px, py);
              lx = px;
              ly = py;
              reflected = {
                x: 2 * px - cpx,
                y: 2 * py - cpy
              };
              lastCommand = "Q";
              return _this97;
            };

            this.q = function (cpx, cpy, px, py) {
              return _this97.Q(cpx + lx, cpy + ly, px + lx, py + ly);
            }; //T x y (or t dx dy)


            this.T = function (px, py) {
              var _makeReflected2 = makeReflected(),
                  cpx = _makeReflected2.x,
                  cpy = _makeReflected2.y;

              return _this97.Q(cpx, cpy, px, py);
            };

            this.t = function (px, py) {
              return _this97.T(px + lx, py + ly);
            }; //A rx ry x-axis-rotation large-arc-flag sweep-flag x y


            this.A = function (rx, ry, xAxisRotation, largeArcFlag, sweepFlag, px, py) {
              var x1 = lx;
              var y1 = ly;
              ellipseFromEllipticalArc(ctx, x1, y1, rx, ry, xAxisRotation, largeArcFlag, sweepFlag, px, py);
              lx = px;
              ly = py;
              lastCommand = "A";
              return _this97;
            }; //a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy


            this.a = function (rx, ry, xAxisRotation, largeArcFlag, sweepFlag, px, py) {
              return _this97.A(rx, ry, xAxisRotation, largeArcFlag, sweepFlag, px + lx, py + ly);
            };
          };

          exports.PathCommands = PathCommands;
          /***/
        },

        /***/
        "./internal/legacy/canvas/PathCommandsParser.js":
        /*!******************************************************!*\
          !*** ./internal/legacy/canvas/PathCommandsParser.js ***!
          \******************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalLegacyCanvasPathCommandsParserJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var PathCommands_1 = __webpack_require__(
          /*! ./PathCommands */
          "./internal/legacy/canvas/PathCommands.js");

          function pathTokens(d) {
            var idx = 0;
            return {
              next: function next() {
                var s = "";

                while (d.length > idx) {
                  var c = d[idx];
                  idx++;

                  if (" ,\n\r\t".indexOf(c) > -1) {
                    if (s) {
                      return s;
                    }
                  } else {
                    var type = ".+-1234567890".indexOf(c) > -1 ? "num" : "str";

                    if (type === "str") {
                      if (s) {
                        idx--;
                        return s;
                      }

                      return c;
                    }

                    if ("-+".indexOf(c) > -1) {
                      if (s) {
                        idx--;
                        return s;
                      }
                    }

                    if (c === ".") {
                      if (s.indexOf(".") > -1) {
                        idx--;
                        return s;
                      }
                    }

                    s += c;
                  }
                }

                return s || null;
              }
            };
          }

          function command(builder, cmd, argsProvider) {
            if (cmd.toUpperCase() === "M" || cmd.toUpperCase() === "L" || cmd.toUpperCase() === "T") {
              builder.command(cmd, argsProvider.next(), argsProvider.next());
              return cmd === "M" ? "L" : cmd === "m" ? "l" : cmd;
            } else if (cmd.toUpperCase() === "H" || cmd.toUpperCase() === "V") {
              builder.command(cmd, argsProvider.next());
              return cmd;
            } else if (cmd.toUpperCase() === "Z") {
              builder.command(cmd);
              return cmd;
            } else if (cmd.toUpperCase() === "C") {
              builder.command(cmd, argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next());
              return cmd;
            } else if (cmd.toUpperCase() === "S" || cmd.toUpperCase() === "Q") {
              builder.command(cmd, argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next());
              return cmd;
            } else if (cmd.toUpperCase() === "A") {
              builder.command(cmd, argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next());
              return cmd;
            } else {
              // https://developer.mozilla.org/ja/docs/Web/SVG/Tutorial/Paths
              console.warn("unsupported:".concat(cmd));
            }

            return null;
          }

          var PathCommandsParser = /*#__PURE__*/function () {
            function PathCommandsParser() {
              var _this98 = this;

              _classCallCheck(this, PathCommandsParser);

              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              this._ops = [];
              this._commands = new PathCommands_1.PathCommands(this); // eslint-disable-next-line @typescript-eslint/no-explicit-any

              var buildPush = function buildPush(op) {
                return function () {
                  for (var _len21 = arguments.length, args = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
                    args[_key21] = arguments[_key21];
                  }

                  _this98._ops.push({
                    op: op,
                    args: args
                  });
                };
              };

              this.moveTo = buildPush("moveTo");
              this.lineTo = buildPush("lineTo");
              this.closePath = buildPush("closePath");
              this.bezierCurveTo = buildPush("bezierCurveTo");
              this.quadraticCurveTo = buildPush("quadraticCurveTo");
              this.save = buildPush("save");
              this.translate = buildPush("translate");
              this.rotate = buildPush("rotate");
              this.scale = buildPush("scale");
              this.arc = buildPush("arc");
              this.restore = buildPush("restore");
              this.arcTo = buildPush("arcTo");
              this.ellipse = buildPush("ellipse");
              this.rect = buildPush("rect");
            } // eslint-disable-next-line @typescript-eslint/no-explicit-any


            _createClass(PathCommandsParser, [{
              key: "command",
              value: function command(name) {
                for (var _len22 = arguments.length, args = new Array(_len22 > 1 ? _len22 - 1 : 0), _key22 = 1; _key22 < _len22; _key22++) {
                  args[_key22 - 1] = arguments[_key22];
                }

                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var numArgs = args || [];

                for (var i = 0; i < args.length; i++) {
                  numArgs[i] -= 0;
                }

                var command = this._commands[name]; // eslint-disable-next-line @typescript-eslint/no-explicit-any

                command.apply(this, numArgs);
              } // eslint-disable-next-line @typescript-eslint/no-explicit-any

            }, {
              key: "parse",
              value: function parse(d) {
                var _this99 = this;

                var ops = this._ops = [];
                var tokens = pathTokens(d);

                try {
                  (function () {
                    var cmd;
                    var subsequentCommand = "Z";

                    while (cmd = tokens.next()) {
                      if (!isNaN(Number(cmd))) {
                        (function () {
                          var fst = true;
                          var argsProvider = {
                            next: function next() {
                              if (fst) {
                                fst = false;
                                return cmd;
                              }

                              return tokens.next();
                            }
                          };
                          subsequentCommand = command(_this99, subsequentCommand, argsProvider) || "Z";
                        })();
                      } else {
                        subsequentCommand = command(_this99, cmd, tokens) || "Z";
                      }
                    }
                  })();
                } catch (e) {
                  console.log("Error: ".concat(d));
                  throw e;
                }

                return ops;
              }
            }]);

            return PathCommandsParser;
          }();

          exports.PathCommandsParser = PathCommandsParser;
          /***/
        },

        /***/
        "./internal/legacy/fontwatch/FontRuler.js":
        /*!************************************************!*\
          !*** ./internal/legacy/fontwatch/FontRuler.js ***!
          \************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalLegacyFontwatchFontRulerJs(module, exports, __webpack_require__) {
          "use strict"; //see https://github.com/typekit/webfontloader

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          function computeStyle(font) {
            return [{
              display: "block",
              position: "absolute",
              top: "-9999px",
              left: "-9999px",
              width: "auto",
              height: "auto",
              margin: "0",
              padding: "0",
              "white-space": "nowrap",
              font: font
            }, {
              "font-variant": "normal",
              "font-size": "300px",
              "font-style": "normal",
              "font-weight": "400",
              "line-height": "normal"
            }];
          }

          var FontRuler = /*#__PURE__*/function () {
            function FontRuler(font, testStr) {
              _classCallCheck(this, FontRuler);

              var e = document.createElement("span");
              e.setAttribute("aria-hidden", "true");
              e.textContent = testStr || "BESbswy";
              computeStyle(font).forEach(function (style) {
                for (var k in style) {
                  var key = k; // eslint-disable-next-line @typescript-eslint/no-explicit-any

                  e.style[key] = style[key];
                }
              });
              document.body.appendChild(e);
              this.el_ = e;
            }

            _createClass(FontRuler, [{
              key: "getWidth",
              value: function getWidth() {
                return this.el_.offsetWidth;
              }
            }, {
              key: "remove",
              value: function remove() {
                document.body.removeChild(this.el_);
              }
            }]);

            return FontRuler;
          }();

          exports.FontRuler = FontRuler;
          /***/
        },

        /***/
        "./internal/legacy/fontwatch/FontWatchRunner.js":
        /*!******************************************************!*\
          !*** ./internal/legacy/fontwatch/FontWatchRunner.js ***!
          \******************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalLegacyFontwatchFontWatchRunnerJs(module, exports, __webpack_require__) {
          "use strict"; //see https://github.com/typekit/webfontloader
          //http://defghi1977.html.xdomain.jp/tech/canvasMemo/canvasMemo.htm

          var FontRuler_1 = __webpack_require__(
          /*! ./FontRuler */
          "./internal/legacy/fontwatch/FontRuler.js");

          var LastResortFonts = {
            SERIF: "serif",
            SANS_SERIF: "sans-serif"
          };
          var watchRunners = {};

          var FontWatchRunner = /*#__PURE__*/function () {
            function FontWatchRunner(font, testStr) {
              _classCallCheck(this, FontWatchRunner);

              this.activeCallbacks = [];
              this.inactiveCallbacks = [];
              this.status = null;
              this.lastResortWidths_ = {};
              this.fontRulerA_ = new FontRuler_1.FontRuler("".concat(font, ",").concat(LastResortFonts.SERIF), testStr);
              this.fontRulerB_ = new FontRuler_1.FontRuler("".concat(font, ",").concat(LastResortFonts.SANS_SERIF), testStr);
              var lastResortRulerA = new FontRuler_1.FontRuler("4px ".concat(LastResortFonts.SERIF), testStr);
              var lastResortRulerB = new FontRuler_1.FontRuler("4px ".concat(LastResortFonts.SANS_SERIF), testStr); //start

              this.lastResortWidths_[LastResortFonts.SERIF] = lastResortRulerA.getWidth();
              this.lastResortWidths_[LastResortFonts.SANS_SERIF] = lastResortRulerB.getWidth();
              lastResortRulerA.remove();
              lastResortRulerB.remove();
              this.started_ = Date.now();
              this.check_();
            }

            _createClass(FontWatchRunner, [{
              key: "then",
              value: function then(activeCallback, inactiveCallback) {
                if (this.status) {
                  if (this.status !== "ng") {
                    activeCallback();
                  } else {
                    inactiveCallback();
                  }
                } else {
                  this.activeCallbacks.push(activeCallback);
                  this.inactiveCallbacks.push(inactiveCallback);
                }
              }
            }, {
              key: "check_",
              value: function check_() {
                var _this100 = this;

                var widthA = this.fontRulerA_.getWidth();
                var widthB = this.fontRulerB_.getWidth();

                if (this.isFallbackFont_(widthA, widthB) || this.isLastResortFont_(widthA, widthB)) {
                  if (Date.now() - this.started_ >= 3000) {
                    // timeout
                    if (this.isLastResortFont_(widthA, widthB)) {
                      this.finish_(this.activeCallbacks);
                      this.status = "ok";
                    } else {
                      this.finish_(this.inactiveCallbacks);
                      this.status = "ng";
                    }
                  } else {
                    setTimeout(function () {
                      _this100.check_();
                    }, 50);
                  }
                } else {
                  this.finish_(this.activeCallbacks);
                  this.status = "ok";
                }
              }
            }, {
              key: "isFallbackFont_",
              value: function isFallbackFont_(a, b) {
                return this.widthMatches_(a, LastResortFonts.SERIF) && this.widthMatches_(b, LastResortFonts.SANS_SERIF);
              }
            }, {
              key: "widthsMatchLastResortWidths_",
              value: function widthsMatchLastResortWidths_(a, b) {
                for (var font in LastResortFonts) {
                  if (LastResortFonts.hasOwnProperty(font)) {
                    if (this.widthMatches_(a, LastResortFonts[font]) && this.widthMatches_(b, LastResortFonts[font])) {
                      return true;
                    }
                  }
                }

                return false;
              }
            }, {
              key: "widthMatches_",
              value: function widthMatches_(width, lastResortFont) {
                return width === this.lastResortWidths_[lastResortFont];
              }
            }, {
              key: "isLastResortFont_",
              value: function isLastResortFont_(a, b) {
                return hasWebKitFallbackBug() && this.widthsMatchLastResortWidths_(a, b);
              }
            }, {
              key: "finish_",
              value: function finish_(callbacks) {
                var _this101 = this;

                setTimeout(function () {
                  _this101.fontRulerA_.remove();

                  _this101.fontRulerB_.remove();

                  callbacks.forEach(function (cb) {
                    return cb();
                  });
                }, 0);
              }
            }], [{
              key: "load",
              value: function load(font, testStr, activeCallback, inactiveCallback) {
                var c = watchRunners[font] || (watchRunners[font] = {});
                testStr += "";
                var runner;

                if (c[testStr]) {
                  runner = c[testStr];
                } else {
                  runner = c[testStr] = new FontWatchRunner(font, testStr);
                }

                runner.then(activeCallback, inactiveCallback);
              }
            }]);

            return FontWatchRunner;
          }();

          var HAS_WEBKIT_FALLBACK_BUG = null;

          function hasWebKitFallbackBug() {
            if (HAS_WEBKIT_FALLBACK_BUG === null) {
              var match = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
              HAS_WEBKIT_FALLBACK_BUG = !!match && (parseInt(match[1], 10) < 536 || parseInt(match[1], 10) === 536 && parseInt(match[2], 10) <= 11);
            }

            return HAS_WEBKIT_FALLBACK_BUG;
          }

          module.exports = FontWatchRunner;
          /***/
        },

        /***/
        "./internal/menu-items.js":
        /*!********************************!*\
          !*** ./internal/menu-items.js ***!
          \********************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalMenuItemsJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          /** @private */

          function extend(a, b) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var o = {};

            for (var k in a) {
              o[k] = a[k];
            }

            for (var _k3 in b) {
              o[_k3] = b[_k3];
            }

            return o;
          }
          /**
           * Normalize the given menu options.
           * @param {*} options menu options to given
           * @returns {Array} Normalized options
           * @private
           */


          function normalize(options) {
            if (!options) {
              return [];
            }

            if (Array.isArray(options)) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              return options.map( // eslint-disable-next-line @typescript-eslint/no-explicit-any
              function (e) {
                return extend(e, {
                  label: e.caption || e.label
                });
              });
            }

            if (typeof options === "string") {
              return normalize(JSON.parse(options));
            }

            var result = [];

            for (var k in options) {
              result.push({
                value: k,
                label: options[k]
              });
            }

            return result;
          }

          exports.normalize = normalize;
          /**
           * Normalize the given menu options.
           * @param {*} options menu options to given
           * @returns {Array} Normalized options
           * @private
           */

          function normalizeToFn(options) {
            if (typeof options === "function") {
              return function (record) {
                return normalize(options(record));
              };
            }

            return function () {
              return normalize(options);
            };
          }

          exports.normalizeToFn = normalizeToFn;
          /***/
        },

        /***/
        "./internal/paste-utils.js":
        /*!*********************************!*\
          !*** ./internal/paste-utils.js ***!
          \*********************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalPasteUtilsJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          function parsePasteRangeBoxValues(value) {
            var normalizeValue = value.replace(/\r?\n$/, "");
            var lines = normalizeValue.split(/(?:\r?\n)|[\u2028\u2029]/g);
            var values = lines.map(function (line) {
              return line.split(/\t/g);
            });
            var colCount = values.reduce(function (n, cells) {
              return Math.max(n, cells.length);
            }, 0);
            return {
              colCount: colCount,
              rowCount: values.length,
              getCellValue: function getCellValue(offsetCol, offsetRow) {
                var _a;

                return ((_a = values[offsetRow]) === null || _a === void 0 ? void 0 : _a[offsetCol]) || "";
              }
            };
          }

          exports.parsePasteRangeBoxValues = parsePasteRangeBoxValues;
          /***/
        },

        /***/
        "./internal/path2DManager.js":
        /*!***********************************!*\
          !*** ./internal/path2DManager.js ***!
          \***********************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalPath2DManagerJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __webpack_require__(
          /*! ./utils */
          "./internal/utils.js");

          function getPath2D() {
            if (typeof Path2D !== "undefined" && !utils_1.browser.Edge) {
              return Path2D;
            }

            return __webpack_require__(
            /*! ./legacy/canvas/Path2DShim */
            "./internal/legacy/canvas/Path2DShim.js").Path2DShim;
          }

          exports.getPath2D = getPath2D;

          function fill(pathModule, ctx, x, y, w, h) {
            ctx.save();

            try {
              var width = pathModule.width,
                  height = pathModule.height;
              var upsideDown = pathModule.ud,
                  _pathModule$x = pathModule.x,
                  offsetX = _pathModule$x === void 0 ? 0 : _pathModule$x,
                  _pathModule$y = pathModule.y,
                  offsetY = _pathModule$y === void 0 ? 0 : _pathModule$y;
              w = w || width;
              h = h || height;
              var xrate = w / width;
              var yrate = h / (upsideDown ? -height : height);
              x = x || 0;
              y = upsideDown ? (y || 0) + -height * yrate : y || 0;
              ctx.translate(x, y);
              ctx.scale(xrate, yrate);

              if (offsetX !== 0 || offsetY !== 0) {
                ctx.translate(offsetX, offsetY);
              }

              var _Path2D = getPath2D();

              var path2d = pathModule.path2d = pathModule.path2d || new _Path2D(pathModule.d);
              ctx.fill(path2d);
            } finally {
              ctx.restore();
            }
          }

          exports.fill = fill;
          /***/
        },

        /***/
        "./internal/sort.js":
        /*!**************************!*\
          !*** ./internal/sort.js ***!
          \**************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalSortJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __webpack_require__(
          /*! ./utils */
          "./internal/utils.js");

          function createArray(get, length) {
            var array = new Array(length);

            for (var i = 0; i < length; i++) {
              array[i] = get(i);
            }

            return array;
          }

          function createArrayPromise(get, getField, length // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ) {
            return new Promise(function (resolve) {
              var plist = [];
              var array = new Array(length);

              var _loop5 = function _loop5(i) {
                var data = get(i);
                var record = {
                  v: data,
                  f: data
                };
                array[i] = record;

                if (utils_1.isPromise(data)) {
                  plist.push(data.then(function (v) {
                    record.v = v;
                    record.f = v;
                  }));
                }
              };

              for (var i = 0; i < length; i++) {
                _loop5(i);
              }

              Promise.all(plist).then(function () {
                return getField == null ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                array : // eslint-disable-next-line @typescript-eslint/no-explicit-any
                setArrayField(array, getField);
              }).then(resolve);
            });
          }

          function setArrayField(array, getField) {
            return new Promise(function (resolve) {
              var length = array.length;
              var plist = [];

              var _loop6 = function _loop6(i) {
                var record = array[i];
                var f = getField(record.v);

                if (utils_1.isPromise(f)) {
                  plist.push(f.then(function (v) {
                    record.f = v;
                  }));
                } else {
                  record.f = f;
                }
              };

              for (var i = 0; i < length; i++) {
                _loop6(i);
              }

              Promise.all(plist).then(function () {
                return resolve(array);
              });
            });
          }

          function sortArray(array, compare) {
            Array.prototype.sort.call(array, compare);
          }

          exports.sortArray = sortArray;

          function sort(get, set, length, compare, getField) {
            var old = createArray(get, length);

            if (getField != null) {
              old.sort(function (r1, r2) {
                return compare(getField(r1), getField(r2));
              });
            } else {
              old.sort(compare);
            }

            for (var i = 0; i < length; i++) {
              set(i, old[i]);
            }
          }

          exports.sort = sort;

          function sortPromise(get, set, length, // eslint-disable-next-line @typescript-eslint/no-explicit-any
          compare, // eslint-disable-next-line @typescript-eslint/no-explicit-any
          getField) {
            if (typeof Promise !== "undefined") {
              return createArrayPromise(get, getField, length).then(function (array) {
                array.sort(function (r1, r2) {
                  return compare(r1.f, r2.f);
                });

                for (var i = 0; i < length; i++) {
                  set(i, array[i].v);
                }
              });
            } else {
              sort(get, set, length, compare, getField);
              var dummyPromise = {
                then: function then(fn) {
                  fn();
                  return dummyPromise;
                },
                "catch": function _catch() {
                  return dummyPromise;
                }
              };
              return dummyPromise;
            }
          }

          exports.sortPromise = sortPromise;
          /***/
        },

        /***/
        "./internal/style.js":
        /*!***************************!*\
          !*** ./internal/style.js ***!
          \***************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalStyleJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          function getScrollBarWidth() {
            var dummy = document.createElement("div");
            var style = dummy.style;
            style.position = "absolute";
            style.height = "9999px";
            style.width = "calc(100vw - 100%)";
            style.opacity = "0";
            dummy.textContent = "x";
            document.body.appendChild(dummy);

            var _getComputedStyle2 = (document.defaultView || window).getComputedStyle(dummy, ""),
                width = _getComputedStyle2.width;

            document.body.removeChild(dummy);
            return parseInt(width, 10);
          }

          var SCROLLBAR_SIZE;

          function initDocumentInternal() {
            __webpack_require__(
            /*! @/internal/style.css */
            "../src/js/internal/style.css");

            SCROLLBAR_SIZE = getScrollBarWidth() || 10;
            var style = document.createElement("style");
            style.setAttribute("type", "text/css");
            style.setAttribute("data-name", "cheetah-grid");
            style.innerHTML = "\n.cheetah-grid .grid-scroll-end-point {\n\twidth: ".concat(SCROLLBAR_SIZE, "px;\n\theight: ").concat(SCROLLBAR_SIZE, "px;\n}\n.cheetah-grid > canvas {\n\twidth: -webkit-calc(100% - ").concat(SCROLLBAR_SIZE, "px);\n\twidth: calc(100% - ").concat(SCROLLBAR_SIZE, "px);\n\theight: -webkit-calc(100% - ").concat(SCROLLBAR_SIZE, "px);\n\theight: calc(100% - ").concat(SCROLLBAR_SIZE, "px);\n}\n\t\t");
            document.head.appendChild(style);
          }

          var initDocumentVar = initDocumentInternal;

          function initDocument() {
            initDocumentVar();
            initDocumentVar = Function.prototype;
          }

          exports.initDocument = initDocument;

          function getScrollBarSize() {
            return SCROLLBAR_SIZE;
          }

          exports.getScrollBarSize = getScrollBarSize;
          /***/
        },

        /***/
        "./internal/symbolManager.js":
        /*!***********************************!*\
          !*** ./internal/symbolManager.js ***!
          \***********************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalSymbolManagerJs(module, exports, __webpack_require__) {
          "use strict";
          /* WEBPACK VAR INJECTION */

          (function (global) {
            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            /* eslint-disable @typescript-eslint/no-explicit-any */

            var utils_1 = __webpack_require__(
            /*! ./utils */
            "./internal/utils.js");

            var _Symbol = utils_1.isNode ? global.Symbol : window.Symbol ? window.Symbol : function () {
              function random() {
                var c = "abcdefghijklmnopqrstuvwxyz0123456789";
                var cl = c.length;
                var r = "";

                for (var i = 0; i < 10; i++) {
                  r += c[Math.floor(Math.random() * cl)];
                }

                return r;
              }

              return function (name) {
                if (name) {
                  return "#".concat(name, "_").concat(random());
                } else {
                  return "#_".concat(random());
                }
              };
            }();

            var mem = {};

            function get(name) {
              if (name) {
                return mem[name] ? mem[name] : mem[name] = _Symbol(name);
              } else {
                return _Symbol();
              }
            }

            exports.get = get;

            function getProtectedSymbol() {
              return get("protected");
            }

            exports.getProtectedSymbol = getProtectedSymbol;

            function getCheckColumnStateId() {
              return get("chkcol.stateID");
            }

            exports.getCheckColumnStateId = getCheckColumnStateId;

            function getRadioColumnStateId() {
              return get("rdcol.stateID");
            }

            exports.getRadioColumnStateId = getRadioColumnStateId;

            function getButtonColumnStateId() {
              return get("btncol.stateID");
            }

            exports.getButtonColumnStateId = getButtonColumnStateId;

            function getColumnFadeinStateId() {
              return get("col.fadein_stateID");
            }

            exports.getColumnFadeinStateId = getColumnFadeinStateId;

            function getBranchGraphColumnStateId() {
              return get("branch_graph_col.stateID");
            }

            exports.getBranchGraphColumnStateId = getBranchGraphColumnStateId;

            function getSmallDialogInputEditorStateId() {
              return get("small_dialog_input_editor.stateID");
            }

            exports.getSmallDialogInputEditorStateId = getSmallDialogInputEditorStateId;

            function getInlineInputEditorStateId() {
              return get("inline_input_editor.stateID");
            }

            exports.getInlineInputEditorStateId = getInlineInputEditorStateId;

            function getInlineMenuEditorStateId() {
              return get("inline_menu_editor.stateID");
            }

            exports.getInlineMenuEditorStateId = getInlineMenuEditorStateId;

            function getCheckHeaderStateId() {
              return get("check_header.stateID");
            }

            exports.getCheckHeaderStateId = getCheckHeaderStateId;
            /* WEBPACK VAR INJECTION */
          }).call(this, __webpack_require__(
          /*! ./../../node_modules/webpack/buildin/global.js */
          "../node_modules/webpack/buildin/global.js"));
          /***/
        },

        /***/
        "./internal/utils.js":
        /*!***************************!*\
          !*** ./internal/utils.js ***!
          \***************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function internalUtilsJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          var isNode = typeof window === "undefined" || typeof window.window === "undefined";
          exports.isNode = isNode;
          var arrayFind;
          var arrayFindIndex;
          var array = {
            get find() {
              if (arrayFind) {
                return arrayFind;
              }

              if (Array.prototype.find) {
                arrayFind = function arrayFind(arr, predicate) {
                  return Array.prototype.find.call(arr, predicate);
                };
              } else {
                arrayFind = function arrayFind(arr, predicate) {
                  var index = array.findIndex(arr, predicate);
                  return index >= 0 ? arr[index] : undefined;
                };
              }

              return arrayFind;
            },

            get findIndex() {
              if (arrayFindIndex) {
                return arrayFindIndex;
              }

              if (Array.prototype.findIndex) {
                arrayFindIndex = function arrayFindIndex(arr, predicate) {
                  return Array.prototype.findIndex.call(arr, predicate);
                };
              } else {
                arrayFindIndex = function arrayFindIndex(arr, predicate) {
                  var length = arr.length;

                  for (var i = 0; i < length; i++) {
                    var value = arr[i];

                    if (predicate(value, i, arr)) {
                      return i;
                    }
                  }

                  return -1;
                };
              }

              return arrayFindIndex;
            }

          };
          exports.array = array;

          function isDef(data) {
            return data !== null && typeof data !== "undefined";
          }

          exports.isDef = isDef;

          function analyzeUserAgent() {
            if (isNode) {
              return {
                IE: false,
                Edge: false,
                Chrome: false,
                Firefox: false,
                Safari: false
              };
            } else {
              var ua = window.navigator.userAgent.toLowerCase();
              return {
                IE: !!/(msie|trident)/.exec(ua),
                Edge: ua.indexOf("edge") > -1,
                Chrome: ua.indexOf("chrome") > -1 && ua.indexOf("edge") === -1,
                Firefox: ua.indexOf("firefox") > -1,
                Safari: ua.indexOf("safari") > -1 && ua.indexOf("edge") === -1
              };
            }
          }

          var _analyzeUserAgent = analyzeUserAgent(),
              IE = _analyzeUserAgent.IE,
              Chrome = _analyzeUserAgent.Chrome,
              Firefox = _analyzeUserAgent.Firefox,
              Edge = _analyzeUserAgent.Edge,
              Safari = _analyzeUserAgent.Safari;

          function setReadonly(obj, name, value) {
            Object.defineProperty(obj, name, {
              enumerable: false,
              configurable: true,
              value: value
            });
          } // eslint-disable-next-line @typescript-eslint/no-explicit-any


          function each(obj, fn) {
            for (var key in obj) {
              fn(obj[key], key, obj);
            }
          }

          exports.each = each; // eslint-disable-next-line @typescript-eslint/no-explicit-any

          function isObject(obj) {
            return obj === Object(obj);
          }

          function extend() {
            var result = {};

            for (var _len23 = arguments.length, args = new Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
              args[_key23] = arguments[_key23];
            }

            args.forEach(function (source) {
              var _loop7 = function _loop7(key) {
                Object.defineProperty(result, key, {
                  get: function get() {
                    return source[key];
                  },
                  set: function set(val) {
                    source[key] = val;
                  },
                  configurable: true,
                  enumerable: true
                });
              };

              for (var key in source) {
                _loop7(key);
              }
            });
            return result;
          }

          exports.extend = extend;

          function isDescendantElement(root, target) {
            while (target.parentElement) {
              var p = target.parentElement;

              if (root === p) {
                return true;
              }

              target = p;
            }

            return false;
          }

          exports.isDescendantElement = isDescendantElement;
          /* eslint-disable @typescript-eslint/no-explicit-any */

          function applyChainSafe(obj, fn) {
            var value = obj;

            for (var i = 0; i < (arguments.length <= 2 ? 0 : arguments.length - 2) && isDef(value); i++) {
              value = fn(value, i + 2 < 2 || arguments.length <= i + 2 ? undefined : arguments[i + 2]);
            }

            return value;
          }

          exports.applyChainSafe = applyChainSafe;

          function getChainSafe(obj) {
            for (var _len24 = arguments.length, names = new Array(_len24 > 1 ? _len24 - 1 : 0), _key24 = 1; _key24 < _len24; _key24++) {
              names[_key24 - 1] = arguments[_key24];
            }

            return applyChainSafe.apply(void 0, [obj, function (val, name) {
              return val[name];
            }].concat(names));
          }

          exports.getChainSafe = getChainSafe;

          function getOrApply(value) {
            if (typeof value === "function") {
              for (var _len25 = arguments.length, args = new Array(_len25 > 1 ? _len25 - 1 : 0), _key25 = 1; _key25 < _len25; _key25++) {
                args[_key25 - 1] = arguments[_key25];
              }

              return value.apply(void 0, args);
            } else {
              return value;
            }
          }

          exports.getOrApply = getOrApply;
          /* eslint-enable @typescript-eslint/no-explicit-any */

          function endsWith(str, searchString, position) {
            var subjectString = str.toString();

            if (typeof position !== "number" || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
              position = subjectString.length;
            }

            position -= searchString.length;
            var lastIndex = subjectString.lastIndexOf(searchString, position);
            return lastIndex !== -1 && lastIndex === position;
          }

          function genChars(s) {
            // Surrogate Code Point
            // [\uD800-\uDBFF]
            // Variation Selectors
            // FVS [\u180B-\u180D]
            // VS1～VS16 [\uFE00-\uFE0F]
            // VS17～VS256 \uDB40[\uDD00-\uDDEF]
            var re = /([\uD800-\uDBFF][\uDC00-\uDFFF]|\r\n|[^\uD800-\uDFFF])([\u180B-\u180D]|[\uFE00-\uFE0F]|\uDB40[\uDD00-\uDDEF])?/g;
            return {
              next: function next() {
                var res = re.exec(s);
                return res !== null ? res[0] : null;
              }
            };
          }

          function genWords(s) {
            var re = /[!-~]+|[^!-~\s]+|\s+/g;
            return {
              next: function next() {
                var res = re.exec(s);
                return res !== null ? res[0] : null;
              }
            };
          }

          function isPromise(data) {
            return Boolean(data && typeof data.then === "function");
          }

          exports.isPromise = isPromise;

          function then(result, callback) {
            return isPromise(result) ? result.then(function (r) {
              return callback(r);
            }) : callback(result);
          }

          exports.then = then;

          function getMouseButtons(e) {
            if (isDef(e.buttons)) {
              return e.buttons;
            }
            /*for legacy*/


            if (isDef(e.which)) {
              if (e.which === 3) {
                //right?
                return 4;
              }

              if (e.which === 2) {
                //middle?
                return 4;
              }

              return e.which; //left or no
            }

            if (e.button === 0 || e.button === 1) {
              return 1; //candidate left
            }

            if (e.button === 2) {
              return 2; // right
            }

            return 0; //no or middle?
          }

          function getKeyCode(e) {
            return e.keyCode || e.which;
          }

          function isTouchEvent(e) {
            return !!e.changedTouches;
          } // eslint-disable-next-line @typescript-eslint/no-explicit-any


          function getIgnoreCase(obj, name) {
            if (obj[name]) {
              return obj[name];
            }

            var l = name.toLowerCase();

            if (obj[l]) {
              return obj[l];
            }

            var u = name.toLowerCase();

            if (obj[u]) {
              return obj[u];
            }

            for (var k in obj) {
              if (k.toLowerCase() === l) {
                return obj[k];
              }
            }

            return undefined;
          }

          exports.getIgnoreCase = getIgnoreCase;

          function cancel(e) {
            e.preventDefault();
            e.stopPropagation();
          }

          function toBoxArray(obj) {
            if (!Array.isArray(obj)) {
              return [obj
              /*top*/
              , obj
              /*right*/
              , obj
              /*bottom*/
              , obj
              /*left*/
              ];
            }

            if (obj.length === 3) {
              return [obj[0]
              /*top*/
              , obj[1]
              /*right*/
              , obj[2]
              /*bottom*/
              , obj[1]
              /*left*/
              ];
            }

            if (obj.length === 2) {
              return [obj[0]
              /*top*/
              , obj[1]
              /*right*/
              , obj[0]
              /*bottom*/
              , obj[1]
              /*left*/
              ];
            }

            if (obj.length === 1) {
              return [obj[0]
              /*top*/
              , obj[0]
              /*right*/
              , obj[0]
              /*bottom*/
              , obj[0]
              /*left*/
              ];
            }

            return obj;
          }

          function cellEquals(a, b) {
            return a.col === b.col && a.row === b.row;
          }

          exports.cellEquals = cellEquals;

          function cellInRange(range, col, row) {
            return range.start.col <= col && col <= range.end.col && range.start.row <= row && row <= range.end.row;
          }

          exports.cellInRange = cellInRange;
          exports.browser = {
            IE: IE,
            Edge: Edge,
            Chrome: Chrome,
            Firefox: Firefox,
            Safari: Safari,
            // Chrome 33554431
            // FireFox 17895588
            // IE 10737433
            heightLimit: Chrome ? 33554431 : Firefox ? 17895588 : 10737433
          };
          exports.obj = {
            setReadonly: setReadonly,
            isObject: isObject
          };
          exports.str = {
            endsWith: endsWith,
            genChars: genChars,
            genWords: genWords
          };
          exports.event = {
            getMouseButtons: getMouseButtons,
            getKeyCode: getKeyCode,
            isTouchEvent: isTouchEvent,
            cancel: cancel
          };
          exports.style = {
            toBoxArray: toBoxArray
          };
          exports.emptyFn = Function.prototype;
          /***/
        },

        /***/
        "./list-grid/LG_EVENT_TYPE.js":
        /*!************************************!*\
          !*** ./list-grid/LG_EVENT_TYPE.js ***!
          \************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function listGridLG_EVENT_TYPEJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var DG_EVENT_TYPE_1 = __webpack_require__(
          /*! ../core/DG_EVENT_TYPE */
          "./core/DG_EVENT_TYPE.js");

          var utils_1 = __webpack_require__(
          /*! ../internal/utils */
          "./internal/utils.js");

          exports.LG_EVENT_TYPE = utils_1.extend(DG_EVENT_TYPE_1.DG_EVENT_TYPE, {
            CHANGED_VALUE: "changed_value",
            CHANGED_HEADER_VALUE: "changed_header_value"
          });
          /***/
        },

        /***/
        "./list-grid/layout-map/index.js":
        /*!***************************************!*\
          !*** ./list-grid/layout-map/index.js ***!
          \***************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function listGridLayoutMapIndexJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var simple_header_layout_1 = __webpack_require__(
          /*! ./internal/simple-header-layout */
          "./list-grid/layout-map/internal/simple-header-layout.js");

          exports.SimpleHeaderLayoutMap = simple_header_layout_1.SimpleHeaderLayoutMap;

          var multi_layout_1 = __webpack_require__(
          /*! ./internal/multi-layout */
          "./list-grid/layout-map/internal/multi-layout.js");

          exports.MultiLayoutMap = multi_layout_1.MultiLayoutMap;
          /***/
        },

        /***/
        "./list-grid/layout-map/internal/multi-layout.js":
        /*!*******************************************************!*\
          !*** ./list-grid/layout-map/internal/multi-layout.js ***!
          \*******************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function listGridLayoutMapInternalMultiLayoutJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var columns = __importStar(__webpack_require__(
          /*! ../../../columns */
          "./columns.js"));

          var headerAction = __importStar(__webpack_require__(
          /*! ../../../header/action */
          "./header/action.js"));

          var headerType = __importStar(__webpack_require__(
          /*! ../../../header/type */
          "./header/type.js"));

          var utils_1 = __webpack_require__(
          /*! ./utils */
          "./list-grid/layout-map/internal/utils.js");

          function normalizeLayout(layout) {
            if (Array.isArray(layout)) {
              return {
                header: layout,
                body: layout
              };
            }

            return layout;
          }

          var seqId = 0;

          var LayoutObjectGrid = /*#__PURE__*/function () {
            function LayoutObjectGrid(layout, transform) {
              var _this102 = this;

              _classCallCheck(this, LayoutObjectGrid);

              this.objects = [];
              this.objectGrid = [];
              this.objectMap = {};
              this.columnCount = 0;
              this.columnWidths = [];
              layout.forEach(function (rowLayout, row) {
                var col = 0;
                rowLayout.forEach(function (cell) {
                  var _a, _b;

                  var id = seqId++;
                  var obj = transform(cell, id);

                  _this102.objects.push(obj);

                  _this102.objectMap[id] = obj;
                  col = _this102._findStartCell(col, row);
                  var rowSpan = Number((_a = cell.rowSpan) !== null && _a !== void 0 ? _a : 1);
                  var colSpan = Number((_b = cell.colSpan) !== null && _b !== void 0 ? _b : 1);
                  var endRow = row + rowSpan;
                  var endCol = col + colSpan;

                  for (var rowIndex = row; rowIndex < endRow; rowIndex++) {
                    var objectGridRow = _this102._getObjectGridRow(rowIndex);

                    for (var colIndex = col; colIndex < endCol; colIndex++) {
                      objectGridRow[colIndex] = obj;
                    }
                  }

                  if (colSpan === 1) {
                    _this102._setWidthDataIfAbsent(col, cell);
                  }

                  _this102._useColumnIndex(endCol - 1);

                  col = endCol;
                });
              });
            }

            _createClass(LayoutObjectGrid, [{
              key: "_findStartCell",
              value: function _findStartCell(col, row) {
                var objectGridRow = this._getObjectGridRow(row);

                for (var index = col; index < objectGridRow.length; index++) {
                  if (!objectGridRow[index]) {
                    return index;
                  }
                }

                return objectGridRow.length;
              }
            }, {
              key: "_getObjectGridRow",
              value: function _getObjectGridRow(row) {
                return this.objectGrid[row] || (this.objectGrid[row] = []);
              }
            }, {
              key: "_useColumnIndex",
              value: function _useColumnIndex(col) {
                if (this.columnCount > col) {
                  return;
                }

                this.columnCount = col + 1;
              }
            }, {
              key: "_setWidthDataIfAbsent",
              value: function _setWidthDataIfAbsent(col, cell) {
                if (!this.columnWidths[col]) {
                  if (cell.width != null || cell.maxWidth != null || cell.minWidth != null) {
                    this.columnWidths[col] = {
                      width: cell.width,
                      maxWidth: cell.maxWidth,
                      minWidth: cell.minWidth
                    };
                  }
                }
              }
            }, {
              key: "rowCount",
              get: function get() {
                return this.objectGrid.length;
              }
            }]);

            return LayoutObjectGrid;
          }();

          var MultiLayoutMap = /*#__PURE__*/function () {
            function MultiLayoutMap(layout) {
              _classCallCheck(this, MultiLayoutMap);

              this._columnWidths = [];
              this._emptyDataCache = new utils_1.EmptyDataCache();
              var hbLayouut = normalizeLayout(layout);
              var header = this._header = new LayoutObjectGrid(hbLayouut.header, function (hd, id) {
                return {
                  id: id,
                  caption: hd.caption,
                  field: hd.headerField || hd.field,
                  style: hd.headerStyle,
                  headerType: headerType.ofCell(hd),
                  action: headerAction.ofCell(hd),
                  define: hd
                };
              });
              var body = this._body = new LayoutObjectGrid(hbLayouut.body, function (colDef, id) {
                return {
                  id: id,
                  field: colDef.field,
                  width: colDef.width,
                  minWidth: colDef.minWidth,
                  maxWidth: colDef.maxWidth,
                  icon: colDef.icon,
                  message: colDef.message,
                  columnType: columns.type.of(colDef.columnType),
                  action: columns.action.of(colDef.action),
                  style: colDef.style,
                  define: colDef
                };
              });
              var columnCount = this._columnCount = Math.max(header.columnCount, body.columnCount);

              for (var col = 0; col < columnCount; col++) {
                var widthDef = header.columnWidths[col] || body.columnWidths[col] || {};
                this._columnWidths[col] = widthDef;
              }
            }

            _createClass(MultiLayoutMap, [{
              key: "getCellId",
              value: function getCellId(col, row) {
                var _a, _b, _c, _d;

                if (this.headerRowCount <= row) {
                  var bodyRow = row - this.headerRowCount;
                  var bodyLayoutRow = bodyRow % this.bodyRowCount;
                  return (_b = (_a = this._body.objectGrid[bodyLayoutRow]) === null || _a === void 0 ? void 0 : _a[col]) === null || _b === void 0 ? void 0 : _b.id;
                } //in header


                return (_d = (_c = this._header.objectGrid[row]) === null || _c === void 0 ? void 0 : _c[col]) === null || _d === void 0 ? void 0 : _d.id;
              }
            }, {
              key: "getHeader",
              value: function getHeader(col, row) {
                var id = this.getCellId(col, row);
                return this._header.objectMap[id] || this._emptyDataCache.getHeader(col, row);
              }
            }, {
              key: "getBody",
              value: function getBody(col, row) {
                var id = this.getCellId(col, row);
                return this._body.objectMap[id] || this._emptyDataCache.getBody(col, row);
              }
            }, {
              key: "getBodyLayoutRangeById",
              value: function getBodyLayoutRangeById(id) {
                var _a;

                for (var row = 0; row < this.bodyRowCount; row++) {
                  var objectGridRow = this._body.objectGrid[row];

                  if (!objectGridRow) {
                    continue;
                  }

                  for (var col = 0; col < this.colCount; col++) {
                    if (id === ((_a = objectGridRow[col]) === null || _a === void 0 ? void 0 : _a.id)) {
                      return this._getCellRange(this._body, col, row, 0);
                    }
                  }
                }

                throw new Error("can not found body layout @id=".concat(id));
              }
            }, {
              key: "getCellRange",
              value: function getCellRange(col, row) {
                if (this.headerRowCount <= row) {
                  var recordIndex = this.getRecordIndexByRow(row);

                  var _startRow2 = this.getRecordStartRowByRecordIndex(recordIndex);

                  var bodyRow = row - this.headerRowCount;
                  var bodyLayoutRow = bodyRow % this.bodyRowCount;
                  return this._getCellRange(this._body, col, bodyLayoutRow, _startRow2);
                } //in header


                return this._getCellRange(this._header, col, row, 0);
              }
            }, {
              key: "getRecordIndexByRow",
              value: function getRecordIndexByRow(row) {
                if (row < this.headerRowCount) {
                  return -1;
                } else {
                  var bodyRow = row - this.headerRowCount;
                  return Math.floor(bodyRow / this.bodyRowCount);
                }
              }
            }, {
              key: "getRecordStartRowByRecordIndex",
              value: function getRecordStartRowByRecordIndex(index) {
                return this.headerRowCount + index * this.bodyRowCount;
              }
            }, {
              key: "_getCellRange",
              value: function _getCellRange( // eslint-disable-next-line @typescript-eslint/no-explicit-any
              layout, col, layoutRow, offsetRow) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

                var result = {
                  start: {
                    col: col,
                    row: layoutRow + offsetRow
                  },
                  end: {
                    col: col,
                    row: layoutRow + offsetRow
                  }
                };
                var objectGrid = layout.objectGrid;
                var id = (_b = (_a = objectGrid[layoutRow]) === null || _a === void 0 ? void 0 : _a[col]) === null || _b === void 0 ? void 0 : _b.id;

                if (id == null) {
                  return result;
                }

                for (var c = col - 1; c >= 0; c--) {
                  if (id !== ((_d = (_c = objectGrid[layoutRow]) === null || _c === void 0 ? void 0 : _c[c]) === null || _d === void 0 ? void 0 : _d.id)) {
                    break;
                  }

                  result.start.col = c;
                }

                for (var _c3 = col + 1; _c3 < layout.columnCount; _c3++) {
                  if (id !== ((_f = (_e = objectGrid[layoutRow]) === null || _e === void 0 ? void 0 : _e[_c3]) === null || _f === void 0 ? void 0 : _f.id)) {
                    break;
                  }

                  result.end.col = _c3;
                }

                for (var r = layoutRow - 1; r >= 0; r--) {
                  if (id !== ((_h = (_g = objectGrid[r]) === null || _g === void 0 ? void 0 : _g[col]) === null || _h === void 0 ? void 0 : _h.id)) {
                    break;
                  }

                  result.start.row = r + offsetRow;
                }

                for (var _r2 = layoutRow + 1; _r2 < layout.rowCount; _r2++) {
                  if (id !== ((_k = (_j = objectGrid[_r2]) === null || _j === void 0 ? void 0 : _j[col]) === null || _k === void 0 ? void 0 : _k.id)) {
                    break;
                  }

                  result.end.row = _r2 + offsetRow;
                }

                return result;
              }
            }, {
              key: "columnWidths",
              get: function get() {
                return this._columnWidths;
              }
            }, {
              key: "headerRowCount",
              get: function get() {
                return this._header.rowCount;
              }
            }, {
              key: "bodyRowCount",
              get: function get() {
                return this._body.rowCount;
              }
            }, {
              key: "colCount",
              get: function get() {
                return this._columnCount;
              }
            }, {
              key: "headerObjects",
              get: function get() {
                return this._header.objects;
              }
            }, {
              key: "columnObjects",
              get: function get() {
                return this._body.objects;
              }
            }]);

            return MultiLayoutMap;
          }();

          exports.MultiLayoutMap = MultiLayoutMap;
          /***/
        },

        /***/
        "./list-grid/layout-map/internal/simple-header-layout.js":
        /*!***************************************************************!*\
          !*** ./list-grid/layout-map/internal/simple-header-layout.js ***!
          \***************************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function listGridLayoutMapInternalSimpleHeaderLayoutJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var columns = __importStar(__webpack_require__(
          /*! ../../../columns */
          "./columns.js"));

          var headerAction = __importStar(__webpack_require__(
          /*! ../../../header/action */
          "./header/action.js"));

          var headerType = __importStar(__webpack_require__(
          /*! ../../../header/type */
          "./header/type.js"));

          var utils_1 = __webpack_require__(
          /*! ./utils */
          "./list-grid/layout-map/internal/utils.js");

          var seqId = 0;

          var SimpleHeaderLayoutMap = /*#__PURE__*/function () {
            function SimpleHeaderLayoutMap(header) {
              _classCallCheck(this, SimpleHeaderLayoutMap);

              this.bodyRowCount = 1;
              this._emptyDataCache = new utils_1.EmptyDataCache();
              this._columns = [];
              this._headerCellIds = [];
              this._headerObjects = this._addHeaders(0, header, []);
              this._headerObjectMap = this._headerObjects.reduce(function (o, e) {
                o[e.id] = e;
                return o;
              }, {});
            }

            _createClass(SimpleHeaderLayoutMap, [{
              key: "getCellId",
              value: function getCellId(col, row) {
                if (this.headerRowCount <= row) {
                  return this._columns[col].id;
                } //in header


                return this._headerCellIds[row][col];
              }
            }, {
              key: "getHeader",
              value: function getHeader(col, row) {
                var id = this.getCellId(col, row);
                return this._headerObjectMap[id] || this._emptyDataCache.getHeader(col, row);
              }
            }, {
              key: "getBody",
              value: function getBody(col, _row) {
                return this._columns[col] || this._emptyDataCache.getBody(col, 0);
              }
            }, {
              key: "getBodyLayoutRangeById",
              value: function getBodyLayoutRangeById(id) {
                for (var col = 0; col < this.colCount; col++) {
                  if (id === this._columns[col].id) {
                    return {
                      start: {
                        col: col,
                        row: 0
                      },
                      end: {
                        col: col,
                        row: 0
                      }
                    };
                  }
                }

                throw new Error("can not found body layout @id=".concat(id));
              }
            }, {
              key: "getCellRange",
              value: function getCellRange(col, row) {
                var result = {
                  start: {
                    col: col,
                    row: row
                  },
                  end: {
                    col: col,
                    row: row
                  }
                };

                if (this.headerRowCount <= row) {
                  return result;
                } //in header


                var id = this.getCellId(col, row);

                for (var c = col - 1; c >= 0; c--) {
                  if (id !== this.getCellId(c, row)) {
                    break;
                  }

                  result.start.col = c;
                }

                for (var _c4 = col + 1; _c4 < this.colCount; _c4++) {
                  if (id !== this.getCellId(_c4, row)) {
                    break;
                  }

                  result.end.col = _c4;
                }

                for (var r = row - 1; r >= 0; r--) {
                  if (id !== this.getCellId(col, r)) {
                    break;
                  }

                  result.start.row = r;
                }

                for (var _r3 = row + 1; _r3 < this.headerRowCount; _r3++) {
                  if (id !== this.getCellId(col, _r3)) {
                    break;
                  }

                  result.end.row = _r3;
                }

                return result;
              }
            }, {
              key: "getRecordIndexByRow",
              value: function getRecordIndexByRow(row) {
                if (row < this.headerRowCount) {
                  return -1;
                } else {
                  return row - this.headerRowCount;
                }
              }
            }, {
              key: "getRecordStartRowByRecordIndex",
              value: function getRecordStartRowByRecordIndex(index) {
                return this.headerRowCount + index;
              }
            }, {
              key: "_addHeaders",
              value: function _addHeaders(row, header, roots) {
                var _this103 = this;

                var results = [];

                var rowCells = this._headerCellIds[row] || this._newRow(row);

                header.forEach(function (hd) {
                  var col = _this103._columns.length;
                  var id = seqId++;
                  var cell = {
                    id: id,
                    caption: hd.caption,
                    field: hd.headerField || hd.field,
                    style: hd.headerStyle,
                    headerType: headerType.ofCell(hd),
                    action: headerAction.ofCell(hd),
                    define: hd
                  };
                  results[id] = cell;
                  rowCells[col] = id;

                  for (var r = row - 1; r >= 0; r--) {
                    _this103._headerCellIds[r][col] = roots[r];
                  }

                  if (hd.columns) {
                    _this103._addHeaders(row + 1, hd.columns, [].concat(_toConsumableArray(roots), [id])).forEach(function (c) {
                      return results.push(c);
                    });
                  } else {
                    var colDef = hd;

                    _this103._columns.push({
                      id: seqId++,
                      field: colDef.field,
                      width: colDef.width,
                      minWidth: colDef.minWidth,
                      maxWidth: colDef.maxWidth,
                      icon: colDef.icon,
                      message: colDef.message,
                      columnType: columns.type.of(colDef.columnType),
                      action: columns.action.of(colDef.action),
                      style: colDef.style,
                      define: colDef
                    });

                    for (var _r4 = row + 1; _r4 < _this103._headerCellIds.length; _r4++) {
                      _this103._headerCellIds[_r4][col] = id;
                    }
                  }
                });
                return results;
              }
            }, {
              key: "_newRow",
              value: function _newRow(row) {
                var newRow = this._headerCellIds[row] = [];

                if (!this._columns.length) {
                  return newRow;
                }

                var prev = this._headerCellIds[row - 1];

                for (var col = 0; col < prev.length; col++) {
                  newRow[col] = prev[col];
                }

                return newRow;
              }
            }, {
              key: "columnWidths",
              get: function get() {
                return this._columns;
              }
            }, {
              key: "headerRowCount",
              get: function get() {
                return this._headerCellIds.length;
              }
            }, {
              key: "colCount",
              get: function get() {
                return this._columns.length;
              }
            }, {
              key: "headerObjects",
              get: function get() {
                return this._headerObjects;
              }
            }, {
              key: "columnObjects",
              get: function get() {
                return this._columns;
              }
            }]);

            return SimpleHeaderLayoutMap;
          }();

          exports.SimpleHeaderLayoutMap = SimpleHeaderLayoutMap;
          /***/
        },

        /***/
        "./list-grid/layout-map/internal/utils.js":
        /*!************************************************!*\
          !*** ./list-grid/layout-map/internal/utils.js ***!
          \************************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function listGridLayoutMapInternalUtilsJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var columns = __importStar(__webpack_require__(
          /*! ../../../columns */
          "./columns.js"));

          var headerType = __importStar(__webpack_require__(
          /*! ../../../header/type */
          "./header/type.js"));

          var seqId = -1; // eslint-disable-next-line @typescript-eslint/no-explicit-any

          function newEmptyHeaderData() {
            return {
              id: seqId--,
              define: {},
              headerType: headerType.of(null)
            };
          }

          exports.newEmptyHeaderData = newEmptyHeaderData; // eslint-disable-next-line @typescript-eslint/no-explicit-any

          function newEmptyColumnData() {
            return {
              id: seqId--,
              define: {},
              columnType: columns.type.of(null),
              style: null
            };
          }

          exports.newEmptyColumnData = newEmptyColumnData;

          var EmptyDataCache = /*#__PURE__*/function () {
            function EmptyDataCache() {
              _classCallCheck(this, EmptyDataCache);

              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              this.headers = []; // eslint-disable-next-line @typescript-eslint/no-explicit-any

              this.columns = [];
            }

            _createClass(EmptyDataCache, [{
              key: "getHeader",
              value: function getHeader(col, row) {
                var rows = this.headers[row] || (this.headers[row] = []);
                return rows[col] || (rows[col] = newEmptyHeaderData());
              }
            }, {
              key: "getBody",
              value: function getBody(col, row) {
                var rows = this.columns[row] || (this.columns[row] = []);
                return rows[col] || (rows[col] = newEmptyColumnData());
              }
            }]);

            return EmptyDataCache;
          }();

          exports.EmptyDataCache = EmptyDataCache;
          /***/
        },

        /***/
        "./main.js":
        /*!*****************!*\
          !*** ./main.js ***!
          \*****************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function mainJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var columns = __importStar(__webpack_require__(
          /*! ./columns */
          "./columns.js"));

          exports.columns = columns;

          var core = __importStar(__webpack_require__(
          /*! ./core */
          "./core.js"));

          exports.core = core;

          var data = __importStar(__webpack_require__(
          /*! ./data */
          "./data.js"));

          exports.data = data;

          var headers = __importStar(__webpack_require__(
          /*! ./headers */
          "./headers.js"));

          exports.headers = headers;

          var icons = __importStar(__webpack_require__(
          /*! ./icons */
          "./icons.js"));

          var register = __importStar(__webpack_require__(
          /*! ./register */
          "./register.js"));

          exports.register = register;

          var themes = __importStar(__webpack_require__(
          /*! ./themes */
          "./themes.js"));

          exports.themes = themes;

          var tools = __importStar(__webpack_require__(
          /*! ./tools */
          "./tools.js"));

          exports.tools = tools;

          var ListGrid_1 = __webpack_require__(
          /*! ./ListGrid */
          "./ListGrid.js");

          exports.ListGrid = ListGrid_1.ListGrid;

          var GridCanvasHelper_1 = __webpack_require__(
          /*! ./GridCanvasHelper */
          "./GridCanvasHelper.js");

          exports.GridCanvasHelper = GridCanvasHelper_1.GridCanvasHelper;

          var get_internal_1 = __webpack_require__(
          /*! ./get-internal */
          "./get-internal.js");

          exports._getInternal = get_internal_1.getInternal;
          /** @private */

          function getIcons() {
            return icons.get();
          }

          exports.getIcons = getIcons; // backward compatibility

          exports["default"] = {
            core: core,
            tools: tools,
            // impl Grids
            ListGrid: ListGrid_1.ListGrid,
            // objects
            columns: columns,
            headers: headers,
            themes: themes,
            data: data,
            // helper
            GridCanvasHelper: GridCanvasHelper_1.GridCanvasHelper,
            //plugin registers
            register: register,

            get icons() {
              return getIcons();
            }

          }; // eslint-disable-next-line @typescript-eslint/no-explicit-any

          Object.defineProperty(themes, "default", {
            enumerable: false,
            configurable: true,
            get: function get() {
              return themes.getDefault();
            },
            set: function set(defaultTheme) {
              themes.setDefault(defaultTheme);
            }
          }); // eslint-disable-next-line @typescript-eslint/no-explicit-any

          Object.defineProperty(themes, "choices", {
            enumerable: false,
            configurable: true,
            get: function get() {
              return themes.getChoices();
            }
          });
          /***/
        },

        /***/
        "./plugins/icons.js":
        /*!**************************!*\
          !*** ./plugins/icons.js ***!
          \**************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function pluginsIconsJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.icons = {};
          /***/
        },

        /***/
        "./plugins/themes.js":
        /*!***************************!*\
          !*** ./plugins/themes.js ***!
          \***************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function pluginsThemesJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.themes = {};
          /***/
        },

        /***/
        "./register.js":
        /*!*********************!*\
          !*** ./register.js ***!
          \*********************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function registerJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var icons_1 = __webpack_require__(
          /*! ./plugins/icons */
          "./plugins/icons.js");

          var themes_1 = __webpack_require__(
          /*! ./plugins/themes */
          "./plugins/themes.js");

          function register(obj, name, value) {
            var old = obj[name];
            obj[name] = value;
            return old;
          }

          function registers(obj, values) {
            for (var k in values) {
              obj[k] = values[k];
            }
          }

          function theme(name, theme) {
            if (theme != null) {
              return register(themes_1.themes, name, theme);
            } else {
              return themes_1.themes[name];
            }
          }

          exports.theme = theme;

          function icon(name, icon) {
            if (icon != null) {
              return register(icons_1.icons, name, icon);
            } else {
              return icons_1.icons[name];
            }
          }

          exports.icon = icon;

          function icons(icons) {
            return registers(icons_1.icons, icons);
          }

          exports.icons = icons;
          /***/
        },

        /***/
        "./themes.js":
        /*!*******************!*\
          !*** ./themes.js ***!
          \*******************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function themesJs(module, exports, __webpack_require__) {
          "use strict";

          var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
              "default": mod
            };
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __webpack_require__(
          /*! ./internal/utils */
          "./internal/utils.js");

          var theme_1 = __webpack_require__(
          /*! ./themes/theme */
          "./themes/theme.js");

          var BASIC_1 = __importDefault(__webpack_require__(
          /*! ./themes/BASIC */
          "./themes/BASIC.js"));

          var MATERIAL_DESIGN_1 = __importDefault(__webpack_require__(
          /*! ./themes/MATERIAL_DESIGN */
          "./themes/MATERIAL_DESIGN.js"));

          var themes_1 = __webpack_require__(
          /*! ./plugins/themes */
          "./plugins/themes.js");

          exports.BASIC = new theme_1.Theme(BASIC_1["default"]);
          exports.MATERIAL_DESIGN = new theme_1.Theme(MATERIAL_DESIGN_1["default"]);
          var builtin = {
            BASIC: exports.BASIC,
            MATERIAL_DESIGN: exports.MATERIAL_DESIGN
          };
          var defTheme = exports.MATERIAL_DESIGN;
          exports.theme = {
            Theme: theme_1.Theme
          };

          function of(value) {
            if (!value) {
              return null;
            }

            if (typeof value === "string") {
              var t = utils_1.getIgnoreCase(getChoices(), value);

              if (t) {
                return t;
              }

              return null;
            }

            if (value instanceof theme_1.Theme) {
              return value;
            }

            return new theme_1.Theme(value);
          }

          exports.of = of;

          function getDefault() {
            return defTheme;
          }

          exports.getDefault = getDefault;

          function setDefault(defaultTheme) {
            defTheme = of(defaultTheme) || defTheme;
          }

          exports.setDefault = setDefault;

          function getChoices() {
            return utils_1.extend(builtin, themes_1.themes);
          }

          exports.getChoices = getChoices;
          /***/
        },

        /***/
        "./themes/BASIC.js":
        /*!*************************!*\
          !*** ./themes/BASIC.js ***!
          \*************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function themesBASICJs(module, exports, __webpack_require__) {
          "use strict";
          /*eslint no-bitwise:0*/

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          function DEFAULT_BG_COLOR(args) {
            var row = args.row,
                grid = args.grid;

            if (row < grid.frozenRowCount) {
              return "#FFF";
            }

            var index = grid.getRecordIndexByRow(row);

            if (!(index & 1)) {
              return "#FFF";
            } else {
              return "#F6F6F6";
            }
          }

          var cacheLinearGradient = {};

          function getLinearGradient(context, left, top, right, bottom, colorStops) {
            var stop;
            var stopsKey = [];

            for (stop in colorStops) {
              stopsKey.push("".concat(stop, "@").concat(colorStops[stop]));
            }

            var key = "".concat(left, "/").concat(top, "/").concat(right, "/").concat(bottom, "/").concat(stopsKey.join(","));
            var ret = cacheLinearGradient[key];

            if (ret) {
              return ret;
            }

            var grad = context.createLinearGradient(left, top, left, bottom);

            for (stop in colorStops) {
              grad.addColorStop(Number(stop), colorStops[stop]);
            }

            return cacheLinearGradient[key] = grad;
          }

          function FROZEN_ROWS_BG_COLOR(args) {
            var col = args.col,
                grid = args.grid,
                frozenRowCount = args.grid.frozenRowCount,
                context = args.context;

            var _grid$getCellRelative = grid.getCellRelativeRect(col, 0),
                left = _grid$getCellRelative.left,
                top = _grid$getCellRelative.top;

            var _grid$getCellRelative2 = grid.getCellRelativeRect(col, frozenRowCount - 1),
                bottom = _grid$getCellRelative2.bottom;

            return getLinearGradient(context, left, top, left, bottom, {
              0: "#FFF",
              1: "#D3D3D3"
            });
          }
          /**
           * basic theme
           * @name BASIC
           * @memberof cheetahGrid.themes.choices
           */


          exports["default"] = {
            color: "#000",
            // frozenRowsColor: '#000',
            defaultBgColor: DEFAULT_BG_COLOR,
            frozenRowsBgColor: FROZEN_ROWS_BG_COLOR,
            selectionBgColor: "#CCE0FF",
            borderColor: "#000",
            // frozenRowsBorderColor: '#000',
            highlightBorderColor: "#5E9ED6",
            checkbox: {
              uncheckBgColor: "#FFF",
              checkBgColor: "rgb(76, 73, 72)",
              borderColor: "#000"
            },
            radioButton: {
              checkColor: "rgb(76, 73, 72)",
              checkBorderColor: "#000",
              uncheckBorderColor: "#000",
              uncheckBgColor: "#FFF",
              checkBgColor: "#FFF"
            },
            button: {
              color: "#FFF",
              bgColor: "#2196F3"
            },
            header: {
              sortArrowColor: "rgba(0, 0, 0, 0.38)"
            },
            underlayBackgroundColor: "#F6F6F6"
          };
          /***/
        },

        /***/
        "./themes/MATERIAL_DESIGN.js":
        /*!***********************************!*\
          !*** ./themes/MATERIAL_DESIGN.js ***!
          \***********************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function themesMATERIAL_DESIGNJs(module, exports, __webpack_require__) {
          "use strict";
          /*eslint no-bitwise:0*/

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          function FROZEN_ROWS_BORDER_COLOR(args) {
            var row = args.row,
                frozenRowCount = args.grid.frozenRowCount;

            if (frozenRowCount - 1 === row) {
              return ["#f2f2f2", "#f2f2f2", "#ccc7c7", "#f2f2f2"];
            } else {
              return ["#f2f2f2"];
            }
          }

          function BORDER_COLOR(args) {
            var col = args.col,
                row = args.row,
                grid = args.grid;
            var colCount = grid.colCount,
                frozenColCount = grid.frozenColCount,
                recordRowCount = grid.recordRowCount;
            var top = "#ccc7c7";
            var bottom = "#ccc7c7";

            if (recordRowCount > 1) {
              var _startRow3 = grid.getRecordStartRowByRecordIndex(grid.getRecordIndexByRow(row));

              var endRow = _startRow3 + recordRowCount - 1;

              if (_startRow3 !== row) {
                top = null;
              }

              if (endRow !== row) {
                bottom = null;
              }
            }

            if (frozenColCount - 1 === col) {
              return [top, "#f2f2f2", bottom, null];
            }

            if (colCount - 1 === col) {
              return [top, "#f2f2f2", bottom, null];
            }

            return [top, null, bottom, null];
          }
          /**
           * material design theme
           * @name MATERIAL_DESIGN
           * @memberof cheetahGrid.themes.choices
           */


          exports["default"] = {
            color: "rgba(0, 0, 0, 0.87)",
            frozenRowsColor: "rgba(0, 0, 0, 0.54)",
            defaultBgColor: "#FFF",
            // frozenRowsBgColor: '#FFF',
            selectionBgColor: "#CCE0FF",
            borderColor: BORDER_COLOR,
            frozenRowsBorderColor: FROZEN_ROWS_BORDER_COLOR,
            highlightBorderColor: "#5E9ED6",
            checkbox: {
              // uncheckBgColor: '#FFF',
              checkBgColor: "rgb(76, 73, 72)",
              borderColor: "rgba(0, 0, 0, 0.26)"
            },
            radioButton: {
              checkColor: "rgb(76, 73, 72)",
              checkBorderColor: "rgb(76, 73, 72)",
              uncheckBorderColor: "rgb(189, 189, 189)"
            },
            button: {
              color: "#FFF",
              bgColor: "#2196F3"
            },
            header: {
              sortArrowColor: "rgba(0, 0, 0, 0.38)"
            },
            underlayBackgroundColor: "#FFF"
          };
          /***/
        },

        /***/
        "./themes/theme.js":
        /*!*************************!*\
          !*** ./themes/theme.js ***!
          \*************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function themesThemeJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var utils_1 = __webpack_require__(
          /*! ../internal/utils */
          "./internal/utils.js");

          var symbolManager_1 = __webpack_require__(
          /*! ../internal/symbolManager */
          "./internal/symbolManager.js"); //private symbol


          var _ = symbolManager_1.get();

          function getProp(obj, superObj, names, defNames) {
            return utils_1.getChainSafe.apply(utils_1, [obj].concat(_toConsumableArray(names))) || utils_1.getChainSafe.apply(utils_1, [superObj].concat(_toConsumableArray(names))) || defNames && utils_1.getChainSafe.apply(utils_1, [obj].concat(_toConsumableArray(defNames))) || defNames && utils_1.getChainSafe.apply(utils_1, [superObj].concat(_toConsumableArray(defNames)));
          }

          var Theme = /*#__PURE__*/function () {
            function Theme(obj, superTheme) {
              _classCallCheck(this, Theme);

              this._checkbox = null;
              this._radioButton = null;
              this._button = null;
              this._header = null;
              this[_] = {
                obj: obj,
                superTheme: superTheme
              };
            }

            _createClass(Theme, [{
              key: "hasProperty",
              value: function hasProperty(names) {
                var _this$_3 = this[_],
                    obj = _this$_3.obj,
                    superTheme = _this$_3.superTheme;
                return hasThemeProperty(obj, names) || hasThemeProperty(superTheme, names);
              }
            }, {
              key: "extends",
              value: function _extends(obj) {
                return new Theme(obj, this);
              }
            }, {
              key: "font",
              get: function get() {
                var _this$_4 = this[_],
                    obj = _this$_4.obj,
                    superTheme = _this$_4.superTheme;
                return getProp(obj, superTheme, ["font"]);
              }
            }, {
              key: "underlayBackgroundColor",
              get: function get() {
                var _this$_5 = this[_],
                    obj = _this$_5.obj,
                    superTheme = _this$_5.superTheme;
                return getProp(obj, superTheme, ["underlayBackgroundColor"]);
              } // color

            }, {
              key: "color",
              get: function get() {
                var _this$_6 = this[_],
                    obj = _this$_6.obj,
                    superTheme = _this$_6.superTheme;
                return getProp(obj, superTheme, ["color"]);
              }
            }, {
              key: "frozenRowsColor",
              get: function get() {
                var _this$_7 = this[_],
                    obj = _this$_7.obj,
                    superTheme = _this$_7.superTheme;
                return getProp(obj, superTheme, ["frozenRowsColor"], ["color"]);
              } // background

            }, {
              key: "defaultBgColor",
              get: function get() {
                var _this$_8 = this[_],
                    obj = _this$_8.obj,
                    superTheme = _this$_8.superTheme;
                return getProp(obj, superTheme, ["defaultBgColor"]);
              }
            }, {
              key: "frozenRowsBgColor",
              get: function get() {
                var _this$_9 = this[_],
                    obj = _this$_9.obj,
                    superTheme = _this$_9.superTheme;
                return getProp(obj, superTheme, ["frozenRowsBgColor"], ["defaultBgColor"]);
              }
            }, {
              key: "selectionBgColor",
              get: function get() {
                var _this$_10 = this[_],
                    obj = _this$_10.obj,
                    superTheme = _this$_10.superTheme;
                return getProp(obj, superTheme, ["selectionBgColor"], ["defaultBgColor"]);
              }
            }, {
              key: "highlightBgColor",
              get: function get() {
                var _this104 = this;

                if (this.hasProperty(["highlightBgColor"])) {
                  var _this$_11 = this[_],
                      obj = _this$_11.obj,
                      superTheme = _this$_11.superTheme;
                  return getProp(obj, superTheme, ["highlightBgColor"]);
                } // eslint-disable-next-line @typescript-eslint/no-explicit-any


                return function (args) {
                  var color = args.row < args.grid.frozenRowCount ? _this104.frozenRowsBgColor : _this104.defaultBgColor;

                  if (typeof color === "function") {
                    return color(args);
                  }

                  return color;
                };
              } // border

            }, {
              key: "borderColor",
              get: function get() {
                var _this$_12 = this[_],
                    obj = _this$_12.obj,
                    superTheme = _this$_12.superTheme;
                return getProp(obj, superTheme, ["borderColor"]);
              }
            }, {
              key: "frozenRowsBorderColor",
              get: function get() {
                var _this$_13 = this[_],
                    obj = _this$_13.obj,
                    superTheme = _this$_13.superTheme;
                return getProp(obj, superTheme, ["frozenRowsBorderColor"], ["borderColor"]);
              }
            }, {
              key: "highlightBorderColor",
              get: function get() {
                var _this$_14 = this[_],
                    obj = _this$_14.obj,
                    superTheme = _this$_14.superTheme;
                return getProp(obj, superTheme, ["highlightBorderColor"], ["borderColor"]);
              }
            }, {
              key: "checkbox",
              get: function get() {
                var _this$_15 = this[_],
                    obj = _this$_15.obj,
                    superTheme = _this$_15.superTheme;
                return this._checkbox || (this._checkbox = {
                  get uncheckBgColor() {
                    return getProp(obj, superTheme, ["checkbox", "uncheckBgColor"], ["defaultBgColor"]);
                  },

                  get checkBgColor() {
                    return getProp(obj, superTheme, ["checkbox", "checkBgColor"], ["borderColor"]);
                  },

                  get borderColor() {
                    return getProp(obj, superTheme, ["checkbox", "borderColor"], ["borderColor"]);
                  }

                });
              }
            }, {
              key: "radioButton",
              get: function get() {
                var _this$_16 = this[_],
                    obj = _this$_16.obj,
                    superTheme = _this$_16.superTheme;
                return this._radioButton || (this._radioButton = {
                  get checkColor() {
                    return getProp(obj, superTheme, ["radioButton", "checkColor"], ["color"]);
                  },

                  get uncheckBorderColor() {
                    return getProp(obj, superTheme, ["radioButton", "uncheckBorderColor"], ["borderColor"]);
                  },

                  get checkBorderColor() {
                    return getProp(obj, superTheme, ["radioButton", "checkBorderColor"], ["borderColor"]);
                  },

                  get uncheckBgColor() {
                    return getProp(obj, superTheme, ["radioButton", "uncheckBgColor"], ["defaultBgColor"]);
                  },

                  get checkBgColor() {
                    return getProp(obj, superTheme, ["radioButton", "checkBgColor"], ["defaultBgColor"]);
                  }

                });
              }
            }, {
              key: "button",
              get: function get() {
                var _this$_17 = this[_],
                    obj = _this$_17.obj,
                    superTheme = _this$_17.superTheme;
                return this._button || (this._button = {
                  get color() {
                    return getProp(obj, superTheme, ["button", "color"], ["color"]);
                  },

                  get bgColor() {
                    return getProp(obj, superTheme, ["button", "bgColor"], ["defaultBgColor"]);
                  }

                });
              }
            }, {
              key: "header",
              get: function get() {
                var _this$_18 = this[_],
                    obj = _this$_18.obj,
                    superTheme = _this$_18.superTheme;
                return this._header || (this._header = {
                  get sortArrowColor() {
                    return getProp(obj, superTheme, ["header", "sortArrowColor"], ["color"]);
                  }

                });
              }
            }]);

            return Theme;
          }();

          exports.Theme = Theme;

          function hasThemeProperty(obj, names) {
            if (obj instanceof Theme) {
              return obj.hasProperty(names);
            } else {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              var o = obj;

              if (!o) {
                return false;
              }

              for (var index = 0; index < names.length; index++) {
                var name = names[index];
                o = o[name];

                if (!o) {
                  return false;
                }
              }

              return !!o;
            }
          }
          /***/

        },

        /***/
        "./tools.js":
        /*!******************!*\
          !*** ./tools.js ***!
          \******************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function toolsJs(module, exports, __webpack_require__) {
          "use strict";

          var __importStar = this && this.__importStar || function (mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result["default"] = mod;
            return result;
          };

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var canvashelper = __importStar(__webpack_require__(
          /*! ./tools/canvashelper */
          "./tools/canvashelper.js"));

          exports.canvashelper = canvashelper;
          /***/
        },

        /***/
        "./tools/canvashelper.js":
        /*!*******************************!*\
          !*** ./tools/canvashelper.js ***!
          \*******************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function toolsCanvashelperJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var canvases_1 = __webpack_require__(
          /*! ../internal/canvases */
          "./internal/canvases.js");

          var ceil = Math.ceil,
              PI = Math.PI;

          function strokeColorsRect(ctx, borderColors, left, top, width, height) {
            function strokeRectLines(positions) {
              for (var i = 0; i < borderColors.length; i++) {
                var color = borderColors[i];
                var _preColor = borderColors[i - 1];

                if (color) {
                  if (_preColor !== color) {
                    if (_preColor) {
                      ctx.strokeStyle = _preColor;
                      ctx.stroke();
                    }

                    var pos1 = positions[i];
                    ctx.beginPath();
                    ctx.moveTo(pos1.x, pos1.y);
                  }

                  var pos2 = positions[i + 1];
                  ctx.lineTo(pos2.x, pos2.y);
                } else {
                  if (_preColor) {
                    ctx.strokeStyle = _preColor;
                    ctx.stroke();
                  }
                }
              }

              var preColor = borderColors[borderColors.length - 1];

              if (preColor) {
                ctx.strokeStyle = preColor;
                ctx.stroke();
              }
            }

            if (borderColors[0] === borderColors[1] && borderColors[0] === borderColors[2] && borderColors[0] === borderColors[3]) {
              if (borderColors[0]) {
                ctx.strokeStyle = borderColors[0];
                ctx.strokeRect(left, top, width, height);
              }
            } else {
              strokeRectLines([{
                x: left,
                y: top
              }, {
                x: left + width,
                y: top
              }, {
                x: left + width,
                y: top + height
              }, {
                x: left,
                y: top + height
              }, {
                x: left,
                y: top
              }]);
            }
          }

          exports.strokeColorsRect = strokeColorsRect;

          function roundRect(ctx, left, top, width, height, radius) {
            ctx.beginPath();
            ctx.arc(left + radius, top + radius, radius, -PI, -0.5 * PI, false);
            ctx.arc(left + width - radius, top + radius, radius, -0.5 * PI, 0, false);
            ctx.arc(left + width - radius, top + height - radius, radius, 0, 0.5 * PI, false);
            ctx.arc(left + radius, top + height - radius, radius, 0.5 * PI, PI, false);
            ctx.closePath();
          }

          exports.roundRect = roundRect;

          function fillRoundRect(ctx, left, top, width, height, radius) {
            roundRect(ctx, left, top, width, height, radius);
            ctx.fill();
          }

          exports.fillRoundRect = fillRoundRect;

          function strokeRoundRect(ctx, left, top, width, height, radius) {
            roundRect(ctx, left, top, width, height, radius);
            ctx.stroke();
          }

          exports.strokeRoundRect = strokeRoundRect;

          function fillCircle(ctx, left, top, width, height) {
            var min = Math.min(width, height) / 2;
            ctx.beginPath();
            ctx.arc(left + min, top + min, min, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
          }

          exports.fillCircle = fillCircle;

          function strokeCircle(ctx, left, top, width, height) {
            var min = Math.min(width, height) / 2;
            ctx.beginPath();
            ctx.arc(left + min, top + min, min, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.stroke();
          }

          exports.strokeCircle = strokeCircle;

          function fillTextRect(ctx, text, left, top, width, height) {
            var _ref77 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {},
                _ref77$offset = _ref77.offset,
                offset = _ref77$offset === void 0 ? 2 : _ref77$offset,
                padding = _ref77.padding;

            var rect = {
              left: left,
              top: top,
              width: width,
              height: height,
              right: left + width,
              bottom: top + height
            };
            ctx.save();

            try {
              ctx.beginPath();
              ctx.rect(rect.left, rect.top, rect.width, rect.height); //clip

              ctx.clip(); //文字描画

              var pos = canvases_1.calcBasePosition(ctx, rect, {
                offset: offset,
                padding: padding
              });
              ctx.fillText(text, pos.x, pos.y);
            } finally {
              ctx.restore();
            }
          }

          exports.fillTextRect = fillTextRect;

          function drawInlineImageRect(ctx, image, srcLeft, srcTop, srcWidth, srcHeight, destWidth, destHeight, left, top, width, height) {
            var _ref78 = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : {},
                _ref78$offset = _ref78.offset,
                offset = _ref78$offset === void 0 ? 2 : _ref78$offset,
                padding = _ref78.padding;

            var rect = {
              left: left,
              top: top,
              width: width,
              height: height,
              right: left + width,
              bottom: top + height
            };
            ctx.save();

            try {
              ctx.beginPath();
              ctx.rect(rect.left, rect.top, rect.width, rect.height); //clip

              ctx.clip(); //文字描画

              var pos = canvases_1.calcStartPosition(ctx, rect, destWidth, destHeight, {
                offset: offset,
                padding: padding
              });
              ctx.drawImage(image, srcLeft, srcTop, srcWidth, srcHeight, pos.x, pos.y, destWidth, destHeight);
            } finally {
              ctx.restore();
            }
          }

          exports.drawInlineImageRect = drawInlineImageRect;
          /**
           * Returns an object containing the width of the checkbox.
           * @param  {CanvasRenderingContext2D} ctx canvas context
           * @return {Object} Object containing the width of the checkbox
           * @memberof cheetahGrid.tools.canvashelper
           */

          function measureCheckbox(ctx) {
            return {
              width: canvases_1.getFontSize(ctx, null).width
            };
          }

          exports.measureCheckbox = measureCheckbox;
          /**
           * Returns an object containing the width of the radio button.
           * @param  {CanvasRenderingContext2D} ctx canvas context
           * @return {Object} Object containing the width of the radio button
           * @memberof cheetahGrid.tools.canvashelper
           */

          function measureRadioButton(ctx) {
            return {
              width: canvases_1.getFontSize(ctx, null).width
            };
          }

          exports.measureRadioButton = measureRadioButton;
          /**
           * draw Checkbox
           * @param  {CanvasRenderingContext2D} ctx canvas context
           * @param  {number} x The x coordinate where to start drawing the checkbox (relative to the canvas)
           * @param  {number} y The y coordinate where to start drawing the checkbox (relative to the canvas)
           * @param  {boolean|number} check checkbox check status
           * @param  {object} option option
           * @return {void}
           * @memberof cheetahGrid.tools.canvashelper
           */

          function drawCheckbox(ctx, x, y, check) {
            var _ref79 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
                _ref79$uncheckBgColor = _ref79.uncheckBgColor,
                uncheckBgColor = _ref79$uncheckBgColor === void 0 ? "#FFF" : _ref79$uncheckBgColor,
                _ref79$checkBgColor = _ref79.checkBgColor,
                checkBgColor = _ref79$checkBgColor === void 0 ? "rgb(76, 73, 72)" : _ref79$checkBgColor,
                _ref79$borderColor = _ref79.borderColor,
                borderColor = _ref79$borderColor === void 0 ? "#000" : _ref79$borderColor,
                _ref79$boxSize = _ref79.boxSize,
                boxSize = _ref79$boxSize === void 0 ? measureCheckbox(ctx).width : _ref79$boxSize;

            var checkPoint = typeof check === "number" ? check > 1 ? 1 : check : 1;
            ctx.save();

            try {
              ctx.fillStyle = check ? checkBgColor : uncheckBgColor;
              var leftX = ceil(x);
              var topY = ceil(y);
              var size = ceil(boxSize);
              fillRoundRect(ctx, leftX - 1, topY - 1, size + 1, size + 1, boxSize / 5);
              ctx.lineWidth = 1;
              ctx.strokeStyle = borderColor;
              strokeRoundRect(ctx, leftX - 0.5, topY - 0.5, size, size, boxSize / 5);

              if (check) {
                ctx.lineWidth = ceil(boxSize / 10);
                ctx.strokeStyle = uncheckBgColor;
                var leftWidth = boxSize / 4;
                var rightWidth = boxSize / 2 * 0.9;
                var leftLeftPos = x + boxSize * 0.2;
                var leftTopPos = y + boxSize / 2;

                if (checkPoint < 0.5) {
                  leftWidth *= checkPoint * 2;
                }

                ctx.beginPath();
                ctx.moveTo(leftLeftPos, leftTopPos);
                ctx.lineTo(leftLeftPos + leftWidth, leftTopPos + leftWidth);

                if (checkPoint > 0.5) {
                  if (checkPoint < 1) {
                    rightWidth *= (checkPoint - 0.5) * 2;
                  }

                  ctx.lineTo(leftLeftPos + leftWidth + rightWidth, leftTopPos + leftWidth - rightWidth);
                }

                ctx.stroke();
              }
            } finally {
              ctx.restore();
            }
          }

          exports.drawCheckbox = drawCheckbox;
          /**
           * draw Radio button
           * @param  {CanvasRenderingContext2D} ctx canvas context
           * @param  {number} x The x coordinate where to start drawing the radio button (relative to the canvas)
           * @param  {number} y The y coordinate where to start drawing the radio button (relative to the canvas)
           * @param  {boolean|number} check radio button check status
           * @param  {object} option option
           * @return {void}
           * @memberof cheetahGrid.tools.canvashelper
           */

          function drawRadioButton(ctx, x, y, check) {
            var _ref80 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
                _ref80$checkColor = _ref80.checkColor,
                checkColor = _ref80$checkColor === void 0 ? "rgb(76, 73, 72)" : _ref80$checkColor,
                _ref80$borderColor = _ref80.borderColor,
                borderColor = _ref80$borderColor === void 0 ? "#000" : _ref80$borderColor,
                _ref80$bgColor = _ref80.bgColor,
                bgColor = _ref80$bgColor === void 0 ? "#FFF" : _ref80$bgColor,
                _ref80$boxSize = _ref80.boxSize,
                boxSize = _ref80$boxSize === void 0 ? measureRadioButton(ctx).width : _ref80$boxSize;

            var ratio = typeof check === "number" ? check > 1 ? 1 : check : 1;
            ctx.save();

            try {
              ctx.fillStyle = bgColor;
              var leftX = ceil(x);
              var topY = ceil(y);
              var size = ceil(boxSize);
              fillCircle(ctx, leftX - 1, topY - 1, size + 1, size + 1);
              ctx.lineWidth = 1;
              ctx.strokeStyle = borderColor;
              strokeCircle(ctx, leftX - 0.5, topY - 0.5, size, size);

              if (check) {
                var checkSize = size * ratio / 2;
                var padding = (size - checkSize) / 2;
                ctx.fillStyle = checkColor;
                fillCircle(ctx, ceil((leftX - 0.5 + padding) * 100) / 100, ceil((topY - 0.5 + padding) * 100) / 100, ceil(checkSize * 100) / 100, ceil(checkSize * 100) / 100);
              }
            } finally {
              ctx.restore();
            }
          }

          exports.drawRadioButton = drawRadioButton;
          /**
           * draw Button
           */

          function drawButton(ctx, left, top, width, height) {
            var option = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
            var _option$backgroundCol = option.backgroundColor,
                backgroundColor = _option$backgroundCol === void 0 ? "#FFF" : _option$backgroundCol,
                _option$bgColor = option.bgColor,
                bgColor = _option$bgColor === void 0 ? backgroundColor : _option$bgColor,
                _option$radius = option.radius,
                radius = _option$radius === void 0 ? 4 : _option$radius,
                _option$shadow = option.shadow,
                shadow = _option$shadow === void 0 ? {} : _option$shadow;
            ctx.save();

            try {
              ctx.fillStyle = bgColor;

              if (shadow) {
                var _shadow$color = shadow.color,
                    color = _shadow$color === void 0 ? "rgba(0, 0, 0, 0.24)" : _shadow$color,
                    _shadow$blur = shadow.blur,
                    blur = _shadow$blur === void 0 ? 1 : _shadow$blur,
                    _shadow$offsetX = shadow.offsetX,
                    offsetX = _shadow$offsetX === void 0 ? 0 : _shadow$offsetX,
                    _shadow$offsetY = shadow.offsetY,
                    offsetY = _shadow$offsetY === void 0 ? 2 : _shadow$offsetY,
                    _shadow$offset = shadow.offset;
                _shadow$offset = _shadow$offset === void 0 ? {} : _shadow$offset;
                var _shadow$offset$x = _shadow$offset.x,
                    ox = _shadow$offset$x === void 0 ? offsetX : _shadow$offset$x,
                    _shadow$offset$y = _shadow$offset.y,
                    oy = _shadow$offset$y === void 0 ? offsetY : _shadow$offset$y;
                ctx.shadowColor = color;
                ctx.shadowBlur = blur; //ぼかし

                ctx.shadowOffsetX = ox;
                ctx.shadowOffsetY = oy;
              }

              fillRoundRect(ctx, ceil(left), ceil(top), ceil(width), ceil(height), radius);
            } finally {
              ctx.restore();
            }
          }

          exports.drawButton = drawButton;
          /***/
        },

        /***/
        "./tooltip/BaseTooltip.js":
        /*!********************************!*\
          !*** ./tooltip/BaseTooltip.js ***!
          \********************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function tooltipBaseTooltipJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var BaseTooltip = /*#__PURE__*/function () {
            function BaseTooltip(grid) {
              _classCallCheck(this, BaseTooltip);

              this._grid = grid;
            }

            _createClass(BaseTooltip, [{
              key: "dispose",
              value: function dispose() {
                this.detachTooltipElement();

                if (this._tooltipElement) {
                  this._tooltipElement.dispose();
                }

                this._tooltipElement = undefined;
              }
            }, {
              key: "_getTooltipElement",
              value: function _getTooltipElement() {
                if (this._tooltipElement) {
                  return this._tooltipElement;
                }

                return this._tooltipElement = this.createTooltipElementInternal();
              }
            }, {
              key: "attachTooltipElement",
              value: function attachTooltipElement(col, row, content) {
                var tooltipElement = this._getTooltipElement();

                tooltipElement.attach(this._grid, col, row, content);
              }
            }, {
              key: "moveTooltipElement",
              value: function moveTooltipElement(col, row) {
                var tooltipElement = this._getTooltipElement();

                tooltipElement.move(this._grid, col, row);
              }
            }, {
              key: "detachTooltipElement",
              value: function detachTooltipElement() {
                var tooltipElement = this._getTooltipElement();

                tooltipElement._detach();
              }
            }]);

            return BaseTooltip;
          }();

          exports.BaseTooltip = BaseTooltip;
          /***/
        },

        /***/
        "./tooltip/Tooltip.js":
        /*!****************************!*\
          !*** ./tooltip/Tooltip.js ***!
          \****************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function tooltipTooltipJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var BaseTooltip_1 = __webpack_require__(
          /*! ./BaseTooltip */
          "./tooltip/BaseTooltip.js");

          var TooltipElement_1 = __webpack_require__(
          /*! ./internal/TooltipElement */
          "./tooltip/internal/TooltipElement.js");

          var Tooltip = /*#__PURE__*/function (_BaseTooltip_1$BaseTo) {
            _inherits(Tooltip, _BaseTooltip_1$BaseTo);

            var _super70 = _createSuper(Tooltip);

            function Tooltip() {
              _classCallCheck(this, Tooltip);

              return _super70.apply(this, arguments);
            }

            _createClass(Tooltip, [{
              key: "createTooltipElementInternal",
              value: function createTooltipElementInternal() {
                return new TooltipElement_1.TooltipElement();
              }
            }]);

            return Tooltip;
          }(BaseTooltip_1.BaseTooltip);

          exports.Tooltip = Tooltip;
          /***/
        },

        /***/
        "./tooltip/TooltipHandler.js":
        /*!***********************************!*\
          !*** ./tooltip/TooltipHandler.js ***!
          \***********************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function tooltipTooltipHandlerJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var LG_EVENT_TYPE_1 = __webpack_require__(
          /*! ../list-grid/LG_EVENT_TYPE */
          "./list-grid/LG_EVENT_TYPE.js");

          var Tooltip_1 = __webpack_require__(
          /*! ./Tooltip */
          "./tooltip/Tooltip.js");

          var utils_1 = __webpack_require__(
          /*! ../internal/utils */
          "./internal/utils.js");

          var TOOLTIP_INSTANCE_FACTORY = {
            "overflow-text": function overflowText(grid) {
              return new Tooltip_1.Tooltip(grid);
            }
          };

          function getTooltipInstanceInfo( // eslint-disable-next-line @typescript-eslint/no-explicit-any
          grid, col, row) {
            //
            // overflow text tooltip
            var overflowText = grid.getCellOverflowText(col, row);

            if (overflowText) {
              return {
                type: "overflow-text",
                content: overflowText
              };
            }

            return null;
          }

          var TooltipHandler = /*#__PURE__*/function () {
            function TooltipHandler(grid) {
              _classCallCheck(this, TooltipHandler);

              this._grid = grid;
              this._tooltipInstances = {};

              this._bindGridEvent(grid);
            }

            _createClass(TooltipHandler, [{
              key: "dispose",
              value: function dispose() {
                var tooltipInstances = this._tooltipInstances;

                for (var k in tooltipInstances) {
                  tooltipInstances[k].dispose();
                }

                delete this._tooltipInstances;
                this._attachInfo = null;
              }
            }, {
              key: "_attach",
              value: function _attach(col, row) {
                var info = this._attachInfo;

                var instanceInfo = this._getTooltipInstanceInfo(col, row);

                if (info && (!instanceInfo || info.instance !== instanceInfo.instance)) {
                  info.instance.detachTooltipElement();
                  this._attachInfo = null;
                }

                if (!instanceInfo) {
                  return;
                }

                var instance = instanceInfo.instance;
                instance.attachTooltipElement(col, row, instanceInfo.content);

                var range = this._grid.getCellRange(col, row);

                this._attachInfo = {
                  range: range,
                  instance: instance
                };
              }
            }, {
              key: "_move",
              value: function _move(col, row) {
                var info = this._attachInfo;

                if (!info || !utils_1.cellInRange(info.range, col, row)) {
                  return;
                }

                var instance = info.instance;
                instance.moveTooltipElement(col, row);
              }
            }, {
              key: "_detach",
              value: function _detach() {
                var info = this._attachInfo;

                if (!info) {
                  return;
                }

                var instance = info.instance;
                instance.detachTooltipElement();
                this._attachInfo = null;
              }
            }, {
              key: "_isAttachCell",
              value: function _isAttachCell(col, row) {
                var info = this._attachInfo;

                if (!info) {
                  return false;
                }

                return utils_1.cellInRange(info.range, col, row);
              }
            }, {
              key: "_bindGridEvent",
              value: function _bindGridEvent(grid) {
                var _this105 = this;

                grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.MOUSEOVER_CELL, function (e) {
                  if (e.related) {
                    if (_this105._isAttachCell(e.col, e.row)) {
                      return;
                    }
                  }

                  _this105._attach(e.col, e.row);
                });
                grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.MOUSEOUT_CELL, function (e) {
                  if (e.related) {
                    if (_this105._isAttachCell(e.related.col, e.related.row)) {
                      return;
                    }
                  }

                  _this105._detach();
                });
                grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.SELECTED_CELL, function (e) {
                  if (_this105._isAttachCell(e.col, e.row)) {
                    _this105._detach();
                  }
                });
                grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.SCROLL, function () {
                  var info = _this105._attachInfo;

                  if (!info) {
                    return;
                  }

                  _this105._move(info.range.start.col, info.range.start.row);
                });
                grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.CHANGED_VALUE, function (e) {
                  if (_this105._isAttachCell(e.col, e.row)) {
                    _this105._detach();

                    _this105._attach(e.col, e.row);
                  }
                });
              }
            }, {
              key: "_getTooltipInstanceInfo",
              value: function _getTooltipInstanceInfo(col, row) {
                var grid = this._grid;
                var tooltipInstances = this._tooltipInstances;
                var info = getTooltipInstanceInfo(grid, col, row);

                if (!info) {
                  return null;
                }

                var type = info.type;
                var instance = tooltipInstances[type] || (tooltipInstances[type] = TOOLTIP_INSTANCE_FACTORY[type](grid));
                return {
                  instance: instance,
                  type: type,
                  content: info.content
                };
              }
            }]);

            return TooltipHandler;
          }();

          exports.TooltipHandler = TooltipHandler;
          /***/
        },

        /***/
        "./tooltip/internal/TooltipElement.js":
        /*!********************************************!*\
          !*** ./tooltip/internal/TooltipElement.js ***!
          \********************************************/

        /*! no static exports found */

        /*! ModuleConcatenation bailout: Module is not an ECMAScript module */

        /***/
        function tooltipInternalTooltipElementJs(module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var EventHandler_1 = __webpack_require__(
          /*! ../../internal/EventHandler */
          "./internal/EventHandler.js");

          var dom_1 = __webpack_require__(
          /*! ../../internal/dom */
          "./internal/dom.js");

          var CLASSNAME = "cheetah-grid__tooltip-element";
          var CONTENT_CLASSNAME = "".concat(CLASSNAME, "__content");
          var HIDDEN_CLASSNAME = "".concat(CLASSNAME, "--hidden");
          var SHOWN_CLASSNAME = "".concat(CLASSNAME, "--shown");

          function createTooltipDomElement() {
            __webpack_require__(
            /*! @/tooltip/internal/TooltipElement.css */
            "../src/js/tooltip/internal/TooltipElement.css");

            var rootElement = dom_1.createElement("div", {
              classList: [CLASSNAME, HIDDEN_CLASSNAME]
            });
            var messageElement = dom_1.createElement("pre", {
              classList: [CONTENT_CLASSNAME]
            });
            rootElement.appendChild(messageElement);
            return rootElement;
          }

          var TooltipElement = /*#__PURE__*/function () {
            function TooltipElement() {
              _classCallCheck(this, TooltipElement);

              this._handler = new EventHandler_1.EventHandler();
              var rootElement = this._rootElement = createTooltipDomElement();
              this._messageElement = rootElement.querySelector(".".concat(CONTENT_CLASSNAME));
            }

            _createClass(TooltipElement, [{
              key: "dispose",
              value: function dispose() {
                this.detach();
                var rootElement = this._rootElement;

                if (rootElement.parentElement) {
                  rootElement.parentElement.removeChild(rootElement);
                }

                this._handler.dispose();

                delete this._rootElement;
                delete this._messageElement;
              }
            }, {
              key: "attach",
              value: function attach(grid, col, row, content) {
                var rootElement = this._rootElement;
                var messageElement = this._messageElement;
                rootElement.classList.remove(SHOWN_CLASSNAME);
                rootElement.classList.add(HIDDEN_CLASSNAME);

                if (this._attachCell(grid, col, row)) {
                  rootElement.classList.add(SHOWN_CLASSNAME);
                  rootElement.classList.remove(HIDDEN_CLASSNAME);
                  messageElement.textContent = content;
                } else {
                  this._detach();
                }
              }
            }, {
              key: "move",
              value: function move(grid, col, row) {
                var rootElement = this._rootElement;

                if (this._attachCell(grid, col, row)) {
                  rootElement.classList.add(SHOWN_CLASSNAME);
                  rootElement.classList.remove(HIDDEN_CLASSNAME);
                } else {
                  this._detach();
                }
              }
            }, {
              key: "detach",
              value: function detach() {
                this._detach();
              }
            }, {
              key: "_detach",
              value: function _detach() {
                var rootElement = this._rootElement;

                if (rootElement.parentElement) {
                  // rootElement.parentElement.removeChild(rootElement);
                  rootElement.classList.remove(SHOWN_CLASSNAME);
                  rootElement.classList.add(HIDDEN_CLASSNAME);
                }
              }
            }, {
              key: "_attachCell",
              value: function _attachCell(grid, col, row) {
                var rootElement = this._rootElement;

                var _grid$getAttachCellsA7 = grid.getAttachCellsArea(grid.getCellRange(col, row)),
                    element = _grid$getAttachCellsA7.element,
                    rect = _grid$getAttachCellsA7.rect;

                var top = rect.bottom,
                    left = rect.left,
                    width = rect.width;
                var frozenRowCount = grid.frozenRowCount,
                    frozenColCount = grid.frozenColCount;

                if (row >= frozenRowCount && frozenRowCount > 0) {
                  var _grid$getAttachCellsA8 = grid.getAttachCellsArea(grid.getCellRange(col, frozenRowCount - 1)),
                      frozenRect = _grid$getAttachCellsA8.rect;

                  if (top < frozenRect.bottom) {
                    return false; //範囲外
                  }
                } else {
                  if (top < 0) {
                    return false; //範囲外
                  }
                }

                if (col >= frozenColCount && frozenColCount > 0) {
                  var _grid$getAttachCellsA9 = grid.getAttachCellsArea(grid.getCellRange(frozenColCount - 1, row)),
                      _frozenRect5 = _grid$getAttachCellsA9.rect;

                  if (left < _frozenRect5.right) {
                    return false; //範囲外
                  }
                } else {
                  if (left < 0) {
                    return false; //範囲外
                  }
                }

                var offsetHeight = element.offsetHeight,
                    offsetWidth = element.offsetWidth;

                if (offsetHeight < top) {
                  return false; //範囲外
                }

                if (offsetWidth < left) {
                  return false; //範囲外
                }

                rootElement.style.top = "".concat(top.toFixed(), "px");
                rootElement.style.left = "".concat((left + width / 2).toFixed(), "px");
                rootElement.style.minWidth = "".concat(width.toFixed(), "px");

                if (rootElement.parentElement !== element) {
                  element.appendChild(rootElement);
                }

                return true;
              }
            }]);

            return TooltipElement;
          }();

          exports.TooltipElement = TooltipElement;
          /***/
        }
        /******/

      })
    );
  });
}).call(typeof global !== "undefined" ? global : window, typeof global !== "undefined" ? global : window);
})();
//# sourceMappingURL=cheetahGrid.es5.js.map