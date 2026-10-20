import Link from "next/link";
import { site, telHref } from "@/content/site";
import { formatTime, lateNights, week } from "@/lib/hours";
import { PhoneIcon } from "./Icons";
import { OpenNow } from "./OpenNow";

const freeFrom = ["ammonia", "parabens", "sulfates"];
const latest = week.find((w) => w.name === lateNights[0])?.hours?.[1];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="container-site grid gap-6 pt-8 pb-12 sm:pt-12 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:pt-16 lg:pb-20">
        <div className="animate-fade-up flex flex-col justify-center">
          <p className="text-xs font-semibold tracking-[0.24em] text-sage-dark uppercase">Organic concept salon<span className="hidden sm:inline"> · Grange, Brisbane</span></p>
          <h1 id="hero-title" className="mt-5 font-serif text-[3.1rem] leading-[0.95] font-medium text-balance sm:text-7xl lg:text-[5.4rem]">
            Hair you love, <em className="text-sage-dark">minus</em> the harsh chemicals.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Cutting, colouring and styling with products that are completely ammonia, sulfate and paraben free — kind to your
            hair, your skin and the environment.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={telHref}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-ink px-7 font-semibold text-bone transition-colors hover:bg-sage-dark"
            >
              <PhoneIcon />
              Call to book · {site.phone}
            </a>
            <Link
              href="/#services"
              className="inline-flex h-13 items-center justify-center rounded-full px-7 font-semibold ring-1 ring-ink/25 ring-inset transition-colors hover:bg-bone-2"
            >
              Services &amp; prices
            </Link>
          </div>
          <div className="mt-6">
            <OpenNow />
          </div>
        </div>

        {/* The "contrast": a dark panel listing what's left out. */}
        <div className="animate-fade-up relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-ink p-7 text-bone [animation-delay:120ms] sm:p-10">
          <div aria-hidden="true" className="absolute -top-24 -right-24 size-72 rounded-full border-[28px] border-sage/15" />
          <div aria-hidden="true" className="absolute -right-24 -bottom-40 size-80 rounded-full bg-sage/10" />
          <p className="relative text-sm font-semibold tracking-[0.2em] text-sage uppercase">Every product, 100% free of</p>
          <ul className="relative mt-6 space-y-1 sm:mt-8">
            {freeFrom.map((w) => (
              <li key={w} className="font-serif text-6xl leading-[1.05] font-medium sm:text-7xl">
                <span className="relative inline-block">
                  {w}
                  <span aria-hidden="true" className="absolute inset-x-[-4%] top-[58%] h-[3px] -rotate-2 rounded-full bg-sage/90" />
                </span>
              </li>
            ))}
          </ul>
          <dl className="relative mt-10 grid grid-cols-2 gap-6 border-t border-bone/15 pt-6 text-sm">
            <div>
              <dt className="text-bone/75">Every client</dt>
              <dd className="mt-1 font-semibold">Complimentary consultation</dd>
            </div>
            <div>
              <dt className="text-bone/75">Late nights</dt>
              <dd className="mt-1 font-semibold">
                {lateNights.map((d) => d.slice(0, 3)).join(" & ")} until {latest ? formatTime(latest) : ""}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
