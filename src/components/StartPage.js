import React, { Component } from 'react'
import MyNavbar from './Navbar/MyNavbar'
import Products from './Products/Products'
import MySwiper from './Swiper/MySwiper'

export default class StartPage extends Component {
  render() {
    const { products } = this.props.state
    return (
      <div>
        <MyNavbar />
        <MySwiper>
          <Products
            products={products}
            onBookmark={this.props.onBookmark}
            onLike={this.props.onLike}
            onTrash={this.props.onTrash}
            isBookmarked={this.props.isBookmarked}
            isLiked={this.props.isLiked}
            isTrashed={this.props.isTrashed}
            showBookmarkIcon={this.props.showBookmarkIcon}
            showLikeIcon={this.props.showLikeIcon}
            showTrashIcon={this.props.showTrashIcon}
          />
        </MySwiper>
      </div>
    )
  }
}
