import React from 'react'
import avatarImg from '../../assets/standing_laptop.png'
import TextChanger from '../../TextChanger'


const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
      <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
          <TextChanger />
        </h1>
        <p className='text-sm md:text-xl tracking-tight mt-6 text-justify'>
          Experienced and solutions-driven IT Systems Engineer with over 5+ years of hands-on expertise in IT infrastructure
          management, camera automation, and technical support across global operations. Proven track record in deploying and
          supporting complex systems including POS terminals, DSLR/GoPro media capture solutions, and Raspberry Pi–based automation tools.
          Skilled in scripting and automation using Python and SQL to streamline workflows, enhance operational efficiency, and reduce
          manual effort. Adept at managing end-to-end IT support (Tier 1–3), system imaging, network security, and device lifecycle
          management across Windows, macOS, and mobile platforms. Strong background in developing modern GUI applications using PyQt5/PySide6,
          integrating sensors, PLCs, and relay systems for real-time camera control. Trusted for delivering high-availability systems,
          rapid troubleshooting, and innovative tech integrations in fast-paced production environments.
        </p>
        <a href="#Contact">
  <button className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
    Contact Me
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

