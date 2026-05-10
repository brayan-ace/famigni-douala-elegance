import { MessageCircle, MapPin, Phone, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/famigni-logo.png";
import { HOTEL, waLink } from "@/lib/hotel";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t, lang } = useI18n();
  const navItems: Array<{ href: string; key: Parameters<typeof t>[0] }> = [
    { href: "#stay", key: "nav.stay" },
    { href: "#rooms", key: "nav.rooms" },
    { href: "#amenities", key: "nav.amenities" },
    { href: "#gallery", key: "nav.gallery" },
    { href: "#location", key: "nav.location" },
  ];

  return (
    <footer className="bg-charcoal text-ivory/80">
      <div className="container-luxe py-20 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Famigni Hotel" className="h-12 w-12 brightness-0 invert opacity-90" />
            <div>
              <div className="font-display text-2xl text-ivory">Famigni Hotel</div>
              <div className="text-[11px] tracking-[0.3em] uppercase text-bronze-soft">
                {lang === "fr" ? HOTEL.cityFr : HOTEL.city}
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-ivory/60 max-w-sm">{t("footer.tagline")}</p>
          <a
            href={waLink(t("wa.default"))}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-bronze/60 px-5 py-3 text-[11px] tracking-[0.28em] uppercase hover:bg-bronze transition-colors"
          >
            <MessageCircle className="size-4" /> {t("footer.reserveWa")}
          </a>
        </div>

        <div className="lg:col-span-3">
          <div className="eyebrow mb-5">{t("footer.explore")}</div>
          <ul className="space-y-3 text-sm">
            {navItems.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-bronze-soft transition-colors">{t(l.key)}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="eyebrow mb-5">{t("footer.contact")}</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3"><MapPin className="size-4 mt-0.5 text-bronze-soft" /> {lang === "fr" ? HOTEL.cityFr : HOTEL.city}</li>
            <li className="flex items-start gap-3"><Phone className="size-4 mt-0.5 text-bronze-soft" /> +237 678 671 889</li>
            <li className="flex items-start gap-3"><MessageCircle className="size-4 mt-0.5 text-bronze-soft" /> {t("footer.wa247")}</li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="eyebrow mb-5">{t("footer.follow")}</div>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="size-10 grid place-items-center border border-white/10 hover:border-bronze hover:text-bronze-soft transition-colors"><Instagram className="size-4" /></a>
            <a href="#" aria-label="Facebook" className="size-10 grid place-items-center border border-white/10 hover:border-bronze hover:text-bronze-soft transition-colors"><Facebook className="size-4" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-luxe py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ivory/50">
          <div>© {new Date().getFullYear()} Famigni Hotel. {t("footer.rights")}</div>
          <div className="tracking-[0.22em] uppercase">{t("footer.crafted")}</div>
        </div>
      </div>
    </footer>
  );
}
