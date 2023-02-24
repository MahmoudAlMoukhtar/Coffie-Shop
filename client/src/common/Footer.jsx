import React from "react";
import {Link} from "react-router-dom";
import {AiOutlineFacebook} from "react-icons/ai";
import {BsInstagram} from "react-icons/bs";
const Footer = () => {
  return (
    <div className="bg-[#004440] flex flex-col items-center w-full text-white gap-6 py-10">
      <h2 className="font-semibold text-white text-4xl">JOUD. Cafe</h2>

      <nav className="flex gap-4 items-center">
        <Link to={"/aboutUs"}>ABOUT</Link>
        <Link to={"/locations"}>LOCATION</Link>
        <Link to={"/menu"}>MENU</Link>
        <Link to={"/"}>PRIVACY POLICY</Link>
      </nav>
    </div>
  );
};

export default Footer;
/* 
<ul className="flex items-center gap-4">
        <BsInstagram size={30} className="cursor-pointer" />
        <AiOutlineFacebook size={35} className="cursor-pointer" />
      </ul>
*/
