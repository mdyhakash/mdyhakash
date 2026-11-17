import { ArrowUpRight } from "lucide-react";

export default function ProjectRow({ name, desc, tech, links = [] }) {
  return (
    <div className="border-b border-gray-100 py-4 last:border-0">
      <p className="font-semibold text-gray-900">{name}</p>
      <p className="mt-1 text-sm">{desc}</p>
      {tech && <p className="mt-1 text-xs text-gray-400">{tech}</p>}
      {links.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-0.5 text-emerald-700 transition hover:text-emerald-900"
            >
              {l.label}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
