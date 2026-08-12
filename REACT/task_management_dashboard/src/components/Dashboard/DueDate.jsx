import React from "react";
import DueDateTask from "./DueDateTask";
import "./DueDate.css";

const DueDate = ({ tasks, completeTask }) => {
  const priorityOrder = {
    high: 1,
    medium: 2,
    low: 3,
  };

  const dueTasks = tasks
    .filter(
      (task) =>
        task.dueDate == new Date().toISOString().split("T")[0] &&
        task.status !== "done",
    )
    .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
    .slice(0, 3);

  return (
    <div className="duedate-sec">
      <h4 className="duedate-hdr"> Due Today </h4>
      {dueTasks.length > 0 ? (
        dueTasks.map((task) => {
          return (
            <div>
              <DueDateTask task={task} completeTask={completeTask} />
            </div>
          );
        })
      ) : (
        <div className="empty-due-today">
          <h4>🎉 You're all caught up!</h4>
          <p>No tasks are due today.</p>
        </div>
      )}
    </div>
  );
};

export default DueDate;
