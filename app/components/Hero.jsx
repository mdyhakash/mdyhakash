import { MdOutlineFileDownload } from "react-icons/md";
import MagicButton from "./ui/MagicButton";
import Spotlight from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full bg-black-100 bg-grid-white/[0.05] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100"></div>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89px] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-4xl lg:text-5xl"
            words="Bringing ideas to life with modern web technologies and pixel-perfect precision."
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Akash, a Frontend Web developer based in Bangladesh.
          </p>
          <a href="/resume.pdf" download="Md_Yasin_Hossain_Akash_Resume.pdf">
            <MagicButton
              title="Download Resume"
              icon={<MdOutlineFileDownload />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
