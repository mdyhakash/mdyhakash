// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const Header = () => {
//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="fixed w-full bg-white shadow-md z-10"
//     >
//       <nav className="container mx-auto px-6 py-3">
//         <ul className="flex justify-center space-x-8">
//           <li>
//             <Link href="#home" className="text-gray-800 hover:text-blue-600">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="#about" className="text-gray-800 hover:text-blue-600">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link href="#skills" className="text-gray-800 hover:text-blue-600">
//               Skills
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="#education"
//               className="text-gray-800 hover:text-blue-600"
//             >
//               Education
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="#projects"
//               className="text-gray-800 hover:text-blue-600"
//             >
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link href="#contact" className="text-gray-800 hover:text-blue-600">
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </motion.header>
//   );
// };

// export default Header;
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

// Helper function to scramble text
const scrambleText = (text) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return text
    .split("")
    .map(() => chars[Math.floor(Math.random() * chars.length)])
    .join("");
};

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrambled, setScrambled] = useState({});

  // Handle mouse enter for scrambling text
  const handleMouseEnter = (item) => {
    setScrambled((prev) => ({
      ...prev,
      [item]: scrambleText(item), // Scramble the specific item text
    }));
  };

  // Handle mouse leave to return text to original
  const handleMouseLeave = (item) => {
    setScrambled((prev) => ({
      ...prev,
      [item]: null, // Reset the scrambled text to null (or original text)
    }));
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-xl z-50"
    >
      <nav className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          {/* Logo with hover effect */}
          <div className="text-3xl font-semibold text-white cursor-pointer relative group">
            <Link href="#" className="text-white">
              Md Yasin Hossain Akash
            </Link>
          </div>

          {/* Navigation Menu */}
          <ul className="flex space-x-10 items-center">
            {["Home", "About", "Skills", "Education", "Projects", "Contact"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className={`text-lg font-medium text-white relative group`}
                  onClick={() => setActiveLink(item)} // Update active link state
                  onMouseEnter={() => handleMouseEnter(item)} // Scramble on hover
                  onMouseLeave={() => handleMouseLeave(item)} // Reset on leave
                >
                  <span className="relative z-10">
                    {scrambled[item] || item} {/* Display scrambled text or original */}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg z-0"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;





