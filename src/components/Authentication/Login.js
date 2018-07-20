import React, { Component } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import MyNavbar from '../Navbar/MyNavbar'
import { saveFullState } from '../../service'


import './authentication.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      username: '',
      password: '',
      isLoading: false,

    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange = event => {
    console.log(event.target.value)
    const input = event.target
    this.setState({
      [input.username]: [input.value],
      [input.email]: [input.value],
      [input.password]: [input.value],


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
          password: this.state.password,
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
          this.setState({ isLoading: true })
        })
      },
    )
  }

  render() {
    const {identifier, password, isFormSent} = this.state
    return (
      <div>
        <MyNavbar />
        <div className="login">
          <MuiThemeProvider>
            <div>
              <AppBar title="Login" 
              
              />
              <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange={(event, newValue) =>
                  this.setState({ username: newValue })
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
              
              <RaisedButton
                disabled={isLoading}
                label="Submit"
                primary={true}
                style={style}
                type="submit"
                onClick={event => this.onSubmit(event)}
              />
              <br />
              <TextField>
                <p>Not registrated?</p>
              <RouterLink to="/registration">
              Home
              </RouterLink>
              </TextField>
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
export default Login
