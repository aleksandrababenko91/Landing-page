"use client";
import InvestCard from './InvestCard/InvestCard';
import styles from './InvestSection.module.scss';
import { items } from "./items";
import { motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function InvestSection() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return ()=> lenis.destroy()
  }, []);

  return (
    <section ref={container} className={styles.container}>
      <h2 className={styles.titleWrapper}>Title</h2>
      {items.map((item, i) => {
        const targetScale = 1 - (items.length - i) * 0.05;
        return (
          <InvestCard
            key={i}
            i={i}
            {...item}
            progress={scrollYProgress}
            item={item}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
}