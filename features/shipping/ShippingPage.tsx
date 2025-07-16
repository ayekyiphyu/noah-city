'use client';

import { RefreshCw, Shield, Truck } from "lucide-react";

export default function ShippingPage() {
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
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="text-center border-1 bg-secondary p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="w-16 h-16 common text-white rounded-full flex items-center justify-center mx-auto mb-4">
                                <feature.icon className="w-8 h-8 text-black-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>




    )
}