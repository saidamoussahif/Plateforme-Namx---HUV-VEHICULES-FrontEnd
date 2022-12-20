import MainDash from '../../components/MainDash/MainDash';
import RightSide from '../../components/RigtSide/RightSide';
import {useLocation } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Cars from '../../components/Content/Cars/Cars';
import Users from '../../components/Content/Users/Users';
import ErrorNotFound from '../ErrorNotFound';
import Details from '../../components/Content/Details/Details';
import Orders from '../../components/Content/Orders/Orders';

function Dashboard() {



  const location = useLocation();
  const switche=()=>{
    switch(location.pathname){
      case  "/dashboard" : return <>
        <MainDash/>
        <RightSide/>
        </>;
        case "/dashboard/users": return <><Users/></>;
        case "/dashboard/details": return <><Details/></>;
        case "/dashboard/orders": return <><Orders/></>;
        case "/dashboard/cars": return <><Cars/></>;
        default: return <ErrorNotFound/>
    }
  }
  // console.log(location)
  return (
    <div className="App"  class="AppGlass">
    
    <Sidebar/>
   {switche()}
    
   
    
  </div>
  )
}

export default Dashboard