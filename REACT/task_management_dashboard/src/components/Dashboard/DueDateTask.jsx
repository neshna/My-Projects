import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import './DueDateTask.css'

const DueDateTask = ({task , completeTask }) => {


  return (
    <div className='duedate-card'>
      <div className='duedate-content' >      
         <div className ={`priority-dot ${task.priority?.toLowerCase()}`}></div>
         <div> 
          <h5>{task.task}</h5>
          <p ><FaCalendarAlt/> Today</p>
        </div>            
      </div>
      <div className='priority-sec'>
       <span className={`priority ${task.priority?.toLowerCase()}`}>{task.priority}</span>
      </div>
      <div>
        <input 
          type='checkbox' 
          checked={task.status === "done"}
          onChange={()=>{completeTask(task.id) }} /> 
      </div>
    </div>
  )
}

export default DueDateTask