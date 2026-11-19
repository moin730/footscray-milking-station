export const site = {
  name: "Footscray Milking Station",
  short: "FMS",
  url: "https://footscraymilkingstation.com.au",
  tagline: "Serving up Padre Coffee & tasty food",
  phone: { label: "0411 733 222", href: "tel:+61411733222" },
  email: "footscraymilkingstation3011@gmail.com",
  address: {
    street: "35 Bunbury St",
    suburb: "Footscray",
    state: "VIC",
    postcode: "3011",
    corner: "Corner of Bunbury & Cowper Streets",
  },
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=Footscray+Milking+Station+35+Bunbury+St+Footscray+VIC+3011",
  orderHref:
    "https://www.ubereats.com/au/store/footscray-milking-station/GRpw_UT9RQGRpzEvx6O5eA",
  instagram: {
    label: "@footscraymilkingstation",
    href: "https://www.instagram.com/footscraymilkingstation/",
  },
  facebook: { label: "milkingstation3011", href: "https://www.facebook.com/milkingstation3011" },
  padre: "https://www.padrecoffee.com.au/",
} as const;

export const hours = [
  { day: "Monday", short: "Mon", open: "06:30", close: "14:30" },
  { day: "Tuesday", short: "Tue", open: "06:30", close: "14:30" },
  { day: "Wednesday", short: "Wed", open: "06:30", close: "14:30" },
  { day: "Thursday", short: "Thu", open: "06:30", close: "14:30" },
  { day: "Friday", short: "Fri", open: "06:30", close: "14:30" },
  { day: "Saturday", short: "Sat", open: "06:30", close: "14:30" },
  { day: "Sunday", short: "Sun", open: "07:30", close: "14:30" },
] as const;

export const ratings = [
  { score: "4.8", source: "Uber Eats", detail: "1,000+ ratings" },
  { score: "4.7", source: "OpenTable", detail: "17 diners" },
  { score: "4.3", source: "Google", detail: "718 reviews" },
] as const;

/** The sections on the cafe's Uber Eats menu. */
export const menuSections = [
  "Breakfast",
  "Toaster",
  "Lunch",
  "Sweets & Pastry",
  "Coffee",
  "Cold Drinks",
  "Retail Shop",
] as const;

/** Top sellers. Prices from Uber Eats; items without a listed price show a note instead. */
export const topSellers = [
  {
    name: "Eggs Your Way",
    price: "$10",
    note: "Poached, fried or scrambled on toast. Your call.",
  },
  {
    name: "H&C Croissant",
    price: "$11",
    note: "Ham and cheese in a buttery croissant, warmed through.",
  },
  {
    name: "Salmon Bagel",
    price: "$14.50",
    note: "Smoked salmon piled into a toasted bagel.",
  },
  {
    name: "BLT",
    price: "$18",
    note: "Bacon, lettuce and tomato. The classic, done properly.",
  },
  {
    name: "Hash Browns",
    price: "Add on",
    note: "Golden and crunchy. Order them with everything.",
  },
  {
    name: "Pork Shoulder Focaccia",
    price: "Signature",
    note: "Slow-roasted pork, honey truffle mayo, salsa verde, apple fennel slaw, Parmesan.",
  },
] as const;

export const tickerItems = [
  "Padre Coffee on the Slayer",
  "Fresh milk since 2012",
  "35 Bunbury St, Footscray",
  "Dogs welcome in the courtyard",
  "Vegan & gluten-free options",
] as const;

/** From the cafe's listing: services, amenities and access. */
export const goodToKnow = [
  "Dine-in & takeaway",
  "Dogs welcome",
  "Kids welcome",
  "Vegan & GF options",
] as const;
