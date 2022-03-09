import mongoose from "mongoose";

const Schema = mongoose.Schema

const booksSchema = new Schema({
  name: {
    type: String 
  },
  isRead: {
    type: Boolean
  }
}, {

  timestamps: true
})

const Book = mongoose.model('Book', booksSchema)

export {
Book
}