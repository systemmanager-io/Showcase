import * as React from "react"
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

export default class SystemManagerShowcaseTopBar extends React.Component {
    render() {

        return (
            <div>
                <div className="center-content showcase showcase-padding">
                    <h1 className="align-content-center">SystemManager Monitoring Software</h1>
                    <h5 className="align-content-center">The all in one server management system!</h5>
                    <Link hidden={location.pathname !== "/" ? true : false} to="/demo" className="btn top-buttons">Demo</Link>
                    <Link hidden={location.pathname !== "/" ? true : false} to="/getstarted" className="btn top-buttons">Get started</Link>
                </div>
            </div>
        )
    }
}
