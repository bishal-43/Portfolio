"use client"
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Example icons
import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-gradient-to-br from-slate-900 to-gray-800 text-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-20 md:py-24">

                <motion.div
                    className="md:w-1/2 lg:w-3/5 text-center md:text-left mb-10 md:mb-0"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    {/* Left Column: Text Content & CTAs */}

                    <h2 className="text-xl md:text-2xl text-indigo-400 font-semibold mb-2">
                        Hi, I'm Bishal Kumar Gupta
                    </h2>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                        I build modern and responsive web applications.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0 mb-8">
                        I'm a passionate software developer who loves solving problems, learning new technologies, and bringing ideas to life through code.
                    </p>

                    {/* Call-to-Action Buttons */}
                    <div className="flex justify-center md:justify-start space-x-4 mb-8">
                        <a
                            href="/projects"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 duration-300 shadow-lg"
                        >
                            View My Work
                        </a>
                        <a
                            href="/contact"
                            className="bg-transparent border-2 border-gray-400 hover:bg-gray-700 hover:border-gray-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                        >
                            Contact Me
                        </a>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex justify-center md:justify-start space-x-6">
                        <a href="https://github.com/bishal-43" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition duration-300">
                            <FaGithub size={28} />
                        </a>
                        <a href="https://www.linkedin.com/in/bishal-kumar-gupta-3b775b258" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition duration-300">
                            <FaLinkedin size={28} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition duration-300">
                            <FaTwitter size={28} />
                        </a>
                    </div>

                </motion.div>

                {/* Right Column: Image/Avatar */}
                <motion.div
                    className="md:w-1/2 lg:w-2/5 flex justify-center md:justify-end"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }} // Delay to have it appear after the text
                >

                    <Image
                        src="/images/myphoto.jpg"
                        alt="Bishal Kumar Gupta"
                        width={384}   // equivalent to w-96
                        height={384}
                        className="rounded-full object-cover"
                    />

                </motion.div>

            </div>
        </section>
    );
}