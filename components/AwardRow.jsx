export default function AwardRow({ title, sub, year }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2.5">
      <div>
        <p className="text-sm font-medium text-gray-900">{title}</p>
        {sub && <p className="text-xs text-gray-400">{sub}</p>}
      </div>
      {year && <span className="shrink-0 font-mono text-xs text-gray-400">{year}</span>}
    </div>
  );
}
