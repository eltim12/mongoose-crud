const Member = require('../models/members')

module.exports = {

    async create(req, res) {
        const member = new Member({
            name: req.body.name,
            address: req.body.address,
            zipcode: req.body.zipcode,
            email: req.body.email,
            phone: req.body.phone
        })

        try {
            let newMember = await member.save()
            res.status(201).json(newMember)
        } catch (err) {
            if (err.errors.name) {
                res.status(400).json({
                    msg: err.errors.name.message
                })
            } else if (err.errors.address) {
                res.status(400).json({
                    msg: err.errors.address.message
                })
            } else if (err.errors.zipcode) {
                res.status(400).json({
                    msg: err.errors.zipcode.message
                })
            } else if (err.errors.email) {
                res.status(400).json({
                    msg: err.errors.email.message
                })
            } else if (err.errors.phone) {
                res.status(400).json({
                    msg: err.errors.phone.message
                })
            }
            else {
                res.status(500).json('internal server error')
            }
        }
    },

    async findAll(req, res) {
        try {
            let all = await Member.find({})
            res.status(200).json(all)
        } catch (err) {
            res.status(500).json({
                msg: 'internal server error.'
            })
        }

    },

    async find(req, res) {
        try {
            let foundUser = await Member.findById(req.params.id)
            if (foundUser) {
                res.status(200).json(foundUser)
            } else {
                res.status(404).json({
                    msg: 'not Found.'
                })
            }
        } catch (err) {
            res.status(404).json({
                msg: err.message
            })
        }
    },

    async update(req, res) {
        try {
            let found = await Member.findById(req.params.id)
            if (!found) {
                res.status(404).json({
                    msg: 'not Found.'
                })
            } else {
                let update = await Member.findByIdAndUpdate(req.params.id, req.body)
                res.status(200).json(update)
            }
        } catch (err) {
            res.status(500).json({
                msg: 'internal server error'
            })
        }
    },

    async delete(req, res) {
        try {
            let found = await Member.findById(req.params.id)
            if (!found) {
                res.status(404).json({
                    msg: "not found."
                })
            } else {
                let deleted = await Member.findByIdAndDelete(req.params.id)
                res.status(200).json(deleted)
            }
        } catch (err) {
            res.status(500).json({
                msg: 'internal server error.'
            })
        }
    }
}