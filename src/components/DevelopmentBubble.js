import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";

export default class DevelopmentBubble extends React.Component {


    render() {
        return (
            <div className="center-content">
                <span><FontAwesomeIcon icon={faExclamationTriangle}/> You are viewing the development area <FontAwesomeIcon icon={faExclamationTriangle}/></span>
                <br />
                <a className="btn systemManagerButton" href="https://systemmanager.io">Looking for systemmanager.io?</a>
            </div>
        )
    }
}
