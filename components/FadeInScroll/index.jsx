import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const FadeInOnScroll = ({ children }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null); // 创建ref用于追踪DOM元素

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const elementTop = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // 当元素进入视口时，设置 isInView 为 true
        if (elementTop < windowHeight) {
          setIsInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      ref={ref} // 将ref附加到motion.div上
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
