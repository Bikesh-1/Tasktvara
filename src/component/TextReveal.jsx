import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../lib/utils";

gsap.registerPlugin(ScrollTrigger);

export const TextReveal = ({ children, className }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    const words = element.querySelectorAll(".word");

    if (!words.length) return;

    words.forEach((w) => {
      gsap.set(w, { opacity: 0.3, color: "#7a7a7a" });
    });

    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const activeIndex = Math.floor(progress * (words.length - 1));
        words.forEach((w, idx) => {
          if (idx <= activeIndex) {
            gsap.to(w, { opacity: 1, color: "#fff", duration: 0.2, overwrite: "auto" });
          } else {
            gsap.to(w, { opacity: 0.3, color: "#7a7a7a", duration: 0.2, overwrite: "auto" });
          }
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative mx-auto max-w-4xl font-medium leading-snug text-justify text-white/30",
        "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
        "px-2 sm:px-4 md:px-0", 
        className
      )}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className={cn(
            "inline-block word",
            "mx-0.5 sm:mx-1"
          )}
        >
          {word}
        </span>
      ))}
    </div>
  );
};
