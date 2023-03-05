"use client";

import * as React from "react"

export default class SystemManagerShowcaseTopBar extends React.Component {
    render() {

        return (
            <div>
                <div className="align-content-center bg-primary text-white bg-primary py-16 px-8">
                    <h1 className="jetbrains lg:text-6xl md:text-6xl font-bold text-4xl">SystemManager</h1>
                    <h1 className="jetbrains font-bold text-sm">
                        <span className={"font-light"}>Includes</span> FleetManager for Kubernetes
                    </h1>


                    <div className={"hidden"}>
                        <h2 className="text-xl lg:text-2xl mt-4">Server Management and Monitoring</h2>
                        <h5 className="text-1xl">The all-in-one server management system!</h5>
                    </div>
                    <div className="hidden mt-6 flex flex-wrap">
                        <div className={"mb-5 lg:mb-0"}>
                            <a title="Get started"
                               href="https://docs.systemmanager.io/"
                               className="bg-transparent top-buttons whitespace-no-wrap font-light py-2 px-4 rounded border sm:rounded-r-none text-2xl hover:border-transparent">Documentation</a>
                        </div>
                        <div>
                            <a title="Get started"
                               href="https://systemmanager.cloud/"
                               className="bg-transparent top-buttons whitespace-no-wrap font-light py-2 px-4 rounded border sm:border-l-0 sm:rounded-l-none text-2xl hover:border-transparent">SystemManager
                                Cloud</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
