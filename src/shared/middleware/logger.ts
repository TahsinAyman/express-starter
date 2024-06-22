import { type Middleware } from "./types";

export const logger: Middleware = ({ url, method }, _res, next) => {
  console.log(`🔥 ${method} ${url}`);
  next();
};
