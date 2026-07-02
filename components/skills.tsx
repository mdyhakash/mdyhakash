"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layout, Server, Wrench, type LucideIcon } from "lucide-react";
import { skillCategories } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = { Layout, Server, Wrench };

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4">
            <span className="text-accent font-mono text-xl sm:text-2xl">
              02.
            </span>
            <span className="text-balance">Skills</span>
            <span className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </h2>

          <p className="text-muted-foreground mb-8 sm:mb-12 max-w-2xl text-sm sm:text-base">
            Technologies and tools I work with, organized by category.
          </p>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {skillCategories.map((group, groupIndex) => {
              const Icon = iconMap[group.icon] ?? Wrench;
              return (
                <motion.div
                  key={group.category}
                  className="bg-card p-5 sm:p-6 rounded border border-border hover:border-accent transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: groupIndex * 0.15 }}
                >
                  <div className="flex items-center gap-3 mb-5 sm:mb-6">
                    <div className="p-2.5 bg-accent/10 rounded-lg flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {group.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {group.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs sm:text-sm font-mono text-muted-foreground">
                            {skill.name}
                          </span>
                          <span className="text-xs font-mono text-accent">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-accent rounded-full"
                            initial={{ width: 0 }}
                            animate={
                              isInView ? { width: `${skill.level}%` } : {}
                            }
                            transition={{
                              duration: 0.8,
                              delay: groupIndex * 0.15 + skillIndex * 0.05,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
