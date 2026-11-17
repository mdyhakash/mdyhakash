export default function Section({ title, children }) {
  return (
    <section className="mt-16">
      <h2 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-violet-500">
        {title}
      </h2>
      {children}
    </section>
  );
}
