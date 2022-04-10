import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

const AllItem = () => {
  return (
    <div className="flex bg-slate-100 p-2 hover:bg-white">
      <div>
        <CheckIcon className="w-7 mr-4 text-green-700" />
      </div>
      <div>
        <h3 className="font-semibold text-indigo-600 text-lg">Notifications</h3>
        <p className="pt-4 pb-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          est omnis veritatis similique ut repellendus!
        </p>
      </div>
    </div>
  );
};

export default AllItem;
