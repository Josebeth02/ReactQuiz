import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../Pages/Login';
import Register from '../Pages/Register';

function Routing() {


  return (
    <div>
      <Router>
        <Routes>
      
                        

                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>

                      
                            
        </Routes>
      </Router>
    </div>
  );
}

export default Routing
