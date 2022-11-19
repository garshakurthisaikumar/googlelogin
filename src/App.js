import React  from 'react';
import {BrowserRouter,Routes, Route,useNavigate} from 'react-router-dom';
import Login from './components/login';
import Logout from './components/logout';
import Upload from './components/upload'
import './App.css';

function App() {
    
    return (
        <div className='App'>

            <BrowserRouter>
            <Routes>
            <Route path="/" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/upload" element={<Upload />} />
         
        </Routes>

            </BrowserRouter>
            
           
        </div>
    );
}
export default App;