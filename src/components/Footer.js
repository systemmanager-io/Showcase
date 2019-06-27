import * as React from 'react';
import {panelUrl} from "../config";

export default class Footer extends React.Component {

    render() {
        return (
            <div className="center-content footer showcase-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 showcase-padding">
                            <img style={{width: "5rem"}}
                                 src={panelUrl + "/images/github-logo-transparent-bg.gif"}
                                 alt="Logo of SystemManager"/>
                            <br/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <p>There are a lot of options to monitor your server(s). Some of them do not have the
                                features you want. SystemManager tries to solve this for you! By letting you decide what
                                kind of features you want to enable, you can even turn off the automatic pinger. </p>
                            <br/>

                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 ">
                            <li>Github</li>
                            <li>Support SystemManager</li>
                            <li>Troubleshooting</li>
                            <br/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 ">
                            <div className="col-md-4">
                                <a href="https://discord.gg/3QFPwgS">
                                    <img style={{width: "15em"}}
                                         src={panelUrl + "/images/discord_logo.svg"}
                                         className=""
                                         title="Click here to enter our discord for support"
                                         alt="Click here to enter our discord for support"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12">
                            <p style={{color: "#4a5158"}}>MIT Licensed | Copyright © 2019 Tigo Middelkoop</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}
