import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import Magnetic from "../components/Magnetic";

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;

// Lazy load 3D Scene (performance)
const Scene = lazy(() => import("../components/Scene"));

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D background */}
      <div className="absolute inset-0 -z-10 opacity-70">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative text-center space-y-6 px-4">
        {/* Name */}
        <MotionH1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Ishant Singh
        </MotionH1>

        {/* Role */}
        <MotionP
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-300"
        >
          Backend Engineer
        </MotionP>

        {/* Tagline */}
        <MotionP
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I build scalable systems.
        </MotionP>

        {/* Buttons */}
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-4 justify-center mt-6"
        >
          <Magnetic>
            <a
              href="#projects"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:scale-105 transition"
            >
              View Work
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href="#contact"
              className="px-6 py-2 border rounded-lg hover:bg-white hover:text-black transition"
            >
              Contact
            </a>
          </Magnetic>
        </MotionDiv>
      </div>
    </section>
  );
}
