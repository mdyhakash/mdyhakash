export const profile = {
  name: "Md Yasin Hossain Akash",
  bio: "Software Engineer at Soft Valley, based in Dhaka. I build full-stack products with Next.js, Express, TypeScript and Prisma, covering auth, payments and role-based access.",
  highlight:
    "Currently going deeper into system design, Docker, RAG and LLM integration.",
  avatar: "", // set to "/avatar.jpg" after I add my photo to /public; empty shows a placeholder icon
  links: {
    github: "https://github.com/mdyhakash",
    linkedin: "https://linkedin.com/in/mdyhakash",
    email: "mdyhakash@gmail.com",
    resume: "/resume.pdf",
  },
};

export const projects = [
  {
    name: "Nesthive",
    desc: "Housing rental and roommate-matching platform for Dhaka with Tenant, Owner, Admin and Manager roles. Covers verified listings with owner KYC, viewings, roommate compatibility matching, digital leases, bKash rent payments, utility bill splitting and maintenance tickets, backed by a 60+ endpoint REST API.",
    tech: "Next.js, TypeScript, Express, Prisma, PostgreSQL, Redis, bKash",
    links: [
      { label: "Live", href: "https://nesthive-frontend.vercel.app/" },
      {
        label: "Frontend",
        href: "https://github.com/mdyhakash/nesthive-frontend",
      },
      {
        label: "Backend",
        href: "https://github.com/mdyhakash/nesthive-backend",
      },
    ],
  },
  {
    name: "GearUp",
    desc: "Gear rental marketplace where users list, browse and rent outdoor and event gear, with role-based dashboards for customers, providers and admins.",
    tech: "Next.js, Express, TypeScript, Prisma, PostgreSQL, SSLCommerz",
    links: [
      { label: "Live", href: "https://gearup-frontend-seven.vercel.app/" },
      {
        label: "Frontend",
        href: "https://github.com/mdyhakash/gearup-frontend",
      },
      { label: "Backend", href: "https://github.com/mdyhakash/gearup-backend" },
    ],
  },
  {
    name: "Medicine Mart",
    desc: "Online medicine ordering platform. Built the product catalog, search, category filtering, cart and checkout flow during my role at Eutropia IT Solution.",
    tech: "Django, Tailwind CSS",
    links: [],
  },
  {
    name: "Design and Analysis of Smart Healthcare System",
    desc: "Thesis project built by a 3-member team: a privacy-preserving security system for Internet of Medical Things (IoMT) networks. It combines homomorphic encryption (Paillier) with machine learning so healthcare data can be processed securely while protecting patient privacy.",
    tech: "IoMT, Cryptography, Homomorphic Encryption, Machine Learning, Networking",
    links: [
      {
        label: "Github",
        href: "https://github.com/mdyhakash/double-layer-security-system",
      },
    ],
  },
];

export const publications = [
  {
    name: "IoT in Healthcare Systems Using Machine Learning, Deep Learning, and Cryptosystems: Threats and Future Research Directions",
    desc: "Accepted for publication in Springer LNNS at the 7th Doctoral Symposium on Computational Intelligence (DoSCI 2026), placing in the top 20% of submissions. To be indexed in Scopus and Web of Science.",
    tech: "IoT, Healthcare, Machine Learning, Deep Learning, Cryptosystems",
    links: [],
  },
];

export const skills = [
  { label: "Languages", items: "JavaScript, TypeScript, Python, Java, C, C++" },
  {
    label: "Frontend",
    items:
      "React.js, Next.js, React Router, React Query, React Hook Form, Tailwind CSS, Bootstrap, shadcn/ui, Radix UI, HTML5, CSS3, React Native",
  },
  {
    label: "Backend / API",
    items:
      "Node.js, Express.js, Django, Django REST Framework, REST APIs, JWT, Google OAuth",
  },
  { label: "Database", items: "PostgreSQL, MySQL, MongoDB, Prisma" },
  {
    label: "Tools",
    items: "Git, GitHub, Vercel, Postman, SSLCommerz, Markdown",
  },
  { label: "Languages (spoken)", items: "Bangla (native), English (fluent)" },
];

export const learning = [
  {
    label: "System Design",
    items:
      "Scalability, caching, load balancing, database design, API design, trade-offs",
  },
  {
    label: "Docker",
    items: "Containerizing apps, multi-service setups with Docker Compose",
  },
  {
    label: "RAG Systems",
    items: "Embeddings, vector search, retrieval pipelines",
  },
  {
    label: "LLM / AI Integration",
    items: "Building AI features into real apps, prompting, tool use",
  },
];

export const experience = [
  {
    company: "Soft Valley",
    role: "Software Engineer",
    date: "2026 – Present",
    desc: "Delivered 2 projects end to end and currently working on 2 more.",
  },
  {
    company: "Eutropia IT Solution",
    role: "Full-Stack Developer",
    date: "Feb 2026 – Jun 2026",
    desc: "Built the corporate website and core Medicine Mart e-commerce features across the Next.js frontend and Django backend, and upgraded other existing projects, working with design and backend teams.",
  },
  {
    company: "Datavro BD",
    role: "Full-Stack Developer (Frontend Focused)",
    date: "Jan 2026 – Feb 2026",
    desc: "Built React components and turned design mock-ups into working interfaces alongside senior developers.",
  },
  {
    company: "Eutropia IT Solution",
    role: "Frontend Developer (Learning & Project-Based)",
    date: "2023 – 2025",
    desc: "Learned frontend development hands-on while building UI for real projects on a project basis.",
  },
];

export const education = [
  {
    title: "University of Asia Pacific",
    sub: "B.Sc. in Computer Science & Engineering, CGPA 3.47 / 4.00",
    year: "",
  },
  {
    title: "BCIC College",
    sub: "HSC, GPA 5.00 / 5.00",
    year: "",
  },
  {
    title: "Darussalam Govt. Secondary School",
    sub: "SSC, GPA 5.00 / 5.00",
    year: "",
  },
];

export const awards = [
  {
    title: "Dean's List, Spring 2024",
    sub: "University of Asia Pacific, Department of CSE",
    year: "2024",
  },
  {
    title: "Dean's List, Fall 2024",
    sub: "University of Asia Pacific, Department of CSE",
    year: "2025",
  },

  {
    title: "Champion, Software Showcase",
    sub: "Innovatex 2025, National Hackathon",
    year: "2025",
  },
  {
    title: "Runner-up, Hackathon",
    sub: "Innovatex 2025, National Hackathon",
    year: "2025",
  },

  { title: "4th Place, MIST Hackathon", sub: "MIST Inventious", year: "2025" },
  {
    title: "Harvard HSIL Hackathon",
    sub: "International Hackathon",
    year: "2025",
  },
  {
    title:
      "Participated in 9+ national hackathons and programming competitions",
    sub: "",
    year: "2022-2025",
  },
];
