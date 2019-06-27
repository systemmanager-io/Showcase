import * as React from "react"
import {Link} from "react-router-dom";

export default class SystemManagerShowcaseTopBar extends React.Component {
    render() {

        return (
            <div>
                <div className="center-content showcase showcase-padding">
                    <h1 className="align-content-center">SystemManager Monitoring Software</h1>
                    <h5 className="align-content-center">The all in one server management system!</h5>
                    <Link title="Go to the demo" hidden={window.location.pathname !== "/" ? true : false} to="/demo" className="btn systemManagerButton top-buttons">Demo</Link>
                    <Link title="Get started" hidden={window.location.pathname !== "/" ? true : false} to="/documentation/getstarted" className="btn systemManagerButton top-buttons">Get started</Link>
                </div>
            </div>
        )
    }
}
