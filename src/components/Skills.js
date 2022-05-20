import React from 'react'

import tailwind from '../assets/tailwind-css-2.svg'
import expressjs from '../assets/Expressjs_alt.png'
import mysql from '../assets/mysql-icon.svg'

import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

export default function Skills() {
  return (
    <section id='skills' className='relative min-h-screen bg-zinc-200 overflow-hidden'>
       <h1 className='mt-20 text-center font-bold text-4xl text-zinc-900 uppercase'>Compétences</h1>
        <p className='mt-2 text-center font-medium text-sm text-zinc-800'>Quelles sont mes technologies préférées ?</p>
        <div className='mt-4 ml-auto mr-auto h-px bg-rose-500 w-10'></div>
        <div className='mt-4 mb-10 w-full lg:w-8/12 lg:ml-auto lg:mr-auto p-2 flex flex-col items-center space-y-4'>
            <article className='flex w-full justify-around items-center' data-aos="fade-right" data-aos-duration='2000'>
                <div className='w-4/12 flex items-center justify-center'>
                    <i className='fab fa-react text-6xl text-cyan-400'  data-aos="flip-up" data-aos-duration='1000'/>
                </div>
                <div className='flex flex-col items-between w-8/12'>
                    <h2 className='text-zinc-900 text-xl font-bold uppercase'>React JS</h2>
                    <p className='text-zinc-900 text-sm'>
                    <span className='font-medium'>React JS</span> est une librairie JavaScript Open Source
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
                    <h2 className='text-zinc-900 text-xl font-bold uppercase'>Tailwind CSS</h2>
                    <p className='text-zinc-900 text-sm'>
                    <span className='font-medium'>Tailwind CSS</span> est un framework CSS
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
                    <h2 className='text-zinc-900 text-xl font-bold uppercase'>Node JS</h2>
                    <p className='text-zinc-900 text-sm'>
                    <span className='font-medium'>Node JS</span> est une plateforme construite sur le moteur JavaScript 
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
                    <h2 className='text-zinc-900 text-xl font-bold uppercase'>Express</h2>
                    <p className='text-zinc-900 text-sm'>
                    <span className='font-medium'>Express.js</span> est un framework pour construire
                     des applications web basées sur Node.js. C'est de fait le framework
                      standard pour le développement de serveur en Node.js.
                    </p>
                </div>
            </article>

            <article className='flex flex-row w-full justify-around items-center' data-aos="fade-right" data-aos-duration='2000'>
                <div className='w-4/12 flex items-center justify-center'>
                    <img src={mysql} className='w-24 h-auto' data-aos="flip-up" data-aos-duration='1000'/>
                </div>
                <div className='flex flex-col items-between w-8/12'>
                    <h2 className='text-zinc-900 text-xl font-bold uppercase'>SQL / MySQL</h2>
                    <p className='text-slate-900 text-sm'>
                    <span className='font-medium'>SQL</span> est un langage informatique normalisé 
                    servant à exploiter des bases de données relationnelles. 
                    La partie langage de manipulation des données de SQL permet de rechercher,
                    d'ajouter, de modifier ou de supprimer des données dans les bases de données relationnelles.
                    </p>
                </div>
            </article>

            <article className='w-full flex flex-col items-center' data-aos="fade-up" data-aos-duration='3000'>
                <h2 className='mt-6 text-zinc-800 text-xl font-medium'>Mes technologies en vrac</h2>
                <div className='mt-4 ml-auto mr-auto h-px bg-rose-500 w-10'></div>
                <ul className='text-sm flex flex-wrap justify-center items-center space-x-2 space-y-2 w-full p-4'>
                    <li className="mt-2 bg-zinc-800 text-white font-medium text-sm rounded p-2">HTML</li>
                    <li className="bg-zinc-800 text-white font-medium text-sm rounded p-2">CSS</li>
                    <li className="bg-zinc-800 text-white font-medium text-sm rounded p-2">JavaScript</li>
                    <li className="bg-zinc-800 text-white font-medium text-sm rounded p-2">React</li>
                    <li className="bg-zinc-800 text-white font-medium text-sm rounded p-2">Redux</li>
                    <li className="bg-zinc-800 text-white font-medium text-sm rounded p-2">RecoilJS</li>
                    <li className="bg-zinc-800 text-white font-medium text-sm rounded p-2">TypeScript</li>
                    <li className="bg-zinc-800 text-white font-medium text-sm rounded p-2">Next JS</li>
                    <li className="bg-zinc-800 text-white font-medium text-sm rounded p-2">Tailwind CSS</li>
                    <li className="bg-zinc-800 text-white font-medium text-sm rounded p-2">Node JS</li>
                    <li className="bg-zinc-800 text-white font-medium text-sm rounded p-2">Express</li>
                    <li className="bg-zinc-800 text-white font-medium text-sm rounded p-2">fastify</li>
                    <li className="bg-zinc-800 text-white font-medium text-sm rounded p-2">SQL</li>
                    <li className="bg-zinc-800 text-white font-medium text-sm rounded p-2">MongoDB</li>
                    <li className="bg-zinc-800 text-white font-medium text-sm rounded p-2">Firebase</li>
                    <li className="bg-zinc-800 text-white font-medium text-sm rounded p-2">VS Code</li>
                    <li className="bg-zinc-800 text-white font-medium text-sm rounded p-2">Git</li>
                    <li className="bg-zinc-800 text-white font-medium text-sm rounded p-2">Photoshop</li>
                    <li className="bg-zinc-800 text-white font-medium text-sm rounded p-2">After Effect</li>
                </ul>                
            </article>

        </div>
    </section>
  )
}
