"use client";

import styles from "./style.module.scss";
import Image from "next/image";

import { swift } from "@/app/fonts";
import variables from "@/app/variables.module.scss";
import { Dispatch, SetStateAction } from "react";

import arrow from "@/public/arrow.svg";
import AnimatedText from "@/app/components/animations/AnimatedText/AnimatedText";

type setModalType = {
  active: boolean;
  index: number;
};

const ProjectsGallery = ({
  title,
  setModal,
  src,
  index,
}: {
  title: string;
  setModal: Dispatch<SetStateAction<setModalType>>;
  src?: string;
  index: number;
}) => {
  return (
    <>
      <div
        className={`${styles.gallery} `}
        onMouseEnter={() => {
          setModal({ active: true, index: index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index: index });
        }}
      >
        <AnimatedText text={[`${title}`]} />

        <div className={styles.imgContainer}>
          <div className={styles.imgSlider}>
            <Image src={arrow} alt="arrow_icon" fill />
          </div>
        </div>
      </div>

      <div className={styles.gallery_mobile}>
        <div className={styles.preview}>
          <Image src={`/projectsPreview/${src}`} alt="image" fill />
        </div>
        <div className={styles.gallery_mobile_content}>
          <AnimatedText text={[`${title}`]} />
        </div>
      </div>
    </>
  );
};
export default ProjectsGallery;
