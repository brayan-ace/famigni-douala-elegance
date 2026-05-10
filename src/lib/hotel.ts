export const HOTEL = {
  name: "Famigni Hotel",
  city: "Douala, Cameroon",
  cityFr: "Douala, Cameroun",
  whatsapp: "237678671889",
  mapUrl: "https://maps.app.goo.gl/w8Hnw1VGptXqJjtP9",
};

export const waLink = (msg = "Hello Famigni Hotel, I would like to make a reservation.") =>
  `https://wa.me/${HOTEL.whatsapp}?text=${encodeURIComponent(msg)}`;
