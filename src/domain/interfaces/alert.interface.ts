import { TypeStatus } from "../types";

export interface AlertConfig {
  openAlert: boolean;
  message: string;
  type: TypeStatus;
  time: number;
}
