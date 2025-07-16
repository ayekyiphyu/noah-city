'use client';

import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function SliderComponent() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <SlickSlider {...settings}>
                <div className='slider-01'>
                    <img src="assests/slider-img01.jpg" alt="Slider 1" className="w-full h-auto" />
                </div>
                <div className='slider-02'>
                    <img src="assests/slider-img02.jpg" alt="Slider 2" className="w-full h-auto" />
                </div>
                <div className='slider-03'>
                    <img src="assests/slider-img03.jpg" alt="Slider 3" className="w-full h-auto" />
                </div>
            </SlickSlider>
        </div>
    );
}