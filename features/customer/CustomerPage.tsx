'use client';

import { Star } from "lucide-react";

export default function CustomerPage() {

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            rating: 5,
            comment: "Amazing quality and fast delivery! Love the family matching sets.",
            avatar: "/images/avatar-1.jpg",
            location: "Yangon, Myanmar"
        },
        {
            id: 2,
            name: "Michael Chen",
            rating: 5,
            comment: "Great customer service and beautiful clothing designs.",
            avatar: "/images/avatar-2.jpg",
            location: "Mandalay, Myanmar"
        },
        {
            id: 3,
            name: "Emma Davis",
            rating: 5,
            comment: "The quality exceeded my expectations. Highly recommended!",
            avatar: "/images/avatar-3.jpg",
            location: "Naypyidaw, Myanmar"
        }
    ];

    return (

        <section className="w-full py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-light mb-4">
                        What Our Customers Say
                    </h2>
                    <p className="text-lg text-gray-600">
                        Real reviews from satisfied customers across Myanmar
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            target.parentElement!.innerHTML = `
                                                        <div class="w-full h-full bg-gray-300 rounded-full flex items-center justify-center">
                                                            <span class="text-gray-500 text-sm font-medium">${testimonial.name.charAt(0)}</span>
                                                        </div>
                                                    `;
                                        }}
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                                </div>
                            </div>

                            <div className="flex items-center mb-3">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                        </div>
                    ))}
                </div>


            </div>
        </section>





    )
}