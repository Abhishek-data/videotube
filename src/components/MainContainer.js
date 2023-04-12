import React from 'react'
import ButtonLIst from './ButtonLIst'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='flex flex-col m-2'>
        <ButtonLIst/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer