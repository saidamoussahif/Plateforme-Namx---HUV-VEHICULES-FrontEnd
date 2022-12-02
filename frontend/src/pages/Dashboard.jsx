import MainDash from '../components/MainDash/MainDash';
import RightSide from '../components/RigtSide/RightSide';
import {Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Cars from '../components/Cars/Cars';

function Dashboard() {
  return (
    <div className="AppGlass">
    <Sidebar/>
    <Routes>
    <Route path="/Dashboard/cars" exact element={<Cars/>}/>
    <Route path="/Dashboard/MainDash" exact element={<MainDash/>}/>
    
    {/* <RightSide/> */}
    </Routes>
  </div>
  )
}

export default Dashboard