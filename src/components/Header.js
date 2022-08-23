import React from 'react'
import Headerlogo from './Headerlogo';
import sidedots from '../components/dots.svg'
import shoppingmall from '../components/clean.jpg'

function Header() {
  const x = 2;

  return (
    <div>
      <div className='flex content-center pt-10' >
        <Headerlogo />
        <div className='flex content-end items-end   p-4 mx-72  '>
          <ul className="flex content-center  text-gray-500">
            <li className="mr-6">
              <a className=" hover:text-blue-800" href="#">Home</a>
            </li>
            <li className="mr-6">
              <a className="whitespace-nowrap hover:text-blue-800" href="#">About us</a>
            </li>
            <li className="mr-6">
              <a className=" hover:text-blue-800" href="#">Service</a>
            </li>
            <li className="mr-6">
              <a className=" hover:text-blue-800" href="#">Contact</a>
            </li>
          </ul>
        </div>


      </div>
      <div className='flex content-center  flex-row'>
        <img src={sidedots} className='h-72 w-90 mt-2 font-cyan0-80 ml-n18' />
        <div className='flex content-end'>    
          <img src={shoppingmall} className="flex  h-72 w-70 ml-96" />

        </div></div>
    </div>
  )
}

export default Header