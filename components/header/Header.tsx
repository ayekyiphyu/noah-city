'use client';

import { useState, useEffect } from 'react';

interface HeaderStatus {
    id: number;
    title: string;
}

export default function Header() {
    const [headerStatuses, setHeaderStatuses] = useState<HeaderStatus[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHeaderStatuses = async () => {
            try {
                const response = await fetch('/api/header-status');
                const result = await response.json();
                
                if (result.success && result.data.length > 0) {
                    setHeaderStatuses(result.data);
                }
            } catch (error) {
                console.error('Error fetching header statuses:', error);
                // Fallback to default message
                setHeaderStatuses([{ id: 1, title: "FREE SHIPPING ON ORDERS OVER $200" }]);
            } finally {
                setLoading(false);
            }
        };

        fetchHeaderStatuses();
    }, []);

    // Rotate messages every 5 seconds
    useEffect(() => {
        if (headerStatuses.length > 1) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => 
                    (prevIndex + 1) % headerStatuses.length
                );
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [headerStatuses]);

    const currentStatus = headerStatuses[currentIndex]?.title || "FREE SHIPPING ON ORDERS OVER $200";

    return (
        <div className="primary text-white text-center py-2 text-sm font-light tracking-wide transition-opacity duration-500">
            {loading ? "Loading..." : currentStatus}
        </div>
    );
}