"use client";

import { useEffect, useState } from "react";
import { openStatus, type OpenStatus } from "@/lib/hours";

/** Live open/closed badge in Brisbane time. Renders a placeholder until mounted so it is never stale. */
export function OpenNow({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [status, setStatus] = useState<OpenStatus | null>(null);

  useEffect(() => {
    const update = () => setStatus(openStatus());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) return <span className="inline-block h-5" aria-hidden="true" />;
  const light = tone === "light";
  return (
    <span className={`inline-flex items-center gap-2 text-sm ${light ? "text-bone/80" : "text-ink-soft"}`}>
      <span className="relative flex size-2.5">
        {status.open && <span className="absolute inset-0 animate-ping rounded-full bg-sage/70" />}
        <span className={`relative size-2.5 rounded-full ${status.open ? "bg-sage" : "bg-clay"}`} />
      </span>
      <span className={`font-semibold ${light ? "text-bone" : "text-ink"}`}>{status.label}</span>
      {status.detail && <span>· {status.detail}</span>}
    </span>
  );
}
