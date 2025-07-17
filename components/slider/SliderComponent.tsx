'use client';

import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function SliderComponent() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div>
            <SlickSlider {...settings}>
                <div className='slider-01'>
                    <img src="assests/dummy06.jpg" alt="Slider 1" className="w-full h-auto" />
                </div>
                <div className='slider-02'>
                    <img src="assests/dummy04.jpg" alt="Slider 2" className="w-full h-auto" />
                </div>
                <div className='slider-03'>
                    <img src="assests/dummy05.jpg" alt="Slider 3" className="w-full h-auto" />
                </div>
            </SlickSlider>
        </div>
    );
}