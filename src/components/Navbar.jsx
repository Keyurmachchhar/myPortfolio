import React from 'react'
import logo from '../assets/logo.png';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GitHubId, InstraId, LinkedInId } from '../constants';

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between'>
            <div className='flex flex-shrink-0 justify-center items-center'>
                {/* <img src={logo} alt="logo_img" className='w-16 h-16 transform hover:underline hover:scale-105 hover:border-b-2 hover:border-white'/> */}
                <a href='/'><img src={logo} alt="logo_img" className='w-16 h-16 my-10 mx-2' /></a>
            </div>
            <div className=' m-8 flex items-center justify-center gap-7 text-2xl text-white'>
                <a href={LinkedInId}><FaLinkedin /></a>
                <a href={GitHubId}><FaGithub /></a>
                <a href={InstraId}><FaInstagram /></a>
            </div>
        </nav>
    )
}

export default Navbar