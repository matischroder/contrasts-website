"use client";

import { useMemo, useState } from "react";
import { allServices, formatPrice, priceNotes, pricesAsAt, serviceGroups, type Service } from "@/content/services";
import { site, telHref } from "@/content/site";
import { CheckIcon, MailIcon, PhoneIcon } from "./Icons";

/** The salon's service menu, where each line can be ticked to plan a visit and see a starting price. */
export function Services() {
  const [picked, setPicked] = useState<string[]>([]);
  const toggle = (id: string) => setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  const selected = useMemo(() => allServices.filter((s) => picked.includes(s.id)), [picked]);

  return (
    <section id="services" aria-labelledby="services-title" className="py-16 sm:py-24">
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.24em] text-sage-dark uppercase">Service menu</p>
          <h2 id="services-title" className="mt-4 font-serif text-5xl leading-[1] font-medium sm:text-6xl">
            Services &amp; prices
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Tick what you&apos;re after to plan your visit and see a starting price. Prices correct as at {pricesAsAt}, based on
            short hair.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_22rem] lg:gap-12">
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
            {serviceGroups.map((g) => (
              <fieldset key={g.id} id={g.id} className="min-w-0">
                <legend className="w-full border-b-2 border-ink pb-2">
                  <span className="font-serif text-3xl font-medium">{g.title}</span>
                </legend>
                <p className="mt-2 text-sm text-ink-soft">{g.blurb}</p>
                <ul className="mt-2">
                  {g.services.map((s) => (
                    <ServiceRow key={s.id} service={s} checked={picked.includes(s.id)} onToggle={() => toggle(s.id)} />
                  ))}
                </ul>
              </fieldset>
            ))}
          </div>

          <aside id="your-visit" aria-labelledby="visit-summary-title" className="scroll-mt-24 lg:sticky lg:top-24 lg:self-start">
            <VisitSummary selected={selected} onClear={() => setPicked([])} />
          </aside>
        </div>

        <ul className="mt-10 space-y-1 text-sm text-ink-soft">
          {priceNotes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>

      {/* Mobile: a reminder of the plan, just above the action bar. */}
      {selected.length > 0 && (
        <a
          href="#your-visit"
          className="animate-fade-up fixed inset-x-4 bottom-[5.25rem] z-40 flex items-center justify-between rounded-full bg-sage px-5 py-3 text-sm font-semibold text-ink shadow-lg lg:hidden"
        >
          <span>
            {selected.length} selected · {startingPrice(selected)}
          </span>
          <span aria-hidden="true">View ↓</span>
        </a>
      )}
    </section>
  );
}

function ServiceRow({ service, checked, onToggle }: { service: Service; checked: boolean; onToggle: () => void }) {
  return (
    <li>
      <label className="group flex cursor-pointer items-center gap-3 border-b border-ink/10 py-3.5">
        <input type="checkbox" checked={checked} onChange={onToggle} className="peer sr-only" />
        <span
          aria-hidden="true"
          className={`grid size-6 shrink-0 place-items-center rounded-full ring-1 transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-sage-dark ${
            checked ? "bg-sage-dark text-bone ring-sage-dark" : "text-transparent ring-ink/30 group-hover:ring-ink/60"
          }`}
        >
          <CheckIcon />
        </span>
        <span className="font-medium">{service.name}</span>
        <span className="leader text-ink" aria-hidden="true" />
        <span className="shrink-0 font-semibold tabular-nums">{formatPrice(service)}</span>
      </label>
    </li>
  );
}

function startingPrice(selected: Service[]) {
  const total = selected.reduce((sum, s) => sum + (s.price ?? 0), 0);
  const hasFrom = selected.some((s) => s.from || s.price === null);
  return total ? `${hasFrom ? "from " : ""}$${total}` : "POA";
}

function VisitSummary({ selected, onClear }: { selected: Service[]; onClear: () => void }) {
  const hasPoa = selected.some((s) => s.price === null);
  const body = [
    "Hi Contrasts,",
    "",
    "I'd like to book:",
    ...selected.map((s) => `- ${s.name} (${formatPrice(s)})`),
    "",
    "Preferred day/time:",
    "Name:",
    "Phone:",
  ].join("\n");
  const mail = `mailto:${site.email}?subject=${encodeURIComponent("Booking enquiry")}&body=${encodeURIComponent(body)}`;

  return (
    <div className="rounded-3xl bg-ink p-6 text-bone sm:p-7">
      <h3 id="visit-summary-title" className="font-serif text-3xl font-medium">
        Your visit
      </h3>
      {selected.length === 0 ? (
        <p className="mt-3 leading-relaxed text-bone/75">Nothing ticked yet. Choose services from the menu to see a starting price.</p>
      ) : (
        <>
          <ul className="mt-4 divide-y divide-bone/10 text-sm" aria-live="polite">
            {selected.map((s) => (
              <li key={s.id} className="flex justify-between gap-4 py-2">
                <span>{s.name}</span>
                <span className="shrink-0 tabular-nums">{formatPrice(s)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-baseline justify-between border-t border-bone/25 pt-4">
            <span className="text-sm text-bone/75">Starting price</span>
            <span className="font-serif text-4xl font-medium tabular-nums" aria-live="polite">
              {startingPrice(selected)}
            </span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-bone/75">
            Based on short hair{hasPoa ? "; permanent straightening is priced on application" : ""}. Exact prices can be provided
            on application.
          </p>
        </>
      )}
      <div className="mt-6 grid gap-2">
        <a href={telHref} className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-sage font-semibold text-ink hover:bg-sage-soft">
          <PhoneIcon />
          Call to book · {site.phone}
        </a>
        <a href={mail} className="inline-flex h-12 items-center justify-center gap-2 rounded-full font-semibold ring-1 ring-bone/30 ring-inset hover:bg-ink-2">
          <MailIcon />
          {selected.length ? "Email this list to book" : "Email us"}
        </a>
        {selected.length > 0 && (
          <button type="button" onClick={onClear} className="mt-1 text-sm text-bone/75 underline underline-offset-4 hover:text-bone">
            Clear selection
          </button>
        )}
      </div>
    </div>
  );
}
