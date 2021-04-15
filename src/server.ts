import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import routes from "./services";

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

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);
// Error handlers are quite a specific type of middleware .
// Usually, we inject middleware before handling user routes.
// But for error handling — after, when something bad has happened in our controller.
// Or if threw an exception and wanted to catch it by our error handlers middleware.
applyMiddleware(errorHandlers, router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);
