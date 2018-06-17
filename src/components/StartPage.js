import React, { Component } from 'react'
import MyNavbar from './Navbar/MyNavbar'
import Products from './Products/Products'
import MySwiper from './Swiper/MySwiper'
import Bookmarklist from './Bookmarks/Bookmarklist'

export default class StartPage extends Component {
  render() {
    const {
      products,
      showBookmarkIcon,
      showLikeIcon,
      filter,
    } = this.props.state
    return (
      <div>
        <MyNavbar />
        <MySwiper>
          <Products
            products={products}
            onBookmark={this.props.onBookmark}
            onLike={this.props.onLike}
            onTrash={this.props.onTrash}
          />
        </MySwiper>
      </div>
    )
  }
}
