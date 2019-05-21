

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
  DropdownItem,

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
                      to="/logout">
                      Logout
               </Link>


                  </DropdownItem>

                  <DropdownItem>

                    <Link
                      to="/profile">
                      Profile
                    </Link>
                  </DropdownItem>

                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Student
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>

                    <Link
                      to="/clinicals">
                      Clinicals Schedule
                </Link>

                  </DropdownItem>
                  <DropdownItem>

                    <Link
                      to="/clinicalEvents">
                      Clinical Events
               </Link>
                  </DropdownItem>


                  <DropdownItem>
                    <Link
                      to="/evaluate">
                      Evaluate
              </Link>

                  </DropdownItem>

                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Faculty
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>

                    <Link
                      to="/inputClinicals">
                      Input Clinicals
                  </Link>
                  </DropdownItem>

                  <DropdownItem>
                    <Link
                      to="/searchStudent">
                      Search Student
                    </Link>
                  </DropdownItem>

                  <DropdownItem>
                    <Link
                      to="searchSchedule">
                      Search Schedule
                    </Link>
                  </DropdownItem>

                  <DropdownItem>

                    <Link
                      to="/view">
                      view evaluation
                </Link>

                  </DropdownItem>

                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Preceptor
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>

                    Student login
                  </DropdownItem>
                  <DropdownItem>
                    Evaluate
                  </DropdownItem>

                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
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