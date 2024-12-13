// "use client";
// import { motion } from "framer-motion";

// const educationData = [
//   {
//     id: 1,
//     degree: "Bachelor of Science in Computer Science",
//     institution: "University of Technology",
//     year: "2018 - 2022",
//     description:
//       "Focused on software engineering, data structures, and algorithms.",
//   },
//   {
//     id: 2,
//     degree: "High School Diploma",
//     institution: "Central High School",
//     year: "2014 - 2018",
//     description:
//       "Graduated with honors, participated in various coding competitions.",
//   },
// ];

// const Education = () => {
//   return (
//     <section id="education" className="py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-3xl font-bold text-center mb-8"
//         >
//           Education
//         </motion.h2>
//         <div className="space-y-6">
//           {educationData.map((edu) => (
//             <motion.div
//               key={edu.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: edu.id * 0.1 }}
//               className="bg-gray-50 p-6 rounded-lg shadow-md"
//             >
//               <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
//               <p className="text-gray-600 mb-2">{edu.institution}</p>
//               <p className="text-gray-500 mb-2">{edu.year}</p>
//               <p className="text-gray-700">{edu.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;
"use client";
import { motion } from "framer-motion";

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    year: "2018 - 2022",
    description:
      "Focused on software engineering, data structures, and algorithms.",
  },
  {
    id: 2,
    degree: "High School Diploma",
    institution: "Central High School",
    year: "2014 - 2018",
    description:
      "Graduated with honors, participated in various coding competitions.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Education
        </motion.h2>

        {/* Timeline Layout */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col items-center ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                } sm:items-start sm:space-x-6`}
              >
                {/* Dot */}
                <div className="relative flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`max-w-lg p-6 bg-gray-800 rounded-xl shadow-md ${
                    index % 2 === 0 ? "sm:ml-6" : "sm:mr-6"
                  }`}
                >
                  <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-lg text-gray-400 mb-2">{edu.institution}</p>
                  <p className="text-sm text-gray-500 mb-4">{edu.year}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
