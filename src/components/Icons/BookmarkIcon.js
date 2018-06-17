import React, { Component } from 'react'

import './Icons.css'

import { Icon } from 'react-icons-kit'
import { bookmarkO } from 'react-icons-kit/fa/bookmarkO'

export default class BookmarkIcon extends Component {
  render() {
    if (this.props.show) {
      return (
        <Icon
          size={'70%'}
          onClick={e => this.props.onBookmark(this.props.id)}
          float={'right'}
          className="bookmarkicon"
          icon={bookmarkO}
          style={{ cursor: 'pointer' }}
          isBookmarked={this.props.isBookmarked}
        />
      )
    } else {
      return null
    }
  }
}
