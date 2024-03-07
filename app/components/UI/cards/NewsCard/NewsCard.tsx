import Image, { StaticImageData } from "next/image";
import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";

const NewsCard = ({
  date,
  img,
  title,
  link,
}: {
  date: string;
  img?: StaticImageData;
  title: string;
  link: string;
}) => {
  return (
    <div className={styles.newsCard}>
      <p className={`${styles.date} ${variables.textSec}`}>{date}</p>

      <div className={styles.imgContainer}>
        {img ? <Image src={img} alt={title} /> : <div> </div>}
      </div>

      <p className={`${styles.title} ${variables.textMain}`}>{title}</p>
    </div>
  );
};
export default NewsCard;
