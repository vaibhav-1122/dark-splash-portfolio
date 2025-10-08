"use client";

import { Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto"
    >
      <div className="relative bg-background/80 backdrop-blur-lg rounded-full border border-white/10 px-4 py-2 shadow-2xl">
        {/* Animated border effect */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent)",
            }}
            animate={{
              x: ["-200%", "200%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="relative flex items-center gap-2">
          <a
            href="#home"
            className="px-3 py-1.5 text-xs font-medium text-foreground/80 hover:text-foreground transition-colors rounded-full hover:bg-white/5"
          >
            Home
          </a>
          <a
            href="#tech-stack"
            className="px-3 py-1.5 text-xs font-medium text-foreground/80 hover:text-foreground transition-colors rounded-full hover:bg-white/5"
          >
            Tech Stack
          </a>
          <a
            href="#projects"
            className="px-3 py-1.5 text-xs font-medium text-foreground/80 hover:text-foreground transition-colors rounded-full hover:bg-white/5"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="px-3 py-1.5 text-xs font-medium text-foreground/80 hover:text-foreground transition-colors rounded-full hover:bg-white/5"
          >
            Experience
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-foreground/80 hover:text-foreground transition-colors rounded-full hover:bg-white/5"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}