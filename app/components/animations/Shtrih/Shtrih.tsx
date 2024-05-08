"use client";

import styles from "./style.module.scss";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

import sam from "@/public/shtrih.svg";

const Shtrih = () => {
  const { scrollY } = useScroll();

  return (
    <motion.div className={styles.shtrih} style={{ rotateZ: scrollY }}>
      <Image src={sam} alt="back" />
    </motion.div>
  );
};

export default Shtrih;
