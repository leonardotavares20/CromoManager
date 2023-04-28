// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import NavBar from './components/NavBar/NavBar.jsx'
import AdministrativePanel from './components/AdministrativePanel/AdministrativePanel'
import '../src/components/NavBar/NavBar'
import Cards from "./components/Cards/Cards"
import Forms from "./components/Forms/Forms"
import CardListing from "./components/CardListing/CardListing"
import NavBar from '../src/components/NavBar/NavBar'

function App() {
  return (
    <>
    <NavBar></NavBar>
    <AdministrativePanel></AdministrativePanel>
    <Cards></Cards>
    <Forms></Forms>
     <CardListing></CardListing>
    </>
  )
}

export default App
