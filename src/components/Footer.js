import * as React from 'react';
import {panelUrl} from "../config";

export default class Footer extends React.Component {

    render() {
        return (
            <div className="footer text-center footer">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-wrap">
                        <div className="w-full p-5">{/*Reserved for future logo*/}</div>
                        <div className="w-full lg:w-6/12 text-sm">
                            <p>There are a lot of options to monitor your server(s). Some of them do not have the
                                features you want. SystemManager tries to solve this for you! By letting you decide
                                what
                                kind of features you want to enable, you can even turn off the automatic
                                pinger. </p>
                            <br/>

                        </div>
                        <div className="w-full lg:w-4/12 text-sm">
                            <li className="primary-light-text"><a href="https://github.com/systemmanager-io">GitHub</a>
                            </li>
                            <li className="primary-light-text"><a
                                href="https://docs.systemmanager.io/">Documentation</a></li>

                            <li className="text-gray-700"><a
                                href="https://docs.systemmanager.io/">Patreon</a></li>
                            <br/>
                        </div>
                        <div className="w-full lg:w-2/12 items-center justify-center">
                            <a title="Discord Support Server" href="https://discord.gg/3QFPwgS">
                                <div className="lg:w-full self-center w-full">
                                    <img
                                        src={panelUrl + "/images/discord_logo.svg"}
                                        title="Click here to enter our discord for support"
                                        alt="Click here to enter our discord for support"/>
                                </div>
                            </a>
                        </div>
                        <div className="w-full">
                            <p style={{color: "#4a5158"}}>MIT Licensed | Copyright © 2019 - 2020 Tigo Middelkoop</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}
