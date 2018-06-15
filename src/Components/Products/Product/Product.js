import React, { Component } from 'react'
import './Product.css'
import '../../Swiper/Swiper.css'

export default class Product extends Component {
  render() {
    return (
      <div className="swiper-slide">
        <div className="product">
          <h3 className="h3">{this.props.category}</h3>
          <h1 className="h1">{this.props.name}</h1>
          <img src={this.props.image} />
          <p className="description-text">{this.props.descriptionText}</p>
        </div>
      </div>
    )
  }
}
