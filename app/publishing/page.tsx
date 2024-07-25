import styles from "./page.module.scss";
import variables from "@/app/variables.module.scss";
import type { Metadata } from "next";
import { swift } from "../fonts";

import img1 from "@/public/Металлические метафоры.png";
import img2 from "@/public/диквир.png";
import img3 from "@/public/борр.png";

import PublishingProjects from "../components/UI/filters/PublishingProjects/PublishingProjects";
import AnimatedText from "../components/animations/AnimatedText/AnimatedText";
import AnimatedLine from "../components/animations/AnimatedLine/AnimatedLine";

import getPosts from "../lib/getPostsCat";

export const metadata: Metadata = {
  title: "Издательство",
  description: "Издательские проекты дизайн-студии Самолёт",
};

const PublishingPage = async () => {


  const projs = await getPosts("издательство");

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
      <AnimatedText text={"Издательство"} />
      <div style={{ marginTop: "1rem" }} />
      <AnimatedLine wide={true} />
      <div style={{ marginTop: "0.8rem" }} />
      <AnimatedLine wide={false} />
      <PublishingProjects tags={sortedTags} projects={projs} />
    </main>
  );
};
export default PublishingPage;
