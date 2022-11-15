
import {
    createNewBook, 
    deleteSomeBook, 
    getAllBooks, 
    getSomeBook, 
    updateSomeBook
} from "../models/bookModels.js"


export const createBook = (req, res) => {
    try {
        const data = req.body
        createNewBook(data, (err, results) => {
            if (err) {
                res.status(400).json({
                    message: err
                })
            }
            else {
                res.status(201).json(results)
            }
        })
    }
    catch (err) {
        res.status(400).json({
            message: 'error create'
        })
    }
}


export const getBooks = (req, res) => {
    try {
        const data = req.body

        getAllBooks(data, (err, results) => {
            if (err) {
                res.status(400).json({
                    message: err
                })
            }
            else {
                res.status(200).json(results)
            }
        })
    }
    catch (err) {
        res.status(400).json({
            message: 'Error get'
        })
    }
}


export const getOneBook = (req, res) => {
    try {
        const data = req.params.id

        getSomeBook(data, (err, results) => {
            if (err) {
                res.status(400).json({
                    message: err
                })
            }
            else {
                res.status(200).json(results)
            }
        })
    }
    catch (err) {
        res.status(400).json({
            message: 'Error get'
        })
    }
}


export const updateBook = (req, res) => {
	try {
		const data = req.body
		updateSomeBook(data, (err, results) => {
			if (err) {
				res.status(400).json({
					message: err
				})
			} else {
				res.status(200).json(results)
			}
		})
	} catch (err) {
		res.status(400).json({
			message: 'Error put'
		})
	}
}


export const deleteBook = (req, res) => {
	try {
		const data = req.params.id
		deleteSomeBook(data, (err, results) => {
			if (err) {
				res.status(400).json({
					message: err
				})
			} else {
				res.status(200).json(results)
			}
		})
	} catch (err) {
		res.status(400).json({
			message: 'Error delete'
		})
	}
}
