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
      email: '',
      username: '',
      password: '',
      passwordConf: '',
      isFormSent: false,
    }
  }

  onChange = event => {
    console.log(event.target.value)
    const input = event.target
    this.setState({
      [input.username]: [input.value],
      [input.email]: [input.value],
      [input.password]: [input.value],
      [input.passwordConf]: [input.value],

    })
  }

  onSubmit = e => {
    e.preventDefault()
    this.setState(
      {
        ...this.state,
      },
      () => {
        const formData = new FormData()
        const dataObj = {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          passwordConf: this.state.passwordConf,
          key: this.state.name + this.state.email,
        }
        Object.keys(dataObj).forEach(key => {
          const value = dataObj[key]
          formData.append(key, value)
        })

        saveFullState(this.state)
        fetch('/user', {
          method: 'POST',
          body: formData,
        }).then(res => {
          console.log(res)
          this.setState({ isFormSent: true })
        })
      },
    )
  }

  render() {
    return (
      <div>
        <MyNavbar />
        <div className="register">
          <MuiThemeProvider>
            <div>
              <AppBar title="Register" />
              <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange={(event, newValue) =>
                  this.setState({ username: newValue })
                }
              />
           
              <br />
              <TextField
                hintText="Enter your Email"
                type="email"
                floatingLabelText="Email"
                onChange={(event, newValue) =>
                  this.setState({ email: newValue })
                }
              />
              <br />
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={(event, newValue) =>
                  this.setState({ password: newValue })
                }
              />
              <br />
              <TextField
                type="password"
                hintText="Confirm your Password"
                floatingLabelText="Password"
                onChange={(event, newValue) =>
                  this.setState({ passwordConf: newValue })
                }
              />
              <br />
              <RaisedButton
                label="Submit"
                primary={true}
                style={style}
                type="submit"
                onClick={event => this.onSubmit(event)}
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
