import React from 'react'
import WorldMap from './WorldMap'
import Sidebar from './Sidebar'
import  BarChart  from './Barchart'
const Home = () => {
  // home section 
  return (
    <div className='homeBody'>
      <Sidebar />
      <WorldMap />
      <BarChart />
    </div>
  );
}

export default Home
