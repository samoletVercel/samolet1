"use client";
import { useEffect, useState } from "react";
import HeaderButton from "./button/HeaderButton";
import styles from "./style.module.scss";
import logo from "@/public/samolet.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import HeaderLink from "./Link/HeaderLink";
import Link from "next/link";
import ButtonSlide from "../UI/buttons/ButtonSlide/ButtonSlide";
import variables from "@/app/variables.module.scss";

const Header = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isLogoVisible, setIsLogoVisible] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState(0);
  const [headerImageHeight, setHeaderImageHeight] = useState<number>(200);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    if (pathname == "/") {
      const block = document.getElementById("headerImageBlock")!;
      const height = getComputedStyle(block).getPropertyValue("height");
      setHeaderImageHeight(
        parseInt(height.substring(0, height.length - 2), 10) + 40
      );
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > headerImageHeight) {
      setIsLogoVisible(true);
    } else {
      setIsLogoVisible(false);
    }
  }, [scrollY]);

  return (
    <>
      <div
        className={styles.header}
        style={{
          overflowY: "hidden",
        }}
      >
        <div className={styles.main}>
          <div>
            <div className={styles.main_logo}>
              <motion.div
                className={styles.main_logo_img}
                animate={{
                  top:
                    pathname != "/" || isOpened || isLogoVisible ? "0" : "100%",
                }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                initial={{
                  top:
                    pathname != "/" || isOpened || isLogoVisible ? "0" : "100%",
                }}
              >
                <Link
                  href={"/"}
                  onClick={() => setIsOpened(false)}
                  className={styles.main_logo_img}
                >
                  <Image src={logo} alt="samolet-logo" fill />
                </Link>
              </motion.div>
            </div>
          </div>
          <HeaderButton isOpened={isOpened} setIsOpened={setIsOpened} />

          <div className={`${styles.studio} ${variables.textMain}`}>
            дизайн-студия
          </div>
        </div>

        <motion.div
          initial={false}
          className={styles.header_menu}
          animate={{ height: isOpened ? "100vh" : "0" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
        >
          <div className={styles.menu_logo_mobile}>
            <Link
              href={"/"}
              onClick={() => setIsOpened(false)}
              className={styles.main_logo_img}
            >
              <Image src={logo} alt="samolet-logo" fill />
            </Link>
          </div>

          <div className={styles.wide_line}></div>
          <div
            className={styles.thin_line}
            style={{ marginTop: "0.8rem" }}
          ></div>
          <div className={styles.links_list}>
            <HeaderLink
              text="Брендинг"
              link="/branding"
              setIsOpened={setIsOpened}
            />
            <HeaderLink
              text="Издательство"
              link="/publishing"
              setIsOpened={setIsOpened}
            />
            <HeaderLink
              text="Спецпроекты"
              link="/special"
              setIsOpened={setIsOpened}
            />
            <HeaderLink
              text="О студии"
              link="/about"
              setIsOpened={setIsOpened}
            />
            <HeaderLink text="Блог" link="/news" setIsOpened={setIsOpened} />
          </div>
          {/* <ButtonSlide text="Связаться с нами" link="" /> */}

          <div className={styles.line_mob}>
            <div
              className={styles.thin_line}
              style={{ marginTop: "2rem" }}
            ></div>
          </div>

          <div className={styles.contacts}>
            <p>107078, Россия, Москва,ул. Садовая-Черногрязская д. 3(б)</p>
            <p>(499) 975-1115</p>
            <p>samolet@gmail.com</p>
          </div>
          <div className={styles.header_blank}></div>
        </motion.div>
      </div>
      <div className={styles.mobile_button}>
        <HeaderButton isOpened={isOpened} setIsOpened={setIsOpened} />
      </div>
      {/*     <button
      className={`${styles.mobile_button} ${variables.textMain}`}
      onClick={() => setIsOpened(!isOpened)}
    >
      меню
    </button> */}
    </>
  );
};
export default Header;
