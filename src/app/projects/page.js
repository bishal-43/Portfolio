// src/app/projects/page.js (or wherever your ProjectPage is)
"use client";
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard'; // Assuming ProjectCard is in components folder

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2 // This will apply a 0.2s delay between each child animation
        }
    }
};

export default function ProjectPage() {
    // Enhanced project data with images and specific URLs
    const projects = [
        {
            title: "Quick_Meds",
            description: "A full-stack platform for users to get quick medical consultations from registered doctors.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            image: "/images/quickmeds.png", // Add path to your project image
            repoUrl: "https://github.com/bishal-43/quick-meds",
            liveUrl: "https://quick-meds.example.com",
        },
        {
            title: "Brain Tumor Detection",
            description: "An AI-powered tool that analyzes MRI scans to detect and classify brain tumors using a deep learning model.",
            tech: ["Python", "TensorFlow", "Flask", "OpenCV"],
            image: "/images/Braintumor.jpg", // Add path to your project image
            repoUrl: "https://github.com/PratibhaIngale/Brain_Tumor_Detection",
            liveUrl: "", // Leave empty if no live demo
        },
        {
            title: "Chasmawala",
            description: "An e-commerce site specializing in eyewear, featuring a virtual try-on and a custom prescription form.",
            tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
            image: "/images/sunglasses6.jpg", // Add path to your project image
            repoUrl: "https://github.com/bishal-43/chasmawala-project",
            liveUrl: "",
        },
        // Add more projects here...
    ];

    return (
        <section id="projects" className="bg-gray-800 text-white py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold">My Creative Portfolio</h2>
                    <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">
                        Here are a few projects I've worked on recently. Want to see more? Email me.
                    </p>
                </div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </motion.div>
            </div>
        
        </section >
  );
}