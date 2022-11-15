import { 
    createNewNews, 
    deleteSomeNews, 
    getAllNews, 
    getSomeNews, 
    updateSomeNews 
} from "../models/newsModels.js"



export const createNews = (req, res) => {
    try {
        const data = req.body
        createNewNews(data, (err, results) => {
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


export const getNews = (req, res) => {
    try {
        const data = req.body

        getAllNews(data, (err, results) => {
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


export const getOneNews = (req, res) => {
    try {
        const data = req.params.id

        getSomeNews(data, (err, results) => {
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


export const updateNews = (req, res) => {
	try {
		const data = req.body
		updateSomeNews(data, (err, results) => {
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


export const deleteNews = (req, res) => {
	try {
		const data = req.params.id
		deleteSomeNews(data, (err, results) => {
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
