import React, { Component } from 'react'
import { BrowserRouter as Router, Route, LoginRoute } from 'react-router-dom'

import LoginPage from '../components/Authentication/LoginPage'
import RegistrationPage from '../components/Authentication/RegistrationPage'

import StartPage from '../components/StartPage'
import Bookmarklist from '../components/Bookmarks/Bookmarklist'
import Likelist from '../components/Likes/Likelist'
import Trashlist from '../components/Trashes/Trashlist'

import '../styles/index.css'

class App extends Component {
  state = {
    selectedIndex: 0,
    showBookmarkIcon: true,
    showLikeIcon: true,
    showTrashIcon: true,
    filter: false,
    products: [],
  }

  componentDidMount() {
    fetch('/state', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then(res => res.json())
      .then(state => {
        this.setState({ products: [...state.products] })
      })
  }

  trash = id => {
    const foundProductIndex = this.state.products.findIndex(
      product => product.id === id
    )
    const foundProduct = this.state.products[foundProductIndex]
    const startOfNewArray = this.state.products.slice(0, foundProductIndex)
    const endOfNewArray = this.state.products.slice(foundProductIndex + 1)
    const newObject = {
      ...foundProduct,
      isTrashed: !foundProduct.isLiked,
      showTrashIcon: false,
    }

    this.setState({
      products: [...startOfNewArray, newObject, ...endOfNewArray],
      trashes: this.state.trashes + 1,
    })
  }

  like = id => {
    const foundProductIndex = this.state.products.findIndex(
      product => product.id === id
    )
    const foundProduct = this.state.products[foundProductIndex]
    const startOfNewArray = this.state.products.slice(0, foundProductIndex)
    const endOfNewArray = this.state.products.slice(foundProductIndex + 1)
    const newObject = {
      ...foundProduct,
      isLiked: !foundProduct.isLiked,
      showLikeIcon: false,
      //likes: foundProduct.likes + 1,
    }

    this.setState({
      products: [...startOfNewArray, newObject, ...endOfNewArray],
      likes: this.state.likes + 1,
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
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegistrationPage} />

          <Route
            path="/"
            exact
            render={() => (
              <StartPage
                state={this.state}
                onBookmark={this.bookmark}
                isBookmarked={this.bookmark}
                onLike={this.like}
                isLiked={this.like}
                onTrash={this.trash}
                isTrashed={this.trash}
              />
            )}
          />
          <Route
            path="/bookmarklist"
            render={() => <Bookmarklist state={this.state} />}
          />
          <Route
            path="/likelist"
            render={() => <Likelist state={this.state} />}
          />
          <Route
            path="/trashlist"
            render={() => <Trashlist state={this.state} />}
          />
        </div>
      </Router>
    )
  }
}

export default App
