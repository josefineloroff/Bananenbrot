import React, { Component } from 'react'
import MyNavbar from './Navbar/MyNavbar'
import Products from './Products/Products'
import MySwiper from './Swiper/MySwiper'
import BookmarkIcon from './Bookmarks/BookmarkIcon'
import Bookmarklist from './Bookmarks/Bookmarklist'

export default class StartPage extends Component {
  render() {
    const { products, showBookmarkIcon } = this.props.state
    return (
      <div>
        <MyNavbar />
        <MySwiper>
          <Products products={products} />
        </MySwiper>
        <BookmarkIcon
          show={showBookmarkIcon}
          bookmarked={this.props.onBookmark}
        />
      </div>
    )
  }
}
