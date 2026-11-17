import { profile } from "@/app/data";
import myPhoto from "@/public/myphoto.webp";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdDescription, MdEmail } from "react-icons/md";
const pill =
  "inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-100";

export default function Header() {
  const { name, bio, highlight, avatar, links } = profile;
  return (
    <header className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
      <Image
        src={myPhoto}
        alt={name}
        width={224}
        height={224}
        className="h-48 w-48 shrink-0 rounded-full bg-gray-200 object-cover sm:h-56 sm:w-56"
      />

      <div className="text-center sm:text-left">
        <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
        <p className="mt-3 leading-relaxed">
          {bio} <em className="font-medium text-emerald-700">{highlight}</em>
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className={pill}
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className={pill}
          >
            <FaLinkedinIn /> LinkedIn
          </a>
          <a href={`mailto:${links.email}`} className={pill}>
            <MdEmail /> Email
          </a>
          <a
            href={links.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-3.5 py-2 text-sm font-medium text-white transition hover:bg-gray-700"
          >
            <MdDescription /> Resume
          </a>
        </div>
      </div>
    </header>
  );
}
