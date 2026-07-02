"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar } from "lucide-react";
import { experience } from "@/lib/data";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4">
            <span className="text-accent font-mono text-xl sm:text-2xl">
              03.
            </span>
            <span className="text-balance">Experience</span>
            <span className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </h2>

          <p className="text-muted-foreground mb-8 sm:mb-12 max-w-2xl text-sm sm:text-base">
            Where I've worked and what I've been building professionally.
          </p>

          <div className="relative border-l-2 border-border ml-3 sm:ml-4 space-y-8 sm:space-y-10">
            {experience.map((job, index) => (
              <motion.div
                key={`${job.role}-${job.company}`}
                className="relative pl-6 sm:pl-8"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 }}
              >
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-background" />

                <div className="bg-card p-5 sm:p-6 rounded border border-border hover:border-accent transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground text-balance">
                        {job.role}
                      </h3>
                      <p className="text-accent font-mono text-sm sm:text-base">
                        {job.company}
                      </p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 flex-shrink-0">
                      {job.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                      {job.location}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-muted rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
