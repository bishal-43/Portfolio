"use client";
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import Image from "next/image";

export default function AboutPage() {
    
    const skills = [
        
        "React", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS",
        "Node.js", "Express", "Python", "Flask",
        "TensorFlow", "Scikit-learn", "OpenCV",
        "MongoDB", "Firebase", "Git", "Docker"
    ];

    return (
        <section id="about" className="bg-gray-800 text-white py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold">About Me</h2>
                    <p className="text-lg text-gray-400 mt-2">A little bit about my journey and technical skills.</p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}                      // Fades in when the grid is in view
                    viewport={{ once: true, amount: 0.3 }}              // Animates once, when 30% of it is visible
                    transition={{ duration: 0.8 }}
                >


                    {/* Column 1: Profile Picture */}
                    <div className="flex justify-center md:col-span-1">
                        <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl">
                            <Image
                                src="/images/myphoto.jpg"                 // Add your professional photo here
                                alt="Bishal Kumar Gupta"
                                width={288} 
                                height={288} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Column 2: Bio and Skills */}
                    <div className="md:col-span-2 text-center md:text-left">
                        <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Who am I?</h3>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            I’m Bishal Kumar Gupta, a passionate software developer based in <strong>Pune, India</strong>. My journey in tech is driven by a deep curiosity and a love for turning complex problems into elegant, impactful digital solutions. I thrive in environments where I can continuously learn and apply modern technologies like Next.js and AI/ML to build beautiful and responsive web applications.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            Beyond coding, I'm deeply interested in the broader scope of technology, including full-stack development, cloud computing, and the endless possibilities of machine learning.
                        </p>

                        {/* Skills Section */}
                        <h3 className="text-2xl font-semibold text-indigo-400 mb-4">My Skills</h3>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                            {skills.map((skill) => (
                                <span key={skill} className="bg-slate-700 text-gray-200 text-sm font-medium px-3 py-1.5 rounded-md">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Download CV Button */}
                        <a
                            href="/resume/bishal_gupta_resume.pdf"                 // Add the path of your resume PDF
                            download
                            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 duration-300 shadow-lg"
                        >
                            <FiDownload className="mr-2" />
                            Download My CV
                        </a>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}