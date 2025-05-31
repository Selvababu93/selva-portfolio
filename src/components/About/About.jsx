import React from "react";
import AboutImg from "../../assets/desk.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl
    mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About Image"></img>

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  IT Systems & Media Automation Engineer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Experienced in building camera automation systems using Python
                  and GoPro/DSLR APIs. Developed real-time capture and media
                  transfer workflows for museums, attractions, and production
                  setups.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Software Developer (Python & API)
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Created automation tools and FastAPI services, including a
                  cloud/on-prem background removal API. Client systems upload
                  images and receive background-removed outputs efficiently.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Tech Support & Hardware Integrator
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  5+ years of experience providing L1–L2 IT support. Skilled in
                  configuring servers, managing AD/DNS/DHCP, and integrating
                  hardware solutions like USB relays, Raspberry Pi sensors, and
                  biometric systems.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
