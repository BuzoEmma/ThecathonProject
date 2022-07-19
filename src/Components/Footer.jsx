import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.svg";
import phone from "../assets/icon-phone.svg";
import email from "../assets/icon-email.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" bg-blue-900 w-full h-fit px-6 py-6 gap-6 text-gray-100">
        <img src={logo} alt="logo" className="w-24" />

        <div className="flex flex-col sm:flex-row justify-between py-6">
          <div className="">
            <div className="flex gap-2 pb-4">
              <img src={phone} alt="phone-icon" className="w-4 h-4" />
              <p className="italic">Phone: +2349065017716</p>
            </div>
            <div className="flex gap-2">
              <img src={email} alt="email-icon" className="w-4 h-4" />
              <a href="www.gmail.com" target={"_blank"}>
                buzoemma@6gmail.com
              </a>
            </div>
          </div>
          <div className="pb-4">
            <div>
              <Link
                to={"about"}
                className="hover:border-b border-gray-800 hover:text-gray-500"
              >
                About
              </Link>
            </div>
            {
              <div>
                <Link
                  to={"jobs"}
                  className="hover:border-b border-gray-800 hover:text-gray-500"
                >
                  Jobs
                </Link>
              </div>
            }
            {
              <div>
                <Link
                  to={"press"}
                  className="hover:border-b border-gray-800 hover:text-gray-500"
                >
                  Press
                </Link>
              </div>
            }
            {
              <div>
                <Link
                  to={"blog"}
                  className="hover:border-b border-gray-800 hover:text-gray-500"
                >
                  Blog
                </Link>
              </div>
            }
          </div>
          <div className="flex flex-col pb-4">
            <Link
              to={"contact"}
              className="hover:border-b border-gray-800 hover:text-gray-500"
            >
              Contact Us
            </Link>
            <Link
              to={"terms"}
              className="hover:border-b border-gray-800 hover:text-gray-500"
            >
              Terms
            </Link>
            <Link
              to={"privacy"}
              className="hover:border-b border-gray-800 hover:text-gray-500"
            >
              Privacy
            </Link>
          </div>
          <div className="flex gap-4 cursor-pointer ">
            <a href="https://web.facebook.com/?_rdc=1&_rdr" target={"_blank"}>
              <FaFacebook className="border p-1 rounded-full text-3xl hover:text-4xl hover:text-gray-500" />
            </a>
            <a href="https://twitter.com/i/flow/login" target={"_blank"}>
              <FaTwitter className="border p-1 rounded-full text-3xl hover:text-4xl hover:text-gray-500" />
            </a>
            <a href="https://github.com/" target={"_blank"}>
              <FaGithub className="border p-1 rounded-full text-3xl hover:text-4xl hover:text-gray-500" />
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center italic pt-10">
          <p>Copyright &copy; Buzo 2022</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
