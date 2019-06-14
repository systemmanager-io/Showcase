import * as React from "react";
import Slider from "react-slick/lib";

export default class SystemManagerShowcaseCarousel extends React.Component {
    render() {
        let settings = {
            className: "showcase-screenshots",
            centerMode: true,
            infinite: true,
            slidesToShow: 3,
            centerPadding: "50px",

            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 8000,
            speed: 500,
            dots: true,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        };

        return (
            <Slider {...settings}>
                {/*<div><h1>text</h1></div>*/}
                {/*<div><h1>text</h1></div>*/}
                {/*<div><h1>text</h1></div>*/}
                {/*<div><h1>text</h1></div>*/}
                {/*<div><h1>text</h1></div>*/}
                {/*<div><h1>text</h1></div>*/}
                <div>
                    <img title="Screenshot Systemmanager"
                         src="http://localhost:8000/images/image.png"/>
                </div>
                <div>
                    <img title="Screenshot Systemmanager"
                         src="http://localhost:8000/images/image.png"/>
                </div>
                <div>
                    <img title="Screenshot Systemmanager"
                         src="http://localhost:8000/images/image.png"/>
                </div>
                <div>
                    <img title="Screenshot Systemmanager"
                         src="http://localhost:8000/images/image.png"/>
                </div>
                <div>
                    <img title="Screenshot Systemmanager"
                         src="http://localhost:8000/images/image.png"/>
                </div>
                <div>
                    <img title="Screenshot Systemmanager"
                         src="http://localhost:8000/images/image.png"/>
                </div>
                <div>
                    <img title="Screenshot Systemmanager"
                         src="http://localhost:8000/images/image.png"/>
                </div>
            </Slider>
        )
    }
}
