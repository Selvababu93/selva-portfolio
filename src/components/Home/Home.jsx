import React from "react";
import avatarImg from "../../assets/standing_laptop.png";
import TextChanger from "../../TextChanger";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChanger />
        </h1>
        <p className="text-sm md:text-xl tracking-tight mt-6 text-justify">
          IT Systems Engineer with 5+ years of experience in IT infrastructure
          management, automation, and software development. Proven expertise in
          deploying camera systems, developing Python-based automation
          solutions, and managing cross-functional technology projects. Adept at
          using tools like PyQt, OpenCV, and Camera SDKs to deliver practical,
          real-world solutions that enhance operations and user experience.
        </p>
        <a href="#Contact">
          <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Contact Me
          </button>
        </a>
        <span className="inline-block w-2" />{" "}
        {/* Adds spacing between buttons */}
        <a href={`${import.meta.env.BASE_URL}SelvababuArikaran.pdf`} download>
          <button
            className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
            onClick={() => {
              if (typeof gtag === "function") {
                gtag("event", "download_cv_click", {
                  event_category: "engagement",
                  event_label: "CV Download",
                });
              }
            }}
          >
            Download CV
          </button>
        </a>
      </div>

      <div>
        <img
          src={avatarImg}
          alt="Avatar"
          className="w-full max-w-sm aspect-square object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default Home;
