import React from 'react'
import './TaskHeader.css'
const TaskHeader = ({setAddTask}) => {
  return (
    <div className='task-header-section'>
      <div className='task-header-left'>
        <h3>Tasks</h3>
        <p>Manage and organize all your tasks</p>
      </div>
      <div className='task-header-right'>
        <button
           onClick={()=>setAddTask(true)}
        >+ Add Task</button>
      </div>

    </div>
  )
}

export default TaskHeader