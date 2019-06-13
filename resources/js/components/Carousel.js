import * as React from "react";
import Slider from "react-slick/lib";

export default class SystemManagerShowcaseCarousel extends React.Component {
    render() {
        let settings = {
            className: "screenshot",
            centerMode: true,
            infinite: true,
            // centerPadding: "50px",
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 8000,
            speed: 500,
            dots: true,
        };

        return (
            <Slider {...settings}>
                {/*<div>*/}
                {/*    <h3>1</h3>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <h3>2</h3>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <h3>3</h3>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <h3>4</h3>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <h3>5</h3>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <h3>6</h3>*/}
                {/*</div>*/}
                <div>
                    <img style={{width: "600px"}} src="http://localhost:8000/images/image.png"/>
                </div>
                <div>
                    <img style={{width: "600px"}} src="http://localhost:8000/images/image.png"/>
                </div>
                <div>
                    <img style={{width: "600px"}} src="http://localhost:8000/images/image.png"/>
                </div>
                <div>
                    <img style={{width: "600px"}} src="http://localhost:8000/images/image.png"/>
                </div>
                <div>
                    <img style={{width: "600px"}} src="http://localhost:8000/images/image.png"/>
                </div>
                <div>
                    <img style={{width: "600px"}} src="http://localhost:8000/images/image.png"/>
                </div>
                <div>
                    <img style={{width: "600px"}} src="http://localhost:8000/images/image.png"/>
                </div>
                <div>
                    <img style={{width: "600px"}} src="http://localhost:8000/images/image.png"/>
                </div>
            </Slider>
        )
    }
}
