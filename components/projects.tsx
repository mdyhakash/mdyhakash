"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js, Stripe, and PostgreSQL. Features include product management, shopping cart, checkout, and order tracking.",
    image: "/modern-ecommerce-dashboard.png",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "AI Chat Application",
    description:
      "Real-time chat application with AI-powered responses using OpenAI API. Includes user authentication, message history, and conversation management.",
    image: "/ai-chat-interface-dark-mode.jpg",
    tech: ["React", "Node.js", "OpenAI", "Socket.io", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Task Management Dashboard",
    description:
      "Collaborative task management tool with drag-and-drop functionality, real-time updates, and team collaboration features.",
    image: "/task-management-kanban.png",
    tech: ["React", "Firebase", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Weather Forecast App",
    description: "Beautiful weather app with location-based forecasts and interactive maps.",
    image: "/weather-app-interface.png",
    tech: ["React", "OpenWeather API", "Mapbox"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Portfolio Generator",
    description: "Tool to generate beautiful portfolio websites from JSON configuration.",
    image: "/portfolio-website-builder.png",
    tech: ["Next.js", "MDX", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Fitness Tracker",
    description: "Track workouts, set goals, and visualize progress with interactive charts.",
    image: "/fitness-tracking-app-interface.png",
    tech: ["React Native", "Supabase", "Recharts"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
]

const filters = ["All", "Featured", "Web Apps", "Mobile", "Tools"]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState("All")

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4">
            <span className="text-accent font-mono text-xl sm:text-2xl">02.</span>
            <span className="text-balance">Things I've Built</span>
            <span className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </h2>

          <p className="text-muted-foreground mb-8 sm:mb-12 max-w-2xl text-sm sm:text-base">
            Here are some of my recent projects. Each one represents a unique challenge and learning experience.
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

          <div className="space-y-16 sm:space-y-20 md:space-y-24 mb-12 sm:mb-16">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  className="grid md:grid-cols-12 gap-4 sm:gap-6 items-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className={`md:col-span-7 relative group ${index % 2 === 1 ? "md:col-start-6" : ""}`}>
                    <div className="relative overflow-hidden rounded">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors" />
                    </div>
                  </div>

                  <div
                    className={`md:col-span-5 ${
                      index % 2 === 1 ? "md:col-start-1 md:row-start-1 md:text-left" : "md:text-right"
                    } flex flex-col gap-3 sm:gap-4 -mt-20 md:mt-0 relative z-10 px-4 md:px-0`}
                  >
                    <p className="text-accent font-mono text-xs sm:text-sm">Featured Project</p>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground text-balance">{project.title}</h3>
                    <div className="bg-card/95 md:bg-card p-4 sm:p-6 rounded shadow-lg backdrop-blur-sm">
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                        {project.description}
                      </p>
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
                    <div className="flex gap-4">
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
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Other Noteworthy Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  className="bg-card p-5 sm:p-6 rounded hover:translate-y-[-4px] transition-transform group border border-border"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="text-muted-foreground hover:text-accent transition-colors p-2 -m-2 touch-manipulation"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.live}
                        className="text-muted-foreground hover:text-accent transition-colors p-2 -m-2 touch-manipulation"
                        aria-label="View live site"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors text-balance">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
