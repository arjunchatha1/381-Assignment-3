import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import FlavorsPage from "./FlavorsPage";
import LoginPage from "./LoginPage";
import "./style.css";

function App() {
  return (
    
    <Router>
      <Routes>
        
        <Route path="/" element={<Homepage />} />
        <Route path="/flavors" element={<FlavorsPage />} />
        <Route path="/login" element={<LoginPage />} />
      
      </Routes>
    </Router>
  );
}

export default App;