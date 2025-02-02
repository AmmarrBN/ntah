"use client"
import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    { title: "Neon City", description: "A futuristic city simulator" },
    { title: "Cyber Secure", description: "Next-gen cybersecurity platform" },
    { title: "Neural Link", description: "Brain-computer interface prototype" },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-8 text-neon-blue"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-neon-pink">{project.title}</h3>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

