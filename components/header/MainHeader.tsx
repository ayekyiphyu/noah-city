'use client';

import { Facebook, Instagram, Search } from "lucide-react";


export default function MainHeader() {
    return (


        <div>
            <header className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Search Icon */}
                        <div className="flex-1 flex justify-start">
                            <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
                        </div>

                        {/* Logo */}
                        <div className="flex-1 flex justify-center">
                            <div className="text-center">
                                <h1 className="text-2xl font-light text-red tracking-wide">
                                    NOAH CITY
                                </h1>
                                <p className="text-xs text-gray-500 tracking-widest uppercase mt-1">
                                    Lifestyle Boutique
                                </p>
                            </div>
                        </div>

                        {/* Social Icons & Cart */}
                        <div className="flex-1 flex justify-end items-center space-x-4">
                            <Facebook className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-800" />
                            <Instagram className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-800" />
                        </div>
                    </div>
                </div>
            </header>

            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center space-x-12 py-4">
                        {['HOME', 'NEW IN', 'LIFESTYLE', 'CONTACT'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-sm font-light text-gray-700 hover:text-[#6B7461] tracking-wide transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    );
}