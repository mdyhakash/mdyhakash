import { v4 as uuidv4 } from "uuid";

export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  orientation: "landscape" | "portrait" | "square" | "";
  image: {
    local?: string;
    url?: string;
  };
}

export const galleryImages: GalleryImage[] = [
  {
    id: uuidv4(),
    title: "Runners up Innovatex Hackathon",
    description: "",
    location: "University of Asia Pacific, Bangladesh",
    date: "May 2025",
    orientation: "landscape",
    image: {
      local: "/images/prize2.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Champion Software Showcase Innovatex Hackathon",
    description: "",
    location: "University of Asia Pacific, Bangladesh",
    date: "May 2025",
    orientation: "landscape",
    image: {
      local: "/images/prize5.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "",
    description: "",
    location: "University of Asia Pacific, Bangladesh",
    date: "May 2025",
    orientation: "",
    image: {
      local: "/images/prize1.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Champions and Runners up Innovatex Hackathon",
    description: "",
    location: "UAP Auditorium",
    date: "March 2024",
    orientation: "landscape",
    image: {
      local: "/images/prize3.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "EWU National RoboFest",
    description: "",
    location: "East West University, Bangladesh",
    date: "November 2024",
    orientation: "",
    image: {
      local: "/images/ewu1.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Department Head of CSE UAP",
    description: "",
    location: "Department of CSE, University of Asia Pacific, Bangladesh",
    date: "May 2025",
    orientation: "landscape",
    image: {
      local: "/images/prize4.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Dean's honor list award ceremony Spring 2024",
    description: "",
    location: "University of Asia Pacific, Bangladesh",
    date: "April 2025",
    orientation: "landscape",
    image: {
      local: "/images/deans1.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Dean's honor list award ceremony Fall 2024",
    description: "",
    location: "University of Asia Pacific, Bangladesh",
    date: "April 2025",
    orientation: "landscape",
    image: {
      local: "/images/deans2.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Innovatex 2025",
    description: "",
    location: "University of Asia Pacific, Bangladesh",
    date: "May 2025",
    orientation: "landscape",
    image: {
      local: "/images/innovatex3.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "",
    description: "",
    location: "University of Asia Pacific, Bangladesh",
    date: "May 2025",
    orientation: "landscape",
    image: {
      local: "/images/innovatex2.jpg",
    },
  },
  // {
  //   id: uuidv4(),
  //   title: "Techno Crats V.2",
  //   description:
  //     "UAP_Team_Hiking built ShasthyaSetu — a secure, efficient, and inclusive platform connecting healthcare providers and patients.",
  //   location:
  //     "International University of Business Agriculture and Technology, Bangladesh",
  //   date: "December 2024",
  //   orientation: "",
  //   image: {
  //     local: "/images/iubathackahton1.jpg",
  //   },
  // },
  {
    id: uuidv4(),
    title: "WebXtreme Hackathon, organized by NSUCEC",
    description:
      "Our team, The Mavericks, built Reportify — a platform where users can report crimes with AI verification",
    location: "North South University, Dhaka",
    date: "February 2025",
    orientation: "landscape",
    image: {
      local: "/images/nushackathon1.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Inventious 4.1",
    description:
      "Our team The Mavericks participated in the MIST Hackathon Inventious 4.1 and secured 4th place!",
    location: "Military Institute of Science and Technology, Bangladesh",
    date: "March 2025",
    orientation: "landscape",
    image: {
      local: "/images/misthackathon1.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "",
    description: "",
    location: "Military Institute of Science and Technology, Bangladesh",
    date: "March 2025",
    orientation: "square",
    image: {
      local: "/images/misthackathon2.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "",
    description: "",
    location: "Military Institute of Science and Technology, Bangladesh",
    date: "March 2025",
    orientation: "square",
    image: {
      local: "/images/misthackathon3.jpg",
    },
  },

  {
    id: uuidv4(),
    title: "Harvard HSIL Hackathon",
    description: "",
    location: "United International University, Bangladesh",
    date: "April 2025",
    orientation: "",
    image: {
      local: "/images/hsil2.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "EWU National RoboFest",
    description: "",
    location: "East West University, Bangladesh",
    date: "November 2024",
    orientation: "",
    image: {
      local: "/images/ewu2.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Harvard HSIL Hackathon",
    description: "",
    location: "United International University, Bangladesh",
    date: "April 2025",
    orientation: "landscape",
    image: {
      local: "/images/hsil1.jpg",
    },
  },
];
