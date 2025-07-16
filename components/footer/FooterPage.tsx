'use client';

import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

export default function FooterPage() {
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
                        <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Shop</h4>
                        <div className="space-y-3">
                            <a href="/collections/men" className="block text-gray-400 hover:text-white transition-colors">Men</a>
                            <a href="/collections/women" className="block text-gray-400 hover:text-white transition-colors">Women</a>
                            <a href="/collections/kids" className="block text-gray-400 hover:text-white transition-colors">Kids</a>
                            <a href="/collections/accessories" className="block text-gray-400 hover:text-white transition-colors">Accessories</a>
                        </div>
                    </div>

                    {/* Column 3: Company Links */}
                    <div className="text-center md:text-left"> {/* ADDED text-center md:text-left */}
                        <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Company</h4>
                        <div className="space-y-3">
                            <a href="/about" className="block text-gray-400 hover:text-white transition-colors">About Us</a>
                            <a href="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
                            <a href="/blog" className="block text-gray-400 hover:text-white transition-colors">Blog</a>
                            <a href="/careers" className="block text-gray-400 hover:text-white transition-colors">Careers</a>
                        </div>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className=" text-center md:text-left"> {/* ADDED text-center md:text-left */}
                        <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Contact</h4>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start justify-center md:justify-start"> {/* ADDED justify-center md:justify-start */}
                                <MapPin className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-400">Downtown Yangon, Myanmar</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start"> {/* ADDED justify-center md:justify-start */}
                                <Phone className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                                <a href="tel:+959123456789" className="text-gray-400 hover:text-white transition-colors">
                                    +95 9 123 456 789
                                </a>
                            </div>
                            <div className="flex items-center justify-center md:justify-start"> {/* ADDED justify-center md:justify-start */}
                                <Mail className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                                <a href="mailto:info@noahcity.com" className="text-gray-400 hover:text-white transition-colors">
                                    xxxx@xxxx.gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Section (already centered on mobile) */}
                <div className="border-t border-neutral-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            &copy; {new Date().getFullYear()} Noah City. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a href="#privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#terms" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}