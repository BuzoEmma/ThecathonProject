import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaSun, FaMoon } from "react-icons/fa";
import { CgMenuCheese } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { useColorMode } from "@chakra-ui/react";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };
  return (
    <div className="flex justify-between items-center px-6 py-4 gap-4 w-full fixed shadow-xl">
      <img src={logo} alt="" className="w-24" />
      <div className=" gap-4">
        <div className={active ? "menu" : <FaMoon />}>
          <div className="flex gap-4">
            <ul className=" flex gap-4 italic text-xl">
              {/*  
              hidden md:flex
              wanted to created toggle nav-menu but it's giving me a tough time.
              please i would you like you to write it sir. 
              The icon is down the line 50. Thanks and God bless you for your time.
              
              */}
              <li>
                <Link to="/features" className="hover:border-b border-blue-600">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:border-b border-blue-600">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:border-b border-blue-600">
                  SignUp
                </Link>
              </li>
            </ul>
            {/* <button
              className=" icon-menu flex md:hidden "
              onClick={handleToggle}
            >
              {active ? <MdClose className="text-xl" /> : <CgMenuCheese className="text-2xl" />}
            </button> */}

            <div className="text-xl" onClick={toggleColorMode}>
              {colorMode === "dark" ? <FaSun /> : <FaMoon />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
