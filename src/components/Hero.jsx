import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const products = [
    {
      title: "iPhone 16",
      subtitle: "Meet the iPhone 16 Family",
      image:
        "https://www.apple.com/v/home/cf/images/heroes/iphone-family/hero_iphone_family__fuz5j2v5xx6y_medium_2x.jpg",
      buttons: ["Learn more", "Shop iPhone"],
    },
    {
      title: "MacBook Air",
      subtitle: "Sky-high performance with M4",
      image:
        "https://www.apple.com/v/home/cf/images/heroes/macbook-air/hero_macbook_air_avail__fpm99qgohx2e_medium_2x.jpg",
      buttons: ["Learn more", "Buy"],
    },
  ];

  return (
    <section className="flex flex-col gap-12 w-full">
      {products.map((item, index) => (
        <div
          key={index}
          className="relative flex justify-center items-center overflow-hidden"
        >
          {/* Background Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[60vh] md:h-[90vh] object-cover"
          />

          {/* Overlay Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={fadeUp}
            className="absolute text-center text-white drop-shadow-lg"
          >
            <h1 className="text-4xl md:text-7xl font-semibold mb-3 bg-gradient-to-r from-gray-200 to-white bg-clip-text ">
              {item.title}
            </h1>
            <p className="text-lg md:text-2xl text-gray-400">{item.subtitle}</p>

            <div className="flex justify-center gap-4 mt-6">
              {item.buttons.map((btn, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${
                    i === 0
                      ? "bg-blue-600 text-white"
                      : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  } rounded-full px-5 py-2 text-sm md:text-lg transition-all duration-300`}
                >
                  {btn}
                </motion.button>
              ))}
            </div>

            {/* Apple Intelligence Tag */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 flex justify-center gap-2 text-sm md:text-xl"
            >
              <span className="text-blue-400">Built for</span>
              <span className="text-pink-400">Apple</span>
              <span className="text-orange-400">Intelligence</span>
            </motion.p>
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
