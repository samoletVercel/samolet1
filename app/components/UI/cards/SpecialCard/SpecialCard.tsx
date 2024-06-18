import Image, { StaticImageData } from "next/image";
import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const SpecialCard = ({ img, name }: { img: StaticImageData; name: string }) => {
  return (
    <div className={styles.publishingCard}>
      <div className={styles.slider}>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <Image src={img} alt={name} fill />
          </div>
          <p className={variables.textMain}>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default SpecialCard;
