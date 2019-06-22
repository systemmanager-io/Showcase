import * as React from "react";
import FormText from "reactstrap/es/FormText";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";

export default class DevelopmentBubble extends React.Component {


    render() {
        return (
            <div className="center-content stagingBubble">
                <a><FontAwesomeIcon icon={faExclamationTriangle}/> You are viewing the development area <FontAwesomeIcon icon={faExclamationTriangle}/></a><br />
                <a style={{fontSize: "0.75rem"}}>You can find stuff here you will not see on systemmanager.io</a>
                <br/>
                <a className="btn systemManagerButton" href="https://systemmanager.io">Looking for systemmanager.io?</a>

            </div>
        )
    }
}