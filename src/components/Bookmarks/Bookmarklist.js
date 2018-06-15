import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MyNavbar from '../Navbar/MyNavbar'
import Product from '../Products/Product/Product'
import Products from '../Products/Products'

import './Bookmarklist.css'

export default class Bookmarklist extends Component {
  render() {
    const { products } = this.props.state
    return (
      <div>
        <MyNavbar />
        <ul className="ul-bookmarklist">
          <li className="li-bookmarklist">
            <Products products={products} />
          </li>
        </ul>
      </div>
    )
  }
}
