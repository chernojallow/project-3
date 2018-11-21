import React from "react";
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
//import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
export default class Navbar2 extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (



            <div >

                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Home</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    User
                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>

                                        <Link
                                            to="/loginUser">
                                            Login
                                      </Link>

                                    </DropdownItem>
                                    <DropdownItem>

                                        <Link
                                            to="/profile">
                                            Profile
                                        </Link>
                                    </DropdownItem>


                                    <DropdownItem>

                                        <Link
                                            to="/logout">
                                            Logout
                                           </Link>
                                    </DropdownItem>


                                </DropdownMenu>
                            </UncontrolledDropdown>


                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}