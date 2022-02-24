"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.getTasks = exports.createTask = void 0;
const connectDb_1 = require("./connectDb");
const createTask = (request, response) => {
    const newTask = {
        task: request.body.task,
        done: false
    };
    const db = (0, connectDb_1.connectDb)();
    db.collection('tasks').add(newTask)
        .then(doc => response.status(201).send(doc.id))
        .catch(err => response.status(500).send(err));
};
exports.createTask = createTask;
const getTasks = (request, response) => {
    const db = (0, connectDb_1.connectDb)();
    db.collection('tasks').get() // this is how we will GET our `tasks` collection from our db
        .then(snapshot => {
        const taskList = snapshot.docs.map(doc => {
            let task = doc.data();
            task.id = doc.id;
            return task; // we expect to return an empty array
        });
        response.send(taskList);
    })
        .catch(err => response.status(500).send(err));
};
exports.getTasks = getTasks;
const updateTask = (request, response) => {
    const { taskId } = request.params;
    const isDone = request.body.done;
    const db = (0, connectDb_1.connectDb)();
    db.collection('tasks')
        .doc(taskId)
        .update({ done: isDone })
        .then(doc => response.status(202).send(doc))
        .catch(err => response.status(500).send(err));
};
exports.updateTask = updateTask;
