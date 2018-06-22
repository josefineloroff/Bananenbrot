import React, { Component } from 'react'
import './Swiper.css'
import Swiper from 'react-id-swiper'

export default class MySwiper extends Component {
  render() {
    const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      spaceBetween: 30,
    }
    return <Swiper {...params}>{this.props.children}</Swiper>
  }
}
