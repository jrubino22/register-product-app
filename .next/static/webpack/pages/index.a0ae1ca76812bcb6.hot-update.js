"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var C_Users_jrubino_Desktop_code_product_registration_warranty_registration_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_jrubino_Desktop_code_product_registration_warranty_registration_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_jrubino_Desktop_code_product_registration_warranty_registration_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\nvar Index = function(param1) {\n    var warranties = param1.warranties;\n    var _this1 = _this;\n    var warrantyButton = function() {\n        var _ref = _asyncToGenerator(C_Users_jrubino_Desktop_code_product_registration_warranty_registration_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_id) {\n            var requestOptions, response;\n            return C_Users_jrubino_Desktop_code_product_registration_warranty_registration_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        requestOptions = {\n                            method: \"PUT\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            }\n                        };\n                        _ctx.next = 3;\n                        return fetch(\"https://de7e-2603-8080-6f00-aa5c-cd66-faa1-26db-f446.ngrok.io/warranty/\".concat(_id), requestOptions);\n                    case 3:\n                        response = _ctx.sent;\n                        _ctx.next = 6;\n                        return response.json();\n                    case 6:\n                        location.reload();\n                        return _ctx.abrupt(\"return\", false);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function warrantyButton(_id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return warranties.map(function(param) {\n        var _id = param._id, customerEmail = param.customerEmail, product = param.product, purchaseLocation = param.purchaseLocation, warrantyStatus = param.warrantyStatus;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        children: [\n                            \"Warranty Id: \",\n                            _id.slice(_id.length - 6),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jrubino\\\\Desktop\\\\code\\\\product-registration\\\\warranty-registration-app\\\\pages\\\\index.js\",\n                        lineNumber: 21,\n                        columnNumber: 22\n                    }, _this1),\n                    \"|\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        children: [\n                            \" Customer Email: \",\n                            customerEmail,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jrubino\\\\Desktop\\\\code\\\\product-registration\\\\warranty-registration-app\\\\pages\\\\index.js\",\n                        lineNumber: 21,\n                        columnNumber: 77\n                    }, _this1),\n                    \"|\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        children: [\n                            \" Product: \",\n                            product,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jrubino\\\\Desktop\\\\code\\\\product-registration\\\\warranty-registration-app\\\\pages\\\\index.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, _this1),\n                    \" |\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        children: [\n                            \" Purchase Location: \",\n                            purchaseLocation,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\jrubino\\\\Desktop\\\\code\\\\product-registration\\\\warranty-registration-app\\\\pages\\\\index.js\",\n                        lineNumber: 22,\n                        columnNumber: 46\n                    }, _this1),\n                    \"|\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        children: [\n                            \" Warranty Status: \",\n                            warrantyStatus,\n                            \" \"\n                        ]\n                    }, _id, true, {\n                        fileName: \"C:\\\\Users\\\\jrubino\\\\Desktop\\\\code\\\\product-registration\\\\warranty-registration-app\\\\pages\\\\index.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return warrantyButton(_id);\n                        },\n                        children: \"Warranty Claimed\"\n                    }, _id, false, {\n                        fileName: \"C:\\\\Users\\\\jrubino\\\\Desktop\\\\code\\\\product-registration\\\\warranty-registration-app\\\\pages\\\\index.js\",\n                        lineNumber: 23,\n                        columnNumber: 69\n                    }, _this1)\n                ]\n            }, _id, true, {\n                fileName: \"C:\\\\Users\\\\jrubino\\\\Desktop\\\\code\\\\product-registration\\\\warranty-registration-app\\\\pages\\\\index.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jrubino\\\\Desktop\\\\code\\\\product-registration\\\\warranty-registration-app\\\\pages\\\\index.js\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, _this1);\n    });\n};\n_c = Index;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLEtBQUssR0FBRyxpQkFBa0I7UUFBaEJDLFVBQVUsVUFBVkEsVUFBVTs7SUFFdEIsSUFBTUMsY0FBYzttQkFBRywwTkFBT0MsR0FBRyxFQUFLO2dCQUU1QkMsY0FBYyxFQUlkQyxRQUFROzs7O3dCQUpSRCxjQUFjLEdBQUc7NEJBQ25CRSxNQUFNLEVBQUUsS0FBSzs0QkFDYkMsT0FBTyxFQUFFO2dDQUFFLGNBQWMsRUFBRSxrQkFBa0I7NkJBQUU7eUJBQ2xELENBQUM7OytCQUNxQkMsS0FBSyxDQUFDLHlFQUF3RSxDQUFNLE9BQUpMLEdBQUcsQ0FBRSxFQUFFQyxjQUFjLENBQUM7O3dCQUF2SEMsUUFBUSxZQUErRzs7K0JBQ3ZIQSxRQUFRLENBQUNJLElBQUksRUFBRTs7d0JBQ3JCQyxRQUFRLENBQUNDLE1BQU0sRUFBRTtxREFDVixLQUFLOzs7Ozs7U0FDZjt3QkFWS1QsY0FBYyxDQUFVQyxHQUFHOzs7T0FVaEM7SUFHRCxPQUNERixVQUFVLENBQUNXLEdBQUcsQ0FBQztZQUFFVCxHQUFHLFNBQUhBLEdBQUcsRUFBRVUsYUFBYSxTQUFiQSxhQUFhLEVBQUVDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxnQkFBZ0IsU0FBaEJBLGdCQUFnQixFQUFFQyxjQUFjLFNBQWRBLGNBQWM7NkJBQ3pFLDhEQUFDQyxNQUFJO3NCQUNMLDRFQUFDQyxHQUFDOztrQ0FBVyw4REFBQ0QsTUFBSTs7NEJBQUMsZUFBYTs0QkFBQ2QsR0FBRyxDQUFDZ0IsS0FBSyxDQUFDaEIsR0FBRyxDQUFDaUIsTUFBTSxHQUFHLENBQUMsQ0FBQzs0QkFBQyxHQUFDOzs7Ozs7OEJBQU87b0JBQUEsR0FBQztrQ0FBQSw4REFBQ0gsTUFBSTs7NEJBQUMsbUJBQWlCOzRCQUFDSixhQUFhOzRCQUFDLEdBQUM7Ozs7Ozs4QkFBTztvQkFBQSxHQUNoSDtrQ0FBQSw4REFBQ0ksTUFBSTs7NEJBQUMsWUFBVTs0QkFBQ0gsT0FBTzs0QkFBQyxHQUFDOzs7Ozs7OEJBQU87b0JBQUEsSUFBRTtrQ0FBQSw4REFBQ0csTUFBSTs7NEJBQUMsc0JBQW9COzRCQUFDRixnQkFBZ0I7NEJBQUMsR0FBQzs7Ozs7OzhCQUFPO29CQUFBLEdBQ3ZGO2tDQUFBLDhEQUFDRSxNQUFJOzs0QkFBVyxvQkFBa0I7NEJBQUNELGNBQWM7NEJBQUMsR0FBQzs7dUJBQXhDYixHQUFHOzs7OzhCQUE0QztrQ0FBQSw4REFBQ2tCLFFBQU07d0JBQUNDLE9BQU8sRUFBRTttQ0FBTXBCLGNBQWMsQ0FBQ0MsR0FBRyxDQUFDO3lCQUFBO2tDQUFZLGtCQUFnQjt1QkFBckJBLEdBQUc7Ozs7OEJBQTJCOztlQUZuSUEsR0FBRzs7OztzQkFFb0k7Ozs7O2tCQUN4STtLQUNWLENBQUMsQ0FBQztDQUNOO0FBdkJLSCxLQUFBQSxLQUFLOztBQXFDWCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgSW5kZXggPSAoe3dhcnJhbnRpZXN9KSA9PiB7XHJcblxyXG4gICAgY29uc3Qgd2FycmFudHlCdXR0b24gPSBhc3luYyAoX2lkKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZGU3ZS0yNjAzLTgwODAtNmYwMC1hYTVjLWNkNjYtZmFhMS0yNmRiLWY0NDYubmdyb2suaW8vd2FycmFudHkvJHtfaWR9YCwgcmVxdWVzdE9wdGlvbnMpO1xyXG4gICAgICAgIGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgICAgXHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICB3YXJyYW50aWVzLm1hcCgoe19pZCwgY3VzdG9tZXJFbWFpbCwgcHJvZHVjdCwgcHVyY2hhc2VMb2NhdGlvbiwgd2FycmFudHlTdGF0dXN9KSA9PiAoXHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgPHAga2V5PXtfaWR9PjxzcGFuPldhcnJhbnR5IElkOiB7X2lkLnNsaWNlKF9pZC5sZW5ndGggLSA2KX0gPC9zcGFuPnw8c3Bhbj4gQ3VzdG9tZXIgRW1haWw6IHtjdXN0b21lckVtYWlsfSA8L3NwYW4+XHJcbiAgICAgICAgIHw8c3Bhbj4gUHJvZHVjdDoge3Byb2R1Y3R9IDwvc3Bhbj4gfDxzcGFuPiBQdXJjaGFzZSBMb2NhdGlvbjoge3B1cmNoYXNlTG9jYXRpb259IDwvc3Bhbj5cclxuICAgICAgICAgfDxzcGFuIGtleT17X2lkfT4gV2FycmFudHkgU3RhdHVzOiB7d2FycmFudHlTdGF0dXN9IDwvc3Bhbj48YnV0dG9uIG9uQ2xpY2s9eygpID0+IHdhcnJhbnR5QnV0dG9uKF9pZCl9IGtleT17X2lkfT5XYXJyYW50eSBDbGFpbWVkPC9idXR0b24+PC9wPiBcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICApKSlcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpe1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9kZTdlLTI2MDMtODA4MC02ZjAwLWFhNWMtY2Q2Ni1mYWExLTI2ZGItZjQ0Ni5uZ3Jvay5pby8nICsgJ3dhcnJhbnRpZXMnKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgd2FycmFudGllczogZGF0YVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sIm5hbWVzIjpbIkluZGV4Iiwid2FycmFudGllcyIsIndhcnJhbnR5QnV0dG9uIiwiX2lkIiwicmVxdWVzdE9wdGlvbnMiLCJyZXNwb25zZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJmZXRjaCIsImpzb24iLCJsb2NhdGlvbiIsInJlbG9hZCIsIm1hcCIsImN1c3RvbWVyRW1haWwiLCJwcm9kdWN0IiwicHVyY2hhc2VMb2NhdGlvbiIsIndhcnJhbnR5U3RhdHVzIiwic3BhbiIsInAiLCJzbGljZSIsImxlbmd0aCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});