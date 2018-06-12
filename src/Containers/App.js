import React, { Component } from 'react'
import MyNavbar from '../components/Navbar/MyNavbar'
import Products from '../components/Products/Products'
import MySwiper from '../components/Swiper/MySwiper'

import '../styles/index.css'
import { Navbar } from 'reactstrap'

import DontPanic from '../../src/assets/images/DontPanic.jpg'
import R2D2 from '../../src/assets/images/R2D2.jpg'
import Gameboy from '../../src/assets/images/Gameboy.jpg'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedIndex: 0,

      products: [
        {
          category: 'Mode',
          name: 'T-Shirt',
          image: DontPanic,
          descriptionText:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet',
          id: 1,
          index: 0,
        },

        {
          category: 'Mode',
          name: 'T-Shirt 2',
          image: R2D2,
          descriptionText: 'bluh bluh',
          id: 2,
          index: 1,
        },

        {
          category: 'Mode',
          name: 'T-Shirt 3',
          image: Gameboy,
          descriptionText: 'bloh bloh',
          id: 3,
          index: 2,
        },

        {
          category: 'Mode',
          name: 'T-Shirt',
          image: DontPanic,
          descriptionText: 'blah blah',
          id: 4,
          index: 3,
        },

        {
          category: 'Mode',
          name: 'T-Shirt 2',
          image: R2D2,
          descriptionText: 'bluh bluh',
          id: 5,
          index: 4,
        },

        {
          category: 'Mode',
          name: 'T-Shirt 3',
          image: Gameboy,
          descriptionText: 'bloh bloh',
          id: 6,
          index: 5,
        },
      ],
    }
  }

  // swipeProducts = () => {
  //   let mySwiper = new Swiper('.swiper-container', {
  //     speed: 400,
  //     spaceBetween: 100
  //   });
  // }

  // changeProductRight = (id) => {
  //   let products = this.state.products
  //   let productIndex = this.state.products.findIndex(prod => {
  //     this.setState({ index: (this.state.index + 1) % products.length })
  //     //return prod.id === id
  //   })
  //   const product = {
  //     ...this.state.products[productIndex]
  //   }

  // };

  changeProductRight = () => {
    let products = [...this.state.products]
    this.setState({ index: (this.state.index + 1) % products.length })
  }

  render() {
    return (
      <div>
        <MyNavbar />
        <MySwiper
          goPrev={this.changeProductLeft}
          goNext={this.changeProductRight}
        >
          <Products products={this.state.products} />
        </MySwiper>
      </div>
    )
  }
}

export default App
