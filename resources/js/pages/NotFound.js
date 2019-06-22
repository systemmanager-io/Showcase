import * as React from 'react'
import SystemManagerShowcaseTopBar from "../components/TopBar";
import {Fragment} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSadTear} from "@fortawesome/free-regular-svg-icons";
import {Link} from "react-router-dom";

export default class NotFound extends React.Component {
    render() {
        return (
            <Fragment>
                <SystemManagerShowcaseTopBar/>

                <div className="center-content">
                    <div className="center-content">
                        <div className="showcase-padding">
                            <div className="container">
                                <h1><FontAwesomeIcon style={{fontSize: "5rem"}} icon={faSadTear}/></h1>
                                <h1 style={{fontSize: "2.5rem"}} >Error 404</h1>
                                <h5>The page you requested was not found</h5>
                                <Link to="/" className="btn systemManagerButton systemManagerButton-border">Go to the homepage</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
