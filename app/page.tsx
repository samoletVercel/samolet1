import Image from "next/image";
import styles from "./page.module.scss";
import variables from "@/app/variables.module.scss";
import MainSection from "./components/Main/Section/MainSection";
import InteractiveHeader from "./components/Main/InteractiveHeader/InteractiveHeader";

import aboutPic from "@/public/about1.png";
import aboutPic2 from "@/public/about2.png";

import { swift } from "./fonts";
import Reveal from "./components/animations/Reveal";
import ButtonSlide from "./components/buttons/ButtonSlide/ButtonSlide";

export default function Home() {
  return (
    <main className={variables.container}>
      <InteractiveHeader />
      <section className={styles.main_sections}>
        <div className={styles.wide_line}></div>
        <div className={styles.thin_line} style={{ marginTop: "0.8rem" }}></div>
        <div className={`${styles.sections_grid} ${variables.textMain}`}>
          <MainSection title="Брендинг" link="" />
          <MainSection title="Издательство" link="" />
          <MainSection title="Спецпроекты" link="" />
        </div>
      </section>

      {/* --------- */}

      <section
        className={`${styles.marginTopSection} ${styles.mainAboutSection}`}
      >
        <div className={styles.wide_line}></div>
        <Reveal>
          <p className={`${variables.textTitle} ${swift.className}`}>
            Летаем в мире дизайна с 1995 года. Создаем уникальный фирменный
            стиль и предлагаем эксклюзивные услуги издательства.
          </p>
        </Reveal>

        <Reveal>
          <div className={`${styles.aboutSectionContent}`}>
            <p className={variables.textSec}>
              Студия основана в 1995 году Владимиром Семенихиным. Основное
              направление деятельности — графический и комплексный дизайн,
              корпоративная идентификация, брендинг.
            </p>

            <Image alt="about_first" src={aboutPic} />
          </div>
        </Reveal>

        <Reveal>
          <div className={`${styles.aboutSectionContentSec}`}>
            <Image src={aboutPic2} alt="about_second" />
          </div>
        </Reveal>

        <ButtonSlide text="о студии" link="#" />
      </section>
      <div style={{ height: "100vh" }}></div>
    </main>
  );
}
