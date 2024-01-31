import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './pages/home'

function Router() {
  return (
    <Routes>
        <Route path='Accueil' element ={<Home/>}/>
    </Routes>
    
  )
}

export default Router