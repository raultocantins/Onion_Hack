import React from 'react';
import Index from './Components/Index'
import './App.css';
import {
  BrowserRouter as Router,
 
} from "react-router-dom";
function App() {
  return (
    <Router>   
    <div className="App">      
      <Index/>      
    </div>
    </Router>
  );
}

export default App;
