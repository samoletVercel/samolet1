import Link from "next/link";
import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";
import { useState, Dispatch, SetStateAction } from "react";
import { swift } from "@/app/fonts";

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
      <p className={swift.className}>{text}</p>
    </Link>
  );
};

export default HeaderLink;
