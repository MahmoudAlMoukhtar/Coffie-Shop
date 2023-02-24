import React from "react";
import {BsArrowRight} from "react-icons/bs";
import {AiFillClockCircle} from "react-icons/ai";
import {IoLocationSharp} from "react-icons/io5";
import {motion} from "framer-motion";
const Locations = () => {
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
      className="flex flex-col gap-10 items-center pb-40"
    >
      <img
        src="/house-coffee-shop.jpg"
        className="w-full relative rounded px-10 md:px-20 lg:px-40 xl:px-56"
      />
      <section className="flex flex-col items-center gap-10 w-full px-10">
        <h2 className="tracking-[0.2em] text-[#004440] text-5xl font-semibold">
          Loacations
        </h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="container flex justify-center items-center flex-wrap gap-4 w-full"
        >
          <motion.a
            target={"_blank"}
            href="https://www.google.com/maps/place/Couvee+-+Seturan/@-7.7717774,110.4073499,17z/data=!3m1!4b1!4m5!3m4!1s0x2e7a590e156f7c1f:0x2502cff3b7310971!8m2!3d-7.7717774!4d110.4095386"
            variants={item}
            className="item flex gap-6 justify-center p-4  border-8 border-[#004440] bg-white relative hover:translate-y-[-20px] transtion duration-[0.5s] w-full md:w-[500px]"
          >
            <img src="/couvee-seturan.jpg" className="w-40" alt="location" />
            <div className="flex flex-col gap-2">
              <h4>Jl Seturan, Yogyakarta</h4>
              <div className="flex gap-2">
                <div>
                  <IoLocationSharp size={20} />
                </div>
                <p>
                  Jl. Seturan Raya No.88, Kledokan, Caturtunggal, Kec. Depok,
                  Kabupaten Sleman, Yogyakarta
                </p>
              </div>
              <time className="flex gap-2">
                <AiFillClockCircle />
                Opens at 09.00 AM - 12.00 AM
              </time>
            </div>
            <button className="flex items-center gap-6 bg-[#004440] text-white p-2 absolute bottom-[-20px] right-8">
              Map
              <BsArrowRight />
            </button>
          </motion.a>
          <motion.a
            target={"_blank"}
            href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x2e7a59ac8cfe7685:0xda4257bfd1fb71da?source=g.page.share"
            variants={item}
            className="item flex gap-6 justify-center p-4  border-8 border-[#004440] bg-white relative hover:translate-y-[-20px] transtion duration-[0.5s] w-full md:w-[500px]"
          >
            <img
              src="/foto-jakal-1-e1605407061186.jpeg"
              className="w-40"
              alt="location"
            />
            <div className="flex flex-col gap-2">
              <h4>Jl Kaliurang, Yogyakarta</h4>
              <div className="flex gap-2">
                <div>
                  <IoLocationSharp size={20} />
                </div>
                <p>
                  Jalan Kaliurang Km 5.2, Manggung, Caturtunggal, Depok, Sleman,
                  DIY 552
                </p>
              </div>
              <time className="flex gap-2">
                <AiFillClockCircle />
                Opens at 08.00 AM - 12.00 AM
              </time>
            </div>
            <button className="flex items-center gap-6 bg-[#004440] text-white p-2 absolute bottom-[-20px] right-8">
              Map
              <BsArrowRight />
            </button>
          </motion.a>
          <motion.a
            target={"_blank"}
            href="https://www.google.com/maps/place/Couvee+Ahmad+Dahlan/@-7.8011084,110.3563877,17z/data=!3m1!4b1!4m5!3m4!1s0x2e7a573e13d94583:0x8fcc28ae24625944!8m2!3d-7.8011084!4d110.3585764"
            variants={item}
            className="item flex gap-6 justify-center p-4  border-8 border-[#004440] bg-white relative hover:translate-y-[-20px] transtion duration-[0.5s] w-full md:w-[500px]"
          >
            <img src="/couvee-notoprajan.jpg" className="w-40" alt="location" />
            <div className="flex flex-col gap-2">
              <h4>Jl Ahmad Dahlan, Yogyakarta</h4>
              <div className="flex gap-2">
                <div>
                  <IoLocationSharp size={20} />
                </div>
                <p>
                  Jl. KH. Ahmad Dahlan No.98, Notoprajan, Ngampilan, Yogyakarta
                </p>
              </div>
              <time className="flex gap-2">
                <AiFillClockCircle />
                Opens at 09.00 AM - 12.00 AM
              </time>
            </div>
            <button className="flex items-center gap-6 bg-[#004440] text-white p-2 absolute bottom-[-20px] right-8">
              Map
              <BsArrowRight />
            </button>
          </motion.a>
          <motion.a
            target={"_blank"}
            href="https://consent.google.co.id/m?continue=https://www.google.co.id/maps/place/Couvee%2B-%2BTanjung%2BDuren/@-6.1731943,106.7866597,18.58z/data%3D!4m12!1m6!3m5!1s0x0:0xd58f8676c6f9f4a7!2sCouvee%2B-%2BTanjung%2BDuren!8m2!3d-6.1734728!4d106.787028!3m4!1s0x0:0xd58f8676c6f9f4a7!8m2!3d-6.1734728!4d106.787028?hl%3Den-id&gl=GB&m=0&pc=m&uxe=eomtm&hl=en&src=1"
            variants={item}
            className="item flex gap-6 justify-center p-4  border-8 border-[#004440] bg-white relative hover:translate-y-[-20px] transtion duration-[0.5s] w-full md:w-[500px]"
          >
            <img
              src="/DCA4467D-2330-4D59-BAE6-566D5FACD3AB-768x738.jpeg"
              className="w-40 h-40"
              alt="location"
            />
            <div className="flex flex-col gap-2">
              <h4>Jl Tanjung Duren, Jakarta</h4>
              <div className="flex gap-2">
                <div>
                  <IoLocationSharp size={20} />
                </div>
                <p className="text-sm">
                  Ruko Sentra Bisnis, Jl. Tanjung Duren Raya No.7, RT.12/RW.2,
                  Tj. Duren Utara, Kec. Grogol petamburan, Kota Jakarta Barat,
                  Daerah Khusus Ibukota Jakarta 11470
                </p>
              </div>
              <time className="flex gap-2">
                <AiFillClockCircle />
                Opens at 09.00 AM - 10.00 PM
              </time>
            </div>
            <button className="flex items-center gap-6 bg-[#004440] text-white p-2 absolute bottom-[-20px] right-8">
              Map
              <BsArrowRight />
            </button>
          </motion.a>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Locations;
