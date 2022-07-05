"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
;// CONCATENATED MODULE: ./pages/index.js

const Index = ({ warranties  })=>{
    const warrantyButton = async (_id)=>{
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }
        };
        const response = await fetch(`https://v-syndicate-warranty-app.herokuapp.com/warranty/${_id}`, requestOptions);
        await response.json();
        location.reload();
        return false;
    };
    return warranties.map(({ _id , customerEmail , product , purchaseLocation , warrantyStatus  })=>/*#__PURE__*/ jsx_runtime_namespaceObject.jsx("span", {
            children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("p", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("span", {
                        children: [
                            "Warranty Id: ",
                            _id.slice(_id.length - 6),
                            " "
                        ]
                    }),
                    "|",
                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("span", {
                        children: [
                            " Customer Email: ",
                            customerEmail,
                            " "
                        ]
                    }),
                    "|",
                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("span", {
                        children: [
                            " Product: ",
                            product,
                            " "
                        ]
                    }),
                    " |",
                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("span", {
                        children: [
                            " Purchase Location: ",
                            purchaseLocation,
                            " "
                        ]
                    }),
                    "|",
                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("span", {
                        children: [
                            " Warranty Status: ",
                            warrantyStatus,
                            " "
                        ]
                    }, _id),
                    warrantyStatus === "active" && /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("button", {
                        id: "wb",
                        onClick: ()=>warrantyButton(_id)
                        ,
                        children: "Warranty Claimed"
                    }, _id)
                ]
            }, _id)
        })
    );
};
async function getServerSideProps() {
    const response = await fetch(`https://v-syndicate-warranty-app.herokuapp.com/warranties`);
    const data = await response.json();
    return {
        props: {
            warranties: data
        }
    };
}
/* harmony default export */ const pages = (Index);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(573));
module.exports = __webpack_exports__;

})();