import * as React from "react"
import {Link} from "react-router-dom";

export default class SystemManagerShowcaseTopBar extends React.Component {
    render() {

        return (
            <div>
                <div className="align-content-center h-screen showcase-background showcase showcase-padding">
                    <h1 className="lg:text-6xl md:text-6xl text-4xl">SystemManager</h1>
                    <h2 className="text-xl lg:text-2xl">Monitoring Software</h2>
                    <h5 className="text-1xl">The all in one server management system!</h5>
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
