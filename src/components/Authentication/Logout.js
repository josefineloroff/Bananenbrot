import React, { Component } from 'react'
import './authentication.css'
import { image } from '../../assets/images/Fehlermeldung.jpg'
import MyNavbar from '../Navbar/MyNavbar'

export default class Logout extends Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <div className="logout">
          <MuiThemeProvider>
            <div>
              <AppBar title="Logout" 
              
              />
          
              <RaisedButton
                label="Logout"
                primary={true}
                style={style}
                type="logout"
                onClick={event => this.onSubmit(event)}
              />
            </div>
          </MuiThemeProvider>
        </div>
      </div>
    
    )
  }
}
