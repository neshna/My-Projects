import React from 'react'
import WelcomeBanner from '../components/Dashboard/WelcomeBanner'
import StatsCards from '../components/Dashboard/StatsCards'
import DueDate from '../components/Dashboard/DueDate'
import ProgressCard from '../components/Dashboard/ProgressCard'
import RecentTask from '../components/Dashboard/RecentTask'
import QuickActions from '../components/Dashboard/QuickActions'
import './Dashboard.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QuoteBanner from '../components/Dashboard/QuoteBanner'

const Dashboard = ({tasks , notify ,completeTask}) => {

  return (
    <div>
      <WelcomeBanner/>
      <StatsCards tasks={tasks}/>
      <div className='dashBoard-grid'>
          <div className='left-column'>
            <DueDate tasks={tasks} completeTask={completeTask} notify={notify}/>
            {/* <RecentTask/> */}
          </div>
          <div className='right-column'>
            <ProgressCard tasks={tasks}/>
            {/* <QuickActions/> */}
          </div>
      </div>
      <QuoteBanner />
       <ToastContainer position='top-center' autoClose={2000}/>
    </div>
    
  )
}

export default Dashboard