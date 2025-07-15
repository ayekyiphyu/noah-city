'use client';

import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function Slider() {
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
                <div>This is the Slider Component.</div>
                <div>Slider1</div>
                <div>Slider2</div>
                <div>Slider3</div>
            </SlickSlider>
        </div>
    );
}