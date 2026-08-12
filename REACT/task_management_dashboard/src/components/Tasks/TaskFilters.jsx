import React from 'react'
import './TaskFilters.css'
import { IoIosSearch } from "react-icons/io";

const TaskFilters = ({filterCriteria , setFilterCriteria }) => {

  function filterTask(event) {
    const { value, name } = event.target;

    const updatedCriteria = {
      ...filterCriteria,
      [name]: value,
    };

    setFilterCriteria(updatedCriteria);
    
  }

  return (
    <div className='task-filter-section'>
      <div className="form-inputs icon-pos">
        <IoIosSearch className='icon' size={20}/>
        <input
          type="text"
          name="title"
          value={filterCriteria.title}
          onChange={filterTask}
          className="inputs"
          placeholder='Search Tasks....'
        ></input>
      </div>
      <div className="form-inputs">
        <label>Filter By Status</label>
        <select
          name="status"
          className="inputs combo-control"
          onChange={filterTask}
          value={filterCriteria.status}
        >
          <option value="all"> All </option>
          <option value="todo">ToDo</option>
          <option value="inprogress">In Progress</option>
          <option value="done"> Done</option>
        </select>
      </div>
      <div className="form-inputs">
        <label>Priority</label>
        <select
          name="priority"
          className="inputs combo-control"
          value={filterCriteria.priority}
          onChange={filterTask}
        >
          <option value="all"> All </option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div className="form-inputs">
        <label>Sort By</label>
        <select
          name="sort"
          className="inputs combo-control"
          value={filterCriteria.sort}
          onChange={filterTask}
        >
          <option value="newest"> Newest </option>
          <option value="oldest">Oldest</option>
          <option value="a-z">A - Z</option>
          <option value="z-a">Z - A</option>
        </select>
      </div>
    </div>
    
  )
}

export default TaskFilters