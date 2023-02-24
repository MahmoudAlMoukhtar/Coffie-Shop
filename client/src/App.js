import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import CartPage from "./pages/Cart";
import DetailProduct from "./pages/DetailProduct/index";
import ContactPage from "./pages/Contact";

import DetailBlog from "./pages/DetailBlog/index";
import ShopPage from "./pages/Shop";
import HomePage from "./pages/Home";
import Footer from "./common/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NavbarModal from "./common/NavModal";
import Navbar from "./common/Navbar";
import Auth from "./pages/Auth/index";
import AboutPage from "./pages/About Us";
import Pay from "./components/Pay";
import PrivaitRoute from "./components/PrivaitRoute";
import {ProductsProdvider, useProducts} from "./context/ProductsContext";
import {CartProvider, useCart} from "./context/CartContext";
import Spinner from "./Spinner";
import Locations from "./pages/Locations/Locations";
import Menu from "./pages/Menu/Menu";
export default function App() {
  const [navBarModal, setNavBarModal] = useState(false);
  const {loading, error} = useCart();
  const {loading: loadingProducts, error: errorProducts} = useProducts();
  if (error || errorProducts) throw error;
  if (loading || loadingProducts) return <Spinner />;
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="flex flex-col justify-between items-center w-[100%] bg-[#f1c19d]">
        <Navbar setNavBarModal={setNavBarModal} navbarModal={navBarModal} />
        <NavbarModal
          setNavBarModal={setNavBarModal}
          navbarModal={navBarModal}
        />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                setNavBarModal={setNavBarModal}
                navbarModal={navBarModal}
              />
            }
          />

          <Route
            path="/blogs/:id"
            element={<DetailBlog setNavBarModal={setNavBarModal} />}
          />

          <Route
            path="/contact"
            element={<ContactPage setNavBarModal={setNavBarModal} />}
          />
          <Route path="/auth" element={<Auth />} />

          <Route
            path="/cart"
            element={
              <PrivaitRoute>
                <CartPage />
              </PrivaitRoute>
            }
          />
          <Route path="/checkout" element={<Pay />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/aboutUs" element={<AboutPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<DetailProduct />} />
        </Routes>
        <Footer />
      </div>
    </React.Fragment>
  );
}
/* 
<Route path="/about" element={<AboutPage />} />
<Route
            path="/:category"
            element={<ShopPage setNavBarModal={setNavBarModal} />}
          />
*/
