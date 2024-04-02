const express = require("express")
const cors = require("cors")

require("dotenv").config()

const app = express()

app.request(express.json())
app.use(cors())

module.exports = app