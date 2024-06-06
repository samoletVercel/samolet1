import styles from "./style.module.scss";
import { motion } from "framer-motion";

import { ptRootUIMed } from "@/app/fonts";
import { useState } from "react";
import variables from "@/app/variables.module.scss";

const awards = [
  {
    title: "Премия на европейском конкурсе рекламы «Эпика»",
    year: "1990",
  },
  {
    title: "Первое место на Московском международном фестивале рекламы",
    year: "1997",
  },
  {
    title: "Первое место на Московском международном фестивале рекламы",
    year: "2001",
  },
  {
    title: "Первая премия на конкурсе «Брэнд года»",
    year: "2004",
  },
  {
    title: "Специальный диплом конкурса «Искусство книги. Традиции и поиски»",
    year: "2004",
  },
  {
    title: "Гран-при Всероссийского конкурса книжной иллюстрации «Образ книги»",
    year: "2009",
  },
];

const AwardsBlock = () => {
  return (
    <div className={styles.main}>
      {awards.map((award, i) => {
        return (
          <div
            className={`${styles.award} ${variables.textMain}`}
            key={`${award.title}_${i}`}
          >
            <span className={ptRootUIMed.className}>{award.title}</span>
            <p>{award.year}</p>
          </div>
        );
      })}
    </div>
  );
};
export default AwardsBlock;
