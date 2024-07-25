import styles from "./page.module.scss";
import variables from "@/app/variables.module.scss";
import type { Metadata } from "next";
import { swift } from "../fonts";
import Image from "next/image";

import AnimatedText from "../components/animations/AnimatedText/AnimatedText";
import AnimatedLine from "../components/animations/AnimatedLine/AnimatedLine";
import SpecialProjects from "../components/UI/filters/SpecialProjects/SpecialProjects";

import getPosts from "../lib/getPostsCat";


export const metadata: Metadata = {
  title: "Спецпроекты",
  description:
    "Спецпроекты дизайн-студии «Самолёт»",
};

const SpecialPage = async () => {

  const projs = await getPosts("спецпроекты");

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
      <AnimatedText text={"Спецпроекты"} />
      <div style={{ marginTop: "1rem" }} />
      <AnimatedLine wide={true} />
      <div style={{ marginTop: "0.8rem" }} />
      <AnimatedLine wide={false} />
      <SpecialProjects tags={sortedTags} projects={projs} />
    </main>
  );
};
export default SpecialPage;
