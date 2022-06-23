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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Index = ({ warranties  })=>warranties.map(({ _id , customerEmail , product , purchaseLocation , claims  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Warranty Id: \",\n                        _id.slice(_id.length - 6),\n                        \" | Customer Email: \",\n                        customerEmail,\n                        \"| Product: \",\n                        product,\n                        \" | Purchase Location: \",\n                        purchaseLocation,\n                        \" | Claims: \",\n                        claims,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: addClaim(),\n                            children: \"Add Claim\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jrubino\\\\Desktop\\\\code\\\\product-registration\\\\warranty-registration-app\\\\pages\\\\index.js\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, _id, true, {\n                    fileName: \"C:\\\\Users\\\\jrubino\\\\Desktop\\\\code\\\\product-registration\\\\warranty-registration-app\\\\pages\\\\index.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jrubino\\\\Desktop\\\\code\\\\product-registration\\\\warranty-registration-app\\\\pages\\\\index.js\",\n                lineNumber: 8,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false)\n    )\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\nasync function getServerSideProps() {\n    const response = await fetch(\"https://8111-2603-8080-6f00-aa5c-dd1b-88f2-def4-9733.ngrok.io/\" + \"warranties\");\n    const data = await response.json();\n    return {\n        props: {\n            warranties: data\n        }\n    };\n}\nfunction addClaim(props) {\n    props.warranties._id.claims + 1;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7QUFBQSxNQUFNQSxLQUFLLEdBQUcsQ0FBQyxFQUFDQyxVQUFVLEdBQUMsR0FJeEJBLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLENBQUMsRUFBQ0MsR0FBRyxHQUFFQyxhQUFhLEdBQUVDLE9BQU8sR0FBRUMsZ0JBQWdCLEdBQUVDLE1BQU0sR0FBQyxpQkFDbEU7c0JBQUUsNEVBQUNDLE1BQUk7MEJBQ1AsNEVBQUNDLEdBQUM7O3dCQUFXLGVBQWE7d0JBQUNOLEdBQUcsQ0FBQ08sS0FBSyxDQUFDUCxHQUFHLENBQUNRLE1BQU0sR0FBRyxDQUFDLENBQUM7d0JBQUMscUJBQW1CO3dCQUFDUCxhQUFhO3dCQUFDLGFBQzNFO3dCQUFDQyxPQUFPO3dCQUFDLHdCQUFzQjt3QkFBQ0MsZ0JBQWdCO3dCQUFDLGFBQVc7d0JBQUNDLE1BQU07c0NBQzdFLDhEQUFDSyxRQUFNOzRCQUFDQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtzQ0FBRSxXQUFTOzs7OztxQ0FBUzs7bUJBRnpDWCxHQUFHOzs7OzZCQUUwQzs7Ozs7eUJBQzlDO3lCQUFHO0lBQ2IsQ0FBQztBQUNMO0FBRUQsaUVBQWVILEtBQUs7QUFFYixlQUFlZSxrQkFBa0IsR0FBRTtJQUN0QyxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLGdFQUFnRSxHQUFHLFlBQVksQ0FBQztJQUM3RyxNQUFNQyxJQUFJLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFJLEVBQUU7SUFFbEMsT0FBTztRQUNIQyxLQUFLLEVBQUU7WUFDSG5CLFVBQVUsRUFBRWlCLElBQUk7U0FDbkI7S0FDSjtDQUNKO0FBRUQsU0FBU0osUUFBUSxDQUFDTSxLQUFLLEVBQUU7SUFDckJBLEtBQUssQ0FBQ25CLFVBQVUsQ0FBQ0UsR0FBRyxDQUFDSSxNQUFNLEdBQUcsQ0FBQztDQUNsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dhcnJhbnR5LXJlZ2lzdHJhdGlvbi1hcHAvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgSW5kZXggPSAoe3dhcnJhbnRpZXN9KSA9PiAoXHJcblxyXG4gIFxyXG4gICAgXHJcbiAgIHdhcnJhbnRpZXMubWFwKCh7X2lkLCBjdXN0b21lckVtYWlsLCBwcm9kdWN0LCBwdXJjaGFzZUxvY2F0aW9uLCBjbGFpbXN9KSA9PiAoXHJcbiAgICAgICAgPD48c3Bhbj5cclxuICAgICAgICA8cCBrZXk9e19pZH0+V2FycmFudHkgSWQ6IHtfaWQuc2xpY2UoX2lkLmxlbmd0aCAtIDYpfSB8IEN1c3RvbWVyIEVtYWlsOiB7Y3VzdG9tZXJFbWFpbH1cclxuICAgICAgICAgfCBQcm9kdWN0OiB7cHJvZHVjdH0gfCBQdXJjaGFzZSBMb2NhdGlvbjoge3B1cmNoYXNlTG9jYXRpb259IHwgQ2xhaW1zOiB7Y2xhaW1zfSBcclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWRkQ2xhaW0oKX0+QWRkIENsYWltPC9idXR0b24+PC9wPiBcclxuICAgICAgICA8L3NwYW4+PC8+XHJcbiAgICApKVxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpe1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly84MTExLTI2MDMtODA4MC02ZjAwLWFhNWMtZGQxYi04OGYyLWRlZjQtOTczMy5uZ3Jvay5pby8nICsgJ3dhcnJhbnRpZXMnKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgd2FycmFudGllczogZGF0YVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ2xhaW0ocHJvcHMpIHtcclxuICAgIHByb3BzLndhcnJhbnRpZXMuX2lkLmNsYWltcyArIDFcclxufSJdLCJuYW1lcyI6WyJJbmRleCIsIndhcnJhbnRpZXMiLCJtYXAiLCJfaWQiLCJjdXN0b21lckVtYWlsIiwicHJvZHVjdCIsInB1cmNoYXNlTG9jYXRpb24iLCJjbGFpbXMiLCJzcGFuIiwicCIsInNsaWNlIiwibGVuZ3RoIiwiYnV0dG9uIiwib25DbGljayIsImFkZENsYWltIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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