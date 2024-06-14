import NewsCard from "../../UI/cards/NewsCard/NewsCard";
import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";

import new1 from "@/public/news1.png";
import new2 from "@/public/news2.png";
import new3 from "@/public/news3.png";

const NewsBlock = () => {
  return (
    <div className={styles.grid}>
      <NewsCard
        img={new1}
        date="21.12.23"
        title="Задача организации, в особенности же."
        link=""
      />
      <NewsCard
        img={new2}
        date="21.12.23"
        title="Для современного мира социально-экономическое развитие не даёт нам иного выбора."
        link=""
      />
      <NewsCard
        img={new3}
        date="21.12.23"
        title="В частности, современная методология разработки требует анализа вывода текущих активов."
        link=""
      />
    </div>
  );
};
export default NewsBlock;
