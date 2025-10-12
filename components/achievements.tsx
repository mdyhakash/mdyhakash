"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Star, Code, Zap, Trophy } from "lucide-react";
import { achievements, certifications } from "@/lib/data";

const iconMap = {
  Award,
  Star,
  Code,
  Zap,
  Trophy,
};

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="achievements"
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
              04.
            </span>
            Achievements & Recognition
            <span className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </h2>

          <p className="text-muted-foreground mb-8 sm:mb-12 max-w-2xl text-sm sm:text-base">
            Awards, certifications and academic recognitions I've received
            throughout my journey.
          </p>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {achievements.map((achievement, index) => {
              const Icon = iconMap[achievement.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={achievement.title}
                  className="bg-card p-5 sm:p-6 rounded border border-border hover:border-accent transition-all group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2.5 sm:p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold mb-1 text-foreground group-hover:text-accent transition-colors text-balance">
                        {achievement.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground mb-2">
                        <span className="text-balance">
                          {achievement.organization}
                        </span>
                        <span>•</span>
                        <span>{achievement.date}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-foreground">
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-card rounded border border-border hover:border-accent transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs sm:text-sm text-muted-foreground text-balance">
                    {cert}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
