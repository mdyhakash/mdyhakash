export const personalInfo = {
  name: "Md Yasin Hossain Akash",
  designation: "Full Stack Web Developer",
  email: "mdyhakash@gmail.com",
  phone: "+880 1605586019",
  whatsapp: "+880 1795297795",
  location: "Dhaka, Bangladesh",
  tagline: "Building digital solutions that make a difference.",
  description:
    "I'm a Full stack developer passionate about creating innovative web applications that solve real world problems. From winning hackathons to building scalable solutions, I focus on writing clean code and delivering exceptional user experiences.",
  github: "https://github.com/mdyhakash",
  linkedin: "https://linkedin.com/in/mdyhakash",
  twitter: "https://twitter.com/mdyhakash",
  facebook: "https://facebook.com/mdyhakash",
  // Set this to the public path of your resume once it's ready, e.g. "/resume.pdf"
  resumeUrl: "/resume.pdf",
};
export const socialLinks = [
  { icon: "Github", href: "https://github.com/mdyhakash", label: "GitHub" },
  {
    icon: "Linkedin",
    href: "https://linkedin.com/in/mdyhakash",
    label: "LinkedIn",
  },
  {
    icon: "X",
    href: "https://x.com/mdyhakash",
    label: "X",
  },
  {
    icon: "Facebook",
    href: "https://facebook.com/mdyhakash",
    label: "Facebook",
  },
  {
    icon: "Mail",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=mdyhakash@gmail.com",
    label: "Email",
  },
];

export const about = {
  paragraphs: [
    "Hey there! I'm Md Yasin Hossain Akash, but most people call me Akash. I'm a fullstack developer who loves turning ideas into functional applications.",
    "Currently pursuing my BSc in Computer Science Engineering at UAP, I've competed in various hackathons, including winning Champion at INNOVATEX 2025. I've built over 40 projects, each teaching me something new about development and shipping quality software.",
    "I prioritize writing clean, maintainable code and creating user-friendly interfaces. I'm always exploring new technologies to enhance my skills and stay current with industry trends.",
    "When I'm not coding, you'll find me playing Valorant, Minecraft, or FIFA, traveling, or binge-watching movies and series. I'm a huge fan of Harry Potter, Game of Thrones, and anime especially Demon Slayer.",
  ],
  image: "/myphoto.jpg",
};

export const skills = [
  "HTML & CSS",
  "Tailwind CSS",
  "Git & GitHub",
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "Postgres",
  "Python",
  "Django",
];

export const skillCategories = [
  {
    category: "Frontend",
    icon: "Layout",
    skills: [
      { name: "HTML & CSS", level: 95 },
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "TypeScript", level: 70 },
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "Django REST Framework", level: 60 },
      { name: "Django MVT", level: 70 },
      { name: "PostgreSQL", level: 80 },
    ],
  },
  {
    category: "Tools & Others",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "Python", level: 70 },
      { name: "Postman", level: 75 },
    ],
  },
];

export const projects = [
  {
    slug: "eutropia-it-solutions",
    title: "Eutropia IT Solutions Corporate Website (Frontend)",
    description:
      "Eutropia IT Solutions is a modern, responsive corporate website built to showcase the company's services and expertise. Features include contact and inquiry forms with real time validation, a mobile first design optimized for all devices, and smooth client communication.",
    image: "/Eutropia.png",
    tech: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "Next.js",
      "React.js",
      "TanStack Query",
    ],
    github: "#",
    live: "https://eutropia-it.com/",
    featured: true,
    category: "Web Apps",
    challenges:
      "Coordinating real time form validation with backend inquiry endpoints while keeping the UI mobile first meant carefully managing loading and error states across every breakpoint. Matching the design team's brand guidelines pixel-for-pixel across devices also took several rounds of refinement.",
    improvements:
      "Add a CMS-backed blog and case studies section, integrate analytics dashboards for inquiry conversion tracking, and further optimize image loading with next/image for faster first paint.",
  },
  {
    slug: "adibas-ecommerce",
    title: "Adibas – E-commerce Website (Frontend)",
    description:
      "Adibas is a full featured e-commerce website with search and optimized product filtering, product sorting for easy navigation, and an add to cart feature for a streamlined shopping experience.",
    image: "/adibas.PNG",
    tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js"],
    github: "https://github.com/mdyhakash/eCommerce",
    live: "https://e-commerce-mdyhakash.vercel.app/",
    featured: true,
    category: "Web Apps",
    challenges:
      "Building fast, accurate multi-attribute filtering (price, size, category) without a backend required structuring product data carefully and memoizing filter logic to keep the UI responsive as the catalog grew.",
    improvements:
      "Connect a real backend and database for persistent carts and orders, add user authentication, and introduce a wishlist and product review system.",
  },
  {
    slug: "medicine-mart",
    title: "Medicine Mart Features Update",
    description:
      "Developed and enhanced the Medicine Mart inventory management system with new features and workflow improvements. Implemented invoice management enhancements, purchase approval updates, product purchase history navigation, Excel export functionality, wishlist and request optimizations, and several UI refinements to improve efficiency and user experience.",
    image: "/medicine-mart.png",
    tech: ["HTML", "JavaScript", "Tailwind CSS", "Python", "Django"],
    github: "https://github.com/mdyhakash/medicine-mart",
    live: "",
    featured: true,
    category: "Web Apps",
    challenges:
      "Integrating new features into an existing Django application while preserving business logic was challenging. Maintaining data consistency across inventory, purchase requests, invoices, and reporting required careful backend validation and frontend synchronization.",
    improvements:
      "Add real-time inventory updates, barcode scanning, advanced filtering and reporting, role-based audit logs, automated low-stock notifications, and interactive analytics dashboards for inventory and purchasing.",
  },
  // {
  //   slug: "hackathon-valley",
  //   title: "Hackathon Valley (Frontend)",
  //   description:
  //     "Hackathon Valley is a dynamic platform designed to streamline hackathon management, featuring hackathon details, team management, participant profiles, and result tracking, all with a sleek and user friendly interface.",
  //   image: "/hackathonvalley.png",
  //   tech: ["React.js", "Next.js", "Tailwind CSS"],
  //   github: "https://github.com/mdyhakash/hackathon-valley",
  //   live: "https://hackathon-valley.vercel.app/",
  //   featured: true,
  //   category: "Web Apps",
  //   challenges:
  //     "Designing a data model flexible enough to represent teams, participants, and results for many different hackathon formats was tricky, and keeping the UI clear despite the amount of information per event took several iterations.",
  //   improvements:
  //     "Add real-time result updates via WebSockets, organizer dashboards for managing submissions, and email notifications for registration and results.",
  // },
  {
    slug: "quickdrop",
    title: "QuickDrop",
    description:
      "QuickDrop is your ultimate copy paste notebook Chrome Extension that captures, organizes, and retrieves your clipboard history with lightning speed. Never lose that important text snippet, code block, or link again.",
    image: "/quickdrop.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/mdyhakash/quick-drop",
    live: "https://quick-drop-xi.vercel.app/",
    featured: false,
    category: "Tools",
    challenges:
      "Keeping clipboard history reliably in sync across browser sessions without a heavy backend required a lightweight, well-typed storage layer and careful handling of edge cases like very large snippets.",
    improvements:
      "Add cross-device sync with an account system, tagging and search for saved snippets, and a browser extension for one-click capture.",
  },
  {
    slug: "css-layout-generator",
    title: "CSS Layout Generator",
    description:
      "CSS Layout Generator is a visual, interactive tool that simplifies building responsive CSS layouts. Ideal for frontend developers, designers, or anyone learning CSS, it allows quick prototyping, live previews, and clean code export without writing every line manually.",
    image: "/css-layout-generator.png",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/mdyhakash/css-layout-generator",
    live: "https://css-layout-generator.vercel.app/",
    featured: false,
    category: "Tools",
    challenges:
      "Translating live drag-and-drop layout changes into clean, human-readable CSS output in real time meant writing a custom code generator instead of relying on a simple template.",
    improvements:
      "Support Grid and Flexbox side by side with a toggle, add exportable presets, and let users save and share layouts via a shareable link.",
  },
  {
    slug: "pawfinder",
    title: "Pawfinder",
    description:
      "PawFinder is a comprehensive pet adoption platform designed to connect animals in need with loving homes. Our mission is to simplify the pet adoption process, provide essential resources for pet owners, and offer a marketplace for quality pet supplies.",
    image: "/pawfinder.png",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/mdyhakash/paw-finder",
    live: "#",
    featured: false,
    category: "Web Apps",
    challenges:
      "Modeling adoption listings, shelters, and a supplies marketplace within one coherent app required a flexible data structure and thoughtful navigation so the two very different flows (adopting vs. shopping) didn't feel disjointed.",
    improvements:
      "Add a backend with real shelter accounts and application tracking, integrate payments for the supplies marketplace, and add location-based search for nearby adoptable pets.",
  },
];

export const hackathons = [
  {
    name: "INNOVATEX 2025",
    date: "May 2025",
    project: "Skill Bridge",
    award: "1st Runners-Up",
    description:
      "Bridging the gap between education and industry Connect universities, students, and industry partners on a single platform to solve real-world problems and build industry-relevant skills.",
    team: 4,
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
  },

  {
    name: "Inventious 4.1 Hackathon",
    date: "February 2025",
    project: "Neo Campus",
    award: "4th Place in MIST and Champion in Software Showcase (UAP)",
    description:
      "All-in-one student app providing campus services and information in real-time. NeoCampus serves as your essential campus companion.",
    team: 4,
    tech: [
      "React.js",
      "Next.js",
      "TanStack Query",
      "Express.js",
      "MongoDB",
      "OpenAI API",
    ],
  },
  {
    name: "Harvard Health Systems Innovation Hackathon",
    date: "April 2025",
    project: "MediCare",
    award: "Participant",
    description:
      "AI-powered healthcare platform revolutionizing medical system with features like disease detection, a smart symptom checker, and AI-driven prescription guidance. With multilingual support, emergency care access, and hospital management tools, it ensures accessible, personalized, and efficient healthcare for all.",
    team: 4,
    tech: [
      "React",
      "Next.js",
      "TanStack Query",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "OpenAI API",
    ],
  },
  {
    name: "Web Xtreme 2025 Hackathon",
    date: "February 2025",
    project: "Reportify",
    award: "Participant",
    description:
      "Crime Reporting & Verification Platform A secure web platform leveraging AI to validate and manage crime reports with community oversight.",
    team: 4,
    tech: ["React.js", "Next.js", "MongoDB", "GROQ API", "HF API"],
  },
];

export const hackathonStats = [
  { label: "Hackathons Attended", value: "10" },
  { label: "Awards Won", value: "5+" },
  { label: "Projects Built", value: "10+" },
  { label: "Team Members", value: "4" },
];

export const achievements = [
  {
    title: "Champion – Software Showcase",
    organization: "UAP SNH Club – INNOVATEX 2025",
    date: "May 2025",
    description:
      "Won first place in the Software Showcase category, demonstrating exceptional software development skills.",
    icon: "Award",
    credentialUrl:
      "https://drive.google.com/file/d/1j-uj5uSkhj4R2brEPMFtw0M4BIvhPqtz/view?usp=sharing",
  },
  {
    title:
      "Paper Accepted – Doctoral Symposium on Computational Intelligence 2026",
    organization: "DoSCI (Springer LNNS)",
    date: "2026",
    description:
      "Research paper titled 'IoT in Healthcare Systems Using Machine Learning, Deep Learning, and Cryptosystems: Threats and Future Research Directions' accepted for publication. Ranked among the top 20% of submissions and to be published in Springer LNNS, indexed by SCOPUS, WoS, EI, and DBLP.",
    icon: "Award",
    credentialUrl: "",
  },
  {
    title: "1st Runners-Up – Hackathon",
    organization: "UAP SNH Club – INNOVATEX 2025",
    date: "May 2025",
    description:
      "Secured second position in the hackathon competition at INNOVATEX 2025.",
    icon: "Trophy",
    credentialUrl:
      "https://drive.google.com/file/d/1GxdKXJl8tzQiwsaPiHbom-lznI_2QbBe/view?usp=sharing",
  },

  {
    title: "Dean's Award - Spring 2024",
    organization: "University of Asia Pacific",
    date: "Spring 2024",
    description:
      "Received Dean's Award for outstanding academic performance in Spring Semester 2024.",
    icon: "Award",
    credentialUrl:
      "https://drive.google.com/file/d/1NCdPu612uJTVg_neZ-R5XfD6tKYKE3nv/view?usp=sharing",
  },
  {
    title: "Dean's Award - Fall 2024",
    organization: "University of Asia Pacific",
    date: "Fall 2024",
    description:
      "Received Dean's Award for outstanding academic performance in Fall Semester 2024.",
    icon: "Award",
    credentialUrl:
      "https://drive.google.com/file/d/1bxYfh5nroS3_8wazTgLspWGr28eBnPzY/view?usp=sharing",
  },
  {
    title: "4th Place – NEOFETCH Hackathon",
    organization: "MIST Innovation Club",
    date: "March 2025",
    description:
      "Achieved 4th place among numerous participants in the NEOFETCH Hackathon.",
    icon: "Star",
    credentialUrl: "",
  },
];

export const certifications = [
  {
    title: "Frontend Web Developer Intern at Eutropia IT",
    credentialUrl:
      "https://drive.google.com/file/d/1a46DiKCiuXrL9ifrlS-t13TMnkJFgeif/view?usp=sharingm",
  },
  {
    title: "Junior Software Engineer Intern at Datavro",
    credentialUrl: "",
  },
];
export const experience = [
  {
    role: "Junior Software Engineer (Industrial Trainee)",
    company: "Eutropia IT Solution",
    location: "Dhaka, Bangladesh",
    period: "2026",
    type: "Internship",
    description:
      "Working as a full stack developer building and maintaining client projects with PostgreSQL and Next.js, as well as Django REST Framework and Django MVT applications. Completing this internship as part of the CSE 330 Industrial Training course at the University of Asia Pacific, under the supervision of Mr. Mirza Shakil, Managing Director at Eutropia IT.",
    tech: ["Next.js", "PostgreSQL", "Django REST Framework"],
  },
  {
    role: "Junior Software Engineer Intern",
    company: "Datavro",
    location: "Dhaka, Bangladesh",
    period: "2026",
    type: "Internship",
    description:
      "Contributed to web application development, gaining hands-on experience with real-world software engineering practices, collaborative development workflows, and production codebases.",
    tech: ["React.js", "Next.js", "Postgres"],
  },
  // {
  //   role: "Founder",
  //   company: "Venfyy (fCommerce)",
  //   location: "Dhaka, Bangladesh",
  //   period: "2024 - Present",
  //   type: "Business",
  //   description:
  //     "Run an independent fCommerce business in Bangladesh, building and maintaining the storefront (venfyy.vercel.app) using Next.js with Google Sheets as a lightweight CMS, and handling everything from product sourcing to order fulfillment and customer communication.",
  //   tech: ["Next.js", "Google Sheets API", "Google Apps Script"],
  // },
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science Engineering",
    school: "University of Asia Pacific",
    location: "Dhaka, Bangladesh",
    period: "2022 - 2026",
    gpa: "3.4/4.0",
  },
  {
    degree: "Higher Secondary Certificate (HSC) in Science",
    school: "BCIC College",
    location: "Dhaka, Bangladesh",
    period: "2018 - 2020",
    gpa: "5.00/5.00",
  },
  {
    degree: "Secondary School Certificate (SSC) in Science",
    school: "Darussalam Govt Secondary School",
    location: "Dhaka, Bangladesh",
    period: "2016 - 2018",
    gpa: "5.00/5.00",
  },
];

//export const onlineCourses = [
// {
//   title: "Machine Learning Fundamentals",
//   provider: "Self-Learning",
//   year: "2025 - Present",
// },
// {
//   title: "React Native App Development",
//   provider: "Self-Learning",
//   year: "2025 - Present",
// },
// {
//   title: "SQL",
//   provider: "Self-Learning",
//   year: "2026 - Present",
// },
// {
//   title: "DSA",
//   provider: "Self-Learning",
//   year: "2026 - Present",
// },
//];

export const currentlyWorkingOn = [
  {
    title:
      "Double Layer Security System in IoMT Network for Smart Healthcare System",
    description:
      "Developing an advanced double layer security system for IoT networks specifically designed for smart healthcare applications.",
    status: "In Progress",
    progress: 90,
    tech: ["Cryptography", "Machine Learning", "Networking", " Security"],
    startDate: "2025",
    expectedCompletion: "2026",
  },
];
