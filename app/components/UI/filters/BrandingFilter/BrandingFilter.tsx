import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";

const BrandingFilter = () => {
  return (
    <div className={`${styles.filterContainer} ${variables.textMain}`}>
      <p>Фильтровать по</p>
      <div>Типу продукта</div>
      <div className={styles.tags}></div>
    </div>
  );
};

export default BrandingFilter;
