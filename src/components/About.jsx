import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Database } from 'lucide-react';
import profileImg from '../assets/profile.png';

const About = () => {
    const customCards = [
        { icon: <Code size={26} />, title: "Frontend", desc: "ReactJs, NextJs, Tailwind" },
        { icon: <Database size={26} />, title: "Backend", desc: "NodeJs, ExpressJs, MongoDB" },
        { icon: <Globe size={26} />, title: "Deployment", desc: "AWS, Docker, Github ,Vercel" },
    ];

    return (
        <section id="about" className="py-4 bg-bg-primary relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Get to know me</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-text-main">About Me</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center"
                    >
                        <div className="relative w-80 h-80 md:w-96 md:h-96">
                            <div className="absolute inset-0 bg-indigo-50 rounded-[2rem] transform rotate-6 translate-x-4 translate-y-4 -z-10" />
                            <div className="absolute inset-0 border-2 border-primary/10 rounded-[2rem] transform -rotate-3 -translate-x-2 -translate-y-2 -z-10" />
                            <div className="w-full h-full bg-white rounded-[2rem] shadow-xl shadow-indigo-100 flex items-center justify-center overflow-hidden border border-gray-100 relative">
                                <img src="shivam.jpeg" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-text-main">
                            I'm a Developer based in India
                        </h3>
                        <p className="text-text-muted mb-8 leading-relaxed text-lg">
                            I am a dedicated software developer with a strong foundation in computer science principles.
                            My journey involves building scalable web applications and exploring new technologies.
                            I thrive in collaborative environments and love solving complex problems.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            {customCards.map((card, idx) => (
                                <div key={idx} className="p-5 bg-white rounded-xl shadow-lg shadow-gray-100 border border-gray-100 hover:border-primary/20 hover:shadow-indigo-50 transition-all text-center group cursor-default">
                                    <div className="text-primary mb-3 flex justify-center group-hover:scale-110 transition-transform bg-indigo-50 w-12 h-12 rounded-full items-center mx-auto">{card.icon}</div>
                                    <h4 className="font-bold text-text-main">{card.title}</h4>
                                    <p className="text-xs text-text-muted mt-1 leading-normal">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div >
        </section >
    );
};

export default About;
