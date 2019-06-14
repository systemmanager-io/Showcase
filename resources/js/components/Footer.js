import * as React from 'react';
import {Link} from "react-router-dom";

export default class Footer extends React.Component {

    render() {
        return (
            <div className="center-content footer showcase-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 showcase-padding">
                            <img style={{width: "5rem"}}
                                 src="http://localhost:8000/images/github-logo-transparent-bg.gif"
                                 alt="Click here to enter our discord for support"/>
                            <br/>
                        </div>
                        <div className="col-sm-12 col-md-6 col-3">
                            <a>STORY</a>
                            <br/>

                        </div>
                        <div className="col-sm-12 col-md-3 col-3">
                            <li>Github</li>
                            <li>Support SystemManager</li>
                            <li>Troubleshooting</li>
                            <br/>
                        </div>
                        <div className="col-sm-12 col-md-3 col-3">
                            <div className="col-md-4">
                                <a href="https://discord.gg/3QFPwgS">
                                    <img style={{width: "20rem"}}
                                         src={process.env.MIX_APP_URL + "/images/discord_logo.png"}
                                         alt="Click here to enter our discord for support"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12">
                            <p style={{color: "#4a5158"}}>%license% Licensed | Copyright © 2019 Tigo Middelkoop</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}
