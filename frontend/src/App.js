import "./App.css";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import Cars from "./components/Content/Cars/Cars";
import ErrorNotFound from "./pages/ErrorNotFound";
import Login from "./pages/Login";
import Orders from "./components/Content/Orders/Orders";
import Details from "./components/Content/Details/Details";
import Users from "./components/Content/Users/Users";
import Admin from "./pages/admin/Login.jsx";
import Register from "./pages/Register";
import Home from "./components/Home/Home";
import Reservation from "./components/reservation/order";
import Presentation from "./components/Presentation/Presentation";

import Car from "./components/Car/Car";




function App() {
  return (
    <>
    
    
    
    
      <Routes>
     
        <Route  path='/dashboard' element={<Dashboard/>}>
        <Route path="cars"  element={<Cars/>}/>
        <Route path="orders"  element={<Orders/>}/>
        <Route path="details"  element={<Details/>}/>
        <Route path="users"  element={<Users/>}/>
      </Route>
        <Route  path="/Admin/login" element={<Admin/>} />
        <Route  path="/login"  element={<Login/>}/>
        
        <Route className="App" path="register"  element={<Register/>}/>
        {/* <Route path="verifyUser/:activationCode"  element={<ActivationPage/>}/> */}
        <Route path="*" element={<ErrorNotFound/>} />
        <Route path="/Home"  element={<Home/>}/>
        <Route path="/order"  element={<Reservation/>}/>
        <Route path="/Car"  element={<Car />}/>
     <Route path="/Nmax" element={<Presentation/>}/>
        
      </Routes>
    
    
    </>
  );
}

export default App;
