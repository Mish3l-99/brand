import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full py-20 px-2">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold py-2">
            Trusted by developers all across the world
          </h2>
          <p className="text-[18px] md:text-xl py-6 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            vestibulum ipsum ac ex malesuada mollis. Nam metus velit,
            consectetur sit amet congue et, rhoncus eu ligula. Fusce sed rhoncus
            ex, sit amet lacinia sem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 px-2 text-center">
          <div className="border rounded-md py-4 shadow-xl">
            <p className="text-2xl md:text-6xl font-bold text-indigo-600 py-1">
              100%
            </p>
            <p>Complete</p>
          </div>
          <div className="border rounded-md py-4 shadow-xl">
            <p className="text-2xl md:text-6xl font-bold text-indigo-600 py-1">
              14/7
            </p>
            <p>Delivery</p>
          </div>
          <div className="border rounded-md py-4 shadow-xl">
            <p className="text-2xl md:text-6xl font-bold text-indigo-600 py-1">
              100K
            </p>
            <p>Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
