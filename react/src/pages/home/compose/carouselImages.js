import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';

function ContentImgae() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100 h-100"
                    src="https://hanhancat0216home.files.wordpress.com/2019/06/001.jpg"
                    alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100 h-50"
                    src="https://s1.1zoom.me/b5050/601/Cats_Scottish_Fold_Eyes_Glance_545000_1920x1080.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100 h-50"
                    src="https://hanhancat0216home.files.wordpress.com/2019/06/001.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}
export default ContentImgae