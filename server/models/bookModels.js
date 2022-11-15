
import db from '../config/config.js'


export const createNewBook = async (data, result) => {
	try {
		db.query('INSERT INTO books SET ?', data, (err, results) => {
			if (err) {
				return result(err, null)
			}
			else {
				return result(null, results)
			}
		})
	}
	catch (err) {
		console.log(err)
	}
}


export const getAllBooks = async (data, result) => {
	try {
		db.query('SELECT * FROM books', (err, results) => {
			if (err) {
				return result(err, null)
			}
			else {
				return result(null, results)
			}
		})
	}
	catch (err) {
		console.log(err)
	}
}


export const getSomeBook = async (data, result) => {
	try {
		db.query('SELECT * FROM books WHERE id = ?', data, (err, results) => {
			if (err) {
				return result(err, null)
			} else {
				return result(null, results)
			}
		})
	} catch (err) {
		console.log(err)
	}
}


export const updateSomeBook = async (data, result) => {
	const {id, ...rest } = data
	try {
		db.query(
			'UPDATE books SET ? WHERE id = ?',
			[rest, id],
			(err, results) => {
				if (err) {
					return result(err, null)
				} else {
					return result(null, results)
				}
			}
		)
	} catch (err) {
		console.log(err)
	}
}


export const deleteSomeBook = async (data, result) => {
	try {
		db.query('DELETE FROM books WHERE id = ?', data, (err, results) => {
			if (err) {
				return result(err, null)
			} else {
				return result(null, results)
			}
		})
	} catch (err) {
		console.log(err)
	}
}