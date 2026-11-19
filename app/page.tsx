import Image from "next/image";
import { Arrow, FacebookIcon, InstagramIcon, Logo, Marquee, MilkBottle, Stamp, Stars } from "@/components/brand";
import { goodToKnow, hours, ratings, site, tickerItems } from "@/lib/site";
import { menu } from "@/lib/menu";
import { MenuTabs } from "@/components/menu-tabs";
import { MobileNav } from "@/components/mobile-nav";

import hero from "@/public/images/hero-coffee-bar.jpg";
import focaccia from "@/public/images/focaccia.jpg";
import milk from "@/public/images/milk-pour.jpg";
import spread from "@/public/images/brunch-spread.jpg";
import fmsInterior from "@/public/images/fms-interior.jpg";
import fmsLatte from "@/public/images/fms-latte.jpg";
import fmsGranola from "@/public/images/fms-granola.jpg";

const nav = [
  { label: "Menu", href: "#menu" },
  { label: "Coffee", href: "#coffee" },
  { label: "Our Story", href: "#story" },
  { label: "Visit", href: "#visit" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: site.name,
  url: site.url,
  telephone: "+61411733222",
  email: site.email,
  servesCuisine: ["Cafe", "Breakfast", "Coffee"],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.suburb,
    addressRegion: site.address.state,
    postalCode: site.address.postcode,
    addressCountry: "AU",
  },
  openingHoursSpecification: hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.day,
    opens: h.open,
    closes: h.close,
  })),
  sameAs: [site.instagram.href, site.facebook.href],
};

/** "06:30" → "6:30am" */
function time(t: string) {
  const [h, m] = t.split(":").map(Number);
  return `${h % 12 || 12}:${String(m).padStart(2, "0")}${h < 12 ? "am" : "pm"}`;
}

const pill =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.12em] transition-colors";
const eyebrow = "text-[0.72rem] font-semibold uppercase tracking-[0.18em]";
const h2 = "font-wide text-[clamp(1.7rem,3.6vw,2.9rem)] leading-[1.02]";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>

      <Header />
      <div className="bg-green px-3 pb-3 text-cream sm:px-5 sm:pb-5">
        <Hero />
      </div>

      <main id="main">
        <Menu />
        <Signature />
        <Statement />
        <Marquee items={tickerItems} className="bg-lime text-ink" />
        <Coffee />
        <Story />
        <Ratings />
        <Visit />
      </main>

      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-green px-3 text-cream sm:px-5">
      <div className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <a href="#" aria-label={`${site.name}, home`} className="text-cream">
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8 text-[0.78rem] font-semibold uppercase tracking-[0.14em]">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-lime">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.orderHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border-2 border-cream px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] transition-colors hover:border-lime hover:bg-lime hover:text-ink md:inline-block"
          >
            Order
          </a>
          <MobileNav items={nav} />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative">
      <div className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2.25rem]">
        <Image
          src={hero}
          alt="Barista pouring filter coffee at the bar"
          placeholder="blur"
          preload
          sizes="100vw"
          className="h-[calc(100svh-4.75rem)] min-h-[30rem] w-full object-cover object-[70%_center] sm:h-[calc(100svh-5.75rem)]"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-green-deep/90 via-green-deep/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">
          <h1
            id="hero-title"
            className="font-display text-[clamp(3.4rem,11vw,10rem)] uppercase leading-[0.85] text-cream"
          >
            Footscray
            <br />
            Milking Station
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
            <p className="text-lg text-cream/90">Padre Coffee &amp; tasty food. Since 2012.</p>
            <a href="#menu" className={`${pill} bg-lime text-ink hover:bg-cream`}>
              See the menu <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Signature() {
  return (
    <section aria-labelledby="signature-title" className="overflow-hidden bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <p className={`${eyebrow} text-teal`}>House signature</p>
          <h2 id="signature-title" className={`${h2} mt-4 text-green`}>
            Pork shoulder focaccia
          </h2>
          <p className="mt-5 flex items-center gap-3 text-sm font-semibold text-green">
            <Stars />
            4.8 on Uber Eats
            <span className="ml-auto font-display text-4xl lg:ml-6">$18</span>
          </p>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-green/80">
            Slow-roasted pork, honey truffle mayo, salsa verde, apple fennel slaw and Parmesan.
          </p>
          <a
            href={site.orderHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${pill} mt-8 bg-green text-cream hover:bg-green-deep`}
          >
            Order for pickup <Arrow />
          </a>
        </div>

        <div className="relative -mr-5 flex gap-4 sm:-mr-8 lg:mr-0">
          <div className="w-[78%] shrink-0 overflow-hidden rounded-[1.75rem] border-2 border-green">
            <Image
              src={focaccia}
              alt="Toasted sandwich stacked with filling"
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 78vw"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="w-[40%] shrink-0 overflow-hidden rounded-[1.75rem] border-2 border-green">
            <Image
              src={fmsGranola}
              alt="House granola bowl at Footscray Milking Station"
              placeholder="blur"
              sizes="30vw"
              className="h-full w-full object-cover"
            />
          </div>
          <Stamp
            text="TASTY FOOD · GOOD COFFEE · TASTY FOOD · "
            className="absolute -left-6 -top-8 w-24 sm:w-28"
          />
        </div>
      </div>
    </section>
  );
}

function Statement() {
  const tags = [
    { label: "Dogs welcome", pos: "left-[6%] top-[16%] -rotate-6" },
    { label: "Est. 2012", pos: "right-[8%] top-[12%] rotate-6" },
    { label: "Vegan options", pos: "left-[10%] bottom-[16%] rotate-3" },
    { label: "Gluten free", pos: "right-[6%] bottom-[20%] -rotate-3" },
  ];
  const tag =
    "rounded-full border-2 border-lime px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-lime";
  return (
    <section
      aria-labelledby="statement-title"
      className="relative overflow-hidden bg-green px-5 py-28 text-cream sm:py-36"
    >
      {tags.map((t) => (
        <span key={t.label} className={`absolute hidden sm:block ${tag} ${t.pos}`}>
          {t.label}
        </span>
      ))}
      <h2
        id="statement-title"
        className="font-wide relative mx-auto max-w-3xl text-center text-[clamp(1.6rem,3.8vw,3rem)] leading-[1.08]"
      >
        Old milking sheds. <span className="text-lime">Fresh coffee.</span> Good eggs.
      </h2>
      <ul className="relative mt-10 flex flex-wrap justify-center gap-2 sm:hidden">
        {tags.map((t) => (
          <li key={t.label} className={tag}>
            {t.label}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Coffee() {
  return (
    <section id="coffee" aria-labelledby="coffee-title" className="bg-green-deep text-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-[1.75rem] border-2 border-cream/80">
            <Image
              src={fmsLatte}
              alt="Latte with latte art at Footscray Milking Station"
              placeholder="blur"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <MilkBottle className="absolute -bottom-6 -right-2 h-24 w-auto text-lime sm:h-32" />
        </div>
        <div>
          <p className={`${eyebrow} text-lime`}>The coffee</p>
          <h2 id="coffee-title" className={`${h2} mt-4`}>
            Padre on the Slayer
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/80">
            <a
              href={site.padre}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-lime decoration-2 underline-offset-4 hover:text-lime"
            >
              Padre Coffee
            </a>
            , pulled on a three-group Slayer EP.
          </p>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t-2 border-cream/20 pt-6">
            {[
              ["Roaster", "Padre"],
              ["Machine", "Slayer EP"],
              ["First pour", "6:30am"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-cream/55">
                  {k}
                </dt>
                <dd className="mt-1 font-display text-2xl uppercase sm:text-3xl">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2
          id="menu-title"
          className="text-center font-display text-[clamp(3.2rem,9vw,7rem)] uppercase leading-[0.85] text-green"
        >
          The Menu
        </h2>

        <div className="mt-12">
          <MenuTabs tabs={menu} />
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 text-center">
          <a
            href={site.orderHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${pill} bg-green px-8 py-4 text-cream hover:bg-green-deep`}
          >
            Order on Uber Eats <Arrow />
          </a>
          <p className="text-sm text-green/60">Ask in store for today&rsquo;s prices and specials.</p>
        </div>
      </div>
    </section>
  );
}

function Story() {
  const steps = [
    {
      n: "01",
      title: "The sheds",
      text: "Once a local family's milking sheds. The milk pails stayed.",
      img: milk,
      alt: "Milk poured into a glass",
    },
    {
      n: "02",
      title: "The room",
      text: "Green tiles, red brick and tables made from an old basketball court.",
      img: fmsInterior,
      alt: "Inside Footscray Milking Station: green and white tiles, red brick and timber tables",
    },
    {
      n: "03",
      title: "The courtyard",
      text: "Heaps of sun and room for furry friends.",
      img: spread,
      alt: "Brunch spread on a courtyard table",
    },
  ];
  return (
    <section id="story" aria-labelledby="story-title" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className={`${eyebrow} text-teal`}>Our story</p>
        <h2 id="story-title" className={`${h2} mt-4 max-w-2xl text-green`}>
          A sleepy corner, busy since 2012
        </h2>

        <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((s, i) => (
            <li key={s.n} className="relative">
              <div className="overflow-hidden rounded-[1.75rem] border-2 border-green">
                <Image
                  src={s.img}
                  alt={s.alt}
                  placeholder="blur"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="aspect-[5/4] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <h3 className="mt-5 flex items-center gap-3">
                <span className="rounded-full border-2 border-green px-3 py-0.5 text-sm font-semibold text-green">
                  {s.n}
                </span>
                <span className="font-wide text-lg text-green">{s.title}</span>
              </h3>
              <p className="mt-2 max-w-xs text-green/70">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Ratings() {
  return (
    <section aria-label="Ratings" className="border-y-2 border-green/15 bg-paper">
      <ul className="mx-auto grid max-w-7xl divide-y-2 divide-green/15 px-5 sm:grid-cols-3 sm:divide-x-2 sm:divide-y-0 sm:px-8">
        {ratings.map((r) => (
          <li key={r.source} className="flex items-center gap-5 py-8 sm:justify-center">
            <span className="font-display text-7xl leading-none text-green">{r.score}</span>
            <span>
              <Stars className="text-teal" />
              <span className="mt-1 block font-semibold text-green">{r.source}</span>
              <span className="block text-sm text-green/60">{r.detail}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className={`${eyebrow} text-teal`}>Visit</p>
          <h2
            id="visit-title"
            className="mt-4 font-display text-[clamp(3rem,7vw,5.5rem)] uppercase leading-[0.88] text-green"
          >
            35 Bunbury St
            <br />
            Footscray
          </h2>
          <p className="mt-4 text-green/70">{site.address.corner}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${pill} bg-green text-cream hover:bg-green-deep`}
            >
              Directions <Arrow />
            </a>
            <a
              href={site.phone.href}
              className={`${pill} border-2 border-green py-2.5 text-green hover:bg-green hover:text-cream`}
            >
              Book · {site.phone.label}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-1.5" aria-label="Good to know">
            {goodToKnow.map((g) => (
              <li
                key={g}
                className="rounded-full border border-green/25 px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.08em] text-green sm:text-[0.64rem]"
              >
                {g}
              </li>
            ))}
          </ul>

          <ul className="mt-8 space-y-2 font-semibold text-green">
            <li>
              <a href={`mailto:${site.email}`} className="break-all hover:text-teal">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3 pt-2">
              <a
                href={site.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-full border-2 border-green text-green transition-colors hover:bg-green hover:text-cream"
              >
                <InstagramIcon />
              </a>
              <a
                href={site.facebook.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-11 w-11 place-items-center rounded-full border-2 border-green text-green transition-colors hover:bg-green hover:text-cream"
              >
                <FacebookIcon />
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-[1.75rem] border-2 border-green bg-cream p-6 sm:p-10">
          <div className="flex items-center justify-between">
            <h3 className="font-wide text-xl text-green">Opening hours</h3>
            <MilkBottle className="h-9 w-auto text-green" />
          </div>
          <table className="mt-6 w-full text-left">
            <caption className="sr-only">Opening hours by day</caption>
            <tbody>
              {hours.map((h) => (
                <tr key={h.day} className="border-t-2 border-green/15">
                  <th scope="row" className="py-3.5 font-semibold text-green">
                    {h.day}
                  </th>
                  <td className="py-3.5 text-right tabular-nums text-green/75">
                    {time(h.open)} – {time(h.close)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-cream text-green">
      <Marquee items={tickerItems} className="bg-green text-cream" />
      <div className="mx-auto flex max-w-7xl justify-center px-5 pt-14 sm:px-8">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-5 text-[0.75rem] font-semibold uppercase tracking-[0.14em]">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-teal">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p
        aria-hidden="true"
        className="mt-8 select-none whitespace-nowrap px-4 text-center font-display text-[clamp(1.9rem,7.6vw,9rem)] uppercase leading-[0.9] text-green"
      >
        Footscray Milking Station
      </p>
      <p className="mx-auto max-w-7xl px-5 pb-8 pt-6 text-center text-xs text-green/60 sm:px-8">
        © {site.name} · 35 Bunbury St, Footscray VIC 3011
      </p>
    </footer>
  );
}
