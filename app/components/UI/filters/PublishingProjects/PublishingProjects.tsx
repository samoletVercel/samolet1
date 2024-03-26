"use client";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";
import { PublishingProject } from "@/app/types";
import ProjectCard from "../../cards/ProjectCard/ProjectCard";
import PublishingCard from "../../cards/PublishingCard/PublishingCard";

const PublishingProjects = ({
  tags,
  projects,
}: {
  tags: Array<string>;
  projects: Array<PublishingProject>;
}) => {
  const [selectedTag, setSelectedTag] = useState("Все");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  function handleTagClick(tag: string) {
    if (selectedTag === tag) {
      return;
    } else {
      setSelectedTag(tag);
    }
  }

  useEffect(() => {
    console.log("changed");
    filterProjects();
  }, [selectedTag]);

  function filterProjects() {
    if (selectedTag !== "Все") {
      const temp = projects.filter((pr) =>
        pr.tags.join("").includes(selectedTag)
      );
      setFilteredProjects(temp);
    } else {
      setFilteredProjects(projects);
    }
  }

  return (
    <>
      <div className={`${styles.filterContainer} ${variables.textMain}`}>
        <div className={styles.tags}>
          {tags.map((tag) => {
            return (
              <p
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={selectedTag === tag ? `${styles.tagActive}` : ""}
              >
                {tag}
              </p>
            );
          })}
        </div>
      </div>
      <div className={styles.projectsGrid}>
        {filteredProjects.map((el, i) => {
          return (
            <PublishingCard
              key={`${el.name}_${i}`}
              img={el.img}
              name={el.name}
              author={el.author}
              scan={el.scan}
            />
          );
        })}
      </div>
    </>
  );
};

export default PublishingProjects;
