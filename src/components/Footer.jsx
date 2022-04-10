import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="footer"
      className="w-full mt-8 bg-slate-900 text-gray-300 py-4 px-2"
    >
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 gap-4 border-b-2 border-gray-600 py-4">
        <div>
          <h6 className="font-bold uppercase pb-1 pt-2 my-2 border-b-2 border-red-800">
            Solutions
          </h6>
          <ul>
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Commerce</li>
            <li>Data</li>
            <li>Cloud</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pb-1 pt-2 my-2 border-b-2 border-red-800">
            Support
          </h6>
          <ul>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Guides</li>
            <li>API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pb-1 pt-2 my-2 border-b-2 border-red-800">
            Company
          </h6>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Partners</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pb-1 pt-2 my-2 border-b-2 border-red-800">
            Legal
          </h6>
          <ul>
            <li>Claims</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Policies</li>
            <li>Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 pt-4 px-2 md:px-4 md:pt-2">
          <p className="uppercase font-bold py-3">
            Subscribe to our Newsletter
          </p>
          <p className="py-3 text-white">
            The latest news, articels and resources. sent to your inbox weekly.
          </p>
          <form action="" className="flex flex-col sm:flex-row items-center">
            <input
              className="w-full py-1 px-2 rounded mb-3 text-black mr-2 border-none"
              type="email"
              placeholder="Enter Email .."
            />
            <button className="py-1 px-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>
      {/* SocialICons */}
      <div className="flex flex-col max-w-[1240px] px-2 py-2 mx-auto sm:flex-row sm:justify-between items-center">
        <div className="pt-4">
          <p>2022 Workflow, LLC. &#169; All rights reserved.</p>
        </div>
        <div className="flex justify-between w-[250px] sm:w-[300px] pt-4 text-2xl">
          <FaFacebook className="hover:text-indigo-700 hover:scale-105 duration-700" />
          <FaInstagram className="hover:text-indigo-700 hover:scale-105 duration-700" />
          <FaGithub className="hover:text-indigo-700 hover:scale-105 duration-700" />
          <FaTwitch className="hover:text-indigo-700 hover:scale-105 duration-700" />
          <FaTwitter className="hover:text-indigo-700 hover:scale-105 duration-700" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
