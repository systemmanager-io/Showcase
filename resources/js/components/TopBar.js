import * as React from "react"
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

export default class SystemManagerShowcaseTopBar extends React.Component {
    render() {

        console.log(location.pathname)

        return (
            <div>
                <div className="center-content showcase showcase-padding">
                    <h1 className="align-content-center">SystemManager</h1>
                    <h5 className="align-content-center">The best solution to manage your VPSes and Dedicated Boxes</h5>
                    <Link hidden={location.pathname !== "/" ? true : false} to="/demo"><Button className="top-buttons">Demo</Button></Link>
                    <Link hidden={location.pathname !== "/" ? true : false} to="/getstarted"><Button className="top-buttons">Get started</Button></Link>
                </div>
            </div>
        )
    }
}
