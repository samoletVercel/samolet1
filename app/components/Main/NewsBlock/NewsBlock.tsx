import NewsCard from "../../UI/cards/NewsCard/NewsCard";
import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";

const NewsBlock = () => {
  return (
    <div className={styles.grid}>
      <NewsCard
        date="21.12.23"
        title="Задача организации, в особенности же."
        link=""
      />
      <NewsCard
        date="21.12.23"
        title="Для современного мира социально-экономическое развитие не даёт нам иного выбора."
        link=""
      />
      <NewsCard
        date="21.12.23"
        title="В частности, современная методология разработки требует анализа вывода текущих активов."
        link=""
      />
    </div>
  );
};
export default NewsBlock;
