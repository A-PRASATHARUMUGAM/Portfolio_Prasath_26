import { useState } from 'react'
import Navbar from './components/Navbar'
import ProCursor from './components/Cursor'
import Home from './components/Home'

function App() {
  

  return (
    <div className='bg-[#24252a] h-[100vh] cursor-none'>
             <ProCursor /> 
             <Navbar/>
             <Home />

    </div> 
  


      
  )
}

export default App
