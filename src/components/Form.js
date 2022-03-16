import { TextField, Button } from "@mui/material";
import { useState } from "react";

const Form = ({ addTask }) => {
  const [task, setTask] = useState({
    value: "",
    error: "",
  });

  const [hasErrors, sethasErrors] = useState(false);

  const onChange = (e) => {
    if (e.target.value !== "" && e.target.value.length < 5) {
      setTask({
        value: e.target.value,
        error: "Task name must be 5 chars at least",
      });
    } else {
      setTask({
        value: e.target.value,
        error: "",
      });
    }
  };

  const handleSubmit = (e, task) => {
    e.preventDefault();
    if (task.error !== "") {
      sethasErrors(true);
      setTimeout(() => {
        sethasErrors(false);
      }, 2000);
    } else {
      addTask(task);
      setTask({ value: "", error: "" });
    }
  };

  return (
    <form
      className="flex flex-col gap-3 w-1/2 mx-auto my-5"
      onSubmit={(e) => handleSubmit(e, task)}
    >
      {hasErrors ? <p className="text-red-500">Check the fields</p> : ""}
      <TextField
        id="outlined-basic"
        label="New task"
        variant="outlined"
        className="w-full"
        onChange={onChange}
        value={task.value}
        error={task.error !== ""}
        helperText={task.error}
      />
      <Button variant="contained" className="mt-3" type="submit">
        Enviar
      </Button>
    </form>
  );
};

export default Form;
