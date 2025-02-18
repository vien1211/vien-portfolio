import React, { useState } from "react";
import { TbBrandLinkedin, TbMail, TbPhone } from "react-icons/tb";
import { motion } from "framer-motion";

const Contact = () => {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            id="contact"
            className="flex min-h-screen max-w-[850px] items-center justify-center"
        >
            <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
                <h1 className="text-center text-4xl md:text-7xl font-semibold bg-gradient-to-r from-green-400 to-yellow-500 bg-clip-text text-transparent">Get in touch</h1>

                <p className="text-center text-md md:text-lg">
                    Send me an E-mail or connect on Linkedin or contact by phone via the button and feel free to start a conversation anytime. I'm always open to connecting!
                </p>

                <div className="relative">
                    <button
                        id="contact-button"
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowOptions((prev) => !prev);
                        }}
                        className="cursor-pointer rounded-lg px-5 py-3 text-lg bg-green-900 text-white shadow-lg shadow-[#678D77] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#45625e]"
                    >
                        Contact me
                    </button>

                    {showOptions && (
                        <div
                            id="contact-menu"
                            className="absolute left-1/2 top-20 -translate-x-1/2 w-full flex justify-center gap-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <a
                                href="mailto:ngocvientruong1211@gmail.com"
                                className="rounded-full px-3 py-3 text-lg border-2 border-green-900 text-white shadow-lg shadow-[#678D77] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#45625e]"
                            >
                                <TbMail className="text-[24px] text-green-900" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/viên-trương-2232b52b9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full px-3 py-3 text-lg border-2 border-green-900 text-white shadow-lg shadow-[#678D77] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#45625e]"
                            >
                                <TbBrandLinkedin className="text-[24px] text-green-900" />
                            </a>
                            <a
                                href="tel:0776812012"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full px-3 py-3 text-lg border-2 border-green-900 text-white shadow-lg shadow-[#678D77] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#45625e]"
                            >
                                <TbPhone className="text-[24px] text-green-900" />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
