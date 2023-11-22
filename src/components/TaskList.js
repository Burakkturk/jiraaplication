import TaskShow from "./TaskShow";

function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map((task) => {
        return <TaskShow task={task} />;
      })}
    </div>
  );
}

export default TaskList;
