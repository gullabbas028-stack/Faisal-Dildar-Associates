export const PHONE_DISPLAY = "+92 281449404";
export const PHONE_RAW = "+92281449404";
export const WHATSAPP_NUMBER = "+92281449404";
export const EMAIL = "jamfaisal@gmail.com";
export const ADDRESS_LINE_1 = "Lahore main multan Road";
export const ADDRESS_LINE_2 = "Ali housing socity Lahore";

/** Build a WhatsApp deep link that opens a chat with the owner. */
export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Open WhatsApp chat with the owner in a new tab. */
export function openWhatsApp(message: string): void {
  window.open(waLink(message), "_blank", "noopener,noreferrer");
}

export const telLink = `tel:${PHONE_RAW}`;
export const mailLink = `mailto:${EMAIL}`;

export type Property = {
  id: number;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  tag: string;
  category: "Residential" | "Commercial" | "Luxury Villas" | "Apartments";
  image: string;
};

export const properties: Property[] = [
  {
    id: 1,
    title: "The Grand Residence",
    location: "New York, NY",
    price: "$1,250,000",
    beds: 4,
    baths: 3,
    area: "2,400 sq ft",
    tag: "Residential",
    category: "Residential",
    image: "/images/hero-main.jpg",
  },
  {
    id: 2,
    title: "Skyline Penthouse",
    location: "Miami, FL",
    price: "$2,450,000",
    beds: 3,
    baths: 3,
    area: "3,100 sq ft",
    tag: "Luxury",
    category: "Apartments",
    image: "/images/prop-skyline.jpg",
  },
  {
    id: 3,
    title: "Oakwood Villa",
    location: "Austin, TX",
    price: "$895,000",
    beds: 5,
    baths: 4,
    area: "4,050 sq ft",
    tag: "Villa",
    category: "Luxury Villas",
    image: "/images/hero-pool.jpg",
  },
  {
    id: 4,
    title: "Harbor View Estate",
    location: "San Diego, CA",
    price: "$1,850,000",
    beds: 4,
    baths: 4,
    area: "3,600 sq ft",
    tag: "Estate",
    category: "Luxury Villas",
    image: "/images/prop-harbor.jpg",
  },
  {
    id: 5,
    title: "Modern Heights",
    location: "Los Angeles, CA",
    price: "$740,000",
    beds: 3,
    baths: 2,
    area: "1,950 sq ft",
    tag: "Residential",
    category: "Residential",
    image: "/images/prop-modern.jpg",
  },
  {
    id: 6,
    title: "The Meridian",
    location: "Chicago, IL",
    price: "$1,600,000",
    beds: 6,
    baths: 5,
    area: "5,200 sq ft",
    tag: "Commercial",
    category: "Commercial",
    image: "/images/prop-commercial.jpg",
  },
];

export const posts = [
  {
    day: "12",
    month: "SEP",
    category: "Buying Guide",
    title: "5 Things to Consider Before Buying Your First Luxury Home",
    excerpt:
      "Buying your first luxury home is an exciting milestone. Here are 5 key things to consider before you sign anything.",
    image: "/images/about-villa.jpg",
  },
  {
    day: "08",
    month: "SEP",
    category: "Investment",
    title: "How Smart Investors Choose High-Growth Locations",
    excerpt:
      "Location can make or break your investment. Here's how smart investors pick the right areas before the market does.",
    image: "/images/prop-skyline.jpg",
  },
  {
    day: "02",
    month: "SEP",
    category: "Architecture",
    title: "Modern Architecture Trends Shaping Luxury Real Estate",
    excerpt:
      "From sustainable design to smart homes, explore the latest trends in luxury real estate architecture today.",
    image: "/images/prop-modern.jpg",
  },
];
