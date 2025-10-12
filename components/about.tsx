"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { about, skills } from "@/lib/data";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 flex items-center gap-3 sm:gap-4">
            <span className="text-accent font-mono text-xl sm:text-2xl">
              01.
            </span>
            About Me
            <span className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </h2>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              {about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
              <p className="text-foreground font-medium">
                Here are a few technologies I've been working with recently:
              </p>
            </div>

            <div className="order-first md:order-last">
              <motion.div
                className="relative group max-w-xs mx-auto md:max-w-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 }}
              >
                <div className="relative z-10 rounded overflow-hidden">
                  <img
                    src={about.image || "/placeholder.svg"}
                    alt="Profile"
                    className="rounded grayscale hover:grayscale-0 transition-all duration-300 w-full h-auto"
                  />
                </div>
                <div className="absolute inset-0 border-2 border-accent rounded translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
              </motion.div>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 mt-6 sm:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="flex items-center gap-2 text-xs sm:text-sm font-mono text-muted-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.05 }}
              >
                <span className="text-accent">▹</span>
                <span className="text-balance">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
