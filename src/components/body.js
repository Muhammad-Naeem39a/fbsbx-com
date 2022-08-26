import React from "react";
import sidedots from "../components/dots.svg";
import drop from "../assets/drop-2.png";
import homePage from "../assets/Home.png";
import page2 from "../assets/page(2).png"

function Body() {
  return (
    <div className="w-full">
      <div className="flex overflow-hidden cursor-pointer">
        <img src={sidedots} className="content-start h-2/12 w-2/12" />
        <div className="absolute md:py-16 md:mt-28 ml-16 z-30">
          <h1 className="xs:text-xl sm:text-2xl md:text-4xl font-semibold w-5/12 text-black">
            MALO Reinigung GmbH
          </h1>
          <p className="xs:text-xl sm:text-2xl md:text-2xl mt-8 w-5/12 text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem est
            placeat perspiciatis ratione nemo. Placeat, autem rerum. Animi,
            soluta excepturi, vero aliquid sequi fugiat facilis voluptas
            cupiditate nesciunt ad porro.
          </p>
        </div>
        <img
          src={homePage}
          className="flex mt-2 w-1/2 ml-auto"
        />
      </div>
      <div className=" flex overflow-hidden cursor-pointer md:pbs-10">
        <div className="w-1/2">
          <img src={page2} className="flex mt-2" />
        </div>
        <div className="w-1/2 -mt-32 mr-56">
          <img src={drop} className="ml-auto"/>
          <div className="-mt-96 -pt-96 flex">
            <div className="xs:text-xl sm:text-2xl md:text-6xl">
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
