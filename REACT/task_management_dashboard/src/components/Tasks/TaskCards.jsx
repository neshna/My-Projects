import React from "react";
import Task from "./Task";
import "./TaskCards.css";
import EmptyStates from "./EmptyStates";

const TaskCards = ({ 
  displayingTasks, 
  tasks, 
  handleDelete, 
  completeTask ,
  editTask,
  setAddTask}) => {
  if (tasks.length === 0) {
    return (
      <EmptyStates
        title="No Tasks Created Yet"
        message="No tasks Found Create Your First Task"
      />
    );
  }

  if (tasks.length > 0 && displayingTasks.length === 0) {
    return (
      <EmptyStates
        title="No Results Found"
        message="Try Changing your Search Filter"
      />
    );
  }

  return (
    <div className="task-cards-container">
      {displayingTasks.map((task, index) => {
        return (
          <Task
            task={task}
            key={index}
            handleDelete={handleDelete}
            completeTask={completeTask}
            editTask={editTask}
            setAddTask={setAddTask}
          />
        );
      })}
    </div>
  );
};

export default TaskCards;
