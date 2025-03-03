const fs = require("fs");
const filePath = "./todo/tasks.json";

const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

const saveTasks = (tasks) => {
  try {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJSON);
  } catch (error) {}
};

const addTask = (task) => {
  const tasks = loadTasks();
  tasks.push({ task });
  saveTasks(tasks);
  console.log("Task added:", task);
};

const listTasks = () => {
    const tasks = loadTasks()
    tasks.forEach((task, index) => console.log(`${index+1} - ${task.task}`) );
}

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("Command not Found");
}
