const mongoose = require('mongoose')
const Schema = mongoose.Schema

let memberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: [
            {
                validator: function emailValidate(value) {
                    return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value)
                },
                message: "invalid email format"
            },
            {
                isAsync: true,
                validator: async function unique(value) {
                    let found = await Member.findOne({ email: value })
                    if (found && found._id.toString() !== this._id.toString()) {
                        return false
                    } else {
                        return true
                    }
                },
                message: "this email taken. please choose another email."

            }
        ]
    },
    phone: {
        type: String,
        required: true,
        minlength: [11, 'length of phone number must be between 11 to 13'],
        maxlength: [13, 'length of phone number must be between 11 to 13']
    }
})

const Member = mongoose.model('Member', memberSchema)

module.exports = Member