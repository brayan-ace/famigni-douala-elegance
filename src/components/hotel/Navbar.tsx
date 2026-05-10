import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import logo from "@/assets/famigni-logo.png";
import { waLink } from "@/lib/hotel";

const links = [
  { href: "#stay", label: "Stay" },
  { href: "#about", label: "About" },
  { href: "#rooms", label: "Rooms" },
  { href: "#amenities", label: "Amenities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/85 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex items-center justify-between h-20">
        <a href="#stay" className="flex items-center gap-3 group">
          <img src={logo} alt="Famigni Hotel" className="h-10 w-10 object-contain brightness-0 invert opacity-90" />
          <span className="font-display text-xl tracking-wide text-ivory">Famigni</span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] tracking-wider uppercase text-ivory/70 hover:text-bronze-soft transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 border border-bronze/60 text-ivory hover:bg-bronze hover:border-bronze transition-all px-5 py-2.5 text-[12px] tracking-[0.22em] uppercase"
          >
            <MessageCircle className="size-4" />
            Book on WhatsApp
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="lg:hidden text-ivory p-2"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 bg-charcoal/95 backdrop-blur-xl ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-luxe py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-ivory/80 font-display text-2xl py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 bg-bronze text-ivory px-5 py-3 text-[12px] tracking-[0.22em] uppercase"
          >
            <MessageCircle className="size-4" />
            Book on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
