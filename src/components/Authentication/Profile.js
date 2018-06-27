import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import axios from 'axios'
import MyNavbar from '../Navbar/MyNavbar'

import './authentication.css'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    }
  }
  render() {
    return (
      <div>
        <MyNavbar />
        <div className="profile">
          <MuiThemeProvider>
            <div>
              <AppBar title="Profile" />
              <br />
              <h6>Change your Data:</h6>
              <p>First Name</p>
              <input
                text="First Name"
                hintText="Enter your First Name"
                floatingLabelText="First Name"
                onChange={(event, newValue) =>
                  this.setState({ first_name: newValue })
                }
              />
              <br />
              <br />
              <p>Last Name</p>
              <input
                text="Last Name"
                hintText="Enter your Last Name"
                floatingLabelText="Last Name"
                onChange={(event, newValue) =>
                  this.setState({ last_name: newValue })
                }
              />
              <br />
              <br />
              <p>Email</p>
              <input
                text="Email"
                hintText="Enter your Email"
                type="email"
                floatingLabelText="Email"
                onChange={(event, newValue) =>
                  this.setState({ email: newValue })
                }
              />
              <br />
              <br />
              <p>Password</p>
              <input
                text="Password"
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={(event, newValue) =>
                  this.setState({ password: newValue })
                }
              />
              <br />
              <br />
              <RaisedButton
                label="Submit"
                primary={true}
                style={style}
                onClick={event => this.handleClick(event)}
              />
            </div>
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}
const style = {
  margin: 15,
}
export default Register
