import React from "react";
import drop from "../assets/drop-1.png";
import about from "../assets/about.png";

function About() {
  return (
    <div className="" id="about">
      <div className="cursor-pointer w-full flex">
        <div className="w-3/4 -mt-32">
          <img src={drop}  className="" />
          <div className="-mt-96">
            <p className="mb-3 text-3xl px-32 font-semibold">
              Qualitative Dientleistungen fur Qualitative Kunden
            </p>
          </div>
        </div>
        <div className="w-1/2 flex mr-8">
          <img src={about} className="flex mt-2" />
        </div>
      </div>
      <div className="px-72 mt-8">
        <div className="text-2xl font-bold">About us</div>
        <div className="text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio eius
          dolore consectetur molestias qui illum, dignissimos laborum officiis,
          iste ad id sint tempora
        </div>
        <div className="text-xl">
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
