import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className=" w-full pt-32 pb-10 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50">

            {/* Subtle modern shapes */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob" />
            <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-purple-200/40 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-indigo-100 bg-indigo-50/50 text-primary text-sm font-medium tracking-wide">
                        Open to Work & Collaborations
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-text-main tracking-tight">
                        Hi, I'm <span className="text-primary relative inline-block">
                            Shivam Verma

                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                        A passionate Full Stack Developer crafting seamless digital experiences with modern technologies.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Link
                            to="https://drive.google.com/file/d/1CqqmB8GQLBo0HdgTg4ulLfFsFkjdkyxd/view"
                            target='_blank'
                            rel="noopener noreferrer"
                            className="group bg-primary hover:bg-indigo-600 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300 flex items-center"
                        >
                            Download CV
                            {/* <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} /> */}
                        </Link>
                        <Link
                            to="#contact"
                            onClick={(e) => scrollToSection(e, 'contact')}
                            className="bg-white border border-gray-200 hover:border-primary/50 text-text-main hover:text-primary px-10 py-3 rounded-full font-medium transition-all shadow-sm hover:shadow-md"
                        >
                            Contact Me
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-8 ">
                        <Link to="https://github.com/shivamverma-9984/" target='_blank' rel="noopener noreferrer" className="text-gray-400 hover:text-text-main transition-colors transform hover:-translate-y-1">
                            <Github size={26} />
                        </Link>
                        <Link to="https://www.linkedin.com/in/shivam-kumar-verma-529410220/" target='_blank' rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors transform hover:-translate-y-1">
                            <Linkedin size={26} />
                        </Link>

                        <Link to="mailto:shivam75324@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors transform hover:-translate-y-1">
                            <Mail size={26} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
