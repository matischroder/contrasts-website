import Link from "next/link";
import { mapsUrl, telHref } from "@/content/site";
import { PhoneIcon } from "./Icons";

/** Thumb-reach actions on phones: call, prices, directions. */
export function MobileBar() {
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-bone/95 p-2 backdrop-blur-sm lg:hidden">
      <ul className="grid grid-cols-3 gap-2 text-sm font-semibold">
        <li>
          <a href={telHref} className="flex h-12 items-center justify-center gap-2 rounded-full bg-ink text-bone">
            <PhoneIcon />
            Call
          </a>
        </li>
        <li>
          <Link href="/#services" className="flex h-12 items-center justify-center rounded-full bg-sage text-ink">
            Prices
          </Link>
        </li>
        <li>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center rounded-full ring-1 ring-ink/25 ring-inset">
            Directions
          </a>
        </li>
      </ul>
    </nav>
  );
}
