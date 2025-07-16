'use client';

import { ArrowRight, Heart, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

export default function NewInPage() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    const featuredItems = [
        {
            id: 'trending-2025',
            title: "What's trending in 2025",
            subtitle: "Discover the hottest styles and must-have pieces",
            image: "assests/dummy01.jpg",
            category: "Featured",
            type: 'large'
        },
        {
            id: 'noah-collections',
            title: "Noah Collections",
            subtitle: "Curated pieces for modern lifestyle",
            image: "assests/dummy03.png",
            category: "Collections",
            type: 'medium'
        },
        {
            id: 'sale-collection',
            title: "Sale Collection",
            subtitle: "Up to 50% off selected items",
            image: "assests/dummy03.png",
            category: "Sale",
            type: 'medium',
            badge: "SALE"
        }
    ];

    const newProducts = [
        {
            id: 1,
            name: "Premium Cotton Tee",
            price: 29.99,
            originalPrice: 39.99,
            image: "assests/dummy03.png",
            isNew: true,
            category: "Tops"
        },
        {
            id: 2,
            name: "Casual Denim Jacket",
            price: 89.99,
            image: "assests/dummy03.png",
            isNew: true,
            category: "Outerwear"
        },
        {
            id: 3,
            name: "Comfort Fit Joggers",
            price: 49.99,
            image: "assests/dummy03.png",
            isNew: true,
            category: "Bottoms"
        },
        {
            id: 4,
            name: "Vintage Graphic Hoodie",
            price: 69.99,
            image: "assests/dummy03.png",
            isNew: true,
            category: "Hoodies"
        }
    ];

    const handleCardClick = (id: string) => {
        console.log(`Navigating to: ${id}`);
        // Add your navigation logic here
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-light text-gray-900 tracking-wide mb-4">
                            NEW IN
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover the latest arrivals and trending pieces in our curated collection
                        </p>
                    </div>
                </div>
            </div>

            {/* Featured Collections Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                    {/* Large Featured Card - Left Side */}
                    <div className="lg:col-span-2">
                        <div
                            className="relative h-96 lg:h-[500px] bg-gray-200 rounded-lg overflow-hidden cursor-pointer group"
                            onClick={() => handleCardClick(featuredItems[0].id)}
                            onMouseEnter={() => setHoveredCard(featuredItems[0].id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-gray-300 transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${featuredItems[0].image}')`
                                }}
                            />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                                <div className="text-white">
                                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4 tracking-wide">
                                        {featuredItems[0].category}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-wide">
                                        {featuredItems[0].title}
                                    </h2>
                                    <p className="text-lg text-gray-200 mb-6 max-w-md mx-auto">
                                        {featuredItems[0].subtitle}
                                    </p>
                                    <button className="inline-flex items-center gap-2 text-white common text-gray-900 px-6 py-3 rounded-lg font-medium  ">
                                        Explore Now
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Hover Effect */}
                            <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${hoveredCard === featuredItems[0].id ? 'opacity-100' : 'opacity-0'
                                }`} />
                        </div>
                    </div>

                    {/* Right Side - Two Smaller Cards */}
                    <div className="space-y-6">
                        {featuredItems.slice(1).map((item) => (
                            <div
                                key={item.id}
                                className="relative h-44 lg:h-[238px] bg-gray-200 rounded-lg overflow-hidden cursor-pointer group"
                                onClick={() => handleCardClick(item.id)}
                                onMouseEnter={() => setHoveredCard(item.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Background */}
                                <div
                                    className="absolute inset-0 bg-gray-300 transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('${item.image}')`
                                    }}
                                />

                                {/* Sale Badge */}
                                {item.badge && (
                                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                        {item.badge}
                                    </div>
                                )}

                                {/* Content */}
                                <div className="absolute inset-0 flex items-center justify-center text-center p-6">
                                    <div className="text-white">
                                        <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-2">
                                            {item.category}
                                        </span>
                                        <h3 className="text-xl font-light mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-200 mb-3">
                                            {item.subtitle}
                                        </p>
                                        <button className="text-sm font-medium  hover:underline flex items-center gap-1 mx-auto">
                                            Shop Now
                                            <ArrowRight className="w-3 h-3" />
                                        </button>
                                    </div>
                                </div>

                                {/* Hover Overlay */}
                                <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${hoveredCard === item.id ? 'opacity-100' : 'opacity-0'
                                    }`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* New Products Grid */}
                <div>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl md:text-3xl font-light text-gray-900">
                            CLOTHING
                        </h2>

                        <button className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2 transition-colors duration-200">
                            View All
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {newProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
                            >
                                {/* Product Image */}
                                <div className="relative aspect-square bg-gray-200 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            target.parentElement!.innerHTML = `
                                                <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                                                    <div class="text-gray-400 text-center">
                                                        <div class="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-lg"></div>
                                                        <p class="text-sm">${product.name}</p>
                                                    </div>
                                                </div>
                                            `;
                                        }}
                                    />

                                    {/* Badges */}
                                    {product.isNew && (
                                        <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                                            NEW
                                        </div>
                                    )}

                                    {/* Hover Actions */}
                                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-colors duration-200">
                                            <Heart className="w-4 h-4 text-gray-600" />
                                        </button>
                                        <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-colors duration-200">
                                            <ShoppingBag className="w-4 h-4 text-gray-600" />
                                        </button>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="p-4">
                                    <div className="mb-2">
                                        <span className="text-xs text-gray-500 uppercase tracking-wide">
                                            {product.category}
                                        </span>
                                    </div>
                                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                                        {product.name}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg font-semibold text-gray-900">
                                            ${product.price}
                                        </span>
                                        {product.originalPrice && (
                                            <span className="text-sm text-gray-500 line-through">
                                                ${product.originalPrice}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}