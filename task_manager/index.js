const readline = require('readline');
const taskManager = require('./events/taskManager');
const {
  addTask,
  completeTask,
  cancelTask,
  getTasks,
} = require('./models/taskStorage');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

taskManager.on('taskCreated', (name) => {
  console.log(`Tarefa '${name}' criada.`);
});
taskManager.on('taskCompleted', (name) => {
  console.log(`Tarefa '${name}' concluída.`);
});
taskManager.on('taskCancelled', (name) => {
  console.log(`Tarefa '${name}' cancelada.`);
});

console.log("Comandos: create <nome>, cancel <nome>, list, exit");

rl.on('line', (input) => {
  const [command, ...args] = input.trim().split(' ');
  const name = args.join(' ');

  switch (command) {
    case 'create':
      if (!name) {
        console.log("Informe o nome da tarefa.");
        break;
      }
      const timeoutId = setTimeout(() => {
        completeTask(name);
        taskManager.emit('taskCompleted', name);
      }, 15000);
      addTask(name, timeoutId);
      taskManager.emit('taskCreated', name);
      break;
    case 'cancel':
      if (!name) {
        console.log("Informe o nome da tarefa.");
        break;
      }
      cancelTask(name);
      taskManager.emit('taskCancelled', name);
      break;
    case 'list':
      const tasks = getTasks();
      Object.values(tasks).forEach(task => {
        console.log(`- ${task.name}: ${task.status}`);
      });
      break;
    case 'exit':
      rl.close();
      break;
    default:
      console.log("Comando não reconhecido.");
  }
});

rl.on('close', () => {
  console.log("Encerrando...");
  process.exit(0);
});
