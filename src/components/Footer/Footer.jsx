import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'


const Footer = () => {
  return (
    <div id="Contact" 
    className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center">
    <div>
    <h3 className="text-2xl md:text-6xl font-bold">
        Contact
    </h3>
    <h3 className="text-sm md:text-2xl font-normal">
        Feel free to rech me out!!!!
    </h3>
    </div>    
    <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
            <MdOutlineEmail size={20} />
            selvababuarikaran@gmail.com
        </li>
        <li className="flex gap-1 items-center">
            <CiLinkedin size={20} />
            https://www.linkedin.com/in/selvababu-arikaran-a5a912aa/
        </li>
        <li className="flex gap-1 items-center">
            <FaGithub size={20} />
            https://github.com/Selvababu93
        </li>
    </ul>
    </div>
  )
}

export default Footer