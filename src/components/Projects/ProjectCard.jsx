import React from "react";

const ProjectCard = ({ projectImg, title, main }) => {
    return (
        <div className="p-3 md:p-6 flex flex-col w-80 h-[500px] bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
            <img
                src={projectImg}
                alt=""
                className="h-40 w-full object-cover rounded-lg"
            />
            <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal mt-4">
                {title}
            </h3>
            <p className="px-4 text-sm md:text-md leading-tight py-2 overflow-auto max-h-24">
                {main}
            </p>
            <div className="mt-auto p-2 md:p-4 flex gap-2 md:gap-4">
                <button className="text-white py-2 px-3 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                    Demo
                </button>
                <button className="text-white py-2 px-3 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                    Source Code
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
