import React from 'react'
import './ProgressCard.css'
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { getToday } from '../../utils/taskUtils';
import { getStartOfWeek } from '../../utils/progressUtils';

const ProgressCard = ({tasks}) => {

  const barMeasurement  = [15 , 10, 5 , 0]

  const weeklyCompTask = tasks.filter ((task)=>
      task.status === 'done' 
      && 
      task.completedDate &&
      new Date (task.completedDate) >= getStartOfWeek()
      &&
      new Date(task.completedDate) <= new Date(getToday())
  )

  const weeklyTotalTask = tasks.filter ((task)=>

      new Date (task.createdDate) >= getStartOfWeek()
      &&
      new Date (task.createdDate) <= new Date(getToday())
  )

  let weeklyProgress = weeklyTotalTask.length > 0 ? Math.round(weeklyCompTask.length / weeklyTotalTask.length * 100) : 0

  const getBarDays = ()=>{

      const days  = ['Mon',  'Tue' , 'Wed' , 'Thur' , 'Fri' , 'Sat' , 'Sun']

      return days.map ((day , index)=>{

        const monday = getStartOfWeek()

        const currentDate = new Date (monday)
        
        currentDate.setDate(monday.getDate() + index)

        const count = weeklyCompTask.filter((task)=>{
              return new Date(task.completedDate).toDateString() === currentDate.toDateString()
        }).length

        return {
          day ,
          value : count
        };
      
   } );
  } ;
  const barDays = getBarDays()

  const maxValue = Math.max(...barDays.map((day)=>day.value),1)

  return (
    <div className='progress-card'>
      <div className = 'progressCard-hdr'>
        <div className='prog-left'>
          <h4>Weekly Progress</h4>
          <p className='prog-msg'>You're doing great ! 🎉</p>
          <p className='task-count'>You've completed {weeklyCompTask.length} task{weeklyCompTask.length !==1 ?'s':''} this week</p>
       </div>
        <div className='prog-right'>
            <CircularProgressbar 
              value={weeklyProgress}          // Percentage filled
              text={`${weeklyProgress}%`}          // Text inside the circle
              strokeWidth={7}     // Thickness of the circle
              styles={buildStyles({
              pathColor: "rgb(24, 76, 219)",      // Purple progress
              trailColor: "#E5E7EB",     // Gray background ring
              textColor: "#1F2937",      // Color of "72%"
              textSize: "20px",          // Size of "72%"
              })}/>
              <p>Progress</p>
        </div>
      </div>
     <div className='barchart'>
      <div className='barchart-measurement'>
          {
            barMeasurement.map((num)=>{
               return (
               <div className='barchart-measurement-item'>
                    <p>{num}</p> 
                    <hr></hr>
               </div>)
            })
          }
      </div>
      <div className='barchart-days'>
          {
            barDays.length>0 && barDays.map((barday)=>{
               return (
               <div className='barheight' key={barday.day}>
                <div 
                className='bar' 
                style={{ height: `${(barday.value/maxValue)*110}px` }}
                ></div>
                <p>{barday.day}</p>
               </div>)
            }) 
          } 
      </div>
     </div>
    </div>
  )
}

export default ProgressCard