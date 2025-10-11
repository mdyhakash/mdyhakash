"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, Calendar, Users } from "lucide-react"

const hackathons = [
  {
    name: "TechCrunch Disrupt Hackathon 2024",
    date: "September 2024",
    project: "AI-Powered Code Review Assistant",
    award: "1st Place - Best Use of AI",
    description:
      "Built an intelligent code review tool that provides real-time suggestions and identifies potential bugs using machine learning.",
    team: 4,
    tech: ["Python", "OpenAI", "React", "FastAPI"],
  },
  {
    name: "ETHGlobal Hackathon",
    date: "July 2024",
    project: "Decentralized Identity Verification",
    award: "2nd Place - Best DApp",
    description: "Created a blockchain-based identity verification system ensuring privacy and security for users.",
    team: 3,
    tech: ["Solidity", "Web3.js", "Next.js", "IPFS"],
  },
  {
    name: "NASA Space Apps Challenge",
    date: "October 2023",
    project: "Climate Data Visualization Platform",
    award: "Global Finalist",
    description: "Developed an interactive platform to visualize climate change data from NASA satellites.",
    team: 5,
    tech: ["React", "D3.js", "Python", "NASA APIs"],
  },
  {
    name: "Google Cloud Hackathon",
    date: "March 2023",
    project: "Smart City Traffic Optimizer",
    award: "Best Cloud Solution",
    description: "Built a real-time traffic optimization system using Google Cloud services and machine learning.",
    team: 4,
    tech: ["Google Cloud", "TensorFlow", "Node.js", "React"],
  },
]

const stats = [
  { label: "Hackathons Attended", value: "15+" },
  { label: "Awards Won", value: "8" },
  { label: "Projects Built", value: "20+" },
  { label: "Team Members", value: "50+" },
]

export function Hackathons() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="hackathons" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4">
            <span className="text-accent font-mono text-xl sm:text-2xl">03.</span>
            <span className="text-balance">Hackathons & Competitions</span>
            <span className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </h2>

          <p className="text-muted-foreground mb-8 sm:mb-12 max-w-2xl text-sm sm:text-base">
            I love the energy and creativity of hackathons. Here are some of my favorite experiences building innovative
            solutions under pressure.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 sm:p-6 bg-card rounded border border-border"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-mono text-balance">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute left-4 sm:left-8 md:left-1/2 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8 sm:space-y-12">
              {hackathons.map((hackathon, index) => (
                <motion.div
                  key={hackathon.name}
                  className="relative md:grid md:grid-cols-2 md:gap-8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="absolute left-4 sm:left-8 md:left-1/2 top-6 sm:top-8 w-3 h-3 sm:w-4 sm:h-4 -ml-1.5 sm:-ml-2 bg-accent rounded-full border-4 border-background z-10" />

                  <div className={`ml-12 sm:ml-20 md:ml-0 ${index % 2 === 0 ? "md:text-right" : "md:col-start-2"}`}>
                    <div className="bg-card p-4 sm:p-6 rounded border border-border hover:border-accent transition-colors">
                      <div className="flex items-center gap-2 text-accent font-mono text-xs sm:text-sm mb-2">
                        <Trophy className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-balance">{hackathon.award}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground text-balance">
                        {hackathon.name}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          {hackathon.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                          Team of {hackathon.team}
                        </span>
                      </div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base text-balance">
                        {hackathon.project}
                      </h4>
                      <p className="text-muted-foreground text-xs sm:text-sm mb-4 leading-relaxed">
                        {hackathon.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {hackathon.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 sm:px-3 py-1 bg-accent/10 text-accent rounded text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
