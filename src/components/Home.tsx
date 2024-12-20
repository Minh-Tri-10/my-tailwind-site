import React from "react";
import christmasBg from "../assets/img/AdobeStock_297512930.jpeg";

const Home = () => {
  return (
    <div
      className="bg-cover bg-center banner"
      style={{
        backgroundImage: `url(${christmasBg})`,
        height: "65vh",
        backgroundSize: "contain",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-end mr-24 items-center h-full">
        <div className="max-w-[450px] space-y-4 bg-white p-4 rounded-lg shadow">
          <h2 className="text-headingFirst font-bold text-3xl md:text-4xl">
            LAST CHANCE TO GET IT BY CHRISTMAS!
          </h2>
          <h3 className="text-black">
            Christmas special offer{" "}
            <span className="text-red-600 font-secondary font-medium">
              10% discount
            </span>
          </h3>
          <a
            href="#"
            className="inline-block bg-red-500 text-white rounded-md px-6 py-3 hover:bg-red-600 transition-all duration-200"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
