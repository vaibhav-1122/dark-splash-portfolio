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
import { Code2, Server, Lock, Workflow } from "lucide-react";

// Row 1: Languages & Core Frontend
const languageLogos = [
  { node: <SiJavascript className="text-yellow-400" />, title: "JavaScript" },
  { node: <SiCplusplus className="text-blue-500" />, title: "C++" },
  { node: <SiC className="text-blue-600" />, title: "C" },
  { node: <Code2 className="text-orange-500" />, title: "Java" },
  { node: <SiReact className="text-cyan-400" />, title: "React" },
  { node: <SiRedux className="text-purple-500" />, title: "Redux" },
  { node: <SiReact className="text-cyan-400" />, title: "React Hooks" },
  { node: <SiHtml5 className="text-orange-500" />, title: "HTML5" },
  { node: <SiCss3 className="text-blue-500" />, title: "CSS3" },
  { node: <SiBootstrap className="text-purple-600" />, title: "Bootstrap" },
  { node: <SiTailwindcss className="text-cyan-400" />, title: "Tailwind CSS" },
  { node: <Workflow className="text-pink-500" />, title: "React Router" },
];

// Row 2: Backend & Databases
const backendLogos = [
  { node: <SiNodedotjs className="text-green-500" />, title: "Node.js" },
  { node: <SiExpress className="text-gray-400" />, title: "Express.js" },
  { node: <Server className="text-blue-400" />, title: "REST APIs" },
  { node: <SiSocketdotio className="text-gray-300" />, title: "Socket.io" },
  { node: <SiMongodb className="text-green-500" />, title: "MongoDB" },
  { node: <SiMongodb className="text-green-600" />, title: "Mongoose ODM" },
  { node: <SiPostgresql className="text-blue-400" />, title: "PostgreSQL" },
  { node: <SiRedis className="text-red-500" />, title: "Redis" },
];

// Row 3: DevOps, Tools & Real-time
const toolsLogos = [
  { node: <SiGit className="text-orange-600" />, title: "Git" },
  { node: <SiGithubactions className="text-blue-500" />, title: "GitHub Actions" },
  { node: <SiVercel className="text-white" />, title: "Vercel" },
  { node: <Server className="text-cyan-400" />, title: "Render" },
  { node: <SiCloudinary className="text-blue-500" />, title: "Cloudinary" },
  { node: <SiJsonwebtokens className="text-pink-500" />, title: "JWT" },
  { node: <Lock className="text-green-500" />, title: "OAuth 2.0 (Passport.js)" },
  { node: <Lock className="text-yellow-500" />, title: "Bcrypt" },
  { node: <Workflow className="text-blue-400" />, title: "WebRTC" },
  { node: <Workflow className="text-purple-400" />, title: "WebSockets" },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-pink-300 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Technologies I work with to build amazing digital experiences
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Row 1: Languages & Frontend */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-6 text-center">
              Languages & Frontend
            </h3>
            <div className="h-24 relative">
              <LogoLoop
                logos={languageLogos}
                speed={120}
                direction="left"
                logoHeight={48}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="oklch(0.08 0 0)"
              />
            </div>
          </motion.div>

          {/* Row 2: Backend & Databases */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-6 text-center">
              Backend & Databases
            </h3>
            <div className="h-24 relative">
              <LogoLoop
                logos={backendLogos}
                speed={100}
                direction="right"
                logoHeight={48}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="oklch(0.08 0 0)"
              />
            </div>
          </motion.div>

          {/* Row 3: DevOps & Tools */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-6 text-center">
              DevOps, Tools & Real-time
            </h3>
            <div className="h-24 relative">
              <LogoLoop
                logos={toolsLogos}
                speed={110}
                direction="left"
                logoHeight={48}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="oklch(0.08 0 0)"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}