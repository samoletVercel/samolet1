"use client";

import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";
import { swift } from "@/app/fonts";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 0,
    width: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    width: "100%",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const AnimatedLine = ({ wide }: { wide?: boolean }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView]);

  return (
    <div>
      <motion.div
        style={{ height: wide ? "0.5rem" : " 0.0625rem" }}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={defaultAnimations}
        className={styles.wideLine}
      ></motion.div>
    </div>
  );
};
export default AnimatedLine;
