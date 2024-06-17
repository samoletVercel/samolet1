"use client";

import Link from "next/link";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import { ptRootUIMed } from "@/app/fonts";
import variables from "@/app/variables.module.scss";

const Button = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link
      href={link}
      className={`${ptRootUIMed.className} ${variables.textMain} ${styles.button}`}
    >
      <div></div>
      {text}
    </Link>
  );
};
export default Button;
