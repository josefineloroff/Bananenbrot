import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MyNavbar from '../Navbar/MyNavbar'
import Product from '../Products/Product/Product'
import Products from '../Products/Products'

import './Bookmarklist.css'
import styled from 'react-emotion'

export default class Bookmarklist extends Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <ul className="ul-bookmarklist">
          <li className="li-bookmarklist">
            {this.props.state.products
              .filter(product => product.isBookmarked)
              .map(product => {
                return (
                  <Product
                    className="bookmarklist"
                    category={product.category}
                    name={product.name}
                    image={product.image}
                    descriptionText={product.descriptionText}
                    key={product.id}
                    id={product.id}
                    showBookmarkIcon={product.showBookmarkIcon}
                    onBookmark={this.props.onBookmark}
                    onBookmarked={() => this.bookmark(product.id)}
                  />
                )
              })}
          </li>
        </ul>
      </div>
    )
  }
}
