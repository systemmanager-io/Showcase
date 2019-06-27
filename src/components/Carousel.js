import * as React from "react";
import Slider from "react-slick/lib";
import {panelUrl} from "../config"
import "./../sass/slick.scss"

export default class SystemManagerShowcaseCarousel extends React.Component {
    render() {
        let settings = {
            className: "showcase-screenshots",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500,
            dots: true,
            autoPlay: true,
            autoplaySpeed: 10000,

            responsive: [
                {
                    breakpoint: 768,
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
                <div>
                    <img title="Screenshot Systemmanager"
                         alt="Screenshot serverpage"
                         src={panelUrl + "/images/image.png"}/>
                </div>
                <div>
                    <img title="Screenshot Systemmanager"
                         alt="Screenshot serverpage"
                         src={panelUrl + "/images/image.png"}/>
                </div>
                <div>
                    <img title="Screenshot Systemmanager"
                         alt="Screenshot serverpage"
                         src={panelUrl + "/images/image.png"}/>
                </div>
                <div>
                    <img title="Screenshot Systemmanager"
                         alt="Screenshot serverpage"
                         src={panelUrl + "/images/image.png"}/>
                </div>
                <div>
                    <img title="Screenshot Systemmanager"
                         alt="Screenshot serverpage"
                         src={panelUrl + "/images/image.png"}/>
                </div>
            </Slider>
        )
    }
}
