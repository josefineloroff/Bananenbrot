import React, { Component } from 'react'

import './Icons.css'

import { Icon } from 'react-icons-kit'
import { bookmarkO } from 'react-icons-kit/fa/bookmarkO'

export default class BookmarkIcon extends Component {
  render() {
    return (
      <Icon
        size={'100%'}
        onClick={e => this.props.onBookmark(this.props.id)}
        onBookmark={e => this.props.isBookmarked(this.props.id)}
        className="bookmarkicon"
        icon={bookmarkO}
        style={{
          cursor: 'pointer',
          color: this.props.show ? '#17a2b8' : '#EE3333',
        }}
      />
    )
  }
}
