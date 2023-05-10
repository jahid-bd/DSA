class ToDoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  getTasks() {
    return this.tasks;
  }
}

class Task {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.completed = false;
  }

  complete() {
    this.completed = true;
  }

  isCompleted() {
    return this.completed;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }
}

const toDoList = new ToDoList();
const task1 = new Task('Buy groceries', 'Milk, eggs, bread');
const task2 = new Task('Clean the house', 'Vacuum, mop, dust');
toDoList.addTask(task1);
toDoList.addTask(task2);
console.log(toDoList.getTasks());
