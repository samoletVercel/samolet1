"use client";
import { useEffect, useState } from "react";
import { easeOut, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import sam from "@/public/shtrih.svg";
import Image from "next/image";

const Preloader = () => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [routeChanging, setRouteChanging] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => setRouteChanging(true);
    const handleRouteChangeComplete = () => setRouteChanging(false);
    const handleInitialLoadComplete = () => setInitialLoading(false);

    if (document.readyState === "complete") {
      setTimeout(() => {
        handleInitialLoadComplete();
      }, 2500);
    } else {
      window.addEventListener("load", handleInitialLoadComplete);
    }

    return () => {
      window.removeEventListener("load", handleInitialLoadComplete);
    };
  }, []);

  return (
    <>
      {initialLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 2, ease: "easeIn" }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#fff",
            paddingBottom: "6rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1000000",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "8.9375rem",
              height: "5.5625rem",
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ opacity: 1, left: "0", bottom: "0" }}
              animate={{ opacity: 1, left: "200%", bottom: "200%" }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: 0,
                ease: "easeOut",
              }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                src={sam}
                alt="loader"
                style={{
                  transform: "scale(80%)",
                  width: "100%",
                  height: "100%",
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 1, left: "-100%", bottom: "-100%" }}
              animate={{ opacity: 1, left: "0%", bottom: "0%" }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: 0,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                src={sam}
                alt="loader"
                style={{
                  transform: "scale(80%)",
                  width: "100%",
                  height: "100%",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Preloader;
