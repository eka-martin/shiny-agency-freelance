import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Survey from './pages/Survey';
import Header from './components/Header';
import Error from './components/Error';
import { Routes, Route } from 'react-router-dom'
import Results from './pages/Results'
import Freelances from './pages/Freelances/index';
import GlobalStyle from './utils/style/GlobalStyle'
import Footer from './components/Footer';
import { ThemeProvider, SurveyProvider } from './utils/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
    <SurveyProvider>
    <GlobalStyle />
    <Header />
      <Routes>
      {/* <Route path="/" element={<Error />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      </SurveyProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);



