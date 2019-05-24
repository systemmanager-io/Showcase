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

export default class Layout extends React.Component {

    render() {
        return (
            <div>
                <SystemManagerNavbar/>
                <div class="container">
                    {this.props.children}
                </div>
                {/*<Footer/>*/}
            </div>
        )
    }



}