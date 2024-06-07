import Logo from "./../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="container px-4 mx-auto mt-5 ">
      <div className="container px-[1.5rem] md:px-[4rem] py-[5rem] rounded-[10px] bg-black">
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="w-full lg:w-1/2 text-light_cream ">
            <div className="flex flex-col text-center lg:text-start">
              <h2 className="text-[1.625rem] sm:text-[2rem] lg:text-[2.5rem] mb-[1.5rem] font-jakarta">
                Book a call with me
              </h2>
              <p className="text-[1rem] sm:text-[1.125rem] leading-7">
                I’d love to have a chat to see how I can help you. The best
                first step is for us to discuss your project during a free
                consultation. Then we can move forward from there.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full lg:justify-end lg:w-1/2 text-light_cream">
            <button className="bg-light_red text-[0.875rem] leading-[1.75rem] sm:text-[1rem] hover:bg-summer_yellow active:bg-light_red transition-all duration-300 ease-in-out  text-light_cream py-[0.5rem] px-[1.75rem] sm:py-[0.875rem] sm:px-[2.8rem] rounded-full">
              Free Consultation
            </button>
          </div>
        </div>
      </div>

      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-12">
          <img
            src={Logo}
            alt="logo"
            className="w-12 h-12 cursor-pointer sm:h-16 sm:w-16"
          />
          <button className="bg-black text-[0.875rem] leading-[1.75rem] sm:text-[1rem] hover:bg-galactic_blue active:bg-black transition-all duration-300 ease-in-out  text-light_cream py-[0.5rem] px-[1.75rem] sm:py-[0.875rem] sm:px-[2.8rem] rounded-full">
            Free Consultation
          </button>
        </div>
      </div>

      <div className="container pb-4 text-center">
        <p>
          Crafted By{" "}
          <a
            className="underline"
            href="https://nadundhananjaya.com/"
            target="_blank"
          >
            Nadun Dhananjaya
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
