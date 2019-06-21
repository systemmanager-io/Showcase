import * as React from "react";

export default class DevelopmentBubble extends React.Component {


    render() {
        return (
            <div className="center-content stagingBubble">
                <a>You are viewing the Development area</a><br />
                <a style={{fontSize: "0.75rem"}}>You can find stuff here you will not see on systemmanager.io</a>
                <br/>
                <a className="btn systemManagerButton" href="https://systemmanager.io">Looking for systemmanager.io?</a>

            </div>
        )
    }
}
