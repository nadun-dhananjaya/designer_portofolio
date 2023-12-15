import { React } from "react";
import { useSwiper } from "swiper/react";
import arrowLeft from ".//..//..//assets//icon-arrow-left.svg";

export default function SlidePrevButton({ state, onClick }) {
  const swiper = useSwiper();

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center w-16 h-16 bg-black rounded-full ${
        state ? "disabled:bg-gray-500 cursor-not-allowed" : ""
      }`}
      disabled={state}
    >
      <img src={arrowLeft} alt="arrow left" />
    </button>
  );
}
