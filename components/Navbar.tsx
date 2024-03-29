"use client";

import * as React from 'react'
import Link from "next/link";
export default class SystemManagerShowcaseNavbar extends React.Component {


    state = {
        collapsed: true
    };

    toggleNavbar() {
        this.setState({collapsed: !this.state.collapsed})
    }


    render() {
        return (
            <React.Fragment>
                <nav className="flex items-center justify-between flex-wrap bg-primary border-b p-4 lg:p-3">
                    <div className="jetbrains flex items-center flex-shrink-0 text-white ml-2 mr-6 hover:text-primary-dark">
                        <Link title="SystemManager" href="/">SystemManager</Link>
                    </div>
                    <div className="block lg:hidden">
                        <button
                            onClick={this.toggleNavbar.bind(this)}
                            className="flex items-center text-white hover:text-white hover:border-white">
                            <svg className="fill-current h-6 w-7" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button>
                    </div>
                    <div
                        className={this.state.collapsed ? "w-full lg:flex lg:items-center lg:w-auto hidden" : "w-full lg:flex lg:items-center navbar-animation lg:w-auto transition duration-500"}>
                        <Link title="Homepage"
                              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-primary-dark mr-4"
                              href="/">Home</Link>
                        {/*<Link title="Demos of SystemManager"*/}
                        {/*      className="block mt-4 lg:inline-block lg:mt-0 text-white primary-light-text mr-4"*/}
                        {/*      to="/demo">Demo</Link>*/}
                        <a title="Documentation of SystemManager"
                              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-primary-dark mr-4"
                              href="https://docs.systemmanager.io">Documentation</a>
                        {/*<a title="Forum of SystemManager"*/}
                        {/*      className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-primary-light mr-4"*/}
                        {/*      href="https://forum.systemmanager.io">Forum</a>*/}
                        {/*<a title="Plugins for SystemManager"*/}
                        {/*      className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-primary-light mr-4"*/}
                        {/*      href="https://cloud.systemmanager.io/plugins">Plugins <span className="text-xs text-blue-400">(Coming Soon)</span></a>*/}
                        {/*<a title="Hosting for SystemManager"*/}
                        {/*      className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-primary-light mr-4"*/}
                        {/*      href="https://cloud.systemmanager.io/">Cloud <span className="text-xs text-blue-400">(Coming Soon)</span></a>*/}

                        <a title="Download SystemManager"
                              className="inline-block px-4 py-2 leading-none border rounded text-white border-white primary-light-text hover:bg-primary-dark mt-4 lg:mt-0"
                              href="https://docs.systemmanager.io/core/getting_started.html">Download</a>
                    </div>
                </nav>
            </React.Fragment>
        )
    }

}
