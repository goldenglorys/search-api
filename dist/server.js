"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const utils_1 = require("./utils");
const middleware_1 = __importDefault(require("./middleware"));
const errorHandlers_1 = __importDefault(require("./middleware/errorHandlers"));
const services_1 = __importDefault(require("./services"));
// Handling both uncaughtException and unhandledRejection is super important.
// If you face with any of these is pretty much game over for this node instance - now your app is in an undefined state.
// The best thing is to kill this instance and spawn a new one.
// Tools like forever or pm2 can do it for us.
process.on("uncaughtException", (e) => {
    console.log(e);
    process.exit(1);
});
process.on("unhandledRejection", (e) => {
    console.log(e);
    process.exit(1);
});
const router = express_1.default();
utils_1.applyMiddleware(middleware_1.default, router);
utils_1.applyRoutes(services_1.default, router);
// Error handlers are quite a specific type of middleware .
// Usually, we inject middleware before handling user routes.
// But for error handling — after, when something bad has happened in our controller.
// Or if threw an exception and wanted to catch it by our error handlers middleware.
utils_1.applyMiddleware(errorHandlers_1.default, router);
const { PORT = 3000 } = process.env;
const server = http_1.default.createServer(router);
server.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}...`));
//# sourceMappingURL=server.js.map