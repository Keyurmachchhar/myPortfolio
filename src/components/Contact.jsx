import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className='border-b border-neutral-800 pb-20'>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}>
                <h1 className='my-10 text-center text-4xl'>Contect
                    <span className='text-neutral-500'> Me</span>
                </h1>
            </motion.div>

            <div className="text-center tracking-tighter">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.7 }}>
                    <p className='my-4'>{CONTACT.address}</p>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.7 }}>
                    <p className='my-4'>{CONTACT.phoneNo}</p>
                </motion.div>
                <a href='mailto:keyur.glsbca20@gmail.com' className='border-b border-gray-400'>{CONTACT.email}</a>
            </div>
        </div>
    )
}

export default Contact
