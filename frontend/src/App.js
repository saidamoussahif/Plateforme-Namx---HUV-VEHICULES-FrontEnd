import './App.css'
<<<<<<< HEAD
import './index'
=======
import './index.css'
>>>>>>> 2d6e381ebaf6bffb1a908341c9b4a8c700540501
import {Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Cars from './components/Content/Cars/Cars';
import ErrorNotFound from './pages/ErrorNotFound'
import Login from './pages/Login';
import Register from './pages/Register';
<<<<<<< HEAD

=======
>>>>>>> 2d6e381ebaf6bffb1a908341c9b4a8c700540501
import Orders from './components/Content/Orders/Orders';
import Types from './components/Content/Types/Types';
import Users from './components/Content/Users/Users';

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
