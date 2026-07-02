"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import {
  X,
  ExternalLink,
  Github,
  Layers,
  AlertTriangle,
  Sparkles,
} from "lucide-react";
import type { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-0 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal content */}
          <motion.div
            className="relative bg-card border border-border sm:rounded-lg w-full sm:max-w-2xl max-h-[100svh] sm:max-h-[85vh] overflow-y-auto"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur border border-border text-foreground hover:text-accent hover:border-accent transition-colors touch-manipulation"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 sm:h-64 object-cover"
              />
            </div>

            <div className="p-5 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground text-balance mb-4">
                {project.title}
              </h2>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-accent-foreground rounded font-mono text-xs sm:text-sm hover:bg-accent/90 transition-colors touch-manipulation min-h-[44px]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Project
                  </a>
                )}
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 border-2 border-border text-foreground rounded font-mono text-xs sm:text-sm hover:border-accent hover:text-accent transition-colors touch-manipulation min-h-[44px]"
                  >
                    <Github className="w-4 h-4" />
                    Client Repository
                  </a>
                )}
              </div>

              <section className="mb-6">
                <h3 className="flex items-center gap-2 text-base sm:text-lg font-bold text-foreground mb-2.5">
                  <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs sm:text-sm font-mono bg-muted text-muted-foreground rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section className="mb-6">
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2.5">
                  Description
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>
              </section>

              {project.challenges && (
                <section className="mb-6">
                  <h3 className="flex items-center gap-2 text-base sm:text-lg font-bold text-foreground mb-2.5">
                    <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                    Challenges Faced
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.challenges}
                  </p>
                </section>
              )}

              {project.improvements && (
                <section>
                  <h3 className="flex items-center gap-2 text-base sm:text-lg font-bold text-foreground mb-2.5">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                    Potential Improvements & Future Plans
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.improvements}
                  </p>
                </section>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
