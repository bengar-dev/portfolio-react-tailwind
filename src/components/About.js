import React from 'react'

import profil from '../assets/profilpic.jpg'
import oc from '../assets/Logo_OpenClassrooms.png'
import graduate from '../assets/graduate.png'
import computer from '../assets/computer.png'
import suitcase from '../assets/suitcase.png'
import game from '../assets/joystick.png'
import trophy from '../assets/trophy.png'

import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

export default function About() {

  const targetWindow = (value) => {
    if(value === 'cv') {
      window.open('https://benoitgarcia.fr/ftp/CV_BENOIT.pdf')
    }
  }

  return (
    <section id='about' className='relative min-h-screen bg-slate-800'>
      <h1 className='mt-20 text-center font-bold text-4xl text-slate-200 uppercase'>À propos</h1>
      <p className='mt-2 text-center font-medium text-sm text-slate-100'>Qui suis-je ?</p>
      <div className='mt-4 ml-auto mr-auto h-px bg-slate-400 w-10'></div>
      <div className='mt-4 w-full p-2 flex flex-col lg:flex-row items-center md:w-full lg:w-10/12 lg:ml-auto lg:mr-auto lg:space-x-4'>
        <img src={profil} className='w-28 h-28 rounded-full border-2 border-slate-400 shadow-xl' data-aos="fade-right" data-aos-duration='1000'/>
        <div className='mt-6 p-4 w-full bg-slate-900 text-slate-200 text-sm flex flex-col space-y-2 rounded-lg' data-aos="fade-down" data-aos-duration='1000'>
          <p>Benoît, 33 ans je vis dans la magnifique ville de Montpellier.</p>
          <p>Passioné de développement depuis l'âge de 13 ans, après avoir passé 10 ans dans le secteur du bâtiment, en aout 2021 je décide enfin de faire ma passion mon métier.</p>
          <p>Etant auto-didacte, je me suis tourné vers l'école OpenClassrooms pour laquelle je viens d'obtenir mon diplôme de Développeur Web.</p>
          <p>Je vais maintenant en démarrer une nouvelle mais, cette fois-ci pour aguerrir mes compétences en front-end et React notamment.</p>
        
          <button onClick={(e) => e.preventDefault(targetWindow('cv'))} className='ml-4 transition-all duration-200 text-base font-medium bg-slate-700 hover:bg-slate-800 p-2 w-44 rounded-lg hover:shadow-lg'><i className='fas fa-download' /> Curriculum Vitae</button>
        </div>
        <div className='mt-2 p-2 w-full flex flex-col items-center overflow-hidden'>
          <h2 className='text-center font-bold text-xl text-slate-200 uppercase'><i className='fas fa-clock mr-2' />Timeline</h2>
          <div className='mt-4 ml-auto mr-auto h-px bg-slate-400 w-10'></div>
          <ul className='mt-4 w-full flex flex-col text-slate-200' data-aos="flip-up" data-aos-duration='2000'>
            <li className='rounded flex items-center transition-all duration-500 hover:bg-slate-900 p-2'><span className='font-medium text-cyan-400 high-blue mr-2'>2021</span> : <img src={graduate} className='ml-2 mr-2 w-4 h-4'/> Formation OpenClassrooms Développeur Web</li>
            <li className='rounded flex items-center transition-all duration-500 hover:bg-slate-900 p-2'><span className='font-medium text-cyan-400 high-blue mr-2'>2021</span> : <img src={computer} className='ml-2 mr-2 w-4 h-4'/>Stage intégrateur web chez Cokorico</li>
            <li className='rounded flex items-center transition-all duration-500 hover:bg-slate-900 p-2'><span className='font-medium text-cyan-400 high-blue mr-2'>2021</span> : <img src={suitcase} className='ml-2 mr-2 w-4 h-4'/>Reconversion professionnelle Développeur</li>
            <li className='rounded flex items-center transition-all duration-500 hover:bg-slate-900 p-2'><span className='font-medium text-cyan-400 high-blue mr-2'>2011</span> :<img src={suitcase} className='ml-2 mr-2 w-4 h-4'/> Chef d'équipe façadier chez Calces 34</li>
            <li className='rounded flex items-center transition-all duration-500 hover:bg-slate-900 p-2'><span className='font-medium text-cyan-400 high-blue mr-2'>2011</span> : <img src={suitcase} className='ml-2 mr-2 w-4 h-4'/> Diverses expériences pro en Espagne, Madrid</li>
            <li className='rounded flex items-center transition-all duration-500 hover:bg-slate-900 p-2'><span className='font-medium text-cyan-400 high-blue mr-2'>2010</span> : <img src={graduate} className='ml-2 mr-2 w-4 h-4'/> EF International School of English, NY USA</li>
            <li className='rounded flex items-center transition-all duration-500 hover:bg-slate-900 p-2'><span className='font-medium text-cyan-400 high-blue mr-2'>2009</span> : <img src={graduate} className='ml-2 mr-2 w-4 h-4'/> Baccalauréat STI Génie Electronique</li>
            <li className='rounded flex items-center transition-all duration-500 hover:bg-slate-900 p-2'><span className='font-medium text-cyan-400 high-blue mr-2'>2008</span> : <img src={trophy} className='ml-2 mr-2 w-4 h-4'/> Troisième Coupe de France de Counter-Strike</li>
            <li className='rounded flex items-center transition-all duration-500 hover:bg-slate-900 p-2'><span className='font-medium text-cyan-400 high-blue mr-2'>2004</span> : <img src={game} className='ml-2 mr-2 w-4 h-4'/> Joueur e-sport Counter-Strike</li>
            <li className='rounded flex items-center transition-all duration-500 hover:bg-slate-900 p-2'><span className='font-medium text-cyan-400 high-blue mr-2'>2002</span> : <img src={computer} className='ml-2 mr-2 w-4 h-4'/> Mes premières lignes de code en HTML</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
