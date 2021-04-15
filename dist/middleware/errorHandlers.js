"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorHandler = __importStar(require("../utils/ErrorHandler"));
// handle404Error the way you handle 404 in express.
// By adding a fallback middleware if nothing else was found.
// We don’t handle 404 error in its middleware — we directly propagate it further
// for a dedicated client errors handler.
const handle404Error = (router) => {
    router.use((req, res) => {
        ErrorHandler.notFoundError();
    });
};
// handleClientErrors catches client API errors like Bad request or Unauthorized.
// Next in the chain — handleClientErrors. We’re interested only in 4xx HTTP errors and
// if it’s not a case we propagate it down the chain.
const handleClientError = (router) => {
    router.use((err, req, res, next) => {
        ErrorHandler.clientError(err, res, next);
    });
};
// handleServerErrors a place where we handle “Internal Server Error”.
// Finally handleServerErrors — our last resort for handling errors, we must handle it here,
// or uncaughtException handler will be called, and this node process will be finished.
const handleServerError = (router) => {
    router.use((err, req, res, next) => {
        ErrorHandler.serverError(err, res, next);
    });
};
exports.default = [handle404Error, handleClientError, handleServerError];
//# sourceMappingURL=errorHandlers.js.map