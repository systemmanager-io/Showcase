import * as React from "react";

export default class HighlightedFeatures extends React.Component {

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <h3>Security</h3>
                        <hr />
                        <p>Security is the most important thing for SystemManager! We use the latest technology to secure your data! Every problem found in the security of SystemManager will be dealt with in short order!</p>
                        <br/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <h3>User Friendly</h3>
                        <hr/>
                        <p>No difficult interfaces! We crafted one beautiful panel to manage every server with! Do you miss something? Contact us! We will look if we are going to include it!</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <h3>Native Apps</h3>
                        <hr/>
                        <p>As part of our software line up apps will follow! For Android and iOS! This way you won't have to use a third-party app! Every change in our app has been curated by us!</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <h3>Free and Opensource</h3>
                        <hr/>
                        <p>Hate that you need to pay for software? We do too! You can get SystemManager for free!
                        {/*<br/><br/>When a feature comes to the core package it will never be a paid feature. That is a promise.*/}
                        </p>
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
