import NewsCard from "../../UI/cards/NewsCard/NewsCard";
import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";

import new1 from "@/public/news1.png";
import new2 from "@/public/news2.png";
import new3 from "@/public/news3.png";
import Button from "../../UI/buttons/Button/Button";

const NewsBlock = () => {
  return (
    <>
      <div className={styles.grid}>
        <NewsCard
          img={new1}
          date="21.12.23"
          title="В данный момент работаем над проспектами к выставкам Андрея Бисти и Латифа Казбеков."
          link=""
        />
        <NewsCard
          img={new2}
          date="21.12.23"
          title="Прошли съемки работ Латифа Казбекова."
          link=""
        />
        <NewsCard
          img={new3}
          date="21.12.23"
          title="Готовим к публикации на сайте айдентику ГМИИ им. Пушкина"
          link=""
        />
      </div>
      <div className={styles.btn}>
        <Button text="Все новости" link="" />
      </div>
    </>
  );
};
export default NewsBlock;
