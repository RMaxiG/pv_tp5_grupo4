import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Views/Home';

function App() {

  return (
        <>
      <div>
        <BrowserRouter>
        <NavBar/>
          <div>
          <Routes>
            <Route path='/' element={<Inicio/>}></Route> 
          
          </Routes>
          </div>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
