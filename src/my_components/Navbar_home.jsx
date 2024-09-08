import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [active, setActive] = useState(null);

  return (
    <div className="fixed top-4 inset-x-0 max-w-2xl mx-auto z-50 bg-primary shadow-md rounded-full border border-transparent dark:bg-black dark:border-white/[0.2]">
      <div className="flex justify-between items-center ">
      <img src="/logo/5.png" alt="Logo" className="h-20 w-20" />
        <div className="flex flex-1 justify-evenly items-center space-x-2">
          <Link to="/" className="text-sm font-semibold text-black hover:underline">Home</Link>
          <ScrollLink to="what-is-navix" smooth={true} duration={500} className="text-sm font-semibold text-black cursor-pointer hover:underline">
            What is NaviX
          </ScrollLink>
          <ScrollLink to="why-navix" smooth={true} duration={500} className="text-sm font-semibold text-black cursor-pointer hover:underline">
            Why NaviX
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}