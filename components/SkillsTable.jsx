export default function SkillsTable({ skills }) {
  return (
    <div>
      {skills.map((s) => (
        <div
          key={s.label}
          className="grid grid-cols-[130px_1fr] gap-4 border-b border-gray-100 py-3 text-sm last:border-0 sm:grid-cols-[180px_1fr]"
        >
          <span className="font-medium text-gray-900">{s.label}</span>
          <span>{s.items}</span>
        </div>
      ))}
    </div>
  );
}
