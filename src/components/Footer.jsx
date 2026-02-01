import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-lg font-bold text-text-main">
                        Shivam<span className="text-primary">.</span>
                    </span>
                    <p className="text-text-muted text-sm">
                        © {new Date().getFullYear()} Shivam. All rights reserved.
                    </p>
                </div>

                <p className="text-text-muted text-sm flex items-center gap-1.5 bg-gray-50 px-4 py-2 rounded-full">
                    Made with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind
                </p>
            </div>
        </footer>
    );
};

export default Footer;
