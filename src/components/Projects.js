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
    <section id='projects' className='relative min-h-screen bg-slate-800'>
      <h1 className='mt-20 text-center font-bold text-4xl text-slate-200 uppercase'>Réalisations</h1>
      <p className='mt-2 text-center font-medium text-sm text-slate-100'>Quelques projets réalisés</p>
      <div className='mt-4 ml-auto mr-auto h-px bg-slate-400 w-10'></div>
      <div className='mt-4 flex flex-col w-full md:w-full lg:w-9/12 md:ml-auto md:mr-auto items-center space-y-4'>

      <article className='container transition-all duration-200 flex items-center w-11/12 h-max bg-slate-700 p-2 rounded-lg hover:shadow-lg' data-aos="flip-up" data-aos-duration='2000'>
            <div className='w-1/4 flex items-center justify-center hidden md:block'>
                <img src={logo} className='h-20 w-28 object-cover ml-auto mr-auto' alt='Aperçu projet Portfolio' />
            </div>
            <div className='w-full p-2 flex flex-col'>
                <h2 className='font-medium text-slate-200 high-blue'>Portfolio</h2>
                <p className='text-slate-200 text-sm'>Refonte de mon portfolio, une petite présentation de mes compétences, et de mon inspiration. Un portfolio que me représente et qui j'éspère vous plaira.</p>
                <p className='flex items-center space-x-2 mt-2 mb-2 text-slate-300 text-sm font-medium'>Technologies utilisées : <i className='ml-1 fab fa-react text-cyan-400' /> <img src={tailwind} className='w-4 h-4' /> <i className='fab fa-js-square text-yellow-400' /> <i className='fab fa-sass text-pink-400' /></p>
                <button onClick={(e) => e.preventDefault(targetWindow('portfolio'))} className='transition-all duration-200 mt-auto mb-0 bg-slate-600 hover:bg-slate-800 font-medium text-sm text-slate-200 rounded p-2'><i className='fab fa-github mr-2' />Voir le projet sur GitHub</button>
            </div>
          </article>

          <article className='container transition-all duration-200 flex w-11/12 h-max bg-slate-700 p-2 rounded-lg hover:shadow-lg' data-aos="flip-up" data-aos-duration='2000'>
            <div className='w-1/4 flex items-center justify-center hidden md:block'>
                <img src={groupomania} className='h-40 w-auto ml-auto mr-auto' alt='Aperçu projet Groupomania' />
            </div>
            <div className='w-full p-2 flex flex-col'>
                <h2 className='font-medium text-slate-200 high-blue'>Groupomania</h2>
                <p className='text-slate-200 text-sm'>Refonte du dernier projet fullstack pendant ma formation Developpeur web chez OpenClassrooms
                Réalisation d'un résau social pour l'entreprise fictive Groupomania. Utilisation de Redux côté front à la place de RecoilJS & refactorisation du code.</p>
                <p className='flex items-center space-x-2 mt-2 mb-2 text-slate-300 text-sm font-medium'>Technologies utilisées : <i className='ml-1 fab fa-react text-cyan-400' /> <img src={tailwind} className='w-4 h-4' /> <i className='fab fa-node-js text-emerald-400' /> <i className='text-xs fas fa-database text-sky-400' /></p>
                <div className='mb-0 mt-auto flex flex-col lg:flex-row space-y-2 lg:space-x-2'>
                <button onClick={(e) => e.preventDefault(targetWindow('groupomania-yt'))} className='transition-all w-full lg:w-1/4 duration-200 mt-auto mb-0 bg-slate-600 hover:bg-slate-800 font-medium text-sm text-slate-200 rounded p-2'><i className='fas fa-video mr-2' />Vidéo présentation</button>
                <button onClick={(e) => e.preventDefault(targetWindow('groupomania'))} className='transition-all w-full lg:w-3/4 duration-200 mt-auto mb-0 bg-slate-600 hover:bg-slate-800 font-medium text-sm text-slate-200 rounded p-2'><i className='fab fa-github mr-2' />Voir le projet sur GitHub</button>
                </div>
            </div>
          </article>

          <article className='container transition-all duration-200 flex w-11/12 h-max bg-slate-700 p-2 rounded-lg hover:shadow-lg' data-aos="flip-up" data-aos-duration='2000'>
            <div className='w-1/4 flex items-center justify-center hidden md:flex'>
                <img src={shopy} className='w-28 object-cover ml-auto mr-auto' alt='Aperçu projet Groupomania' />
            </div>
            <div className='w-full p-2 flex flex-col'>
                <h2 className='font-medium text-slate-200 high-blue'>Shopy app</h2>
                <p className='text-slate-200 text-sm'>E-commerce application, sans fonctionnalité de paiement. Application qui mets en pratique la gestion d'un panier utilisateur et le processus de validation de commande.</p>
                <p className='flex items-center space-x-2 mt-2 mb-2 text-slate-300 text-sm font-medium'>Technologies utilisées : <i className='ml-1 fab fa-react text-cyan-400' /> <img src={tailwind} className='w-4 h-4' /> </p>
                <div className='mb-0 mt-auto flex flex-col lg:flex-row space-y-2 lg:space-x-2'>
                <button onClick={(e) => e.preventDefault(targetWindow('shopy-link'))} className='transition-all w-full lg:w-1/4 duration-200 mt-auto mb-0 bg-slate-600 hover:bg-slate-800 font-medium text-sm text-slate-200 rounded p-2'><i className='fas fa-laptop mr-2' />Live version</button>
                <button onClick={(e) => e.preventDefault(targetWindow('shopy-github'))} className='transition-all w-full lg:w-3/4 duration-200 mt-auto mb-0 bg-slate-600 hover:bg-slate-800 font-medium text-sm text-slate-200 rounded p-2'><i className='fab fa-github mr-2' />Voir le projet sur GitHub</button>
                </div>
            </div>
          </article>

          <article className='container transition-all duration-200 flex w-11/12 h-max bg-slate-700 p-2 rounded-lg hover:shadow-lg' data-aos="flip-up" data-aos-duration='2000'>
            <div className='w-1/4 flex items-center justify-center hidden md:flex'>
                <img src={usersapp} className='w-28 ml-auto mr-auto' alt='Aperçu projet Groupomania' />
            </div>
            <div className='w-full p-2 flex flex-col'>
                <h2 className='font-medium text-slate-200 high-blue'>Users app</h2>
                <p className='text-slate-200 text-sm'>Projet fullstack sans base de données de gestion d'utilisateurs/personnes. Ajout d'une personne, modification des informations et suppression de la personne. Possibilité de trier les personnes par leur nom de famille.</p>
                <p className='flex items-center space-x-2 mt-2 mb-2 text-slate-300 text-sm font-medium'>Technologies utilisées : <i className='ml-1 fab fa-react text-cyan-400' /> <img src={tailwind} className='w-4 h-4' /> <i className='fab fa-node-js text-emerald-400' /> </p>
                <div className='mb-0 mt-auto flex flex-col lg:flex-row space-y-2 lg:space-x-2'>
                <button onClick={(e) => e.preventDefault(targetWindow('users-app'))} className='transition-all w-full duration-200 mt-auto mb-0 bg-slate-600 hover:bg-slate-800 font-medium text-sm text-slate-200 rounded p-2'><i className='fab fa-github mr-2' />Voir le projet sur GitHub</button>
                </div>
            </div>
          </article>

          <article className='container transition-all duration-200 flex w-11/12 h-max bg-slate-700 p-2 rounded-lg hover:shadow-lg' data-aos="flip-up" data-aos-duration='2000'>
            <div className='w-1/4 flex items-center justify-center hidden md:block'>
                <img src={kanap} className='h-40 w-auto ml-auto mr-auto' alt='Aperçu projet Groupomania' />
            </div>
            <div className='w-full p-2 flex flex-col'>
                <h2 className='font-medium text-slate-200 high-blue'>Kanap</h2>
                <p className='text-slate-200 text-sm'>Projet pendant ma formation OpenClassrooms, réalisation d'un site e-commerce en JavaScript pour une entreprise fictive
                Kanap. Refonte du projet avec le framework React.</p>
                <p className='flex items-center space-x-2 mt-2 mb-2 text-slate-300 text-sm font-medium'>Technologies utilisées : <i className='ml-1 fab fa-react text-cyan-400' /> <img src={tailwind} className='w-4 h-4' /> <i className='fab fa-node-js text-emerald-400' /> <i className='text-xs fab fa-js-square text-yellow-400' /></p>
                <button onClick={(e) => e.preventDefault(targetWindow('kanap'))} className='transition-all duration-200 mt-auto mb-0 bg-slate-600 hover:bg-slate-800 font-medium text-sm text-slate-200 rounded p-2'><i className='fab fa-github mr-2' />Voir le projet sur GitHub</button>
            </div>
          </article>
          <span className='text-xl font-bold text-slate-200'>...</span>
          <span className='bg-slate-700 p-2 rounded-lg text-sm font-medium text-slate-200'>Vous ?</span>

      </div>
    </section>
  )
}
