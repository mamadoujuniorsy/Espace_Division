import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image1 from "../assets/images/categories/climatisation.png";
import Image2 from "../assets/images/categories/print.png";
import Image3 from "../assets/images/categories/destockage.png";
import { Link } from "react-router-dom";

const Category3 = () => {
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
          <Link to="/climatiseurs">
            <motion.div
              variants={itemVariants}
              className="py-10 pl-2 text-white rounded-3xl bg-sky-300 relative flex items-end h-[320px] w-[320px]"
              whileHover={{ scale: 1.1 }} // Zoom au survol
              onMouseEnter={() => handleHover(1)}
              onMouseLeave={handleMouseLeave}
            >
              <div>
                <div className="flex flex-col justify-center items-center gap-1 mt-5">
                  <p className="text-2xl text-cyan-800 font-bold">Ventilo</p>
                  <p className="text-4xl text-sky-900 font-extrabold">
                    Climatisation
                  </p>
                </div>
              </div>
              <img
                src={Image1}
                alt="climatisations"
                className="absolute w-[280px] top-0"
              />
            </motion.div>
          </Link>

          {/* Colonne2 */}
          <Link to="/imprimantes">
            <motion.div
              variants={itemVariants}
              className="py-10 pl-2 text-white rounded-3xl bg-sky-900 relative flex items-end h-[320px] w-[520px]"
              whileHover={{ scale: 1.1 }} // Zoom au survol
              onMouseEnter={() => handleHover(2)}
              onMouseLeave={handleMouseLeave}
            >
              <div>
                <div className="mb-4 absolute top-[40%] left-[5%]">
                  <p className="text-2xl text-gray-500 font-bold absolute ml-[30px] mt-[-30px]">
                    Accessoires
                  </p>
                  <p className="text-3xl font-extrabold">Scanners</p>
                  <p className="text-[38px] text-teal-500 font-extrabold">
                    Imprimantes
                  </p>
                </div>
              </div>
              <img
                src={Image2}
                alt="Imprimantes"
                className="absolute w-[300px] right-0 top-7"
              />
            </motion.div>
          </Link>

          {/* Colonne3 */}
          <Link to="/promo">
            <motion.div
              variants={itemVariants}
              className="py-10 pl-5 text-white rounded-3xl bg-green-500 relative flex items-end h-[320px] w-[320px]"
              whileHover={{ scale: 1.1 }} // Zoom au survol
              onMouseEnter={() => handleHover(3)}
              onMouseLeave={handleMouseLeave}
            >
              <div>
                <div className="mb-4 flex flex-col justify-center items-center">
                  <p className="text-3xl font-extrabold">Destockage</p>
                  <p className="text-5xl text-green-900 font-extrabold">Promo</p>
                </div>
              </div>
              <img
                src={Image3}
                alt="destockage promo"
                className="absolute w-full right-[5%] mb-[30px]"
              />
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Category3;
