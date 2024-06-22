import { Express } from "express";
import { HomeController } from "@/home";

export const controller = (app: Express) => {
  app.use("", HomeController);
};
