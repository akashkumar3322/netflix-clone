import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Section from './components/Section'
import './index.css'
import Usercard from './components/Usercard'
import Feature from './components/Feature'
import Faq from './components/Faq'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
    <Navbar />
    <Section/>
    <Usercard />
    <Feature />
    <Faq/>
    <Footer/>
    </>
  )
}

export default App