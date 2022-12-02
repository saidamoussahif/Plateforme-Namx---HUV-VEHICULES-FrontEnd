import './App.css'
import {Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Cars from './components/Cars/Cars';

function App() {
  return (
    <>
    
    
    <div className="App">
    
      <Routes>
        <Route path="/" exact element={<Dashboard/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
