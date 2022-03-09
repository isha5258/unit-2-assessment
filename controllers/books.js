import { Book } from '../models/book.js'


function index(req, res) {
  Book.find({})
  .then(books => {
    res.render('books/index', {
      title: 'Unit 2 Assessment',
      books,
  })
})
  .catch(err => {
    console.log(err)
    res.redirect("/books")
  })
}

function newBook(req, res) {
  res.render('books/new', {
    title: 'Add a Book'
  })
}

function create(req, res) {
  req.body.isRead = false
  Book.create(req.body)
  .then(() => {
    res.redirect('/books')
  })
}

function deleteBook(req, res) {
  Book.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/books')
  })
}

export {
  index,
  newBook as new,
  create,
  deleteBook as delete,
}