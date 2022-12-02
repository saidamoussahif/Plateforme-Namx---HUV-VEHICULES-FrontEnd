import './App.css'
import {Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Cars from './components/Cars/Cars';
import ErrorNotFound from './pages/ErrorNotFound'
import Login from './pages/Login';
import Register from './pages/Register';
import Index from './pages/Index';
import Orders from './components/Orders/Orders';
import Types from './components/Types/Types';
import Users from './components/Users/Users';

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
        <Route path="login"  element={<Login/>}/>
        <Route path="register"  element={<Register/>}/>
        <Route path="*" element={<ErrorNotFound/>} />
       
      </Routes>
    </div>
    </>
  );
}

export default App;
