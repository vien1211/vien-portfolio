import React from 'react'
import { motion } from 'framer-motion'
import { BiLogoBootstrap, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoPhp, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi'
import FigmaLogo from '../assets/figmalogo.png'

const Skill = () => {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    }

    const icons = [
        { component: BiLogoReact, color: '#61DAFB' }, // React (Xanh nhạt)
        { component: BiLogoHtml5, color: '#E34F26' }, // HTML5 (Cam)
        { component: BiLogoJavascript, color: '#F7DF1E' }, // JavaScript (Vàng)
        { component: BiLogoTailwindCss, color: '#38BDF8' }, // Tailwind (Xanh dương)
        { component: BiLogoBootstrap, color: '#7952B3' }, // Bootstrap (Tím)
        { component: BiLogoNodejs, color: '#68A063' }, // Node.js (Xanh lá)
        { component: BiLogoMongodb, color: '#4DB33D' }, // MongoDB (Xanh lá cây)
        { component: BiLogoPhp, color: '#777BB4' }, // PHP (Xanh tím)
        { component: 'figma' } 
    ]

    return (
        <div id="skill" className='flex flex-col min-h-[100vh] w-full items-center justify-center gap-13 md:gap-32'>
            <motion.h1
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                className='text-4xl md:text-6xl font-light text-[#45625e]'
            >
                Skills
            </motion.h1>

            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-16 p-5'>
                {icons.map(({ component: Icon, color }, index) => (
                    <motion.div
                        key={index}
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.5 }}
                    >
                        
                        {Icon === 'figma' ? (
                            <img
                                src={FigmaLogo}
                                alt="Figma"
                                className="w-[80px] sm:w-[100px] md:w-[120px] hover:-translate-y-5 transition-all duration-300"
                            />
                        ) : (
                            <Icon
                                className='cursor-pointer transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'
                                style={{ fontSize: '90px', color: color }}
                            />
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Skill
