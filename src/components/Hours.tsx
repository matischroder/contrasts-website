"use client";

import { useSyncExternalStore } from "react";
import { brisbaneNow, formatTime, week } from "@/lib/hours";

/** Re-check the day every minute, like the OpenNow badge. */
const everyMinute = (cb: () => void) => {
  const id = setInterval(cb, 60_000);
  return () => clearInterval(id);
};

/** Opening hours with today's row highlighted (after mount, in Brisbane time). */
export function HoursTable({ tone = "dark" }: { tone?: "dark" | "light" }) {
  // Client-only: the server can't know the visitor's "today", so it renders no highlight.
  const today = useSyncExternalStore(
    everyMinute,
    () => brisbaneNow().day,
    () => null,
  );
  const light = tone === "light";

  return (
    <table className="w-full text-left">
      <caption className="sr-only">Opening hours</caption>
      <tbody>
        {week.map((w) => {
          const isToday = w.day === today;
          return (
            <tr key={w.day} className={`border-b ${light ? "border-bone/15" : "border-ink/10"} ${isToday ? (light ? "text-sage" : "text-sage-dark") : ""}`}>
              <th scope="row" className="py-3 pr-4 font-medium">
                {w.name}
                {isToday && <span className="ml-2 text-xs font-semibold tracking-[0.16em] uppercase">Today</span>}
              </th>
              <td className="py-3 text-right tabular-nums">
                {w.hours ? `${formatTime(w.hours[0])} – ${formatTime(w.hours[1])}` : <span className={light ? "text-bone/70" : "text-ink-soft"}>Closed</span>}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
