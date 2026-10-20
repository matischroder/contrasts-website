import Link from "next/link";
import { ContrastMark } from "./Icons";

/** Wordmark after the salon's own logo: lowercase, widely spaced, with a full stop. */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <ContrastMark className={`size-7 shrink-0 transition-transform duration-500 group-hover:rotate-180 ${light ? "text-sage" : "text-sage-dark"}`} />
      <span className="leading-none">
        <span className={`block font-serif text-[1.7rem] font-semibold tracking-[0.18em] ${light ? "text-bone" : "text-ink"}`}>contrasts.</span>
        <span className={`mt-0.5 block text-[0.6rem] font-semibold tracking-[0.24em] uppercase ${light ? "text-bone/70" : "text-ink-soft"}`}>
          Hair Studio · Grange
        </span>
      </span>
    </Link>
  );
}
