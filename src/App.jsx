import { useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import InputUser from './components/InputUser'
import PokemonDetails from './components/PokemonDetails'
import Pokedex from './components/Pokedex'
import ProtectedRoute from './components/protectedRoute'
function App() {
  

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<InputUser/>}/>
          <Route element={<ProtectedRoute/>}>
          
            <Route path="/pokedex" element={<Pokedex/>}/>
            <Route path="/pokedex/:id" element={<PokemonDetails/>}/>
          
          </Route>
        </Routes>
      </HashRouter>
      
    </div>
  )
}

export default App
