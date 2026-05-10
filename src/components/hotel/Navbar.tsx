import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import logo from "@/assets/famigni-logo.png";
import { waLink } from "@/lib/hotel";
import { useI18n } from "@/lib/i18n";
import { LangToggle } from "@/components/hotel/LangToggle";

const links = [
  { href: "#stay", key: "nav.stay" as const },
  { href: "#about", key: "nav.about" as const },
  { href: "#rooms", key: "nav.rooms" as const },
  { href: "#amenities", key: "nav.amenities" as const },
  { href: "#gallery", key: "nav.gallery" as const },
  { href: "#location", key: "nav.location" as const },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-charcoal/85 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex items-center justify-between h-20">
        <a href="#stay" className="flex items-center gap-3 group">
          <img src={logo} alt="Famigni Hotel" className="h-10 w-10 object-contain brightness-0 invert opacity-90" />
          <span className="font-display text-xl tracking-wide text-ivory">Famigni</span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] tracking-wider uppercase text-ivory/70 hover:text-bronze-soft transition-colors">
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block"><LangToggle tone="light" /></div>
          <a
            href={waLink(t("wa.default"))}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 border border-bronze/60 text-ivory hover:bg-bronze hover:border-bronze transition-all px-5 py-2.5 text-[12px] tracking-[0.22em] uppercase"
          >
            <MessageCircle className="size-4" />
            {t("nav.bookWa")}
          </a>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="lg:hidden text-ivory p-2">
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 bg-charcoal/95 backdrop-blur-xl ${
          open ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-luxe py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-ivory/80 font-display text-2xl py-1">
              {t(l.key)}
            </a>
          ))}
          <div className="pt-2"><LangToggle tone="light" /></div>
          <a
            href={waLink(t("wa.default"))}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-flex items-center justify-center gap-2 bg-bronze text-ivory px-5 py-3 text-[12px] tracking-[0.22em] uppercase"
          >
            <MessageCircle className="size-4" />
            {t("nav.bookWa")}
          </a>
        </div>
      </div>
    </header>
  );
}
