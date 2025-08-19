// src/components/ProjectCard.js
"use client";
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';


const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export default function ProjectCard({ project }) {
    const { title, description, tech, image, repoUrl, liveUrl } = project;

    return (
        <motion.div
            className="bg-slate-800 rounded-lg overflow-hidden shadow-lg transition-shadow duration-300"
            variants={cardVariants} // Use the variants defined above
            whileHover={{ y: -5, scale: 1.03, boxShadow: "0px 10px 30px rgba(120, 95, 240, 0.2)" }} // Enhanced hover effect
        >
            <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/40 transition-shadow duration-300 transform hover:-translate-y-1">
                {/* Image */}
                <img
                    src={image || "https://via.placeholder.com/400x250"}
                    alt={title}
                    className="w-full h-48 object-cover"
                />

                <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2">{title}</h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4">{description}</p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tech.map((t) => (
                            <span key={t} className="bg-slate-700 text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Links/CTAs */}
                    <div className="mt-auto flex justify-start space-x-4 pt-4 border-t border-slate-700">
                        {repoUrl && (
                            <a
                                href={repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                            >
                                <FaGithub className="mr-2" /> View Code
                            </a>
                        )}
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                            >
                                <FiExternalLink className="mr-2" /> Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}