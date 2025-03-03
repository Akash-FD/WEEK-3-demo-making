const fs = require("fs"); // to read and write files in our local system
const file = "file.json";

// get data from json file
const getData = () => {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
    
  } catch (err) {
    console.error(err + "Error");
  }
};

// update json file
const updateJson = (task) => {
  fs.writeFileSync(file, JSON.stringify(task, null, 2));
};

const args = process.argv.slice(2);
const cases = args[0];

switch (cases) {
  // to add a task
  case "add":
    const task = args[1];
    if (!task) {
      return console.log("Please enter a task");
    }
    const taskObj = getData();
    taskObj.push({ id: taskObj.length + 1, name: task });
    updateJson(taskObj);
    console.log("Task added successfully");
    break;

  // to list all tasks
  case "list":
    const detList = getData();
    if (detList.length === 0) {
      return console.log("no data found");
    }
    detList.forEach((item) => {
      console.log(`${item.id}. ${item.name}`);
    });
    break;

  // to delete a task
  case "delete":
    const deleteItem = args[1];
    if (deleteItem > getData().length) {
      return console.log("Please enter valid id");
    }
    const deleteObj = getData();
    const newDeleteObj = deleteObj.filter(
      (item) => item.id !== parseInt(deleteItem)
    );
    updateJson(newDeleteObj);
    console.log("Task deleted");
    break;

  // to update a task
  case "update":
    const updateItem = args[1];
    const updateTask = args[2];
    if (updateItem > getData().length) {
      return console.log("Please enter valid id");
    }
    const updateObj = getData();
    updateObj.forEach((item) => {
      if (item.id === parseInt(updateItem)) {
        item.name = updateTask;
      }
    });
    updateJson(updateObj);
    console.log("Task updated");
    break;
  default:
    console.log("------- Task manegment command-------");
    console.log("to add a task : node <your file name> add <task>");
    console.log("to list all tasks : node <your file name> list");
    console.log("to delete a task : node <your file name> delete <id>");
    console.log(
      "to update a task : node <your file name> update <id> <new task> "
    );
    break;
}
