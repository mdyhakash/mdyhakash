import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Name and Role */}
        <div className="mb-6">
          <h3 className="text-3xl font-bold mb-2">Md Yasin Hossain Akash</h3>
          <p className="text-lg text-gray-400">Front-End Web Developer</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/mdyhakash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/mdyhakash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://twitter.com/mdyhakash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <FaTwitter size={30} />
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Md Yasin Hossain Akash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
