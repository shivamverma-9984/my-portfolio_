import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-bg-primary relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Contact</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-text-main">Get In Touch</h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-text-main">Let's talk about everything!</h3>
                        <p className="text-text-muted mb-12 text-lg">
                            Don't like forms? Send me an email. 👋
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-main text-lg">Email</h4>
                                    <p className="text-text-muted">shivam75324@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-main text-lg">Phone</h4>
                                    <p className="text-text-muted">+91 9984647194</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-main text-lg">Location</h4>
                                    <p className="text-text-muted">Indore , Madhya Pradesh</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl shadow-gray-100 border border-gray-100"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-text-main mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-indigo-500/10 text-text-main transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-text-main mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-indigo-500/10 text-text-main transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-text-main mb-2">Subject</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-indigo-500/10 text-text-main transition-all"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-text-main mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-indigo-500/10 text-text-main transition-all"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-indigo-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300 flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
