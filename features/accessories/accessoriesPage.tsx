'use client';

import { Eye, Heart, Plus, ShoppingBag, Sparkles, Star } from "lucide-react";
import { useState } from "react";

export default function AccessoriesPage() {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    const accessories = [
        { id: 1, name: "Hat", price: "$299", category: "Jewelry", popular: true, image: "" },
        { id: 2, name: "Silk Scarf", price: "$89", category: "Scarves", popular: false, image: "" },
        { id: 3, name: "Leather Handbag", price: "$459", category: "Bags", popular: true, image: "" },
        { id: 4, name: "Gold Bracelet", price: "$199", category: "Jewelry", popular: false, image: "" },
        { id: 5, name: "Sunglasses", price: "$149", category: "Eyewear", popular: true, image: "" },
        { id: 6, name: "Cashmere Gloves", price: "$79", category: "Accessories", popular: false, image: "" }
    ];

    return (
        <section className="w-full bg-white min-h-screen">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16 relative">

                    <div className="flex items-center justify-center gap-2 mb-6 mt-8">
                        <Sparkles className="w-6 h-6 text-green-500 animate-pulse" />
                        <h2 className="text-4xl md:text-5xl font-light">
                            Luxury Accessories
                        </h2>
                        <Sparkles className="w-6 h-6 text-green-500 animate-pulse" />
                    </div>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Discover our curated collection of premium accessories that elevate your style
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {accessories.map((item) => (
                        <div
                            key={item.id}
                            className="group cursor-pointer"
                            onMouseEnter={() => setHoveredItem(item.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
                                {/* Background */}
                                <div className="absolute inset-0 bg-gray-50"></div>

                                {/* Animated Background Pattern */}
                                <div className="absolute inset-0 bg-gray-100/30 group-hover:bg-gray-200/50 transition-all duration-500">
                                    <div className="absolute top-4 right-4 w-20 h-20 bg-purple-100/40 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                                    <div className="absolute bottom-4 left-4 w-16 h-16 common/40 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700 delay-100"></div>
                                </div>

                                {/* Content */}
                                <div className="relative w-full h-full flex flex-col items-center justify-center p-6">
                                    {/* Main Icon */}
                                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-16 h-16 bg-gradient-to-br  tertiary rounded-full flex items-center justify-center shadow-lg">
                                            <Heart className="w-8 h-8 text-white group-hover:animate-pulse" />
                                        </div>
                                    </div>

                                    {/* Product Name */}
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center group-hover:text-purple-600 transition-colors duration-300">
                                        {item.name}
                                    </h3>

                                    {/* Price */}
                                    <p className="text-2xl font-bold black bg-clip-text mb-3">
                                        {item.price}
                                    </p>

                                    {/* Category Badge */}
                                    <span className="px-3 py-1 common text-white rounded-full text-sm font-medium">
                                        {item.category}
                                    </span>
                                </div>

                                {/* Popular Badge */}
                                {item.popular && (
                                    <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-500 to-orange-300 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                                        <Star className="w-3 h-3 fill-current" />
                                        Popular
                                    </div>
                                )}

                                {/* Hover Actions */}
                                <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center gap-4 transition-all duration-300 ${hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                                    }`}>
                                    <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-lg">
                                        <Eye className="w-5 h-5 text-gray-700" />
                                    </button>
                                    <button className="w-12 h-12 bg-gradient-to-r tertiary rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 shadow-lg">
                                        <ShoppingBag className="w-5 h-5 text-white" />
                                    </button>
                                    <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-lg">
                                        <Heart className="w-5 h-5 text-gray-700 hover:text-red-500" />
                                    </button>
                                </div>

                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-16">
                    <button className="px-8 py-4 common text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
                        <Plus className="w-5 h-5" />
                        Load More Accessories
                    </button>
                </div>
            </div>
        </section>
    );
}