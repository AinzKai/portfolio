export const siteConfig = {
  name: "Muhammad Uzair Rizwan",
  title: "Frontend Developer",
  position:
    "I build modern websites and digital systems that help businesses attract, convert, and retain customers.",
  location: "Based in Islamabad, Pakistan",
  email: "hello@muhammaduzair.dev",
  website: "https://muhammaduzair.dev",
  social: {
    email: "mailto:hello@muhammaduzair.dev",
    github: "https://github.com/uzairrizwan",
    linkedin: "https://linkedin.com/in/uzairrizwan",
    twitter: "https://twitter.com/uzairrizwan",
  },
  nav: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
  ],
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectFeature = {
  title: string;
  description: string;
};

export type ProjectStatus = "demo" | "experimental" | "concept";

export const projectStatusConfig: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  demo: { label: "Demo build", className: "bg-accent/10 text-accent" },
  experimental: {
    label: "Experimental",
    className: "bg-success/10 text-success",
  },
  concept: { label: "Concept", className: "bg-muted/20 text-muted" },
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  shortDescription: string;
  longDescription?: string;
  tags: string[];
  featured: boolean;
  status: ProjectStatus;
  coverColor: string;
  images: ProjectImage[];
  features: ProjectFeature[];
  liveUrl?: string;
  objective: string;
  problem: string;
  approach: string;
  designDecisions?: string;
  technicalNotes?: string;
  outcome: string;
  whatILearned: string;
  tech: string[];
  integrations: string[];
};

export const projects: Project[] = [
  {
    id: "nosh",
    title: "NOSH",
    slug: "nosh",
    category: "Restaurant Website / Online Ordering",
    description:
      "A modern, mobile-first ordering website for a burger restaurant concept, featuring a dynamic menu, item customization, persistent shopping cart, and WhatsApp order generation.",
    shortDescription: "Burger restaurant website with online ordering",
    longDescription:
      "A responsive, performance-optimized website for NOSH, a burger restaurant concept. Built to showcase the menu, enable online ordering, and drive both pickup and delivery orders through WhatsApp integration.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vitest"],
    featured: true,
    status: "demo",
    coverColor: "from-red-600 to-orange-700",
    images: [],
    features: [
      {
        title: "Dynamic menu with categories and search",
        description:
          "Menu items organized by category with live search filtering.",
      },
      {
        title: "Item customization",
        description:
          "Customers can select sizes and add-ons for each menu item.",
      },
      {
        title: "Persistent shopping cart",
        description:
          "Cart state persists across page navigation using localStorage.",
      },
      {
        title: "WhatsApp order generation",
        description:
          "Orders are compiled into a formatted message sent to the restaurant via WhatsApp.",
      },
    ],
    liveUrl: "https://nosh-restaurant.netlify.app",
    objective:
      "Build a modern web presence for a burger restaurant concept that replaces phone-based orders with a frictionless online ordering experience.",
    problem:
      "Phone orders lead to miscommunication, busy signals, and a poor experience for both customers and staff. A digital menu with ordering capabilities would streamline the process and reduce friction.",
    approach:
      "I started with a mobile-first design, since most orders come from phones. I focused on making the menu scannable, the customization flow intuitive, and the checkout as simple as possible — ending with a WhatsApp link to complete the order.",
    designDecisions:
      "I used a dark, high-contrast color scheme to make the food photography pop. The cart is persistent so users can navigate away and return without losing their order. I chose WhatsApp integration over a traditional payment gateway to keep the scope manageable and leverage a channel customers already trust.",
    technicalNotes:
      "Built with Next.js App Router for fast builds and SSG. Cart state uses localStorage with SSR-safe initialization. Vitest is configured for unit testing the cart logic and menu filtering.",
    outcome:
      "A fully functional demo that demonstrates the complete ordering flow — from menu browsing to WhatsApp order submission. The site loads in under 1 second on mobile and scores well on accessibility and SEO audits.",
    whatILearned:
      "Balancing a rich interactive experience (cart, customization) with the simplicity and reliability of WhatsApp as the final order channel was an interesting constraint. I also gained practical experience with localStorage state synchronization in SSR environments.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vitest", "Git/GitHub"],
    integrations: ["WhatsApp API"],
  },
  {
    id: "sh-salon",
    title: "SH Salon",
    slug: "sh-salon",
    category: "Salon Website / Booking Concept",
    description:
      "A premium dark-themed landing page concept for an upscale men's grooming lounge, featuring a detailed service menu, photo gallery, review section, and WhatsApp appointment booking.",
    shortDescription: "Premium dark-mode salon website with booking",
    tags: ["React", "Tailwind CSS", "Lovable"],
    featured: true,
    status: "demo",
    coverColor: "from-gray-900 to-black",
    images: [],
    features: [
      {
        title: "Premium dark theme",
        description:
          "A sophisticated dark color scheme that conveys luxury and attention to detail.",
      },
      {
        title: "Service menu with pricing and durations",
        description:
          "Each service shows its price and estimated duration for easy reference.",
      },
      {
        title: "Photo gallery",
        description:
          "Curated gallery showcasing the space and the quality of work.",
      },
      {
        title: "Review section",
        description:
          "Structured testimonial layout to build trust with prospective clients.",
      },
      {
        title: "WhatsApp appointment flow",
        description:
          "Bookings are sent directly via WhatsApp, reducing friction for the salon owner.",
      },
    ],
    liveUrl: "https://sh-salon-experience.lovable.app",
    objective:
      "Design a landing page concept that feels premium and communicates the quality of an upscale men's grooming lounge before a customer even visits.",
    problem:
      "A salon website needs to convey professionalism, quality, and trust at a glance. Most salon templates feel generic and fail to communicate the premium positioning of the service.",
    approach:
      "I used a dark color palette with high-quality typography and generous whitespace to create a sense of luxury. The service menu is the primary focus, supported by a photo gallery and a review section to build credibility.",
    designDecisions:
      "The dark theme was chosen to make the gold accent color and white space feel more premium — reminiscent of high-end fashion and hospitality branding. WhatsApp was selected as the booking channel to keep the experience simple and reduce the need for account creation.",
    outcome:
      "A polished demo that demonstrates a premium aesthetic for a service business. The site scores well on performance metrics and feels distinctly upscale compared to typical salon websites.",
    whatILearned:
      "Working with dark-mode design taught me how much more critical contrast and typography become when there's less color on the page. I also learned how to structure a service business website around a single conversion action — making an appointment.",
    tech: ["React", "Tailwind CSS", "Lovable"],
    integrations: ["WhatsApp", "Google Maps"],
  },
  {
    id: "fudgery",
    title: "Fudgery",
    slug: "fudgery",
    category: "Bakery Website / Online Ordering",
    description:
      "An artisanal storefront concept for a small-batch bakery, featuring a product menu, product details, WhatsApp ordering, Our Story, FAQ, and Instagram integration.",
    shortDescription: "Artisanal bakery website with WhatsApp ordering",
    tags: ["React", "Tailwind CSS", "Lovable"],
    featured: false,
    status: "demo",
    coverColor: "from-pink-600 to-red-700",
    images: [],
    features: [
      {
        title: "Product menu with details",
        description:
          "Each baked good has its own detail view with description and ingredients.",
      },
      {
        title: "Our Story section",
        description:
          "A narrative section that builds connection and brand identity.",
      },
      {
        title: "FAQ accordion",
        description:
          "Structured questions and answers to reduce customer service inquiries.",
      },
      {
        title: "Instagram integration",
        description:
          "Live feed to showcase fresh products and drive social engagement.",
      },
      {
        title: "WhatsApp ordering",
        description:
          "Customers can place orders directly through WhatsApp for pickup or delivery.",
      },
    ],
    liveUrl: "https://fudgery-sweet-craft.lovable.app",
    objective:
      "Create an online presence for an artisanal bakery that showcases their products and enables direct ordering through a familiar channel.",
    problem:
      "Small bakeries often lack a website entirely, relying on Instagram DMs or phone calls for orders. This limits their reach and makes ordering inconvenient for customers.",
    approach:
      "I designed a warm, inviting aesthetic with a strong focus on food photography. The product menu is the primary conversion point, with clear pricing and an easy WhatsApp-based order flow.",
    designDecisions:
      "The pink-to-red gradient conveys warmth and sweetness, while clean typography keeps the layout from feeling too busy. The FAQ accordion keeps the page scannable — a key concern for mobile users who want quick answers.",
    outcome:
      "A complete demo that covers all essential bakery website needs — product showcase, ordering, story, and social proof. The site is fully responsive and optimized for mobile ordering.",
    whatILearned:
      "I learned how to structure a product-centric website that balances visual appeal with practical functionality. The biggest challenge was designing a WhatsApp ordering flow that doesn't require user accounts or complex forms.",
    tech: ["React", "Tailwind CSS", "Lovable"],
    integrations: ["WhatsApp", "Instagram Embed"],
  },
  {
    id: "dera-istanbul",
    title: "Dera Istanbul",
    slug: "dera-istanbul",
    category: "Restaurant Website / Menu",
    description:
      "A restaurant website concept for a Turkish restaurant, featuring a categorized menu, location, click-to-call, takeaway ordering, and reservation information.",
    shortDescription: "Turkish restaurant website with menu and location",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    featured: false,
    status: "demo",
    coverColor: "from-emerald-600 to-teal-700",
    images: [],
    features: [
      {
        title: "Categorized menu",
        description:
          "Menu organized by traditional Turkish categories for easy browsing.",
      },
      {
        title: "Takeaway ordering",
        description:
          "Customers can place takeaway orders via WhatsApp or phone.",
      },
      {
        title: "Location and directions",
        description:
          "Interactive map with directions to help customers find the restaurant.",
      },
      {
        title: "Click-to-call",
        description:
          "Phone number is directly tappable on mobile for instant calling.",
      },
      {
        title: "Reservation information",
        description:
          "Clear hours and reservation process to reduce staff inquiries.",
      },
    ],
    liveUrl: "https://dera-istanbul.netlify.app",
    objective:
      "Build a clean, culturally-appropriate website for a Turkish restaurant that highlights their menu and makes it easy for customers to visit or order.",
    problem:
      "Many restaurant websites in this space use generic templates that don't reflect the cultural authenticity of Turkish cuisine. A thoughtful design can communicate the restaurant's identity more effectively.",
    approach:
      "I incorporated Turkish-inspired visual elements — warm earth tones, pattern-inspired dividers — while keeping the layout clean and functional. The menu is designed for quick scanning, and the takeaway flow is optimized for mobile.",
    designDecisions:
      "The emerald-to-teal gradient was chosen to evoke the colors commonly found in Turkish ceramics and tiles, while remaining professional. The menu is grouped by course rather than just 'appetizers' and 'mains' to reflect the dining culture.",
    outcome:
      "A fully responsive demo that feels culturally authentic while maintaining a modern, professional standard. The site loads quickly and works well on mobile devices.",
    whatILearned:
      "I explored how to incorporate cultural visual cues into a modern web design without resorting to clichés. I also practiced balancing the need for a menu-heavy page with good information architecture.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Netlify"],
    integrations: ["WhatsApp", "Google Maps", "Click-to-call"],
  },
  {
    id: "mini-crunch",
    title: "Mini Crunch",
    slug: "mini-crunch",
    category: "F&B Landing Page",
    description:
      "A mobile-first promotional landing page for a snack brand, featuring a product flavor showcase, nutritional information, purchasing CTAs, and social links.",
    shortDescription: "Snack brand landing page with flavor showcase",
    tags: ["Next.js", "React", "Tailwind CSS", "Netlify"],
    featured: false,
    status: "demo",
    coverColor: "from-yellow-600 to-orange-700",
    images: [],
    features: [
      {
        title: "Flavor showcase carousel",
        description:
          "Interactive display of all flavors with visual indicators.",
      },
      {
        title: "Nutritional information",
        description:
          "Clear presentation of nutritional facts for health-conscious consumers.",
      },
      {
        title: "Purchasing CTAs",
        description:
          "Links to where the product can be purchased, optimized for mobile.",
      },
      {
        title: "Social links",
        description:
          "Direct links to brand social media for user-generated content.",
      },
    ],
    liveUrl: "https://mini-crunch.netlify.app",
    objective:
      "Create a compelling landing page that promotes a new snack brand and drives purchase decisions for first-time customers.",
    problem:
      "New snack brands need to quickly communicate what makes their product different and where to buy it. Generic landing pages fail to create desire or provide clear next steps.",
    approach:
      "I focused the design on the product — large, appetizing photography and a flavor carousel that lets users explore options. The page is strictly single-purpose: drive to the 'where to buy' links.",
    designDecisions:
      "The yellow-to-orange gradient matches the brand's energetic, fun personality. I kept the navigation minimal — no menu, just a 'Buy Now' button — to eliminate distractions and maximize conversion.",
    outcome:
      "A focused, fast-loading landing page that works well on mobile and clearly communicates the product proposition. The design prioritizes scannability over completeness.",
    whatILearned:
      "I practiced building a high-conversion landing page with a single goal. The constraint of 'only one CTA' forced me to be very intentional about every element on the page.",
    tech: ["Next.js", "React", "Tailwind CSS", "Netlify"],
    integrations: [],
  },
  {
    id: "rmc-texas",
    title: "RMC Texas",
    slug: "rmc-texas",
    category: "Corporate Business Website",
    description:
      "A professional corporate website concept for a service-oriented business, featuring corporate navigation, service pages, lead capture form, and contact form.",
    shortDescription: "Corporate website with lead capture",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Netlify"],
    featured: true,
    status: "concept",
    coverColor: "from-blue-800 to-indigo-900",
    images: [],
    features: [
      {
        title: "Corporate navigation",
        description:
          "Multi-level navigation that scales as the business adds services.",
      },
      {
        title: "Service pages",
        description:
          "Dedicated pages for each service with clear value propositions.",
      },
      {
        title: "Lead capture form",
        description:
          "Form that captures contact details and service interest for follow-up.",
      },
      {
        title: "SEO-focused architecture",
        description:
          "Structured with proper headings, meta tags, and semantic HTML for search visibility.",
      },
    ],
    liveUrl: "https://rmc-texas.netlify.app",
    objective:
      "Build a professional website for a corporate service business that establishes credibility and captures leads through structured content and forms.",
    problem:
      "Service businesses need a website that communicates professionalism, details their offerings, and converts visitors into qualified leads. Many sites are too generic or too cluttered with unnecessary elements.",
    approach:
      "I focused on a clean, professional aesthetic with a clear information hierarchy. The lead capture form is integrated into the flow naturally, not as an afterthought. Content is structured for both users and search engines.",
    designDecisions:
      "The deep blue gradient conveys trust and professionalism — key for a corporate service business. I kept the layout simple and scannable, with ample whitespace to avoid overwhelming visitors. The contact form is prominent but not aggressive.",
    outcome:
      "A demo that demonstrates a complete corporate website — multi-page navigation, service descriptions, lead capture, and contact flows. The site is fully responsive and SEO-optimized.",
    whatILearned:
      "I practiced building a multi-page corporate site with Next.js, focusing on consistent styling, clear navigation, and lead capture integration. I also worked on balancing comprehensive content with clean design.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Netlify"],
    integrations: ["Formspree", "Google Sheets"],
  },
  {
    id: "mez-restaurant",
    title: "Mez Restaurant",
    slug: "mez-restaurant",
    category: "Restaurant Website / Reservation",
    description:
      "A modern restaurant website concept focused on menu presentation, location discovery, and customer inquiries, with high-quality imagery and reservation flow.",
    shortDescription: "Restaurant website with menu and reservation flow",
    tags: ["Next.js", "React", "Tailwind CSS", "Netlify"],
    featured: false,
    status: "demo",
    coverColor: "from-amber-700 to-red-800",
    images: [],
    features: [
      {
        title: "Menu presentation",
        description:
          "Beautifully typeset menu with dish descriptions and pricing.",
      },
      {
        title: "High-quality imagery",
        description:
          "Full-bleed hero and gallery images that showcase the dining experience.",
      },
      {
        title: "Click-to-call",
        description:
          "Phone number is directly tappable on mobile devices.",
      },
      {
        title: "Location and hours",
        description:
          "Clear business information with embedded map.",
      },
      {
        title: "Reservation/contact flow",
        description:
          "Streamlined form for reservation requests and general inquiries.",
      },
    ],
    liveUrl: "https://mez-restaurant.netlify.app",
    objective:
      "Create a restaurant website that beautifully presents the menu and makes it effortless for diners to find the restaurant and make reservations.",
    problem:
      "Restaurant websites often have poor menu presentation, hard-to-find contact info, and don't work well on mobile — the device most people use to find where to eat.",
    approach:
      "I designed the menu as the central focus, with typography and layout that make it easy to read at a glance. The reservation flow uses a simple form that doesn't require account creation.",
    designDecisions:
      "The amber-to-red gradient reflects the warmth of the restaurant's cuisine. High-quality imagery is used sparingly — just for the hero and a few key sections — to keep load times low. The reservation form asks only for essential information.",
    outcome:
      "A fully responsive demo that focuses on the two most important actions: browsing the menu and booking a table. The site loads quickly and works well on all devices.",
    whatILearned:
      "I refined my approach to balancing visual richness with performance. Restaurant websites need to communicate atmosphere and food quality quickly, which made me think carefully about image selection and typography hierarchy.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Netlify"],
    integrations: ["WhatsApp", "Google Maps", "Formspree"],
  },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  shortDescription: string;
  examples: string[];
};

export const services: Service[] = [
  {
    id: "websites",
    title: "Modern Websites",
    description:
      "Polished, responsive websites built with modern technologies. From single-page landing pages to multi-page business sites — designed to look great and work flawlessly.",
    shortDescription: "Full websites and landing pages that convert",
    icon: "Globe",
    examples: ["nosh", "sh-salon", "rmc-texas", "dera-istanbul"],
  },
  {
    id: "lead-capture",
    title: "Lead Capture",
    description:
      "Strategic forms and data collection systems that turn website visitors into qualified leads — with notifications and integrations to your existing tools.",
    shortDescription: "Forms that turn visitors into customers",
    icon: "Mail",
    examples: ["rmc-texas", "nosh"],
  },
  {
    id: "retention",
    title: "Customer Retention",
    description:
      "Automated systems that keep your customers engaged, remind them of upcoming appointments, and bring them back when they've gone quiet.",
    shortDescription: "Automations to keep customers coming back",
    icon: "BarChart3",
    examples: [],
  },
];

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
  details?: string[];
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    description:
      "A 30-minute call to understand your business, goals, and what's not working with your current setup.",
    details: [
      "Video call via Zoom or Google Meet",
      "We'll discuss your goals and target audience",
      "I'll ask about your competitors and current challenges",
    ],
  },
  {
    step: 2,
    title: "Direction",
    description:
      "I outline a clear plan — what to build, the timeline, and the investment. No long contracts, just a straightforward agreement.",
    details: [
      "Project scope and deliverables defined",
      "Timeline and fixed-price quote",
      "Simple agreement, no agency jargon",
    ],
  },
  {
    step: 3,
    title: "Design & Build",
    description:
      "I design and build your website or system in two-week sprints, sharing progress weekly so you can review and request changes.",
    details: [
      "Wireframes sent for your first review",
      "Design and development in parallel",
      "Weekly progress updates",
    ],
  },
  {
    step: 4,
    title: "Review",
    description:
      "We review the finished product together, test everything, and make any final adjustments before launch.",
    details: [
      "Thorough review on all devices",
      "Bug fixes and refinements",
      "Your final sign-off",
    ],
  },
  {
    step: 5,
    title: "Launch",
    description:
      "I deploy your site, hand over access documentation, and provide a 14-day window for any post-launch adjustments.",
    details: [
      "Deployment to your hosting provider",
      "Documentation and credentials",
      "14-day post-launch support included",
    ],
  },
];

export type PricingPackage = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  features: string[];
  popular: boolean;
};

export const pricingPackages: PricingPackage[] = [
  {
    id: "landing-page",
    name: "Landing Page",
    subtitle: "Single-purpose page",
    description:
      "A single responsive page built to convert visitors into leads or customers — perfect for a new business, campaign, or product.",
    price: "Starting at $499",
    features: [
      "Single responsive page",
      "Custom UI design",
      "Mobile optimization",
      "Basic SEO",
      "CTA sections",
      "Contact or lead form",
      "Deployment",
    ],
    popular: false,
  },
  {
    id: "business-website",
    name: "Business Website",
    subtitle: "Multi-page site",
    description:
      "A multi-page website with lead capture — ideal for small businesses, restaurants, salons, and service businesses ready to attract more customers.",
    price: "Starting at $899",
    features: [
      "Up to 5 pages",
      "Custom responsive design",
      "Lead or contact forms",
      "Google Maps integration",
      "Basic SEO setup",
      "Analytics",
      "Performance optimization",
      "Deployment",
    ],
    popular: true,
  },
  {
    id: "custom-website",
    name: "Custom Website",
    subtitle: "Advanced functionality",
    description:
      "For larger websites, custom business logic, or requirements that go beyond the standard packages. Final pricing depends on scope.",
    price: "Starting at $1,299+",
    features: [
      "All Business Website features",
      "Advanced interactions",
      "Custom functionality",
      "Booking or ordering systems",
      "WhatsApp integration",
      "CMS integration",
      "Email automation setup",
      "Detailed project documentation",
    ],
    popular: false,
  },
];

export type Addon = {
  id: string;
  name: string;
  description: string;
  price: string;
};

export const addons: Addon[] = [
  {
    id: "extra-pages",
    name: "Additional pages",
    description: "Each additional page beyond your package limit.",
    price: "From $100/page",
  },
  {
    id: "advanced-form",
    name: "Advanced form",
    description: "Multi-step forms, conditional fields, file uploads.",
    price: "From $150",
  },
  {
    id: "sheets-integration",
    name: "Google Sheets integration",
    description: "Send form submissions directly to a Google Sheet.",
    price: "From $75",
  },
  {
    id: "booking",
    name: "Booking integration",
    description: "Embed Calendly or a custom appointment scheduler.",
    price: "From $200",
  },
  {
    id: "whatsapp",
    name: "WhatsApp ordering",
    description: "Order or inquiry forms that generate WhatsApp messages.",
    price: "From $150",
  },
  {
    id: "payments",
    name: "Payment integration",
    description: "Stripe, PayPal, or other payment provider checkout.",
    price: "Custom quote",
  },
  {
    id: "cms",
    name: "CMS integration",
    description: "Content management system for updating your own content.",
    price: "Custom quote",
  },
  {
    id: "animations",
    name: "Custom animations",
    description: "Subtle motion design to enhance the user experience.",
    price: "From $200",
  },
  {
    id: "email-automation",
    name: "Email automation",
    description: "Welcome sequences, follow-ups, or re-engagement emails.",
    price: "Custom quote",
  },
  {
    id: "retention-automation",
    name: "Retention automation",
    description: "Appointment reminders, review requests, and re-engagement systems.",
    price: "Custom quote",
  },
];

export type RetentionPackage = {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  note?: string;
};

export const retentionPackages: RetentionPackage[] = [
  {
    id: "retention-setup",
    name: "Retention Setup",
    description:
      "One-time setup of automated customer retention systems — welcome emails, appointment reminders, review requests, and basic re-engagement flows.",
    price: "From $299",
    features: [
      "Up to 3 automations",
      "Email platform integration (Mailchimp, Brevo, etc.)",
      "WhatsApp or SMS reminder setup",
      "Template design and copywriting",
      "Testing and documentation",
    ],
    note: "Pricing depends on number of workflows, chosen platform, and SMS requirements.",
  },
  {
    id: "retention-management",
    name: "Ongoing Management",
    description:
      "Monthly management of your customer retention automations — monitoring, optimization, and ongoing support.",
    price: "From $99/month",
    features: [
      "System monitoring and support",
      "Monthly performance reporting",
      "Copy and flow refinements",
      "Platform updates",
      "Priority support",
    ],
    note: "Pricing depends on number of workflows, customer database size, and integration complexity.",
  },
];

export const contactInfo = {
  email: "hello@muhammaduzair.dev",
  location: "Islamabad, Pakistan — working with businesses worldwide",
  timezone: "UTC+5 (PKT), working with US/EU/UK/AU clients",
  responseTime:
    "I typically respond within 2 hours during business hours.",
  workingHours: "9 AM – 6 PM PKT (UTC+5), Monday–Friday",
};
