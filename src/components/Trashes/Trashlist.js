import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MyNavbar from '../Navbar/MyNavbar'
import Product from '../Products/Product/Product'
import Products from '../Products/Products'

import './Trashlist.css'
import styled from 'react-emotion'

export default class Trashlist extends Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <ul className="ul-trashlist">
          <li className="li-trashlist">
            {this.props.state.products
              .filter(product => product.isTrashed)
              .map(product => {
                return (
                  <Product
                    className="trashlist"
                    category={product.category}
                    name={product.name}
                    image={product.image}
                    descriptionText={product.descriptionText}
                    key={product.id}
                    id={product.id}
                    showTrashIcon={product.showTrashIcon}
                    onTrash={this.props.onTrash}
                    onTrashed={() => this.trash(product.id)}
                  />
                )
              })}
          </li>
        </ul>
      </div>
    )
  }
}
