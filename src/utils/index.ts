//! To apply our middleware, we will create a function which grabs this list of middleware and applies it on a router.
//! The applyMiddleware helper accepts the list of middleware wrappers we define in ./middleware/index.ts and
//! express.Router.Now everything is ready for using it in server.ts

//! A nice thing about it is as we’re adding more and more middleware we don’t have to change this code.
//! Only create its file under./ middleware and import it in ./ middleware / index.ts.
//! This is the most code intense part of the whole story

import { Router, Request, Response, NextFunction } from "express";

type Wrapper = (router: Router) => void;

export const applyMiddleware = (
  middlewareWrappers: Wrapper[],
  router: Router
) => {
  for (const wrapper of middlewareWrappers) {
    wrapper(router);
  }
};

type Handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

type Route = {
  path: string;
  method: string;
  handler: Handler | Handler[];
};

export const applyRoutes = (routes: Route[], router: Router) => {
  for (const route of routes) {
    const { method, path, handler } = route;
    (router as any)[method](path, handler);
  }
};
