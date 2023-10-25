import React from "react";
import AmyPicture from "../../assets/image-amy.webp";

const About = () => {
  return (
    <div className="container  mx-auto px-4 my-[6.25rem] sm:my-[7.5rem] lg:my-[8.5rem]">
      <div className="flex  flex-col sm:flex-row items-center gap-10 sm:gap-6 ">
        <div className="w-full sm:w-1/2  sm:relative ">
          <img
            src={AmyPicture}
            alt="photo of amy"
            className="max-w-full xs:max-w-[18.75rem] mx-auto  sm:max-w-full lg:max-w-[28rem]  object-right object-cover sm:right-[3.5rem]	sm:top-1/2 lg:left-0 sm:absolute sm:-translate-y-1/2"
          />
        </div>
        <div className="w-full sm:w-1/2 text-center sm:text-start ">
          <h2 className="text-black text-[1.625rem]  sm:text-[2rem] lg:text-[2.5rem] leading-normal font-bold mb-[2.1rem]">
            I’m Amy, and I’d love to work on your next project
          </h2>
          <p className="text-medium_brown  text-[1.125rem] font-medium leading-[26px] sm:leading-[28px]  mb-[2.1rem]">
            I love working with others to create beautiful design solutions.
            I’ve designed everything from brand illustrations to complete mobile
            apps. I’m also handy with a camera!
          </p>
          <button className="px-[2.8rem] cursor-pointer transition-all duration-150 ease-out hover:bg-light_red active:bg-summer_yellow py-[0.875rem] bg-summer_yellow rounded-full text-white">
            Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
