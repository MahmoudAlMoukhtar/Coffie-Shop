import React from "react";
import {motion, useTransform, useViewportScroll} from "framer-motion";
//import WhyChoose from "../../WhyChose";

const ourTeam = [
  {
    img: "/images/person_1.jpg",
    name: "Lawson Arnold",
    title: "CEO, Founder, Atty.",
    descripWork:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    img: "/images/person_2.jpg",
    name: "Jeremy Walker",
    title: "CEO, Founder, Atty.",
    descripWork:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    img: "/images/person_3.jpg",
    name: "Patrik White",
    title: "CEO, Founder, Atty.",
    descripWork:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    img: "/images/person_1.jpg",
    name: "Test Al-test",
    title: "Front-end Developer.",
    descripWork:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
];

const OurTeam = () => {
  //const {data: ourTeam, loading, error} = useFetch("ourTeam");
  // if (error) throw error;
  // if (loading) return <Spinner />;

  const Employee = ({img, name, title, descripWork}) => {
    return (
      <div id="card-employ" className="flex flex-col gap-y-6 w-64">
        <img src={img} alt="" className="" width={300} height={300} />
        <a href="#home">
          <h2 className="text-3xl font-normal underline text-gray-800">
            {name}
          </h2>
        </a>
        <p className="text-gray-500">{title}</p>
        <p className="text-gray-500">{descripWork}</p>
        <a href="#home" className="underline font-medium text-gray-800">
          Learn More
        </a>
      </div>
    );
  };

  return (
    <section
      id="ourTeam"
      className="px-16 flex flex-col justify-center gap-20 w-full mt-40"
    >
      <h1 className="text-3xl font-semibold text-center">Our Team</h1>
      <div className="flex flex-wrap justify-center items-center gap-8 w-full">
        {ourTeam.map(employee => {
          return <Employee {...employee} key={employee.name} />;
        })}
      </div>
    </section>
  );
};

const AboutPage = () => {
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

  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.7}}
      className="flex flex-col gap-20 items-center pb-40 px-10 md:px-20 lg:px-40 xl:px-56 w-full"
    >
      <img
        src="/b26bcdcf-blog_coffee-shop-equipment-list_1200x62aboutus.jpg"
        className="w-full relative rounded"
      />
      <motion.div className="container flex justify-center items-center flex-wrap gap-10">
        <motion.div
          variants={container}
          whileInView="visible"
          initial="hidden"
          className="container flex flex-wrap md:flex-nowrap justify-center gap-20 items-center w-full"
        >
          <div className="flex flex-col gap-6">
            <h4 className="text-4xl tracking-[0.2em]">OUR BIGINNING</h4>
            <p>
              Couvee is a brand of food and beverages from Yogyakarta,
              Indonesia. It was founded by two young man, on April 2017. They
              started the business together in a modest rented building at Jalan
              Kaliurang Km 5.
            </p>
          </div>
          <img
            src="/story-the-beginning.jpg"
            className="md:w-[400px] lg:w-[500px] rounded"
          />
        </motion.div>
        <motion.div
          variants={container}
          whileInView="visible"
          initial="hidden"
          className="container flex flex-row-reverse flex-wrap md:flex-nowrap justify-center gap-20  items-center w-full"
        >
          <div className="flex flex-col gap-6">
            <h4 className="text-4xl tracking-[0.2em]">OUR BACKGROUNDS</h4>
            <p>
              Couvee comes from the idea that everyone can enjoy coffee. It
              doesn’t matter if you like your coffee light and sweet, or you
              prefer strong coffee with no sugar, you can always enjoy it with
              your personal preferences in here. It’s our pleasure to help you
              find the best crafted drink that suits your taste in the best way.
            </p>
          </div>
          <img
            src="/713DBC9E-B954-4CBE-A1F7-F8A6BB73B54C-1024x1024.jpeg"
            className="md:w-[300px] lg:w-[500px] rounded"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
