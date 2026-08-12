import React from 'react'
import './Sidebar.css'
import { FaTasks } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { LuLogOut } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='side-bar'> 
       <h3><TiTick /> TaskFlow</h3>
       <hr width='170'></hr>
      <div className='sidebar-item'> 
        <IoHomeOutline />
        <Link to ='/dashboard' className='sidebar-link'>Dashboard</Link>
      </div>
      <div className='sidebar-item'> 
        <FaTasks />
         <Link to ='/tasks' className='sidebar-link'>Tasks</Link>
      </div>
      <div className='sidebar-item'> 
        <IoCalendarOutline/> 
         <Link to ='/dashboard' className='sidebar-link'>Calendar</Link>
      </div>
      <div className='sidebar-item'> 
        <TbBrandGoogleAnalytics/> 
         <Link to ='/dashboard' className='sidebar-link'>Analytics</Link>
      </div>
      <hr width='170'></hr>
      <div className='sidebar-item'> 
        <IoSettingsOutline/> 
         <Link to ='/dashboard' className='sidebar-link'>Settings</Link>
      </div>
      <div className='sidebar-item'> 
        <CgProfile/> 
         <Link to ='/dashboard' className='sidebar-link'>Profile</Link>
      </div>
      <div className='sidebar-item'> 
        <LuLogOut/> 
         <Link to ='/dashboard' className='sidebar-link'>Logout</Link>
      </div>
    </div>
  )
}

export default Sidebar