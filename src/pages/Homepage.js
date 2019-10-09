import * as React from 'react';
import {Link} from "react-router-dom";
import HighlightedFeatures from "../components/HighlightedFeatures";
import {Fragment} from "react";

export default class Homepage extends React.Component {

    openImageDialog() {
        console.log("yeet");
    }

    render() {

        return (
            <Fragment>
                <div className="text-center ">
                    <div className="showcase-padding object-center items-center justify-center content-center">
                        {/*Start of Description*/}

                        <h2 className="text-3xl">Goal of SystemManager</h2>
                        <p>SystemManager is a software solution to monitor your dedicated boxes and VPSes on the
                            go. <br/>
                            By using NodeJS, GraphQL, Java, C++ (or C#), Unity and Swift we built a WebPanel, VR App, Android/iOS App and desktop apps to
                            get status notifications and monitor your Servers<br/>
                            SystemManager is completely customizable to suit your needs. You can turn off features you
                            don't need.<br/>
                        </p>
                        {/*<img onClick={this.openImage/ialog} alt="Screenshot of SystemManager"*/}
                        {/*     // className="w-auto h-64" title="Screenshot Systemmanager"*/}
                        {/*     // src={panelUrl + "/images/image.png"}/>*/}
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
                        {/*<SystemManagerShowcaseCarousel/>*/}
                        {/*</div>*/}
                    </div>
                    {/*Get Started and more thingies*/}
                    <div className="showcase showcase-padding">
                        <h2 className="text-3xl">Get Started</h2>
                        <p>Ready to manage your systems?</p>
                        <div className="p-4">
                            <Link title="Go to the demo" to="/demo"
                                  className="bg-transparent top-buttons py-3 px-6 border text-2xl hover:border-transparent rounded">Demo</Link>
                            <Link title="Go to the documentation " to="/documentation/getstarted"
                                  className="bg-transparent top-buttons py-3 px-6 border text-2xl hover:border-transparent rounded">Get
                                started</Link>
                            <Link title="About the project " to="/documentation/about"
                                  className="bg-transparent top-buttons py-3 px-6 border text-2xl hover:border-transparent rounded">About
                                The Project</Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
