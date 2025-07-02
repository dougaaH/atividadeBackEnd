const tasks = {};

function addTask(name, timeoutId) {
  tasks[name] = {
    name,
    status: 'pendente',
    timeoutId,
  };
}

function completeTask(name) {
  if (tasks[name]) {
    tasks[name].status = 'concluída';
    tasks[name].timeoutId = null;
  }
}

function cancelTask(name) {
  if (tasks[name]) {
    clearTimeout(tasks[name].timeoutId);
    tasks[name].status = 'cancelada';
    tasks[name].timeoutId = null;
  }
}

function getTasks() {
  return tasks;
}

module.exports = {
  addTask,
  completeTask,
  cancelTask,
  getTasks,
};
