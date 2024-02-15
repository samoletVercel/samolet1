"use client";
import styles from "./style.module.scss";
import samolet from "@/public/samolet_header_without_shadow.svg";
import letterO from "@/public/o.svg";
import Image from "next/image";
import { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { swift } from "@/app/fonts";

const InteractiveHeader = () => {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX / 2 - 100);
    mouse.y.set(clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <div className={styles.main_logo}>
      <Image src={samolet} alt="logo_big" className={styles.main_logo_img} />
      <motion.div
        className={styles.main_letter_container}
        id="interactiveLetter"
        style={{
          filter: `drop-shadow(rgba(0 0 0 / 0.2) 3px 5px ${mouse.x})`,
          textShadow: `3px 5px ${mouse.x} rgba(0 0 0 / 0.2)`,
        }}
      >
        <p className={swift.className}>о</p>

        {/* <Image
          src={letterO}
          alt="logo_big_o"
          className={styles.main_logo_interactive}
        /> */}
      </motion.div>
    </div>
  );
};

export default InteractiveHeader;
