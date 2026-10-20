import { fullAddress, site, telHref } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-bone/10 bg-ink pb-24 text-bone/75 lg:pb-0">
      <div className="container-site flex flex-col gap-6 py-10 text-sm sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Logo tone="light" />
          <p className="mt-4">
            {fullAddress} ·{" "}
            <a href={telHref} className="font-semibold text-bone">
              {site.phone}
            </a>
          </p>
          <p className="mt-1">ABN {site.abn}</p>
        </div>
        <p className="max-w-xs text-xs leading-relaxed text-bone/70 sm:text-right">
          Website concept for {site.name}. Services, prices and hours from the salon&apos;s current website.
        </p>
      </div>
    </footer>
  );
}
