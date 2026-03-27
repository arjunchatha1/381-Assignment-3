import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";

import FlavorsPage from "./FlavorsPage"; 
import "./style.css";

function App() {
  return (
    
    <Router>
      <Routes>
        
        <Route path="/" element={<Homepage />} />
        
        
        <Route path="/flavors" element={<FlavorsPage />} />
      
      </Routes>
    </Router>
  );
}

export default App;