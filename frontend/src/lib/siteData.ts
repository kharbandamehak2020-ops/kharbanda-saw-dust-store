export const brand = {
  name: "Kharbanda Saw Dust Store",
  kicker: "Pioneer in Wood Industry",
  tagline: "Where Wood Finds Purpose",
  established: "Trusted since 1974",
  founder: "Mr. Radha Kishan Kharbanda",
  currentGeneration: "Mr. Ashok Kumar Kharbanda",
  email: "kharbanda_saw_dust_store@yahoo.co.in",
  phones: ["+91 9999994828", "+91 8888882740", "+91 9999504828"],
  whatsapp: "919999994828",
  office: "K-11, Sawan Park, Ashok Vihar - Phase 3, Delhi - 110052, Near Picnic Hut, India",
  factory: "Plot No. 42, Industrial Estate Phase-II, Yamuna Nagar - 135001, Haryana, India",
};

const images = {
  hero: "https://images.unsplash.com/photo-1639038312723-75ba817ef552?auto=format&fit=crop&w=1800&q=80",
  factory: "https://images.unsplash.com/photo-1603517429984-1818bd866606?auto=format&fit=crop&w=1200&q=80",
  logs: "https://images.unsplash.com/photo-1634672652995-ee7525bce595?auto=format&fit=crop&w=1200&q=80",
  worker: "https://images.unsplash.com/photo-1673978483693-9e4be55b2a35?auto=format&fit=crop&w=1200&q=80",
  flakes: "https://images.unsplash.com/photo-1615195695780-bb72bdeda718?auto=format&fit=crop&w=1200&q=80",
  sawdust: "https://images.unsplash.com/photo-1786038607143-a3382cf01da6?auto=format&fit=crop&w=1200&q=80",
  powder: "https://images.unsplash.com/photo-1706719681305-24b498d6a394?auto=format&fit=crop&w=1200&q=80",
  preciseFlakes: "https://images.unsplash.com/photo-1589562760889-38898c71d3d8?auto=format&fit=crop&w=1200&q=80",
  preciseShavings: "https://images.unsplash.com/photo-1635513236798-6dbdc07e756e?auto=format&fit=crop&w=1200&q=80",
  cricketPitch: "https://images.pexels.com/photos/39045812/pexels-photo-39045812.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
  machinery: "https://images.unsplash.com/photo-1598299803204-b73796f43289?auto=format&fit=crop&w=1200&q=80",
  shavings: "https://images.unsplash.com/photo-1772207896656-4210003d65ee?auto=format&fit=crop&w=1200&q=80",
  processing: "https://images.unsplash.com/photo-1605146959272-0e97a1159b0f?auto=format&fit=crop&w=1200&q=80",
  electroplating: "https://images.unsplash.com/photo-1611023624193-31924e0e7d3c?auto=format&fit=crop&w=1200&q=80",
  providedBrand: "https://customer-assets-v7afamib.emergentagent.net/job_c7ccda9e-ed26-4ce7-8042-b68e79ec24f6/artifacts/e4pjasnu_WhatsApp%20Image%202026-08-28%20at%2009.40.43.jpeg",
  providedSawdust: "https://customer-assets-v7afamib.emergentagent.net/job_c7ccda9e-ed26-4ce7-8042-b68e79ec24f6/artifacts/lbg7kuka_WhatsApp%20Image%202026-09-02%20at%2011.57.58.jpeg",
  providedSacks: "https://customer-assets-v7afamib.emergentagent.net/job_c7ccda9e-ed26-4ce7-8042-b68e79ec24f6/artifacts/5ba0esi8_WhatsApp%20Image%202026-09-02%20at%2011.56.01.jpeg",
};

export const productImages = images;

export const products = [
  {
    id: "saw-dust",
    name: "Saw Dust",
    eyebrow: "Processed wood material",
    description: "Processed saw dust powder for buyers who need dependable material for industrial and commercial applications.",
    uses: ["Briquettes", "Biomass", "Mushroom cultivation", "Cricket grounds"],
    image: images.sawdust,
    alt: "Fine saw dust powder spread across a surface for industrial material inspection",
  },
  {
    id: "wood-powder",
    name: "Wood Powder",
    eyebrow: "Fine wood material",
    description: "Fine processed wood material for applications where particle character and consistency are discussed around the buyer’s process.",
    uses: ["Bakelite", "Mosquito coils", "WPCS", "Composites"],
    image: images.powder,
    alt: "Fine wood powder shown in close detail for industrial use",
  },
  {
    id: "wood-shavings",
    name: "Wood Shavings",
    eyebrow: "Light, absorbent shavings",
    description: "Processed wood shavings for industrial and commercial requirements, including bedding and material-handling uses.",
    uses: ["Animal bedding", "Packaging", "Spill control", "Agriculture"],
    image: images.preciseShavings,
    alt: "Fresh curled wood shavings in close detail",
  },
  {
    id: "wooden-flakes",
    name: "Wooden Flakes",
    eyebrow: "Coarser wood particles",
    description: "Wooden flakes for applications where a larger wood particle profile is required and agreed with the buyer.",
    uses: ["Flooring", "Particle boards", "Composites", "Industrial applications"],
    image: images.preciseFlakes,
    alt: "Coarse wooden flakes shown in close detail",
  },
];

export const applications = [
  { id: "bakelite", name: "Bakelite & Electrical Molding", description: "Wood-based material can be discussed for molding processes according to the buyer’s formulation and specifications.", image: images.machinery, product: "wood-powder" },
  { id: "mosquito-coils", name: "Mosquito Coil Manufacturing", description: "Processed wood material for coil manufacturing requirements, subject to application and material discussions.", image: images.processing, product: "wood-powder" },
  { id: "wpcs", name: "WPCS & Composites", description: "Wood material for wood-plastic composite and related composite applications where suitable grades are agreed.", image: images.logs, product: "wooden-flakes" },
  { id: "flooring", name: "Flooring & Panel Boards", description: "Wood particles for flooring, panel and board conversations across different wood qualities.", image: images.worker, product: "wooden-flakes" },
  { id: "electroplating", name: "Electroplating", description: "Discuss your process requirements with our team to explore the right wood material.", image: images.electroplating, product: "wood-powder" },
  { id: "briquettes", name: "Briquettes & Biomass", description: "Sawdust for briquettes and biomass applications, subject to the required material characteristics.", image: images.flakes, product: "saw-dust" },
  { id: "cricket-grounds", name: "Cricket Grounds", description: "Wood dust requirements for sports grounds can be discussed based on use and site requirements.", image: images.cricketPitch, product: "saw-dust" },
  { id: "petroleum", name: "Petroleum Industry", description: "Explore wood-based absorbent material options for petroleum and oil-related industrial use.", image: images.processing, product: "saw-dust" },
  { id: "many-more", name: "Many More Industries", description: "Have a different requirement? Tell us about your process, quantity and desired material.", image: images.factory, product: "saw-dust" },
];

export const gallery = [
  { image: images.providedSawdust, alt: "Kharbanda Saw Dust Store special packaging and supplied wood material", label: "Our special packaging" },
];

export const faqs = [
  { question: "What products does Kharbanda Saw Dust Store supply?", answer: "We process and supply saw dust, wood powder, wood shavings and wooden flakes for industrial and commercial requirements." },
  { question: "Do you supply sawdust in volume?", answer: "Yes. We discuss volume requirements with manufacturers, procurement teams, distributors and other business buyers." },
  { question: "Which wood species and qualities are available?", answer: "We deal in different wood species and qualities. Availability and suitability are discussed according to the application and buyer requirement." },
  { question: "Do you supply across India?", answer: "We serve business buyers across India. Share your location, quantity and intended application to begin a conversation." },
  { question: "Where is your factory located?", answer: "Our factory address is Plot No. 42, Industrial Estate Phase-II, Yamuna Nagar - 135001, Haryana, India." },
  { question: "How can I request a quotation?", answer: "Use the Request a Quote form or WhatsApp our team at +91 9999994828 with your requirement." },
];

export const stockImages = images;

export function whatsappUrl(message: string) {
  return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function defaultWhatsappMessage() {
  return "Hello Kharbanda Saw Dust Store, I would like to enquire about your wood dust products.";
}