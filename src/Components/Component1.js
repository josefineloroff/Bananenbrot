// import React, { Component } from 'react'

// export default class componentName extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }

import React from 'react'

const component1 = props => {
  return (
    <div>
      <div>
        {' '}
        <input
          type="text"
          changeCategoryName={props.CategoryName}
          value={props.CategoryName}
        />
      </div>
      <h3>
        {props.categoryName}
        {': '}
        {props.productType}
      </h3>
    </div>
  )
}

export default component1
