"use client";

import Link from "next/link";
import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const ButtonSlide = ({ text, link }: { text: string; link: string }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      href={link}
      className={styles.button}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <motion.div
        variants={{
          active: {
            width: "100%",
            backgroundColor: "#ff3129",
            paddingLeft: "3rem",
          },
          inactive: {
            width: "fit-content",
            backgroundColor: "#333333",
            paddingLeft: "2rem",
          },
        }}
        animate={isHover ? "active" : "inactive"}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {text}
      </motion.div>
    </Link>
  );
};

export default ButtonSlide;
