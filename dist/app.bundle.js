(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "IKTr":
/*!***********************************!*\
  !*** ./src/Quicksand-Regular.ttf ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "cffc279022b0d87c571dff78071828f9.ttf");

/***/ }),

/***/ "J6RI":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "HeW1");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Quicksand_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Quicksand-Regular.ttf */ "IKTr");
/* harmony import */ var _Quicksand_Bold_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Quicksand-Bold.ttf */ "yyL1");
/* harmony import */ var _image_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image.jpg */ "XBHt");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Quicksand_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Quicksand_Bold_ttf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_image_jpg__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, " @font-face {\n       font-family: 'MyFont';\n       src:  url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n      font-weight: 600;\n      font-style: normal;\n    }\n\n.hello {\n    color: red;\n    font-family: 'MyFont';\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  }\n", "",{"version":3,"sources":["style.css"],"names":[],"mappings":"CAAC;OACM,qBAAqB;OACrB;kEAC+C;MAChD,gBAAgB;MAChB,kBAAkB;IACpB;;AAEJ;IACI,UAAU;IACV,qBAAqB;IACrB,mDAA8B;EAChC","file":"style.css","sourcesContent":[" @font-face {\n       font-family: 'MyFont';\n       src:  url('./Quicksand-Regular.ttf') format('truetype'),\n        url('./Quicksand-Bold.ttf') format('truetype');\n      font-weight: 600;\n      font-style: normal;\n    }\n\n.hello {\n    color: red;\n    font-family: 'MyFont';\n    background: url('./image.jpg');\n  }\n"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "OMi8":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "J6RI");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "WgOm":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/*! exports provided: square, cube */
/*! exports used: cube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export square */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cube; });
function square(x) {
    return x * x;
  }
  
  function cube(x) {
    return x * x * x;
  }

/***/ }),

/***/ "XBHt":
/*!***********************!*\
  !*** ./src/image.jpg ***!
  \***********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "2a343e55e5c320e6c63574a23b20c178.jpg");

/***/ }),

/***/ "dSPy":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return printMe; });
function printMe() {
  console.log('I get called from print.js!');
}

/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "OMi8");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image.jpg */ "XBHt");
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./print.js */ "dSPy");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math.js */ "WgOm");
// import _ from 'lodash';





function component() {
    // const element = document.createElement('div');
    const element = document.createElement('pre');
    const btn = document.createElement('button');

    // Lodash, now imported by this script
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.classList.add('hello');
    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + Object(_math_js__WEBPACK_IMPORTED_MODULE_3__[/* cube */ "a"])(5)
    ].join('\n\n');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = _image_jpg__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];

    element.appendChild(myIcon);

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = _print_js__WEBPACK_IMPORTED_MODULE_2__["default"];
    element.appendChild(btn);

    return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (false) {}

/***/ }),

/***/ "yyL1":
/*!********************************!*\
  !*** ./src/Quicksand-Bold.ttf ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "76f20c55b4aa564ea883173598963b95.ttf");

/***/ })

},[["tjUo","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUXVpY2tzYW5kLVJlZ3VsYXIudHRmIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLy8uL3NyYy9tYXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUXVpY2tzYW5kLUJvbGQudHRmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWUsOEVBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5RjtBQUNPO0FBQzVCO0FBQ0g7QUFDVDtBQUN4RCw4QkFBOEIsbUZBQTJCO0FBQ3pELHlDQUF5QyxzRkFBK0IsQ0FBQyxzRUFBNkI7QUFDdEcseUNBQXlDLHNGQUErQixDQUFDLG1FQUE2QjtBQUN0Ryx5Q0FBeUMsc0ZBQStCLENBQUMsMERBQTZCO0FBQ3RHO0FBQ0EsOEJBQThCLFFBQVMsZ0JBQWdCLCtCQUErQiwrSkFBK0oseUJBQXlCLDJCQUEyQixPQUFPLFlBQVksaUJBQWlCLDRCQUE0QixrRUFBa0UsS0FBSyxTQUFTLGdFQUFnRSxZQUFZLE1BQU0sT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLDBEQUEwRCwrQkFBK0IsMEhBQTBILHlCQUF5QiwyQkFBMkIsT0FBTyxZQUFZLGlCQUFpQiw0QkFBNEIscUNBQXFDLEtBQUssS0FBSztBQUNqOUI7QUFDZSxzRkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDYnZDLFVBQVUsbUJBQU8sQ0FBQyxtRkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsaUVBQXNEOztBQUV4Rjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQU87QUFDUDtBQUNBOztBQUVBLEVBQVM7QUFDVDtBQUNBLEc7Ozs7Ozs7Ozs7Ozs7QUNOZSw4RUFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7Ozs7QUNBL0U7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcUI7QUFDVTtBQUNFO0FBQ0E7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsNkRBQUk7QUFDckM7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQiwwREFBSTs7QUFFckI7O0FBRUE7QUFDQSxrQkFBa0IsaURBQU87QUFDekI7O0FBRUE7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7O0FBRUEsSUFBSSxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7OztBQ25DRCw4RUFBdUIseUNBQXlDLEUiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjZmZjMjc5MDIyYjBkODdjNTcxZGZmNzgwNzE4MjhmOS50dGZcIjsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuL1F1aWNrc2FuZC1SZWd1bGFyLnR0ZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIGZyb20gXCIuL1F1aWNrc2FuZC1Cb2xkLnR0ZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fIGZyb20gXCIuL2ltYWdlLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiIEBmb250LWZhY2Uge1xcbiAgICAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgICAgIHNyYzogIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIH1cXG5cXG4uaGVsbG8ge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wic3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJDQUFDO09BQ00scUJBQXFCO09BQ3JCO2tFQUMrQztNQUNoRCxnQkFBZ0I7TUFDaEIsa0JBQWtCO0lBQ3BCOztBQUVKO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixtREFBOEI7RUFDaENcIixcImZpbGVcIjpcInN0eWxlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIgQGZvbnQtZmFjZSB7XFxuICAgICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgICAgc3JjOiAgdXJsKCcuL1F1aWNrc2FuZC1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgICAgIHVybCgnLi9RdWlja3NhbmQtQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIH1cXG5cXG4uaGVsbG8ge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pbWFnZS5qcGcnKTtcXG4gIH1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBmdW5jdGlvbiBzcXVhcmUoeCkge1xuICAgIHJldHVybiB4ICogeDtcbiAgfVxuICBcbiAgZXhwb3J0IGZ1bmN0aW9uIGN1YmUoeCkge1xuICAgIHJldHVybiB4ICogeCAqIHg7XG4gIH0iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMmEzNDNlNTVlNWMzMjBlNmM2MzU3NGEyM2IyMGMxNzguanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRNZSgpIHtcbiAgY29uc29sZS5sb2coJ0kgZ2V0IGNhbGxlZCBmcm9tIHByaW50LmpzIScpO1xufSIsIi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBJY29uIGZyb20gJy4vaW1hZ2UuanBnJztcbmltcG9ydCBwcmludE1lIGZyb20gJy4vcHJpbnQuanMnO1xuaW1wb3J0IHsgY3ViZSB9IGZyb20gJy4vbWF0aC5qcyc7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgICAvLyBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgLy8gTG9kYXNoLCBub3cgaW1wb3J0ZWQgYnkgdGhpcyBzY3JpcHRcbiAgICAvLyBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcbiAgICAvLyBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlbGxvJyk7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBbXG4gICAgICAgICdIZWxsbyB3ZWJwYWNrIScsXG4gICAgICAgICc1IGN1YmVkIGlzIGVxdWFsIHRvICcgKyBjdWJlKDUpXG4gICAgXS5qb2luKCdcXG5cXG4nKTtcblxuICAgIC8vIEFkZCB0aGUgaW1hZ2UgdG8gb3VyIGV4aXN0aW5nIGRpdi5cbiAgICBjb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBteUljb24uc3JjID0gSWNvbjtcblxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobXlJY29uKTtcblxuICAgIGJ0bi5pbm5lckhUTUwgPSAnQ2xpY2sgbWUgYW5kIGNoZWNrIHRoZSBjb25zb2xlISc7XG4gICAgYnRuLm9uY2xpY2sgPSBwcmludE1lO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5sZXQgZWxlbWVudCA9IGNvbXBvbmVudCgpOyAvLyBTdG9yZSB0aGUgZWxlbWVudCB0byByZS1yZW5kZXIgb24gcHJpbnQuanMgY2hhbmdlc1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9wcmludC5qcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0FjY2VwdGluZyB0aGUgdXBkYXRlZCBwcmludE1lIG1vZHVsZSEnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgZWxlbWVudCA9IGNvbXBvbmVudCgpOyAvLyBSZS1yZW5kZXIgdGhlIFwiY29tcG9uZW50XCIgdG8gdXBkYXRlIHRoZSBjbGljayBoYW5kbGVyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSlcbn0iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzZmMjBjNTViNGFhNTY0ZWE4ODMxNzM1OTg5NjNiOTUudHRmXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==