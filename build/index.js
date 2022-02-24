"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const tasks_1 = require("./src/tasks");
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)(); // creates an express app
app.use((0, cors_1.default)()); // hopefully the two `cors` lines will do what we need
app.use(express_1.default.json());
// Routes
app.post('/tasks', tasks_1.createTask); // we can test if it works with POSTMAN, create a test task...
app.get('/tasks', tasks_1.getTasks);
app.patch('/tasks/:taskId', tasks_1.updateTask); // because of the `:` it takes an actual task Id in the path
app.listen(PORT, () => {
    console.log('Listening on Port: ', PORT);
});
