import React from 'react'
import styled from 'styled-components'
import logo from '../components/header-logo.png'
function Headerlogo() {
  return (
    <div className='flex content-center '>
      <a href='/'><img src={logo} className='h-14 w-17 ml-14' /></a>
    </div>
  )
}

export default Headerlogo