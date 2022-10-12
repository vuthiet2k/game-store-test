import { motion } from "framer-motion";
import React from "react";

type PropChildren = {
  children: React.ReactNode;
};

const animations = {
  initial: { x: 200 },
  animate: {
    x: 0,
    transition: { x: { type: "spring", duration: 0.8, bounce: 0.35 } },
  },
  exit: {
    x: 200,
    transition: { x: { type: "spring", duration: 1.5, bounce: 0.575 } },
  },
};

const AnimatedCart = ({ children } : PropChildren) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCart;
