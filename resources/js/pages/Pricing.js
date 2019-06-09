import * as React from 'react'
import {Button, Card, CardBody} from "reactstrap";

export default class Pricing extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <br/>
                    <div className="row">
                        <div className="col-md-12">
                            <Card>
                                <CardBody className="center-content">
                                    <h1>OpenSource</h1>
                                    <h3>FREE</h3>
                                    <hr/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a>
                                </CardBody>
                            </Card>
                            <br/>
                        </div>
                        <div className="col-md-4">
                            <Card>
                                <CardBody className="center-content">
                                    <h1>Lite</h1>
                                    <h3>€50</h3>
                                    <h5>once off</h5>
                                    <hr/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a><br/>
                                    <a>Test</a>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card>
                                <CardBody className="center-content">
                                    <h1>Pro</h1>
                                    <h3>€100</h3><h5>once off</h5>
                                    <hr/>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card>
                                <CardBody className="center-content">
                                    <h1>Ultimate</h1>
                                    <h3>€250</h3><h5>once off</h5>
                                    <hr/>
                                </CardBody>
                            </Card>
                        </div>


                    </div>
                    <br/>
                </div>
            </div>
        )
    }
}
