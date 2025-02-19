import React, { useState } from "react";
import { GoBook, GoCommentDiscussion, GoHome, GoPackage } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 gap-12 flex w-full md:w-fit md:top-4 md:rounded-full bg-white/70 items-center justify-between md:border md:border-red-200 border-b border-b-amber-500 px-13 py-3 text-gray-700 backdrop-blur-md md:justify-evenly shadow-xl">
      <a
        href="#welcome"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
        className=" bg-gradient-to-r from-green-500 to-orange-400 bg-clip-text text-transparent opacity-80 text-2xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Vien's Portfolio
      </a>

      {/* Menu Desktop */}
      <ul className="hidden md:flex gap-8">
        <li className="group transition-all duration-300 ease-in-out hover:scale-110">
          <a
            href="#info"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Home
          </a>
        </li>

        <li className="group transition-all duration-300 ease-in-out hover:scale-110">
          <a
            href="#skill"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Skills
          </a>
        </li>

        <li className="group transition-all duration-300 ease-in-out hover:scale-110">
          <a
            href="#project"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Projects
          </a>
        </li>

        <li className="group transition-all duration-300 ease-in-out hover:scale-110">
          <a
            href="#contact"
            className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Button Menu Mobile */}
      <div className="md:hidden">
        {isOpen ? (
          <IoCloseOutline className="text-4xl text-[#45625E] cursor-pointer" onClick={menuOpen} />
        ) : (
          <IoIosMenu className="text-4xl text-[#45625E] cursor-pointer" onClick={menuOpen} />
        )}
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="fixed right-5 top-[75px] w-fit rounded-full bg-white border border-amber-600 px-8 py-4 shadow-lg">
          <ul className="flex gap-8 justify-center">
            <li>
              <a
                href="#info"
                className="group relative cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                <GoHome className="text-2xl opacity-70 transition-all duration-300 group-hover:opacity-100 hover:scale-110" />
                <span className="hidden group-hover:block absolute top-10 px-2 py-1 text-sm bg-teal-900 text-white rounded opacity-0 group-hover:opacity-100 transition-all">
                  Home
                </span>
              </a>
            </li>

            <li>
              <a
                href="#skill"
                className="group relative cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                <GoBook className="text-2xl opacity-70 transition-all duration-300 group-hover:opacity-100 hover:scale-110" />
                <span className="hidden group-hover:block absolute top-10 px-2 py-1 text-sm bg-teal-900 text-white rounded opacity-0 group-hover:opacity-100 transition-all">
                  Skills
                </span>
              </a>
            </li>

            <li>
              <a
                href="#project"
                className="group relative cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                <GoPackage className="text-2xl opacity-70 transition-all duration-300 group-hover:opacity-100 hover:scale-110" />
                <span className="hidden group-hover:block absolute top-10 px-2 py-1 text-sm bg-teal-900 text-white rounded opacity-0 group-hover:opacity-100 transition-all">
                  Projects
                </span>
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="group relative cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
              >
                <GoCommentDiscussion className="text-2xl opacity-70 transition-all duration-300 group-hover:opacity-100 hover:scale-110" />
                <span className="hidden group-hover:block absolute top-10 px-2 py-1 text-sm bg-teal-900 text-white rounded opacity-0 group-hover:opacity-100 transition-all ">
                  Contact
                </span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
