import ProjectCard from "../../UI/cards/ProjectCard/ProjectCard";
import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";

import samovar from "@/public/samovarPr.png";
import calendar from "@/public/calendarPr.png";
import severstal from "@/public/severstalPr.png";

const ProjectsBlock = () => {
  return (
    <div className={styles.grid}>
      <ProjectCard
        gridColumn="1 / 3"
        gridRow="1 / 3"
        img={samovar}
        name="Самовар"
        tags={["Спецпроекты"]}
      />
      <ProjectCard
        gridColumn="4 / 7"
        gridRow="2 / 4"
        img={calendar}
        name="Календарь самолета"
        tags={["Спецпроекты", "Календари"]}
      />
      <ProjectCard
        gridColumn="1 / 4"
        gridRow="3 / 5"
        img={severstal}
        name="Детская иллюстрированная книга в истории России 1881-1939"
        tags={["Брендинг", "Логотипы"]}
      />
    </div>
  );
};
export default ProjectsBlock;
