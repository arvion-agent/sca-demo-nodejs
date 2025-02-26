import { format, parseISO } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export const getCurrentTime = (): string => {
  const now = new Date();
  return format(now, "yyyy-MM-dd HH:mm:ss");
};

export const convertTimeToZone = (
  time: string,
  fromTz: string,
  toTz: string
): string => {
  const parsedTime = parseISO(time);
  const utcTime = utcToZonedTime(parsedTime, fromTz);
  const targetTime = utcToZonedTime(utcTime, toTz);
  return format(targetTime, "yyyy-MM-dd HH:mm:ss");
};

/**
 * Retrieves the user's local time based on their timezone.
 * @param userId - ID of the user (not used in logic, but included for future enhancements)
 * @param timezone - User's timezone (e.g., "America/New_York", "Asia/Tokyo")
 * @returns Formatted local time string
 */
export const getUserLocalTime = (userId: number, timezone: string): string => {
  const now = new Date();
  const localTime = utcToZonedTime(now, timezone);
  return format(localTime, "yyyy-MM-dd HH:mm:ss");
};
