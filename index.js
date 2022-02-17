const express = require('express'); // import express ES5 style
const cors = require('cors'); // allows cross origin resource sharing
const { getTasks } = require('./src/tasks');
const PORT = process.env.PORT || 3000; // establish a port to be used, check if there is an environmental variable which has already set a port to be used

const app = express(); // creates an express app
app.use(cors()); // hopefully the two `cors` lines will do what we need
app.use(express.json()); 

// Routes
app.post('/tasks', createTask); // we can test if it works with POSTMAN, create a test task...
app.get('/tasks', getTasks);
// app.patch('/tasks/:taskId', updateTask); // because of the `:` it takes an actual task Id in the path


app.listen(PORT,() => {
    console.log('Listening on Port: ', PORT)
});