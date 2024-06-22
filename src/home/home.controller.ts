import { Request, Response, Router } from "express";
import { Message, MessageStatus } from "@/shared/model/message.entity";
import { HttpStatus } from "@/shared/model/http-status.enum";

const home = Router();

home.get("/", (_req: Request, res: Response<Message>) => {
  return res.status(HttpStatus.OK).json({
    message: "The Server is up and running 🚀",
    code: HttpStatus.OK,
    status: MessageStatus.INFO,
  });
});

export { home };
