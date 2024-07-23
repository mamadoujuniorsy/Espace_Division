import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image1 from "../assets/images/categories/electronique.png";
import Image2 from "../assets/images/categories/gaming.png";
import { Link } from "react-router-dom";

const Category2 = () => {
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
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
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
          <Link to="/consoles">
            <motion.div
              variants={itemVariants}
              className="py-10 pl-2 text-white rounded-3xl bg-gray-300 relative flex items-end h-[320px] w-[620px]"
              whileHover={{ scale: 1.1 }} // Zoom au survol
              onMouseEnter={() => handleHover(1)}
              onMouseLeave={handleMouseLeave}
            >
              <div>
                <div className="mb-4 absolute top-[20%]">
                  <p className="text-4xl text-black font-extrabold absolute ml-[30px]">
                    Nouveautés
                  </p>
                  <p className="text-8xl text-white font-extrabold absolute ml-[30px] mt-[20px] py-3 capitalize">
                    CONSOLES
                  </p>
                </div>
              </div>
              <img
                src={Image2}
                alt="consoles"
                className="absolute w-[200px] right-0 bottom-[-30px]"
              />
            </motion.div>
          </Link>

          {/* Colonne2 */}
          <Link to="/electroniques">
            <motion.div
              variants={itemVariants}
              className="py-10 pl-5 text-white rounded-3xl bg-orange-500 relative flex items-end h-[320px] w-[620px]"
              whileHover={{ scale: 1.1 }} // Zoom au survol
              onMouseEnter={() => handleHover(2)}
              onMouseLeave={handleMouseLeave}
            >
              <div>
                <div className="mt-[60px] absolute top-[20%] ml-[50px]">
                  <p className="text-xl font-semibold">Vidéos projecteurs</p>
                  <p className="font-extrabold text-red-100 text-2xl">
                    Ondulateurs & régulateurs
                  </p>
                  <p className="font-extrabold text-red-950 text-6xl">
                    Electroniques
                  </p>
                </div>
              </div>
              <img
                src={Image1}
                alt="televisions"
                className="absolute top-0 right-0 w-[300px]"
              />
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Category2;
