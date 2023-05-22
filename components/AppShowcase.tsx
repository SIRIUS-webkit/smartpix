import React from "react";
import { DiApple } from "react-icons/di";
import { FaGooglePlay } from "react-icons/fa";

function AppShowcase() {
  return (
    <div className="py-[6em] bg-trinary my-[6em]">
      <h3 className="text-center font-bold ">
        Creativity strikes in unexpected moments
      </h3>
      <p className="p2-regular-16 text-center my-[1em]">
        Stay connected to SmartPix across all your devices - Web, iOS, and
        Android - for a unified experience.
      </p>
      <div className="flex space-x-9 mt-[4em] justify-center items-center">
        <button
          type="button"
          className="flex space-x-3 items-center bg-black py-2 px-6 rounded-md"
        >
          <DiApple className="text-white text-[35px]" />
          <div>
            <p className="text-white text-[10px]">Download on the</p>
            <p className="text-white p3-bold-14">Apple Store</p>
          </div>
        </button>
        <button
          type="button"
          className="flex space-x-3 items-center bg-black py-2 px-6 rounded-md"
        >
          <FaGooglePlay className="text-white text-[25px]" />
          <div>
            <p className="text-white text-[10px]">Download on the</p>
            <p className="text-white p3-bold-14">Google Play</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default AppShowcase;
