import * as React from 'react'
import {Button, Card, CardBody} from "reactstrap";

export default class Demo extends React.Component {
    render() {
        return(
            <div className="center-content showcase-padding">
                <h2>Not convinced yet? Use our demo to see what it can!</h2>
                <h5>This demo has certain features disabled and stuff hidden</h5>
                <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-3 col-lg-4 col-xl-4">
                            <Card>
                                <CardBody>
                                    <h5>Demo Status Page</h5>


                                    <Button>Look at the status page</Button>

                                </CardBody>
                            </Card>
                            <br />
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-4 col-xl-4">
                            <Card>
                                <CardBody>
                                    <h5>Demo User Login</h5>


                                    <Button>Enter the demo as a user</Button>

                                </CardBody>
                            </Card>
                            <br />
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-4 col-xl-4">
                            <Card>
                                <CardBody>
                                    <h5>Demo Admin Login</h5>


                                    <Button>Enter the demo as an admin</Button>

                                </CardBody>
                            </Card>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
