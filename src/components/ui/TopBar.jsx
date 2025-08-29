import React from 'react'
import Tooltip from './FloatingTop'
import { ThemeToggle } from './ThemeToggleButton'

const TopBar = () => {
  return (
    <div >

    <div className='w-full flex items-center scale-75  justify-center 
     '>
      <Tooltip/>

    </div>

    <span className='fixed right-4 scale-75 top-4  items-center  justify-center'>
      <ThemeToggle/>
    </span>
    </div>
   
  )
}

export default TopBar