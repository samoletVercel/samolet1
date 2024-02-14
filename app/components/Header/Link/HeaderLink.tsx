import Link from "next/link";
import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";
import { useState, Dispatch, SetStateAction } from "react";

const HeaderLink = ({
  text,
  link,
  setIsOpened,
}: {
  text: string;
  link: string;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Link
      href={link}
      className={styles.header_link}
      onClick={() => setIsOpened(false)}
    >
      <p>{text}</p>
    </Link>
  );
};

export default HeaderLink;
