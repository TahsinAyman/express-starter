import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { middleware } from "./middleware";
import { controller } from "./controller";

dotenv.config();

const app = express();

middleware(app);
controller(app);

const host = process.env.HOST || "0.0.0.0";
const port = Number(process.env.PORT) || 8000;

app.listen(port, host, () => {
  console.log(
    `Server running at http://${
      host === "0.0.0.0" ? "localhost" : host
    }:${port}`
  );
});
