import * as React from 'react'
import {Button} from "reactstrap";
import Slider from "react-slick";

export default class Homepage extends React.Component {

    render() {

        let settings = {
            className: "screenshot",
            centerMode: true,
            infinite: true,
            // centerPadding: "50px",
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 500,
            dots: true,
        };

        return (
            <div className="center-content">
                <div className="showcase-padding">
                    {/*Start of Description*/}

                    <h2>Goal of SystemManager</h2>
                    <p>SystemManager is a software solution to monitor your dedicated boxes and VPSes on the go. <br/>
                        By using PHP, NodeJS, Java and Swift we built a WebPanel and a APP to monitor your VPSes<br/>
                        SystemManager is completely customizable to suit your needs. You can turn off features you don't
                        need.<br/>
                    </p>
                </div>
                {/*Start of why systemmanager*/}
                <div className="showcase showcase-padding">
                    <h2>Why SystemManager</h2>
                </div>
                {/*A few Screenshots*/}
                <div className="showcase-padding">
                    <h2>Screenshots</h2>
                    <a>Here you can see some screenshots of SystemManager</a>
                    <div>
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
                                <img src="https://via.placeholder.com/600x400"/>
                            </div>
                            <div>
                                <img src="https://via.placeholder.com/600x400"/>
                            </div>
                            <div>
                                <img src="https://via.placeholder.com/600x400"/>
                            </div>
                            <div>
                                <img src="https://via.placeholder.com/600x400"/>
                            </div>
                            <div>
                                <img src="https://via.placeholder.com/600x400"/>
                            </div>
                            <div>
                                <img src="https://via.placeholder.com/600x400"/>
                            </div>
                            <div>
                                <img src="https://via.placeholder.com/600x400"/>
                            </div>
                            <div>
                                <img src="https://via.placeholder.com/600x400"/>
                            </div>
                            <div>
                                <img src="https://via.placeholder.com/600x400"/>
                            </div>
                            <div>
                                <img src="https://via.placeholder.com/600x400"/>
                            </div>
                        </Slider>
                    </div>
                </div>
                {/*Get Started and more thingies*/}
                <div className="showcase showcase-padding">
                    <h2>Get Started</h2>
                </div>
            </div>
        )
    }
}
