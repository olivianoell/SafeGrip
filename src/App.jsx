import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MyGearPage from './pages/AddGearPage';

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <main>
          <Routes>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/my-gear" component={MyGearPage} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App

