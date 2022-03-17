import { Button } from "@mui/material";

const List = ({ tasks, removeTask, checkTask }) => {
  return (
    <div className="flex flex-col gap-3 w-1/2 mx-auto my-5">
      {tasks.map((task, idx) => {
        return (
          <div key={idx} className="flex gap-3 items-center">
            <p className={task.isDone ? "text-xl line-through" : "text-xl"}>
              {task.value}
            </p>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              value={task.isDone}
              checked={task.isDone}
              onChange={(e) => checkTask(e, idx)}
            />
            <Button
              variant="contained"
              color="error"
              className="mt-3"
              onClick={(e) => removeTask(e, idx)}
            >
              Delete
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
