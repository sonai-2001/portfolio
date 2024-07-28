import React from 'react'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white px-2'>
       <Nav/>
       <Outlet/>
      
    </div>
  )
}

export default App