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
import getPosts from "../lib/getPostsCat";

export const metadata: Metadata = {
  title: "Брендинг",
  description: "Брендинговые проекты дизайн-студии Самолёт",
};

const BrandingPage = async () => {
  const projs = await getPosts("брендинг");


  //console.log(projs)

  const tags: string[] = [];

  projs.map((pr: any) => {
    tags.push(...pr.tags)
  })

  const filteredTags = tags.reduce((result: any, tag) => {
    if (!result[tag]) {
      result[tag] = 1;
    } else {
      result[tag] += 1;
    }
    return result
  }, {})

  const entries = Object.entries(filteredTags);

  entries.sort((a: any, b: any) => b[1] - a[1]);

  const sortedTags = ['Все', ...entries.map(entry => entry[0])];


  return (
    <main className={variables.container}>
      <div style={{ marginTop: "5rem" }} />
      <AnimatedText text={"Брендинг"} />
      <div className={styles.wide_line} style={{ marginTop: "1rem" }}></div>
      <div className={styles.thin_line} style={{ marginTop: "0.8rem" }}></div>
      <BrandingProjects tags={sortedTags} projects={projs} />
    </main>
  );
};
export default BrandingPage;
