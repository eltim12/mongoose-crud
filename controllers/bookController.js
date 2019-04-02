const Book = require('../models/book')

module.exports = {

    async create(req, res) {
        let book = new Book({
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        })
        try {
            let newBook = await book.save()
            res.status(201).json(newBook)
        } catch (err) {
            res.status(500).json({
                msg: 'internal server error'
            })
        }
    },

    async findAll(req, res) {
        try {
            let allBooks = await Book.find()
            res.status(200).json(allBooks)
        } catch (err) {
            res.status(500).json({
                msg: 'internal server error'
            })
        }

    },

    async findOne(req, res) {
        try {
            let oneBook = await Book.findById(req.params.id)
            if (oneBook) {
                res.status(200).json(oneBook)
            } else {
                res.status(404).json({
                    msg: 'not Found.'
                })
            }
        } catch (err) {

        }
    },

    async update(req, res) {
        try {
            let found = await Book.findById(req.params.id)
            console.log(found, 'ini found nyaa=========')
            if (!found) {
                res.status(400).json({
                    msg: 'not Found.'
                })
            } else {
                let update = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
                res.status(200).json(update)
            }
        } catch (err) {
            res.status(500).json({
                msg: 'internal server error.'
            })
        }
    },

    async delete(req, res) {
        try {
            let found = await Book.findById(req.params.id)
            if (!found) {
                res.status(404).json({
                    msg: "not found."
                })
            } else {
                let deleted = await Book.findByIdAndDelete(req.params.id)
                res.status(200).json(deleted)
            }
        } catch (err) {
            res.status(500).json({
                msg: 'internal server error.',
            })
        }
    }
}