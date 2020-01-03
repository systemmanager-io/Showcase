import * as React from "react";

export default class HighlightedFeatures extends React.Component {

    render() {

        return (
            <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 lg:w-4/12">
                    <div className="bg-white rounded h-48 overflow-hidden shadow-lg lg:m-4">
                        <div className="px-6 py-4">
                            <div className="text-black  text-2xl mb-2">Security</div>
                            <hr/>
                            <p className="font-light text-gray-700 text-base">Security is the most important thing for
                                SystemManager! We use the latest technology to
                                secure your data!</p>
                        </div>
                    </div>
                    <br/>
                </div>

                <div className="w-full md:w-6/12 lg:w-4/12">
                    <div className="bg-white rounded h-48 overflow-hidden shadow-lg lg:m-4">
                        <div className="px-6 py-4">
                            <div className="text-black text-2xl mb-2">User Friendly</div>
                            <hr/>
                            <p className="font-light text-gray-700 text-base">No difficult interfaces! We crafted one beautiful panel to manage every server with! Do
                                you
                                miss something? Contact us! We will look if we are going to include it!</p>
                        </div>
                    </div>
                    <br/>
                </div>

                <div className="w-full md:w-6/12 lg:w-4/12">
                    <div className="bg-white rounded h-48 overflow-hidden shadow-lg lg:m-4">
                        <div className="px-6 py-4">
                            <div className="text-black text-2xl mb-2">Native Apps</div>
                            <hr/>
                            <p className="text-gray-700 text-base">As part of our software line up apps will follow! For Android and iOS! This way you won't
                                have to use a third-party app! Every change in our app has been curated by us!</p>
                        </div>
                    </div>
                    <br/>
                </div>

                <div className="w-full md:w-6/12 lg:w-4/12">
                    <div className="bg-white rounded h-48 overflow-hidden shadow-lg lg:m-4">
                        <div className="px-6 py-4">
                            <div className="text-black text-2xl mb-2">Free and Opensource</div>
                            <hr/>
                            <p className="text-gray-700 text-base">SystemManager is 100% free and licensed under a MIT license. The code of our products is
                                opensource as well. <br/><br/> Even this website is opensource! You can find it on
                                github!
                                {/*<br/><br/>When a feature comes to the core package it will never be a paid feature. That is a promise.*/}
                            </p>
                        </div>
                    </div>
                    <br/>
                </div>


                <div className="w-full md:w-6/12 lg:w-4/12">
                    <div className="bg-white rounded h-48 overflow-hidden shadow-lg lg:m-4">
                        <div className="px-6 py-4">
                            <div className="text-black text-2xl mb-2">Lightweight</div>
                            <hr/>
                            <p className="text-gray-700 text-base">SystemManager and all its components are build to be fast and lightweight on your systems
                                {/*<br/><br/>When a feature comes to the core package it will never be a paid feature. That is a promise.*/}
                            </p>
                        </div>
                    </div>
                    <br/>
                </div>

                <div className="w-full md:w-6/12  lg:w-4/12">
                                        <div className="bg-white h-48 rounded overflow-hidden shadow-lg lg:m-4">
                        <div className="px-6 py-4">
                            <div className="text-black text-2xl mb-2">API First</div>
                            <hr/>
                            <p className="text-gray-700 text-base">SystemManager and its panel are API first. The panel has been build using the API to let you build your own panel too!
                            </p>
                        </div>
                    </div>
                    <br/>
                </div>
                <div className="w-full md:w-6/12 lg:w-4/12">
                    <div className="bg-white rounded overflow-hidden shadow-lg lg:m-4"></div>
                </div>
            </div>
        )
    }

}
