import { format, parseISO } from "date-fns";
import { utcToZonedTime, zonedTimeToUtc } from "date-fns-tz";

export const formatDate = (date: string, timezone: string): string => {
  const parsedDate = parseISO(date);
  const zonedDate = utcToZonedTime(parsedDate, timezone);
  return format(zonedDate, "yyyy-MM-dd HH:mm:ss");
};

export const convertToUTC = (date: string, timezone: string): string => {
  const parsedDate = parseISO(date);
  return format(zonedTimeToUtc(parsedDate, timezone), "yyyy-MM-dd HH:mm:ss");
};
