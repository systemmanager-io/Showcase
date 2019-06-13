import * as React from 'react';

export default class Footer extends React.Component {

    render() {
        return (
            <div className="center-content footer showcase-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            LOGO
                            <br/>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <a>STORY</a>
                            <br/>

                        </div>
                        <div className="col-sm-12 col-md-3">
                            <li>Github</li>
                            <li>Support SystemManager</li>
                            <li>Troubleshooting</li>
                            <br/>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <a>SUPPORT WAYS</a>
                            <br/>

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
