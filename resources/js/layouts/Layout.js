import * as React from 'react' 
import SystemManagerNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Button} from "reactstrap";

export default class Layout extends React.Component {

    render() {
        return (
            <div>
                <SystemManagerNavbar/>
                <div>
                    <div className="center-content showcase showcase-padding">
                        <h1 className="align-content-center">SystemManager</h1>
                        <h5 className="align-content-center">The best solution to manage your VPSse and Dedicated Boxes</h5>
                        <Button>Demo</Button>
                        <Button>Get started</Button>
                    </div>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }


}
