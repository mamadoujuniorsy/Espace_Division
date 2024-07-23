import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image1 from "../assets/images/categories/macbook.png";
import { Link } from "react-router-dom";

const Category4 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="py-8" ref={ref}>
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="flex flex-row flex-wrap gap-14 justify-center items-center">
          {/* Colonne1 */}
          <Link to="/ordinateurs">
            <motion.div
              variants={itemVariants}
              className="py-10 pl-2 text-white rounded-3xl bg-gray-300 relative flex items-end h-[320px] w-[820px]"
              whileHover={{ scale: 1.1 }} // Zoom au survol
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <div>
                <div className="mb-4 absolute top-[20%]">
                  <p className="text-4xl text-black font-extrabold absolute ml-[30px]">
                    Ordinateurs
                  </p>
                  <p className="text-8xl text-white font-extrabold absolute ml-[30px] mt-[20px] py-3 capitalize">
                    Qualité
                  </p>
                </div>
              </div>
              <motion.img
                src={Image1}
                alt="ordinateurs"
                className="absolute w-[200px] right-0 bottom-[-30px]"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }} // Zoom au survol de l'image
              />
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Category4;
