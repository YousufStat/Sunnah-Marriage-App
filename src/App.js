import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import BiodataPage from './pages/BiodataPage';
import BiodetailsPage from './pages/BiodetailsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import QuestionPage from './pages/QuestionPage';
import ConditionPage from './pages/ConditionPage';
import BioformPage from './pages/BioformPage';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/biodata" element={<BiodataPage/>}/>
        <Route path="/biodetails" element={<BiodetailsPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/question" element={<QuestionPage/>}/>
        <Route path="/condition" element={<ConditionPage/>}/>
        <Route path="/bioform" element={<BioformPage/>}/>
        <Route path="/biodetails" element={<BiodetailsPage/>}/>

        
      </Routes>
      
    </>
      
  );
}

export default App;
