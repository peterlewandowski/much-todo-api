const { connectDb } = require('./connectDb');

exports.createTask = (request, response) => {
    const newTask = {
        task: request.body.task,
        done: false
    };
    const db = connectDb();
    db.collection('tasks').add(newTask)
        .then(doc => response.status(201).send(doc.id))
        .catch(err => response.status(500).send(err));
}

exports.getTasks = (request, response) => {
    const db = connectDb();
    db.collection('tasks').get() // this is how we will GET our `tasks` collection from our db
        .then(snapshot => { // capturing `tasks` in the snapshot, getting All the tasks
            const taskList = snapshot.docs.map(doc => {
                let task = doc.data();
                task.id = doc.id;
                return task; // we expect to return an empty array
            });
            response.send(taskList);
        })
        .catch(err => response.status(500).send(err))
}

exports.updateTask = (request, response) => {
    const { taskId } = request.params;
    const isDone = request.body.done;
    db.collection('tasks')
        .doc(taskId)
        .update({done: isDone })
        .then(doc => response.status(202).send(doc))
        .catch(err => response.status(500).send(err));
}