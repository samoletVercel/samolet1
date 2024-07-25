import styles from "./page.module.scss";
import variables from "@/app/variables.module.scss";
import type { Metadata } from "next";
import { swift } from "../fonts";
import Image from "next/image";

import AnimatedText from "../components/animations/AnimatedText/AnimatedText";
import AnimatedLine from "../components/animations/AnimatedLine/AnimatedLine";
import NewsBlock from "../components/Main/NewsBlock/NewsBlock";
import NewsCard from "../components/UI/cards/NewsCard/NewsCard";
import getNews from "../lib/getNews";

export const metadata: Metadata = {
  title: "О студии",
  description:
    "Сочиняем, генерируем идеи, рисуем, проектируем и воплощаем все это в жизнь. Каждый раз, взявшись за работу, мы придумываем что-то новое, нечто такое, чем по праву может гордиться каждый, обратившийся к нам.",
};

const BrandingPage = async() => {

  const news = await getNews(-1)

  return (
    <main className={variables.container}>
      <div style={{ marginTop: "5rem" }} />
      <AnimatedText text={"Новости"} />
      <div className={styles.wide_line} style={{ marginTop: "1rem" }}></div>
      <div className={styles.thin_line} style={{ marginTop: "0.8rem" }}></div>
      <div className={styles.grid}>

{
  news && news.map((el: any) => {

    const dateRaw = el.date.split(' ')[0]

    const date = dateRaw.replaceAll('-', '.')


    return (
      <NewsCard
      key={el.title}
        img={el.preview.src}
        date={date}
        title={el.title}
        link=""
      />
    )
  }
  )
}
</div>
    </main>
  );
};
export default BrandingPage;
