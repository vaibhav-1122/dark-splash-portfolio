"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Database, Smartphone, Cloud, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Express, PostgreSQL, MongoDB",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Adobe XD, Responsive Design",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Progressive Web Apps",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS, Docker, CI/CD, Vercel",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimization, SEO, Web Vitals",
    color: "from-yellow-500 to-orange-500",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300">
                <div className={`inline-flex p-3 bg-gradient-to-br ${skill.color} rounded-xl mb-4`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-foreground/60">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}