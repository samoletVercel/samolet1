import styles from "./page.module.scss";
import variables from "@/app/variables.module.scss";
import type { Metadata } from "next";
import { swift } from "../fonts";
import Image from "next/image";

import AnimatedText from "../components/animations/AnimatedText/AnimatedText";
import AnimatedLine from "../components/animations/AnimatedLine/AnimatedLine";
import SpecialProjects from "../components/UI/filters/SpecialProjects/SpecialProjects";

import sp1 from "@/public/special1.png";
import sp2 from "@/public/special2.png";

export const metadata: Metadata = {
  title: "О студии",
  description:
    "Сочиняем, генерируем идеи, рисуем, проектируем и воплощаем все это в жизнь. Каждый раз, взявшись за работу, мы придумываем что-то новое, нечто такое, чем по праву может гордиться каждый, обратившийся к нам.",
};

const SpecialPage = () => {
  const tags = ["Все", "Календари", "Прочее"];
  const projects = [
    {
      img: sp1,
      name: "Календарь Самолета",
      tags: ["Календари"],
    },
    {
      img: sp2,
      name: "Самовар",
      tags: ["Прочее"],
    },
  ];

  return (
    <main className={variables.container}>
      <div style={{ marginTop: "5rem" }} />
      <AnimatedText text={"Спецпроекты"} />
      <div style={{ marginTop: "1rem" }} />
      <AnimatedLine wide={true} />
      <div style={{ marginTop: "0.8rem" }} />
      <AnimatedLine wide={false} />
      <SpecialProjects tags={tags} projects={projects} />
    </main>
  );
};
export default SpecialPage;
