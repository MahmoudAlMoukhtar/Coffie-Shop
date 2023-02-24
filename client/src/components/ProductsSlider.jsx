// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import {Link} from "react-router-dom";
import {Autoplay} from "swiper";

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

const ProductSlider = () => {
  return (
    <div className="flex flex-col w-full items-center gap-4">
      <h2 className="tracking-[0.2em] text-[#004440] text-5xl font-semibold">
        PRODUCTS
      </h2>
      <div className="w-full flex justify-center py-20 px-4 md:px:20 xl:px-40 bg-white">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          onSwiper={swiper => console.log(swiper)}
          autoplay={{delay: 1000}}
        >
          {products.map(p => (
            <SwiperSlide>
              <div className="flex flex-col items-center gap-4">
                <Link to={`/menu/${p.id}`}>
                  <img
                    alt="product"
                    src={p.imageUrl}
                    className="w-80 cursor-pointer rounded-md"
                  />
                </Link>
                <p className="text-md md:text-xl lg:text-3xl">
                  {p.titleProduct}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSlider;
