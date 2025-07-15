'use client';

import Header from "@/components/header/Header";
import MainHeader from "@/components/header/MainHeader";
import SliderComponent from "@/components/slider/SliderComponent";

export default function Home() {
    return (
        <div>
            <Header />
            <MainHeader />
            <div className="bg-gray-100 ">
                <SliderComponent />
            </div>
        </div>

    );
}