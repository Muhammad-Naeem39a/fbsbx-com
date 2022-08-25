import React from 'react'
import drop from '../assets/drop-1.png';
import shoppingmall from '../components/clean.jpg'

function About() {
    return (
        <div className=''>
            <div className='w-full flex justify-start content-center'>
                <img src={drop} className="h-1/2 w-4/5 -ml-14 -mt-16" />
                <div className="absolute top-8/12 z-30">
                    <p className="mb-3 text-xl ml-4 mt-8 w-44 font-semibol">
                        Qualitative Dientleistungen fur Qualitative Kunden
                    </p>
                </div>
            </div>
            <div className='w-full flex justify-end content-center md:-mt-80 mb-36 md:ml-10 '>
                <img src={shoppingmall} className="-z-20 h-1/2 md:w-4/6" />
            </div>
            <div className='w-11/12 mx-4 md:pb-10 -mt-24'>
                <div className='font-bold text-lg'>ABOUT US</div>
                <div className='mt-3'>  delectus in rem earum debitis</div>
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi ab laboriosam culpa consectetur adipisci, nam eius nemo inventore.</div>
            </div>
        </div>
    );
}

export default About