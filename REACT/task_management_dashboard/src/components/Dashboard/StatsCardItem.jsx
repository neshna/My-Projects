import React from 'react'
import './StatsCardItem.css'

const StatsCardItem = ({count , status , Icon , percent}) => {

  let statusClass = ''

  switch (status){
    case 'Pending':
      statusClass='stats-card-pending'
      break ;

    case 'In Progress':
      statusClass='stats-card-inprogress'
      break ;

    case 'Completed':
      statusClass='stats-card-completed'
      break ;

    case 'Total Tasks':
      statusClass='stats-card-total'
      break ; 
  }


  return (
    <div className='stats-card'>       
      <Icon className={`stats-card-image ${statusClass}`}/>
      <div className = 'stats-card-content' >
        <p className={'stats-card-name'}>{status}</p>
        <h3>{count}</h3>
        {status === 'Total Tasks'
        ?<p className={statusClass}>All Tasks</p> 
        :<p className={statusClass}>{percent}% of total</p>}       
      </div>
    </div>
  )
}

export default StatsCardItem