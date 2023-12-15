import { React } from "react";
import { useSwiper } from "swiper/react";
import arrowRight from ".//..//..//assets//icon-arrow-right.svg";

export default function SlideNextButton({ state, onClick }) {
  const swiper = useSwiper();

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center w-16 h-16 bg-black rounded-full ${
        state ? "disabled:bg-gray-500 cursor-not-allowed" : ""
      }`}
      disabled={state}
    >
      <img src={arrowRight} alt="arrow right" />
    </button>
  );
}
