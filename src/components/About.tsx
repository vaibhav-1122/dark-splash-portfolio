"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-50" />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                  alt="Profile"
                  className="relative rounded-2xl w-full aspect-square object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a passionate full-stack developer with a keen eye for design and a love for creating
                seamless digital experiences. With expertise in modern web technologies, I transform ideas
                into reality.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the developer community.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-4 bg-card rounded-xl border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-foreground/60">Years Experience</div>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-foreground/60">Projects Completed</div>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">30+</div>
                  <div className="text-sm text-foreground/60">Happy Clients</div>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-foreground/60">Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}