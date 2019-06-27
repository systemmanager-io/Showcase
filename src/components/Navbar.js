import * as React from 'react'
import {
    Collapse,
    Nav, Navbar,
    NavbarToggler,
    NavItem,
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
            <Navbar stick="true" className="navbar-color" color="#c2185b" dark expand="md">
                <div className="container">
                    <Link title="SystemManager" to="/" className="navbar-brand-hover navbar-brand">SystemManager</Link>
                    <NavbarToggler onClick={this.toggleNavbar.bind(this)}/>
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link title="Home page" className="nav-link" to="/">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link title="Demo page" className="nav-link" to="/demo">Demo</Link>
                            </NavItem>
                            <NavItem>
                                <Link title="Pricing page" className="nav-link" to="/pricing">Pricing</Link>
                            </NavItem>
                            <NavItem>
                                <Link title="Documentation page" className="nav-link" to="/documentation">Documentation</Link>
                            </NavItem>
                            {/*<NavItem>*/}
                            {/*    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>*/}
                            {/*</NavItem>*/}
                            {/*<UncontrolledDropdown nav inNavbar>*/}
                            {/*    <DropdownToggle aria-haspopup={true} nav caret>*/}
                            {/*        Options*/}
                            {/*    </DropdownToggle>*/}
                            {/*    <DropdownMenu right>*/}
                            {/*        <DropdownItem>*/}
                            {/*            Option 1*/}
                            {/*        </DropdownItem>*/}
                            {/*        <DropdownItem>*/}
                            {/*            Option 2*/}
                            {/*        </DropdownItem>*/}
                            {/*        <DropdownItem divider/>*/}
                            {/*        <DropdownItem>*/}
                            {/*            Reset*/}
                            {/*        </DropdownItem>*/}
                            {/*    </DropdownMenu>*/}
                            {/*</UncontrolledDropdown>*/}
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        )
    }

}