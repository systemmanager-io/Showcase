import * as React from 'react'
import {Button} from "reactstrap";

export default class Demo extends React.Component {
    render() {
        return(
            <div>
                <div className="showcase showcase-padding">
                    <h1 className="align-content-center">SystemManager</h1>
                    <h5 className="align-content-center">The best solution to manage your VPSse and Dedicated Boxes</h5>
                    <Button aria-label="Demo">Demo</Button>
                    <Button aria-label="Get Started">Get started</Button>
                </div>
            </div>
        )
    }
}
