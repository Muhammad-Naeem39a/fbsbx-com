import React from "react";
import sidedots from "../components/dots.svg";
import drop from "../assets/drop-2.png";
import homePage from "../assets/Home.png";
import page2 from "../assets/page(2).png"

function Body() {
  return (
    <div className="w-full">
      <div className="flex overflow-hidden cursor-pointer">
        <img src={sidedots} className="content-start md:h-2/12 2xs:h-full w-2/12" />
        <div className="absolute md:py-16 2xs:mt-8 md:mt-28 md:ml-16 z-30">
          <h1 className="xs:text-xl sm:text-3xl md:text-4xl font-semibold 2xs:ml-2 2xs:w-6/12 md:w-5/12 text-black">
            MALO Reinigung GmbH
          </h1>
          <p className="xs:text-xl sm:text-2xl 2xs:text-sm md:text-2xl 2xs:w-9/12 2xs:mt-1 md:mt-8 md:w-5/12 2xs:px-1.5 text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem est
            placeat perspiciatis ratione nemo. Placeat, autem rerum. Animi,
            soluta excepturi, vero aliquid sequi fugiat facilis voluptas
            cupiditate nesciunt ad porro.
          </p>
        </div>
        <img
          src={homePage}
          className="flex mt-2 2xs:w-2/3 md:w-1/2 ml-auto"
        />
      </div>
      <div className=" flex md:overflow-hidden 2xs:pt-2 cursor-pointer md:pbs-10">
        <div className="md:w-3/5 2xs:w-3/5">
          <img src={page2} className="flex md:w-full mt-2" />
        </div>
        <div className="md:w-2/5 2xs:w-2/5 md:-mt-24 md:mr-56">
          <img src={drop} className="md:ml-auto 2xs:-mt-4 2xs:h-full 2xs:w-full"/>
          <div className="md:-mt-96 md:-pt-96 2xs:-mt-24 md:ml-4 2xs:-ml-4 flex">
            <div className="xs:text-xl sm:text-2xl md:text-6xl">
              <h1 className="md:mb-3 md:text-3xl 2xs:text-lg font-semibold tracking-tight w-52 text-blue-400">
                ERLEBEN SIE
              </h1>
              <h1 className="md:mb-3 md:text-3xl 2xs:text-lg font-semibold tracking-tight w-52 text-blue-900">
                FRISCHE UND
              </h1>
              <h1 className="md:mb-3 md:text-3xl 2xs:text-lg font-semibold tracking-tight w-52 text-blue-400">
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
