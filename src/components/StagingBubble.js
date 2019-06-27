import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";

export default class StagingBubble extends React.Component {


    render() {
        return (
            <div className="center-content">
                <a><FontAwesomeIcon icon={faExclamationTriangle}/> You are viewing the staging area <FontAwesomeIcon icon={faExclamationTriangle}/></a>
                <br />
                <a className="btn systemManagerButton" href="https://systemmanager.io">Looking for systemmanager.io?</a>
            </div>
        )
    }
}
