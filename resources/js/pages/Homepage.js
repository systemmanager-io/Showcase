import * as React from 'react'
import {Button} from "reactstrap";
import Slider from "react-slick";

export default class Homepage extends React.Component {

    render() {

        let settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '40px',
        };

        return (
            <div>
                <h1 className="align-content-center">SystemManager</h1>
                <h5 className="align-content-center">The best solution to manage your VPSse and Dedicated Boxes</h5>
                <Button>Demo</Button>
                <Button>Get started</Button>

                {/*Start of Description*/}

                <h2>SystemManager</h2>
                <p>SystemManager is a software solution to monitor your dedicated boxes and VPSes on the go. <br/>
                    By using PHP, NodeJS, Java and Swift we built a WebPanel and a APP to monitor your VPSes<br/>
                    SystemManager is completely customizable to suit your needs. You can turn off features you don't
                    need.<br/>
                </p>

                {/*Start of why systemmanager*/}
                <h2>Why SystemManager</h2>
                {/*A few Screenshots*/}
                <h2>Screenshots</h2>
                <div>
                    <Slider {...settings}>
                        <div>
                            <img src="http://placekitten.com/g/400/200"/>
                        </div>
                        <div>
                            <img src="http://placekitten.com/g/400/200"/>
                        </div>
                        <div>
                            <img src="http://placekitten.com/g/400/200"/>
                        </div>
                        <div>
                            <img src="http://placekitten.com/g/400/200"/>
                        </div>
                    </Slider>
                </div>
                {/*Get Started and more thingies*/}
                <h2>Get Started</h2>
            </div>
        )
    }
}
