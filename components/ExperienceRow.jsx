export default function ExperienceRow({ company, role, date, desc }) {
  return (
    <div className="border-b border-gray-100 py-4 last:border-0">
      <div className="flex items-baseline justify-between gap-4">
        <p>
          <span className="font-semibold text-gray-900">{company}</span>
          <span className="ml-2 text-xs text-emerald-700">{role}</span>
        </p>
        <span className="shrink-0 text-xs text-gray-400">{date}</span>
      </div>
      {desc && <p className="mt-1.5 text-sm">{desc}</p>}
    </div>
  );
}
