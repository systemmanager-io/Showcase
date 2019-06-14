import * as React from 'react'
import {Button, Card} from "reactstrap";
import Slider from "react-slick";
import SystemManagerShowcaseCarousel from "../components/Carousel";
import CardBody from "reactstrap/es/CardBody";
import {Link} from "react-router-dom";

export default class Homepage extends React.Component {

    render() {

        return (
            <div className="center-content">
                <div className="showcase-padding">
                    <div className="container">
                        {/*Start of Description*/}

                        <h2>Goal of SystemManager</h2>
                        <p>SystemManager is a software solution to monitor your dedicated boxes and VPSes on the
                            go. <br/>
                            By using PHP, NodeJS, Java and Swift we built a WebPanel and a Android/iOS App to get status
                            notifications and monitor your Servers<br/>
                            SystemManager is completely customizable to suit your needs. You can turn off features you
                            don't
                            need.<br/>
                        </p>

                        <img className="col-sm-12 col-md-9 col-9 col-lg-12" title="Screenshot Systemmanager"
                             src="http://localhost:8000/images/image.png"/>
                    </div>
                </div>
                {/*Start of why systemmanager*/}
                <div className="showcase showcase-padding">
                    <h2>Why SystemManager</h2>
                    <p>Why should you choose SystemManager</p>
                    <br/>

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-4 col-lg-4">
                                <Card>
                                    <CardBody>TEST</CardBody>
                                </Card>
                                <br/>
                            </div>
                            <div className="col-sm-12 col-md-6 col-4 col-lg-4">
                                <Card>
                                    <CardBody>TEST</CardBody>
                                </Card>
                                <br/>
                            </div>
                            <div className="col-sm-12 col-md-6 col-4 col-lg-4">
                                <Card>
                                    <CardBody>TEST</CardBody>
                                </Card>
                                <br/>
                            </div>
                            <div className="col-sm-12 col-md-6 col-4 col-lg-4">
                                <Card>
                                    <CardBody>TEST</CardBody>
                                </Card>
                                <br/>
                            </div>
                            <div className="col-sm-12 col-md-6 col-4 col-lg-4">
                                <Card>
                                    <CardBody>TEST</CardBody>
                                </Card>
                                <br/>
                            </div>
                            <div className="col-sm-12 col-md-6 col-4 col-lg-4">
                                <Card>
                                    <CardBody>TEST</CardBody>
                                </Card>
                                <br/>
                            </div>
                        </div>
                    </div>

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
                        <Link to="/getstarted"><Button className="top-buttons">Get started!</Button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
