export const profile = {
  name: "Spandan Chemburkar",
  role: "Full-Stack Developer",
  location: "Mumbai, India",
  email: "hello@spandanch.dev",
  github: "https://github.com/spandanch",
  linkedin: "https://www.linkedin.com/in/spandanch",
  availability: "Available for opportunities",
  intro:
    "I build robust backend systems and clean, user-centric interfaces with Node.js, React and TypeScript.",
} as const;

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  overview: string;
  highlights: string[];
  stack: string[];
  category: string;
  year: string;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    slug: "lekha-lifters",
    title: "Lekha Lifters",
    tagline: "Crane rental & fleet management, end to end",
    description:
      "A commercial website for crane rentals and fleet management that handles real-time equipment booking, availability, and secure online payments.",
    overview:
      "Lekha Lifters is a full commercial platform for a crane rental business: customers browse the fleet, check live availability, and reserve equipment with secure online payments, while the operator manages bookings and fleet status from a single dashboard. The backend is built on Node.js and Express with PostgreSQL for reliable transactional data, and the booking flow is designed to keep availability accurate in real time even under overlapping enquiries.",
    highlights: [
      "Real-time equipment booking with live availability",
      "Secure online payments through an integrated gateway",
      "Fleet management dashboard for operators",
    ],
    stack: ["Node.js", "Express", "React", "PostgreSQL", "Payment Gateway"],
    category: "Web Platform",
    year: "2025",
    image: "/images/lekha-lifters.png",
    imageAlt: "Lekha Lifters crane rental booking website on a laptop",
  },
  {
    slug: "ai-chatbot-for-college-university",
    title: "AI Chatbot for College & University",
    tagline: "A conversational campus assistant",
    description:
      "A conversational campus assistant designed to help new and prospective students retrieve syllabus info, admissions guidance, and university details directly without manually browsing multiple pages.",
    overview:
      "This assistant turns a university's scattered pages into a single conversation. Students ask about syllabus structure, admission steps, or campus details and get direct answers grounded in the institution's own material. A Python service pairs an LLM with vector search over the university's documents, so responses stay relevant and specific instead of generic, while a React front end keeps the exchange fast and friendly.",
    highlights: [
      "Grounded answers over university documents via vector search",
      "Admissions, syllabus and campus guidance in one chat",
      "Removes the need to browse dozens of pages manually",
    ],
    stack: ["Node.js", "Python", "React", "LLM API", "Vector Search"],
    category: "AI Assistant",
    year: "2024",
    image: "/images/ai-chatbot.png",
    imageAlt: "University AI chatbot conversation interface",
  },
  {
    slug: "forensic-core",
    title: "Forensic Core",
    tagline: "Secure data erasure & advanced file recovery",
    description:
      "An Integrated Secure Data Erasure & Advanced File Recovery Tool providing low-level standards-compliant disk sanitization and deep deleted file recovery.",
    overview:
      "Forensic Core combines two demanding disciplines in one desktop tool: standards-compliant low-level disk sanitization, and deep recovery of deleted files from damaged file systems. The erasure module wipes drives to recognised standards with verifiable reports, while the recovery engine reconstructs deleted data by reading at the sector level. A React interface presents scans, sector maps and progress in a way operators can trust at a glance.",
    highlights: [
      "Standards-compliant, verifiable disk sanitization",
      "Deep deleted-file recovery at the sector level",
      "Live sector maps and scan dashboards",
    ],
    stack: ["Node.js", "React", "File System APIs", "System Internals"],
    category: "Desktop Tool",
    year: "2024",
    image: "/images/forensic-core.png",
    imageAlt: "Forensic Core data erasure and recovery dashboard",
  },
  {
    slug: "shobdoprakashini",
    title: "Shobdoprakashini",
    tagline: "An e-commerce platform for books",
    description:
      "An e-commerce platform built for books during an internship experience with YA.",
    overview:
      "Shobdoprakashini is a book e-commerce platform built during an internship with YA. It covers the full shopping journey — browsing the catalogue, product pages, cart and checkout — on a React front end backed by Node.js, Express and a relational database. The project sharpened a practical, shipping-first approach to commerce features: clean data models, dependable order flow and a reading experience that feels warm rather than transactional.",
    highlights: [
      "Full catalogue-to-checkout shopping flow",
      "React storefront backed by Express APIs",
      "Built during an internship with YA",
    ],
    stack: ["React", "Node.js", "Express", "Database"],
    category: "E-commerce",
    year: "2023",
    image: "/images/shobdoprakashini.png",
    imageAlt: "Shobdoprakashini online bookstore storefront",
  },
];

export const projectCategories = [
  "All",
  "Web Platform",
  "AI Assistant",
  "Desktop Tool",
  "E-commerce",
] as const;

export const skillGroups = [
  {
    label: "Frontend",
    icon: "layout",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    icon: "server",
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    label: "Databases",
    icon: "database",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    label: "Tools",
    icon: "terminal",
    skills: ["Docker", "Git", "Vercel"],
  },
] as const;

export const certificates = [
  {
    title: "AWS Certified Developer — Associate",
    issuer: "Amazon Web Services",
    year: "2025",
    note: "Cloud-native development on AWS services.",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta · Coursera",
    year: "2024",
    note: "Professional certificate in modern front-end development.",
  },
  {
    title: "Associate Developer (Node.js & MongoDB)",
    issuer: "MongoDB University",
    year: "2024",
    note: "Data modeling and application development with MongoDB.",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2023",
    note: "Accessibility-first, responsive interface fundamentals.",
  },
] as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/certificates", label: "Certificates" },
] as const;
