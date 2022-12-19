import "./App.css";
// import "./index.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import Cars from "./components/Content/Cars/Cars";
import ErrorNotFound from "./pages/ErrorNotFound";
import Login from "./pages/Login";
import Orders from "./components/Content/Orders/Orders";
import Types from "./components/Content/Types/Types";
import Users from "./components/Content/Users/Users";
import Admin from "./pages/admin/Login.jsx";
import Register from "./pages/Register";
import Home from "./components/Home/Home";



function App() {
  return (
    <>
    
    
    <div >
    
      <Routes>
     
        <Route className="App" path='/dashboard' element={<Dashboard/>}>
        <Route path="cars"  element={<Cars/>}/>
        <Route path="orders"  element={<Orders/>}/>
        <Route path="types"  element={<Types/>}/>
        <Route path="users"  element={<Users/>}/>
      </Route>
        <Route path="/Admin/login" element={<Admin/>} />
        <Route path="/login"  element={<Login/>}/>
        
        <Route path="register"  element={<Register/>}/>
        {/* <Route path="verifyUser/:activationCode"  element={<ActivationPage/>}/> */}
        <Route path="*" element={<ErrorNotFound/>} />
     
        <Route path="/Home"  element={<Home/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
