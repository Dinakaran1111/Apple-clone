import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="relative w-full overflow-hidden">
      {/* 🌌 Background Video */}
      <div className="relative">
        <video
          src="/images/iphone-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[70vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* 🧊 Hero Image */}
      <div className="relative">
        <img
          className="w-full object-cover max-h-[80vh]"
          src="https://www.apple.com/v/home/cf/images/heroes/bts-2025/hero_bts_2025__kjxalx8t7ia2_medium_2x.jpg"
          alt="Apple BTS Offer"
        />

        {/* ✨ Animated Overlay Content */}
        <motion.div
          className="flex flex-col items-center text-center w-full absolute top-5 p-4 md:top-16 md:gap-10"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.25 }}
        >
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white w-48 p-2 rounded-3xl font-bold text-sm md:text-3xl md:w-72 shadow-md"
          >
            Buy Mac or iPad for college
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-blue-500 to-sky-400 text-white w-56 p-2 text-center rounded-3xl font-semibold text-xs md:text-xl md:w-80 shadow-md"
          >
            With education savings
          </motion.h2>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-64 text-center p-2 rounded-3xl font-bold text-sm md:text-4xl md:w-[26rem] shadow-md"
          >
            Choose AirPods or an eligible accessory
          </motion.h1>

          <motion.button
            variants={fadeUp}
            transition={{ duration: 1 }}
            className="border border-blue-500 px-4 py-2 rounded-2xl text-blue-600 bg-white font-semibold text-base md:text-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-300/40"
          >
            Shop
          </motion.button>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
