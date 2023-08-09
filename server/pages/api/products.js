"use strict";
(() => {
var exports = {};
exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 31:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "mongoose"
const external_mongoose_namespaceObject = require("mongoose");
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/products.js

// Connect to MongoDB
external_mongoose_default().connect("mongodb://localhost:27017/imageDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (err) {
            res.status(500).json({
                error: "Server error"
            });
        }
    } else if (req.method === "POST") {
        // Handle the search request
        const keyword = req.body.keyword;
        try {
            const products = await Product.find({
                keywords: keyword
            });
            res.status(200).json(products);
        } catch (err) {
            res.status(500).json({
                error: "Server error"
            });
        }
    } else {
        res.status(405).json({
            error: "Method not allowed"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(31));
module.exports = __webpack_exports__;

})();