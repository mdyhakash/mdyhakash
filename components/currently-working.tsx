"use client"

import { motion } from "framer-motion"
import { Clock, TrendingUp, Calendar } from "lucide-react"
import { currentlyWorkingOn } from "@/lib/data"

export function CurrentlyWorking() {
  return (
    <section id="currently-working" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Currently Working On</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Exciting projects I'm actively building and developing right now
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8">
          {currentlyWorkingOn.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-lg p-6 sm:p-8 hover:border-accent transition-all duration-300"
            >
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
                  <TrendingUp className="w-3 h-3" />
                  {project.status}
                </span>
                <span className="text-sm text-muted-foreground font-medium">{project.progress}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-muted rounded-full mb-6 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${project.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  className="h-full bg-accent rounded-full"
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed text-pretty">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-muted text-foreground rounded-md border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Timeline */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>Started: {project.startDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span>Target: {project.expectedCompletion}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
