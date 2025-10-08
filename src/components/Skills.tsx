"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import LogoLoop from "./LogoLoop";
import {
  SiJavascript,
  SiCplusplus,
  SiC,
  SiReact,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiGit,
  SiGithubactions,
  SiVercel,
  SiCloudinary,
  SiJsonwebtokens,
} from "react-icons/si";
import { Server, Lock, Workflow, Code2 } from "lucide-react";

// Row 1: Languages & Core Frontend
const row1Logos = [
  { node: <SiJavascript className="text-yellow-400" />, title: "JavaScript" },
  { node: <SiCplusplus className="text-blue-500" />, title: "C++" },
  { node: <SiC className="text-blue-600" />, title: "C" },
  { node: <Code2 className="text-orange-500" />, title: "Java" },
  { node: <SiReact className="text-cyan-400" />, title: "React" },
  { node: <SiRedux className="text-purple-500" />, title: "Redux" },
  { node: <SiReact className="text-cyan-300" />, title: "React Hooks" },
  { node: <SiHtml5 className="text-orange-500" />, title: "HTML5" },
  { node: <SiCss3 className="text-blue-400" />, title: "CSS3" },
  { node: <SiBootstrap className="text-purple-600" />, title: "Bootstrap" },
  { node: <SiTailwindcss className="text-cyan-400" />, title: "Tailwind CSS" },
  { node: <Workflow className="text-red-400" />, title: "React Router" },
];

// Row 2: Backend & Databases
const row2Logos = [
  { node: <SiNodedotjs className="text-green-500" />, title: "Node.js" },
  { node: <SiExpress className="text-gray-400" />, title: "Express.js" },
  { node: <Server className="text-blue-400" />, title: "REST APIs" },
  { node: <SiSocketdotio className="text-gray-300" />, title: "Socket.io" },
  { node: <SiMongodb className="text-green-500" />, title: "MongoDB" },
  { node: <SiMongodb className="text-green-600" />, title: "Mongoose ODM" },
  { node: <SiPostgresql className="text-blue-500" />, title: "PostgreSQL" },
  { node: <SiRedis className="text-red-500" />, title: "Redis" },
];

// Row 3: DevOps, Tools & Real-time
const row3Logos = [
  { node: <SiGit className="text-orange-600" />, title: "Git" },
  { node: <SiGithubactions className="text-blue-500" />, title: "GitHub Actions" },
  { node: <SiVercel className="text-white" />, title: "Vercel" },
  { node: <Server className="text-purple-400" />, title: "Render" },
  { node: <SiCloudinary className="text-blue-500" />, title: "Cloudinary" },
  { node: <SiJsonwebtokens className="text-pink-500" />, title: "JWT" },
  { node: <Lock className="text-green-500" />, title: "OAuth 2.0 (Passport.js)" },
  { node: <Lock className="text-yellow-400" />, title: "Bcrypt" },
  { node: <Workflow className="text-blue-400" />, title: "WebRTC" },
  { node: <Workflow className="text-purple-400" />, title: "WebSockets" },
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
            Skills & Technologies
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </motion.div>

        <div className="space-y-8 max-w-7xl mx-auto">
          {/* Row 1: Languages & Frontend */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-purple-400 text-center">Languages & Frontend</h3>
            </div>
            <LogoLoop
              logos={row1Logos}
              speed={80}
              direction="left"
              logoHeight={56}
              gap={48}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="oklch(0.08 0 0)"
              ariaLabel="Languages and Frontend Technologies"
            />
          </motion.div>

          {/* Row 2: Backend & Databases */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-blue-400 text-center">Backend & Databases</h3>
            </div>
            <LogoLoop
              logos={row2Logos}
              speed={70}
              direction="right"
              logoHeight={56}
              gap={48}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="oklch(0.08 0 0)"
              ariaLabel="Backend and Database Technologies"
            />
          </motion.div>

          {/* Row 3: DevOps, Tools & Real-time */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-green-400 text-center">DevOps, Tools & Real-time</h3>
            </div>
            <LogoLoop
              logos={row3Logos}
              speed={75}
              direction="left"
              logoHeight={56}
              gap={48}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="oklch(0.08 0 0)"
              ariaLabel="DevOps, Tools and Real-time Technologies"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-foreground/60">
            Hover over any technology to pause and explore
          </p>
        </motion.div>
      </div>
    </section>
  );
}