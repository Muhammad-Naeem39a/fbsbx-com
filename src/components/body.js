import React from 'react'
import sidedots from '../components/dots.svg'
import drop from '../assets/drop-2.png';
import shoppingmall from '../components/clean.jpg'
import mop from '../components/mop.jpg'


function Body() {
    return (
        <div className=''> 
            <div className='w-full flex relative overflow-hidden cursor-pointer md:pb-10'>
                <img src={sidedots} className=' content-end h-24 mt-2 mr-16 md:w-24' />
                <div className="absolute md:top-1/2 xs:top-10 px-6 py-4 -mt-12 z-30">
                    <h1 className="absolute mb-3 text-xl ml-4 font-semibold md:-top-4 left-1 tracking-tight text-black">MALO Reinigung GmbH</h1>
                    <p className="leading-normal content-start w-10/12 text-black -ml-2">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium</p>
                </div>
                <img src={shoppingmall} className="flex md:h-64 mt-2 md:w-72 opacity-90" />
            </div>
            <div className='w-full flex md:pb-10'>
                <img src={mop} className="flex h-64 mt-2 w-64 opacity-50" />
                <div className="absolute md:top-1/2 xs:top-10 right-2 px-6 py-4 -mt-12 z-70">
                    <h1 className="mb-3 text-xl ml-4 font-semibold tracking-tight w-52 text-blue-400">ERLEBEN SIE</h1>
                    <h1 className="mb-3 text-xl ml-4 font-semibold tracking-tight w-52 text-blue-900">FRISCHE UND</h1>
                    <h1 className="mb-3 text-xl ml-4 font-semibold tracking-tight w-52 text-blue-400">REINHEIT</h1>
                </div>
            </div>
            <div className='w-full flex justify-end content-center absolute top-60 left-6'>
            <img src={drop} className="-z-20 flex mt-8 h-4/12 w-4/6" />
            </div>
        </div>
    );
}

export default Body