import * as React from "react"
import {Link} from "react-router-dom";

export default class SystemManagerShowcaseTopBar extends React.Component {
    render() {

        return (
            <div>
                <div className="center-content showcase showcase-padding">
                    <h1 className="text-4xl align-content-center">SystemManager Monitoring Software</h1>
                    <h5 className="text-xl align-content-center">The all in one server management system!</h5>
                    <div hidden={window.location.pathname !== "/"}>
                        <br/>
                        <Link title="Go to the demo" to="/demo"
                              className="bg-transparent top-buttons py-3 px-6 border text-2xl hover:border-transparent rounded">Demo</Link>
                        <Link title="Get started"
                              to="/documentation/getstarted"
                              className="bg-transparent top-buttons py-3 px-6 border text-2xl hover:border-transparent rounded">Get
                            started</Link>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}
