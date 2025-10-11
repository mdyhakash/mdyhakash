"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, BookOpen } from "lucide-react"

const education = [

  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    school: "University of Asia Pacific",
    location: "Dhaka, Bangladesh",
    period: "2022-Present",
    gpa: "3.46/4.0",
    //coursework: ["Data Structures & Algorithms", "Web Development", "Database Systems", "Software Architecture"],
    //achievements: ["Graduated Summa Cum Laude", "President of Computer Science Club", "Winner of MIT Hackathon 2019"],
  },
  {
    degree: "Higher Secondary Certificate (HSC), Science",
    school: "BCIC College",
    location: "Dhaka, Bangladesh",
    period: "2018-2020",
    gpa: "5.00/5.00",
    //coursework: ["Data Structures & Algorithms", "Web Development", "Database Systems", "Software Architecture"],
    //achievements: ["Graduated Summa Cum Laude", "President of Computer Science Club", "Winner of MIT Hackathon 2019"],
  },
  {
    degree: "Secondary School Certificate (SSC), Science",
    school: "Darussalam Govt. Secondary High School",
    location: "Dhaka, Bangladesh",
    period: "2016-2018",
    gpa: "5.00/5.00",
    //coursework: ["Data Structures & Algorithms", "Web Development", "Database Systems", "Software Architecture"],
    //achievements: ["Graduated Summa Cum Laude", "President of Computer Science Club", "Winner of MIT Hackathon 2019"],
  },
]

const onlineCourses = [
  
  {
    title: "Machine Learning",
    provider: "Youtube",
    year: "2025",
  },
  {
    title: "React Native App Development",
    provider: "Youtube",
    year: "2025",
  },
  {
    title: "System Design Architecture",
    provider: "Youtube",
    year: "2025",
  },
]

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4">
            <span className="text-accent font-mono text-xl sm:text-2xl">05.</span>
            <span className="text-balance">Education</span>
            <span className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </h2>

          <p className="text-muted-foreground mb-8 sm:mb-12 max-w-2xl text-sm sm:text-base">
            My academic background and continuous learning journey in computer science and software development.
          </p>

          <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className="bg-card p-5 sm:p-8 rounded border border-border hover:border-accent transition-colors"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className="p-2.5 sm:p-3 bg-accent/10 rounded-lg flex-shrink-0">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 text-balance">{edu.degree}</h3>
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground mb-2">
                      <span className="font-semibold text-balance">{edu.school}</span>
                      <span className="hidden xs:inline">•</span>
                      <span className="text-balance">{edu.location}</span>
                      <span className="hidden xs:inline">•</span>
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-accent font-mono text-xs sm:text-sm">CGPA: {edu.gpa}</p>
                  </div>
                </div>

                {/* <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-sm sm:text-base">Relevant Coursework</h4>
                    <ul className="space-y-2">
                      {edu.coursework.map((course) => (
                        <li key={course} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                          <span className="text-accent mt-1 flex-shrink-0">▹</span>
                          <span className="text-balance">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-sm sm:text-base">Achievements</h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                        >
                          <span className="text-accent mt-1 flex-shrink-0">▹</span>
                          <span className="text-balance">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div> */}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Continuous Learning</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {onlineCourses.map((course, index) => (
                <motion.div
                  key={course.title}
                  className="flex items-center justify-between gap-3 p-3 sm:p-4 bg-card rounded border border-border hover:border-accent transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base text-balance">
                      {course.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground text-balance">{course.provider}</p>
                  </div>
                  <span className="text-accent font-mono text-xs sm:text-sm flex-shrink-0">{course.year}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
