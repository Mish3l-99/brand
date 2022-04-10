import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import bgImg from "../assets/cyber-bg.png";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto gap-4">
        <div className="flex flex-col justify-center md:items-start w-full px-2 pt-16 pb-8">
          <p className="text-2xl ">Unique Sequencing & Production</p>
          <h1 className="py-3 text-4xl md:text-6xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">This is Our Tech Brand.</p>
          <button className="py-2 md:py-3 px-8 sm:w-[60%] my-4 text-xl">
            Get Started
          </button>
        </div>
        <div>
          <img src={bgImg} alt="/" className="w-full" />
        </div>
        <div className="absolute flex flex-col py-1 md:py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200/80 border-slate-300 rounded-xl text-center shadow-xl">
          <p className="my-2 font-semibold">Data Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 text-slate-500 bg-zinc-100 py-2 m-1">
              <CloudUploadIcon className="h-6 text-indigo-600 mr-2" /> App
              Security
            </p>
            <p className="flex px-4 text-slate-500 bg-zinc-100 py-2 m-1">
              <DatabaseIcon className="h-6 text-indigo-600 mr-2" /> Dashboard
              Design
            </p>
            <p className="flex px-4 text-slate-500 bg-zinc-100 py-2 m-1">
              <ServerIcon className="h-6 text-indigo-600 mr-2" /> Cloud Data
            </p>
            <p className="flex px-4 text-slate-500 bg-zinc-100 py-2 m-1">
              <PaperAirplaneIcon className="h-6 text-indigo-600 mr-2" /> API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
