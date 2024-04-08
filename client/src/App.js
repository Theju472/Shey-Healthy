//import logo from "./logo.svg";
import React from 'react';
import {BrowserRouter , Router , Route, Routes} from 'react-router-dom'
import Login from './Pages/Login'
import Regester from './Pages/Regester'
import {Button} from 'antd'
//import "./App.css";

function App() {
  return (
    
    <BrowserRouter>
    
      <Routes>

        <Route path='/login' element={<Login/>}/>
         <Route path='/regester' element={<Regester/>}/>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
