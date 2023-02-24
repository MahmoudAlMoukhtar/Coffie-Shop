import React, {useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import Spinner from "../../Spinner";
import PageNotFound from "../../PageNotFound";
import useDetailFetch from "../../services/useDetailFetch";
import * as api from "../../api/index";

const styles = {
  mainSectionDetailPageStyle:
    "flex justify-between items-center px-6 mt-20 gap-4 flex-col md:flex-row w-[100%]",
  porfolioProductStyle: "flex flex-col items-center",
  containerMainImgStyle: "transition duration-200 rounded-lg",
  mainImgStyle:
    "w-96 h-96 rounded-lg border-2 border-orange transition duration-400 animate__animated animate__jello",
  detailProductStyle:
    "w-[100%] detail-product-style flex flex-1 flex-col lg:px-12 gap-y-10 sm-text-center animate__animated animate__bounceInRight",
  addProduct:
    "w-[100%] p-2 rounded btn bg-green-900 text-white hover:bg-green-700 hover:text-white cursor-pointer",
  addProductDisabled:
    "w-[100%] p-2 rounded btn bg-gray-200 text-gray-700 hover:bg-red-300 hover:text-white cursor-not-allowed",
};

const products = [
  {
    id: "1",
    imageUrl: "/redvelvetlatte.jpg",
    titleProduct: "Red Velvet Latte",
    description: "Our favorite red velvet drink with cream cheese notes.",
  },
  {
    id: "2",
    imageUrl: "/blackcookielatte.jpg",
    titleProduct: "Black Cookie Latte",
    description: "Our signature caffe latte sweetened with premium palm sugar.",
  },
  {
    id: "3",
    imageUrl: "/caffemocha.jpg",
    titleProduct: "Caffe Mocha",
    description: "A classic drink with chocolate cookies and vanilla cream.",
  },
  {
    id: "4",
    imageUrl: "/caramelmacchiato.jpg",
    titleProduct: "Caramel Macchiato",
    description:
      "Caramel latte with less coffee and delightful caramel sauce on top.",
  },
  {
    id: "5",
    imageUrl: "/classicchocolate.jpg",
    titleProduct: "Classic Chocolate",
    description: "Creamy and leafy, the best twist of Japanese classic drink.",
  },
  {
    id: "6",
    imageUrl: "/cookiecrumblelatte.jpg",
    titleProduct: "Cookie Crumble Latte",
    description:
      "Bold and intense dark chocolate with a bit touch of sweetness.",
  },
  {
    id: "7",
    imageUrl: "/darkchocolate.jpg",
    titleProduct: "Dark Chocolate",
    description: `We serve caffe latte with 6 variant of flavored syrup:

1. Caramel Latte

2. Creme Brulee Latte

3. Hazelnut Latte

4. Salted Caramel Latte

5. Vanilla Latte

6. Vanilla Rum Latte`,
  },
  {
    id: "8",
    imageUrl: "/flavoredcaffelatte.jpg",
    titleProduct: "Flavored Caffe Latte",
    description: `Our signature caffe latte with intense coffee and sweet chocolate paste.`,
  },
  {
    id: "9",
    imageUrl: "/honeylemonade.jpg",
    titleProduct: "Honey Lemonade",
    description: `The best seller of non-coffee drink, made with Regal cookies and our secret milk mixture.`,
  },
  {
    id: "10",
    imageUrl: "/java.jpg",
    titleProduct: "Java",
    description: `Combination of purple sweet potato and creamy milk.`,
  },
  {
    id: "11",
    imageUrl: "/matchalatte.jpg",
    titleProduct: "Matcha Latte",
    description: `Home-made chocolate drink sweetened by organic palm sugar.`,
  },
];

const DetailProduct = ({addToCart, updateQuantity}) => {
  //react router
  const {id} = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === id);

  //state managment
  //const {data: product, loading, error} = useDetailFetch("product", id);
  //const [counter, setCounter] = useState(0);
  //const [errorMessage, setErrorMessage] = useState();

  //handle component
  //if (loading) return <Spinner />;
  //if (!product) return <PageNotFound />;
  //if (error) throw error;

  //return jsx UI product
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.7}}
      className="flex  justify-center gap-20 items-start my-28 w-full px-40"
    >
      <div className="">
        <img
          src={product.imageUrl}
          alt="product"
          className="w-[500px] rounded"
        />
      </div>
      <div className="flex flex-col gap-10 w-80">
        <h5 className="text-5xl text-[#004440] font-semibold">
          {product.titleProduct}
        </h5>
        <h5 className="text-xl">{product.description}</h5>
        <h5 className="text-2xl font-bold">Price: ${10}</h5>
      </div>
    </motion.div>
  );
};
export default DetailProduct;
