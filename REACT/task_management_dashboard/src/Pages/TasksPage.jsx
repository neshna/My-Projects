import React, { useMemo, useState } from "react";
import TaskHeader from "../components/Tasks/TaskHeader";
import TaskFilters from "../components/Tasks/TaskFilters";
import TaskCards from "../components/Tasks/TaskCards";
import "./TasksPage.css";
import AddTask from "../components/CreateTask/AddTask";
import { getToday } from "../utils/taskUtils";
import { ToastContainer } from "react-toastify";

const TasksPage = ({ tasks, setTasks, notify }) => {
  const [filterCriteria, setFilterCriteria] = useState({
    status: "all",
    title: "",
    sort: "newest",
    priority: "all",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [addTask, setAddTask] = useState(false);

  function sortTask(sortingArray, sortValue) {
    const sortedArray = [...sortingArray];

    switch (sortValue) {
      case "newest":
        sortedArray.sort(
          (a, b) => new Date(b.createdDate) - new Date(a.createdDate),
        );
        break;
      case "oldest":
        sortedArray.sort(
          (a, b) => new Date(a.createdDate) - new Date(b.createdDate),
        );
        break;
      case "a-z":
        sortedArray.sort((a, b) => a.task.localeCompare(b.task));
        break;
      case "z-a":
        sortedArray.sort((a, b) => b.task.localeCompare(a.task));
        break;
    }
    return sortedArray;
  }

  //Calculates displaying tasks only when tasks or filtercriteria gets modified
  const displayingTasks = useMemo(() => {
    const filtered = tasks.filter((taskCard) => {
      const matchedStatus =
        filterCriteria.status === "all" ||
        filterCriteria.status === taskCard.status;
      const matchedTask =
        filterCriteria.title.trim() === "" ||
        taskCard.task
          .toLowerCase()
          .includes(filterCriteria.title.toLowerCase());
      const matchedPriority =
        filterCriteria.priority.trim() === "all" ||
        filterCriteria.priority === taskCard.priority;
      return matchedStatus && matchedTask && matchedPriority;
    });
    return sortTask(filtered, filterCriteria.sort);
  }, [tasks, filterCriteria]);

  const [formInput, setFormInput] = useState({
    id: Date.now(),
    task: "",
    status: "todo",
    dueDate: getToday(),
    createdDate: getToday(),
    completedDate: null,
    priority: "high",
  });

  function handleDelete(taskId) {
    const isConfirmed = window.confirm(
      "Are you sure want to delete this task ?",
    );
    if (isConfirmed) {
      setTasks((prev) => prev.filter((task) => task.id !== taskId));
      notify.delete();
    }
  }

  function completeTask(id) {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        return task.id == id
          ? { ...task, status: "done", completedDate: getToday() }
          : task;
      });
    });
    notify.complete();
  }

   function editTask(id) {
     const selectedTask = tasks.find((task) => task.id === id);
     if (selectedTask) {
       setFormInput(selectedTask);
       setIsEditing(true);
     }
   }

  return (
    <div className="task-page">
      <TaskHeader setAddTask={setAddTask}/>
      <TaskFilters
        filterCriteria={filterCriteria}
        setFilterCriteria={setFilterCriteria}
      />
      <TaskCards
        displayingTasks={displayingTasks}
        tasks={tasks}
        handleDelete={handleDelete}
        completeTask={completeTask}
        editTask={editTask}
        setAddTask={setAddTask}
      />
      {addTask&& (<div className="add-task-page">
        && <AddTask
          setFormInput={setFormInput}
          formInput={formInput}
          setTasks={setTasks}
          setIsEditing={setIsEditing}
          isEditing={isEditing}
          notify={notify}
          setAddTask={setAddTask}
        /> 
      </div>)}

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default TasksPage;
