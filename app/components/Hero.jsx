// "use client";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="h-screen flex items-center justify-center bg-gray-100"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center"
//       >
//         <h1 className="text-5xl font-bold mb-4">John Doe</h1>
//         <h2 className="text-3xl text-gray-600 mb-8">Full Stack Developer</h2>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold"
//         >
//           View My Work
//         </motion.button>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden"
    >
      {/* Animated Background Circles */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-30 blur-3xl top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full opacity-20 blur-2xl bottom-1/4 right-1/4 animate-ping"></div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        {/* Profile Image */}
        <div className="w-40 h-40 mx-auto mb-6 relative rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg">
          <Image
            src="/profile.jpg" // Replace with your profile image path
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Md Yasin Hossain Akash
        </h1>

        {/* Title */}
        <h2 className="text-3xl text-gray-400 mb-8">Frontend Web Developer</h2>

        {/* Animated Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.7)",
          }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg"
        >
          <span className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-md opacity-70"></span>
          <span className="relative">Download Resume</span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
