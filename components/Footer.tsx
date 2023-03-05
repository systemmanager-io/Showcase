"use client";

import * as React from 'react';

export default class Footer extends React.Component {

    render() {
        return (
            <div className="text-center text-white p-12 bg-gray-900">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-wrap">
                        <div className="w-full p-5">{/*Reserved for future logo*/}</div>
                        <div className="w-full lg:w-6/12 text-sm">
                            <p>
                                There are a lot of options to monitor your server(s). Some of them do not have the
                                features you want. SystemManager tries to solve this for you! By letting you decide
                                what
                                kind of features you want to enable, you can even turn off the automatic
                                pinger.
                            </p>
                            <br/>
                        </div>

                        <div className="w-full lg:w-4/12 text-sm">
                            <li className="hover:text-primary-light">
                                <a href="https://github.com/systemmanager-io">GitHub</a>
                            </li>
                            <li className="hover:text-primary-light">
                                <a href="https://docs.systemmanager.io/">Documentation</a>
                            </li>

                            <li className="text-gray-700">
                                <a href="https://docs.systemmanager.io/">Patreon</a>
                            </li>
                            <br/>
                        </div>

                        <div className="w-full lg:w-2/12">
                            <a title="Discord Support Server"
                               href="https://discord.gg/3QFPwgS">
                                <img
                                    src={"https://docs.systemmanager.io/images/discord_logo.svg"}
                                    title="Click here to enter our discord for support"
                                    alt="Click here to enter our discord for support"/>
                            </a>
                        </div>
                        <div className="w-full">
                            <p style={{color: "#4a5158"}}>MIT Licensed | Created by tigo.tech</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}
