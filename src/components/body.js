import React from "react";
import sidedots from "../components/dots.svg";
import drop from "../assets/drop-2.png";
import homePage from "../assets/Home.png";
import page2 from "../assets/page(2).png"

function Body() {
  return (
    <div className="">
      <div className="w-full flex relative overflow-hidden cursor-pointer">
        <img src={sidedots} className=" content-end h-60 w-52 -ml-1 mt-4" />
        <div className="absolute px-6 py-16 z-30">
          <h1 className=" text-4xl font-semibold w-5/12 tracking-tight text-black">
            MALO Reinigung GmbH
          </h1>
          <p className="leading-normal w-5/12 mt-4 text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem est
            placeat perspiciatis ratione nemo. Placeat, autem rerum. Animi,
            soluta excepturi, vero aliquid sequi fugiat facilis voluptas
            cupiditate nesciunt ad porro.
          </p>
        </div>
        <img
          style={{ marginLeft: 450 }}
          src={homePage}
          className="flex mt-2 w-1/2 mr-12"
        />
      </div>
      <div className="w-full flex overflow-hidden cursor-pointer md:pb-10">
        <div className="w-1/2">
          <img src={page2} className="flex ml-10 mt-2 " />
        </div>
        <div className="w-1/2 -mt-64">
          <img src={drop} className="" />
          <div className="w-full -mt-80 flex">
            <div className="absolute py-4">
              <h1 className="mb-3 text-3xl font-semibold tracking-tight w-52 text-blue-400">
                ERLEBEN SIE
              </h1>
              <h1 className="mb-3 text-3xl font-semibold tracking-tight w-52 text-blue-900">
                FRISCHE UND
              </h1>
              <h1 className="mb-3 text-3xl font-semibold tracking-tight w-52 text-blue-400">
                REINHEIT
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
