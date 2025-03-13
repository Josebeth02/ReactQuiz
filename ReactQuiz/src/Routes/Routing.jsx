import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Tareas from'../Pages/Tareas' ;

function Routing() {


  return (
    <div>
      <Router>
        <Routes>
      
                        

                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/tareas" element={<Tareas/>}/>

                      
                            
        </Routes>
      </Router>
    </div>
  );
}

export default Routing
