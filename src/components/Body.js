import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Body = () => {
  const isMenuOpen = useSelector(state => state.app.isMenuOpen)  
  return (
    <div className='flex'>
        {isMenuOpen && <Sidebar/>}
        <Outlet/>
    </div>
  )
}

export default Body