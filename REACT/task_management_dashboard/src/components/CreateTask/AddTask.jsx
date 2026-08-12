import React, { useState } from "react";
import { getToday } from "../../utils/taskUtils";
import './AddTask.css'

const AddTask = ({
  setFormInput,
  formInput,
  setTasks,
  setIsEditing,
  isEditing,
  notify,
  setAddTask
}) => {
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formInput.task === "") {
      setError("Please Provide the Title");
      return;
    }
    setError("");

    if (isEditing) {
      setTasks((prev) =>
        prev.map((task) => (task.id === formInput.id ? formInput : task)),
      );
      notify.edit();
      setIsEditing(false);
    } else {
      setTasks((prev) => {
        return [...prev, formInput];
      });
      notify.add();
    }

    setFormInput({
      id: Date.now(),
      task: "",
      description:"",
      status: "todo",
      dueDate: getToday(),
      createdDate: getToday(),
      completedDate: null,
      priority: "high",
    });

    setAddTask(false);
  }

  return (
    <form onSubmit={handleSubmit} className="add-task-section">
      <div>
        <h4>Add New Task</h4>
      </div>
      <div className="add-task-inputs add-task-title">
        <label>Title</label>
        <input
          type="text"
          onChange={handleChange}
          value={formInput.task}
          name="task"
          className="inputs"
          placeholder="Enter Task Title"
        ></input>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="add-task-inputs add-task-description">
        <label>Description</label>
        <textarea
          onChange={handleChange}
          value={formInput.description}
          name="description"
          className="inputs"
          placeholder="Enter Task Description"
        ></textarea>
      </div>
      <div className="add-task-schedule">
        <div className="add-task-inputs add-task-combo">
          <label>Status</label>
          <select
            id="status"
            name="status"
            onChange={handleChange}
            value={formInput.status}
            className="inputs"
          >
            <option value="todo">ToDo</option>
            <option value="inprogress">Inprogress</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div className="add-task-inputs add-task-combo">
          <label>Priority</label>
          <select
            id="priority"
            name="priority"
            onChange={handleChange}
            value={formInput.priority}
            className="inputs"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="add-task-inputs add-task-combo">
          <label>Due Date</label>
          <input
            type="date"
            className="inputs"
            value={formInput.dueDate}
            name="dueDate"
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <div className='add-task-btn-sec'>
          <button 
            className="add-task-btn cancel-btn"
            onClick={()=>setAddTask(false)}>Cancel</button>
          <button 
            type="submit" 
            className="add-task-btn add-btn"
            >
              {isEditing ? "Update Task" : "Add Task"}
          </button>
      </div>
    </form>
  );
};

export default AddTask;
