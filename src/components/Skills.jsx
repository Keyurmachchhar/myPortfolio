import React from 'react'
import { FaNodeJs } from 'react-icons/fa';
import { RiCss3Line, RiHtml5Line, RiNextjsLine, RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const icons = [
    { Component: RiHtml5Line, color: 'text-sky-700', duration: 1 },
    { Component: RiCss3Line, color: 'text-red-600', duration: 1.2 },
    { Component: RiReactjsLine, color: 'text-cyan-400', duration: 1.4 },
    { Component: FaNodeJs, color: 'text-green-500', duration: 1.6 },
    { Component: RiNextjsLine, color: '', duration: 1.8 },
    { Component: SiMongodb, color: 'text-green-600', duration: 2 }
];

const Skills = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}>
                <h1 className='my-20 text-center text-4xl'>Skills</h1>
            </motion.div>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {icons.map((icon, index) => {
                        const IconComponent = icon.Component;
                        const animation = {
                            initial: { y: 0 },
                            animate: {
                                y: index % 2 === 0 ? [0, -10, 0] : [0, 10, 0], // Move up for even, down for odd
                                transition: {
                                    duration: icon.duration,
                                    repeat: Infinity,
                                    repeatType: 'loop'
                                }
                            }
                        };
                        return (
                            <motion.div
                                key={index}
                                className="rounded-2xl border-4 border-neutral-800 p-4"
                                initial="initial"
                                animate="animate"
                                {...animation}
                            >
                                <IconComponent className={`text-7xl ${icon.color} text-center`} />
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </div >
    )
}

export default Skills
