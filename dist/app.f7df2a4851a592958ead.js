(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "IKTr":
/*!***********************************!*\
  !*** ./src/Quicksand-Regular.ttf ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cffc279022b0d87c571dff78071828f9.ttf");

/***/ }),

/***/ "J6RI":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! exports provided: default */
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
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Quicksand_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Quicksand_Bold_ttf__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_image_jpg__WEBPACK_IMPORTED_MODULE_4__["default"]);
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

/***/ "XBHt":
/*!***********************!*\
  !*** ./src/image.jpg ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2a343e55e5c320e6c63574a23b20c178.jpg");

/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "OMi8");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _image_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image.jpg */ "XBHt");



// import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // Lodash, now imported by this script
    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = _image_jpg__WEBPACK_IMPORTED_MODULE_2__["default"];

    element.appendChild(myIcon);

    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;
    // element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

/***/ }),

/***/ "yyL1":
/*!********************************!*\
  !*** ./src/Quicksand-Bold.ttf ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "76f20c55b4aa564ea883173598963b95.ttf");

/***/ })

},[["tjUo","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUXVpY2tzYW5kLVJlZ3VsYXIudHRmIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9RdWlja3NhbmQtQm9sZC50dGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3lGO0FBQ087QUFDNUI7QUFDSDtBQUNUO0FBQ3hELDhCQUE4QixtRkFBMkI7QUFDekQseUNBQXlDLHNGQUErQixDQUFDLDhEQUE2QjtBQUN0Ryx5Q0FBeUMsc0ZBQStCLENBQUMsMkRBQTZCO0FBQ3RHLHlDQUF5QyxzRkFBK0IsQ0FBQyxrREFBNkI7QUFDdEc7QUFDQSw4QkFBOEIsUUFBUyxnQkFBZ0IsK0JBQStCLCtKQUErSix5QkFBeUIsMkJBQTJCLE9BQU8sWUFBWSxpQkFBaUIsNEJBQTRCLGtFQUFrRSxLQUFLLFNBQVMsZ0VBQWdFLFlBQVksTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsMERBQTBELCtCQUErQiwwSEFBMEgseUJBQXlCLDJCQUEyQixPQUFPLFlBQVksaUJBQWlCLDRCQUE0QixxQ0FBcUMsS0FBSyxLQUFLO0FBQ2o5QjtBQUNlLHNGQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNidkMsVUFBVSxtQkFBTyxDQUFDLG1GQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxpRUFBc0Q7O0FBRXhGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUI7QUFDRjtBQUNVO0FBQy9COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qiw2Q0FBQztBQUN6Qjs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLGtEQUFJOztBQUVyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1Qzs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQWUsb0ZBQXVCLHlDQUF5QyxFIiwiZmlsZSI6ImFwcC5mN2RmMmE0ODUxYTU5Mjk1OGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjZmZjMjc5MDIyYjBkODdjNTcxZGZmNzgwNzE4MjhmOS50dGZcIjsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuL1F1aWNrc2FuZC1SZWd1bGFyLnR0ZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIGZyb20gXCIuL1F1aWNrc2FuZC1Cb2xkLnR0ZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fIGZyb20gXCIuL2ltYWdlLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiIEBmb250LWZhY2Uge1xcbiAgICAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgICAgIHNyYzogIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIH1cXG5cXG4uaGVsbG8ge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wic3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJDQUFDO09BQ00scUJBQXFCO09BQ3JCO2tFQUMrQztNQUNoRCxnQkFBZ0I7TUFDaEIsa0JBQWtCO0lBQ3BCOztBQUVKO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixtREFBOEI7RUFDaENcIixcImZpbGVcIjpcInN0eWxlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIgQGZvbnQtZmFjZSB7XFxuICAgICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgICAgc3JjOiAgdXJsKCcuL1F1aWNrc2FuZC1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgICAgIHVybCgnLi9RdWlja3NhbmQtQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIH1cXG5cXG4uaGVsbG8ge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pbWFnZS5qcGcnKTtcXG4gIH1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyYTM0M2U1NWU1YzMyMGU2YzYzNTc0YTIzYjIwYzE3OC5qcGdcIjsiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL2ltYWdlLmpwZyc7XG4vLyBpbXBvcnQgcHJpbnRNZSBmcm9tICcuL3ByaW50LmpzJztcblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIC8vIExvZGFzaCwgbm93IGltcG9ydGVkIGJ5IHRoaXMgc2NyaXB0XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsICd3ZWJwYWNrJ10sICcgJyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWxsbycpO1xuXG4gICAgLy8gQWRkIHRoZSBpbWFnZSB0byBvdXIgZXhpc3RpbmcgZGl2LlxuICAgIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIG15SWNvbi5zcmMgPSBJY29uO1xuXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChteUljb24pO1xuXG4gICAgLy8gYnRuLmlubmVySFRNTCA9ICdDbGljayBtZSBhbmQgY2hlY2sgdGhlIGNvbnNvbGUhJztcbiAgICAvLyBidG4ub25jbGljayA9IHByaW50TWU7XG4gICAgLy8gZWxlbWVudC5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3NmYyMGM1NWI0YWE1NjRlYTg4MzE3MzU5ODk2M2I5NS50dGZcIjsiXSwic291cmNlUm9vdCI6IiJ9