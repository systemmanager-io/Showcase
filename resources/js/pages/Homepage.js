import * as React from 'react'
import {Button, Card} from "reactstrap";
import Slider from "react-slick";
import SystemManagerShowcaseCarousel from "../components/Carousel";
import CardBody from "reactstrap/es/CardBody";
import {Link} from "react-router-dom";
import {panelUrl} from "../config"
import HighlightedFeatures from "../components/HighlightedFeatures";
import {Fragment} from "react";
import SystemManagerShowcaseTopBar from "../components/TopBar";

export default class Homepage extends React.Component {

    openImageDialog() {
        console.log("yeet");
    }

    render() {

        return (
            <Fragment>
                <SystemManagerShowcaseTopBar/>
                <div className="center-content">
                    <div className="showcase-padding">
                        <div className="container">
                            {/*Start of Description*/}

                            <h2>Goal of SystemManager</h2>
                            <p>SystemManager is a software solution to monitor your dedicated boxes and VPSes on the
                                go. <br/>
                                By using PHP, NodeJS, Java and Swift we built a WebPanel,  Android/iOS App and an Cross-platform desktop app to
                                get status notifications and monitor your Servers<br/>
                                SystemManager is completely customizable to suit your needs. You can turn off features you don't need.<br/>
                            </p>

                            <img onClick={this.openImageDialog} className="col-sm-12 col-md-9 col-9 col-lg-12" title="Screenshot Systemmanager"
                                 src={panelUrl + "/images/image.png"}/>
                        </div>
                    </div>
                    {/*Start of why systemmanager*/}
                    <div className="showcase showcase-padding">
                        <h2>Why SystemManager</h2>
                        <p>Why you should choose SystemManager</p>
                        <br/>

                        <HighlightedFeatures/>

                    </div>
                    {/*A few Screenshots*/}
                    <div className="showcase-padding">
                        <h2>Screenshots</h2>
                        <a>Here you can see some screenshots of SystemManager</a>
                        {/*<div className="container">*/}
                        <SystemManagerShowcaseCarousel/>
                        {/*</div>*/}
                    </div>
                    {/*Get Started and more thingies*/}
                    <div className="showcase showcase-padding">
                        <div className="container">
                            <h2>Get Started</h2>
                            <a>Ready to manage your systems?</a>
                            <br/>
                            <Link to="/demo" className="btn systemManagerButton top-buttons">Demo</Link>
                            <Link to="/documentation/getstarted" className="btn systemManagerButton top-buttons">Get
                                started</Link>
                            <Link to="/documentation/about" className="btn systemManagerButton top-buttons">About
                                The Project</Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
