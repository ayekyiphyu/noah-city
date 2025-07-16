'use client';

import { ArrowRight } from "lucide-react";

export default function CategoryPage() {
    // Sample data for featured sections
    const featuredCategories = [
        {
            id: 1,
            title: "Bottom Wear",
            description: "Comfortable pants and shorts for all occasions",
            image: "/images/bottom-wear.jpg",
            itemCount: "25+ Items",
            href: "#clothing/bottom"
        },
        {
            id: 2,
            title: "Outer Wear",
            description: "Stylish jackets and coats for every season",
            image: "/images/outer-wear.jpg",
            itemCount: "18+ Items",
            href: "#clothing/outer"
        },
        {
            id: 3,
            title: "Family Sets",
            description: "Matching outfits for the whole family",
            image: "/images/family-sets.jpg",
            itemCount: "12+ Items",
            href: "#clothing/family-set"
        }
    ];



    function scrollToSection(href: string): void {
        throw new Error("Function not implemented.");
    }

    return (
        < section id="featured" className="w-full py-16 bg-gray-50" >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-light mb-4">
                        Featured Categories
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our carefully curated collections designed for every member of your family
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredCategories.map((category) => (
                        <div
                            key={category.id}
                            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                            onClick={() => scrollToSection(category.href)}
                        >
                            <div className="aspect-[4/5] bg-gray-200 overflow-hidden">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        target.parentElement!.innerHTML = `
                                                    <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                                                        <div class="text-gray-400 text-center">
                                                            <div class="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-lg"></div>
                                                            <p class="text-lg font-medium">${category.title}</p>
                                                        </div>
                                                    </div>
                                                `;
                                    }}
                                />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs font-medium mb-2">
                                    {category.itemCount}
                                </span>
                                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                                <p className="text-sm text-gray-200 mb-4">{category.description}</p>
                                <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform duration-300">
                                    Shop Now
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >

    )
}