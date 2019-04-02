const mongoose = require('mongoose')
const Schema = mongoose.Schema

let bookSchema = new Schema({
    isbn: String,
    title: String,
    author: String,
    category: String, 
    stock: Number
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book