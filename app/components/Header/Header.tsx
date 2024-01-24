"use client";
import { useState } from "react";
import HeaderButton from "./button/HeaderButton";
import styles from "./style.module.scss";
import logo from "@/public/samolet.svg";
import Image from "next/image";

const Header = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div className={styles.header}>
      <div>
        <Image src={logo} alt="samolet-logo" />
      </div>
      <HeaderButton
        isOpened={isOpened}
        setIsOpened={setIsOpened}
      ></HeaderButton>
    </div>
  );
};
export default Header;
