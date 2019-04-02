require("dotenv").config()

const express = require("express")
const cors = require("cors")
const app = express()
const port = 3000

const mongoose = require("mongoose")
mongoose.set("useFindAndModify", false)

mongoose.connect('mongodb://localhost:27017/p2w1', { useNewUrlParser: true })

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use(cors())

const bookRoutes = require("./routes/book")
const memberRoutes = require("./routes/member")
const transactionRoutes = require("./routes/transaction")

app.use("/books", bookRoutes)
app.use("/members", memberRoutes)
app.use("/transactions", transactionRoutes)


module.exports = app
app.listen(port, () => console.log("listening on port" + port))
