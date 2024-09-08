import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";

export default function Navbar() {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  const handleScrollLinkClick = (section) => {
    navigate("/");
    setTimeout(() => {
      scroller.scrollTo(section, {
        duration: 500,
        smooth: true,
      });
    }, 100);
  };

  return (
    <div className="fixed top-4 inset-x-0 max-w-2xl mx-auto z-50 shadow-md rounded-full border border-transparent dark:bg-black dark:border-white/[0.2]">
      <div className="flex justify-between items-center">
        <img src="logo/means/4-removebg-preview.png" alt="Logo" className="h-20 w-20" />
        <div className="flex flex-1 justify-evenly items-center space-x-2">
          <Link to="/" className="text-lg font-semibold text-black hover:underline">Home</Link>
          <div
            onClick={() => handleScrollLinkClick("what-is-navix")}
            className="text-lg font-semibold text-black cursor-pointer hover:underline"
          >
            What is NaviX
          </div>
          <div
            onClick={() => handleScrollLinkClick("why-navix")}
            className="text-lg font-semibold text-black cursor-pointer hover:underline"
          >
            Why NaviX
          </div>
        </div>
      </div>
    </div>
  );
}