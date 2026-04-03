import { motion } from "framer-motion";

const MotionDiv = motion.div;

export default function Reveal({ children, className = "" }) {
  return (
    <MotionDiv
      className={className}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </MotionDiv>
  );
}
