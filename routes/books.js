import { Router } from 'express'
import * as booksCtrl from '../controllers/books.js'

const router = Router()

/* GET users listing. */
router.get('/', booksCtrl.index)
// GET - localhost:3000/books/new
router.get('/new', booksCtrl.new)
// POST - localhost:3000/books
router.post('/', booksCtrl.create)
// DELETE - localhost:3000/books
router.delete('/:id', booksCtrl.delete)


export {
  router
}
