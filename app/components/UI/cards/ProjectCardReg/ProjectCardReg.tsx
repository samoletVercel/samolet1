"use client";
import Image, { StaticImageData } from "next/image";
import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";
import { swift } from "@/app/fonts";
import { ptRootUIMed } from "@/app/fonts";

import { motion } from "framer-motion";
import { useState } from "react";
import { Project } from "@/app/types";
import Link from "next/link";

const ProjectCardReg = ({
  id,
  preview,
  cat,
  title,
  tags,
  year,
  link,
}: {
  id: number;
  preview: {id: number, src: string, type: string};
  cat: string;
  title: string;
  tags?: Array<string>;
  year?: string;
  link?: string;
}) => {
  const [isHover, setIsHover] = useState(false);

  const category = new Map();
  category.set('брендинг', 'branding');

  return (
    <Link
      href={`/${category.get(cat)}/${id}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={styles.projectCard}
    >
      <motion.div
        className={styles.slider}
        animate={{ bottom: isHover ? "6rem" : "0" }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.imgContainer}>
          {preview.type === "image" ? 
            <Image src={preview.src} alt={title} fill /> : 
            <video width="680" height="400" autoPlay muted playsInline preload="none">
              <source src={preview.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          }
          
        </div>
        <div className={styles.content}>
          <p className={`${variables.textMain} ${ptRootUIMed.className}`}>
            {title}
          </p>
          {/*  {tags && (
            <div className={styles.tagsContainer}>
              {tags.map((tag) => (
                <p key={`${name}_${tag}`} className={variables.textSec}>
                  {tag}
                </p>
              ))}
            </div>
          )} */}
        </div>
      </motion.div>
    </Link>
  );
};
export default ProjectCardReg;
