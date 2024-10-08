import React from 'react'
import Home from './components/Home'
import { Routes,Route } from 'react-router-dom'
import About from './components/About'
const App = () => {
  return (
   <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      
   </div>
   
  )
}

export default App
