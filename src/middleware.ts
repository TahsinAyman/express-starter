import express, { Express } from "express";
import cors from "cors";

import { logger } from "@/shared/middleware/logger";

export const middleware = (app: Express) => {
  // core
  app.use(cors());
  app.use(express.json());

  // logging
  app.use(logger);
};
