// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";

// const projectsData = {
//   frontend: [
//     {
//       id: 1,
//       title: "E-commerce Platform",
//       description: "A full-featured online store built with Next.js and Stripe",
//       date: "2024-12-01",
//       image: "/path-to-your-image/ecommerce.jpg", // Replace with your image path
//       previewLink: "https://your-preview-link.com",
//       codeLink: "https://github.com/your-github/ecommerce-platform",
//       detailsLink: "https://github.com/your-github/ecommerce-platform/blob/main/README.md",
//     },
//     {
//       id: 2,
//       title: "Portfolio Website",
//       description: "A responsive portfolio website using React and Tailwind CSS",
//       date: "2024-11-20",
//       image: "/path-to-your-image/portfolio.jpg", // Replace with your image path
//       previewLink: "https://your-preview-link.com",
//       codeLink: "https://github.com/your-github/portfolio-website",
//       detailsLink: "https://github.com/your-github/portfolio-website/blob/main/README.md",
//     },
//   ],
//   hackathon: [
//     {
//       id: 3,
//       title: "AI-powered Chat Bot",
//       description:
//         "A chatbot using natural language processing, built during a 24-hour hackathon",
//       date: "2024-10-15",
//       image: "/path-to-your-image/chatbot.jpg", // Replace with your image path
//       previewLink: "https://your-preview-link.com",
//       codeLink: "https://github.com/your-github/ai-chatbot",
//       detailsLink: "https://github.com/your-github/ai-chatbot/blob/main/README.md",
//     },
//     {
//       id: 4,
//       title: "Sustainable City Planner",
//       description:
//         "An interactive city planning tool focusing on sustainability, created in a green tech hackathon",
//       date: "2024-09-05",
//       image: "/path-to-your-image/cityplanner.jpg", // Replace with your image path
//       previewLink: "https://your-preview-link.com",
//       codeLink: "https://github.com/your-github/sustainable-city-planner",
//       detailsLink: "https://github.com/your-github/sustainable-city-planner/blob/main/README.md",
//     },
//   ],
//   // Add other categories similarly...
// };

// const ProjectCategory = ({ title, projects }) => (
//   <div className="space-y-6">
//     <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       {projects.map((project) => (
//         <motion.div
//           key={project.id}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: project.id * 0.1 }}
//           className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform"
//         >
//           {/* Thumbnail Image */}
//           <div className="mb-4">
//             <img
//               src={project.image}
//               alt={`${project.title} Thumbnail`}
//               className="w-full h-56 object-cover rounded-lg"
//             />
//           </div>

//           <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
//           <p className="text-gray-300 mb-1">{project.description}</p>
//           <span className="text-sm text-gray-400">{project.date}</span>

//           {/* Buttons */}
//           <div className="mt-4 flex justify-between items-center">
//             <a
//               href={project.previewLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
//             >
//               Preview
//             </a>
//             <a
//               href={project.codeLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-4 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition"
//             >
//               Code
//             </a>
//             <a
//               href={project.detailsLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
//             >
//               Details
//             </a>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   </div>
// );

// const Projects = () => {
//   const [activeCategory, setActiveCategory] = useState("frontend");
//   const latestProjects = Object.values(projectsData).flat().sort((a, b) => new Date(b.date) - new Date(a.date));

//   const categories = [
//     { id: "frontend", name: "Frontend Projects" },
//     { id: "hackathon", name: "Hackathon Projects" },
//     { id: "varsity", name: "Varsity Projects" },
//     { id: "timepass", name: "My Timepass Projects" },
//   ];

//   return (
//     <section id="projects" className="py-20 bg-gray-900 text-white">
//       <div className="container mx-auto px-6">
//         {/* Section Header */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl font-bold text-center mb-8"
//         >
//           My Projects
//         </motion.h2>

//         {/* Latest Projects */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="mb-12"
//         >
//           <h3 className="text-3xl font-semibold mb-6 text-center">Latest Projects</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {latestProjects.slice(0, 4).map((project) => (
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: project.id * 0.1 }}
//                 className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform"
//               >
//                 {/* Thumbnail Image */}
//                 <div className="mb-4">
//                   <img
//                     src={project.image}
//                     alt={`${project.title} Thumbnail`}
//                     className="w-full h-56 object-cover rounded-lg"
//                   />
//                 </div>

//                 <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
//                 <p className="text-gray-300 mb-1">{project.description}</p>
//                 <span className="text-sm text-gray-400">{project.date}</span>

//                 {/* Buttons */}
//                 <div className="mt-4 flex justify-between items-center">
//                   <a
//                     href={project.previewLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
//                   >
//                     Preview
//                   </a>
//                   <a
//                     href={project.codeLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition"
//                   >
//                     Code
//                   </a>
//                   <a
//                     href={project.detailsLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
//                   >
//                     Details
//                   </a>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Category Buttons */}
//         <div className="flex justify-center space-x-4 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setActiveCategory(category.id)}
//               className={`px-6 py-2 rounded-full transition-all duration-300 ${
//                 activeCategory === category.id
//                   ? "bg-blue-600 text-white shadow-md scale-110"
//                   : "bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white"
//               }`}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>

//         {/* Project Category Content */}
//         <motion.div
//           key={activeCategory}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <ProjectCategory
//             title={categories.find((c) => c.id === activeCategory).name}
//             projects={projectsData[activeCategory]}
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projectsData = {
  frontend: [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store built with Next.js and Stripe",
      date: "2024-12-01",
      image: "/path-to-your-image/ecommerce.jpg", // Replace with your image path
      previewLink: "https://your-preview-link.com",
      codeLink: "https://github.com/your-github/ecommerce-platform",
      detailsLink: "https://github.com/your-github/ecommerce-platform/blob/main/README.md",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website using React and Tailwind CSS",
      date: "2024-11-20",
      image: "/path-to-your-image/portfolio.jpg", // Replace with your image path
      previewLink: "https://your-preview-link.com",
      codeLink: "https://github.com/your-github/portfolio-website",
      detailsLink: "https://github.com/your-github/portfolio-website/blob/main/README.md",
    },
  ],
  hackathon: [
    {
      id: 3,
      title: "AI-powered Chat Bot",
      description:
        "A chatbot using natural language processing, built during a 24-hour hackathon",
      date: "2024-10-15",
      image: "/path-to-your-image/chatbot.jpg", // Replace with your image path
      previewLink: "https://your-preview-link.com",
      codeLink: "https://github.com/your-github/ai-chatbot",
      detailsLink: "https://github.com/your-github/ai-chatbot/blob/main/README.md",
    },
    {
      id: 4,
      title: "Sustainable City Planner",
      description:
        "An interactive city planning tool focusing on sustainability, created in a green tech hackathon",
      date: "2024-09-05",
      image: "/path-to-your-image/cityplanner.jpg", // Replace with your image path
      previewLink: "https://your-preview-link.com",
      codeLink: "https://github.com/your-github/sustainable-city-planner",
      detailsLink: "https://github.com/your-github/sustainable-city-planner/blob/main/README.md",
    },
  ],
};

const ProjectCategory = ({ title, projects }) => (
  <div className="space-y-6">
    <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: project.id * 0.1 }}
          className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform"
        >
          {/* Thumbnail Image */}
          <div className="mb-4">
            <Image
              src={project.image}
              alt={`${project.title} Thumbnail`}
              className="w-full h-56 object-cover rounded-lg"
              width={500}
              height={300}
            />
          </div>

          <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
          <p className="text-gray-300 mb-1">{project.description}</p>
          <span className="text-sm text-gray-400">{project.date}</span>

          {/* Buttons */}
          <div className="mt-4 flex justify-between items-center space-x-4">
            <Link
              href={project.previewLink}
              target="_blank"
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:bg-gradient-to-l transition transform hover:scale-105 duration-300 ease-in-out shadow-md"
            >
              Preview
            </Link>
            <Link
              href={project.codeLink}
              target="_blank"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:bg-gradient-to-l transition transform hover:scale-105 duration-300 ease-in-out shadow-md"
            >
              Code
            </Link>
            <Link
              href={project.detailsLink}
              target="_blank"
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:bg-gradient-to-l transition transform hover:scale-105 duration-300 ease-in-out shadow-md"
            >
              Details
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const latestProjects = Object.values(projectsData)
    .flat()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const categories = [
    { id: "frontend", name: "Frontend Projects" },
    { id: "hackathon", name: "Hackathon Projects" },
    { id: "varsity", name: "Varsity Projects" },
    { id: "timepass", name: "My Timepass Projects" },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8"
        >
          My Projects
        </motion.h2>

        {/* Latest Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-semibold mb-6 text-center">Latest Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestProjects.slice(0, 4).map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }}
                className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform"
              >
                {/* Thumbnail Image */}
                <div className="mb-4">
                  <Image
                    src={project.image}
                    alt={`${project.title} Thumbnail`}
                    className="w-full h-56 object-cover rounded-lg"
                    width={500}
                    height={300}
                  />
                </div>

                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-300 mb-1">{project.description}</p>
                <span className="text-sm text-gray-400">{project.date}</span>

                {/* Buttons */}
                <div className="mt-4 flex justify-between items-center space-x-4">
                  <Link
                    href={project.previewLink}
                    target="_blank"
                    className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:bg-gradient-to-l transition transform hover:scale-105 duration-300 ease-in-out shadow-md"
                  >
                    Preview
                  </Link>
                  <Link
                    href={project.codeLink}
                    target="_blank"
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:bg-gradient-to-l transition transform hover:scale-105 duration-300 ease-in-out shadow-md"
                  >
                    Code
                  </Link>
                  <Link
                    href={project.detailsLink}
                    target="_blank"
                    className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:bg-gradient-to-l transition transform hover:scale-105 duration-300 ease-in-out shadow-md"
                  >
                    Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Project Categories */}
        <div className="space-y-12">
          <ProjectCategory
            title={categories.find((cat) => cat.id === activeCategory).name}
            projects={projectsData[activeCategory] || []}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
