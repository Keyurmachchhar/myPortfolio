import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { MdOutlineFileDownload } from "react-icons/md";
import { HERO_CONTENT } from '../constants/index.js';
import profilePic from '../assets/mkprofile-1.jpg';
import { motion } from "framer-motion";

const PDF_URL = "https://keyurmachchhar.vercel.app/Keyur_Machchhar.pdf"

const Hero = () => {

    const downloadFile = (url) => {
        alert("Download Resume.");
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href=url;
        aTag.setAttribute("download",fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    };

    return (
        <div className='border-b border-neutral-800 pb-4 lg:mb-36'>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0"> {/* Add margin-bottom for mobile */}
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}>
                            <h1 className='pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Machchhar Keyur</h1>
                        </motion.div>
                        <div>
                            <TypeAnimation sequence={[
                                "Web Developer",
                                1000,
                                "Full Stack Developer",
                                1000,
                            ]}
                                wrapper='span'
                                className='bg-gradient-to-r from-pink-600 via-slate-500 to-purple-600 bg-clip-text text-3xl lg:text-6xl tracking-tight text-transparent'
                                speed={30}
                                repeat={Infinity}
                            />
                        </div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}>
                            <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}>
                            <div>
                                <button onClick={() => { downloadFile(PDF_URL) }} className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md hover:text-white">
                                    <span className="w-full h-full bg-gradient-to-br from-pink-600 via-stone-500 to-purple-600 group-hover:from-purple-600 group-hover:via-slate-500 group-hover:to-pink-600 absolute"></span>
                                    <span className="flex flex-wrap justify-center items-center gap-3 relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400 ">
                                        <MdOutlineFileDownload className='text-xl' />
                                        <span className="relative">Resume</span>
                                    </span>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center items-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className='flex justify-center items-center'>
                            <img src={profilePic} alt="profile_pic" className='w-1/2 h-1/2 lg:w-4/5 rounded-xl' />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
