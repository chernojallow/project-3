import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Nursing School App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Student
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>

                            <Link
            to="/clinicals">
            Clinicals
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
                    Clinicals
                  </DropdownItem>
                  <DropdownItem>
                    Evaluate
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

                    Clinicals
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

{/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      User
    </Link>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/student"
            className={
              window.location.pathname === "/clinicals"
       
                ? "nav-link active"
                : "nav-link"
            }
      
          >
            Student
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/preceptor"
            className={
              window.location.pathname === "/preceptor"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Preceptor
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/faculty"
            className={
              window.location.pathname === "/faculty"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Faculty
          </Link>

        </li>

 <li className="nav-item">
          <Link
            to="/clinicals"
            className={
              window.location.pathname === "/clinicals"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Clinicals
          </Link>

        </li>


       <li className="nav-item">
          <Link
            to="/evaluate"
            className={
              window.location.pathname === "/evaluate"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Evaluate
          </Link>

        </li>

          <li className="nav-item">
          <Link
            to="/view"
            className={
              window.location.pathname === "/view"
                ? "nav-link active"
                : "nav-link"
            }
          >
            view evaluation
          </Link>

        </li>


      </ul>
    </div>
  </nav> */}