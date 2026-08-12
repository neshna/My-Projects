import React, { useEffect, useState } from "react";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import NotFound from "./Pages/NotFound";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./Pages/ForgotPassword";
import MainLayout from "./Layouts/MainLayout";
import TasksPage from "./Pages/TasksPage";
import { toast } from "react-toastify";
import { getToday } from "./utils/taskUtils";

function App() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [tasks, setTasks] = useState(() => {
    const savedValue = localStorage.getItem("toDoTasks");
    const initialValue = JSON.parse(savedValue);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("toDoTasks", JSON.stringify(tasks));
  }, [tasks]);

  const notify = {
    edit: () => toast.info("Task Updated Successfully"),
    delete: () => toast.error("Task Deleted Sucessfully"),
    add: () => toast.success("Task Added Successfully"),
    complete: () => toast.success("Task completed !"),
  };

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

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/dashboard"
          element={
            <Dashboard tasks={tasks} setTasks={setTasks} notify={notify} completeTask={completeTask}/>
          }
        ></Route>
        <Route
          path="/tasks"
          element={
            <TasksPage tasks={tasks} setTasks={setTasks} notify={notify} completeTask={completeTask}/>
          }
        ></Route>
      </Route>
      <Route path="/" element={<Login />}></Route>
      <Route
        path="/register"
        element={<Register userInfo={userInfo} setUserInfo={setUserInfo} />}
      ></Route>
      <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
