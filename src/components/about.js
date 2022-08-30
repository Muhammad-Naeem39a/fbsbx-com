import React from "react";
import drop from "../assets/drop-1.png";
import about from "../assets/about.png";

function About() {
  return (
    <div className="" id="about">
      <div className="cursor-pointer w-full flex">
        <div className="md:w-1/2 2xs:w-2/5 md:mt-96 md:pt-96 md:absolute md:top-full md:-left-24">
          <img src={drop}  className="2xs:mt-4 2xs:h-full" />
          <div className="absolute md:visible 2xs:invisible bottom-1/4">
            <p className="mb-3 text-3xl md:px-32 font-semibold">
              Qualitative Dientleistungen fur Qualitative Kunden
            </p>
          </div>
          <div className="2xs:visible md:invisible">
            <p className=" text-md 2xs:-mt-32 md:px-32 font-semibold">
              Qualitative Dientleistungen fur Qualitative Kunden
            </p>
          </div>
        </div>
        <div className="md:w-1/2 2xs:w-3/5 flex ml-auto">
          <img src={about} className="flex mt-2" />
        </div>
      </div>
      <div className="md:px-72 2xs:mx-8 mt-8">
        <div className="xs:text-xl sm:text-2xl md:text-4xl font-bold">About us</div>
        <div className="xs:text-lg sm:text-xl md:text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio eius
          dolore consectetur molestias qui illum, dignissimos laborum officiis,
          iste ad id sint tempora
        </div>
        <div className="xs:text-lg sm:text-xl md:text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio eius
          dolore consectetur molestias qui illum, dignissimos laborum officiis,
          iste ad id sint tempora asperiores eum ex quis minima repudiandae
          adipisci.
        </div>
      </div>
    </div>
  );
}

export default About;
