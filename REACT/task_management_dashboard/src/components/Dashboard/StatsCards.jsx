import React from 'react'
import StatsCardItem from './StatsCardItem'
import './StatsCards.css'
import { LuNotepadText } from "react-icons/lu";
import { CgSandClock } from "react-icons/cg";
import { FaClipboardList, FaCheckCircle } from "react-icons/fa";

const StatsCards = ({tasks}) => {

  function countPercentTasks (status){
    let taskArr = tasks.filter((task)=>task.status === status)
    return {
      noOfTasks : taskArr.length ,
      percentOfTasks : taskArr.length === 0 ? 0 :Math.round((taskArr.length * 100) / tasks.length)
    }
  }

  let statCardObj = [   
    {
      status  : 'Total Tasks',
      icon    : LuNotepadText,
      count   : 0 ,
      percent : 'All Tasks'
    },
    {
      status  : 'Completed',
      icon    : FaCheckCircle,
      count   : countPercentTasks('done').noOfTasks ,
      percent : countPercentTasks('done').percentOfTasks
    },
    {
      status  : 'In Progress',
      icon    : CgSandClock,
      count   : countPercentTasks('inprogress').noOfTasks,
      percent : countPercentTasks('inprogress').percentOfTasks
    },
    {
      status  : 'Pending',
      icon    : FaClipboardList,
      count   : countPercentTasks('todo').noOfTasks ,
      percent : countPercentTasks('todo').percentOfTasks
    }
  ]

  statCardObj[0].count = tasks.length

  return (
    <div className='Stats-Card'>
      {
        statCardObj.map((statCard , index)=>{
            return (
            <StatsCardItem 
              count   = {statCard.count} 
              status  = {statCard.status} 
              key     = {index}
              Icon    = {statCard.icon}
              percent = {statCard.percent}
            />
          )
        })
      }
    </div>
  )
}

export default StatsCards