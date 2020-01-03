import * as React from 'react'
import {Fragment} from "react";
import * as Icons from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";


export default class Plugins extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="text-center showcase-padding">
                    <h2 className="text-6xl font-bold">Work in Progress</h2>
                    <h5 className="font-light"><Icons.FontAwesomeIcon className="font-light text-blue-700" icon={faInfoCircle}/> Plugins for SystemManager can be found here</h5>
                </div>
            </Fragment>
        )
    }
}
