'use client';

import FooterPage from "@/components/footer/FooterPage";
import Header from "@/components/header/Header";
import MainHeader from "@/components/navigation/Navigation";
import SliderComponent from "@/components/slider/SliderComponent";
import NewInPage from "@/features/newin/NewInPage";
import { ArrowRight, RefreshCw, Shield, Truck } from 'lucide-react';
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



    const features = [
        {
            icon: Truck,
            title: "Free Shipping",
            description: "Free delivery on orders over 50,000 MMK"
        },
        {
            icon: Shield,
            title: "Quality Guarantee",
            description: "Premium materials with 30-day warranty"
        },
        {
            icon: RefreshCw,
            title: "Easy Returns",
            description: "Hassle-free returns within 7 days"
        }
    ];




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
                <section className="w-full h-screen max-h-[800px] overflow-hidden relative">
                    <div className="w-full h-full">
                        <SliderComponent />
                    </div>

                    {/* Hero Overlay Content */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <div className={`text-center text-white transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}>
                            <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-wide">
                                NOAH CITY
                            </h1>
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

                {/* Features Section */}
                <section className="w-full py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <feature.icon className="w-8 h-8 text-gray-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



                {/* New In Section */}
                <section id="new" className="w-full bg-white">
                    <div className="w-full max-w-7xl mx-auto">
                        <NewInPage />
                    </div>
                </section>

                {/* Customer Testimonials */}



                {/* Instagram Feed Preview */}
                {/* <section className="w-full py-16 bg-white">
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
                </section> */}
            </main>

            <FooterPage />

        </div>
    );
}