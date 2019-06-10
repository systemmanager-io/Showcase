import * as React from 'react'
import {Button} from "reactstrap";
import Slider from "react-slick";
import SystemManagerShowcaseCarousel from "../components/Carousel";

export default class Homepage extends React.Component {

    render() {

        return (
            <div className="center-content">
                <div className="showcase-padding">
                    {/*Start of Description*/}

                    <h2>Goal of SystemManager</h2>
                    <p>SystemManager is a software solution to monitor your dedicated boxes and VPSes on the go. <br/>
                        By using PHP, NodeJS, Java and Swift we built a WebPanel and a Android/iOS App to get status notifications and monitor your Servers<br/>
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
                        <SystemManagerShowcaseCarousel/>
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
