import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdDescription } from "react-icons/md";
import { profile } from "@/app/data";

const pill =
  "inline-flex items-center gap-2 rounded-lg border border-violet-100 bg-violet-50 px-3.5 py-2 text-sm font-medium text-violet-700 transition hover:bg-violet-100";

export default function Header() {
  const { name, bio, highlight, avatar, links } = profile;
  return (
    <header className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
      {avatar ? (
        <Image
          src={avatar}
          alt={name}
          width={224}
          height={224}
          priority
          className="h-48 w-48 shrink-0 rounded-full bg-violet-100 object-cover sm:h-56 sm:w-56"
        />
      ) : (
        <div className="flex h-48 w-48 shrink-0 items-end justify-center overflow-hidden rounded-full bg-violet-100 sm:h-56 sm:w-56">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-36 w-36 text-violet-300">
            <circle cx="12" cy="8" r="4.5" />
            <path d="M2 24c0-6 4.5-9 10-9s10 3 10 9z" />
          </svg>
        </div>
      )}
      <div className="text-center sm:text-left">
        <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
        <p className="mt-3 leading-relaxed">
          {bio} <em className="font-medium text-violet-700">{highlight}</em>
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start">
          <a href={links.github} target="_blank" rel="noreferrer" className={pill}><FaGithub /> GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className={pill}><FaLinkedinIn /> LinkedIn</a>
          <a href={`mailto:${links.email}`} className={pill}><MdEmail /> Email</a>
          <a
            href={links.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-3.5 py-2 text-sm font-medium text-white transition hover:bg-violet-700"
          >
            <MdDescription /> Resume
          </a>
        </div>
      </div>
    </header>
  );
}
