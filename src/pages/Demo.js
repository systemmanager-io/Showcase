import * as React from 'react'
import {Card, CardBody} from "reactstrap";
import {Fragment} from "react";
import SystemManagerShowcaseTopBar from "../components/TopBar";


export default class Demo extends React.Component {
    render() {
        return (
            <Fragment>
                <SystemManagerShowcaseTopBar/>
                <div className="center-content showcase-padding">
                    <h2>Not convinced yet? Use our demo to see what it can!</h2>
                    <h5>This demo has certain features disabled and stuff hidden</h5>
                    <hr/>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                <Card>
                                    <CardBody>
                                        <h3>Demo Status Page</h3>
                                        <hr/>


                                        <a href="https://status.demo.systemmanager.io"
                                           title="See the demo status page"
                                           className="btn systemManagerButton systemManagerButton-border">Look at the
                                            status page</a>

                                    </CardBody>
                                </Card>
                                <br/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                <Card>
                                    <CardBody>
                                        <h3>Demo User Login</h3>
                                        <hr/>
                                        The account credentials for user "user"
                                        <br/>
                                        <br/>
                                        <div className="demoCredentials">
                                            User: user<br/>
                                            Password: password<br/>
                                        </div>
                                        <br/>
                                        <a href="https://demo.systemmanager.io"
                                           title="See the demo panel as a user"
                                           className="btn systemManagerButton systemManagerButton-border">Enter the demo
                                            as a user</a>

                                    </CardBody>
                                </Card>
                                <br/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                <Card>
                                    <CardBody>
                                        <h3>Demo Admin Login</h3>
                                        <hr/>
                                        The account credentials for user "admin"
                                        <br/>
                                        <br/>
                                        <div className="demoCredentials">
                                            User: admin<br/>
                                            Password: password<br/>
                                        </div>
                                        <br/>
                                        <a href="https://demo.systemmanager.io"
                                           title="See the demo panel as a admin"
                                           className="btn systemManagerButton systemManagerButton-border">Enter the demo
                                            as an admin</a>

                                    </CardBody>
                                </Card>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
