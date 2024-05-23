import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";
import Image from "next/image";
import burger from "@/public/burger.svg";
import close from "@/public/cross.svg";
import { useState, Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { ptRootUI } from "@/app/fonts";

const HeaderButton = ({
  isOpened,
  setIsOpened,
}: {
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <button className={styles.button} onClick={() => setIsOpened(!isOpened)}>
      <motion.div
        className={styles.slider}
        animate={{ top: isOpened ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <HeaderButtonElement
          title={"меню"}
          image={{ src: burger, alt: "burger icon" }}
        />
        <HeaderButtonElement
          title={"закрыть"}
          image={{ src: close, alt: "close icon" }}
        />
      </motion.div>
    </button>
  );
};

const HeaderButtonElement = ({
  title,
  image,
}: {
  title: string;
  image: {
    src: string;
    alt: string;
  };
}) => {
  return (
    <div className={styles.element}>
      <p className={`${ptRootUI.className} ${variables.textMain}`}>{title}</p>

      <div className={styles.imgContainer}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default HeaderButton;
