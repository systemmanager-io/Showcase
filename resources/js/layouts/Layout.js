import * as React from 'react'
import SystemManagerShowcaseNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import SystemManagerShowcaseTopBar from "../components/TopBar";
import StagingBubble from "../components/StagingBubble";
import DevelopmentBubble from "../components/DevelopmentBubble";
import ProductionBubble from "../components/ProductionBubble";

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <SystemManagerShowcaseNavbar/>
                {/*<SystemManagerShowcaseTopBar/>*/}
                {this.props.children}
                <Footer/>

                <div className="center-content stagingBubble">
                    <ProductionBubble/>
                    {location.hostname == "systemmanager.genericdevelopment.nl" ? <StagingBubble/> : null}
                    {location.hostname == "localhost" || location.hostname == "127.0.0.1" ? <DevelopmentBubble/> : null}
                </div>
            </div>
        )
    }
}
