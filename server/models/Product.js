const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  category: String,
  name: String,
  image: String,
  descriptionText: String,
  index: Number,
  showBookmarkIcon: Boolean,
  showLikeIcon: Boolean,
  showTrashIcon: Boolean,
  likes: Number,
  trashes: Number,
  isLiked: Number,
  isBookmarked: Number,
  isTrashed: Number,
})

module.exports = mongoose.model('Product', productSchema)
