const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://grubzen:grubzen@grubzen.6gbc4dt.mongodb.net/grubzen'
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewurlParser: true })
var connection = mongoose.connection

connection.on('error', () => {
    console.log('Mongo DB Connection failed')
})
connection.on('connected', () => {
    console.log('Mongo DB Connection Successful')
})
module.exports = mongoose