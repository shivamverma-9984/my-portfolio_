import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import PixelAI from '../assets/pixelai.png';
import dropshare from '../assets/dropshare.png';
// import AIresumeBuilder from '../assets/airesumebuilder.png';
import ecommerce from '../assets/ecommerce.png';
import movieapp from '../assets/movieapp.png';
// import quiz from '../assets/quiz.png';

const Projects = () => {
    // Placeholder function to simulate image imports since actual assets are missing
    // In a real scenario, these would be: import PixelAI from '../assets/pixelai.png';
    const AIresumeBuilder = "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop";
    // const ecommerce = "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop";
    // const movieapp = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop";

    const projects = [
        {
            id: 1,
            title: "PixelAI",
            category: "fullstack",
            image: PixelAI,
            description: "An AI-Powered image editor tool that leverages artificial intelligence to enhance, retouch, and transform images with ease. Offers features like background removal, color correction, and style transfer.",
            technologies: ["React", "Next.js", "ImageKit.io", "Tailwind CSS", "shadcn UI", "Convex"],
            github: "https://github.com/shivamverma-9984/PixelMind",
            live: "https://pixelaione.vercel.app/",
            features: [
                "AI-Powered Optimization",
                "Image Enhancement",
                "AI Background Removal",
                "One-Click Download",
                "Real-Time Editing",
                "User Authentication"
            ]
        },
        {
            id: 2,
            title: "DropShare App",
            category: "fullstack",
            image: dropshare,
            description: "Developed a secure file sharing system prioritizing data privacy and controlled access rights. Integrated AWS S3 for scalable file upload, retrieval, and efficient file management.",
            technologies: ["React", "Next.js", "Tailwind CSS", "AWS S3", "AWS DynamoDB"],
            github: "https://github.com/shivamverma-9984/filesharingapp",
            live: "https://filesharingapp-sh.vercel.app/",
            features: [
                "User Authentication",
                "Secure File Upload",
                "Efficient File Management",
                "Personalized User Experience",
                "Scalable Architecture"
            ]
        },
        {
            id: 3,
            title: "ResumeHive",
            category: "fullstack",
            image: AIresumeBuilder,
            description: "An intelligent resume generator that uses AI to craft job-winning resumes. Offers real-time edits, keyword optimization, and design customization.",
            technologies: ["TypeScript", "React", "Node", "Express", "MongoDB", "Tailwind CSS"],
            github: "https://github.com/shivamverma-9984/portfolio",
            live: "https://resumehive.vercel.app/",
            features: [
                "AI-Powered Optimization",
                "ATS-Friendly Resumes",
                "Smart Content Suggestions",
                "One-Click Download",
                "Real-Time Editing",
                "User Authentication"
            ]
        },
        {
            id: 4,
            title: "E-Commerce App",
            category: "frontend",
            image: ecommerce,
            description: "Modern e-commerce platform built with React, Tailwind, and Local storage integration for seamless online shopping experience.",
            technologies: ["React", "Tailwind CSS", "LocalStorage"],
            github: "https://github.com/shivamverma-9984/E-commerce-App",
            live: "https://eshop-web-app.vercel.app/",
            features: [
                "React & Redux-Powered State Management",
                "Persistent Shopping Experience",
                "Seamless Online Shopping Features",
                "User Authentication",
                "Core E-Commerce Functionality"
            ]
        },
        {
            id: 5,
            title: "Movie App",
            category: "frontend",
            image: movieapp,
            description: "Responsive movie application which empowered users to seamlessly search for movies by name and genre. Offers the captivating feature of watching movie trailers.",
            technologies: ["React", "Bootstrap", "Redux", "API"],
            github: "https://github.com/shivamverma-9984/MoviesApp",
            live: "https://skvmovies.netlify.app/",
            features: [
                "Responsive & Modern UI",
                "Movie Trailer Integration",
                "Movie Search Functionality",
                "Real-Time Data from TMDB API",
                "User Experience Enhancements"
            ]
        },
        {
            id: 6,
            title: "Quiz Website",
            category: "frontend",
            image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800",
            description: "Developed a web application offering multiple-choice questions on web development. Users can utilize this web application to obtain their results after completing the quiz.",
            technologies: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/shivamverma-9984/Quiz_Application",
            live: "https://onlinequizapplication.netlify.app/",
            features: [
                "MCQs on Web Development",
                "User-Friendly Interface",
                "Instant Results"
            ]
        }
    ];

    return (
        <section id="projects" className="py-24 bg-bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Portfolio</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-text-main">Featured Projects</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-indigo-100 transition-all group flex flex-col h-full"
                        >
                            <div className="h-48 overflow-hidden bg-indigo-50 relative">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full">
                                        <Folder size={48} className="text-indigo-300 group-hover:text-primary transition-colors" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>

                            <div className="p-4 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-3 text-text-main group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-text-muted text-sm mb-6 line-clamp-3 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                    {project.technologies.slice(0, 4).map(tag => (
                                        <span key={tag} className="text-xs px-3 py-1 bg-gray-50 text-text-muted rounded-full border border-gray-100 font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                    {project.technologies.length > 4 && (
                                        <span className="text-xs px-3 py-1 bg-gray-50 text-text-muted rounded-full border border-gray-100 font-medium">
                                            +{project.technologies.length - 4}
                                        </span>
                                    )}
                                </div>

                                <div className="flex justify-between items-center border-t border-gray-50 mt-auto">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-text-muted hover:text-text-main transition-colors font-medium">
                                        <Github size={18} /> Code
                                    </a>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary hover:text-indigo-700 transition-colors font-medium">
                                        Live Demo <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
