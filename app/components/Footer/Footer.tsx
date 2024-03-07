import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";
import { swift } from "@/app/fonts";

const Footer = () => {
  return (
    <footer className={`${variables.container} ${styles.footer}`}>
      <div className={styles.wide_line}></div>

      <h1 className={`${variables.textTitle} ${swift.className}`}>
        Связаться с нами
      </h1>
      <div className={styles.footerContainer}>
        <div>
          <p className={variables.textSec}>
            Задача организации, в особенности же рамки и место обучения кадров
            влечет за собой процесс внедрения и модернизации направлений
            прогрессивного развития.{" "}
          </p>
          <div>
            <p>107078, Россия, Москва,ул. Садовая-Черногрязская д. 3(б)</p>
            <p>(499) 975-1115</p>
            <p>samolet@gmail.com</p>
          </div>
        </div>
        <div>
          <form className={styles.form}>
            <div className={styles.fieldWrap}>
              <label>Имя:</label>
              <input
                type="text"
                placeholder="Алекснадр"
                className={variables.textMain}
              ></input>
            </div>
            <div className={styles.fieldWrap}>
              <label>Электронная почта:</label>
              <input
                type="text"
                placeholder="Email123@mail.com"
                className={variables.textMain}
              ></input>
            </div>
            <div className={styles.fieldWrap}>
              <label>Номер телефона:</label>
              <input
                type="text"
                placeholder="+7 XXX XXX XX-XX"
                className={variables.textMain}
              ></input>
            </div>
            <div className={styles.fieldWrap}>
              <label>Компания:</label>
              <input
                type="text"
                placeholder="Группа АБВ"
                className={variables.textMain}
              ></input>
            </div>
            <div className={styles.fieldWrap}>
              <label>Сообщение:</label>
              <input
                type="text"
                placeholder="Хотим с вами работать"
                className={variables.textMain}
              ></input>
            </div>
            <button className={styles.button}>Отправить</button>
          </form>
        </div>
      </div>
      <div style={{ height: "100vh" }}></div>
    </footer>
  );
};
export default Footer;
