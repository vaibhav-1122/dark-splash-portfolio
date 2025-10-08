"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const projects = [
  {
    title: "Travel Booking Platform",
    description: "A comprehensive travel booking system with real-time availability, secure payment processing, and interactive destination guides. Features include flight and hotel search, booking management, and user reviews.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=800&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Google Maps API"],
    github: "https://github.com/amanverma-00/travel-booking",
    demo: "#",
  },
  {
    title: "Code Editor",
    description: "A modern browser-based code editor with syntax highlighting, real-time collaboration, and multi-language support. Built with Monaco Editor and WebSocket for seamless team coding experience.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop",
    tags: ["React", "TypeScript", "Monaco Editor", "WebSocket", "Node.js"],
    github: "https://github.com/amanverma-00/codeeditor",
    demo: "#",
  },
  {
    title: "DSA MITRA",
    description: "An intelligent Data Structures & Algorithms learning companion featuring interactive visualizations, problem-solving tracker, and personalized learning paths. Helps students master DSA concepts with real-time code execution.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop",
    tags: ["React", "Redux", "D3.js", "Firebase", "Material-UI", "Python"],
    github: "https://github.com/amanverma-00/DSA-MITRA",
    demo: "#",
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
          className="text-center mb-8"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-pink-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            A showcase of my recent work and creative experiments
          </p>
        </motion.div>

        <div className="h-[120vh]">
          <ScrollStack
            itemDistance={150}
            itemScale={0.05}
            itemStackDistance={40}
            stackPosition="20%"
            scaleEndPosition="10%"
            baseScale={0.9}
          >
            {projects.map((project, index) => (
              <ScrollStackItem key={index}>
                <div className="grid md:grid-cols-2 gap-8 h-full">
                  {/* Left Side: Content */}
                  <div className="flex flex-col justify-between">
                    {/* Top Section */}
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
                      <div className="w-full h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
                      
                      <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 text-sm bg-primary/10 text-primary border border-primary/20 rounded-full hover:bg-primary/20 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Buttons */}
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all hover:scale-105 font-semibold"
                      >
                        <Github className="w-5 h-5" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all hover:scale-105 font-semibold"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Site</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Side: Project Image */}
                  <div className="relative group">
                    <div className="relative h-full min-h-[300px] md:min-h-[400px] rounded-2xl overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-pink-500/20 blur-xl" />
                      </div>

                      {/* View Full Image hint */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-background/90 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/50 text-sm font-semibold">
                          View Full Image
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}