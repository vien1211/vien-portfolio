import React from 'react'

import ctulogo from '../assets/logo-ctu.png'
import ivslogo from '../assets/ivslogo.webp'
import toeiclogo from '../assets/toeiclogo.webp'
import chandung from '../assets/chandung.png'
import { motion } from 'framer-motion'
import { TbBrandLinkedin, TbMail, TbPhone } from 'react-icons/tb'

const Info = () => {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <div id="home" className='flex min-h-screen w-full items-center justify-center py-28 md:py-32'>
            <div className='flex flex-col items-center justify-center gap-10 text-10'>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img src={chandung} alt='avt' onContextMenu={(e) => e.preventDefault()} className='ring-4 ring-green-700 p-2 w-[220px] h-[220px] rounded-full md:w-[350px] md:h-[350px] object-cover shadow-[#45624E] transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-[#45624E]' />
                </motion.div>

                <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className='flex flex-col max-w-[600px] items-center justify-center text-center'
                >
                    <h1 style={{ fontFamily: "'Orbitron', sans-serif" }} className='bg-gradient-to-r from-green-500 to-orange-400 bg-clip-text text-transparent opacity-80 text-4xl font-semibold transition-all duration-300 hover:opacity-100'>Truong Ngoc Vien</h1>
                    <h3 style={{ fontFamily: "'Orbitron', sans-serif" }} className='bg-gradient-to-r from-green-300 to-yellow-400 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100 mt-1'>Fresher</h3>
                    <p className='md:text-base text-pretty text-sm mt-1'>Hi, I'm Vien! I've recently graduated with a degree in Information Technology from Can Tho University. I'm seeking an opportunity to work as an IT Fresher. I am passionate about website design and development, with a particular focus on creating responsive designs. Now, I am eager to apply my passion and knowledge in a practical environment and am willing to learn, work hard, and make the best positive contribution to the company.</p>
                </motion.div>
            </div>

            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className='absolute flex bg-[#D0D9D3] left-5 md:left-35 top-[15%] md:top-[18%] p-2 rounded-full shadow-lg
               group transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-[#6D8777]'
            >
                <img src={ctulogo} className='w-12 md:w-16 rounded-full bg-white p-2' />
                <div className='hidden lg:flex flex-col items-start mx-3 justify-center 
                    group-hover:block lg:group-hover:flex transition-opacity duration-300'>
                    <span className='text-sm lg:text-xl text-[#45625e] font-semibold flex flex-col'>Can Tho University</span>
                    <span className='text-xs lg:text-sm text-gray-600'>Information Technology</span>
                </div>
            </motion.div>


            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className='absolute flex bg-[#D0D9D3] left-5 md:left-30 top-[28%] md:top-[35%] p-2 rounded-full shadow-lg 
               group transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-[#6D8777]'
            >
                <img src={ivslogo} className='w-12 md:w-16 rounded-full bg-white p-1' />
                <div className='hidden lg:flex flex-col items-start mx-3 justify-center 
                    group-hover:block lg:group-hover:flex transition-opacity duration-300'>
                    <span className='text-sm lg:text-xl text-[#45625e] font-semibold flex flex-col'>Internship</span>
                    <span className='text-xs lg:text-sm text-gray-600'>IVS Company</span>
                </div>
            </motion.div>

            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 1 }}
                className='absolute flex bg-[#D0D9D3] left-5 md:left-40 top-[41%] md:top-[52%] p-2 rounded-full shadow-lg 
               group transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-[#6D8777]'
            >
                <img src={toeiclogo} className='w-13 md:w-16 rounded-full bg-white' />
                <div className='hidden lg:flex flex-col items-start mx-3 justify-center 
                    group-hover:block lg:group-hover:flex transition-opacity duration-300'>
                    <span className='text-sm lg:text-xl text-[#45625e] font-semibold flex flex-col'>TOEIC Certificate</span>
                    <span className='text-xs lg:text-sm text-gray-600'>590</span>
                </div>
            </motion.div>

            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 1 }}
                className='absolute flex bg-[#D0D9D3] right-5 md:right-30 top-[15%] md:top-[18%] p-2 rounded-full shadow-lg 
               group transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-[#6D8777]'
            >
                <a
                    href="mailto:ngocvientruong1211@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                >
                    <div className="text-[#45625e] bg-white p-2 md:p-3 rounded-full flex items-center justify-center w-13 md:w-16 h-13 md:h-16">
                    <span className="w-full h-full flex items-center justify-center"><TbMail className='text-[56px] text-red-700' /></span>
                </div>

                    <div className="hidden lg:flex flex-col items-start mx-3 justify-center">
                        <span className="text-sm lg:text-xl text-[#45625e] font-semibold">
                            Email
                        </span>
                        <span className="text-xs lg:text-sm text-gray-600">
                            ngocvientruong1211@gmail.com
                        </span>
                    </div>
                </a>
            </motion.div>

            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute flex bg-[#D0D9D3] right-5 md:right-25 top-[28%] md:top-[35%] p-2 rounded-full shadow-lg
               transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-[#6D8777]"
            >
                <a
                    href="tel:0776812012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                >
                    <div className="text-[#45625e] bg-white p-2 md:p-3 rounded-full flex items-center justify-center w-13 md:w-16 h-13 md:h-16">
                    <span className="w-full h-full flex items-center justify-center"><TbPhone className='text-[56px] text-green-700' /></span>
                </div>

                    <div className="hidden lg:flex flex-col items-start mx-3 justify-center">
                        <span className="text-sm lg:text-xl text-[#45625e] font-semibold">
                            Phone Number
                        </span>
                        <span className="text-xs lg:text-sm text-gray-600">
                            Vien's
                        </span>
                    </div>
                </a>
            </motion.div>


            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 1 }}
                className='absolute flex bg-[#D0D9D3] right-5 lg:right-60 md:right-35 top-[41%] md:top-[52%] p-2 rounded-full shadow-lg 
               group transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-[#6D8777]'
            >
                <a
                    href="https://www.linkedin.com/in/viên-trương-2232b52b9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                >
                    <div className="text-[#45625e] bg-white p-2 md:p-3 rounded-full flex items-center justify-center w-13 md:w-16 h-13 md:h-16">
                    <span className="w-full h-full flex items-center justify-center"><TbBrandLinkedin className='text-[56px] text-sky-700' /></span>
                </div>

                    <div className="hidden lg:flex flex-col items-start mx-3 justify-center">
                        <span className="text-sm lg:text-xl text-[#45625e] font-semibold">
                            Linkedin
                        </span>
                        <span className="text-xs lg:text-sm text-gray-600">
                            Viên Trương
                        </span>
                    </div>
                </a>
            </motion.div>
        </div>
    )
}

export default Info
