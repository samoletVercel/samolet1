import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";
import { swift } from "@/app/fonts";
import FooterForm from "../UI/forms/FooterForm/FooterForm";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={`${variables.container} ${styles.footer}`}>
      <div className={styles.wide_line}></div>

      <h1 className={`${variables.textTitle} ${swift.className}`}>
        Связаться с нами
      </h1>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <p className={variables.textSec}>
            Задача организации, в особенности же рамки и место обучения кадров
            влечет за собой процесс внедрения и модернизации направлений
            прогрессивного развития.{" "}
          </p>
          <div className={styles.contacts}>
            <p>107078, Россия, Москва,ул. Садовая-Черногрязская д. 3(б)</p>
            <p>(499) 975-1115</p>
            <p>samolet@gmail.com</p>
          </div>
        </div>
        <div>
          <FooterForm />
        </div>
      </div>
      <div className={styles.footerNav}>
        <div className={styles.thin_line}></div>
        <div className={`${styles.navContainer} ${variables.textMain}`}>
          <Link href="branding">Брендинг</Link>
          <Link href="branding">Издательство</Link>
          <Link href="branding">Спецпроекты</Link>
          <Link href="branding">О студии</Link>
          <Link href="branding">Блог</Link>
        </div>
        <div className={styles.thin_line}></div>
      </div>
      <div style={{ height: "10vh" }}></div>
    </footer>
  );
};
export default Footer;
