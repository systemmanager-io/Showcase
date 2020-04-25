import * as React from "react";

export default class HighlightedFeatures extends React.Component {

    render() {

        return (
            <div className="flex flex-wrap text-white">
                <div className="w-full md:w-6/12 lg:w-4/12">
                    <div className=" rounded h-48 overflow-hidden lg:m-4">
                        <div className="px-6 py-4">
                            <div className="text-2xl mb-2">Security</div>
                            <hr/>
                            <p className="font-light text-white text-base mt-2">Security is the most important thing for
                                SystemManager! We use the latest technology available to
                                secure your sensitive data!</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-6/12 lg:w-4/12">
                    <div className="rounded h-48 overflow-hidden lg:m-4">
                        <div className="px-6 py-4">
                            <div className="text-2xl mb-2">User Friendly</div>
                            <hr/>
                            <p className="font-light text-white mt-2 text-base">No difficult interfaces! We crafted one
                                beautiful panel to manage every server with! Do
                                you
                                miss something? Contact us! We will look if we are going to include it!</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-6/12 lg:w-4/12">
                    <div className="rounded h-48 overflow-hidden lg:m-4">
                        <div className="px-6 py-4">
                            <div className="text-2xl mb-2">Native Apps</div>
                            <hr/>
                            <p className="mt-2 text-base">As part of our software line up apps will follow! For Android
                                and iOS! This way you won't
                                have to use a third-party app! Every change in our app has been curated by us!</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-6/12 lg:w-4/12">
                    <div className="rounded h-48 overflow-hidden lg:m-4">
                        <div className="px-6 py-4">
                            <div className="text-2xl mb-2">Free and Opensource</div>
                            <hr/>
                            <p className="mt-2 text-base">SystemManager is 100% free and licensed under a MIT license.
                                The code of our products is
                                opensource as well. <br/><br/> This website is also opensource! You can check it out on github.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="w-full md:w-6/12 lg:w-4/12">
                    <div className="rounded h-48 overflow-hidden lg:m-4">
                        <div className="px-6 py-4">
                            <div className="text-2xl mb-2">Lightweight</div>
                            <hr/>
                            <p className="mt-2 text-base">SystemManager and all its components are build to be fast and
                                lightweight on your systems
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-6/12 lg:w-4/12">
                    <div className="rounded h-48 overflow-hidden lg:m-4">
                        <div className="px-6 py-4">
                            <div className="text-2xl mb-2">API First</div>
                            <hr/>
                            <p className="mt-2 text-base">SystemManager and its panel are API first. The panel has been
                                build using the API to let you build your own panel too! This way you can use SystemManager the best way!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
