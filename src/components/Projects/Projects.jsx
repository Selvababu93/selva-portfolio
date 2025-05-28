import React from 'react'
import ProjectCard from "./ProjectCard"
import usbRelay from "../../assets/pcbboard.png"
import thumbnailImg from "../../assets/photographer.png"
import codingImg from "../../assets/coder.png"
const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold">
            Projects
        </h1>
                        {/* Project Details */}
        <div className="py-12 px-8 flex flex-wrap gap-5">
                        {/* Project cards */}
            <ProjectCard projectImg={usbRelay} title={"Usb Relay"} main={`USB relay modules with GPIOs and analog
                inputs offer a versatile solution for
                 controlling and monitoring various devices.`}/>

                        {/* Project cards */}
            <ProjectCard projectImg={thumbnailImg} title={"Usb Relay"} main={`USB relay modules with GPIOs and analog
                inputs offer a versatile solution for
                 controlling and monitoring various devices.`}/>

                        {/* Project cards */}
            <ProjectCard projectImg={codingImg} title={"Usb Relay"} main={`USB relay modules with GPIOs and analog
                inputs offer a versatile solution for
                 controlling and monitoring various devices.`}/>
        </div>
    </div>
  )
}

export default Projects