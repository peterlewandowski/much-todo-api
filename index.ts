import express from 'express';
import cors from 'cors';
import { getTasks, createTask, updateTask } from './src/tasks'
const PORT = process.env.PORT || 3000;

const app = express(); // creates an express app
app.use(cors()); // hopefully the two `cors` lines will do what we need
app.use(express.json()); 

// Routes
app.post('/tasks', createTask); // we can test if it works with POSTMAN, create a test task...
app.get('/tasks', getTasks);
app.patch('/tasks/:taskId', updateTask); // because of the `:` it takes an actual task Id in the path


app.listen(PORT,() => {
    console.log('Listening on Port: ', PORT)
});

