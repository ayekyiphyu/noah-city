'use client';

import FooterPage from "@/components/footer/FooterPage";
import Header from "@/components/header/Header";
import MainHeader from "@/components/navigation/Navigation";
import SliderComponent from "@/components/slider/SliderComponent";
import AccessoriesPage from "@/features/accessories/accessoriesPage";
import NewInPage from "@/features/newin/NewInPage";
import ShippingPage from "@/features/shipping/ShippingPage";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from 'react';

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);


    const scrollToSection = (sectionId: string) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [fb, setFb] = useState<any>(null)

    return (
        <div>
            {/* Header Section - Fixed positioning */}
            <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
                <Header />
                <MainHeader />
            </header>

            {/* Main Content */}
            <main className="w-full">
                {/* Hero Slider Section */}
                <section className="w-full  max-h-[800px] overflow-hidden relative">
                    <div className="w-full">
                        <SliderComponent />
                    </div>

                    {/* Hero Overlay Content */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <div className={`text-center text-white transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}>

                            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto px-4">
                                Discover premium lifestyle clothing that combines comfort, style, and quality for the modern family
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                                <button
                                    onClick={() => scrollToSection('#new')}
                                    className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
                                >
                                    Shop New Collection
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => scrollToSection('#featured')}
                                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200"
                                >
                                    Explore Categories
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <ShippingPage />
                <section id="new" className="w-full bg-white">
                    <div className="w-full max-w-7xl mx-auto">
                        <NewInPage />
                    </div>
                </section>

                <section id="accessories" className="w-full bg-white py-16">
                    <AccessoriesPage />
                </section>
            </main>
            <FooterPage />
        </div>
    );
}