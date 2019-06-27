import * as React from "react";
import FormText from "reactstrap/es/FormText";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";

export default class DevelopmentBubble extends React.Component {


    render() {
        return (
            <div className="center-content">
                <div className="row">
                    <div className="col-3">
                        <FontAwesomeIcon className="productWip" icon={faExclamationTriangle}/>
                    
                    </div>
                    <div className="col-9">
                        <a>This is an unreleased product!</a><br/>
                        <a>Things are subjected to change!</a>
                        
                    </div>
                </div>
            </div>
        )
    }
}
