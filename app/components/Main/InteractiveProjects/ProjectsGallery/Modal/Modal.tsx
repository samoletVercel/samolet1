"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";

type project = {
  title: string;
  src: string;
};

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

const Modal = ({
  modal,
  projects,
}: {
  modal: { active: boolean; index: number };
  projects: project[];
}) => {
  const { active, index } = modal;

  const ref = useRef(null);

  useEffect(() => {
    const moveContainerX = gsap.quickTo(ref.current, "left", {
      duration: 0.8,
    });
    const moveContainerY = gsap.quickTo(ref.current, "top", {
      duration: 0.8,
    });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      moveContainerX(clientX);
      moveContainerY(clientY);
    });
  }, []);
  return (
    <motion.div
      ref={ref}
      variants={scaleAnimation}
      initial={"initial"}
      animate={active ? "open" : "closed"}
      className={styles.modalContainer}
    >
      <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
        {projects.map((project, index) => {
          const { src, title } = project;

          return (
            <div className={styles.modal} key={`${title}_${index}`}>
              <Image src={`/projectsPreview/${src}`} alt="image" fill />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
export default Modal;
