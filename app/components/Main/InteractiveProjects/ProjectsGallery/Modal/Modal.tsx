"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";

type project = {
  src: string;
  type: string;
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
      duration: 0.6,
    });
    const moveContainerY = gsap.quickTo(ref.current, "top", {
      duration: 0.6,
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      moveContainerX(pageX);
      moveContainerY(pageY);
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
          const { src, type } = project;

          if (type === "image") {
            return (
              <div className={styles.modal} key={`${src}_${index}`}>
                <Image src={src} alt="image" fill />
              </div>
            );
          } else {
            return (
              <div className={styles.modal} key={`${src}_${index}`}>
                        <video width="680" height="400" autoPlay muted preload="none">
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            )
          }

        })}
      </div>
    </motion.div>
  );
};
export default Modal;
