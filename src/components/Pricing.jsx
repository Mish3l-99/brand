import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

const Pricing = () => {
  return (
    <div id="pricing" className="w-full text-white my-8">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-4 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-6">
            The right price for your research.
          </h3>
          <p className="text-lg md:text-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            tempore rem iure expedita, provident suscipit adipisci dignissimos
            rerum tempora voluptas.
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="bg-white text-slate-900 m-4 p-4 md:px-6 md:py-4 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-900 text-indigo-300 rounded-2xl">
              Standard
            </span>
            <div>
              <p className="text-6xl my-2 font-bold py-3 flex">
                $49
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-lg md:text-2xl py-6 text-slate-500 font-semibold">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="text-lg md:text-2xl">
              <p className="flex py-4 ">
                <CheckIcon className="w-7 md:w-8 mr-5 text-green-600" /> Lorem,
                ipsum dolor.
              </p>
              <p className="flex py-4 ">
                <CheckIcon className="w-7 md:w-8 mr-5 text-green-600" /> Lorem,
                ipsum dolor.
              </p>
              <p className="flex py-4 ">
                <CheckIcon className="w-7 md:w-8 mr-5 text-green-600" /> Lorem,
                ipsum dolor.
              </p>
              <p className="flex py-4 ">
                <CheckIcon className="w-7 md:w-8 mr-5 text-green-600" /> Lorem,
                ipsum dolor.
              </p>
              <p className="flex py-4 ">
                <CheckIcon className="w-7 md:w-8 mr-5 text-green-600" /> Lorem,
                ipsum dolor.
              </p>
              <button className="py-1 px-4 my-4 w-full">Get Started</button>
            </div>
          </div>
          <div className="bg-white text-slate-900 m-4 p-4 md:px-6 md:py-4 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-900 text-indigo-300 rounded-2xl">
              Premium
            </span>
            <div>
              <p className="text-6xl my-2 font-bold py-3 flex">
                $99
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-lg md:text-2xl py-6 text-slate-500 font-semibold">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="text-lg md:text-2xl">
              <p className="flex py-4 ">
                <CheckIcon className="w-7 md:w-8 mr-5 text-green-600" /> Lorem,
                ipsum dolor.
              </p>
              <p className="flex py-4 ">
                <CheckIcon className="w-7 md:w-8 mr-5 text-green-600" /> Lorem,
                ipsum dolor.
              </p>
              <p className="flex py-4 ">
                <CheckIcon className="w-7 md:w-8 mr-5 text-green-600" /> Lorem,
                ipsum dolor.
              </p>
              <p className="flex py-4 ">
                <CheckIcon className="w-7 md:w-8 mr-5 text-green-600" /> Lorem,
                ipsum dolor.
              </p>
              <p className="flex py-4 ">
                <CheckIcon className="w-7 md:w-8 mr-5 text-green-600" /> Lorem,
                ipsum dolor.
              </p>
              <button className="py-1 px-4 my-4 w-full">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
