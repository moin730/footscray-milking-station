"use client";

import { useEffect, useState } from "react";
import { Arrow, MilkBottle } from "@/components/brand";
import { site } from "@/lib/site";

type NavItem = { label: string; href: string };

/** Mobile menu: hamburger that morphs into a cross and opens a full-screen panel. */
export function MobileNav({ items }: { items: readonly NavItem[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);
  const bar = "absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ease-out";

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
        className={`relative z-50 grid h-10 w-10 place-items-center rounded-full border-2 transition-colors ${
          open ? "border-lime bg-lime text-ink" : "border-cream/60 text-cream"
        }`}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span className="relative block h-3.5 w-5" aria-hidden="true">
          <span className={`${bar} ${open ? "top-1.5 rotate-45" : "top-0"}`} />
          <span className={`${bar} top-1.5 ${open ? "scale-x-0 opacity-0" : ""}`} />
          <span className={`${bar} ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
        </span>
      </button>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-y-auto bg-green-deep px-5 pb-8 pt-6 text-cream transition-all duration-300 ease-out ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav aria-label="Mobile">
          <ul className="divide-y divide-cream/15 border-y border-cream/15">
            {items.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={close}
                  style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
                  className={`group flex items-center justify-between py-5 font-display text-[2.4rem] uppercase leading-none transition-all duration-300 hover:text-lime ${
                    open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  }`}
                >
                  {item.label}
                  <Arrow className="h-6 w-6 text-lime opacity-60 transition-transform group-hover:translate-x-1 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={site.orderHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className="mt-8 flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-4 text-[0.85rem] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-cream"
        >
          Order online
          <Arrow />
        </a>
        <a
          href={site.phone.href}
          className="mt-3 flex items-center justify-center rounded-full border-2 border-cream/40 px-6 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] transition-colors hover:border-lime hover:text-lime"
        >
          Call {site.phone.label}
        </a>

        <div className="mt-auto flex items-end justify-between gap-4 pt-10 text-[0.78rem] leading-relaxed text-cream/70">
          <p>
            {site.address.street}, {site.address.suburb}
            <br />
            Open daily till 2:30pm
          </p>
          <MilkBottle className="h-10 w-auto text-lime/80" />
        </div>
      </div>
    </div>
  );
}
