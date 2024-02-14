import Link from "next/link";
import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";
import arrow from "@/public/arrow1.svg";
import Image from "next/image";

const MainSection = ({
  title,
  link,
  video,
}: {
  title: string;
  link: string;
  video?: string;
}) => {
  return (
    <Link href={link}>
      <div className={`${variables.textMain} ${styles.main_section}`}>
        <div className={styles.title}>
          <Image src={arrow} alt="arrow-icon" />
          <p>{title}</p>
        </div>
        <div className={styles.preview}>
          <div className={styles.preview_video}></div>
          <p>
            Задача организации, в особенности же рамки и место обучения кадров
            влечет за собой процесс внедрения и модернизации направлений
          </p>
          <div className={styles.preview_block}></div>
        </div>
      </div>
    </Link>
  );
};

export default MainSection;
