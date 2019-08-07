import * as React from "react";
import {Fragment} from "react";

export default class Panel extends React.Component {

    render() {
        return (
            <Fragment>

                <h1>Getting Started</h1>
                <h2>Required Extentions</h2>
                <li>Picking server OS</li>
                <li>Dependencies</li>
                <li>Download Files</li>
                <li>Installation</li>
                <li>Queue worker</li>

                <h1>Webserver Config</h1>
                <li>Nginx</li>
                <li>Apache</li>

                <h1>Upgrading</h1>
                <li>Maintenance Mode</li>
                <li>Restarting Queue Worker</li>

                <h1>Environment Config</h1>
                <li></li>

                <h1>Troubleshooting</h1>
                <li></li>
            </Fragment>
        )
    }

}
