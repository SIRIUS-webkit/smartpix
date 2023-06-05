"use client";

import React, { useState } from "react";
import { Switch } from "@mantine/core";
import { AiFillCheckCircle } from "react-icons/ai";

function Pricing() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="mdmin1050:py-32 py-16 max-w-[1100px] mdmin1050:mx-auto mx-5">
      <div>
        <h2 className="text-center font-[900]">Choose your plan</h2>
        <p className="p2-regular-16  mt-4 text-center">
          Get the best of SmartPix, for personal and commercial use.
        </p>
      </div>
      <div className="flex justify-center items-center mt-[3em]">
        <div className="flex space-x-3">
          <p className={`${checked ? "text-[#8e93a3]" : null} p1-bold-18`}>
            Monthly
          </p>
          <Switch
            size="md"
            checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)}
          />
          <p className={`${!checked ? "text-[#8e93a3]" : null} p1-bold-18`}>
            Yearly
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-[6em]">
        <div className="mdmin960:!col-span-4 mdmin720:col-span-6 col-span-12 relative bg-main-bg-gradient px-6 py-9 rounded-md">
          <p className="p2-bold-16">Supporter</p>
          <div className="flex items-end my-[3em]">
            <h2 className="font-bold">${checked ? "5" : "6"}</h2>
            <p>/month</p>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-3">
              <AiFillCheckCircle className="text-[20px]" />
              <p className="p2-regular-16">45 seconds for 9 images</p>
            </div>
            <div className="flex items-center space-x-3">
              <AiFillCheckCircle className="text-[20px]" />
              <p className="p2-regular-16">Public access to showcase</p>
            </div>
            <div className="flex items-center space-x-3">
              <AiFillCheckCircle className="text-[20px]" />
              <p className="p2-regular-16">High priority</p>
            </div>
            <div className="flex items-center space-x-3">
              <AiFillCheckCircle className="text-[20px]" />
              <p className="p2-regular-16">High Resolution</p>
            </div>
            <div className="flex items-center space-x-3">
              <AiFillCheckCircle className="text-[20px]" />
              <p className="p2-regular-16">Enable editing images</p>
            </div>
          </div>
          <button type="button" className="primary-button w-full mt-9">
            Upgrade to Supporter
          </button>
        </div>
        <div className="relative mdmin960:!col-span-4 mdmin720:col-span-6 col-span-12 bg-main-bg-gradient px-6 py-9 rounded-md">
          <p className="p2-bold-16">Professional</p>
          <div className="flex items-end my-[3em]">
            <h2 className="font-bold">${checked ? "20" : "24"}</h2>
            <p>/month</p>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-3">
              <AiFillCheckCircle className="text-[20px]" />
              <p className="p2-regular-16">45 seconds for 9 images</p>
            </div>
            <div className="flex items-center space-x-3">
              <AiFillCheckCircle className="text-[20px]" />
              <p className="p2-regular-16">Public access to showcase</p>
            </div>
            <div className="flex items-center space-x-3">
              <AiFillCheckCircle className="text-[20px]" />
              <p className="p2-regular-16">Highest priority</p>
            </div>
            <div className="flex items-center space-x-3">
              <AiFillCheckCircle className="text-[20px]" />
              <p className="p2-regular-16">Highest Resolution</p>
            </div>
            <div className="flex items-center space-x-3">
              <AiFillCheckCircle className="text-[20px]" />
              <p className="p2-regular-16">Enable editing images</p>
            </div>
            <div className="flex items-center space-x-3">
              <AiFillCheckCircle className="text-[20px]" />
              <p className="p2-regular-16">Access to model training</p>
            </div>
            <div className="flex items-center space-x-3">
              <AiFillCheckCircle className="text-[20px]" />
              <p className="p2-regular-16">Access to SmartPix&apos;s API</p>
            </div>
            <div className="flex items-center space-x-3">
              <AiFillCheckCircle className="text-[20px]" />
              <p className="p2-regular-16">Limited private servers (3) </p>
            </div>
          </div>
          <button type="button" className="primary-button w-full mt-9">
            Upgrade to Professional
          </button>
        </div>
        <div className="relative mdmin960:!col-span-4 mdmin720:col-span-6 col-span-12 bg-main-bg-gradient px-6 py-9 rounded-md">
          <p className="p2-bold-16">Enterprise</p>
          <div className="flex items-end my-[3em]">
            <h2 className="font-bold">Custom</h2>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-3">
              <AiFillCheckCircle className="text-[20px]" />
              <p className="p2-regular-16">Custom model</p>
            </div>
            <div className="flex items-center space-x-3">
              <AiFillCheckCircle className="text-[20px]" />
              <p className="p2-regular-16">Custom training</p>
            </div>
            <div className="flex items-center space-x-3">
              <AiFillCheckCircle className="text-[20px]" />
              <p className="p2-regular-16">Dedicated support</p>
            </div>
            <div className="flex items-center space-x-3">
              <AiFillCheckCircle className="text-[20px]" />
              <p className="p2-regular-16">Private servers</p>
            </div>
            <div className="flex items-center space-x-3">
              <AiFillCheckCircle className="text-[20px]" />
              <p className="p2-regular-16">Offer team channel</p>
            </div>
          </div>
          <button type="button" className="primary-button w-full mt-9">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
