import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import Cars from "./components/Content/Cars/Cars";
import ErrorNotFound from "./pages/ErrorNotFound";
import Login from "./pages/admin/Login";
import Orders from "./components/Content/Orders/Orders";
import Types from "./components/Content/Types/Types";
import Users from "./components/Content/Users/Users";
import Admin from "./pages/admin/Login.jsx";


function App() {
  return (
    <>
    
    
    <div className="App">
    
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}>
        <Route path="cars"  element={<Cars/>}/>
        <Route path="orders"  element={<Orders/>}/>
        <Route path="types"  element={<Types/>}/>
        <Route path="users"  element={<Users/>}/>
      </Route>
   
        <Route path="/Admin/login" element={<Admin/>} />
       
    
        <Route path="login"  element={<Login/>}/>
        <Route path="register"  element={<Register/>}/>
        <Route path="verifyUser/:activationCode"  element={<ActivationPage/>}/>
        <Route path="*" element={<ErrorNotFound/>} />
       
      </Routes>
    </div>
    </>
  );
}

export default App;
