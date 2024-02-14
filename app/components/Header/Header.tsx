"use client";
import { useState } from "react";
import HeaderButton from "./button/HeaderButton";
import styles from "./style.module.scss";
import logo from "@/public/samolet.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import HeaderLink from "./Link/HeaderLink";
import Link from "next/link";

const Header = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div className={styles.header}>
      <div className={styles.main}>
        <div>
          {isOpened && (
            <Link href={"/"} onClick={() => setIsOpened(false)}>
              <Image src={logo} alt="samolet-logo" />
            </Link>
          )}
        </div>
        <HeaderButton
          isOpened={isOpened}
          setIsOpened={setIsOpened}
        ></HeaderButton>
      </div>

      <motion.div
        initial={false}
        className={styles.header_menu}
        animate={{ height: isOpened ? "100vh" : "0" }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
      >
        <div className={styles.wide_line}></div>
        <div className={styles.thin_line} style={{ marginTop: "0.8rem" }}></div>
        <div className={styles.links_list}>
          <HeaderLink
            text="Брендинг"
            link="/branding"
            setIsOpened={setIsOpened}
          />
          <HeaderLink text="Издательство" link="" setIsOpened={setIsOpened} />
          <HeaderLink text="Спецпроекты" link="" setIsOpened={setIsOpened} />
          <HeaderLink text="О студии" link="" setIsOpened={setIsOpened} />
          <HeaderLink text="Блог" link="" setIsOpened={setIsOpened} />
        </div>
      </motion.div>
    </div>
  );
};
export default Header;
