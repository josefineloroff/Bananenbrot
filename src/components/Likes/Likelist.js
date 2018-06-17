import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MyNavbar from '../Navbar/MyNavbar'
import Product from '../Products/Product/Product'
import Products from '../Products/Products'

import './Likelist.css'
import styled from 'react-emotion'

export default class Likelist extends Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <ul className="ul-likelist">
          <li className="li-likelist">
            {this.props.state.products
              .filter(product => product.isLiked)
              .map(product => {
                return (
                  <Product
                    className="likelist"
                    category={product.category}
                    name={product.name}
                    image={product.image}
                    descriptionText={product.descriptionText}
                    key={product.id}
                    id={product.id}
                    showLikeIcon={product.showLikeIcon}
                    onLike={this.props.onLike}
                    onLiked={() => this.like(product.id)}
                  />
                )
              })}
          </li>
        </ul>
      </div>
    )
  }
}
