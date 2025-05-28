import React from 'react'
import { Icon } from "@iconify/react"



const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
        <h1 className="text-2xl md:text-4xl text-white font-bold">
            Experience
        </h1>
        <div className='flex flex-wrap items-center justify-around'>
            <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
            {/* Tech Stack Icons */}
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <Icon icon="logos:python" width="50" />    
                </span>

                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <Icon icon="logos:c-plusplus" width="50" />    
                </span>

                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <Icon icon="logos:javascript" width="50" />    
                </span>

                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <Icon icon="logos:django-icon" width="50" />    
                </span>

                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <Icon icon="logos:html-5" width="50" />    
                </span>

                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <Icon icon="logos:css-3" width="50" />    
                </span>

                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <Icon icon="logos:react" width="50" />    
                </span>

                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <Icon icon="logos:mysql" width="50" />    
                </span>

                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <Icon icon="logos:postgresql" width="50" />    
                </span>

                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <Icon icon="logos:sqlite" width="50" />    
                </span>

                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <Icon icon="logos:fastapi" width="50" />    
                </span>

                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <Icon icon="logos:hugging-face-icon" width="50" />    
                </span> 
                            {/* add more icons */}
        
            </div>
                            {/* company details */}
            <div>
                                {/* Company 1 */}

            <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                <Icon icon="logos:google" size={50} />
                <span className="text-white">
                    <h2 className="leading-tight">IT Engineer, DEI</h2>
                    <p className="text-sm leading-tight font-thin">
                        December 2020 - Present
                    </p>
                    <ul className="text-sm p-2">
                        <li>- Work as a </li>
                        <li>Work as a</li>
                    </ul>
                </span>
            </div>

                            {/* Company 2 */}
            <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                <Icon icon="logos:google" size={50} />
                <span className="text-white">
                    <h2 className="leading-tight">IT Engineer, DEI</h2>
                    <p className="text-sm leading-tight font-thin">
                        December 2020 - Present
                    </p>
                    <ul className="text-sm p-2">
                        <li>- Work as a </li>
                        <li>Work as a</li>
                    </ul>
                </span>
            </div>

                            {/* Company 3 */}
            <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                <Icon icon="logos:google" size={50} />
                <span className="text-white">
                    <h2 className="leading-tight">IT Engineer, DEI</h2>
                    <p className="text-sm leading-tight font-thin">
                        December 2020 - Present
                    </p>
                    <ul className="text-sm p-2">
                        <li>- Work as a </li>
                        <li>Work as a</li>
                    </ul>
                </span>
            </div>

            </div>
        </div>

    </div>
  )
}

export default Experience