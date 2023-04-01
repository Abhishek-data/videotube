import React from 'react'
import { useSelector } from 'react-redux'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'

const Body = () => {
  const isMenuOpen = useSelector(state => state.app.isMenuOpen)  
  return (
    <div className='flex'>
        {isMenuOpen && <Sidebar/>}
        <MainContainer/>
    </div>
  )
}

export default Body