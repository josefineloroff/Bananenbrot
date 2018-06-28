import React, { Component } from 'react'
import './authentication.css'
import { image } from '../../assets/images/Fehlermeldung.jpg'
import MyNavbar from '../Navbar/MyNavbar'

export default class Logout extends Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <div className="row">
          <br />
          <br />
          <div className="logo">
            <img
              src={require('../../assets/images/goodbye-clipart-black-and-white-16.jpg')}
              style={{
                height: '150px',
                width: '250px',
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}
