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
const axios_1 = __importDefault(require("axios"));
const OpenCageDataProvider_1 = require("./OpenCageDataProvider");
jest.mock("axios");
const mockedAxios = axios_1.default;
describe("OpenCageDataProvider", () => {
    test("an empty query string", () => __awaiter(void 0, void 0, void 0, function* () {
        mockedAxios.get.mockResolvedValue({ data: { features: [] } });
        const result = yield OpenCageDataProvider_1.getPlaces("Paris");
        expect(result).toEqual({ features: [] });
    }));
    test("an invalid non-json response", () => __awaiter(void 0, void 0, void 0, function* () {
        mockedAxios.get.mockRejectedValue(new Error("Service Unavailable."));
        yield expect(OpenCageDataProvider_1.getPlaces("Chamonix")).rejects.toThrow("Service Unavailable.");
    }));
});
//# sourceMappingURL=OpenCageDataProvider.test.js.map