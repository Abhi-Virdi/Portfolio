import React from 'react'
import  About  from './components/About';
import  Contact  from './components/Contact';
import  Experience  from './components/Experience';
import  Feedbacks  from './components/Feedbacks';
import  Loader  from './components/Loader';
import  Hero  from './components/Hero';
import  Navbar  from './components/Navbar';
import  Tech  from './components/Tech';
import  Works  from './components/Works';
import { BrowserRouter}  from 'react-router-dom'
const App =() => {
  return (
    <BrowserRouter> 
    
    <div className='relative z-0 bg-primary'>
      <div className='bg-center bg-no-repeat bg-cover bg-hero-pattern'></div>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Contact/>
    </div>
    </BrowserRouter>
  )
}

export default App