import React from 'react'
import './WelcomeBanner.css'

const WelcomeBanner = () => {
  let currDate = new Date()
  const formattedDate = currDate.toLocaleDateString("en-IN", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});
  return (
    <section className='welcome-layout'>
        <div className='welcome-content'>
          <h2>Welcome, Neshana ! ✌️</h2>
          <p>Stay focused and complete your tasks today</p>
        </div>
        <div className='welcome-date welcome-child'>
          <p>📆 {formattedDate}</p> 
        </div>
    </section>
  )
}

export default WelcomeBanner