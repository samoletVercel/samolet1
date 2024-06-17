import Image from "next/image";
import type { Metadata } from "next";
import styles from "./page.module.scss";
import variables from "@/app/variables.module.scss";

import aboutPic from "@/public/about1.png";
import aboutPic2 from "@/public/about2.png";
import samolet from "@/public/samolet.svg";

import { swift } from "./fonts";
import { ptRootUIMed } from "./fonts";
import ButtonSlide from "./components/UI/buttons/ButtonSlide/ButtonSlide";
import SubTitle from "./components/titles/SubTitle/SubTitle";
import ProjectsBlock from "./components/Main/ProjectsBlock/ProjectsBlock";
import NewsBlock from "./components/Main/NewsBlock/NewsBlock";
import AnimatedText from "./components/animations/AnimatedText/AnimatedText";
import AnimatedLine from "./components/animations/AnimatedLine/AnimatedLine";
import Button from "./components/UI/buttons/Button/Button";
import InteractiveProjects from "./components/Main/InteractiveProjects/InteractiveProjects";
import StaggerReveal from "./components/animations/StaggerReveal/StaggerReveal";

import sam from "@/public/shtrih.svg";
import Shtrih from "./components/animations/Shtrih/Shtrih";
import PartnersCarousel from "./components/Main/PartnersCarousel/PartnersCarousel";
import HeaderPlane from "./components/Main/3D/HeaderPlane/HeaderPlane.jsx";
import AwardsBlock from "./components/Main/AwardsBlock/AwardsBlock";
import CanvasPlane from "./components/Main/3D/Canvas/Canvas";

export const metadata: Metadata = {
  title: "Главная",
  description: "дизайн-студия Самолет",
};

export default function Home() {
  return (
    <main className={variables.container}>
      <CanvasPlane />
      <Image
        className={styles.headerImg}
        id="headerImageBlock"
        src={samolet}
        alt="samolet header"
      />

      <section
        className={`${styles.marginTopSection} ${styles.mainAboutSection}`}
      >
        <AnimatedLine wide={true} />
        <div style={{ marginTop: "0.5rem" }} />
        <AnimatedLine wide={false} />

        <div style={{ marginTop: "1rem" }}></div>
        <div className={styles.about_desc}>
          <AnimatedText
            text={[
              "Летаем в мире дизайна с 1995 года",
              "Создаём уникальные фирменные стили",
              "и авторские издательские проекты",
            ]}
          />
        </div>

        <div className={styles.about_mobile}>
          <AnimatedText text={["Летаем в мире дизайна с 1995 года"]} />
        </div>

        <div className={styles.marginTopSection}></div>

        <AnimatedLine wide={false} />

        <div
          className={`${styles.aboutSectionContentSec_mobile} ${variables.textMain}`}
        >
          Создаём уникальные фирменные стили и авторские издательские проекты.
        </div>

        <div className={`${styles.aboutSectionContentSec}`}>
          <Image src={aboutPic2} alt="about_second" />
          <div className={`${styles.textContainer} ${variables.textMain}`}>
            <span className={ptRootUIMed.className}>
              Владимир Семенихин — основатель студии.
            </span>
            <p>
              Мы не просто создаем дизайн, мы стремимся к искусству <br />в
              каждом проекте, будь то разработка фирменного стиля, оформление
              упаковки или издание книг и каталогов. Студия «Самолет» – это
              сообщество творческих личностей, готовых взлететь в мир идей и
              вдохновения. »
            </p>

            <div style={{ marginTop: "4rem" }} />

            <Button text="О студии" link="" />
          </div>
        </div>
      </section>

      <section className={styles.marginTopSection}>
        <AnimatedLine wide={true} />
        <div style={{ marginTop: "0.5rem" }} />
        <AnimatedLine wide={false} />

        <InteractiveProjects />
      </section>

      <section className={styles.about_second_mobile}>
        <Image src={aboutPic2} alt="about_second_mobile" />
        <span className={`${ptRootUIMed.className} ${variables.textMain}`}>
          Владимир Семенихин — <br />
          основатель студии.
        </span>
        <p className={variables.textMain}>
          « <br />
          Мы не просто создаем дизайн, мы стремимся к искусству в каждом
          проекте, будь то разработка фирменного стиля, оформление упаковки или
          издание книг и каталогов. Студия «Самолет» – это сообщество творческих
          личностей, готовых взлететь в мир идей и вдохновения. »
        </p>
        <div style={{ marginTop: "3rem" }} />

        <Button text="О студии" link="" />
      </section>

      <section className={styles.marginTopSection}>
        <p className={variables.textMain} style={{ marginBottom: "0.5rem" }}>
          Наши логотипы
        </p>
        <AnimatedLine wide={true} />
        <PartnersCarousel />
        <AnimatedLine wide={false} />
      </section>

      <section className={styles.marginTopSection}>
        <p className={variables.textMain} style={{ marginBottom: "0.5rem" }}>
          Наши награды
        </p>
        <AnimatedLine wide={false} />
        <AwardsBlock />
      </section>

      <section className={styles.marginTopSection}>
        <ProjectsBlock />
      </section>

      <section className={styles.marginTopSection}>
        <p className={variables.textMain} style={{ marginBottom: "0.5rem" }}>
          Последние события
        </p>
        <AnimatedLine wide={false} />
        <NewsBlock />
      </section>
    </main>
  );
}
