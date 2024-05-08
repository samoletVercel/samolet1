"use client";
import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { swift } from "@/app/fonts";

const StaggerReveal = ({ text, size }: { text: string; size: string }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  const textAr = text.split(" ");

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  return (
    <div
      className={styles.stagger}
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
        paddingBottom: "0.2rem",
      }}
    >
      {textAr.map((el, i) => (
        <motion.div
          key={`${el}_${i}`}
          variants={{
            hidden: {
              opacity: 0,
              y: 200,
              transform: "rotate(-2deg) translateY(40%)",
            },
            visible: { opacity: 1, y: 0, transform: "rotate(0) translateY(0)" },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 0.8,
            delay: 0.25 + i * 0.04,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <p
            className={`${variables.textTitle} ${swift.className}`}
            style={{ fontSize: size }}
          >{`${el}`}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default StaggerReveal;
