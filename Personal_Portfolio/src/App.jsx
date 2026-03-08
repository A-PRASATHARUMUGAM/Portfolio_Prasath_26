import { useState } from 'react'
import Navbar from './components/Navbar'
import ProCursor from './components/Cursor'
import Home from './components/Home'

function App() {
    // color from-black to-blue-900 

  return (
    <div className='  h-screen font-line cursor-none'>
             <ProCursor />  
             <Navbar/>
             <Home />

    </div> 
  
 

      
  )
}

export default App
