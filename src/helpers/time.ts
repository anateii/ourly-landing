import { useEffect, useState } from "react";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

// Re-render every second (the hero countdown ticks).
export function useNow() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), SECOND);
    return () => clearInterval(id);
  }, []);
  return now;
}

export const greeting = (now: number) => {
  const h = new Date(now).getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
};

// "141 days to go" + "and 11 h 10 min 05 s", like the app's Countdown
// (which stops at minutes; the landing page adds seconds so it visibly ticks).
export const countdown = (target: Date, now: number) => {
  const left = target.getTime() - now;
  if (left <= 0) return { big: "It's here!", rest: "" };
  const days = Math.floor(left / DAY);
  const hours = Math.floor((left % DAY) / HOUR);
  const minutes = Math.floor((left % HOUR) / MINUTE);
  const seconds = Math.floor((left % MINUTE) / SECOND);
  const clock = `${hours} h ${minutes} min ${String(seconds).padStart(2, "0")} s`;
  return days > 0
    ? { big: `${days} ${days === 1 ? "day" : "days"} to go`, rest: `and ${clock}` }
    : { big: `${clock} to go`, rest: "" };
};

const weekday = new Intl.DateTimeFormat("en", { weekday: "short" });

// The next `count` days starting today, for the "Next two weeks" strip.
export const upcomingDays = (count: number, from = new Date()) =>
  Array.from({ length: count }, (_, i) => {
    const d = new Date(from.getFullYear(), from.getMonth(), from.getDate() + i);
    return { offset: i, weekday: weekday.format(d), day: d.getDate() };
  });
