import React, { Component } from 'react'
import Products from '../Components/Products/Products'
import Product from '../Components/Products/Product/Product'
import MySwiper from '../Components/Swiper/MySwiper'

import DontPanic from '../Images/DontPanic.jpg'
import R2D2 from '../Images/R2D2.jpg'
import Gameboy from '../Images/Gameboy.jpg'

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
          descriptionText: 'blah blah',
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
