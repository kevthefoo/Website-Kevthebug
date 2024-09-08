"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Reveal({
  children,
  delayTime = 0.5,
  xTranslate = 0,
  yTranslate = 150,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="flex w-full flex-col overflow-hidden"
      variants={{
        hidden: { opacity: 0, x: xTranslate, y: yTranslate },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 1, delay: delayTime }}
    >
      {children}
    </motion.div>
  );
}
