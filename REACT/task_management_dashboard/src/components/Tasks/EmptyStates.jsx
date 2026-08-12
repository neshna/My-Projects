import React from 'react'
import { LiaTasksSolid } from "react-icons/lia";
import './EmptyStates.css'

const EmptyStates = ({title , message}) => {
  return (
    <div className='empty-state-container'>
      <LiaTasksSolid className='empty-icon'/>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  )
}

export default EmptyStates