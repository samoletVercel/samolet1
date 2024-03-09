"use client";
import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";
import { ptRootUI, ptRootUIMed } from "@/app/fonts";

const FooterForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.fieldWrap}>
        <label className={ptRootUIMed.className}>Имя:</label>
        <input
          required
          type="name"
          placeholder="Алекснадр"
          className={`${variables.textMain} ${ptRootUI.className}`}
        ></input>
      </div>
      <div className={styles.fieldWrap}>
        <label className={ptRootUIMed.className}>Электронная почта:</label>
        <input
          required
          type="email"
          placeholder="Email123@mail.com"
          className={`${variables.textMain} ${ptRootUI.className}`}
        ></input>
      </div>
      <div className={styles.fieldWrap}>
        <label className={ptRootUIMed.className}>Номер телефона:</label>
        <input
          type="tel"
          placeholder="+7 XXX XXX XX-XX"
          className={`${variables.textMain} ${ptRootUI.className}`}
        ></input>
      </div>
      <div className={styles.fieldWrap}>
        <label className={ptRootUIMed.className}>Компания:</label>
        <input
          type="text"
          placeholder="Группа АБВ"
          className={`${variables.textMain} ${ptRootUI.className}`}
        ></input>
      </div>
      <div className={styles.fieldWrap}>
        <label className={ptRootUIMed.className}>Сообщение:</label>
        <input
          type="text"
          placeholder="Хотим с вами работать"
          className={`${variables.textMain} ${ptRootUI.className}`}
        ></input>
      </div>
      <button className={`${styles.button} ${ptRootUI.className}`}>
        Отправить
      </button>
    </form>
  );
};

export default FooterForm;
