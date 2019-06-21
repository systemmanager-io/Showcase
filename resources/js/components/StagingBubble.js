import * as React from "react";

export default class DevelopmentBubble extends React.Component {


    render() {
        return (
            <div className="center-content stagingBubble">
                <a>You are viewing the Staging area</a>
                <br/>
                <a className="btn liveButton" href="https://systemmanager.io">Looking for systemmanager.io?</a>

            </div>
        )
    }
}
