import React from 'react'
import { Outlet } from 'react-router-dom'
import './MainLayout.css'
import Sidebar from '../components/Sidebar/Sidebar'

const MainLayout = () => {
  return (
    <div className='app-layout'>
        <Sidebar className='sidebar'/>
        <main>
          <Outlet/>
        </main>
    </div>
  )
}

export default MainLayout