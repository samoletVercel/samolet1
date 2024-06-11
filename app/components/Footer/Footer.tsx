import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";
import { swift, ptRootUIMed } from "@/app/fonts";
import FooterForm from "../UI/forms/FooterForm/FooterForm";
import Link from "next/link";
import AnimatedText from "../animations/AnimatedText/AnimatedText";
import AnimatedLine from "../animations/AnimatedLine/AnimatedLine";

const Footer = () => {
  return (
    <footer>
      <div className={`${styles.footer}`}>
        <div className={`${variables.container}`}>
          <p className={variables.textMain} style={{ marginBottom: "0.5rem" }}>
            Связаться с нами
          </p>
          <AnimatedLine wide={true} />

          <div style={{ marginTop: "0.5rem" }}></div>
          <AnimatedLine wide={false} />

          <div style={{ marginTop: "1rem" }}></div>

          <div className={styles.mainElement}>
            <AnimatedText text={[`samolet@gmail.com`]} />
            <p className={variables.textMain}>Эл. почта</p>
          </div>

          <div style={{ marginTop: "8rem" }}></div>

          <AnimatedLine wide={false} />
          <div className={styles.mainElement}>
            <AnimatedText text={[`+7 (499) 975-11-15`]} />
            <p className={variables.textMain}>Телефон</p>
          </div>
        </div>

        <div className={styles.back}>
          <div className={variables.container}>
            <div className={styles.footerNav}>
              <div className={`${styles.navContainer} ${variables.textMain}`}>
                <span className={ptRootUIMed.className}>Навигация</span>
                <Link href="branding">Брендинг</Link>
                <Link href="branding">Издательство</Link>
                <Link href="branding">Спецпроекты</Link>
                <Link href="branding">О студии</Link>
                <Link href="branding">Блог</Link>
              </div>
              <div className={`${styles.navContainer} ${variables.textMain}`}>
                <span className={ptRootUIMed.className}>Наш адрес</span>
                <p>107078, Россия, Москва,ул. Садовая-Черногрязская д. 3(б)</p>
              </div>
            </div>
            <div className={styles.copyright}>
              <AnimatedLine wide={false} />
              <div style={{ marginTop: "1rem" }}></div>
              ©2024 дизайн-студия «Самолет»
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
