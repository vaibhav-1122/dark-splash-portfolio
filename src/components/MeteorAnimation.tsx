"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Meteor {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

export default function MeteorAnimation() {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    const newMeteors: Meteor[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 2,
      size: 1 + Math.random() * 2,
    }));
    setMeteors(newMeteors);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {meteors.map((meteor) => (
        <motion.div
          key={meteor.id}
          className="absolute"
          style={{
            left: `${meteor.x}%`,
            top: "-5%",
          }}
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: ["0vh", "100vh"],
            x: ["0vw", "-20vw"],
          }}
          transition={{
            duration: meteor.duration,
            delay: meteor.delay,
            repeat: Infinity,
            repeatDelay: 3 + Math.random() * 5,
            ease: "linear",
          }}
        >
          <div
            className="relative"
            style={{
              width: `${meteor.size}px`,
              height: `${meteor.size * 50}px`,
            }}
          >
            {/* Meteor body */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-300 to-transparent rounded-full" />
            
            {/* Meteor glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-purple-400/30 rounded-full blur-md"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}