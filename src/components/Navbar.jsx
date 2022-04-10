import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Brand from "../assets/brand.png";

const Navbar = () => {
  const [MobNav, setMobNav] = useState(false);
  const handleNav = () => setMobNav(!MobNav);
  return (
    <div className="w-screen h-[60px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full px-2">
        <div className="flex items-center ">
          <img
            src={Brand}
            alt="/"
            className="h-[60px] md:h-[75px] md:mr-16 py-1"
          />
          <ul className="hidden md:flex">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
            <li>
              <a href="#platforms">Platforms</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex px-2">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="py-1 px-3">Sign Up</button>
        </div>

        {/* Hamburger */}
        <div className="md:hidden mr-2" onClick={handleNav}>
          {MobNav ? <XIcon className="w-5" /> : <MenuIcon className="w-5" />}
        </div>
      </div>
      {/* MobNav */}
      <div
        className={
          MobNav
            ? "absolute bg-zinc-200 w-full px-4 sm:hidden duration-1000"
            : "absolute bg-zinc-200 w-full px-4 sm:hidden ml-[-100%] duration-1000"
        }
      >
        <ul>
          <li onClick={handleNav} className="border-b-2 border-zinc-300 w-full">
            <a href="#home">Home</a>
          </li>
          <li onClick={handleNav} className="border-b-2 border-zinc-300 w-full">
            <a href="#about">About</a>
          </li>
          <li onClick={handleNav} className="border-b-2 border-zinc-300 w-full">
            <a href="#support">Support</a>
          </li>
          <li onClick={handleNav} className="border-b-2 border-zinc-300 w-full">
            <a href="#platforms">Platforms</a>
          </li>
          <li onClick={handleNav} className="border-b-2 border-zinc-300 w-full">
            <a href="#pricing">Pricing</a>
          </li>

          <div className="flex flex-col">
            <button className="bg-transparent text-indigo-600 px-8 py-2 mb-4 mr-4 hover:bg-white">
              Sign In
            </button>
            <button className="py-2 px-8 hover:bg-indigo-800 hover:text-white">
              Sign Up
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
