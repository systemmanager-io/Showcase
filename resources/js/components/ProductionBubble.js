import * as React from "react";
import FormText from "reactstrap/es/FormText";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";

export default class DevelopmentBubble extends React.Component {


    render() {
        return (
            <div className="center-content stagingBubble">
                <br/>
                <FontAwesomeIcon className="productWip" icon={faExclamationTriangle}/><br/><br/>
                <a>This product has not been released yet!</a><br/>
                <a>Things are subjected to change!</a>
            </div>
        )
    }
}
