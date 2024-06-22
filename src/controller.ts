import { Express } from "express";
import { home } from "@/home";

export const controller = (app: Express) => {
  app.use("", home);
};
