import * as React from 'react'
import {Button, Card, CardBody} from "reactstrap";

export default class Demo extends React.Component {
    render() {
        return(
            <div  className="container center-content showcase-padding">
                <h2>Not convinced yet? Use our demo to see what it can!</h2>
                <hr />
                <div className="col-3">
                    <Card>
                        <CardBody>
                            <h5>Demo Login</h5>


                            <Button>Enter the demo!</Button>

                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}
