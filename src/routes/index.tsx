import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MessageCircle, ArrowRight, MapPin, Wifi, Plane, Car, Cigarette, BellRing,
  Wine, Coffee, Sun, Tv, Snowflake, Sparkles, Shirt, Clock, KeyRound,
  Cookie, PawPrint, Star, X, ChevronLeft, ChevronRight,
} from "lucide-react";
import { Navbar } from "@/components/hotel/Navbar";
import { Footer } from "@/components/hotel/Footer";
import { WhatsAppFab } from "@/components/hotel/WhatsAppFab";
import { useReveal } from "@/hooks/use-reveal";
import { HOTEL, waLink } from "@/lib/hotel";
import { useI18n, dict } from "@/lib/i18n";

import hero from "@/assets/hero-hotel.jpg";
import lobby from "@/assets/about-lobby.jpg";
import roomBlue from "@/assets/room-blue-suite.jpg";
import roomEmerald from "@/assets/room-emerald.jpg";
import roomAzure from "@/assets/room-azure.jpg";
import roomRoyal from "@/assets/room-royal.jpg";
import galBreakfast from "@/assets/gallery-breakfast.jpg";
import galBar from "@/assets/gallery-bar.jpg";
import galBath from "@/assets/gallery-bath.jpg";
import galDouala from "@/assets/gallery-douala.jpg";

type K = keyof typeof dict;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Famigni Hotel — Confort Premium à Douala, Cameroun" },
      { name: "description", content: "Famigni Hotel — un hôtel boutique raffiné à Douala, Cameroun. Chambres élégantes, service attentionné, réservation simple par WhatsApp." },
      { property: "og:title", content: "Famigni Hotel — Douala, Cameroun" },
      { property: "og:description", content: "Vivez un confort premium et la chaleur de l'hospitalité camerounaise au Famigni Hotel, Douala." },
      { property: "og:image", content: hero },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Index,
});

const rooms: Array<{ img: string; nameK: K; tagK: K; descK: K; amenities: K[] }> = [
  { img: roomRoyal, nameK: "room.royal.name", tagK: "room.royal.tag", descK: "room.royal.desc", amenities: ["am.kingBed", "am.cityView", "am.smartTv", "am.miniBar"] },
  { img: roomEmerald, nameK: "room.emerald.name", tagK: "room.emerald.tag", descK: "room.emerald.desc", amenities: ["am.queenBed", "am.workspace", "am.netflix", "am.ac"] },
  { img: roomBlue, nameK: "room.azure.name", tagK: "room.azure.tag", descK: "room.azure.desc", amenities: ["am.twinBeds", "am.balcony", "am.fastWifi", "am.ac"] },
  { img: roomAzure, nameK: "room.cobalt.name", tagK: "room.cobalt.tag", descK: "room.cobalt.desc", amenities: ["am.queenBed", "am.smartTv", "am.roomService", "am.ac"] },
];

const amenities: Array<{ icon: typeof Wifi; key: K }> = [
  { icon: Wifi, key: "amen.wifi" },
  { icon: Plane, key: "amen.shuttle" },
  { icon: Car, key: "amen.parking" },
  { icon: Cigarette, key: "amen.nonSmoking" },
  { icon: BellRing, key: "amen.roomService" },
  { icon: Wine, key: "amen.bar" },
  { icon: Coffee, key: "amen.breakfast" },
  { icon: Sun, key: "amen.balconyRooms" },
  { icon: Tv, key: "amen.netflix" },
  { icon: Snowflake, key: "amen.airCond" },
  { icon: Sparkles, key: "amen.housekeeping" },
  { icon: Shirt, key: "amen.laundry" },
  { icon: Clock, key: "amen.reception" },
  { icon: KeyRound, key: "amen.carRental" },
  { icon: Cookie, key: "amen.snackBar" },
  { icon: PawPrint, key: "amen.pet" },
];

const testimonials: Array<{ name: string; roleK: K; textK: K }> = [
  { name: "Amélie K.", roleK: "test.t1.role", textK: "test.t1.text" },
  { name: "Kwame O.", roleK: "test.t2.role", textK: "test.t2.text" },
  { name: "Sophie & Marc", roleK: "test.t3.role", textK: "test.t3.text" },
];

const galleryImages = [
  { src: roomRoyal, span: "lg:row-span-2" },
  { src: galBar, span: "" },
  { src: galBreakfast, span: "lg:row-span-2" },
  { src: roomEmerald, span: "" },
  { src: galBath, span: "" },
  { src: galDouala, span: "lg:col-span-2" },
];

function Index() {
  useReveal();
  const { t, lang } = useI18n();
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? 0 : (i + 1) % galleryImages.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? 0 : (i - 1 + galleryImages.length) % galleryImages.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <WhatsAppFab />

      {/* HERO */}
      <section id="stay" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img src={hero} alt={t("hero.alt")} className="absolute inset-0 h-full w-full object-cover hero-kenburns" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/30 to-charcoal/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.18_0.008_60_/_0.55)_100%)]" />

        <div className="relative z-10 h-full container-luxe flex flex-col justify-end pb-24 md:pb-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 reveal">
              <span className="h-px w-10 bg-bronze" />
              <span className="eyebrow">{t("hero.eyebrow")}</span>
            </div>
            <h1 className="font-display text-ivory text-[clamp(2.6rem,7vw,5.5rem)] leading-[1.02] tracking-tight text-balance reveal">
              {t("hero.title1")}<em className="italic text-bronze-soft">{t("hero.titleEm")}</em>{t("hero.title2")}
            </h1>
            <p className="mt-6 text-ivory/75 text-base md:text-lg max-w-xl reveal">{t("hero.sub")}</p>
            <div className="mt-9 flex flex-wrap gap-4 reveal">
              <a href={waLink(t("wa.default"))} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 bg-bronze text-ivory px-7 py-4 text-[12px] tracking-[0.28em] uppercase hover:bg-bronze-soft transition-colors">
                <MessageCircle className="size-4" />
                {t("nav.bookWa")}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#rooms" className="inline-flex items-center gap-3 border border-ivory/30 text-ivory px-7 py-4 text-[12px] tracking-[0.28em] uppercase hover:bg-ivory/10 transition-colors">
                {t("hero.exploreRooms")}
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.4em] uppercase text-ivory/60">{t("hero.scroll")}</span>
          <div className="relative h-10 w-px bg-ivory/20 overflow-hidden">
            <span className="absolute inset-x-0 top-0 h-3 bg-bronze scroll-dot" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-36">
        <div className="container-luxe grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="relative">
              <img src={lobby} alt={t("about.lobbyAlt")} className="w-full aspect-[4/5] object-cover" loading="lazy" />
              <div className="absolute -bottom-8 -right-4 md:-right-10 bg-charcoal text-ivory p-7 max-w-[260px] shadow-[var(--shadow-soft)]">
                <div className="font-display text-4xl text-bronze-soft">12+</div>
                <div className="text-xs tracking-[0.22em] uppercase text-ivory/70 mt-1">{t("about.years")}</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:pl-10 reveal">
            <div className="eyebrow mb-5">{t("about.eyebrow")}</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">{t("about.title")}</h2>
            <div className="hairline w-24 my-8" />
            <p className="text-muted-foreground leading-relaxed text-lg">{t("about.p1")}</p>
            <p className="text-muted-foreground leading-relaxed mt-5">{t("about.p2")}</p>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "24/7", vK: "about.concierge" as K },
                { k: "100%", vK: "about.ac" as K },
                { k: "★★★★", vK: "about.rated" as K },
              ].map((s) => (
                <div key={s.vK}>
                  <div className="font-display text-3xl text-bronze">{s.k}</div>
                  <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">{t(s.vK)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section id="rooms" className="py-24 md:py-36 bg-secondary/40">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal">
            <div>
              <div className="eyebrow mb-4">{t("rooms.eyebrow")}</div>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-2xl text-balance">{t("rooms.title")}</h2>
            </div>
            <p className="text-muted-foreground max-w-md">{t("rooms.lead")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {rooms.map((r, i) => {
              const name = t(r.nameK);
              return (
                <article key={r.nameK} className="group reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="relative overflow-hidden aspect-[4/3] bg-charcoal">
                    <img src={r.img} alt={name} loading="lazy" className="img-zoom h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                    <div className="absolute top-5 left-5 bg-ivory/90 backdrop-blur px-3 py-1.5 text-[10px] tracking-[0.28em] uppercase text-charcoal">
                      {t(r.tagK)}
                    </div>
                  </div>
                  <div className="pt-6 flex flex-col gap-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-3xl">{name}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{t(r.descK)}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {r.amenities.map((a) => (
                        <span key={a} className="text-[11px] tracking-[0.18em] uppercase text-charcoal-soft border border-border px-3 py-1.5">
                          {t(a)}
                        </span>
                      ))}
                    </div>
                    <a
                      href={waLink(`${t("wa.room")} ${name}.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-2 self-start text-[12px] tracking-[0.28em] uppercase text-charcoal border-b border-bronze pb-1 hover:gap-4 transition-all"
                    >
                      <MessageCircle className="size-4 text-bronze" /> {t("rooms.reserve")}
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section id="amenities" className="py-24 md:py-36">
        <div className="container-luxe">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <div className="eyebrow mb-4">{t("amenities.eyebrow")}</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] text-balance">{t("amenities.title")}</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-border">
            {amenities.map((a, i) => (
              <div key={a.key} className="bg-background px-6 py-10 flex flex-col items-center text-center gap-4 hover:bg-secondary/60 transition-colors reveal" style={{ transitionDelay: `${i * 30}ms` }}>
                <a.icon className="size-6 text-bronze" strokeWidth={1.4} />
                <div className="text-sm tracking-wider">{t(a.key)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 md:py-36 bg-charcoal text-ivory">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 reveal">
            <div>
              <div className="eyebrow mb-4">{t("gallery.eyebrow")}</div>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.1] text-ivory text-balance">{t("gallery.title")}</h2>
            </div>
            <p className="text-ivory/60 max-w-md">{t("gallery.lead")}</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-3">
            {galleryImages.map((g, i) => (
              <button key={i} onClick={() => setLightbox(i)} className={`group relative overflow-hidden ${g.span} reveal`} style={{ transitionDelay: `${i * 50}ms` }}>
                <img src={g.src} alt="" loading="lazy" className="img-zoom h-full w-full object-cover" />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors" />
              </button>
            ))}
          </div>
        </div>

        {lightbox !== null && (
          <div className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-ivory/80 hover:text-ivory" aria-label={t("gallery.close")}>
              <X className="size-7" />
            </button>
            <button onClick={() => setLightbox((i) => (i === null ? 0 : (i - 1 + galleryImages.length) % galleryImages.length))} className="absolute left-4 md:left-8 text-ivory/70 hover:text-ivory" aria-label={t("gallery.prev")}>
              <ChevronLeft className="size-10" />
            </button>
            <img src={galleryImages[lightbox].src} alt="" className="max-h-[85vh] max-w-[90vw] object-contain" />
            <button onClick={() => setLightbox((i) => (i === null ? 0 : (i + 1) % galleryImages.length))} className="absolute right-4 md:right-8 text-ivory/70 hover:text-ivory" aria-label={t("gallery.next")}>
              <ChevronRight className="size-10" />
            </button>
          </div>
        )}
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-36">
        <div className="container-luxe">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <div className="eyebrow mb-4">{t("test.eyebrow")}</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] text-balance">{t("test.title")}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((tm, i) => (
              <figure key={tm.name} className="bg-card p-8 md:p-10 border border-border shadow-[var(--shadow-card)] flex flex-col gap-6 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex gap-1 text-bronze">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="size-4 fill-bronze" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="font-display text-xl md:text-2xl leading-snug text-foreground">
                  “{t(tm.textK)}”
                </blockquote>
                <figcaption className="mt-auto pt-4 border-t border-border">
                  <div className="font-medium">{tm.name}</div>
                  <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">{t(tm.roleK)}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="py-24 md:py-36 bg-secondary/40">
        <div className="container-luxe grid lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-5 reveal flex flex-col justify-center">
            <div className="eyebrow mb-4">{t("loc.eyebrow")}</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] text-balance">{t("loc.title")}</h2>
            <div className="hairline w-24 my-8" />
            <p className="text-muted-foreground leading-relaxed">{t("loc.lead")}</p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { k: "15 min", vK: "loc.airport" as K },
                { k: "5 min", vK: "loc.center" as K },
                { k: "10 min", vK: "loc.river" as K },
                { k: "2 min", vK: "loc.cafes" as K },
              ].map((p) => (
                <div key={p.vK} className="bg-background border border-border p-5">
                  <div className="font-display text-2xl text-bronze">{p.k}</div>
                  <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">{t(p.vK)}</div>
                </div>
              ))}
            </div>

            <a href={HOTEL.mapUrl} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-3 self-start bg-charcoal text-ivory px-6 py-3.5 text-[12px] tracking-[0.28em] uppercase hover:bg-charcoal-soft transition-colors">
              <MapPin className="size-4 text-bronze-soft" /> {t("loc.openMaps")}
            </a>
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden border border-border shadow-[var(--shadow-card)]">
              <iframe
                title="Famigni Hotel location"
                src="https://www.google.com/maps?q=Douala+Cameroon&output=embed"
                className="absolute inset-0 h-full w-full grayscale-[30%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative py-24 md:py-32 bg-charcoal text-ivory overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="container-luxe relative text-center max-w-3xl mx-auto reveal">
          <div className="eyebrow text-bronze-soft mb-4">{t("cta.eyebrow")}</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            {t("cta.title1")}<em className="italic text-bronze-soft">{t("cta.titleEm")}</em>
          </h2>
          <p className="mt-5 text-ivory/70 max-w-xl mx-auto">{t("cta.lead")}</p>
          <a href={waLink(t("wa.default"))} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-3 bg-bronze text-ivory px-8 py-4 text-[12px] tracking-[0.28em] uppercase hover:bg-bronze-soft transition-colors">
            <MessageCircle className="size-4" /> {t("cta.book")}
          </a>
        </div>
      </section>

      <Footer />
      {/* lang sentinel for re-render */}
      <span className="hidden" data-lang={lang} />
    </div>
  );
}
