import React from "react";
import quotes from "../assets/icon-quotes.svg";
import avatar from "../assets/avatar-testimonial.jpg";
const Card = () => {
  return (
    <>
      <div className="flex flex-row max-w-sm items-center sm:flex sm:justify-center mt-8 shadow-2xl rounded-lg border p-4">
        <div className=" w-full h-full p-4 ">
          <div className="">
            <img src={quotes} alt="" />
          </div>
          <p className="text-sm  my-4">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collabration machine
          </p>
          <div className="flex gap-4">
            <img src={avatar} alt="" className="w-12 rounded-full" />
            <div>
              <h2 className="font-bold capitalize">Kyle Burton</h2>
              <span className="text-sm">
                Founder & CEO, Middle
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
