import ProjectCard from "../../UI/cards/ProjectCard/ProjectCard";
import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";

import samovar from "@/public/samovarPr.png";
import calendar from "@/public/calendarPr.png";
import severstal from "@/public/severstalPr.png";

import detskaya from "@/public/detskaya.png";
import pushkin from "@/public/pushkin.png";
import gothic from "@/public/gotica.png";
import mage from "@/public/mage2.png";
import ProjectCardReg from "../../UI/cards/ProjectCardReg/ProjectCardReg";

const ProjectsBlock = () => {
  return (
    <div className={styles.grid}>
      <ProjectCardReg
        img={detskaya}
        name="Детская иллюстрированная книга в истории России 1881-1939"
        tags={["Издательство", "Cамиздат"]}
      />
      <ProjectCardReg
        img={pushkin}
        name="Государственный музей изобразительных искусств имени А.С.Пушкина"
        tags={["Брендинг"]}
      />
      <ProjectCardReg
        img={gothic}
        name="Каталог к выставке ИСКУССТВО СЕВЕРНОЙ ГОТИКИ И РЕНЕССАНСА"
        tags={["Издательство"]}
      />
      <ProjectCardReg
        img={mage}
        name="Айдентика для морской арктической геолого-геофизической экспедиции"
        tags={["Брендинг"]}
      />
    </div>
  );
};
export default ProjectsBlock;
