import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";

export default class DevelopmentBubble extends React.Component {


    render() {
        return (
                <div className="row">
                    <div className="col-3">
                        <FontAwesomeIcon className="productWip" icon={faExclamationTriangle}/>
                    </div>
                    <div className="col-9">
                        <p>This is an unreleased product!<br/>
                        Things are subjected to change!</p>
                    </div>
                </div>
        )
    }
}
