import {React} from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const products = [
  {
    id: "1",
    imageUrl: "/redvelvetlatte.jpg",
    titleProduct: "Red Velvet Latte",
  },
  {
    id: "2",
    imageUrl: "/blackcookielatte.jpg",
    titleProduct: "Black Cookie Latte",
  },
  {
    id: "3",
    imageUrl: "/caffemocha.jpg",
    titleProduct: "Caffe Mocha",
  },
  {
    id: "4",
    imageUrl: "/caramelmacchiato.jpg",
    titleProduct: "Caramel Macchiato",
  },
  {
    id: "5",
    imageUrl: "/classicchocolate.jpg",
    titleProduct: "Classic Chocolate",
  },
  {
    id: "6",
    imageUrl: "/cookiecrumblelatte.jpg",
    titleProduct: "Cookie Crumble Latte",
  },
  {
    id: "7",
    imageUrl: "/darkchocolate.jpg",
    titleProduct: "Dark Chocolate",
  },
  {
    id: "8",
    imageUrl: "/flavoredcaffelatte.jpg",
    titleProduct: "Flavored Caffe Latte",
  },
  {
    id: "9",
    imageUrl: "/honeylemonade.jpg",
    titleProduct: "Honey Lemonade",
  },
  {
    id: "10",
    imageUrl: "/java.jpg",
    titleProduct: "Java",
  },
  {
    id: "11",
    imageUrl: "/matchalatte.jpg",
    titleProduct: "Matcha Latte",
  },
];

const Menu = () => {
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
      className="flex flex-col gap-20 items-center pb-40"
    >
      <img
        src="/menuu.jpg"
        className="w-full relative rounded px-10 md:px-20 lg:px-40 xl:px-56"
        alt="menu"
      />
      <section className="flex flex-col items-center gap-10">
        <h2 className="tracking-[0.2em] text-[#004440] text-5xl font-semibold">
          PRODUCTS
        </h2>
        <div className="flex justify-center items-center flex-wrap gap-6 ">
          {products.map(p => (
            <div className="flex flex-col items-center gap-4">
              <Link to={`/menu/${p.id}`}>
                <img
                  alt="product"
                  src={p.imageUrl}
                  className="w-80 cursor-pointer rounded-md"
                />
              </Link>
              <p className="text-3xl">{p.titleProduct}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Menu;
