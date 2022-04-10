import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import supportImg from "../assets/support.jpg";

const Support = () => {
  return (
    <div id="support" className="w-full mt-12 ">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          src={supportImg}
          alt="/"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      <div className="max-w-[1240px] mx-auto relative py-8 px-2">
        <div className="px-4 py-4 text-white">
          <h2 className="pt-4 text-slate-300 uppercase text-center">Support</h2>
          <h3 className="text-4xl md:text-6xl font-bold py-8 text-center">
            Finding the right team
          </h3>
          <p className="py-6 text-xl md:text-2xl text-slate-300">
            Curabitur vitae libero consectetur, ornare ante sed, fringilla orci.
            Integer vitae tincidunt leo. Sed sagittis turpis tellus, nec
            ultricies enim cursus ac. Morbi cursus placerat maximus. Donec quam
            risus, tincidunt at lacinia a, venenatis ac lectus. Ut dui elit,
            ornare vitae lorem sit amet, vulputate accumsan massa. Suspendisse
            at varius nibh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-8 px-4 pt-12 sm:pt-20">
          <div className="bg-white rounded-md shadow-2xl hover:bg-indigo-300 duration-500">
            <div className="p-6">
              <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-md mt-[-3rem]" />
              <h3 className="font-bold text-2xl my-4">Sales</h3>
              <p className="md:text-xl ">
                vel scelerisque orci elementum eget. Vivamus tortor est,
                ultricies dictum tristique in, convallis et urna. Nunc quis
                tristique quam, vel efficitur sapien.
              </p>
            </div>
            <div className="bg-slate-200 py-4 px-6">
              <p className="text-indigo-600 flex items-center">
                Contact Us <ArrowSmRightIcon className="w-5 ml-auto" />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-md shadow-2xl hover:bg-indigo-300 duration-500">
            <div className="p-6">
              <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-md mt-[-3rem]" />
              <h3 className="font-bold text-2xl my-4">Technical Support</h3>
              <p className="md:text-xl ">
                vel scelerisque orci elementum eget. Vivamus tortor est,
                ultricies dictum tristique in, convallis et urna. Nunc quis
                tristique quam, vel efficitur sapien.
              </p>
            </div>
            <div className="bg-slate-200 py-4 px-6">
              <p className="text-indigo-600 flex items-center">
                Contact Us <ArrowSmRightIcon className="w-5 ml-auto" />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-md shadow-2xl hover:bg-indigo-300 duration-500">
            <div className="p-6">
              <ChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-md mt-[-3rem]" />
              <h3 className="font-bold text-2xl my-4">Media Inquiries</h3>
              <p className="md:text-xl ">
                vel scelerisque orci elementum eget. Vivamus tortor est,
                ultricies dictum tristique in, convallis et urna. Nunc quis
                tristique quam, vel efficitur sapien.
              </p>
            </div>
            <div className="bg-slate-200 py-4 px-6">
              <p className="text-indigo-600 flex items-center">
                Contact Us <ArrowSmRightIcon className="w-5 ml-auto" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
