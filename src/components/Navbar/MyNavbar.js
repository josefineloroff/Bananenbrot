import React from 'react'
import './MyNavbar.css'
import { NavLink as RouterLink } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

export default class Example extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md" className="navbar">
          <RouterLink className="brand text-info" to="/">
            INVENTION-PLACEMENT
          </RouterLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="nav-home">
                <RouterLink className="text-info" to="/">
                  Home
                </RouterLink>
              </NavItem>
              <NavItem className="nav-bookmarks">
                <RouterLink className="text-info" to="/bookmarklist">
                  Bookmarks
                </RouterLink>
              </NavItem>
              <NavItem className="nav-likes">
                <RouterLink className="text-info" to="/likelist">
                  Likes
                </RouterLink>
              </NavItem>
              <NavItem className="nav-trashes">
                <RouterLink className="text-info" to="/trashlist">
                  Trashes
                </RouterLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="text-info" nav caret>
                  Privacy
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <RouterLink className="text-info" to="/loginpage">
                      Login
                    </RouterLink>
                  </DropdownItem>

                  <DropdownItem>
                    <RouterLink className="text-info" to="/registrationpage">
                      Registration
                    </RouterLink>
                  </DropdownItem>

                  <DropdownItem>
                    <RouterLink className="text-info" to="/profilepage">
                      Account
                    </RouterLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem className="text-info">
                    <RouterLink className="text-info" to="/inputformular">
                      Inventor Upload
                    </RouterLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <RouterLink className="text-info" to="/inventorview">
                      Inventor View
                    </RouterLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem className="text-info">Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    )
  }
}
