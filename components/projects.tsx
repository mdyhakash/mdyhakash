"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowRight, Lock } from "lucide-react";
import { projects } from "@/lib/data";
import { ProjectModal } from "@/components/project-modal";

const filters = ["All", "Featured", "Web Apps", "Mobile", "Tools"];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return project.featured;
    return project.category === activeFilter;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4">
            <span className="text-accent font-mono text-xl sm:text-2xl">
              04.
            </span>
            <span className="text-balance">Things I've Built</span>
            <span className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </h2>

          <p className="text-muted-foreground mb-8 sm:mb-12 max-w-2xl text-sm sm:text-base">
            Here are some of my recent projects. Each one represents a unique
            challenge and learning experience.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded font-mono text-xs sm:text-sm transition-colors touch-manipulation min-h-[44px] ${
                  activeFilter === filter
                    ? "bg-accent text-accent-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>

          {featuredProjects.length > 0 && (
            <div className="space-y-16 sm:space-y-20 md:space-y-24 mb-12 sm:mb-16">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="grid md:grid-cols-12 gap-4 sm:gap-6 items-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                >
                  <div
                    className={`md:col-span-7 relative group ${
                      index % 2 === 1 ? "md:col-start-6" : ""
                    }`}
                  >
                    <div className="relative overflow-hidden rounded">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors" />
                      {/* Client project badge on image */}
                      {project.clientProject && (
                        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-background/80 backdrop-blur border border-accent/50 text-accent rounded font-mono text-xs">
                          <Lock className="w-3 h-3" />
                          Client Project
                        </div>
                      )}
                    </div>
                  </div>

                  <div
                    className={`md:col-span-5 ${
                      index % 2 === 1
                        ? "md:col-start-1 md:row-start-1 md:text-left"
                        : "md:text-right"
                    } flex flex-col gap-3 sm:gap-4 -mt-10 md:mt-0 relative z-10 px-4 md:px-0`}
                  >
                    <div className="bg-card/95 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 sm:p-6 md:p-0 rounded md:rounded-none shadow-lg md:shadow-none">
                      {/* <p className="text-accent font-mono text-xs sm:text-sm mb-2 md:mb-3">
                        {project.clientProject ? "Client Project" : "Featured Project"}
                      </p> */}
                      <p className="text-accent font-mono text-xs sm:text-sm mb-2 md:mb-3">
                        Featured Project
                      </p>

                      <h3 className="text-xl sm:text-2xl font-bold text-foreground text-balance mb-3 md:mb-4">
                        {project.title}
                      </h3>

                      <div className="md:bg-card md:p-6 md:rounded md:shadow-lg">
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`flex flex-wrap gap-2 sm:gap-3 font-mono text-xs sm:text-sm text-muted-foreground ${
                        index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                      }`}
                    >
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div
                      className={`flex items-center gap-4 ${
                        index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                      }`}
                    >
                      {project.github && project.github !== "#" ? (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors p-2 -m-2 touch-manipulation"
                          whileHover={{ scale: 1.1, y: -2 }}
                          aria-label="View on GitHub"
                        >
                          <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                        </motion.a>
                      ) : project.clientProject ? (
                        <span
                          className="text-muted-foreground/40 p-2 -m-2 cursor-not-allowed"
                          title="Private repository"
                        >
                          <Lock className="w-5 h-5 sm:w-6 sm:h-6" />
                        </span>
                      ) : null}

                      {project.live && project.live !== "#" ? (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors p-2 -m-2 touch-manipulation"
                          whileHover={{ scale: 1.1, y: -2 }}
                          aria-label="View live site"
                        >
                          <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
                        </motion.a>
                      ) : null}

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 text-accent hover:underline font-mono text-xs sm:text-sm touch-manipulation"
                      >
                        View Details
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {otherProjects.length > 0 && (
            <>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
                Other Noteworthy Projects
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {otherProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="bg-card rounded hover:translate-y-[-4px] transition-transform group border border-border overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-36 sm:h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {project.clientProject && (
                        <div className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-0.5 bg-background/80 backdrop-blur border border-accent/50 text-accent rounded font-mono text-xs">
                          <Lock className="w-2.5 h-2.5" />
                          Client Project
                        </div>
                      )}
                    </div>
                    <div className="p-5 sm:p-6">
                      <div className="flex justify-between items-start mb-4">
                        {project.clientProject && (
                          <span className="font-mono text-xs text-accent">
                            Client Project
                          </span>
                        )}
                        <div className="flex gap-3 ml-auto">
                          {project.github && project.github !== "#" ? (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-accent transition-colors p-2 -m-2 touch-manipulation"
                              aria-label="View on GitHub"
                            >
                              <Github className="w-5 h-5" />
                            </a>
                          ) : project.clientProject ? (
                            <span
                              className="text-muted-foreground/40 p-2 -m-2 cursor-not-allowed"
                              title="Private repository"
                            >
                              <Lock className="w-5 h-5" />
                            </span>
                          ) : null}
                          {project.live && project.live !== "#" ? (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-accent transition-colors p-2 -m-2 touch-manipulation"
                              aria-label="View live site"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          ) : null}
                        </div>
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors text-balance">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground mb-4">
                        {project.tech.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 text-accent hover:underline font-mono text-xs sm:text-sm touch-manipulation"
                      >
                        View Details
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
