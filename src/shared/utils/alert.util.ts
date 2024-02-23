import { TypeStatus } from "@/domain/types";

export const alertCall = (
  openAlert: boolean,
  message: string,
  type: TypeStatus,
  time?: number
) => {
  return {
    openAlert,
    message,
    type,
    time: time || 2500,
  };
};
