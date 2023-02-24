import React, {useState} from "react";
import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai";
import {motion} from "framer-motion";
import Order from "../../components/Order";
import {Link, useNavigate} from "react-router-dom";

import {BsArrowRight} from "react-icons/bs";
import ProductSlider from "../../components/ProductsSlider";

const HomePage = () => {
  const [focusProduct, setFocusProduct] = useState("#004440");
  const navigait = useNavigate();
  const container = {
    hidden: {opacity: 1, scale: 0},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: {y: 50, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.7}}
      className="flex flex-col items-center gap-40 w-full relative mt-48"
    >
      <img
        src="/lovepik-aesthetic-plants-decoration-picture-png-image_401007576_wh860.png"
        className="w-[400px] absolute hidden lg:block  lg:top-10  left-[-200px] lg:left-[-150px]"
        alt="plant"
      />
      <motion.section
        id="home"
        initial={{y: "-200px", opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.7}}
        className="flex flex-col md:flex-row gap-20 justify-between w-full px-10 md:px-20 lg:px-40 xl:px-56"
      >
        <div className="flex flex-col gap-6 md:w-80 lg:w-96">
          <div className="flex flex-col text-[#004440]">
            <h2 className="font-semibold text-[130px]">JOUD.</h2>
            <span className="text-3xl translate-x-[40px] translate-y-[-5px]">
              Cafe
            </span>
          </div>
          <p>
            joud Cafe is a trend-setting eatery in the heart of Abu Dhabi. Our
            new full-service menu features the best in comfort foods and clissic
            dishes with modern flare that are sure to keep you comming back time
            and again
          </p>
          <Link
            to={"/menu"}
            className="py-4 px-12 bg-[#004440] text-white rounded-lg text-center"
          >
            Menu
          </Link>
        </div>
        <div className=" absolute hidden md:block md:static lg:w-80 translate-y-[-80px]">
          <img src="/coffieCup1.png" className="w-full" />
        </div>
      </motion.section>

      <motion.section
        initial={{y: "100px", opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.7}}
        id="chose_section"
        className="flex flex-col gap-20 items-center bg-white py-10  md:h-screen w-full"
      >
        <div className="flex flex-col gap-2 items-center text-[#004440] z-40">
          <h2 className="text-5xl md:text-6xl font-bold">
            CHOOSE <span className="text-[#f1c19d]">YOUR</span>
          </h2>
          <p className="text-2xl md:text-4xl">OWN DRINK</p>
        </div>
        <div
          div
          className="flex justify-between items-center gap-2 lg:gap-10 z-40 p-2"
        >
          <div className="flex gap-4 md:gap-8 lg:gap-16 justify-between">
            <button
              className="p-1 sm:p-2 md:py-4 md:px-8 bg-gray-400 focus:bg-[#9d383c] hover:bg-[#9d383c] text-white rounded-3xl cursor-pointer text-xs sm:text-sm"
              onClick={() => setFocusProduct("#9d383c")}
              autoFocus={focusProduct === "#9d383c"}
            >
              MATCHA LATTE
            </button>
            <button
              className="p-1 sm:p-2 md:py-4 md:px-8 bg-gray-400 focus:bg-[#004440] hover:bg-[#004440] text-white rounded-3xl cursor-pointer text-xs sm:text-sm"
              onClick={() => setFocusProduct("#004440")}
              autoFocus={focusProduct === "#004440"}
            >
              FLAT WHITE
            </button>
            <button
              className="p-1 sm:p-2 md:py-4 md:px-8 bg-gray-400 focus:bg-[#6c4b38] hover:bg-[#6c4b38] text-white rounded-3xl cursor-pointer text-xs sm:text-sm"
              onClick={() => setFocusProduct("#6c4b38")}
              autoFocus={focusProduct === "#6c4b38"}
            >
              ICED MOCHA
            </button>
          </div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="container flex flex-wrap md:flex-nowrap  justify-center items-center gap-10 z-40"
        >
          <motion.div variants={item} className="items">
            <img
              src="/cupCoffiePink.png"
              className={
                focusProduct === "#9d383c"
                  ? "w-44 cursor-pointer transtion duration-200"
                  : "w-40 cursor-pointer transtion duration-200"
              }
            />
          </motion.div>

          <motion.div variants={item} className="items">
            <img
              src="/cupCoffieGreen.png"
              className={
                focusProduct === "#004440"
                  ? "w-44 cursor-pointer transtion duration-200"
                  : "w-40 cursor-pointer transtion duration-200"
              }
            />
          </motion.div>
          <motion.div variants={item} className="items">
            <img
              src="/cupCoffieMocha.png"
              className={
                focusProduct === "#6c4b38"
                  ? "w-44 cursor-pointer transtion duration-200"
                  : "w-40 cursor-pointer transtion duration-200"
              }
            />
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.section
        initial={{opacity: 0, x: "-600px"}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 0.7}}
        className="flex justify-center items-center flex-col-reverse md:flex-row md:justify-between z-40 gap-20 px-10 md:px-20 lg:px-40 w-full"
      >
        <div className="w-full xl:w-[500px]">
          <img src="/cuppeeee.png" className="w-full" />
        </div>
        <div className="flex flex-col gap-6 w-full md:w-96">
          <h2 className="text-[#004440] text-4xl sm:text-3xl lg:text-4xl font-bold tracking-[0.2em]">
            LOOKING <span className="text-[#d37c35]">FOR</span> A PICK-ME-UP?
          </h2>
          <p className="sm:text-sm lg:text-md">
            joud Cafe is a trend-setting eatery in the heart of Abu Dhabi. Our
            new full-service menu features the best in comfort foods and clissic
            dishes with modern flare that are sure to keep you comming back time
            and again
          </p>
        </div>
      </motion.section>
      <motion.section
        initial={{opacity: 0, y: "200px"}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.7}}
        className="flex justify-center items-center flex-col-reverse md:flex-row md:justify-between z-40 gap-20 px-10 md:px-20 lg:px-40 w-full bg-white p-8"
      >
        <div className="flex flex-col gap-6 w-full md:w-96">
          <h2 className="text-[#004440] text-4xl sm:text-3xl lg:text-4xl font-bold tracking-[0.2em]">
            Locations
          </h2>
          <p className="sm:text-sm lg:text-md">
            Couvee has 5 branches, four are located in Yogyakarta and one is
            located in Jakarta.
          </p>
          <button
            onClick={() => navigait("/locations")}
            className="bg-[#004440] flex justify-between items-center gap-4 text-white text-xl p-2"
          >
            All Locations <BsArrowRight size={25} />
          </button>
        </div>
        <div className="w-full xl:w-[500px]">
          <img
            src="/coffee-shop-nterior-berezen-studio-2.jpg"
            className="w-full"
          />
        </div>
      </motion.section>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="container flex justify-center items-center flex-wrap gap-4 w-full mb-40"
      >
        <div className="flex gap-6 justify-center p-4  bg-white relative hover:translate-y-[-20px] transtion duration-[0.5s] w-[500px]">
          <img
            src="/honey-lemonade-300x300.jpg"
            className="w-40 relative"
            alt="promo"
          />
          <span className="absolute left-[-12px] top-0 bg-[#e2d9c2] py-1 px-8 rotate-[-16deg]	text-sm font-semibold">
            Promo!
          </span>
          <div className="flex flex-col gap-2">
            <h4 className="text-xl">Buy 1 Large, Get FREE 1 Reguler</h4>
            <div className="flex gap-2">
              <p>
                Dapatkan gratis 1 cup regular dengan membeli 1 cup large size
                varian apa saja.
              </p>
            </div>
            <time className="flex justify-between gap-2 w-full">
              1 Juli - 30 Juli 2019
            </time>
          </div>
        </div>
        <div className="flex gap-6 justify-center p-4  bg-white relative hover:translate-y-[-20px] transtion duration-[0.5s] w-[500px]">
          <img
            src="/caramel-macciato-300x300.jpg"
            className="w-40 relative"
            alt="promo"
          />
          <span
            id="test"
            className="absolute left-[-12px] top-0 bg-[#e2d9c2] py-1 px-8 rotate-[-16deg]	text-sm font-semibold"
          >
            Promo!
          </span>
          <div className="flex flex-col gap-2">
            <h4 className="text-xl">Buy 2 Large, Get FREE 1 Reguler</h4>
            <div className="flex gap-2">
              <p>
                Dapatkan gratis 1 cup regular dengan membeli 2 cup large size
                varian apa saja.
              </p>
            </div>
            <time className="flex justify-between gap-2 w-full">
              1 Juli - 30 Juli 2019
            </time>
          </div>
        </div>
      </motion.div>
      <ProductSlider />
      <motion.section
        initial={{opacity: 0, y: "200px"}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.7}}
        className="flex justify-center items-center flex-col-reverse md:flex-row md:justify-between z-40 gap-20 px-10 md:px-20 lg:px-40 w-full bg-white p-8"
      >
        <div className="w-full xl:w-[500px]">
          <img src="/story.jpg" className="w-full" alt="story" />
        </div>
        <div className="flex flex-col gap-6 w-full md:w-96">
          <h2 className="text-[#004440] text-4xl sm:text-3xl lg:text-4xl font-bold tracking-[0.2em]">
            Our Story
          </h2>
          <p className="sm:text-sm lg:text-md">
            Founded in April 2017 by two young man from Yogyakarta, Couvee comes
            from an idea that everyone can enjoy coffee. It’s all started at a
            small rented building on Jalan Kaliurang. By 2019, Couvee has 5
            branches, one of them located in Jakarta.
          </p>
          <button
            onClick={() => navigait("/aboutUs")}
            className="bg-[#004440] flex justify-between items-center gap-4 text-white text-xl p-2"
          >
            FULL STORY <BsArrowRight size={25} />
          </button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default HomePage;
/* <button className="underline">Baca Detail</button> */
