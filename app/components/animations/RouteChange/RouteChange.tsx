"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { usePathname } from "next/navigation";
import sam from "@/public/shtrih.svg";
import Image from "next/image";

const RouteChange = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  const mainControls = useAnimation();

  useEffect(() => {
    console.log("changed");
    mainControls.start("visible");
    setTimeout(() => {
      mainControls.start("hidden");
    }, 400);
  }, [pathname]);

  return (
    <motion.div
      className={styles.route}
      variants={{
        hidden: { top: "100%", height: "0" },
        visible: { top: "0", height: "100%" },
      }}
      transition={{ duration: 0.2 }}
      animate={mainControls}
      initial="hidden"
    />
  );
};

export default RouteChange;
