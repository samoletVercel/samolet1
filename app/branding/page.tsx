import styles from "./page.module.scss";
import variables from "@/app/variables.module.scss";
import type { Metadata } from "next";
import { swift } from "../fonts";
import BrandingProjects from "../components/UI/filters/BrandingProjects/BrandingProjects";

import museu from "@/public/museu.png";
import mage from "@/public/mage.png";
import ariel from "@/public/ariel.png";
import agrup from "@/public/а_групп.png";

import AnimatedText from "../components/animations/AnimatedText/AnimatedText";

export const metadata: Metadata = {
  title: "Брендинг",
  description: "Брендинговые проекты дизайн-студии Самолёт",
};

const BrandingPage = () => {
  const tags = ["Все", "Фирменный стиль", "Реклама", "Упаковка"];
  const projects = [
    {
      img: museu,
      name: "ГМИИ имени А.С.Пушкина",
      tags: ["Культура и искусство", "Фирменный стиль"],
    },
    {
      img: mage,
      name: "Mage",
      tags: ["Культура и искусство", "Фирменный стиль"],
    },
    {
      img: ariel,
      name: "Ариель Металл",
      tags: ["Металлоторг", "Реклама"],
    },
    {
      img: agrup,
      name: "А ГРУПП",
      tags: ["Металлоторг", "Фирменный стиль"],
    },
  ];

  return (
    <main className={variables.container}>
      <div style={{ marginTop: "5rem" }} />
      <AnimatedText text={"Брендинг"} />
      <div className={styles.wide_line} style={{ marginTop: "1rem" }}></div>
      <div className={styles.thin_line} style={{ marginTop: "0.8rem" }}></div>
      <BrandingProjects tags={tags} projects={projects} />
    </main>
  );
};
export default BrandingPage;
