import { Request, Response, Router } from "express";
import { Message, MessageStatus } from "@/shared/model/message.entity";
import { HttpStatus } from "@/lib/http-status";

const controller = Router();

controller.get("/", (_req: Request, res: Response<Message>) => {
  return res.status(HttpStatus.ACCEPTED).json({
    message: "The Server is up and running 🚀",
    code: HttpStatus.OK,
    status: MessageStatus.INFO,
  });
});

export { controller };
