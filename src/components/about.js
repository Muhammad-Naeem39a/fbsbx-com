import React from "react";
import drop from "../assets/drop-1.png";
import about from "../assets/about.png";

function About() {
  return (
    <div className="" id="about">
      <div className="cursor-pointer w-full flex">
        <div className="w-1/2 mt-96 pt-96 absolute top-full -left-24" style={{marginTop:600}}>
          <img src={drop}  className="" />
          <div className="absolute bottom-1/4">
            <p className="mb-3 text-3xl px-32 font-semibold">
              Qualitative Dientleistungen fur Qualitative Kunden
            </p>
          </div>
        </div>
        <div className="w-1/2 flex ml-auto">
          <img src={about} className="flex mt-2" />
        </div>
      </div>
      <div className="px-72 mt-8">
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
