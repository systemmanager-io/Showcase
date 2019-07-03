import * as React from 'react'
import {Link} from "react-router-dom";

export default class SystemManagerShowcaseNavbar extends React.Component {


    state = {
        collapsed: true
    }

    toggleNavbar() {
        this.setState({collapsed: !this.state.collapsed})
    }

    render() {
        return (
            <nav className="flex items-center justify-between flex-wrap navbar-color p-3">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Link title="SystemManager" to="/"
                          className="navbar-brand-hover navbar-brand">SystemManager</Link>
                </div>
                <div className="block lg:hidden">
                    <button
                        className="flex items-center text-white hover:text-white hover:border-white">
                        <svg className="fill-current h-6 w-7" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className="w-full lg:flex lg:items-center lg:w-auto hidden sm:hidden">
                    <Link title="Home page"
                          className="block mt-4 lg:inline-block lg:mt-0 text-white primary-light-text mr-4"
                          to="/">Home</Link>
                    <Link title="Demo page"
                          className="block mt-4 lg:inline-block lg:mt-0 text-white primary-light-text mr-4"
                          to="/demo">Demo</Link>
                    <Link title="Documentation page"
                          className="block mt-4 lg:inline-block lg:mt-0 text-white primary-light-text mr-4"
                          to="/documentation">Documentation</Link>
                    <Link title="Documentation page"
                          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent primary-light-text hover:bg-white mt-4 lg:mt-0"
                          to="/download">Download</Link>
                </div>
            </nav>
        )
    }

}
