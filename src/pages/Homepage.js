import * as React from 'react'
import SystemManagerShowcaseCarousel from "../components/Carousel";
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
                <div className="text-center">
                    <div className="showcase-padding">
                        {/*Start of Description*/}

                        <h2 className="text-3xl">Goal of SystemManager</h2>
                        <p>SystemManager is a software solution to monitor your dedicated boxes and VPSes on the
                            go. <br/>
                            By using PHP, NodeJS, Java and Swift we built a WebPanel, Android/iOS App and an
                            Cross-platform desktop app to
                            get status notifications and monitor your Servers<br/>
                            SystemManager is completely customizable to suit your needs. You can turn off features you
                            don't need.<br/>
                        </p>

                        <img onClick={this.openImageDialog} alt="Screenshot of SystemManager"
                             className="w-1/2" title="Screenshot Systemmanager"
                             src={panelUrl + "/images/image.png"}/>
                    </div>
                    {/*Start of why systemmanager*/}
                    <div className="showcase showcase-padding">
                        <h2 className="text-3xl">Why SystemManager</h2>
                        <p>Why you should choose SystemManager</p>
                        <br/>

                        <HighlightedFeatures/>

                    </div>
                    {/*A few Screenshots*/}
                    <div className="showcase-padding">
                        <h2 className="text-3xl">Screenshots</h2>
                        <p>Here you can see some screenshots of SystemManager</p>
                        {/*<div className="container">*/}
                        <SystemManagerShowcaseCarousel/>
                        {/*</div>*/}
                    </div>
                    {/*Get Started and more thingies*/}
                    <div className="showcase showcase-padding">
                        <h2 className="text-3xl">Get Started</h2>
                        <p>Ready to manage your systems?</p>
                        <Link title="Go to the demo" to="/demo"
                              className="btn systemManagerButton top-buttons">Demo</Link>
                        <Link title="Go to the documentation " to="/documentation/getstarted"
                              className="btn systemManagerButton top-buttons">Get
                            started</Link>
                        <Link title="About the project " to="/documentation/about"
                              className="btn systemManagerButton top-buttons">About
                            The Project</Link>
                    </div>
                </div>
            </Fragment>
        )
    }
}
