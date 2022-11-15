import express from 'express'
import {
    createBook,
    deleteBook,
    getBooks,
    getOneBook,
    updateBook
} from '../controllers/bookController.js'

import checkAuth from '../utils/checkAuth.js'
import checkRole from '../utils/checkRole.js'

const router = express.Router()

router
    .route('/')
    .post(checkAuth, checkRole, createBook)
    .get(getBooks)
    .put(checkAuth, checkRole, updateBook)

router
    .route('/some/:id')
    .delete(checkAuth, checkRole, deleteBook)
    .get(getOneBook)



export default router





