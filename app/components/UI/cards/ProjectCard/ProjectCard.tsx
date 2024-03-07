"use client";
import Image, { StaticImageData } from "next/image";
import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";
import { swift } from "@/app/fonts";
import { motion } from "framer-motion";
import { useState } from "react";

const ProjectCard = ({
  gridColumn,
  gridRow,
  img,
  name,
  tags,
  year,
  link,
}: {
  gridColumn: string;
  gridRow: string;
  img: StaticImageData;
  name: string;
  tags?: Array<string>;
  year?: string;
  link?: string;
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      style={{ gridColumn, gridRow }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={styles.projectCard}
    >
      <motion.div
        className={styles.slider}
        animate={{ bottom: isHover ? "8.5rem" : "0" }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.imgContainer}>
          <Image src={img} alt={name} fill />
        </div>
        <div className={styles.content}>
          <p className={`${variables.textSubtitle} ${swift.className}`}>
            {name}
          </p>
          {tags && (
            <div className={styles.tagsContainer}>
              {tags.map((tag) => (
                <p key={`${name}_${tag}`} className={variables.textSec}>
                  {tag}
                </p>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
export default ProjectCard;
