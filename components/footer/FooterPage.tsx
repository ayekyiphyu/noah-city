'use client';

import { ArrowRight, Facebook, Instagram, MailOpen, MapPinned, PhoneOutgoing } from "lucide-react";

export default function FooterPage() {
    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'New In', href: '#new' },
        { name: 'Clothing', href: '#clothing' },
        { name: 'Contact', href: '#contact' },
    ];

    const categories = [
        { name: 'Bottom Wear', href: '#clothing/bottom' },
        { name: 'Outer Wear', href: '#clothing/outer' },
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
        <footer className="w-full primary text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
                    {/* Brand Section */}
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-light mb-4 tracking-wide">NOAH CITY</h3>
                        <p className="text-sm text-gray-400 tracking-wider uppercase mb-4">
                            Lifestyle Boutique
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Your trusted destination for premium lifestyle clothing in Myanmar.
                            Quality, comfort, and style for the whole family.
                        </p>

                        {/* Social Media Links */}
                        <div className="flex space-x-3 justify-center md:justify-start">
                            <a
                                href="https://facebook.com/noahcity"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200"
                                aria-label="Follow us on Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://instagram.com/noahcitylifestyle"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-200"
                                aria-label="Follow us on Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-3 flex flex-col items-center md:items-start">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => handleLinkClick(link.href)}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                                    >
                                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Categories</h4>
                        <ul className="space-y-3 flex flex-col items-center md:items-start">
                            {categories.map((category) => (
                                <li key={category.name}>
                                    <button
                                        onClick={() => handleLinkClick(category.href)}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                                    >
                                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                        {category.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
                        <div className="space-y-3 flex flex-col items-center md:items-start">
                            <div className="flex items-start space-x-3">
                                <MapPinned className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-300 text-sm">Downtown Yangon</p>
                                    <p className="text-gray-400 text-xs">Myanmar</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <PhoneOutgoing className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                <a
                                    href="tel:+959123456789"
                                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                >
                                    +95 9 123 456 789
                                </a>
                            </div>

                            <div className="flex items-center space-x-3">
                                <MailOpen className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                <a
                                    href="mailto:info@noahcity.com"
                                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                >
                                    info@noahcity.com
                                </a>
                            </div>

                            <div className="mt-4 pt-4 border-t border-white-700">
                                <p className="text-gray-400 text-xs mb-1">Business Hours:</p>
                                <p className="text-gray-300 text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                                <p className="text-gray-300 text-sm">Sunday: 10:00 AM - 5:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Bottom Section */}
                <div className="border-t border-white-700 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-center md:text-left">
                            <p className="text-gray-400 text-sm">
                                &copy; 2025 Noah City. All rights reserved.
                            </p>
                        </div>

                        <div className="flex space-x-6 text-sm">
                            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Privacy Policy
                            </a>
                            <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Terms of Service
                            </a>
                            <a href="#returns" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Returns
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}