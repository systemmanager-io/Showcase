import * as React from "react";

export default class HighlightedFeatures extends React.Component {

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        Security
                        <br/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        User Friendly
                        <br/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                            Native Apps
                        <br/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        Free and Opensource
                        <br/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <br/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <br/>
                    </div>
                </div>
            </div>
        )
    }

}
