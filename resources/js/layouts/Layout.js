import * as React from 'react'
import {
    Collapse, DropdownItem, DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";
import {Link} from "react-router-dom";
import SystemManagerNavbar from "../components/Navbar";
import Footer from "../components/Footer";

export default class Layout extends React.Component {

    render() {
        return (
            <div>
                <SystemManagerNavbar/>
                <div>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }


}
