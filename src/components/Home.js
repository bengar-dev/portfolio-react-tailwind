import logo from '../assets/logo_white.png'

import { useEffect, useState } from 'react'

export default function Home() {

  function handleScroll(value, div) {
    var target = document.getElementById(div).offsetHeight * value

    window.scrollTo({
      top: target,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div id='home' className='bg-slate-800 w-full h-screen pt-16 flex flex-col space-y-2 justify-center items-center'>
        <img src={logo} className='w-40 rotate-center'/>
        <div className='flex flex-col'>
            <h1 className='text-4xl font-bold text-white'>Hello,</h1>
            <p className='text-white text-lg'>Je suis <span className='font-bold text-2xl text-rose-400 high-rose'>Benoit Garcia</span></p>
            <div className='flex items-center text-white font-medium'>Développeur front-end
            
              <div className='font-medium text-cyan-400 text-xl high-blue slider'>
                
                <div className='slider-text1'>Ambitieux</div>
                <div className='slider-text2'>Créatif</div>
                <div className='slider-text3'>Curieux</div>

              </div>
              
            </div>
        </div>
        <div className='relative top-40'>
           <button onClick={(e) => e.preventDefault(handleScroll(1, 'about'))}><i className='transtion-all duration-200 fas fa-arrow-down text-rose-400 hover:text-rose-300 text-4xl' /></button>
        </div>
    </div>
  )
}
