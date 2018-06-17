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
        showLikeIcon={product.showLikeIcon}
        showTrashIcon={product.showTrashIcon}
        onLike={props.onLike}
        onBookmark={props.onBookmark}
        onTrash={props.onTrash}
        isBookmarked={product.isBookmarked}
        isLiked={product.isLiked}
        isTrashed={product.isTrashed}
      />
    )
  })

export default products
