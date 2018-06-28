import React, { Component } from 'react'
import './authentication.css'
import { image } from '../../assets/images/Fehlermeldung.jpg'
import MyNavbar from '../Navbar/MyNavbar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

export default class Logout extends Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <div className="logout">
          <MuiThemeProvider>
            <div>
              <h2>Goodbye</h2>
            </div>
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}
