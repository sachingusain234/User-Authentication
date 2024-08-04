import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import SignUp from './SignUp';
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup.js" element={<SignUp />} />
    </Routes>
  </Router>
);
