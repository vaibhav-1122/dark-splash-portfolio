"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    slug: "ecommerce-platform",
    github: "#",
    demo: "#",
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered content creation tool using OpenAI API with beautiful UI and seamless UX.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["React", "OpenAI", "Tailwind", "Node.js"],
    slug: "ai-content-generator",
    github: "#",
    demo: "#",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["React", "D3.js", "Firebase", "Material-UI"],
    slug: "social-dashboard",
    github: "#",
    demo: "#",
    color: "from-green-500 to-blue-500",
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile-first fitness application with workout plans, progress tracking, and nutrition guides.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
    tags: ["React Native", "Redux", "MongoDB", "Express"],
    slug: "fitness-app",
    github: "#",
    demo: "#",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Real Estate Platform",
    description: "Property listing and management system with advanced search filters and virtual tours.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Mapbox"],
    slug: "real-estate",
    github: "#",
    demo: "#",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Task Management Suite",
    description: "Collaborative project management tool with kanban boards, time tracking, and team chat.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    tags: ["React", "Socket.io", "Node.js", "Redis"],
    slug: "task-management",
    github: "#",
    demo: "#",
    color: "from-indigo-500 to-purple-500",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-pink-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            A showcase of my recent work and creative experiments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
              
              <Link href={`/projects/${project.slug}`}>
                <div className="relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-foreground/60 mb-4 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-primary/10 text-primary border border-primary/20 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.demo}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}