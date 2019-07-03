import * as React from 'react';
import {panelUrl} from "../config";
import {Link} from "react-router-dom";

export default class Footer extends React.Component {

    render() {
        return (
            <div className="footer text-center showcase-padding">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <div className="center-content items-center showcase-padding">
                                <img style={{width: "5rem"}}
                                     className="center-content"
                                     src={panelUrl + "/images/github-logo-transparent-bg.gif"}
                                     title="Logo of systemmanager"
                                     alt="Logo of SystemManager"/>
                                <br/>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 text-sm">
                            <p>There are a lot of options to monitor your server(s). Some of them do not have the
                                features you want. SystemManager tries to solve this for you! By letting you decide
                                what
                                kind of features you want to enable, you can even turn off the automatic
                                pinger. </p>
                            <br/>

                        </div>
                        <div className="w-full lg:w-4/12 text-sm">
                            <li className="primary-light-text"><a href="https://github.com/systemmanager-io">Github</a>
                            </li>
                            <li className="primary-light-text">Support SystemManager</li>
                            <li className="primary-light-text"><Link
                                to="/documentation/troubeshooting">Troubleshooting</Link></li>
                            <br/>
                        </div>
                        <div className="w-full lg:w-2/12 content-center">
                            <a title="Discord Support Server" href="https://discord.gg/3QFPwgS">
                                <div className="w-9/12 lg:w-full self-center">
                                    <img
                                         src={panelUrl + "/images/discord_logo.svg"}
                                         title="Click here to enter our discord for support"
                                         alt="Click here to enter our discord for support"/>
                                </div>
                            </a>
                        </div>
                        <div className="w-full">
                            <p style={{color: "#4a5158"}}>MIT Licensed | Copyright © 2019 Tigo Middelkoop</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}
