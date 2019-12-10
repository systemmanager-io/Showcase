import * as React from "react"
import {Link} from "react-router-dom";
import {panelUrl} from "../config";

export default class SystemManagerShowcaseTopBar extends React.Component {
    render() {

        return (
            <div>
                <div className="align-content-center showcase-background showcase showcase-padding">
                    <h1 className="lg:text-6xl md:text-6xl text-4xl">SystemManager</h1>
                    <h2 className="text-xl lg:text-2xl">Monitoring Software</h2>
                    <h5 className="text-1xl">The all in one server management system!</h5>
                    <div className="mt-6">
                        <Link title="Go to the demo" to="/demo"
                              className="bg-transparent top-buttons py-3 px-6 border text-2xl hover:border-transparent rounded">Demo</Link>
                        <a title="Get started"
                              href="https://docs.systemmanager.io/"
                              className="bg-transparent top-buttons py-3 px-6 border text-2xl hover:border-transparent rounded">Documentation</a>
                    </div>
                    <br/>
                    {/*<img className="overflow-hidden lg:float-right bottom-0 align-bottom lg:w-8/12" src={window.location.href + "/images/dashboard.png"}/>*/}
                </div>
            </div>
        )
    }
}
