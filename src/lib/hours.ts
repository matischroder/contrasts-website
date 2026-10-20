import { site } from "@/content/site";

export const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

/** "17:00" → "5pm", "14:30" → "2:30pm" */
export function formatTime(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const hour = h % 12 || 12;
  return m ? `${hour}:${String(m).padStart(2, "0")}${suffix}` : `${hour}${suffix}`;
}

/** Current weekday/minute in Brisbane (AEST, no daylight saving). */
export function brisbaneNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Brisbane",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

export type OpenStatus = { open: boolean; label: string; detail: string };

/** e.g. "Open now · until 9pm" or "Closed · Opens Tuesday 9am". */
export function openStatus(date = new Date()): OpenStatus {
  const { day, minutes } = brisbaneNow(date);
  const today = site.hours[day];
  if (today && minutes >= toMinutes(today[0]) && minutes < toMinutes(today[1])) {
    return { open: true, label: "Open now", detail: `until ${formatTime(today[1])}` };
  }
  if (today && minutes < toMinutes(today[0])) {
    return { open: false, label: "Closed now", detail: `Opens today ${formatTime(today[0])}` };
  }
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    const h = site.hours[d];
    if (h) return { open: false, label: "Closed now", detail: `Opens ${i === 1 ? "tomorrow" : DAY_NAMES[d]} ${formatTime(h[0])}` };
  }
  return { open: false, label: "Closed", detail: "" };
}

/** Weekdays (Mon→Sun) with their hours, for tables and structured data. */
export const week = [1, 2, 3, 4, 5, 6, 0].map((d) => ({ day: d, name: DAY_NAMES[d], hours: site.hours[d] }));
export const lateNights = week.filter((w) => w.hours && toMinutes(w.hours[1]) >= 19 * 60).map((w) => w.name);
