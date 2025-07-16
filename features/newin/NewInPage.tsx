'use client';

export default function NewInPage() {
    return (
        <div className="new-in-page">
            <h1 className="text-3xl font-bold text-center my-8">New In</h1>
            <p className="text-center text-gray-600 mb-8">Discover the latest arrivals in our collection.</p>
            {/* Add your new items or components here */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {/* Example item */}
                <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <img src="/assets/new-item.jpg" alt="New Item" className="w-full h-auto rounded-t-lg" />
                    <h2 className="text-xl font-semibold mt-4">New Item Title</h2>
                    <p className="text-gray-500 mt-2">$49.99</p>
                </div>
                {/* Repeat for more items */}
            </div>
        </div>
    );
}