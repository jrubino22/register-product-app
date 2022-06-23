"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Index = ({ warranties  })=>warranties.map(({ _id , customerEmail , product , purchaseLocation , claims  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Warranty Id: \",\n                    _id.slice(_id.length - 6),\n                    \" | Customer Email: \",\n                    customerEmail,\n                    \" | Product: \",\n                    product,\n                    \" | Purchase Location: \",\n                    purchaseLocation,\n                    \" | Claims: \",\n                    claims\n                ]\n            }, _id, true, {\n                fileName: \"C:\\\\Users\\\\jrubino\\\\Desktop\\\\code\\\\product-registration\\\\warranty-registration-app\\\\pages\\\\index.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false)\n    )\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\nasync function getServerSideProps() {\n    const response = await fetch(\"https://8111-2603-8080-6f00-aa5c-dd1b-88f2-def4-9733.ngrok.io/\" + \"warranties\");\n    const data = await response.json();\n    return {\n        props: {\n            warranties: data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7QUFBQSxNQUFNQSxLQUFLLEdBQUcsQ0FBQyxFQUFDQyxVQUFVLEdBQUMsR0FFeEJBLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLENBQUMsRUFBQ0MsR0FBRyxHQUFFQyxhQUFhLEdBQUVDLE9BQU8sR0FBRUMsZ0JBQWdCLEdBQUVDLE1BQU0sR0FBQyxpQkFDbEU7c0JBQ0EsNEVBQUNDLEdBQUM7O29CQUFXLGVBQWE7b0JBQUNMLEdBQUcsQ0FBQ00sS0FBSyxDQUFDTixHQUFHLENBQUNPLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQUMscUJBQW1CO29CQUFDTixhQUFhO29CQUFDLGNBQVk7b0JBQUNDLE9BQU87b0JBQUMsd0JBQXNCO29CQUFDQyxnQkFBZ0I7b0JBQUMsYUFBVztvQkFBQ0MsTUFBTTs7ZUFBOUpKLEdBQUc7Ozs7eUJBQWdLO3lCQUN4SztJQUNOLENBQUM7QUFDTDtBQUVELGlFQUFlSCxLQUFLO0FBRWIsZUFBZVcsa0JBQWtCLEdBQUU7SUFDdEMsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxnRUFBZ0UsR0FBRyxZQUFZLENBQUM7SUFDN0csTUFBTUMsSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBSSxFQUFFO0lBRWxDLE9BQU87UUFDSEMsS0FBSyxFQUFFO1lBQ0hmLFVBQVUsRUFBRWEsSUFBSTtTQUNuQjtLQUNKO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXJyYW50eS1yZWdpc3RyYXRpb24tYXBwLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IEluZGV4ID0gKHt3YXJyYW50aWVzfSkgPT4gKFxyXG4gICAgXHJcbiAgIHdhcnJhbnRpZXMubWFwKCh7X2lkLCBjdXN0b21lckVtYWlsLCBwcm9kdWN0LCBwdXJjaGFzZUxvY2F0aW9uLCBjbGFpbXN9KSA9PiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8cCBrZXk9e19pZH0+V2FycmFudHkgSWQ6IHtfaWQuc2xpY2UoX2lkLmxlbmd0aCAtIDYpfSB8IEN1c3RvbWVyIEVtYWlsOiB7Y3VzdG9tZXJFbWFpbH0gfCBQcm9kdWN0OiB7cHJvZHVjdH0gfCBQdXJjaGFzZSBMb2NhdGlvbjoge3B1cmNoYXNlTG9jYXRpb259IHwgQ2xhaW1zOiB7Y2xhaW1zfTwvcD5cclxuICAgICAgICA8Lz5cclxuICAgICkpXHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCl7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovLzgxMTEtMjYwMy04MDgwLTZmMDAtYWE1Yy1kZDFiLTg4ZjItZGVmNC05NzMzLm5ncm9rLmlvLycgKyAnd2FycmFudGllcycpXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB3YXJyYW50aWVzOiBkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIkluZGV4Iiwid2FycmFudGllcyIsIm1hcCIsIl9pZCIsImN1c3RvbWVyRW1haWwiLCJwcm9kdWN0IiwicHVyY2hhc2VMb2NhdGlvbiIsImNsYWltcyIsInAiLCJzbGljZSIsImxlbmd0aCIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();