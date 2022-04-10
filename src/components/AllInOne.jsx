import React from "react";
import AllItem from "./AllItem";

const AllInOne = () => {
  return (
    <div id="platforms" className="mt-12 py-12 w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-8">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            All-In-One Platform
          </h2>
          <p className="text-xl md:text-2xl py-4 text-gray-500 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            corporis voluptatem quas blanditiis suscipit? Iure dolorum dicta
            aliquid nihil totam.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <AllItem />
          <AllItem />
          <AllItem />
          <AllItem />
          <AllItem />
          <AllItem />
          <AllItem />
          <AllItem />
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
