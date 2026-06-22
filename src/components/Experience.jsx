import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: "Full Stack Developer",
            company: "Tata Consultancy Services",
            period: "Feb 2024 - Present",
            description: [
                "Developed responsive and interactive user interfaces using React and Tailwind.",
                "Integrated RESTful APIs and optimized state management with Redux.",
                "Architected and implemented microservices using Node.js and AWS.",
                "Reduced page load time by 40% through rigorous performance optimization."
            ]
        },

        // {
        //     role: ".NET Developer Intern",
        //     company: "Koenig Solutions",
        //     period: "April 2023 - July 2023",
        //     description: [
        //         "Assisted in the development of client websites using HTML, CSS, and JavaScript.",
        //         "Fixed bugs and maintained existing codebases."
        //     ]
        // }
    ];

    return (
        <section id="experience" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Career Journey</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-text-main">Work Experience</h2>
                </motion.div>

                <div className="max-w-4xl mx-auto px-4">
                    <div className="relative border-l-2 border-indigo-100 space-y-12 ml-3 md:ml-0">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8 md:pl-12"
                            >
                                {/* Timeline Dot */}
                                <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-white border-4 border-primary shadow-sm" />

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-text-main">{exp.role}</h3>
                                        <p className="text-primary font-medium">{exp.company}</p>
                                    </div>
                                    <div className="flex items-center text-sm text-text-muted mt-2 sm:mt-0 bg-gray-50 px-3 py-1 rounded-full w-fit">
                                        <Calendar size={14} className="mr-2" />
                                        {exp.period}
                                    </div>
                                </div>

                                <ul className="space-y-2">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start text-text-muted text-sm md:text-base leading-relaxed">
                                            <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-300" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
