"use client";

import * as React from 'react';

export default class Footer extends React.Component {

    render() {
        return (
            <div className="text-center text-white p-12 bg-gray-900">
                <div className="container mx-auto max-w-5xl">

                    <div className="w-full p-5">{/*Reserved for future logo*/}</div>

                    <div className="flex flex-wrap">

                        <div className="w-full lg:w-1/2 text-sm">
                            <p className={"italic"}>
                                TO BE WRITTEN
                            </p>
                            <br/>
                        </div>

                        <div className="w-full lg:w-1/2 text-sm">
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
                    </div>
                    <div className="w-full">
                        <p style={{color: "#4a5158"}}>MIT Licensed | Created by tigo.tech</p>
                    </div>
                </div>
            </div>

        )
    }

}
