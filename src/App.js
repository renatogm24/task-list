import Form from "./components/Form";
import List from "./components/List";
import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, settasks] = useState([]);

  const addTask = (task) => {
    settasks(tasks.concat({ value: task.value, isDone: false }));
  };

  const removeTask = (e, index) => {
    settasks(tasks.filter((item, idx) => idx !== index));
  };

  const checkTask = (e, index) => {
    const newArr = [...tasks];
    newArr[index].isDone = !newArr[index].isDone;
    settasks(newArr);
  };

  return (
    <div className="App">
      <List removeTask={removeTask} tasks={tasks} checkTask={checkTask} />
      <Form addTask={addTask} />
    </div>
  );
}

export default App;
