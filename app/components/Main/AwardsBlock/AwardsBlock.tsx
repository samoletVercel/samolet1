import styles from "./style.module.scss";
import { motion } from "framer-motion";

import { swift } from "@/app/fonts";
import { useState } from "react";

const awards = [
  {
    title: "премия на европейском конкурсе рекламы «Эпика»",
    year: "1990",
  },
  {
    title: "первое место на Московском международном фестивале рекламы",
    year: "1997",
  },
  {
    title: "первое место на Московском международном фестивале рекламы",
    year: "2001",
  },
  {
    title: "первая премия на конкурсе «Брэнд года»",
    year: "2004",
  },
  {
    title: "специальный диплом конкурса «Искусство книги. Традиции и поиски»",
    year: "2004",
  },
  {
    title: "гран-при Всероссийского конкурса книжной иллюстрации «Образ книги»",
    year: "2009",
  },
];

const AwardsBlock = () => {
  return (
    <div className={styles.main}>
      {awards.map((award, i) => {
        return (
          <div className={styles.award} key={`${award.title}_${i}`}>
            <div className={styles.slider}>
              <div className={`${styles.slide} ${styles.notActive}`}>
                <div className={`${styles.year} ${swift.className}`}>
                  {award.year}
                </div>
                <div>{award.title}</div>
              </div>

              <div className={`${styles.slide} ${styles.active}`}>
                <div className={`${styles.year} ${swift.className}`}>
                  {award.year}
                </div>
                <div>{award.title}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default AwardsBlock;
