import { format, parseISO } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

type Event = {
  name: string;
  date: string;
  timezone: string;
};

const events: Event[] = [];

export const scheduleEvent = (
  name: string,
  date: string,
  timezone: string,
): Event => {
  const parsedDate = parseISO(date);
  const localTime = utcToZonedTime(parsedDate, timezone);
  const formattedDate = format(localTime, "yyyy-MM-dd HH:mm:ss");

  const event = { name, date: formattedDate, timezone };
  events.push(event);
  return event;
};

export const listEvents = (): Event[] => events;
