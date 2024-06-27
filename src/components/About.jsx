import React from 'react'
import about_img from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className='border-b border-neutral-800 pb-4'>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}>
                <h1
                    className='my-20 text-center text-2xl lg:text-4xl font-bold'>
                    About
                    <span className='text-neutral-500'> Me</span>
                </h1>
            </motion.div>
            <div className="flex flex-wrap">
                <motion.div
                   whileInView={{ opacity: 1, y: 0 }}
                   initial={{ opacity: 0, y: -100 }}
                   transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img src={about_img} alt="about_img" className='rounded-2xl w-3/4 h-3/4' />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className='my-2 max-w-xl py-6 text-sm lg:text-2xl'>{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About