import React from 'react'
import Product from './Product/Product'

const Products = props =>
  props.products.map((product, index) => {
    return (
      <Product
        category={product.category}
        name={product.name}
        imageUrl={product.imageUrl}
        file={product.imageUrl}
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

export default Products
