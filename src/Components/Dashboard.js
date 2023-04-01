import React from 'react';
import Designfaster from './Designfaster';
import BubblesGraph from './BubblesGraph';
const Dashboard = () => {
  // Dashboard or 3rd page 
  return (
    <div className='dashboard'>
      <Designfaster/>
      <BubblesGraph/>
    </div>
  )
}

export default Dashboard
