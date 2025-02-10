import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/MyGear" element={<MyGearPage />}/>
          </Routes>
        </main>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App
