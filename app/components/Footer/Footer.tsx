import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";
import { swift, ptRootUIMed } from "@/app/fonts";
import FooterForm from "../UI/forms/FooterForm/FooterForm";
import Link from "next/link";
import AnimatedLine from "../animations/AnimatedLine/AnimatedLine";

const Footer = () => {
  return (
    <footer className={`${variables.container} ${styles.footer}`}>
      {/* <FooterPlane /> */}

      <p className={variables.textMain} style={{ marginBottom: "0.5rem" }}>
        Связаться с нами
      </p>
      <AnimatedLine wide={true} />

      <a
        className={`${styles.email} ${swift.className} ${variables.textTitle}`}
        href="mailto:samolet@gmail.com"
      >
        samolet@gmail.com
      </a>

      <div className={`${styles.contacts} ${variables.textMain}`}>
        <div className={styles.element}>
          <span className={ptRootUIMed.className}>Адрес</span>
          <p>107078, Россия, Москва,ул. Садовая-Черногрязская д. 3(б)</p>
        </div>
        <div className={styles.element}>
          <span className={ptRootUIMed.className}>Телефон</span>
          <p>+7 (499) 975-11-15</p>
        </div>
      </div>

      {/*       <div className={styles.wide_line}></div>

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
      <div style={{ height: "10vh" }}></div> */}
    </footer>
  );
};
export default Footer;
