import * as React from 'react'
import SystemManagerShowcaseNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Button} from "reactstrap";
import SystemManagerShowcaseTopBar from "../components/TopBar";

export default class Layout extends React.Component {

    render() {
        return (
            <div>
                <SystemManagerShowcaseNavbar/>
                <SystemManagerShowcaseTopBar/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }


}
