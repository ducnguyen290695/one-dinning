import { format } from "date-fns";

export const DATE_FORMAT = "dd/MM/yyyy";
export const DATE_TIME_FORMAT = "dd/MM/yyyy HH:mm:ss";
export const TIME_FORMAT = "hh:mm a";

export const timestampToDate = (timestamp: number) => {
  return new Date(timestamp * 1000);
};

export const formatDate = (
  date: string | Date,
  formatDate: string = DATE_FORMAT
) => {
  return format(new Date(date), formatDate);
};
