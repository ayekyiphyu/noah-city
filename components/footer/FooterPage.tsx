'use client';

import { ArrowRight, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

export default function FooterPage() {

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'New In', href: '#new' },
        { name: 'Clothing', href: '#clothing' },
        { name: 'Contact', href: '#contact' },
    ];

    const categories = [
        { name: 'Top', href: '#clothing/top' },
        { name: 'Bottom', href: '#clothing/bottom' },
        { name: 'Family Sets', href: '#clothing/family-set' },
        { name: 'Sale Items', href: '#sale' },
    ];


    const handleLinkClick = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-neutral-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Column 1: Brand & Social */}
                    <div className="md:col-span-1 text-center md:text-left"> {/* ADDED text-center md:text-left */}
                        <h3 className="text-2xl font-bold mb-2">NOAH CITY</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Your destination for premium lifestyle clothing in Myanmar.
                        </p>
                        <div className="flex space-x-4 mt-6 justify-center md:justify-start"> {/* ADDED justify-center md:justify-start */}
                            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Shop Links */}
                    <div className="text-center md:text-left"> {/* ADDED text-center md:text-left */}
                        <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Quick Links </h2>

                        {quickLinks.map((link) => (
                            <div className="flex space-x-4 mt-6 justify-center md:justify-start">
                                <button
                                    onClick={() => handleLinkClick(link.href)}
                                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                                >
                                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                    {link.name}
                                </button>
                            </div>
                        ))}


                    </div>

                    {/* Column 3: Company Links */}
                    <div className="text-center md:text-left"> {/* ADDED text-center md:text-left */}
                        <h2 className="text-sm font-semibold text-white-300 uppercase tracking-wider mb-4">Categories</h2>


                        {categories.map((category) => (
                            <div key={category.name} className="flex space-x-4 mt-6 justify-center md:justify-start">
                                <button
                                    onClick={() => handleLinkClick(category.href)}
                                    className="text-white-300 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                                >
                                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                    {category.name}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className=" text-center md:text-left"> {/* ADDED text-center md:text-left */}
                        <h4 className="text-sm font-semibold text-white-300 uppercase tracking-wider mb-4">Contact</h4>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start justify-center md:justify-start"> {/* ADDED justify-center md:justify-start */}
                                <MapPin className="w-5 h-5 text-white-400 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-white-400">Downtown Yangon, Myanmar</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start"> {/* ADDED justify-center md:justify-start */}
                                <Phone className="w-5 h-5 text-white-400 mr-3 flex-shrink-0" />
                                <a href="tel:+959123456789" className="text-white-400 hover:text-white transition-colors">
                                    +95 9 123 456 789
                                </a>
                            </div>
                            <div className="flex items-center justify-center md:justify-start"> {/* ADDED justify-center md:justify-start */}
                                <Mail className="w-5 h-5 text-white-400 mr-3 flex-shrink-0" />
                                <a href="mailto:info@noahcity.com" className="text-white-400 hover:text-white transition-colors">
                                    xxxx@xxxx.gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Section (already centered on mobile) */}
                <div className="border-t border-neutral-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
                        <p className="text-white-500 text-center text-sm text-center md:text-left">
                            &copy; {new Date().getFullYear()} Noah City. All rights reserved.
                        </p>

                    </div>
                </div>
            </div>
        </footer>
    );
}