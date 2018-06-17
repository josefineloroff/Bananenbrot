import React, { Component } from 'react'
import './Product.css'
import '../../Swiper/Swiper.css'
import BookmarkIcon from '../../Icons/BookmarkIcon'
import LikeIcon from '../../Icons/LikeIcon'

export default class Product extends Component {
  render() {
    return (
      <div className="swiper-slide">
        <div className="product">
          <p className="h3">{this.props.category}</p>
          <p className="h1">{this.props.name}</p>
          <div className="image-container">
            <img src={this.props.image} />
          </div>
          <p className="description-text">{this.props.descriptionText}</p>
        </div>
        <div style={{ width: 40, height: 40 }} className="divicon">
          <BookmarkIcon
            show={this.props.showBookmarkIcon}
            onBookmark={e => this.props.onBookmark(this.props.id)}
          />
          <LikeIcon
            show={this.props.showLikeIcon}
            onLike={e => this.props.onLike(this.props.id)}
          />
        </div>
      </div>
    )
  }
}
