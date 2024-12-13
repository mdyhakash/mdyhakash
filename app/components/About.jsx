// 'use client'
// import { motion } from 'framer-motion'

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-3xl font-bold text-center mb-8"
//         >
//           About Me
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="text-xl text-gray-700 text-center max-w-3xl mx-auto"
//         >
//           I'm a passionate full stack developer with experience in building scalable, secure and reliable web applications. I enjoy solving complex problems and learning new skills.
//         </motion.p>
//       </div>
//     </section>
//   )
// }

// export default About
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const About = () => {
  const images = [
    "/profile1.jpg", // Replace with your image paths
    "/profile2.jpg",
    "/profile3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Image Card */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-80 h-80 border-4 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-lg overflow-hidden">
            <Image
              src={images[currentIndex]}
              alt={`Profile ${currentIndex + 1}`}
              layout="fill"
              objectFit="cover"
              className="p-3 transition-transform duration-500 ease-in-out rounded"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:ml-10 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            I'm a passionate full stack developer with experience in building
            scalable, secure, and reliable web applications. I enjoy solving
            complex problems and learning new skills.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
