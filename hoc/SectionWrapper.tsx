'use client'

import { motion } from "framer-motion";

import { styles } from "@/components/styles";
import { staggerContainer } from "../utils/motion";
import { ComponentType, FC } from "react";

const StarWrapper = <P extends object>(
  Component: ComponentType<P>,
  idName: string
): FC<P> => {
  // Return the HOC component
  const HOC: FC<P> = (props) => {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component {...props} /> {/* Pass props to the wrapped component */}
      </motion.section>
    );
  };

  return HOC;
};

export default StarWrapper;
