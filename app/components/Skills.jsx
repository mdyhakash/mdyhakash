// "use client";
// import { motion } from "framer-motion";

// const skillsData = [
//   { id: 1, name: "JavaScript", level: 90 },
//   { id: 2, name: "React", level: 85 },
//   { id: 3, name: "Node.js", level: 80 },
//   { id: 4, name: "Python", level: 75 },
//   { id: 5, name: "SQL", level: 70 },
  
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
//       <div className="container mx-auto px-6">
//         {/* Section Header */}
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl font-bold text-center mb-12"
//         >
//           My Skills
//         </motion.h2>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {skillsData.map((skill) => (
//             <motion.div
//               key={skill.id}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: skill.id * 0.1 }}
//               className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
//             >
//               {/* Skill Name */}
//               <h3 className="text-2xl font-semibold mb-4 text-center">
//                 {skill.name}
//               </h3>

//               {/* Progress Bar */}
//               <div className="relative w-full bg-gray-700 h-4 rounded-full overflow-hidden">
//                 <motion.div
//                   initial={{ width: "0%" }}
//                   whileInView={{ width: `${skill.level}%` }}
//                   transition={{ duration: 0.5 }}
//                   className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
//                 ></motion.div>
//               </div>

//               {/* Skill Level */}
//               <span className="block mt-2 text-center text-sm text-gray-400">
//                 Proficiency: {skill.level}%
//               </span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
"use client";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa"; // Skill icons

const skillsData = [
  { id: 1, name: "JavaScript", level: 90, icon: <FaJs size={40} /> },
  { id: 2, name: "React", level: 85, icon: <FaReact size={40} /> },
  { id: 3, name: "Node.js", level: 80, icon: <FaNodeJs size={40} /> },
  { id: 4, name: "Python", level: 75, icon: <FaPython size={40} /> },
  { id: 5, name: "SQL", level: 70, icon: <FaDatabase size={40} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600"
        >
          My Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: skill.id * 0.1 }}
              className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 relative group"
            >
              {/* Skill Icon */}
              <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full p-4">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-2xl font-semibold mb-4 text-center relative z-10">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="relative w-full bg-gray-700 h-4 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                ></motion.div>
              </div>

              {/* Skill Level */}
              <span className="block mt-2 text-center text-sm text-gray-400">
                Proficiency: {skill.level}%
              </span>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-50 rounded-xl transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
