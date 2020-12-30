const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express();
const PORT = 3000;

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.use(morgan('dev'))

// only required to receive web forms posted directly from a browser
//app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api', require('./routes'))

app.use(express.static("public", { extensions: ['html']}))

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})