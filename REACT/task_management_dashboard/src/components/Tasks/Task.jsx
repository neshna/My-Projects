import React from "react";
import "./Task.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";
import { RiCalendar2Line } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import {
  RiFileList3Line,
  RiLoader4Line,
  RiCheckboxCircleFill,
} from "react-icons/ri";

import {
  RiArrowUpCircleFill,
  RiSubtractLine,
  RiArrowDownCircleFill,
} from "react-icons/ri";

const Task = ({ task, handleDelete, completeTask, editTask, setAddTask }) => {
  const formattedDate = new Date(task.dueDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const statusConfig = {
    todo: {
      icon: RiFileList3Line,
      className: "task-card-todo",
    },
    inprogress: {
      icon: RiLoader4Line,
      className: "task-card-inprogress",
    },
    done: {
      icon: RiCheckboxCircleFill,
      className: "task-card-completed",
    },
  };

  const priorityConfig = {
    high: {
      icon: RiArrowUpCircleFill,
      className: "task-card-high",
    },
    medium: {
      icon: RiSubtractLine,
      className: "task-card-medium",
    },
    low: {
      icon: RiArrowDownCircleFill,
      className: "task-card-low",
    },
  };

  const StatusIcon = statusConfig[task.status.toLowerCase()].icon;
  const statusClass = statusConfig[task.status.toLowerCase()].className;

  const PriorityIcon = priorityConfig[task.priority.toLowerCase()].icon;
  const priorityClass = priorityConfig[task.priority.toLowerCase()].className;

  return (
    <div className="task-card-section">
      <div className="task-card-header">
        <h4 title={task.task}>{task.task}</h4>
        <p title={task.description}>{task.description}</p>
      </div>
      <div className="task-card-status">
        <div className={`task-card-badge ${statusClass}`}>
          <StatusIcon />
          <span>{task.status}</span>
        </div>
        <div className={`task-card-badge ${priorityClass}`}>
          <PriorityIcon />
          <span>{task.priority}</span>
        </div>
      </div>
      <div className="task-card-footer">
        <div className="task-card-calendar">
          <RiCalendar2Line size={17} />
          <p>Due : {formattedDate}</p>
        </div>
        <div className="task-card-btn">
          <button
            className="icon-btn"
            onClick={() => {
              completeTask(task.id);
            }}
          >
            <TiTick size={18} className="complete-icon" />
          </button>
          <button
            className="icon-btn"
            onClick={() => {
              editTask(task.id);
              setAddTask(true);
            }}
          >
            <RiEdit2Line size={18} className="edit-icon" />
          </button>
          <button
            className="icon-btn"
            onClick={() => {
              handleDelete(task.id);
            }}
          >
            <RiDeleteBinLine size={18} className="delete-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
