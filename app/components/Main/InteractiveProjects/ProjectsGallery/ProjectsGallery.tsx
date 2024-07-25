"use client";

import styles from "./style.module.scss";
import Image from "next/image";

import { swift } from "@/app/fonts";
import variables from "@/app/variables.module.scss";
import { Dispatch, SetStateAction } from "react";

import arrow from "@/public/arrow.svg";
import AnimatedText from "@/app/components/animations/AnimatedText/AnimatedText";
import Link from "next/link";

type setModalType = {
  active: boolean;
  index: number;
};

const ProjectsGallery = ({
  title,
  setModal,
  type,
  link,
  src,
  index,
}: {
  title: string;
  setModal: Dispatch<SetStateAction<setModalType>>;
  link: string;
  type: string;
  src: string;
  index: number;
}) => {
  return (
    <>
      <Link
        href={link}
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
      </Link>

      <Link href={link} className={styles.gallery_mobile}>
        <div className={styles.preview}>
          {type === 'image' ? <Image src={src} alt="image" fill /> :  <video width="680" height="400" autoPlay playsInline muted preload="none" src={src}> </video>}
          
        </div>
        <div className={styles.gallery_mobile_content}>
          <AnimatedText text={[`${title}`]} />
        </div>
      </Link>
    </>
  );
};
export default ProjectsGallery;
