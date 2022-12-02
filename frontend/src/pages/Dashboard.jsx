import MainDash from '../components/MainDash/MainDash';
import RightSide from '../components/RigtSide/RightSide';
import {useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Cars from '../components/Cars/Cars';

function Dashboard() {
  const location = useLocation();
  console.log(location)
  return (
    <div className="AppGlass">
    <Sidebar/>
    {location.pathname === "/dashboard" && (
    <>
    <MainDash/>
    <RightSide/>
    </>
    )}
    
  </div>
  )
}

export default Dashboard