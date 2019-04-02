const Transaction = require('../models/transaction')
const mongoose = require('mongoose')
module.exports = {

    async create(req, res) {
        let transaction = new Transaction({
            member: req.body.member,
            out_date: new Date(),
            due_date: new Date(req.body.due_date),
            booklist: req.body.booklist
        })
        try {
            let newTransaction = transaction.save()
            res.status(201).json(newTransaction)
        } catch (err) {
            res.status(500).json({
                msg: 'internal server error.'
            })
        }
    },

    async findAll(req, res) {
        try {
            let allData = await Transaction.find({}).populate("booklist")

            if (!req.query.id) {
                res.status(200).json(allData)
            } else {
                let found = []
                allData.map(e => {
                    e.booklist.map(b => {
                        found.push(e)
                    })
                })
                res.status(200).json(found)
            }
        } catch (err) {
            res.status(500).json({
                msg: 'internal server error.'
            })
        }

    },

    async findOne(req, res) {
        try {
            let oneData = await Transaction.findById(req.params.id).populate("booklist")
            if (!oneData) {
                res.status(404).json({
                    msg: "not Found."
                })
            } else {
                res.status(200).json(oneData)
            }
        } catch (err) {
            console.log(err)
            res.status(500).json({
                msg: "internal server error."
            })
        }
    },

    async update(req, res) {
        try {
            let found = await Transaction.findById(req.params.id)
            if (!found) {
                res.status(404).json({
                    msg: 'not Found.'
                })
            } else {
                let update = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true })
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
            let foundData = await Transaction.findById(req.params.id)
            if (foundData) {
                let deletedData = await Transaction.findByIdAndDelete(req.params.id)
                res.status(200).json(deletedData)
            } else {
                res.status(404).json({
                    msg: 'not Found.'
                })
            }
        } catch (err) {
            res.status(500).json({
                msg: 'internal server error'
            })
        }
    }
}

