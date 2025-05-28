import React from 'react'
import avatarImg from '../../assets/standing_laptop.png'
import TextChanger from '../../TextChanger'

const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10'>
            <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
                <TextChanger/>
            </h1>
            <p className='text-sm md:text-2xl tracking-tight'>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Repellendus ea consectetur ratione minus ipsum omnis temporibus
                    nesciunt architecto!.
            </p>
            <button className='mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg
            md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697'>
            Contact Me
            </button>
        </div>
        <div>
            {/* <img className="w-[500px] h-[500px] object-cover" src={avatarImg} alt="" /> */}
            {/* maintail aspect raio responsively */}
            <img src={avatarImg} alt="Avatar" className="w-full max-w-sm aspect-square object-cover rounded-full" />
        </div>
    </div>
  )
}

export default Home