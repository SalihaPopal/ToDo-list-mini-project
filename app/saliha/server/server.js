const express = require('express');
const lodash = require("lodash");
const cors = require('cors');
const app = express();
const port = 8080;


app.use(express.json());
app.use(cors());


const todos = require('../data/data.json');
// let todos = [];

app.get("/", (req, res) => {
  res.send("Welcome!, add your todos here.");
 });
 
 
 app.get('/todos', (req, res) => {
  console.log("Get todos")
  res.status(200).json({todos})
 })
 
 app.post('/todos', (req, res) => {
  console.log("post a new task")
 
  const { task, completed } = req.body
 const newTask = {
   id: todos.length + 1,
   task,
   completed,
 } 
 todos.push(newTask)
 res.json(newTask)
})


app.put('/todos/:task', (req, res) => {
 console.log("Update a new task")
 const updatedTask = req.body.id.task.completed
 todos.push(updatedTask)
 res.send(updatedTask)
})


app.delete('/todos/:id', (req, res) => {
  console.log("Delete a task by id")
  const deletedTask = req.params.id
  res.status(200).send(deletedTask)
 })
 
 
 app.listen(port, ()=> {
  console.log(`Example app listening on port ${port}`)
 })
 