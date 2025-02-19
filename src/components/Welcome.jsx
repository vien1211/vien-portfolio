import React, { useEffect } from 'react'
import { motion } from "framer-motion";

import { LiaAngleDoubleDownSolid } from 'react-icons/lia';

const Welcome = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.95}}
            whileInView={{ opacity: 1, y: 0, scale: 1}}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            id="welcome"
            className="flex min-h-screen max-w-[850px] items-center justify-center p-0"
        >
            
            <div className="flex flex-col items-center justify-center gap-3 space-y-3 p-14">
                <h1 className="text-center text-4xl md:text-6xl bg-gradient-to-br from-orange-300 to-green-500 bg-clip-text text-transparent">Welcome to my</h1>

                <motion.h1
                    style={{
                        fontFamily: "'Orbitron', sans-serif",
                        background: "linear-gradient(90deg, #34D399, #FBBF24, #e08a67)",
                        backgroundSize: "500% 100%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        
                    }}
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="text-center text-7xl md:text-9xl font-semibold tracking-wide"
                >
                    Portfolio
                </motion.h1>

                <p className="text-center text-md md:text-lg text-gray-500">
                “Ready to work, continuously learn, and contribute value!”
                </p>



                <div className="relative flex flex-col items-center py-6">
                    <button
                        onClick={() => {
                            window.scrollTo({
                                top: window.innerHeight,
                                behavior: "smooth",
                            });
                        }}
                        className="relative bg-transparent border-none outline-none animate-pulse cursor-pointer"
                    >
                        <div className="relative flex items-center justify-center">
                            <div className="absolute w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-orange-300 to-green-500 animate-ping opacity-20"></div>
                            <LiaAngleDoubleDownSolid className='animate-bounce text-2xl md:text-2xl text-amber-700 opacity-40' />
                        </div>
                    </button>

                </div>

            </div>
        </motion.div>
    )
}

export default Welcome