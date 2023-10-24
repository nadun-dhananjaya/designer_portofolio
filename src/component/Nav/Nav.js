import React from "react";
import Logo from "./../../assets/logo.svg";

const Nav = () => {
  return (
    <nav>
      <div className="container px-4 mx-auto">
        <div className="flex py-12 items-center justify-between">
          <img src={Logo} alt="logo" className="h-16 w-16 cursor-pointer" />
          <button className="bg-black hover:bg-galactic_blue active:bg-galactic_blue transition-all duration-200 ease-in-out h-14 text-light_cream px-10 rounded-full">
            Free Consultation
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
