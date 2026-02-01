import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: "B.Tech in Computer Science & ",
            school: "ABES Engineering College,Ghaziabad",
            period: "2019 - 2023",
            cgpa: "8.1/10",
            // desc: "Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management."
        },
        {
            degree: "Higher Secondary Education",
            school: "Central Academy Senior Secondary School",
            period: "2017 - 2018",
            percent: "81/100",
            // desc: "Specialized in Science with Computer Science."
        },
        {
            degree: "Secondary School Certificate",
            school: "Central Academy Senior Secondary School",
            period: "2015 - 2016",
            cgpa: "10/10",
            // desc: "Specialized in Science with Computer Science."
        }
    ];

    return (
        <section id="education" className="py-24 bg-bg-secondary">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Learning Path</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-text-main">Education</h2>
                </motion.div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-50 before:via-indigo-200 before:to-indigo-50">
                    {education.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-indigo-50 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-primary transition-colors">
                                <GraduationCap size={18} className="text-primary group-hover:text-white transition-colors" />
                            </div>

                            <div className=" w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-100 transition-all">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-bold text-lg text-text-main">{item.degree}</h3>
                                </div>
                                <div className="flex flex-col items-start text-sm text-primary font-medium">
                                    <div>
                                        <span className="mr-2">{item.school}</span>
                                    </div>
                                    <div className="flex items-start justify-between w-full gap-2">
                                        <span className="flex items-center item-center text-text-muted gap-1 mt-2"><Calendar size={14} /> {item.period}</span>
                                        <div className="flex items-center item-center text-text-muted gap-1 mt-2">
                                            {
                                                item.cgpa ? <span className="">CGPA: {item.cgpa}</span> : <span className="">Percent: {item.percent}</span>


                                            }
                                        </div>
                                    </div>

                                </div>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
