import React from "react";
import ProjectCard from "./ProjectCard";
import usbRelay from "../../assets/pcbboard.png";
import thumbnailImg from "../../assets/thumbnailImage.png";
import gestureImg from "../../assets/peace.png";
import bgRemoval from "../../assets/bgRemoval.jpg";
import videoSolution from "../../assets/videoSolution.jpg";
import goPro from "../../assets/goPro.jpg";

const Projects = () => {
    return (
        <div id="Projects" className="p-10 md:p-24 text-white">
            <h1 className="text-2xl md:text-4xl text-white font-bold">
                Projects
            </h1>
            {/* Project Details */}
            <div className="py-12 px-8 flex flex-wrap gap-5">
                {/* Project cards */}
                <ProjectCard
                    projectImg={bgRemoval}
                    title={"Background Removal Tool"}
                    main={`Automated client-server background removal solution using FastAPI. The client watches an input folder, sends images to a local/cloud server, and saves the processed output to a destination folder — ideal for photo operations needing clean images fast.`}
                />
                {/* Project cards */}
                <ProjectCard
                    projectImg={videoSolution}
                    title={"Video Solution for Theme Parks"}
                    main={`A smart slow-motion video capture system using Sony cameras and PLCs for water park rides. Field sensors trigger the system wirelessly due to cable limitations. Post-processing includes adding branded intros/outros before delivering the final video.`}
                />
                {/* Project cards */}
                <ProjectCard
                    projectImg={goPro}
                    title={"GoPro Automation"}
                    main={`Automated GoPro-based photo/video capture system triggered via sensor. Includes custom hardware/software to remotely power on/off, trigger shots, and post-process media with intros and outros for professional delivery.`}
                />
                {/* ------------------------------------- */}
                {/* Project cards */}
                <ProjectCard
                    projectImg={usbRelay}
                    title={"Usb Relay"}
                    main={`USB relay modules with GPIOs and analog
								inputs offer a versatile solution for
								 controlling and monitoring various devices.`}
                />

                {/* Project cards */}
                <ProjectCard
                    projectImg={thumbnailImg}
                    title={"🎞️ Video Thumbnail & Backup Tool"}
                    main={`A desktop tool that auto-generates video thumbnails, embeds them using FFmpeg, and organizes backups. Built with PySide6, MoviePy & Watchdog.`}
                />

                {/* Project cards */}
                <ProjectCard
                    projectImg={gestureImg}
                    title={"🧠 Gesture-Controlled DSLR Trigger System"}
                    main={`Developed a hygiene-friendly camera system that
						 captures photos based on hand gestures. 
						 Used in public attractions.
`}
                />
            </div>
        </div>
    );
};

export default Projects;
