import { HttpStatus } from "./http-status.enum";

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
