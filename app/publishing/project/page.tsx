import styles from "./page.module.scss";
import variables from "@/app/variables.module.scss";
import type { Metadata } from "next";
import React from "react";
import { swift } from "@/app/fonts";
import Image from "next/image";

import AnimatedLine from "@/app/components/animations/AnimatedLine/AnimatedLine";

import img1 from "@/public/project/1.png";
import img2 from "@/public/project/2.png";
import img3 from "@/public/project/3.png";
import img4 from "@/public/project/4.png";

export const metadata: Metadata = {
  title: "Каталог к выставке ИСКУССТВО СЕВЕРНОЙ ГОТИКИ И РЕНЕССАНСА",
  description: "Издательский проект дизайн-студии Самолёт",
};

const PublishingPage = () => {
  return (
    <main className={variables.container}>
      <div className={styles.titleContainer}>
        <div>
          <h1 className={`${variables.textSubtitle} ${swift.className}`}>
            Каталог к выставке ИСКУССТВО СЕВЕРНОЙ ГОТИКИ И РЕНЕССАНСА
          </h1>
        </div>

        <div>
          <p className={variables.textMain}>2011</p>
        </div>
      </div>

      <div className={styles.preview}>
        <Image src={img1} fill alt="1" />
      </div>

      <div className={`${styles.tags} ${variables.textMain}`}>
        <div className={styles.tag}>
          <h4>услуги</h4>
          <p>Фотосъемка, макет, верстка, пре-пресс</p>
        </div>

        <div className={styles.tag}>
          <h4>авторы</h4>
          <p>
            Вадим Садков (живопись), <br /> Ханс Ньюдорп (скульптура),
            <br /> Елена Пильник (мебель)
          </p>
        </div>

        <div className={styles.tag}>
          <h4>выставка</h4>
          <p>
            Живопись, скульптура, художественная мебель из собрания М.Е.Перченко
          </p>
        </div>

        <div className={styles.tag}>
          <h4>тексты</h4>
          <p>Константин Победин</p>
        </div>
      </div>

      <div style={{ marginTop: "4rem" }} />
      <AnimatedLine wide={false} />
      <div className={styles.description}>
        <p className={variables.textMain}>
          Издание подготовлено к выставке: Искусство северной готики Ренессанса.
          Живопись, скульптура, художественная мебель из собрания М.Е.Перченко в
          ГМИИ имени А.С.Пушкина.
        </p>
      </div>

      <div className={styles.images}>
        <div>
          <Image src={img2} fill alt="2" />
        </div>

        <div>
          <Image src={img3} fill alt="3" />
        </div>
      </div>

      <div className={styles.image}>
        <Image src={img4} fill alt="4" />
      </div>
    </main>
  );
};

export default PublishingPage;
