import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Bookmarklist from '../components/Bookmarks/Bookmarklist'
import StartPage from '../components/StartPage'
import '../styles/index.css'

import DontPanic from '../../src/assets/images/DontPanic.jpg'
import R2D2 from '../../src/assets/images/R2D2.jpg'
import Gameboy from '../../src/assets/images/Gameboy.jpg'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedIndex: 0,
      showBookmarkIcon: true,

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

  clickBookmarkIcon = () => {
    this.setState({ showBookmarkIcon: false })
  }

  render() {
    return (
      <Router>
        <div>
          <Route
            path="/"
            exact
            render={() => (
              <StartPage
                state={this.state}
                onBookmark={this.clickBookmarkIcon}
              />
            )}
          />
          <Route path="/bookmarklist" component={Bookmarklist} />
        </div>
      </Router>
    )
  }
}

export default App
