import Form from "./components/Form";
import List from "./components/List";
import "./App.css";
import { useState } from "react";

function App() {
  const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  console.log(initialTasks);

  const [tasks, settasks] = useState(initialTasks);

  const addTask = (task) => {
    const newTasks = tasks.concat({ value: task.value, isDone: false });
    settasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const removeTask = (e, index) => {
    const newTasks = tasks.filter((item, idx) => idx !== index);
    settasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const checkTask = (e, index) => {
    const newArr = [...tasks];
    newArr[index].isDone = !newArr[index].isDone;
    settasks(newArr);
    localStorage.setItem("tasks", JSON.stringify(newArr));
  };

  return (
    <div className="App">
      <List removeTask={removeTask} tasks={tasks} checkTask={checkTask} />
      <Form addTask={addTask} />
    </div>
  );
}

export default App;
