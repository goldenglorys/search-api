"use strict";
//! To apply our middleware, we will create a function which grabs this list of middleware and applies it on a router.
//! The applyMiddleware helper accepts the list of middleware wrappers we define in ./middleware/index.ts and
//! express.Router.Now everything is ready for using it in server.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyRoutes = exports.applyMiddleware = void 0;
const applyMiddleware = (middlewareWrappers, router) => {
    for (const wrapper of middlewareWrappers) {
        wrapper(router);
    }
};
exports.applyMiddleware = applyMiddleware;
const applyRoutes = (routes, router) => {
    for (const route of routes) {
        const { method, path, handler } = route;
        router[method](path, handler);
    }
};
exports.applyRoutes = applyRoutes;
//# sourceMappingURL=index.js.map