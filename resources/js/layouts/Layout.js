import * as React from 'react'
import SystemManagerShowcaseNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import SystemManagerShowcaseTopBar from "../components/TopBar";
import StagingBubble from "../components/StagingBubble";

export default class Layout extends React.Component {

    render() {
        return (
            <div>
                <SystemManagerShowcaseNavbar/>
                <SystemManagerShowcaseTopBar/>
                {this.props.children}
                <Footer/>

                ${window.document.documentURI == "systemmanager.genericdevelopment.nl" ? <StagingBubble/> : null}
            </div>
        )
    }


}
