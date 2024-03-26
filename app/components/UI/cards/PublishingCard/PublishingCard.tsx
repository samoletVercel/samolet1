import Image, { StaticImageData } from "next/image";
import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const PublishingCard = ({
  img,
  name,
  author,
  scan,
}: {
  img: StaticImageData;
  name: string;
  author: string;
  scan?: boolean;
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={styles.publishingCard}
    >
      <motion.div
        className={styles.slider}
        animate={{ bottom: isHover ? "3rem" : "0" }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <Image src={img} alt={name} fill />
          </div>
          <p className={variables.textMain}>{name}</p>
        </div>

        <div className={styles.content}>
          <p>{author}</p>
          {scan && (
            <p style={{ color: "#ff3129" }}>Есть отсканированная версия</p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default PublishingCard;
