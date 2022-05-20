import logo from '../assets/logo_black.png'

import { useEffect, useState } from 'react'

import Parallax from 'parallax-js'

export default function Home() {

  const [state, setState] = useState(false)

  function handleScroll(value, div) {
    var target = document.getElementById(div).offsetHeight * value

    window.scrollTo({
      top: target,
      left: 0,
      behavior: 'smooth'
    });
  }

  const handleClick = (value) => {
    if(value === 'github') {
        window.open('https://github.com/benysserp')
    }
    if(value === 'linkedin') {
        window.open('https://www.linkedin.com/in/benoit-gar/')
    }
    if(value === 'twitch') {
        window.open('https://twitch.tv/pressycw')
    }
    if(value === 'twitter') {
        window.open('https://twitter.com/Bengarcia_pro')
    }
    if (value === 'mail') {
        window.location.assign('mailto:benoitgar.pro@gmail.com')
    }
}

  const checkLoad = () => {
      var scene = document.getElementById('scene');
      var parallaxInstance = new Parallax(scene);
  }

  return (
    <section id='home' className='bg-zinc-200 w-full h-screen pt-16 flex flex-col space-y-2 justify-center items-center'>
        <img src={logo} className='w-40 rotate-center'/>
        <div className='flex flex-col'>
            <h1 className='text-4xl font-bold text-black'>Hello,</h1>
            <p className='text-black text-lg'>Je suis <span className='font-bold text-2xl text-rose-500 high-rose'>Benoît Garcia</span></p>
            <div className='flex items-center text-black font-medium'>Développeur front-end      
              <div className='font-medium text-cyan-500 text-xl high-blue slider'>      
                <div className='slider-text1'>Ambitieux</div>
                <div className='slider-text2'>Créatif</div>
                <div className='slider-text3'>Curieux</div>
              </div>      
            </div>
            <div className='mt-6 flex justify-center space-x-2'>
              <a href='https://github.com/benysserp' alt='Mon profil Github' onClick={(e) => e.preventDefault(handleClick('github'))} className='mt-2 p-2 text-lg text-slate-200 hover:text-stone-400'><i className='fab fa-github' /></a>
              <a href='https://www.linkedin.com/in/benoit-gar/' alt='Mon profil Linkedin' onClick={(e) => e.preventDefault(handleClick('linkedin'))} className='mt-2 p-2 text-lg text-slate-200 hover:text-sky-400'><i className='fab fa-linkedin' /></a>
              <a href='https://twitch.tv/pressycw' alt='Ma chaîne Twitch' onClick={(e) => e.preventDefault(handleClick('twitch'))} className='mt-2 p-2 text-lg text-slate-200 hover:text-purple-400'><i className='fab fa-twitch' /></a>
              <a href='https://twitter.com/Bengarcia_pro' alt='Mon compte Twitter' onClick={(e) => e.preventDefault(handleClick('twitter'))} className='mt-2 p-2 text-lg text-slate-200 hover:text-cyan-400'><i className='fab fa-twitter' /></a>
              <a href='mailto:benoitgar.pro@gmail.com' alt='Mon email pro' onClick={(e) => e.preventDefault(handleClick('mail'))} className='mt-2 p-2 text-lg text-slate-200 hover:text-rose-400'><i className='fas fa-at' /></a>
            </div>
        </div>
    </section>
  )
}
/*       <div id="scene">
        <div data-depth="0.2">My first Layer!</div>
        <div data-depth="0.6">My second Layer!</div>
      </div> */