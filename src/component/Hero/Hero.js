import React from "react";
import GraphicDesignPattern from "../../assets/pattern-graphic-design.svg";
import UiUxPattern from "../../assets/pattern-ui-ux.svg";
import AppPattern from "../../assets/pattern-apps.svg";
import PhotographyPattern from "../../assets/pattern-photography.svg";
import IllustrationPattern from "../../assets/pattern-illustrations.svg";
import MotionGraphicPattern from "../../assets/pattern-motion-graphics.svg";

const Hero = () => {
  return (
    <section id="hero-section">
      <div className="container px-4 mx-auto mt-5">
        <h1 className="text-center font-bold text-[3.5rem] mb-6">
          Design solutions made easy
        </h1>
        <div className="max-w-[45.6rem] mx-auto">
          <p className="text-center text-medium_brown ">
            With over ten years of experience in various design disciplines, I’m
            your one-stop shop for your design needs.
          </p>
        </div>
        <div className="grid mt-20 grid-col-2 grid-rows-6 sm:grid-col-4 sm:grid-rows-3 lg:grid-rows-2 lg:grid-cols-6  gap-6">
          <div className="bg-galactic_blue col-start-1 col-span-2 row-start-1 row-span-2 sm:col-start-1 sm:row-start-1 sm:row-span-2 sm:col-span-2 rounded-lg relative aspect-square">
            <img
              src={GraphicDesignPattern}
              className="absolute top-4 right-4"
            />
            <label className="text-white font-2xl font-bold absolute bottom-4 left-4 ">
              Graphic Design
            </label>
          </div>
          <div className="bg-summer_yellow row-start-3 row-span-1 col-start-1 col-span-1 sm:col-start-3 sm:col-span-1 sm:row-start-1 sm:row-span-1 rounded-lg relative aspect-square">
            <img src={UiUxPattern} className="absolute top-4 right-4" />
            <label className="text-white font-2xl font-bold absolute bottom-4 left-4">
              UI/UX
            </label>
          </div>
          <div className="bg-light_pink row-start-3 row-span-1 col-start-2 col-span-1 sm:col-start-4 sm:col-span-1 sm:row-start-1 sm:row-span-1 rounded-lg relative aspect-square">
            <img src={AppPattern} className="absolute top-4 right-4" />
            <label className="text-white font-2xl font-bold absolute bottom-4 left-4">
              Apps
            </label>
          </div>
          <div className="bg-cyan col-start-1 col-span-2 row-start-5 row-span-1 sm:col-start-1 sm:col-span-2 sm:row-start-3 sm:row-span-1 lg:col-start-5 lg:col-span-2 lg:row-start-1 lg:row-span-1 rounded-lg relative ">
            <img src={PhotographyPattern} className="absolute top-4 right-4" />
            <label className="text-white font-2xl font-bold absolute bottom-4 left-4">
              Photography
            </label>
          </div>
          <div className="bg-light_red row-start-4 row-span-1 col-start-1 col-span-2 sm:col-start-3 sm:col-span-2 sm:row-start-2 sm:row-span-1 rounded-lg relative ">
            <img src={IllustrationPattern} className="absolute top-4 right-4" />
            <label className="text-white font-2xl font-bold absolute bottom-4 left-4">
              Illustrations
            </label>
          </div>
          <div className="bg-indigo rows-start-6 row-span-1 col-start-1 col-span-2 sm:col-start-3 sm:col-span-2 sm:row-start-3 sm:row-span-1 lg:col-start-5 lg:col-span-2 lg:row-start-2 lg:row-span-1 rounded-lg relative">
            <img
              src={MotionGraphicPattern}
              className="absolute top-4 right-4"
            />
            <label className="text-white font-2xl font-bold absolute bottom-4 left-4">
              Motion Graphics
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
