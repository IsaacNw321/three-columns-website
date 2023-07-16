import React from 'react';
import './App.css';
import { Home } from './render/Home';
import { Contact } from './render/Contact';
import { ThankU } from './render/ThankU';
import {
  Route,
  Routes,
} from "react-router-dom";
import { Homepage } from './components/homePage/Homepage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thanku" element={<ThankU />} />
      <Route path="/testing" element={<Homepage />} />
    </Routes>
  );
}

export default App;
