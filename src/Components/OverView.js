import React from 'react'
import BubbleChart from './BubbleChart'
import Home from './Home'
const OverView = () => {
  // overview page or 2nd page 
  return (
    <div className='overview'>
      <BubbleChart/>
      <Home/>
    </div>
  )
}

export default OverView
