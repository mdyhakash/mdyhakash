import Header from "@/components/Header";
import Section from "@/components/Section";
import ProjectRow from "@/components/ProjectRow";
import SkillsTable from "@/components/SkillsTable";
import ExperienceRow from "@/components/ExperienceRow";
import AwardRow from "@/components/AwardRow";
import { profile, projects, publications, skills, learning, experience, education, awards } from "./data";

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-[860px] px-6 py-16">
        <Header />

        <Section title="Projects">
          {projects.map((p) => <ProjectRow key={p.name} {...p} />)}
        </Section>

        <Section title="Publications">
          {publications.map((p) => <ProjectRow key={p.name} {...p} />)}
        </Section>

        <Section title="Skills">
          <SkillsTable skills={skills} />
        </Section>

        <Section title="Currently Learning">
          <SkillsTable skills={learning} />
        </Section>

        <Section title="Work Experience">
          {experience.map((e) => (
            <ExperienceRow key={`${e.company}-${e.date}`} {...e} />
          ))}
        </Section>

        <Section title="Education">
          {education.map((e) => <AwardRow key={e.title} {...e} />)}
        </Section>

        <Section title="Honors & Awards">
          {awards.map((a) => <AwardRow key={a.title} {...a} />)}
        </Section>

        <Section title="Get in Touch">
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.links.email}`}
              className="rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700"
            >
              Email Me
            </a>
            <span className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900">
              {profile.links.email}
            </span>
          </div>
        </Section>
      </main>

      <footer className="border-t border-gray-100 py-6 text-center text-xs text-gray-400">
        Built by Akash
      </footer>
    </>
  );
}
