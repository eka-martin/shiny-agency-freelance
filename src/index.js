import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './style/index.css';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Header from './components/Header';
//import {Error} from './components/Error';
import { Routes, Route } from 'react-router-dom'
import Results from './pages/Results';
import Freelance from './pages/Freelance';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
      {/* <Route path="/" element={<Error />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelance" element={<Freelance />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



