import React from 'react';
import './App.css';
import { Home } from './render/Home';
import { Contact } from './render/Contact';
import { ThankU } from './render/ThankU';
import {
  Route,
  Routes,
} from "react-router-dom";
import { Layout } from './components/layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thanku" element={<ThankU />} />
      <Route path="/testing" element={<Layout />} />
    </Routes>
  );
}

export default App;
