"use client";

import { useState } from "react";
import type { MenuTab } from "@/lib/menu";

export function MenuTabs({ tabs }: { tabs: MenuTab[] }) {
  const [active, setActive] = useState(tabs[0].id);
  const tab = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Menu sections"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
      >
        {tabs.map((t) => {
          const selected = t.id === active;
          return (
            <button
              key={t.id}
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={selected}
              aria-controls="menu-panel"
              onClick={() => setActive(t.id)}
              className={`shrink-0 cursor-pointer rounded-full border-2 px-5 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                selected
                  ? "border-green bg-green text-cream"
                  : "border-green/25 text-green hover:border-green"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div
        id="menu-panel"
        role="tabpanel"
        aria-labelledby={`tab-${tab.id}`}
        className="mt-10 grid gap-x-14 gap-y-10 md:grid-cols-2"
      >
        {tab.groups.map((g) => (
          <div key={g.title}>
            <h3 className="font-display text-3xl uppercase text-green">{g.title}</h3>
            <ul className="mt-3 border-t-2 border-green">
              {g.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline gap-3 border-b-2 border-green/15 py-3.5"
                >
                  <span className="font-semibold text-green">{item.name}</span>
                  {item.tag && (
                    <span className="hidden rounded-full bg-lime px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-ink sm:inline">
                      {item.tag}
                    </span>
                  )}
                  <span className="leader text-green" aria-hidden="true" />
                  {item.price && (
                    <span className="font-display text-2xl text-green">{item.price}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
