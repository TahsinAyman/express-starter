import { HttpStatus } from "@/lib/http-status";

export interface Message {
  message: string;
  status: MessageStatus;
  code: HttpStatus | number;
}

export enum MessageStatus {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
}
