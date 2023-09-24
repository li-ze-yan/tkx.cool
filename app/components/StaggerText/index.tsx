import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface IProps {
  text: string | string[];
  staggerChildren?: number;
  once?: boolean;
  y?: number;
}
const StaggerText = ({
  text,
  staggerChildren = 0.05,
  once = true,
  y = 20,
}: IProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const textArr = Array.isArray(text) ? text : [text];
  const isInView = useInView(ref, { amount: 0.5, once });
  const variants = {
    hidden: {
      opacity: 0,
      y,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.span
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        staggerChildren,
        type: "spring",
        damping: 100,
        stiffness: 100,
      }}
      ref={ref}
      aria-hidden
    >
      {textArr.map((line, index) => (
        <span className="block" key={`${line}_${index}`}>
          {line.split(" ").map((word, count) => (
            <motion.span className="inline-block" key={`${word}_${count}`}>
              {word.split("").map((char, i) => (
                <motion.span
                  className="inline-block"
                  key={`${char}_${i}`}
                  variants={variants}
                >
                  {char}
                </motion.span>
              ))}
              <span className="inline-block">&nbsp;</span>
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};

export { StaggerText };
