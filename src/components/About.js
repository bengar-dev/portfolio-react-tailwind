import React from 'react'

import profil from '../assets/profilpic.jpg'
import oc from '../assets/Logo_OpenClassrooms.png'
import graduate from '../assets/graduate.png'
import computer from '../assets/computer.png'
import suitcase from '../assets/suitcase.png'
import game from '../assets/joystick.png'
import trophy from '../assets/trophy.png'
import classroom from '../assets/classroom.png'

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
    <section id='about' className='relative min-h-screen bg-white'>
      <h1 className='mt-20 text-center font-bold text-4xl text-zinc-900 uppercase'>À propos</h1>
      <p className='mt-2 text-center font-medium text-sm text-zinc-800'>Qui suis-je ?</p>
      <div className='mt-4 ml-auto mr-auto h-px bg-rose-500 w-10'></div>
      <div className='mt-4 w-full p-2 flex flex-col lg:flex-row items-center md:w-full lg:w-10/12 lg:ml-auto lg:mr-auto lg:space-x-4'>
        <img src={profil} className='w-28 h-28 rounded-full border-2 border-rose-500 shadow-xl' data-aos="fade-right" data-aos-duration='1000'/>
        <div className='mt-6 p-4 w-full bg-zinc-900 text-white text-sm flex flex-col space-y-2 rounded-lg' data-aos="fade-down" data-aos-duration='1000'>
          <p>Benoît, 33 ans je vis dans la magnifique ville de Montpellier.</p>
          <p>Passionné de développement depuis l'âge de 13 ans, après avoir passé 10 ans dans le secteur du bâtiment, en aout 2021 je décide enfin de faire de cette passion mon métier.</p>
          <p>Etant auto-didacte, je me suis tourné vers l'école OpenClassrooms pour laquelle j'ai obtenu le dipôme de Développeur web.</p>
          <p>Je suis maintenant en alternance avec l'entreprise <span className="font-bold">Kaliop</span> et en formation avec l'organisme de l'<span className="font-bold">AFPA</span> pour obtenir un diplôme de concepteur d'application.</p>

          <button onClick={(e) => e.preventDefault(targetWindow('cv'))} className='ml-4 transition-all duration-200 text-base text-zinc-900 font-medium bg-white hover:bg-zinc-300 p-2 w-44 rounded-lg hover:shadow-lg'><i className='fas fa-download' /> Curriculum Vitae</button>
        </div>
        <div className='mt-2 p-2 w-full flex flex-col items-center overflow-hidden'>
          <h2 className='text-center font-bold text-xl text-zinc-900 uppercase'>Mon parcours</h2>
          <div className='mt-4 ml-auto mr-auto h-px bg-rose-500 w-10'></div>
          <ul className='mt-4 w-full flex flex-col text-slate-200' data-aos="flip-up" data-aos-duration='2000'>

          <li className="flex items-center text-black text-sm hover:bg-zinc-100 w-max">
              <div className="bg-red-300 w-24 text-center p-1">
                06 / 2022
              </div>
              <div className="flex items-center space-x-2 p-1">
                <img src={suitcase} alt='icon suitcase' className="ml-2 w-6 h-6"/>
                <p className="">Début de mon alternance chez <span className="font-bold">Kaliop</span></p>
              </div>
          </li>

          <li className="flex items-center text-black text-sm hover:bg-zinc-100 w-max">
              <div className="bg-emerald-300 w-24 text-center p-1">
                06 / 2022
              </div>
              <div className="flex items-center space-x-2 p-1">
                <img src={computer} alt='icon computer' className="ml-2 w-6 h-6"/>
                <p className="">Hackaton 2022 organisé par <span className="font-bold">Pole-emploi</span></p>
              </div>
          </li>

          <li className="flex items-center text-black text-sm hover:bg-zinc-100 w-max">
              <div className="bg-yellow-400 w-24 text-center p-1">
                04 / 2022
              </div>
              <div className="flex items-center space-x-2 p-1">
                <img src={graduate} alt='icon graduate' className="ml-2 w-6 h-6"/>
                <a href="https://www.freecodecamp.org/certification/benysserp/javascript-algorithms-and-data-structures" className="underline hover:no-underline">Certification JavaScript <span className="font-bold">freeCodeCamp</span><sup><i className="ml-1 fas fa-link text-rose-500" /></sup></a>
              </div>
          </li>

          <li className="flex items-center text-black text-sm hover:bg-zinc-100 w-max">
              <div className="bg-purple-300 w-24 text-center p-1">
                04 / 2022
              </div>
              <div className="flex items-center space-x-2 p-1">
                <img src={computer} alt='icon computer' className="ml-2 w-6 h-6"/>
                <p className="">Début de formation front-end React chez <span className="font-bold">OpenClassrooms</span></p>
              </div>
          </li>

          <li className="flex items-center text-black text-sm hover:bg-zinc-100 w-max">
              <div className="bg-yellow-400 w-24 text-center p-1">
                03 / 2022
              </div>
              <div className="flex items-center space-x-2 p-1">
                <img src={graduate} alt='icon graduate' className="ml-2 w-6 h-6"/>
                <a href="https://benoitgarcia.fr/ftp/OC-devweb.pdf" className="underline hover:no-underline">Diplôme RNCP Niv 5 Développeur web<sup><i className="ml-1 fas fa-link text-rose-500" /></sup></a>
              </div>
          </li>

          <li className="flex items-center text-black text-sm hover:bg-zinc-100 w-max">
              <div className="bg-purple-300 w-24 text-center p-1">
                11 / 2021
              </div>
              <div className="flex items-center space-x-2 p-1">
                <img src={computer} alt='icon computer' className="ml-2 w-6 h-6"/>
                <p className="">Début de formation dev web chez <span className="font-bold">OpenClassrooms</span></p>
              </div>
          </li>

          <li className="flex items-center text-black text-sm hover:bg-zinc-100 w-max">
              <div className="bg-red-300 w-24 text-center p-1">
                09 / 2021
              </div>
              <div className="flex items-center space-x-2 p-1">
                <img src={computer} alt='icon computer' className="ml-2 w-6 h-6"/>
                <p className="">Stage intégrateur web chez <span className="font-bold">Cokorico</span></p>
              </div>
            </li>
          
          <li className="flex items-center text-black text-sm hover:bg-zinc-100 w-max">
              <div className="bg-purple-300 w-24 text-center p-1">
                09 / 2021
              </div>
              <div className="flex items-center space-x-2 p-1">
                <img src={suitcase} alt='icon suitcase' className="ml-2 w-6 h-6"/>
                <p className="">Reconversion professionnelle Développeur web</p>
              </div>
            </li>
          
          <li className="flex items-center text-black text-sm hover:bg-zinc-100 w-max">
              <div className="bg-red-300 w-24 text-center p-1">
                06 / 2011
              </div>
              <div className="flex items-center space-x-2 p-1">
                <img src={suitcase} alt='icon suitcase' className="ml-2 w-6 h-6"/>
                <p className="">Technico-commercial chez Calces 34, <span className="font-bold">Montpellier</span></p>
              </div>
            </li>
          
          <li className="flex items-center text-black text-sm hover:bg-zinc-100 w-max">
              <div className="bg-yellow-400 w-24 text-center p-1">
                10 / 2010
              </div>
              <div className="flex items-center space-x-2 p-1">
                <img src={graduate} alt='icon graduate' className="ml-2 w-6 h-6"/>
                <p className="">EF International School of English <span className="font-bold">New-York, USA</span></p>
              </div>
            </li>
          
          <li className="flex items-center text-black text-sm hover:bg-zinc-100 w-max">
              <div className="bg-yellow-400 w-24 text-center p-1">
                06 / 2009
              </div>
              <div className="flex items-center space-x-2 p-1">
                <img src={graduate} alt='icon graduate' className="ml-2 w-6 h-6"/>
                <p className="">Baccalauréat STI Génie Electronique</p>
              </div>
            </li>
            
            <li className="flex items-center text-black text-sm hover:bg-zinc-100 w-max">
              <div className="bg-emerald-400 w-24 text-center p-1">
                06 / 2002
              </div>
              <div className="flex items-center space-x-2 p-1">
                <img src={computer} alt='icon computer' className="ml-2 w-6 h-6"/>
                <p className="">Mes premières lignes de code en HTML</p>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </section>
  )
}
