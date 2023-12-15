import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Slider.css";

import SliderImageOne from ".//..//..//assets//image-slide-1.jpg";
import SliderImageTwo from ".//..//..//assets//image-slide-2.jpg";
import SliderImageThree from ".//..//..//assets//image-slide-3.jpg";
import SliderImageFour from ".//..//..//assets//image-slide-4.jpg";
import SlideNextButton from "./SlideNextButton";
import SlidePrevButton from "./SlidePrevButton";
import { useState } from "react";

const Slider = () => {
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [firstSwiper, setFirstSwiper] = useState(null);

  const goNext = () => {
    if (firstSwiper) {
      firstSwiper.slideNext();
    }
  };

  const goPrev = () => {
    if (firstSwiper) {
      firstSwiper.slidePrev();
    }
  };

  const setIsEndHandler = (state) => {
    setIsEnd(state);
    setIsBeginning(false);
  };

  const setIsBeginningHandler = (state) => {
    setIsBeginning(state);
    setIsEnd(false);
  };

  console.log(isBeginning, isEnd);
  const breakpoints = {
    576: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };
  return (
    <>
      <div className=" relative sm:pt-[7.5rem] ">
        <Swiper
          modules={[Controller]}
          onSwiper={setFirstSwiper}
          breakpoints={breakpoints}
          controller={{ control: firstSwiper }}
          onSlideChange={(swiper) =>
            swiper.isEnd
              ? setIsEndHandler(swiper.isEnd)
              : setIsBeginningHandler(swiper.isBeginning)
          }
        >
          <SwiperSlide>
            <img
              src={SliderImageOne}
              className="object-cover w-full"
              alt="slider image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={SliderImageTwo}
              className="object-cover w-full"
              alt="slider image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={SliderImageThree}
              className="object-cover w-full"
              alt="slider image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={SliderImageFour}
              className="object-cover w-full"
              alt="slider image"
            />
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-center">
          <div className="flex gap-4 mt-8 sm:mt-14 ">
            <SlidePrevButton state={isBeginning} onClick={goPrev} />
            <SlideNextButton state={isEnd} onClick={goNext} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
