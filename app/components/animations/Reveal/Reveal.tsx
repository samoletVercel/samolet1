"use client";
import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Reveal = ({
  children,
  width,
}: {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{ position: "relative", width: width, overflow: "hidden" }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
