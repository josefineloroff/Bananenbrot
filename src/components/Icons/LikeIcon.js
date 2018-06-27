import React, { Component } from 'react'

import './Icons.css'

import { Icon } from 'react-icons-kit'
import { heartO } from 'react-icons-kit/fa/heartO'

export default class LikeIcon extends Component {
  render() {
    return (
      <Icon
        size={'100%'}
        onClick={e => this.props.onLike(this.props.id)}
        isLiked={this.props.isLiked}
        className="likeicon"
        icon={heartO}
        style={{
          cursor: 'pointer',
          color: this.props.show ? '#17a2b8' : '#EE3333',
        }}
      />
    )
  }
}
