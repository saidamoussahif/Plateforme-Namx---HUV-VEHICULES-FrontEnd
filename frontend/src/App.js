<<<<<<< HEAD
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

=======
import './App.css'
import './index.css'
import {Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Cars from './components/Content/Cars/Cars';
import ErrorNotFound from './pages/ErrorNotFound'
import Login from './pages/Login';
import Register from './pages/Register';
import Orders from './components/Content/Orders/Orders';
import Types from './components/Content/Types/Types';
import Users from './components/Content/Users/Users';
import ActivationPage from './components/nodemailer/ActivationPage';
>>>>>>> b3573fb0d3a3a5f2bd1676faf95eee6936c1d344

function App() {
  return (
    <>
<<<<<<< HEAD
      <div className="App">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="cars" element={<Cars />} />
            <Route path="orders" element={<Orders />} />
            <Route path="types" element={<Types />} />
            <Route path="users" element={<Users />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<ErrorNotFound />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </div>
=======
    
    
    <div className="App">
    
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}>
        <Route path="cars"  element={<Cars/>}/>
        <Route path="orders"  element={<Orders/>}/>
        <Route path="types"  element={<Types/>}/>
        <Route path="users"  element={<Users/>}/>
      </Route>
        <Route path="login"  element={<Login/>}/>
        <Route path="register"  element={<Register/>}/>
        <Route path="verifyUser/:activationCode"  element={<ActivationPage/>}/>
        <Route path="*" element={<ErrorNotFound/>} />
       
      </Routes>
    </div>
>>>>>>> b3573fb0d3a3a5f2bd1676faf95eee6936c1d344
    </>
  );
}

export default App;
