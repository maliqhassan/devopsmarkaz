import {
  CodeXml,
  Smartphone,
  Cloud,
  Palette,
  ShoppingCart,
  Lightbulb,
  Search,
  PenTool,
  Rocket,
  Workflow,
  ShieldCheck,
  Gauge,
  Users,
  Handshake,
  Target,
  Eye,
  Heart,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "DevOps Markaz Tech",
  legalName: "DevOps Markaz Tech Pvt. Ltd.",
  url: "https://devopsmarkaztech.com",
  tagline: "Empowering Businesses with Technology & Creativity",
  description:
    "DevOps Markaz Tech builds innovative software, scalable cloud solutions and digital experiences — custom software, web & mobile apps, Cloud & DevOps, UI/UX and e-commerce from Islamabad, Pakistan.",
  email: "info@devopsmarkaztech.com",
  phone: "+92 309 5310266",
  phoneHref: "tel:+923095310266",
  whatsapp: "https://wa.me/923095310266",
  location: "Islamabad, Pakistan",
  founded: 2020,
  socials: {
    facebook: "https://web.facebook.com/profile.php?id=100089921243812",
    linkedin: "https://www.linkedin.com/in/devops-markaz-5b5389239",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const stats = [
  { value: 150, suffix: "+", label: "Clients Worldwide" },
  { value: 50, suffix: "+", label: "Successful Projects" },
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 25, suffix: "", label: "Skilled Professionals" },
] as const;

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  features: string[];
  tech: string[];
};

export const services: Service[] = [
  {
    slug: "custom-software",
    title: "Custom Software Development",
    icon: CodeXml,
    summary:
      "Tailored applications that solve complex business problems and deliver measurable results.",
    description:
      "From internal tools to full-scale SaaS platforms, we architect and build software around the way your business actually works — clean, tested and built to evolve.",
    features: ["SaaS & enterprise platforms", "API design & integrations", "Legacy modernization", "Automated testing & QA"],
    tech: ["TypeScript", "Node.js", "Python", ".NET", "PostgreSQL"],
  },
  {
    slug: "web-mobile",
    title: "Web & Mobile Solutions",
    icon: Smartphone,
    summary:
      "Fast, beautiful websites and mobile apps that elevate user experience and drive growth.",
    description:
      "High-performance web apps and native-feeling mobile experiences, built with modern frameworks and optimized for speed, SEO and conversion.",
    features: ["Next.js & React web apps", "iOS & Android apps", "Progressive Web Apps", "Performance & SEO tuning"],
    tech: ["Next.js", "React", "React Native", "Flutter", "Tailwind CSS"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    icon: Cloud,
    summary:
      "Automation, scalability and cloud infrastructure that boost performance and cut costs.",
    description:
      "We design resilient cloud architectures, automate your delivery pipeline and keep production healthy — so your team ships faster with confidence.",
    features: ["CI/CD pipelines", "Docker & Kubernetes", "Infrastructure as Code", "Monitoring & cost optimization"],
    tech: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform"],
  },
  {
    slug: "ui-ux",
    title: "UI/UX & Creative Design",
    icon: Palette,
    summary:
      "User-focused design that creates seamless experiences and a consistent brand.",
    description:
      "Research-led product design, from wireframes to polished interfaces and design systems that keep every touchpoint on-brand.",
    features: ["User research & journeys", "Wireframes & prototypes", "Design systems", "Brand identity"],
    tech: ["Figma", "Framer", "Adobe CC", "Motion design"],
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Solutions",
    icon: ShoppingCart,
    summary:
      "Scalable, secure online stores built to sell — from storefront to checkout.",
    description:
      "Custom storefronts and headless commerce with secure payments, inventory management and analytics that turn visitors into customers.",
    features: ["Custom & headless stores", "Payment gateway integration", "Inventory & order management", "Conversion optimization"],
    tech: ["Shopify", "WooCommerce", "Stripe", "Next.js Commerce"],
  },
  {
    slug: "consulting",
    title: "Technology Consulting",
    icon: Lightbulb,
    summary:
      "Expert guidance to modernize systems, adopt new technology and accelerate transformation.",
    description:
      "Architecture reviews, technology roadmaps and hands-on advisory that help you make the right technical decisions at the right time.",
    features: ["Architecture reviews", "Digital transformation roadmaps", "Security & compliance audits", "Team augmentation"],
    tech: ["Cloud strategy", "AI adoption", "Security", "Agile delivery"],
  },
];

export type Project = {
  slug: string;
  title: string;
  kind: "Website" | "Web App" | "Mobile App";
  category: string;
  description: string;
  /** Desktop screenshot for websites; first phone screen for mobile apps. */
  image: string;
  url: string;
  tags: string[];
  featured?: boolean;
  /** Mobile apps only */
  icon?: string;
  screens?: string[];
};

export const projects: Project[] = [
  {
    slug: "roxton",
    title: "Roxton Enterprises",
    kind: "Website",
    category: "Procurement & Logistics",
    description:
      "Corporate website for an Islamabad-based procurement and logistics partner — services, product catalogue, quote requests and WhatsApp support.",
    image: "/projects/roxton.jpg",
    url: "https://roxton.org/",
    tags: ["Corporate Website", "Quote Requests", "Light / Dark Mode"],
    featured: true,
  },
  {
    slug: "big-rock-builders",
    title: "Big Rock Builders",
    kind: "Website",
    category: "Construction",
    description:
      "A bold, trust-building presence for a Pakistani construction company, showcasing projects, expertise, quality standards and sustainability.",
    image: "/projects/bigrock.jpg",
    url: "https://bigrockbuilders.com.pk/",
    tags: ["Corporate Website", "Project Showcase", "Responsive"],
    featured: true,
  },
  {
    slug: "marsresume",
    title: "MarsResume",
    kind: "Web App",
    category: "AI · SaaS",
    description:
      "An AI career workspace — ATS-optimized resume builder, ATS score checker, cover letters, AI interview coach and LinkedIn optimization.",
    image: "/projects/marsresume.jpg",
    url: "https://marsresume.com/",
    tags: ["AI", "SaaS", "Resume Builder"],
    featured: true,
  },
  {
    slug: "the-one-tourism",
    title: "The One Tourism UAE",
    kind: "Website",
    category: "Travel",
    description:
      "A premium travel brand site for a UAE agency offering holidays, corporate travel and curated group events.",
    image: "/projects/theonetourism.jpg",
    url: "https://theonetourismuae.com/",
    tags: ["Travel", "UAE", "Lead Generation"],
    featured: true,
  },
  {
    slug: "translita",
    title: "Translita Offline Translator",
    kind: "Mobile App",
    category: "Mobile App · Education",
    description:
      "Translate 85+ languages even without internet, with downloadable language packs and Fabalita, an AI coach that teaches you to speak them.",
    image: "/projects/apps/translita-1.png",
    icon: "/projects/apps/translita-icon.png",
    screens: ["/projects/apps/translita-1.png", "/projects/apps/translita-2.png"],
    url: "https://play.google.com/store/apps/details?id=com.translita.app",
    tags: ["Android", "Offline AI", "85+ Languages"],
    featured: true,
  },
  {
    slug: "unbreakable",
    title: "Unbreakable — App Blocker & Focus",
    kind: "Mobile App",
    category: "Mobile App · Productivity",
    description:
      "Block distracting apps, set daily time limits and schedules, and see exactly where your screen time goes with focus trends.",
    image: "/projects/apps/unbreakable-1.png",
    icon: "/projects/apps/unbreakable-icon.png",
    screens: ["/projects/apps/unbreakable-1.png", "/projects/apps/unbreakable-2.png"],
    url: "https://play.google.com/store/apps/details?id=com.unbreakablelock.app",
    tags: ["Android", "Digital Wellbeing", "Usage Analytics"],
    featured: true,
  },
  {
    slug: "tourism",
    title: "Travel & Tourism Booking Platform",
    kind: "Web App",
    category: "Travel",
    description:
      "An Arabic-first (RTL) travel portal with tour packages, ticket search, travel offices and curated trip categories.",
    image: "/projects/tourism.jpg",
    url: "https://tourism-frontend-nine.vercel.app",
    tags: ["React", "RTL / Arabic", "Booking"],
  },
  {
    slug: "driven-sportwagen",
    title: "Driven Sportwagen",
    kind: "Website",
    category: "Automotive",
    description:
      "A premium sports-car rental website for a German client, with bold imagery, contact flows and WhatsApp integration.",
    image: "/projects/sportswagon.jpg",
    url: "https://sportswagon-3lme.vercel.app",
    tags: ["Next.js", "Rental", "Responsive"],
  },
  {
    slug: "bankroll",
    title: "Bankroll — Cash Your Life",
    kind: "Website",
    category: "Fintech",
    description:
      "A sleek landing experience for a money-transfer app, showcasing features, FAQs and app download funnels.",
    image: "/projects/bankroll.jpg",
    url: "https://bankroll-web.vercel.app",
    tags: ["React", "Fintech", "Landing Page"],
  },
  {
    slug: "hporx",
    title: "HPORx Wellness Marketplace",
    kind: "Web App",
    category: "Healthcare",
    description:
      "A multi-language wellness marketplace with product catalogues, appointments, locators and rich navigation.",
    image: "/projects/recruit.jpg",
    url: "https://recruit-pages.vercel.app",
    tags: ["React", "Marketplace", "Multilingual"],
  },
  {
    slug: "hporx-recruit",
    title: "HPORx Recruit",
    kind: "Website",
    category: "Recruitment",
    description:
      "A hiring portal landing page that connects businesses with talent — hire, browse jobs and sign in.",
    image: "/projects/recruit-landing.jpg",
    url: "https://recruit-pages.vercel.app/recruitLanding",
    tags: ["React", "Jobs Portal", "UI/UX"],
  },
];

export const processSteps: { title: string; icon: LucideIcon; text: string }[] = [
  {
    title: "Discover",
    icon: Search,
    text: "We dig into your goals, users and constraints to define what success looks like.",
  },
  {
    title: "Design",
    icon: PenTool,
    text: "Wireframes, prototypes and architecture that map the shortest path to value.",
  },
  {
    title: "Develop",
    icon: Workflow,
    text: "Agile sprints with weekly demos, code reviews and automated testing.",
  },
  {
    title: "Deploy & Scale",
    icon: Rocket,
    text: "CI/CD, cloud infrastructure and monitoring so your product grows without friction.",
  },
];

export const strengths: { title: string; icon: LucideIcon; text: string }[] = [
  {
    title: "Secure by default",
    icon: ShieldCheck,
    text: "Security best practices baked into every layer — from code to cloud.",
  },
  {
    title: "Built for performance",
    icon: Gauge,
    text: "Fast load times, optimized infrastructure and products that scale with demand.",
  },
  {
    title: "Dedicated team",
    icon: Users,
    text: "Engineers, designers and DevOps specialists working as an extension of your team.",
  },
  {
    title: "Long-term partnership",
    icon: Handshake,
    text: "Transparent communication and ongoing support well beyond launch day.",
  },
];

export const values: { title: string; icon: LucideIcon; text: string }[] = [
  {
    title: "Our Mission",
    icon: Target,
    text: "To empower businesses with reliable, secure and future-ready technology that turns ideas into measurable growth.",
  },
  {
    title: "Our Vision",
    icon: Eye,
    text: "To be a trusted global technology partner from Pakistan — known for engineering excellence and creative thinking.",
  },
  {
    title: "Our Values",
    icon: Heart,
    text: "Integrity, craftsmanship and client success. We treat every product as if it were our own.",
  },
  {
    title: "Our Approach",
    icon: Zap,
    text: "Agile, transparent and outcome-driven — small iterations, constant feedback and real results.",
  },
];

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "React Native",
  "Flutter",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "Terraform",
  "PostgreSQL",
  "MongoDB",
  "Figma",
  "Tailwind CSS",
];

export const faqs = [
  {
    q: "How long does a typical project take?",
    a: "A marketing website usually takes 2–4 weeks, while custom web or mobile applications range from 6–16 weeks depending on scope. We share a clear timeline after the discovery call.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We work with clients worldwide across time zones, with regular video calls, shared project boards and weekly progress demos.",
  },
  {
    q: "Can you take over or improve an existing project?",
    a: "Absolutely. We start with a code and infrastructure audit, then propose a plan to stabilize, modernize and extend your product.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes — we offer maintenance, monitoring, DevOps and feature-development plans so your product keeps improving after go-live.",
  },
];
