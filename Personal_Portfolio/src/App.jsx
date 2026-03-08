import { useState } from 'react'
import Navbar from './components/Navbar'
import ProCursor from './components/Cursor'
import Home from './components/Home'

function App() {
  

  return (
    <div className=' bg-linear-to-bl h-screen font-line from-black to-blue-900  cursor-none'>
             <ProCursor />  
             <Navbar/>
             <Home />

    </div> 
  
 

      
  )
}

export default App
