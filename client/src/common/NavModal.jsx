import React from "react";
import {NavLink} from "react-router-dom";

const activeStyle = {
  color: "white",
  backgroundColor: "#004440",
  padding: "8px",
  borderRadius: "4px",
  fontWeight: "bold",
};

const styles = {
  linkPages:
    "text-[#004440] hover:text-white p-[8px] hover:bg-[#004440] hover:font-semibold hover:rounded-[4px]",
  navBarModalHidden: "hidden",
  navBarModal:
    "fixed inset-0 bg-opacity-75 transition-opacity flex flex-col justify-center items-center z-50",
};

const NavbarModal = ({setNavBarModal, navbarModal}) => {
  return (
    <div
      id="modal-nav"
      className={navbarModal ? styles.navBarModal : styles.navBarModalHidden}
    >
      <div
        onClick={() => setNavBarModal(false)}
        className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity flex flex-col justify-center items-center"
      ></div>
      <div
        id="content-modal-Collaps"
        className="bg-white flex flex-col gap-y-4 fixed z-10 top-0 left-0 border w-60 min-h-full shadow-2xl animate__animated animate__fadeInLeft"
      >
        <div id="header-cart" className="my-2 w-100">
          <button
            onClick={() => setNavBarModal(false)}
            className="font-bold ml-4"
          >
            X
          </button>
        </div>
        <ul className="flex flex-col items-center gap-12">
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
      </div>
    </div>
  );
};

export default NavbarModal;

/* 

*/
