import { Facebook, Instagram, Play, Search, ShoppingBag, User } from "lucide-react";

export default function OliveAveryWebsite() {
    return (
        <div className="min-h-screen bg-white">
            {/* Top Banner */}
            <div className="bg-[#6B7461] text-white text-center py-2 text-sm font-light tracking-wide">
                FREE SHIPPING ON ORDERS OVER $200
            </div>

            {/* Header */}
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
                                <h1 className="text-2xl font-light text-gray-800 tracking-wide">
                                    Olive & Avery
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
                            <Play className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-800" />
                            <User className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-800" />
                            <div className="relative">
                                <ShoppingBag className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-800" />
                                <span className="absolute -top-2 -right-2 bg-[#6B7461] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                    0
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center space-x-12 py-4">
                        {['HOME', 'NEW IN', 'GIFTS', 'BABY', 'LIFESTYLE', 'BRANDS', 'CONTACT'].map((item) => (
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

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-[#B5C4A7] to-[#9DAA8E] overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Product Image */}
                        <div className="relative">
                            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                                <div className="relative bg-gray-50 rounded-2xl p-8 aspect-square flex items-center justify-center">
                                    {/* Wooden Hanger */}
                                    <div className="relative">
                                        <div className="w-32 h-2 bg-amber-700 rounded-full mb-4"></div>
                                        <div className="w-4 h-4 bg-amber-800 rounded-full absolute left-1/2 transform -translate-x-1/2 -top-2"></div>

                                        {/* Baby Romper */}
                                        <div className="bg-cream bg-opacity-90 w-24 h-32 rounded-lg shadow-md relative mx-auto">
                                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-800 rounded-full"></div>
                                            <div className="absolute top-4 right-4 w-2 h-2 bg-amber-800 rounded-full"></div>
                                            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-white rounded-lg shadow-inner"></div>
                                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-cream rounded-b-lg"></div>
                                        </div>

                                        {/* Baby Shoes */}
                                        <div className="absolute -left-8 top-12">
                                            <div className="w-6 h-4 bg-amber-700 rounded-full mb-1"></div>
                                            <div className="w-6 h-4 bg-amber-700 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative leaves */}
                            <div className="absolute -bottom-4 -right-4 opacity-30">
                                <svg width="120" height="120" viewBox="0 0 120 120" className="text-[#6B7461]">
                                    <path d="M20 60 Q60 20 100 60 Q60 100 20 60" fill="currentColor" opacity="0.3" />
                                    <path d="M40 70 Q70 40 100 70 Q70 100 40 70" fill="currentColor" opacity="0.2" />
                                </svg>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="text-center lg:text-left">
                            <p className="text-[#6B7461] text-sm font-light tracking-widest uppercase mb-4">
                                new collection
                            </p>
                            <h2 className="text-5xl lg:text-6xl font-light text-[#6B7461] mb-6 leading-tight">
                                shop our
                            </h2>
                            <h1 className="text-4xl lg:text-5xl font-light text-[#4A5442] mb-8 tracking-wide">
                                BABYWEAR
                            </h1>
                            <button className="bg-[#6B7461] text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#5A6351] transition-colors">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Cards */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: 'NEW IN', color: 'bg-[#6B7461]' },
                            { name: 'BABY', color: 'bg-[#9DAA8E]' },
                            { name: 'LIFESTYLE', color: 'bg-[#7A8269]' },
                            { name: 'GIFTS', color: 'bg-[#5A6351]' }
                        ].map((category) => (
                            <div
                                key={category.name}
                                className={`${category.color} aspect-square rounded-lg flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity`}
                            >
                                <h3 className="text-white text-lg font-light tracking-widest">
                                    {category.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gift Section */}
            <section className="relative bg-gradient-to-r from-[#E8E5E1] to-[#F0EDE9] overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="text-center lg:text-left">
                            <p className="text-[#8B7D6B] text-sm font-light tracking-widest mb-4">
                                find the
                            </p>
                            <h2 className="text-5xl lg:text-6xl font-light text-[#6B7461] mb-4 leading-tight">
                                PERFECT GIFT
                            </h2>
                            <p className="text-lg font-light text-[#8B7D6B] italic mb-8">
                                to celebrate a special moment
                            </p>
                        </div>

                        {/* Gift Image */}
                        <div className="relative">
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                                <div className="relative bg-gray-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                                    {/* Gift Basket */}
                                    <div className="relative">
                                        <div className="w-32 h-20 bg-amber-100 rounded-lg shadow-md relative">
                                            <div className="absolute top-2 left-2 w-4 h-4 bg-white rounded-full"></div>
                                            <div className="absolute top-2 right-2 w-4 h-4 bg-white rounded-full"></div>
                                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-amber-200 rounded-lg"></div>
                                        </div>

                                        {/* Basket Handle */}
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-8 border-4 border-amber-700 rounded-t-full border-b-0"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 opacity-30">
                                <svg width="100" height="100" viewBox="0 0 100 100" className="text-[#D4C4B0]">
                                    <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.3" />
                                    <circle cx="30" cy="30" r="20" fill="currentColor" opacity="0.2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#6B7461] text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-light mb-4">Olive & Avery</h3>
                            <p className="text-sm text-gray-300 font-light">
                                Lifestyle boutique for your little ones
                            </p>
                        </div>
                        <div>
                            <h4 className="text-sm font-light mb-4 tracking-widest uppercase">Quick Links</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li><a href="#" className="hover:text-white">About Us</a></li>
                                <li><a href="#" className="hover:text-white">Size Guide</a></li>
                                <li><a href="#" className="hover:text-white">Returns</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-light mb-4 tracking-widest uppercase">Customer Care</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                                <li><a href="#" className="hover:text-white">Shipping Info</a></li>
                                <li><a href="#" className="hover:text-white">FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-light mb-4 tracking-widest uppercase">Follow Us</h4>
                            <div className="flex space-x-4">
                                <Facebook className="w-5 h-5 cursor-pointer hover:text-gray-300" />
                                <Instagram className="w-5 h-5 cursor-pointer hover:text-gray-300" />
                                <Play className="w-5 h-5 cursor-pointer hover:text-gray-300" />
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-600 mt-8 pt-8 text-center">
                        <p className="text-sm text-gray-300 font-light">
                            © 2025 Olive & Avery. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}