"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import ProjectsGallery from "./ProjectsGallery/ProjectsGallery";
import Modal from "./ProjectsGallery/Modal/Modal";
import AnimatedLine from "../../animations/AnimatedLine/AnimatedLine";

const projects = [
  {
    title: "1",
    src: "branding/Group 73.png",
  },
  {
    title: "2",
    src: "publishing/2.png",
  },
  {
    title: "3",
    src: "special/3.png",
  },
];

const brandingProjects = [{}];

const izdatProjects = [{}];

const specialProjects = [{}];

const InteractiveProjects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={styles.container}>
      <ProjectsGallery
        link="/branding"
        title="Брендинг"
        setModal={setModal}
        index={0}
        src={projects[0].src}
      />
      <AnimatedLine wide={false} />
      <ProjectsGallery
        link="/publishing"
        title="Издательство"
        setModal={setModal}
        index={1}
        src={projects[1].src}
      />
      <AnimatedLine wide={false} />
      <ProjectsGallery
        link="/"
        title="Спецпроекты"
        setModal={setModal}
        index={2}
        src={projects[2].src}
      />
      <AnimatedLine wide={false} />
      {mounted
        ? createPortal(
            <Modal modal={modal} projects={projects} />,
            document.body
          )
        : ""}
    </div>
  );
};

export default InteractiveProjects;
