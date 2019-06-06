import * as React from 'react'
import {Button} from "reactstrap";
import Slider from "react-slick";

export default class Homepage extends React.Component {

    render() {

        let settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500,
            arrows: false,
            dots: true,
        };

        return (
            <div className="center-content">
                <div className="showcase showcase-padding">
                    <h1 className="align-content-center">SystemManager</h1>
                    <h5 className="align-content-center">The best solution to manage your VPSse and Dedicated Boxes</h5>
                    <Button>Demo</Button>
                    <Button>Get started</Button>
                </div>
                <div className="showcase-padding">
                    {/*Start of Description*/}

                    <h2>SystemManager</h2>
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
                                <img src="https://via.placeholder.com/500x100"/>
                            </div>
                            <div>
                                <img src="https://via.placeholder.com/500x100"/>
                            </div>
                            <div>
                                <img src="https://via.placeholder.com/500x100"/>
                            </div>
                            <div>
                                <img src="https://via.placeholder.com/500x100"/>
                            </div>
                            <div>
                                <img src="https://via.placeholder.com/500x100"/>
                            </div>
                            <div>
                                <img src="https://via.placeholder.com/500x100"/>
                            </div>
                        </Slider>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                {/*Get Started and more thingies*/}
                <div className="showcase showcase-padding">
                    <h2>Get Started</h2>
                </div>
            </div>
        )
    }
}
