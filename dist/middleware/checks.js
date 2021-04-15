"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSearchParams = void 0;
const httpErrors_1 = require("../utils/httpErrors");
const checkSearchParams = (req, res, next) => {
    if (!req.query.q) {
        throw new httpErrors_1.HTTP400Error("Missing q parameter");
    }
    else {
        next();
    }
};
exports.checkSearchParams = checkSearchParams;
//# sourceMappingURL=checks.js.map