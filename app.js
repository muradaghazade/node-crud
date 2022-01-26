const express = require('express')
const routes = require("./routes")
const app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

app.use(express.json())
app.use("/api", routes)


app.listen(3000)