"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const supertest_1 = __importDefault(require("supertest"));
const utils_1 = require("../../utils");
const axios_1 = __importDefault(require("axios"));
const middleware_1 = __importDefault(require("../../middleware"));
const errorHandlers_1 = __importDefault(require("../../middleware/errorHandlers"));
const routes_1 = __importDefault(require("../../services/search/routes"));
jest.mock("axios");
const mockedAxios = axios_1.default;
mockedAxios.get.mockResolvedValue({ data: { features: [] } });
describe("routes", () => {
    let router;
    beforeEach(() => {
        router = express_1.default();
        utils_1.applyMiddleware(middleware_1.default, router);
        utils_1.applyRoutes(routes_1.default, router);
        utils_1.applyMiddleware(errorHandlers_1.default, router);
    });
    test("a valid string query", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(router).get("/api/v1/search?q=Cham");
        expect(response.status).toEqual(200);
    }));
    test("a non-existing api method", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(router).get("/api/v11/search");
        expect(response.status).toEqual(404);
    }));
    test("an empty string", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield supertest_1.default(router).get("/api/v1/search?q=");
        expect(response.status).toEqual(400);
    }));
});
//# sourceMappingURL=routes.test.js.map