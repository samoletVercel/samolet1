"use client";

import Link from "next/link";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import { ptRootUIMed } from "@/app/fonts";
import variables from "@/app/variables.module.scss";

const Button = ({ text, link }: { text: string; link: string }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      href={link}
      className={`${ptRootUIMed.className} ${variables.textMain} ${styles.button}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <motion.div
        variants={{
          active: {
            width: "1.3rem",
            backgroundColor: "#ff3129",
          },
          inactive: {
            width: "1rem",
            backgroundColor: "#333333",
          },
        }}
        initial="inactive"
        animate={isHover ? "active" : "inactive"}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      ></motion.div>
      {text}
    </Link>
  );
};
export default Button;
