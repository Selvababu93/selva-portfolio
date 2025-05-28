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
        Feel free to reach me out!!!!
    </h3>
    </div>    
    <ul className="text-sm md:text-xl">
  <li className="flex gap-1 items-center">
    <MdOutlineEmail size={20} />
    <a
      href="mailto:selvababuarikaran@gmail.com"
      className="hover:underline text-blue-300"
    >
      selvababuarikaran@gmail.com
    </a>
  </li>
  <li className="flex gap-1 items-center">
    <CiLinkedin size={20} />
    <a
      href="https://www.linkedin.com/in/selvababu-arikaran-a5a912aa/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline text-blue-300"
    >
      linkedin.com/in/selvababu-arikaran-a5a912aa/
    </a>
  </li>
  <li className="flex gap-1 items-center">
    <FaGithub size={20} />
    <a
      href="https://github.com/Selvababu93"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline text-blue-300"
    >
      github.com/Selvababu93
    </a>
  </li>
</ul>

    </div>
  )
}

export default Footer