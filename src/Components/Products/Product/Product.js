import React, { Component } from 'react'
import '../../Swiper/Swiper.css'

export default class Product extends Component {
  render() {
    return (
      <div className="swiper-slide">
        <div className="product">
          <h3>{this.props.category}</h3>
          <h1>{this.props.name}</h1>
          <img style={{ width: '100%' }} src={this.props.image} />
          <p>{this.props.descriptionText}</p>
          <div>{this.props.children}</div>
        </div>
      </div>
    )
  }
}
