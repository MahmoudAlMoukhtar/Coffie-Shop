import React from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {HiMenuAlt1} from "react-icons/hi";
import {useCart} from "../context/CartContext";

const styles = {
  linkPages:
    "sm:text-sm md:text-lg text-[#004440] py-[4px] px-4 hover:bg-[#004440] hover:text-white rounded-lg transtion duration-200",
};

const activeStyle = {
  color: "white",
  backgroundColor: "#004440",
  padding: "4px 12px",
  borderRadius: "8px",
  color: "white",
  fontWeight: "bold",
};

const Navbar = ({setNavBarModal, navbarModal}) => {
  const user = JSON.parse(localStorage.getItem("userEcommerce"));
  const {cartProducts, loading, error} = useCart();

  const navigait = useNavigate();
  return (
    <nav className="flex justify-between items-center py-2 w-[100%] px-10 md:px-20 lg:px-40 fixed z-50 bg-[#f1c19d] shadow-xl">
      <Link to="/" className="flex flex-col text-[#004440]">
        <h2 className="font-semibold text-5xl">JOUD.</h2>
        <span className="translate-x-[40px] translate-y-[-5px]">Cafe</span>
      </Link>
      <div className="flex justify-center gap-4 items-center">
        <ul className="invisible absolute md:flex md:items-center gap-2 md:gap-4 md:visible md:static">
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/"
            end
            className={styles.linkPages}
          >
            <a href="#home">Home</a>
          </NavLink>
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/menu"
            end
            className={styles.linkPages}
          >
            Menu
          </NavLink>
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/locations"
            className={styles.linkPages}
          >
            Loacations
          </NavLink>
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/aboutUs"
            className={styles.linkPages}
          >
            About
          </NavLink>
        </ul>
        <HiMenuAlt1
          color="black"
          size={30}
          onClick={() => setNavBarModal(!navbarModal)}
          className="cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
