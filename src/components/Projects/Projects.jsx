import React from "react";
import ProjectCard from "./ProjectCard";
import usbRelay from "../../assets/pcbboard.png";
import thumbnailImg from "../../assets/thumbnailImage.png";
import gestureImg from "../../assets/peace.png";
import bgRemoval from "../../assets/bgRemoval.jpg";
import videoSolution from "../../assets/videoSolution.jpg";
import goPro from "../../assets/goPro.jpg";
import customCamera from "../../assets/customCamera";

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
                    main={`A fully automated, remotely controlled slow-motion video capture system engineered specifically for water park rides, where traditional wired infrastructure is not feasible. The system is designed to capture high-frame-rate video and utilizes a Siemens PLC to record high-quality slow-motion footage of riders at key action points.

The entire process is triggered through a wireless field sensor network, eliminating the need for physical cabling and enabling seamless integration into existing ride structures.`}
                />
                {/* Project cards */}
                <ProjectCard
                    projectImg={goPro}
                    title={"GoPro Automation"}
                    main={`An automated remotely controlled GoPro photo and video capture system triggered by sensors. Combines custom hardware and software for fully remote operation, including automated post-processing with branded intros and outros for professional-quality media delivery.`}
                />

                <ProjectCard
                    projectImg={customCamera}
                    title={"Custom Camera Capture"}
                    main={`Remote-triggered camera system for attractions and events that captures photos and videos simultaneously. Triggering can be done manually via a clicker or fully automated using the latest generation technology, with media automatically routed to designated folders or servers.`}
                />
                {/* ------------------------------------- */}
                {/* Project cards */}
                <ProjectCard
                    projectImg={usbRelay}
                    title={"Remote I/O Controller"}
                    main={`A plug‑and‑play module featuring relays, GPIO lines, and analog inputs—offering a flexible, reliable solution for remotely controlling and monitoring various devices in real time.`}
                />

                {/* Project cards */}
                <ProjectCard
                    projectImg={thumbnailImg}
                    title={"🎞️ Video Thumbnail & Backup Tool"}
                    main={`A desktop utility that automatically generates video thumbnails—either at a chosen timestamp or by detecting faces—embeds them into the files, and organizes backups for streamlined media management with minimal user input`}
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
