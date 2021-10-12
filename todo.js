const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    todoTask: {type: String, required: true}
})

module.exports = mongoose.model('todo', todoSchema)