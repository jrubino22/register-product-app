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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Index = ({ warranties  })=>warranties.map(({ warrantyId , customerEmail , product , purchaseLocation  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Warranty Id: \",\n                    warrantyId,\n                    \" | Customer Email: \",\n                    customerEmail,\n                    \" | Product: \",\n                    product,\n                    \" | Purchase Location: \",\n                    purchaseLocation\n                ]\n            }, warrantyId, true, {\n                fileName: \"C:\\\\Users\\\\jrubino\\\\Desktop\\\\code\\\\product-registration\\\\warranty-registration-app\\\\pages\\\\index.js\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false)\n    )\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\nasync function getServerSideProps() {\n    const response = await fetch(\"http://localhost:3000/\" + \"warranties\");\n    const data = await response.json();\n    return {\n        props: {\n            warranties: data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFBQSxNQUFNQSxLQUFLLEdBQUcsQ0FBQyxFQUFDQyxVQUFVLEdBQUMsR0FFeEJBLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLENBQUMsRUFBQ0MsVUFBVSxHQUFFQyxhQUFhLEdBQUVDLE9BQU8sR0FBRUMsZ0JBQWdCLEdBQUMsaUJBQ2pFO3NCQUNBLDRFQUFDQyxHQUFDOztvQkFBa0IsZUFBYTtvQkFBQ0osVUFBVTtvQkFBQyxxQkFBbUI7b0JBQUNDLGFBQWE7b0JBQUMsY0FBWTtvQkFBQ0MsT0FBTztvQkFBQyx3QkFBc0I7b0JBQUNDLGdCQUFnQjs7ZUFBbklILFVBQVU7Ozs7eUJBQThIO3lCQUk3STtJQUNOLENBQUM7QUFDTDtBQUVELGlFQUFlSCxLQUFLO0FBRWIsZUFBZVEsa0JBQWtCLEdBQUU7SUFDdEMsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyx3QkFBd0IsR0FBRyxZQUFZLENBQUM7SUFDckUsTUFBTUMsSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBSSxFQUFFO0lBRWxDLE9BQU87UUFDSEMsS0FBSyxFQUFFO1lBQ0haLFVBQVUsRUFBRVUsSUFBSTtTQUNuQjtLQUNKO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXJyYW50eS1yZWdpc3RyYXRpb24tYXBwLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgSW5kZXggPSAoe3dhcnJhbnRpZXN9KSA9PiAoXHJcbiAgICBcclxuICAgd2FycmFudGllcy5tYXAoKHt3YXJyYW50eUlkLCBjdXN0b21lckVtYWlsLCBwcm9kdWN0LCBwdXJjaGFzZUxvY2F0aW9ufSkgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPHAga2V5PXt3YXJyYW50eUlkfT5XYXJyYW50eSBJZDoge3dhcnJhbnR5SWR9IHwgQ3VzdG9tZXIgRW1haWw6IHtjdXN0b21lckVtYWlsfSB8IFByb2R1Y3Q6IHtwcm9kdWN0fSB8IFB1cmNoYXNlIExvY2F0aW9uOiB7cHVyY2hhc2VMb2NhdGlvbn08L3A+XHJcbiAgICAgICAgey8qIDxwIGtleT17Y3VzdG9tZXJFbWFpbH0+Q3VzdG9tZXIgRW1haWw6IHtjdXN0b21lckVtYWlsfTwvcD5cclxuICAgICAgICA8cCBrZXk9e3Byb2R1Y3R9PlByb2R1Y3Q6IHtwcm9kdWN0fTwvcD5cclxuICAgICAgICA8cCBrZXk9e3B1cmNoYXNlTG9jYXRpb259PlB1cmNoYXNlIExvY2F0aW9uOiB7cHVyY2hhc2VMb2NhdGlvbn08L3A+PGhyLz4gKi99XHJcbiAgICAgICAgPC8+XHJcbiAgICApKVxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpe1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwLycgKyAnd2FycmFudGllcycpXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB3YXJyYW50aWVzOiBkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIkluZGV4Iiwid2FycmFudGllcyIsIm1hcCIsIndhcnJhbnR5SWQiLCJjdXN0b21lckVtYWlsIiwicHJvZHVjdCIsInB1cmNoYXNlTG9jYXRpb24iLCJwIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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