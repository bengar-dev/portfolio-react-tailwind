import React from 'react'

import logo from '../assets/logo_white.png'
import groupomania from '../assets/icon-left-font-monochrome-white.png'
import tailwind from '../assets/tailwind-css-2.svg'
import kanap from '../assets/kanap_logo.png'
import shopy from '../assets/logo_shopy.png'
import usersapp from '../assets/userapp_logo.png'

import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

export default function Projects() {

    const targetWindow = (value) => {
        if(value === 'groupomania') {
          window.open('https://github.com/benysserp/Groupo_refacto')
        }
        if(value === 'kanap') {
          window.open('https://github.com/benysserp/Kanap-React')
        }
        if(value === 'portfolio') {
          window.open('https://github.com/benysserp/portfolio-react-tailwind')
        }
        if(value === 'groupomania-yt') {
          window.open('https://youtu.be/NHQ1HCI_xtI')
        }
        if(value === 'users-app') {
          window.open('https://github.com/benysserp/users-app')
        }
        if(value === 'shopy-link') {
          window.open('https://shopy-app-react.netlify.app/')
        }
        if(value === 'shopy-github') {
          window.open('https://github.com/benysserp/shopy-app')
        }
      }

  return (
    <section id='projects' className='relative min-h-screen bg-white'>
      <h1 className='mt-20 text-center font-bold text-4xl text-zinc-900 uppercase'>Réalisations</h1>
      <p className='mt-2 text-center font-medium text-sm text-zinc-800'>Quelques projets réalisés</p>
      <div className='mt-4 ml-auto mr-auto h-px bg-rose-500 w-10'></div>
      <div className='mt-4 flex flex-col w-full md:w-full lg:w-9/12 md:ml-auto md:mr-auto items-center space-y-4 mb-6'>

          <article className='container transition-all duration-200 flex w-11/12 h-max bg-zinc-800 p-2 rounded-lg hover:shadow-lg' data-aos="flip-up" data-aos-duration='2000'>
            <div className='w-1/4 flex items-center justify-center hidden md:block'>
                <img src={groupomania} className='h-40 w-auto ml-auto mr-auto' alt='Aperçu projet Groupomania' />
            </div>
            <div className='w-full p-2 flex flex-col'>
                <h2 className='font-bold text-slate-200'>Groupomania</h2>
                <p className='text-slate-200 text-sm'>Refonte du dernier projet fullstack pendant ma formation Developpeur web chez OpenClassrooms
                Réalisation d'un résau social pour l'entreprise fictive Groupomania. Utilisation de Redux côté front à la place de RecoilJS & refactorisation du code.</p>
                <ul className='flex items-center space-x-2 mt-2 mb-2 text-slate-300 text-sm font-medium'>
                <li className="text-xs bg-white text-zinc-900 p-1 rounded hover:bg-zinc-200">React</li>
                <li className="text-xs bg-white text-zinc-900 p-1 rounded hover:bg-zinc-200">Redux</li>
                <li className="text-xs bg-white text-zinc-900 p-1 rounded hover:bg-zinc-200">Tailwind</li>
                <li className="text-xs bg-white text-zinc-900 p-1 rounded hover:bg-zinc-200">Node JS</li>
                <li className="text-xs bg-white text-zinc-900 p-1 rounded hover:bg-zinc-200">Express</li>
                <li className="text-xs bg-white text-zinc-900 p-1 rounded hover:bg-zinc-200">Sequelize</li>
                <li className="text-xs bg-white text-zinc-900 p-1 rounded hover:bg-zinc-200">MySQL</li>
                </ul>
                <div className='mb-0 mt-auto flex flex-col lg:flex-row space-y-2 lg:space-x-2'>
                <button onClick={(e) => e.preventDefault(targetWindow('groupomania-yt'))} className='transition-all w-full lg:w-1/4 duration-200 mt-auto mb-0 bg-white hover:bg-rose-500 font-medium text-sm text-zinc-900 rounded p-2'><i className='fas fa-video mr-2' />Vidéo présentation</button>
                <button onClick={(e) => e.preventDefault(targetWindow('groupomania'))} className='transition-all w-full lg:w-3/4 duration-200 mt-auto mb-0 bg-stone-600 hover:bg-stone-400 font-medium text-sm text-white rounded p-2'><i className='fab fa-github mr-2' />Voir le projet sur GitHub</button>
                </div>
            </div>
          </article>

          <article className='container transition-all duration-200 flex w-11/12 h-max bg-zinc-800 p-2 rounded-lg hover:shadow-lg' data-aos="flip-up" data-aos-duration='2000'>
            <div className='w-1/4 flex items-center justify-center hidden md:flex'>
                <img src={shopy} className='w-28 object-cover ml-auto mr-auto' alt='Aperçu projet Groupomania' />
            </div>
            <div className='w-full p-2 flex flex-col'>
                <h2 className='font-bold text-slate-200'>Shopy app</h2>
                <p className='text-slate-200 text-sm'>E-commerce application, sans fonctionnalité de paiement. Application qui mets en pratique la gestion d'un panier utilisateur et le processus de validation de commande.</p>
                <ul className='flex items-center space-x-2 mt-2 mb-2 text-slate-300 text-sm font-medium'>
                <li className="text-xs bg-white text-zinc-900 p-1 rounded hover:bg-zinc-200">React</li>
                <li className="text-xs bg-white text-zinc-900 p-1 rounded hover:bg-zinc-200">Tailwind</li>
                </ul>
                <div className='mb-0 mt-auto flex flex-col lg:flex-row space-y-2 lg:space-x-2'>
                <button onClick={(e) => e.preventDefault(targetWindow('shopy-link'))} className='transition-all w-full lg:w-1/4 duration-200 mt-auto mb-0 bg-white hover:bg-emerald-400 font-medium text-sm text-zinc-900 rounded p-2'><i className='fas fa-laptop mr-2' />Live version</button>
                <button onClick={(e) => e.preventDefault(targetWindow('shopy-github'))} className='transition-all w-full lg:w-3/4 duration-200 mt-auto mb-0 bg-stone-600 hover:bg-stone-400 font-medium text-sm text-white rounded p-2'><i className='fab fa-github mr-2' />Voir le projet sur GitHub</button>
                </div>
            </div>
          </article>

          <article className='container transition-all duration-200 flex w-11/12 h-max bg-zinc-800 p-2 rounded-lg hover:shadow-lg' data-aos="flip-up" data-aos-duration='2000'>
            <div className='w-1/4 flex items-center justify-center hidden md:flex'>
                <img src={usersapp} className='w-28 ml-auto mr-auto' alt='Aperçu projet Groupomania' />
            </div>
            <div className='w-full p-2 flex flex-col'>
                <h2 className='font-bold text-slate-200'>Users app</h2>
                <p className='text-slate-200 text-sm'>Projet fullstack sans base de données de gestion d'utilisateurs/personnes. Ajout d'une personne, modification des informations et suppression de la personne. Possibilité de trier les personnes par leur nom de famille.</p>
                <ul className='flex items-center space-x-2 mt-2 mb-2 text-slate-300 text-sm font-medium'>
                <li className="text-xs bg-white text-zinc-900 p-1 rounded hover:bg-zinc-200">React</li>
                <li className="text-xs bg-white text-zinc-900 p-1 rounded hover:bg-zinc-200">Tailwind</li>
                <li className="text-xs bg-white text-zinc-900 p-1 rounded hover:bg-zinc-200">Node JS</li>
                <li className="text-xs bg-white text-zinc-900 p-1 rounded hover:bg-zinc-200">fastify</li>
                </ul>
                <div className='mb-0 mt-auto flex flex-col lg:flex-row space-y-2 lg:space-x-2'>
                <button onClick={(e) => e.preventDefault(targetWindow('users-app'))} className='transition-all w-full duration-200 mt-auto mb-0 bg-stone-600 hover:bg-stone-400 font-medium text-sm text-white rounded p-2'><i className='fab fa-github mr-2' />Voir le projet sur GitHub</button>
                </div>
            </div>
          </article>

          <span className='text-xl font-bold text-zinc-800'>...</span>

      </div>
    </section>
  )
}
