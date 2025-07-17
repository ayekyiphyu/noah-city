'use client';

import { Eye, Heart, Plus, ShoppingBag, Sparkles, Star } from "lucide-react";
import { useState } from "react";

export default function AccessoriesPage() {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    const accessories = [
        {
            id: 1,
            name: "Family Set Jewelry",
            price: "$299",
            category: "Jewelry",
            popular: true,
            image: "assests/dummy06.jpg"
        },
        {
            id: 2,
            name: "Baby Scarf",
            price: "$89",
            category: "Scarves",
            popular: false,
            image: "assests/dummy01.jpg"
        },
        {
            id: 3,
            name: "Baby Diaper Bag",
            price: "$459",
            category: "Bags",
            popular: true,
            image: "assests/dummy02.jpg"
        },
        {
            id: 4,
            name: "Baby Blanket",
            price: "$199",
            category: "Blankets",
            popular: false,
            image: "assests/dummy03.png"
        },
        {
            id: 5,
            name: "Bays Sunglasses",
            price: "$149",
            category: "Sunglasses",
            popular: true,
            image: "assests/dummy04.jpg"
        },
        {
            id: 6,
            name: "Baby gloves",
            price: "$79",
            category: "gloves",
            popular: false,
            image: "assests/dummy05.jpg"
        }
    ];

    return (
        <section className="w-full bg-white min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16 relative">
                    <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6 mt-6 sm:mt-8">
                        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 animate-pulse" />
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
                            Luxury Accessories
                        </h2>
                        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 animate-pulse" />
                    </div>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                        Discover our curated collection of premium accessories that elevate your style
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {accessories.map((item) => (
                        <div
                            key={item.id}
                            className="group cursor-pointer"
                            onMouseEnter={() => setHoveredItem(item.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
                                {/* Product Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                </div>

                                {/* Animated Background Pattern */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="absolute top-4 right-4 w-16 sm:w-20 h-16 sm:h-20 bg-gray-100/40 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                                    <div className="absolute bottom-4 left-4 w-12 sm:w-16 h-12 sm:h-16 bg-common-100/40 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700 delay-100"></div>
                                </div>

                                {/* Content */}
                                <div className="relative w-full h-full flex flex-col items-center justify-end p-4 sm:p-6">
                                    {/* Product Name */}
                                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2 text-center group-hover:text-purple-200 transition-colors duration-300">
                                        {item.name}
                                    </h3>

                                    {/* Price */}
                                    <p className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                                        {item.price}
                                    </p>

                                    {/* Category Badge */}
                                    <span className="px-2 sm:px-3 py-1 bg-purple-600 text-white rounded-full text-xs sm:text-sm font-medium">
                                        {item.category}
                                    </span>
                                </div>

                                {/* Popular Badge */}
                                {item.popular && (
                                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-gradient-to-r from-yellow-500 to-orange-300 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                                        <Star className="w-3 h-3 fill-current" />
                                        Popular
                                    </div>
                                )}

                                {/* Hover Actions */}
                                <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center gap-3 sm:gap-4 transition-all duration-300 ${hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                                    }`}>
                                    <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-lg">
                                        <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                                    </button>
                                    <button className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r common rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 shadow-lg">
                                        <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                    </button>
                                    <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-lg">
                                        <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 hover:text-red-500" />
                                    </button>
                                </div>

                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-8 sm:mt-12 lg:mt-16">
                    <button className="px-6 sm:px-8 py-3 sm:py-4 tertiary text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto text-sm sm:text-base">
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                        Load More Accessories
                    </button>
                </div>
            </div>
        </section>
    );
}