import styles from "./page.module.scss";
import variables from "@/app/variables.module.scss";
import { swift } from "../fonts";
import BrandingFilter from "../components/UI/filters/BrandingFilter/BrandingFilter";

const BrandingPage = () => {
  return (
    <main className={variables.container}>
      <h1
        style={{ marginTop: "5rem" }}
        className={`${variables.textTitle} ${swift.className}`}
      >
        Брендинг
      </h1>
      <div className={styles.wide_line} style={{ marginTop: "1rem" }}></div>
      <div className={styles.thin_line} style={{ marginTop: "0.8rem" }}></div>
      <BrandingFilter />
    </main>
  );
};
export default BrandingPage;
