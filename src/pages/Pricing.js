import * as React from 'react'
import {Card, CardBody} from "reactstrap";
import SystemManagerShowcaseTopBar from "../components/TopBar";
import {Fragment} from "react";


export default class Pricing extends React.Component {

    render() {
        return (
            <Fragment>
                <SystemManagerShowcaseTopBar/>
                <div>
                    <div className="container">
                        <br/>
                        <div className="row">
                            <div className="col-sm-12 col-12 col-md-12">
                                <Card>
                                    <CardBody className="center-content">
                                        <h1>CORE</h1>
                                        <h3>Free</h3>
                                        <hr/>
                                        <h5>--- In the "box" ---</h5>
                                        <li>Monitoring of Portable Devices</li>
                                        <li>Monitoring of Servers</li>
                                        <li>Status changes via mail</li>
                                        <li>Status changes via app</li>
                                        <li>...</li>
                                        <li>...</li>
                                        <li>...</li>
                                        <li>Basically everything the app has.</li>
                                    </CardBody>
                                </Card>
                                <br/>
                            </div>
                            <div className="col-sm-12 col-12 col-md-6">
                                <Card>
                                    <CardBody className="center-content">
                                        <h1>LITE</h1>
                                        <h3>€50</h3>
                                        <hr/>
                                        <h1>PACKAGE COMING SOON</h1>
                                        <h5>--- In the "box" ---</h5>
                                        <li>Everything that CORE Has</li>

                                    </CardBody>
                                </Card>
                                <br/>
                            </div>
                            <div className="col-sm-12 col-12 col-md-6">
                                <Card>
                                    <CardBody className="center-content">
                                        <h1>PRO</h1>
                                        <h3>€100</h3>
                                        <hr/>
                                        <h1>PACKAGE COMING SOON</h1>
                                        <h5>--- In the "box" ---</h5>
                                        <li>Everything that LITE Has</li>


                                    </CardBody>
                                </Card>
                            </div>
                            {/*<div className="col-md-4">*/}
                            {/*    <Card>*/}
                            {/*        <CardBody className="center-content">*/}
                            {/*            <h1>Ultimate</h1>*/}
                            {/*            <h3>€250</h3><h5>once off</h5>*/}
                            {/*            <hr/>*/}
                            {/*        </CardBody>*/}
                            {/*    </Card>*/}
                            {/*</div>*/}


                        </div>
                        <br/>
                    </div>
                </div>
            </Fragment>
        )
    }
}
