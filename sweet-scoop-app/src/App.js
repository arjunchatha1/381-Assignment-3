import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Homepage from './Homepage';
import './style.css'; 

function App() {
  return (
    
    <Router>
      <Routes>
        
        <Route path="/" element={<Homepage />} />
        
        
        {/* <Route path="/flavors" element={<FlavorsPage />} /> */}
        //UNcomment this when you do the login page. 
        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;