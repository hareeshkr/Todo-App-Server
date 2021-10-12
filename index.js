const express = require('express')
const mongoose = require('mongoose')
const Todo = require('./todo')
const cors = require('cors')

mongoose.connect('mongodb://localhost/todoApp')
const db = mongoose.connection
db.once('open', ()=> {console.log('database connected');})

const app = express()

app.use(express.json())
app.use(cors())

app.get('/api/v1/todos', async(req, res)=>{
    try {
        const todos = await Todo.find();
        res.json(todos)
    } catch (error) {
        res.json({message: error.message})
    }
})

app.post('/api/v1/todos', async(req, res) =>{
    try{
        const todo = await Todo.create({
            todoTask: req.body.todoTask
        })
        res.json({status: true, data: "todo created successfully"})
    }catch(error) {
        res.json({message: error.message})
    }   
})



app.listen(5000, ()=>{
    console.log('app listen in port 5000');
})