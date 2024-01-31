import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './containers/Header';
import Footer from './containers/Footer';
import Router from './Router';


function App() {
  

  return (
    <>
      <Header/>
      <Router/>
      <Footer/>
    </>
  )
}

export default App
