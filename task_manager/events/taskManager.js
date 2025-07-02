const EventEmitter = require('events');
class TaskManager extends EventEmitter {}

const taskManager = new TaskManager();

module.exports = taskManager;
