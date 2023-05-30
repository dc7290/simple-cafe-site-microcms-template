import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: string): string => {
  return dayjs.utc(date).tz("Asia/Tokyo").format("YYYY.MM.DD");
};
