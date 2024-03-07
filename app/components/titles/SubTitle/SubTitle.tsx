import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";
import { motion, useAnimation, useInView } from "framer-motion";

const SubTitle = ({ text }: { text: string }) => {
  return (
    <div className={styles.subTitle}>
      <p className={`${variables.textMain}`}>{text}</p>
      <div className={styles.thin_line}></div>
    </div>
  );
};

export default SubTitle;
