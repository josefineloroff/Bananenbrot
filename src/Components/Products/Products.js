import React from 'react'
import Product from './Product/Product'

const products = props =>
  props.products.map((product, index) => {
    return (
      <Product
        category={product.category}
        name={product.name}
        image={product.image}
        descriptionText={product.descriptionText}
        key={product.id}
        id={product.id}
        showBookmarkIcon={product.showBookmarkIcon}
        onBookmark={props.onBookmark}
      />
    )
  })

export default products
