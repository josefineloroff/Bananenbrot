import React from 'react'
import './MyNavbar.css'
import { RegistrationForm } from 'react-stormpath'
import { LoginForm } from 'react-stormpath'
import DocumentTitle from 'react-document-title'

import { Link, LoginLink, NavLink as RouterLink } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
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
      <div>
        <Navbar color="light" light expand="md" className="navbar">
          <RouterLink to="/">
            <NavbarBrand className="text-info">BANANENBROT</NavbarBrand>
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
                  <DropdownItem className="text-info">Login </DropdownItem>

                  <DropdownItem className="text-info">
                    Registration{' '}
                  </DropdownItem>

                  <DropdownItem className="text-info">Account</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem className="text-info">Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
