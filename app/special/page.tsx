import styles from "./page.module.scss";
import variables from "@/app/variables.module.scss";
import type { Metadata } from "next";
import { swift } from "../fonts";
import Image from "next/image";

import AnimatedText from "../components/animations/AnimatedText/AnimatedText";
import AnimatedLine from "../components/animations/AnimatedLine/AnimatedLine";
import NewsBlock from "../components/Main/NewsBlock/NewsBlock";

export const metadata: Metadata = {
  title: "О студии",
  description:
    "Сочиняем, генерируем идеи, рисуем, проектируем и воплощаем все это в жизнь. Каждый раз, взявшись за работу, мы придумываем что-то новое, нечто такое, чем по праву может гордиться каждый, обратившийся к нам.",
};

const BrandingPage = () => {
  return (
    <main className={variables.container}>
      <div style={{ marginTop: "5rem" }} />
      <AnimatedText text={"Новости"} />
      <div style={{ marginTop: "2rem" }} />
      <AnimatedLine wide={false} />
      <NewsBlock button={false} />
    </main>
  );
};
export default BrandingPage;
