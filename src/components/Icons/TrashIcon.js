import React, { Component } from 'react'

import './Icons.css'

import { Icon } from 'react-icons-kit'
import { trashO } from 'react-icons-kit/fa/trashO'

export default class TrashIcon extends Component {
  render() {
    return (
      <Icon
        size={'100%'}
        onClick={e => this.props.onTrash(this.props.id)}
        onTrash={e => this.props.isTrashed(this.props.id)}
        className="trashicon"
        icon={trashO}
        style={{
          cursor: 'pointer',
          color: this.props.show ? '#17a2b8' : '#EE3333',
        }}
      />
    )
  }
}
