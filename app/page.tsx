import Image from "next/image";
import styles from "./page.module.scss";
import variables from "@/app/variables.module.scss";
import samolet from "@/public/samolet_header.svg";
import MainSection from "./components/Main/Section/MainSection";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.main_logo}>
        <div className={styles.main_logo_container}>
          <Image
            src={samolet}
            alt="logo_big"
            className={styles.main_logo_img}
          />
        </div>
      </div>
      <div className={styles.main_sections}>
        <div className={styles.wide_line}></div>
        <div className={styles.thin_line} style={{ marginTop: "0.8rem" }}></div>
        <div className={`${styles.sections_grid} ${variables.textMain}`}>
          <MainSection title="Брендинг" link="" />
          <MainSection title="Издательство" link="" />
          <MainSection title="Спецпроекты" link="" />
        </div>
      </div>
      <div style={{ height: "100vh" }}></div>
    </main>
  );
}
