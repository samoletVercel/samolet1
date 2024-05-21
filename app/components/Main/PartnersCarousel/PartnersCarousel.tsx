"use client";
import styles from "./style.module.scss";

import pushkin from "@/public/logos/pushkin_pr.svg";
import omk from "@/public/logos/omk_pr.svg";
import severstal from "@/public/logos/severstal_pr.svg";
import ariel_metal from "@/public/logos/ariel_metal_pr.svg";
import cheglakov from "@/public/logos/cheglakov_pr.svg";
import mage from "@/public/logos/mage_pr.svg";
import agrupp from "@/public/logos/agrupp_pr.svg";

import Image from "next/image";

const images = [pushkin, omk, severstal, ariel_metal, cheglakov, mage, agrupp];

const PartnersCarousel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        {images.map((img, i) => {
          return (
            <Image
              src={img.src}
              alt=""
              key={`${img.src}_1`}
              width={img.width}
              height={img.height}
            />
          );
        })}
      </div>

      <div className={styles.carousel}>
        {images.map((img, i) => {
          return (
            <Image
              src={img.src}
              alt=""
              key={`${img.src}_2`}
              width={img.width}
              height={img.height}
            />
          );
        })}
      </div>
    </div>
  );
};
export default PartnersCarousel;
