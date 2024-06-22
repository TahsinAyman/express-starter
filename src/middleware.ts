import express, { Express } from "express";
import cors from "cors";
import { logger } from "@/shared/middleware/logger";
import { staticPath } from "./lib/constants";

export const middleware = (app: Express) => {
  // core
  app.use(cors());
  app.use(express.json());
  app.use("/public", express.static(staticPath));
  // logging
  app.use(logger);
};
