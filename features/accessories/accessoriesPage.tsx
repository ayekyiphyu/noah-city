'use client';

import { Heart, Instagram } from "lucide-react";

export default function AccessoriesPage() {
    return (

        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-light mb-4">
                        Follow Us on Instagram
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Get inspired by our latest styles and customer photos
                    </p>
                    <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                        <Instagram className="w-5 h-5" />
                        @noahcitylifestyle
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <div
                            key={item}
                            className="aspect-square bg-gray-200 rounded-lg overflow-hidden group cursor-pointer"
                        >
                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                <Heart className="w-8 h-8 text-gray-400 group-hover:text-pink-500 transition-colors duration-300" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}