import React from 'react'

import tailwind from '../assets/tailwind-css-2.svg'

import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

export default function Skills() {
  return (
    <div id='skills' className='relative min-h-screen bg-slate-800 overflow-hidden'>
       <h1 className='mt-20 text-center font-bold text-4xl text-slate-200 uppercase'>Compétences</h1>
        <p className='mt-2 text-center font-medium text-sm text-slate-100'>Quelles sont mes technologies préférés ?</p>
        <div className='mt-4 ml-auto mr-auto h-px bg-slate-400 w-10'></div>
        <div className='mt-4 mb-10 w-full p-2 flex flex-col items-center space-y-4'>
            <section className='flex w-full justify-around items-center' data-aos="fade-right" data-aos-duration='2000'>
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
            </section>

            <section className='flex flex-row-reverse w-full justify-around items-center' data-aos="fade-left" data-aos-duration='2000'>
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
            </section>

            <section className='flex flex-row w-full justify-around items-center' data-aos="fade-right" data-aos-duration='2000'>
                <div className='w-4/12 flex items-center justify-center'>
                    <i className='fab fa-node-js text-6xl text-emerald-400' data-aos="flip-up" data-aos-duration='1000' />
                </div>
                <div className='flex flex-col items-between w-8/12'>
                    <h2 className='text-emerald-500 text-xl font-bold uppercase'>Node JS</h2>
                    <p className='text-slate-200 text-sm'>
                    <span className='font-medium high-blue'>Node JS</span> est une plateforme construite sur le moteur JavaScript 
                    V8 de Chrome qui permet de développer des applications en utilisant du JavaScript. 
                    Il se distingue des autres plateformes gràce à une approche non bloquante 
                    permettant d'effectuer des entrées/sorties (I/O) de manière asynchrone.
                    </p>
                </div>
            </section>

            <section className='flex flex-row-reverse w-full justify-around items-center' data-aos="fade-left" data-aos-duration='2000'>
                <div className='w-4/12 flex items-center justify-center'>
                    <i className='fab fa-js-square text-6xl text-yellow-400' data-aos="flip-up" data-aos-duration='1000' />
                </div>
                <div className='flex flex-col items-between w-8/12'>
                    <h2 className='text-yellow-500 text-xl font-bold uppercase'>Express</h2>
                    <p className='text-slate-200 text-sm'>
                    <span className='font-medium high-blue'>Express.js</span> est un framework pour construire
                     des applications web basées sur Node.js. C'est de fait le framework
                      standard pour le développement de serveur en Node.js.
                    </p>
                </div>
            </section>

            <section className='flex flex-row w-full justify-around items-center' data-aos="fade-right" data-aos-duration='2000'>
                <div className='w-4/12 flex items-center justify-center'>
                    <i className='fas fa-database text-6xl text-sky-400' data-aos="flip-up" data-aos-duration='3000'/>
                </div>
                <div className='flex flex-col items-between w-8/12'>
                    <h2 className='text-sky-500 text-xl font-bold uppercase'>SQL</h2>
                    <p className='text-slate-200 text-sm'>
                    <span className='font-medium high-blue'>SQL</span> est un langage informatique normalisé 
                    servant à exploiter des bases de données relationnelles. 
                    La partie langage de manipulation des données de SQL permet de rechercher,
                    d'ajouter, de modifier ou de supprimer des données dans les bases de données relationnelles.
                    </p>
                </div>
            </section>
        </div>
    </div>
  )
}
