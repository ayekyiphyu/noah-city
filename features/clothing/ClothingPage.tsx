'use client';

import { ArrowRight, Heart, ShoppingBag } from 'lucide-react';

export default function ClothingPage() {

    const newProducts = [
        {
            id: 1,
            name: "Premium Cotton Tee",
            price: 29.99,
            originalPrice: 39.99,
            image: "assests/dummy01.jpg",
            isNew: true,
            category: "Tops"
        },
        {
            id: 2,
            name: "Casual Denim Jacket",
            price: 89.99,
            image: "assests/dummy02.jpg",
            isNew: true,
            category: "Outerwear"
        },
        {
            id: 3,
            name: "Comfort Fit Joggers",
            price: 49.99,
            image: "assests/dummy04.jpg",
            isNew: true,
            category: "Bottoms"
        },
        {
            id: 4,
            name: "Vintage Graphic Hoodie",
            price: 69.99,
            image: "assests/dummy05.jpg",
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
            {/* Featured Collections Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* New Products Grid */}
                <div>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl md:text-3xl font-light text-gray-900 ">
                            CLOTHIN
                        </h2>
                        {/* later will be needs this view all links */}
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