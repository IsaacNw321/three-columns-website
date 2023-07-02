import React from 'react';
import './App.css';
import { Home } from './render/Home';
import { Contact } from './render/Contact';
import { ThankU } from './render/ThankU';
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thanku" element={<ThankU />} />
    </Routes>
  );
}

export default App;
