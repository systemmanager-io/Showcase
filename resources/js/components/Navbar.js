import * as React from 'react'
import {
    Collapse, DropdownItem, DropdownMenu,
    DropdownToggle,
    Nav, Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";
import {Link} from "react-router-dom";

export default class SystemManagerShowcaseNavbar extends React.Component {


    state = {
        collapsed: true
    }

    toggleNavbar() {
        this.setState({collapsed: !this.state.collapsed})
    }

    render() {
        return (
            <Navbar sticky className="navbar-color" color="#c2185b" dark expand="md">
                <div className="container">
                    <Link to="/" className="white-text navbar-brand-hover" ><NavbarBrand>SystemManager</NavbarBrand></Link>
                    <NavbarToggler onClick={this.toggleNavbar.bind(this)}/>
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link className="nav-link" to="/">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/demo">Demo</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/pricing">Pricing</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/getstarted">Get Started</Link>
                            </NavItem>
                            {/*<NavItem>*/}
                            {/*    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>*/}
                            {/*</NavItem>*/}
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle aria-haspopup={true} nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        )
    }

}
