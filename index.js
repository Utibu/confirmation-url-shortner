const express = require("express")
const env = require("dotenv")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const routes = require("./routes/index")

const PORT = process.env.PORT || 5000;

env.config()
const app = express()

mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
}, () => {
    console.log("Connected to database!")
})

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})