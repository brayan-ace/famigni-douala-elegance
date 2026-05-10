import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "fr" | "en";

type Dict = Record<string, { fr: string; en: string }>;

export const dict = {
  // Nav
  "nav.stay": { fr: "Séjour", en: "Stay" },
  "nav.about": { fr: "À propos", en: "About" },
  "nav.rooms": { fr: "Chambres", en: "Rooms" },
  "nav.amenities": { fr: "Services", en: "Amenities" },
  "nav.gallery": { fr: "Galerie", en: "Gallery" },
  "nav.location": { fr: "Adresse", en: "Location" },
  "nav.bookWa": { fr: "Réserver sur WhatsApp", en: "Book on WhatsApp" },

  // Hero
  "hero.eyebrow": { fr: "Douala · Cameroun", en: "Douala · Cameroon" },
  "hero.title1": { fr: "Vivez le ", en: "Experience premium " },
  "hero.titleEm": { fr: "confort", en: "comfort" },
  "hero.title2": { fr: " d'exception au cœur de Douala.", en: " in the heart of Douala." },
  "hero.sub": {
    fr: "Un hôtel boutique où design soigné, service attentionné et chaleur camerounaise se rencontrent — pour un séjour naturellement raffiné.",
    en: "A boutique hotel where considered design, attentive service, and Cameroonian warmth come together — for a stay that feels effortlessly elevated.",
  },
  "hero.exploreRooms": { fr: "Découvrir les chambres", en: "Explore Rooms" },
  "hero.scroll": { fr: "Défiler", en: "Scroll" },
  "hero.alt": { fr: "Façade de l'hôtel Famigni au crépuscule à Douala", en: "Famigni Hotel facade at dusk in Douala" },

  // About
  "about.eyebrow": { fr: "Notre Histoire", en: "Our Story" },
  "about.title": {
    fr: "Une arrivée tout en sérénité, au rythme de la ville.",
    en: "A quiet sense of arrival, in the rhythm of the city.",
  },
  "about.p1": {
    fr: "Niché à un emplacement stratégique de Douala, Famigni Hotel a été conçu comme un contrepoint paisible à l'énergie de la ville. Nos espaces marient élégance discrète, matières naturelles, lumière douce et détails étudiés qui invitent à ralentir.",
    en: "Set within a strategic corner of Douala, Famigni Hotel was conceived as a calm counterpoint to the city's energy. Our spaces are styled with restrained elegance — natural materials, soft lighting, and considered details that invite you to slow down.",
  },
  "about.p2": {
    fr: "Dès le seuil franchi, vous êtes accueilli par une équipe qui anticipe plutôt que réagit — discrètement attentive à votre confort, pour un séjour aussi fluide que mémorable.",
    en: "From the moment you step through our doors, you are greeted by a team that anticipates rather than reacts — quietly attending to every comfort, so your stay feels as effortless as it is memorable.",
  },
  "about.years": { fr: "Années d'hospitalité raffinée", en: "Years of refined hospitality" },
  "about.concierge": { fr: "Conciergerie", en: "Concierge" },
  "about.ac": { fr: "Climatisé", en: "Air-conditioned" },
  "about.rated": { fr: "Noté par les clients", en: "Guest rated" },
  "about.lobbyAlt": { fr: "Lobby intérieur de Famigni Hotel", en: "Famigni Hotel lobby interior" },

  // Rooms
  "rooms.eyebrow": { fr: "Chambres & Suites", en: "Rooms & Suites" },
  "rooms.title": {
    fr: "Des espaces pensés pour le repos, conçus pour la mémoire.",
    en: "Spaces shaped for rest, designed for memory.",
  },
  "rooms.lead": {
    fr: "Chaque chambre de Famigni est une retraite privée — palettes apaisantes, textures délicates et attention au détail réservée aux plus belles adresses du monde.",
    en: "Every room at Famigni is a private retreat — calm palettes, layered textures, and the kind of details usually reserved for the world's most considered hotels.",
  },
  "rooms.reserve": { fr: "Réserver cette chambre", en: "Reserve this room" },

  "room.royal.name": { fr: "Suite Royale", en: "Royal Suite" },
  "room.royal.tag": { fr: "Lit King · 32 m²", en: "King bed · 32 m²" },
  "room.royal.desc": {
    fr: "Un sanctuaire spacieux aux détails de velours, baigné de lumière naturelle, avec un coin salon privé.",
    en: "An expansive sanctuary with plush velvet detailing, soft natural light, and a private lounge corner.",
  },
  "room.emerald.name": { fr: "Chambre Émeraude", en: "Emerald Room" },
  "room.emerald.tag": { fr: "Lit Queen · 26 m²", en: "Queen bed · 26 m²" },
  "room.emerald.desc": {
    fr: "Tons émeraude chaleureux et linge croustillant pour des nuits paisibles.",
    en: "Warm emerald tones and crisp linens create a serene space designed for restful nights.",
  },
  "room.azure.name": { fr: "Twin Azur", en: "Azure Twin" },
  "room.azure.tag": { fr: "Lits jumeaux · 28 m²", en: "Twin beds · 28 m²" },
  "room.azure.desc": {
    fr: "Une retraite twin lumineuse aux accents cinématographiques — idéale pour amis et voyageurs d'affaires.",
    en: "A bright twin retreat with cinematic accents — ideal for friends and business travellers.",
  },
  "room.cobalt.name": { fr: "Cobalt Deluxe", en: "Cobalt Deluxe" },
  "room.cobalt.tag": { fr: "Lit Queen · 24 m²", en: "Queen bed · 24 m²" },
  "room.cobalt.desc": {
    fr: "Confort raffiné dans une palette bleue cinématographique, smart TV et service de couverture signature.",
    en: "Refined comfort with a cinematic blue palette, smart TV and signature turndown service.",
  },

  // Amenity labels
  "am.kingBed": { fr: "Lit King", en: "King Bed" },
  "am.queenBed": { fr: "Lit Queen", en: "Queen Bed" },
  "am.twinBeds": { fr: "Lits jumeaux", en: "Twin Beds" },
  "am.cityView": { fr: "Vue ville", en: "City View" },
  "am.smartTv": { fr: "Smart TV", en: "Smart TV" },
  "am.miniBar": { fr: "Mini-bar", en: "Mini Bar" },
  "am.workspace": { fr: "Bureau", en: "Workspace" },
  "am.netflix": { fr: "Netflix", en: "Netflix" },
  "am.ac": { fr: "Climatisation", en: "AC" },
  "am.balcony": { fr: "Balcon", en: "Balcony" },
  "am.fastWifi": { fr: "Wi-Fi rapide", en: "Fast Wi-Fi" },
  "am.roomService": { fr: "Service en chambre", en: "Room Service" },

  // Amenities section
  "amenities.eyebrow": { fr: "Services & Équipements", en: "Services & Amenities" },
  "amenities.title": { fr: "Tout est pensé, rien n'est superflu.", en: "Everything considered, nothing overdone." },
  "amen.wifi": { fr: "Wi-Fi gratuit", en: "Free Wi-Fi" },
  "amen.shuttle": { fr: "Navette aéroport", en: "Airport Shuttle" },
  "amen.parking": { fr: "Parking gratuit", en: "Free Parking" },
  "amen.nonSmoking": { fr: "Non-fumeur", en: "Non-Smoking" },
  "amen.roomService": { fr: "Service en chambre", en: "Room Service" },
  "amen.bar": { fr: "Bar", en: "Bar" },
  "amen.breakfast": { fr: "Petit-déjeuner", en: "Breakfast" },
  "amen.balconyRooms": { fr: "Chambres avec balcon", en: "Balcony Rooms" },
  "amen.netflix": { fr: "Netflix", en: "Netflix" },
  "amen.airCond": { fr: "Climatisation", en: "Air Conditioning" },
  "amen.housekeeping": { fr: "Ménage quotidien", en: "Daily Housekeeping" },
  "amen.laundry": { fr: "Service de blanchisserie", en: "Laundry Service" },
  "amen.reception": { fr: "Réception 24/7", en: "24/7 Reception" },
  "amen.carRental": { fr: "Location de voiture", en: "Car Rental" },
  "amen.snackBar": { fr: "Snack-bar", en: "Snack Bar" },
  "amen.pet": { fr: "Animaux acceptés", en: "Pet Friendly" },

  // Gallery
  "gallery.eyebrow": { fr: "Galerie", en: "Gallery" },
  "gallery.title": { fr: "Aperçus de la vie à Famigni.", en: "Glimpses of life at Famigni." },
  "gallery.lead": {
    fr: "Un voyage visuel à travers nos espaces — de la première lumière du lobby au calme d'un lit ouvert pour la nuit.",
    en: "A visual journey through our spaces — from the lobby's first light to the quiet of a turned-down bed.",
  },
  "gallery.close": { fr: "Fermer", en: "Close" },
  "gallery.prev": { fr: "Précédent", en: "Previous" },
  "gallery.next": { fr: "Suivant", en: "Next" },

  // Testimonials
  "test.eyebrow": { fr: "Voix des clients", en: "Guest Voices" },
  "test.title": { fr: "Les mots de ceux qui ont séjourné.", en: "Words from those who've stayed." },
  "test.t1.text": {
    fr: "Check-in fluide, chambres magnifiquement stylisées et l'accueil le plus chaleureux que j'aie reçu en Afrique centrale. Famigni se sent comme à la maison — en plus raffiné.",
    en: "Effortless check-in, beautifully styled rooms, and the warmest welcome I've received in Central Africa. Famigni feels like home — only more refined.",
  },
  "test.t1.role": { fr: "Voyageuse d'affaires, Paris", en: "Business Traveller, Paris" },
  "test.t2.text": {
    fr: "L'attention au détail est exquise. Chambres calmes, Wi-Fi rapide, et un bar qui clôt parfaitement la journée. Mon nouveau repère à Douala.",
    en: "The attention to detail is exquisite. Quiet rooms, fast Wi-Fi, and a bar that closes the day perfectly. My new go-to in Douala.",
  },
  "test.t2.role": { fr: "Entrepreneur, Accra", en: "Entrepreneur, Accra" },
  "test.t3.text": {
    fr: "Venus pour un week-end, restés cinq nuits. Intérieurs cinématographiques, personnel attentif, et un emplacement qui ouvre la ville à vous.",
    en: "We came for a weekend, stayed five nights. Cinematic interiors, attentive staff, and a location that opens the city to you.",
  },
  "test.t3.role": { fr: "Couple, Lyon", en: "Couple, Lyon" },

  // Location
  "loc.eyebrow": { fr: "Adresse", en: "Location" },
  "loc.title": { fr: "Au centre de tout ce que Douala offre.", en: "At the centre of everything Douala offers." },
  "loc.lead": {
    fr: "Idéalement situé pour les affaires comme pour les loisirs, Famigni vous place à quelques minutes du quartier d'affaires de Douala, des berges du Wouri et des meilleures tables.",
    en: "Strategically positioned for business and leisure, Famigni places you minutes from Douala's commercial district, riverside promenade, and finest dining.",
  },
  "loc.airport": { fr: "Aéroport int'l de Douala", en: "Douala Int'l Airport" },
  "loc.center": { fr: "Centre-ville", en: "City Centre" },
  "loc.river": { fr: "Berges du Wouri", en: "Wouri Riverside" },
  "loc.cafes": { fr: "Cafés & restaurants", en: "Cafés & Dining" },
  "loc.openMaps": { fr: "Ouvrir dans Google Maps", en: "Open in Google Maps" },

  // CTA
  "cta.eyebrow": { fr: "Réservations", en: "Reservations" },
  "cta.title1": { fr: "Votre suite vous attend. ", en: "Your suite is waiting. " },
  "cta.titleEm": { fr: "Préparons-la.", en: "Let's prepare it." },
  "cta.lead": {
    fr: "Échangez directement avec notre réception sur WhatsApp — confirmations rapides, recommandations personnelles, sans formulaires.",
    en: "Speak directly with our reception team on WhatsApp — fast confirmations, personal recommendations, no forms.",
  },
  "cta.book": { fr: "Réserver votre séjour", en: "Book your stay" },

  // Footer
  "footer.tagline": {
    fr: "Une retraite urbaine raffinée où l'hospitalité moderne rencontre la chaleur de l'élégance camerounaise.",
    en: "A refined city retreat where modern hospitality meets the warmth of Cameroonian elegance.",
  },
  "footer.reserveWa": { fr: "Réserver via WhatsApp", en: "Reserve via WhatsApp" },
  "footer.explore": { fr: "Explorer", en: "Explore" },
  "footer.contact": { fr: "Contact", en: "Contact" },
  "footer.follow": { fr: "Suivre", en: "Follow" },
  "footer.wa247": { fr: "WhatsApp 24/7", en: "WhatsApp 24/7" },
  "footer.rights": { fr: "Tous droits réservés.", en: "All rights reserved." },
  "footer.crafted": { fr: "Créé avec soin à Douala", en: "Crafted with care in Douala" },

  // Misc
  "fab.book": { fr: "Réserver", en: "Book Now" },
  "fab.aria": { fr: "Réserver via WhatsApp", en: "Book via WhatsApp" },

  // WhatsApp messages
  "wa.default": { fr: "Bonjour Famigni Hotel, je souhaite faire une réservation.", en: "Hello Famigni Hotel, I would like to make a reservation." },
  "wa.room": { fr: "Bonjour Famigni Hotel, je souhaite réserver", en: "Hello Famigni Hotel, I would like to book the" },
} satisfies Dict;

type Key = keyof typeof dict;

const I18nContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: Key) => string }>({
  lang: "fr",
  setLang: () => {},
  t: (k) => k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("famigni.lang") as Lang | null) : null;
    if (stored === "fr" || stored === "en") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("famigni.lang", l); } catch {}
  };

  const t = (k: Key) => dict[k]?.[lang] ?? k;

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
