import { fullAddress, mailHref, mapsUrl, site, telHref } from "@/content/site";
import { HoursTable } from "./Hours";
import { MailIcon, PhoneIcon, PinIcon } from "./Icons";
import { OpenNow } from "./OpenNow";

export function Visit() {
  return (
    <section id="hours" aria-labelledby="hours-title" className="bg-ink py-16 text-bone sm:py-24">
      <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-sage uppercase">Opening hours</p>
          <h2 id="hours-title" className="mt-4 font-serif text-5xl leading-[1] font-medium sm:text-6xl">
            Open late Tuesday &amp; Thursday.
          </h2>
          <div className="mt-4">
            <OpenNow tone="light" />
          </div>
          <div className="mt-8">
            <HoursTable tone="light" />
          </div>
        </div>

        <div id="visit" className="scroll-mt-24">
          <p className="text-xs font-semibold tracking-[0.24em] text-sage uppercase">Visit &amp; book</p>
          <h2 className="mt-4 font-serif text-5xl leading-[1] font-medium sm:text-6xl">82 Days Road, Grange.</h2>
          <p className="mt-6 text-lg leading-relaxed text-bone/80">For booking enquiries, please contact us by phone or email.</p>
          <ul className="mt-8 grid gap-3">
            <li>
              <a href={telHref} className="flex items-center gap-4 rounded-2xl bg-bone/5 p-5 ring-1 ring-bone/10 transition-colors hover:bg-bone/10">
                <span className="grid size-11 place-items-center rounded-full bg-sage text-ink">
                  <PhoneIcon className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-bone/70">Call to book</span>
                  <span className="block text-xl font-semibold">{site.phone}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={mailHref} className="flex items-center gap-4 rounded-2xl bg-bone/5 p-5 ring-1 ring-bone/10 transition-colors hover:bg-bone/10">
                <span className="grid size-11 place-items-center rounded-full bg-bone/10 text-bone">
                  <MailIcon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-bone/70">Email</span>
                  <span className="block truncate text-xl font-semibold">{site.email}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-bone/5 p-5 ring-1 ring-bone/10 transition-colors hover:bg-bone/10"
              >
                <span className="grid size-11 place-items-center rounded-full bg-bone/10 text-bone">
                  <PinIcon className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-bone/70">Get directions</span>
                  <span className="block text-xl font-semibold">{fullAddress}</span>
                </span>
              </a>
            </li>
          </ul>
          <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm font-semibold text-sage underline underline-offset-4">
            Follow Contrasts on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
