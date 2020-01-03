import * as React from "react"

export default class SystemManagerShowcaseTopBar extends React.Component {
    render() {

        return (
            <div>
                <div className="align-content-center showcase-background showcase showcase-padding">
                    <h1 className="lg:text-6xl md:text-6xl font-bold text-4xl">SystemManager</h1>
                    <h2 className="text-xl lg:text-2xl font-light">Monitoring Software</h2>
                    <h5 className="text-1xl font-light">The all in one server management system!</h5>
                    <div className="mt-6">
                        {/*<Link title="Go to the demo" to="/demo"*/}
                        {/*      className="bg-transparent top-buttons font-light py-3 px-6 border text-2xl hover:border-transparent rounded">Demo</Link>*/}
                        <a title="Get started"
                              href="https://docs.systemmanager.io/"
                              className="bg-transparent top-buttons font-light py-3 px-6 border text-2xl hover:border-transparent rounded">Documentation</a>
                    </div>
                    <br/>
                    {/*<img className="overflow-hidden lg:float-right bottom-0 align-bottom lg:w-8/12" src={window.location.href + "/images/dashboard.png"}/>*/}
                </div>
            </div>
        )
    }
}
