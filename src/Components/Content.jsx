import React from "react";
import illustration from "../assets/illustration-1.svg";
import illustration2 from "../assets/illustration-2.svg";
import arrow from "../assets/icon-arrow.svg";
import Card from "./Card";
import { Link } from "react-router-dom";
const Content = () => {
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row px-6 py-6 gap-6 pt-24 ">
        <div className="">
          <h2 className="font-bold text-3xl my-6 max-h-full">
            All you files in one secure location, accessible anywhere.
          </h2>
          <span className="">
            fylo stores your most important files in one secure locaction.
            Access them wherever you need, share and collaborate with friends,
            family, and co-workers.
          </span>

          <form action="" className="mt-4">
            <div className="w-90 gap-2 flex flex-col sm:flex-row">
              <div>
                <input
                  type="text"
                  placeholder="buzoemma6@gmail.com"
                  className=" border rounded-lg p-2 w-full"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-700 p-2 rounded-lg w-full capitalize"
                >
                  get started
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="md:w-2/2">
          <img src={illustration} alt="illustration" />
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row px-6 py-6 gap-6 mt-20 mb-24">
        <div>
          <h2 className="font-bold text-3xl my-6 max-h-full capitalize">
            Stay productive, wherever you are.
          </h2>
          <p >
            Never let locaction be an issue when accessing your file. Fylo has
            you covered for all your file storage needs.
          </p>
          <p className="  mb-4">
            Secure share files and folders with friends, family and colleagues
            for live collabration. No email attachments required!.
          </p>
          <div className="w-full ">
            <div className=" flex items-center sm:flex sm:justify-center sm:items-center w-40 border-b border-green-600">
              <div className="">
                <Link to={'about'}>See how fylo works</Link>
              </div>
              <div className="">
                <img src={arrow} alt="icon-arrow" />
              </div>
            </div>
            <Card />
          </div>
        </div>
        <div className="md:w-2/2">
          <img src={illustration2} alt="illustration2" />
        </div>
      </div>
    </>
  );
};

export default Content;
