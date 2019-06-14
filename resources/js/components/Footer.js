import * as React from 'react';
import {Link} from "react-router-dom";
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
                        <div className="col-sm-12 col-md-6 col-3">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra luctus purus, ut fringilla mauris dictum sed. Morbi eget risus sodales, finibus justo vitae, interdum ex. Curabitur in rhoncus magna. Proin rutrum at elit in elementum. Nunc viverra porttitor varius. Donec semper odio mi, nec ullamcorper felis faucibus vitae. Praesent nec tempor diam, at tempor risus. Donec et pretium mi.
                                Fusce pellentesque, ipsum eu posuere pretium, mi diam commodo metus, vel hendrerit leo nisl nec dui. Morbi pellentesque facilisis sapien quis sagittis. Phasellus dapibus, arcu mattis accumsan pulvinar, quam tellus auctor nisl, venenatis blandit nisl lacus at quam.</p>
                            <br/>

                        </div>
                        <div className="col-sm-12 col-md-3 col-3">
                            <li>Github</li>
                            <li>Support SystemManager</li>
                            <li>Troubleshooting</li>
                            <br/>
                        </div>
                        <div className="col-sm-12 col-md-12 col-xl-3 col-3 col-lg-12">
                            <div className="col-md-4">
                                <a href="https://discord.gg/3QFPwgS">
                                    <img style={{maxWidth: "20rem"}}
                                         src={panelUrl + "/images/discord_logo.png"}
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
