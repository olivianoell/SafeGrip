// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage/HomePage';
// import LoginPage from './pages/LoginPage/LoginPage';
import MyGearPage from './pages/MyGearPage/MyGearPage';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const baseURL = import.meta.env.VITE_API_URL;

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/login" component={LoginPage} /> */}
          <Route path="/mygear" component={MyGearPage} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

