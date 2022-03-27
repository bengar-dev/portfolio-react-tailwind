import React from 'react'

import tailwind from '../assets/tailwind-css-2.svg'
import expressjs from '../assets/Expressjs.png'
import mysql from '../assets/mysql_logo.png'

import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

export default function Skills() {
  return (
    <section id='skills' className='relative min-h-screen bg-slate-800 overflow-hidden'>
       <h1 className='mt-20 text-center font-bold text-4xl text-slate-200 uppercase'>Compétences</h1>
        <p className='mt-2 text-center font-medium text-sm text-slate-100'>Quelles sont mes technologies préférées ?</p>
        <div className='mt-4 ml-auto mr-auto h-px bg-slate-400 w-10'></div>
        <div className='mt-4 mb-10 w-full lg:w-8/12 lg:ml-auto lg:mr-auto p-2 flex flex-col items-center space-y-4'>
            <article className='flex w-full justify-around items-center' data-aos="fade-right" data-aos-duration='2000'>
                <div className='w-4/12 flex items-center justify-center'>
                    <i className='fab fa-react text-6xl text-cyan-400'  data-aos="flip-up" data-aos-duration='1000'/>
                </div>
                <div className='flex flex-col items-between w-8/12'>
                    <h2 className='text-cyan-500 text-xl font-bold uppercase'>React JS</h2>
                    <p className='text-slate-200 text-sm'>
                    <span className='font-medium high-blue'>React JS</span> est une librairie JavaScript Open Source
                    qui vise à simplifier le développement d'interfaces visuelles.
                    Développé par Facebook et commercialisé en 2013,
                    il gère certaines des applications web les plus utilisées,
                    notamment Facebook, Instagram ou encore Netflix.
                    </p>
                </div>
            </article>

            <article className='flex flex-row-reverse w-full justify-around items-center' data-aos="fade-left" data-aos-duration='2000'>
                <div className='w-4/12 flex items-center justify-center'>
                    <img src={tailwind} className='w-24 h-24' data-aos="flip-up" data-aos-duration='1000'/>
                </div>
                <div className='flex flex-col items-between w-8/12'>
                    <h2 className='text-sky-500 text-xl font-bold uppercase'>Tailwind CSS</h2>
                    <p className='text-slate-200 text-sm'>
                    <span className='font-medium high-blue'>Tailwind CSS</span> est un framework CSS
                    "Utility-First" permettant aux développeurs de personnaliser totalement et simplement
                    le design de leur site ou application web. Il est possible de créer un design interface au sein même du fichier HTML.
                    </p>
                </div>
            </article>

            <article className='flex flex-row w-full justify-around items-center' data-aos="fade-right" data-aos-duration='2000'>
                <div className='w-4/12 flex items-center justify-center'>
                    <i className='fab fa-node-js text-6xl text-emerald-400' data-aos="flip-up" data-aos-duration='1000' />
                </div>
                <div className='flex flex-col items-between w-8/12'>
                    <h2 className='text-emerald-500 text-xl font-bold uppercase'>Node JS</h2>
                    <p className='text-slate-200 text-sm'>
                    <span className='font-medium high-blue'>Node JS</span> est une plateforme construite sur le moteur JavaScript 
                    V8 de Chrome qui permet de développer des applications en utilisant du JavaScript.
                    On l'utilisera nottament pour construire le back-end de notre application ou notre site web.
                    </p>
                </div>
            </article>

            <article className='flex flex-row-reverse w-full justify-around items-center' data-aos="fade-left" data-aos-duration='2000'>
                <div className='w-4/12 flex items-center justify-center'>
                <img src={expressjs} className='w-28 h-auto' data-aos="flip-up" data-aos-duration='1000'/>
                </div>
                <div className='flex flex-col items-between w-8/12'>
                    <h2 className='text-zinc-300 text-xl font-bold uppercase'>Express</h2>
                    <p className='text-slate-200 text-sm'>
                    <span className='font-medium high-blue'>Express.js</span> est un framework pour construire
                     des applications web basées sur Node.js. C'est de fait le framework
                      standard pour le développement de serveur en Node.js.
                    </p>
                </div>
            </article>

            <article className='flex flex-row w-full justify-around items-center' data-aos="fade-right" data-aos-duration='2000'>
                <div className='w-4/12 flex items-center justify-center'>
                    <img src={mysql} className='w-32 h-auto' data-aos="flip-up" data-aos-duration='1000'/>
                </div>
                <div className='flex flex-col items-between w-8/12'>
                    <h2 className='text-sky-500 text-xl font-bold uppercase'>SQL / MySQL</h2>
                    <p className='text-slate-200 text-sm'>
                    <span className='font-medium high-blue'>SQL</span> est un langage informatique normalisé 
                    servant à exploiter des bases de données relationnelles. 
                    La partie langage de manipulation des données de SQL permet de rechercher,
                    d'ajouter, de modifier ou de supprimer des données dans les bases de données relationnelles.
                    </p>
                </div>
            </article>

            <article className='w-full flex flex-col items-center' data-aos="fade-up" data-aos-duration='3000'>
                <h2 className='mt-6 text-slate-200 text-xl font-medium'>Mes technologies en vrac</h2>
                <div className='mt-4 ml-auto mr-auto h-px bg-slate-400 w-10'></div>
                <div className='text-sm flex flex-wrap justify-center items-center space-x-2 space-y-2 w-full p-4'>
                    <span className='flex items-center mt-2 p-1 h-auto font-medium bg-slate-900 text-slate-300 rounded'>Front-end <span className='ml-2 font-bold'>HTML / CSS / JavaScript</span></span>
                    <span className='flex items-center p-1 h-auto font-medium bg-slate-900 text-slate-300 rounded'>Préprocesseurs <span className='ml-2 font-bold'>Sass</span></span>
                    <span className='flex items-center p-1 h-auto font-medium bg-slate-900 text-slate-300 rounded'>Frameworks <span className='ml-2 font-bold'>React.js / Redux / RecoilJS / Bootstrap / Tailwind</span></span>
                    <span className='flex items-center p-1 h-auto font-medium bg-slate-900 text-slate-300 rounded'>Back-end <span className='ml-2 font-bold'>Node.Js / PHP</span></span>
                    <span className='flex items-center p-1 h-auto font-medium bg-slate-900 text-slate-300 rounded'>Frameworks <span className='ml-2 font-bold'>Express / fastify / Symfony</span></span>
                    <span className='flex items-center p-1 h-auto font-medium bg-slate-900 text-slate-300 rounded'>Base de données <span className='ml-2 font-bold'>SQL / MongoDB / Firebase</span></span>
                    <span className='flex items-center p-1 h-auto font-medium bg-slate-900 text-slate-300 rounded'>IDE <span className='ml-2 font-bold'>VSCode / Atom</span></span>
                    <span className='flex items-center p-1 h-auto font-medium bg-slate-900 text-slate-300 rounded'>Outils <span className='ml-2 font-bold'>Git / Photoshop</span></span>
                </div>                
            </article>

        </div>
    </section>
  )
}
