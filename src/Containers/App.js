import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Bookmarklist from '../components/Bookmarks/Bookmarklist'
import StartPage from '../components/StartPage'
import MyNavbar from '../components/Navbar/MyNavbar'

import '../styles/index.css'

import DontPanic from '../../src/assets/images/DontPanic.jpg'
import R2D2 from '../../src/assets/images/R2D2.jpg'
import Gameboy from '../../src/assets/images/Gameboy.jpg'

class App extends Component {
  state = {
    selectedIndex: 0,
    showBookmarkIcon: true,
    filter: false,
    products: [
      {
        category: 'Mode aus aller Welt',
        name: 'T-Shirt mit schickem Muster',
        image: DontPanic,
        descriptionText:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet',
        id: 1,
        index: 0,
        showBookmarkIcon: true,
        likes: 0,
      },

      {
        category: 'Mode',
        name: 'T-Shirt 2',
        image: R2D2,
        descriptionText: 'bluh bluh',
        id: 2,
        index: 1,
        showBookmarkIcon: true,
        likes: 0,
      },

      {
        category: 'Mode',
        name: 'T-Shirt 3',
        image: Gameboy,
        descriptionText: 'bloh bloh',
        id: 3,
        index: 2,
        showBookmarkIcon: true,
        likes: 0,
      },

      {
        category: 'Mode',
        name: 'T-Shirt',
        image: DontPanic,
        descriptionText: 'blah blah',
        id: 4,
        index: 3,
        showBookmarkIcon: true,
        likes: 0,
      },

      {
        category: 'Mode',
        name: 'T-Shirt 2',
        image: R2D2,
        descriptionText: 'bluh bluh',
        id: 5,
        index: 4,
        showBookmarkIcon: true,
        likes: 0,
      },

      {
        category: 'Mode',
        name: 'T-Shirt 3',
        image: Gameboy,
        descriptionText: 'bloh bloh',
        id: 6,
        index: 5,
        showBookmarkIcon: true,
        likes: 0,
      },
    ],
  }
  increaseLikes(id) {
    const foundProductIndex = this.state.products.findIndex(
      quote => quote.id === id
    )
    const foundProduct = this.state.products[foundProductIndex]
    const startOfNewArray = this.state.products.slice(0, foundProductIndex)
    const endOfNewArray = this.state.products.slice(foundProductIndex + 1)
    const newObject = { ...foundProduct, likes: foundProduct.likes + 1 }

    this.setState({
      products: [...startOfNewArray, newObject, ...endOfNewArray],
    })
  }

  bookmark = id => {
    const foundProductIndex = this.state.products.findIndex(
      product => product.id === id
    )

    const foundProduct = this.state.products[foundProductIndex]

    const startOfNewArray = this.state.products.slice(0, foundProductIndex)
    const endOfNewArray = this.state.products.slice(foundProductIndex + 1)
    const newObject = {
      ...foundProduct,
      isBookmarked: !foundProduct.isBookmarked,
      showBookmarkIcon: false,
    }

    this.setState({
      products: [...startOfNewArray, newObject, ...endOfNewArray],
    })
  }

  toggleFilter = () => {
    this.setState({
      filter: !this.state.filter,
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Route
            path="/"
            exact
            render={() => (
              <StartPage state={this.state} onBookmark={this.bookmark} />
            )}
          />
          <Route
            path="/bookmarklist"
            render={() => <Bookmarklist state={this.state} />}
          />
        </div>
      </Router>
    )
  }
}

export default App
