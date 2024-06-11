import styles from "./page.module.scss";
import variables from "@/app/variables.module.scss";
import type { Metadata } from "next";
import { swift } from "../fonts";

import img1 from "@/public/Металлические метафоры.png";
import img2 from "@/public/диквир.png";
import img3 from "@/public/борр.png";

import PublishingProjects from "../components/UI/filters/PublishingProjects/PublishingProjects";
import AnimatedText from "../components/animations/AnimatedText/AnimatedText";

export const metadata: Metadata = {
  title: "Издательство",
  description: "Издательские проекты дизайн-студии Самолёт",
};

const PublishingPage = () => {
  const tags = ["Все", "Книги", "Журналы", "Проспекты"];
  const projects = [
    {
      img: img1,
      name: "Металлические метафоры. Скульптура",
      author: "Андрей Бисти",
      tags: ["Книги"],
    },
    {
      img: img3,
      name: "БорР: книга о забытом дизайнере дцатых (*) и многом другом...",
      author: "Владимир Кричевский",
      tags: ["Книги"],
    },
    {
      img: img2,
      name: "Детская иллюстрированная книга в истории России 1881-1939",
      author: "Владимир Семенихин",
      tags: ["Книги"],
      scan: true,
    },
    {
      img: img2,
      name: "Детская иллюстрированная книга в истории России 1881-1939",
      author: "Владимир Семенихин",
      tags: ["Книги"],
      scan: true,
    },
    {
      img: img3,
      name: "БорР: книга о забытом дизайнере дцатых (*) и многом другом...",
      author: "Владимир Кричевский",
      tags: ["Книги"],
    },
    {
      img: img1,
      name: "Металлические метафоры. Скульптура",
      author: "Андрей Бисти",
      tags: ["Книги"],
    },
  ];

  return (
    <main className={variables.container}>
      <div style={{ marginTop: "5rem" }} />
      <AnimatedText text={"Издательство"} />
      <div className={styles.wide_line} style={{ marginTop: "1rem" }}></div>
      <div className={styles.thin_line} style={{ marginTop: "0.8rem" }}></div>
      <PublishingProjects tags={tags} projects={projects} />
    </main>
  );
};
export default PublishingPage;
