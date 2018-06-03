import React, { Component } from 'react'
import './App.css'
import Component1 from './Components/Component1'
import Component2 from './Components/Component2'

class App extends Component {
  state = {
    //property of class
    category: [
      { categoryName: 'Mode', categoryId: 'efgh' },
      { categoryName: 'Werkzeug', categoryId: 'zkjsd' },
    ],
    product: [
      { productType: 'Pulli', productId: 'abcd' },
      { productType: 'Trouser', productId: 'tfzjk' },
    ],
    productName: [
      { name: 'Pulli', productNameId: 'abcd' },
      { name: 'Trouser', productNameId: 'abngvjhcd' },
    ],
    image: [
      { imageId: '', HTMLImageElement },
      { imageId: '', HTMLImageElement },
    ],
    description: [
      { descriptionText: 'blah blah', descriptionId: 'fgrt' },
      { descriptionText: 'blah bluh', descriptionId: 'gfch' },
    ],
  }

  changeCategoryName = (event, categoryId) => {
    const categoryId = this.state.category.find(cat => {
      return cat.categoryId === categoryId
    })

    const categoryName = { ...this.state.category[categoryId] }

    categoryName.categoryName = event.target.value

    const category = [...this.state.category]
    category[categoryId] = categoryName

    this.setState({
      categoryName: categoryName,
    })
  }

  changeProductType = (event, productId) => {
    this.setState({
      productChange: [{ productType: event.target.value }],
    })
  }

  changeProductName = (event, productNameId) => {
    this.setState({
      productNameChange: [{ name: event.target.value }],
    })
  }

  render() {
    if (this.state.category) {
      category = (
        <h3>
          {this.state.category.map((categoryName, categoryId) => {
            return (
              <Component1
                categoryName={category.categoryName}
                categoryKey={category.categoryId}
                changeCategoryName={event =>
                  this.changeCategoryName(event, categoryId)
                }
                if(this.state.product){
                    product=(
                      <h3>{this.state.product.map((productName, productId) => {
                        return(
                          <Component1
                            productType={product.productType}
                            productKey={product.productId}
                            changeProductType={event =>
                              this.changeProductType(event, productId)
                          />
                        )
                      })}
                      </h3>
                    )
                
                
                }
                }
              />
            )
          })}
        </h3>
      )
    }

    return (
      <div className="App">
        <div>
          <Component1
            category={this.state.category[0].categoryName}
            product={this.state.product[0].productType}
          />

          <Component2 productName={this.state.productName.name} />
        </div>
      </div>
    )
  }
}

// export default App
// if (this.state.showPersons) {
//   persons = (
//     <div>
//       {this.state.persons.map((person, index) => {
//         return (
//           <Person
//             click={() => this.deletePersonHandler(index)}
//             name={person.name}
//             age={person.age}
//             key={person.id}
//             change={event => this.nameChangedHandler(event, person.id)}
//           />
//         )
//       })}
//     </div>
//   )
// }
