import * as React from 'react'
import {Fragment} from "react";
import SystemManagerShowcaseTopBar from "../components/TopBar";
import * as Icons from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";


export default class Demo extends React.Component {
    render() {
        return (
            <Fragment>
                <SystemManagerShowcaseTopBar/>
                <div className="text-center showcase-padding">
                    <h2 className="text-2xl">Not convinced yet? Use our demo to see what it can!</h2>
                    <h5><Icons.FontAwesomeIcon className="text-blue-700" icon={faInfoCircle}/> This demo has certain features disabled and stuff hidden</h5>
                    <p className="text-info"><Icons.FontAwesomeIcon className="text-blue-700" icon={faInfoCircle}/> The SystemManager demo will be reset per 10 minutes</p>
                    <hr/>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-6/12 lg:w-4/12">
                            <div className="bg-white rounded overflow-hidden shadow-lg lg:m-4">
                                <div className="px-6 py-4">
                                    <div className="text-black font-bold text-2xl mb-2">Demo Status Page</div>
                                    <p className="text-gray-700 text-base  p-4">
                                        <a href="https://status.demo.systemmanager.io"
                                           title="See the demo status page"
                                           className="btn systemManagerButton systemManagerButton-border">Look at the
                                            status page</a>
                                    </p>
                                </div>
                            </div>
                            <br/>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-4/12">
                            <div className="bg-white rounded overflow-hidden shadow-lg lg:m-4">
                                <div className="px-6 py-4">
                                    <div className="text-black font-bold text-2xl mb-2">Demo User Login</div>
                                    <div>The account credentials for user "user"</div>
                                    <p className="text-gray-700 text-base p-4">
                                        User: user<br/>
                                        Password: password
                                        <br/>
                                        <br/>
                                        <a href="https://demo.systemmanager.io/login"
                                           title="See the demo panel as a user"
                                           className="btn systemManagerButton systemManagerButton-border">Enter the demo
                                            as a user</a>
                                    </p>

                                </div>
                            </div>
                            <br/>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-4/12">
                            <div className="bg-white rounded overflow-hidden shadow-lg lg:m-4">
                                <div className="px-6 py-4">
                                    <div className="text-black font-bold text-2xl mb-2 p-3">Demo Admin Login</div>
                                    <div>The account credentials for user "admin"</div>
                                    <p className="text-gray-700 text-base p-4">
                                        User: admin<br/>
                                        Password: password
                                        <br/>
                                        <br/>
                                        <a href="https://demo.systemmanager.io/login"
                                           title="See the demo panel as a admin"
                                           className="btn systemManagerButton systemManagerButton-border">Enter the
                                            demo
                                            as an admin</a>
                                    </p>
                                </div>
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
