"use strict";
//! A common.ts file contains the middleware like cors, compression and, the setup for body parsing.
//! Later we will add middleware for logging, security, caching and more.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCompression = exports.handleBodyRequestParsing = exports.handleCors = void 0;
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const handleCors = (router) => router.use(cors_1.default({ credentials: true, origin: true }));
exports.handleCors = handleCors;
const handleBodyRequestParsing = (router) => {
    router.use(body_parser_1.default.urlencoded({ extended: true }));
    router.use(body_parser_1.default.json());
};
exports.handleBodyRequestParsing = handleBodyRequestParsing;
const handleCompression = (router) => {
    router.use(compression_1.default());
};
exports.handleCompression = handleCompression;
//# sourceMappingURL=common.js.map