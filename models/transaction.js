const mongoose = require('mongoose')
const Schema = mongoose.Schema

let transactionSchema = new Schema({
    member: {
        type: Schema.Types.ObjectId,
        ref: 'Member'
    },
    in_date: {
        type: Date,
        default: null
    },
    out_date: Date,
    due_date: Date,
    fine: {
        type: Number,
        default: 0
    },
    booklist: [
        {
            type: Schema.Types.ObjectId,
            ref: "Book",
            default: undefined
        }
    ]
})

function getDaysBetweenDates(d0, d1) {
    var msPerDay = 8.64e7;

    var x0 = new Date(d0);
    var x1 = new Date(d1);

    x0.setHours(12, 0, 0);
    x1.setHours(12, 0, 0);

    return Math.round((x1 - x0) / msPerDay);
}

transactionSchema.post('findOneAndUpdate', function (doc, next) {
    if (doc.in_date > doc.due_date) {
        doc.fine = getDaysBetweenDates(doc.due_date, doc.in_date) * 1000
    } else {
        doc.fine = 0
    }
    doc.save()
    next()
})

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction