import React from "react";
import banner2 from "../assets/img/ChristmasBanner.png";

const Banner = () => {
  return (
    <div className="container mt-32 w-full">
      <div className="flex items-center justify-center w-full">
        <div
          className="h-[200px] md:h-[260px] banner2 bg-cover bg-center w-full rounded-xl p-8 md:p-16 relative"
          style={{ backgroundImage: `url(${banner2})` }}
        >
          <div className="absolute right-[143px] top-[56%] translate-y-[-50%]">
            <a
              href="#"
              className="bg-white text-red-500 w-[210px] h-[50px] flex items-center justify-center font-semibold text-xl tracking-wider"
            >
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
