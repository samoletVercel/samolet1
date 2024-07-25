import Image, { StaticImageData } from "next/image";
import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const PublishingCard = ({
  id,
  title,
  cat,
  preview,
}: {
  id: number;
  preview: {id: number, src: string, type: string};
  cat: string;
  title: string;
}) => {
  const [isHover, setIsHover] = useState(false);

  const category = new Map();
  category.set('издательство', 'publishing');

  return (
    <Link
      href={`/${category.get(cat)}/${id}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={styles.publishingCard}
    >
      <motion.div
        className={styles.slider}
        animate={{ bottom: isHover ? "5rem" : "0" }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.container}>
          <div className={styles.imgContainer}>
          {preview.type === "image" ? 
            <Image src={preview.src} alt={title} fill /> : 
            <video width="680" height="400" autoPlay muted preload="none">
              <source src={preview.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          }
          </div>
          <p className={variables.textMain}>{title}</p>
        </div>

{/*         <div className={styles.content}>
          <p>{author}</p>
          {scan && (
            <p style={{ color: "#ff3129" }}>Есть отсканированная версия</p>
          )}
        </div> */}
      </motion.div>
    </Link>
  );
};

export default PublishingCard;
