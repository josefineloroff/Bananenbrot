import React, { Component } from 'react'
import MyNavbar from '../Navbar/MyNavbar'

import Product from '../Products/Product/Product'

import './InventorView.css'

export default class extends Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <div>
          {this.props.state.products.map(product => {
            return (
              <React.Fragment>
                <Product
                  category={product.category}
                  name={product.name}
                  imageUrl={product.imageUrl}
                  descriptionText={product.descriptionText}
                  key={product.id}
                  id={product.id}
                  showLikeIcon={product.showLikeIcon}
                  onLike={this.props.onLike}
                  onLiked={() => this.likes(product.id)}
                />
                <p>Likes: 5</p>
                <p>Trashes: 6</p>
              </React.Fragment>
            )
          })}
        </div>
      </div>
    )
  }
}
