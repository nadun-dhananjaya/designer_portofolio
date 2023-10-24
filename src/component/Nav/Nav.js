import React from "react";
import Logo from "./../../assets/logo.svg";

const Nav = () => {
  return (
    <nav>
      <div className="container px-4 mx-auto">
        <div className="flex py-12 items-center justify-between">
          <img
            src={Logo}
            alt="logo"
            className=" h-12 w-12 sm:h-16 sm:w-16 cursor-pointer"
          />
          <button className="bg-black text-[0.875rem] leading-[1.75rem] sm:text-[1rem] hover:bg-galactic_blue active:bg-black transition-all duration-300 ease-in-out  text-light_cream py-[0.5rem] px-[1.75rem] sm:py-[0.875rem] sm:px-[2.8rem] rounded-full">
            Free Consultation
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
