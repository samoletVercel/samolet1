import NewsCard from "../../UI/cards/NewsCard/NewsCard";
import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";

import Button from "../../UI/buttons/Button/Button";

const NewsBlock = ({ news }: { news: {id: number; title: string; preview: {id: number; src: string; type: string}; date: string}[] }) => {
  return (
    <>
      <div className={styles.grid}>

        {
          news && news.map((el) => {

            const dateRaw = el.date.split(' ')[0]

            const date = dateRaw.replaceAll('-', '.')




            return (
              <NewsCard
              key={el.title}
                img={el.preview.src}
                date={date}
                title={el.title}
                link=""
              />
            )
          }
          )
        }
      </div>
        <div className={styles.btn}>
          <Button text="Все новости" link="/news" />
        </div>
    </>
  );
};
export default NewsBlock;
