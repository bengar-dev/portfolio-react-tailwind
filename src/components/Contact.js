import {useState} from 'react'

import{ init } from '@emailjs/browser';
import emailjs from '@emailjs/browser';
init("user_tFqdGtNDOu1Hg2tj18rvo");

export default function Contact() {

    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [msg, setMsg] = useState('')
    const [msgAlert, setMsgalert] = useState('')

    const validMail = (value) => {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    }
    
    const sendMail = () => {
        if(email === '' || subject === '' || msg === '') {
            setMsgalert('Veuillez remplir tous les champs')
          }
          else {
            if(!validMail(email)) {
              setMsgalert("Veuillez vérifier le format du champ Email")
            }
            else {
              sendFeedback('template_esdl5ni', {
                  email,
                  subject,
                  msg
              })
            }
          }
    }

    const sendFeedback = (templateId, variables) => {
        emailjs
            .send("service_sifndja", templateId, variables)
            .then((res) => {
                setEmail("")
                setSubject("")
                setMsg("")
                setMsgalert('Votre message a bien été envoyé !')
            })
            .catch(
                (err) => {
                console.log('erreur')
                })
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

  return (
    <section id='contact' className='relative min-h-screen bg-slate-800'>
      <h1 className='mt-20 text-center font-bold text-4xl text-slate-200 uppercase'>Contact</h1>
      <p className='mt-2 text-center font-medium text-sm text-slate-100'>Un projet ? Une offre d'emploi ? Dites-moi tout !</p>
      <div className='mt-4 ml-auto mr-auto h-px bg-slate-400 w-10'></div>
      <form className='mt-6 flex flex-col lg:ml-auto lg:mr-auto lg:w-8/12 space-y-2 p-2'>
          <p className='h-4 text-center text-sm text-emerald-400 font-medium'>{msgAlert}</p>
          <label htmlFor='email' className='font-medium text-slate-200 ml-4'>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' name='email' id='email' className='p-2 rounded outline-none text-slate-800 bg-slate-200' />
          <label htmlFor='subject' className='font-medium text-slate-200 ml-4'>Sujet</label>
          <input value={subject} onChange={(e) => setSubject(e.target.value)} type='text' name='subject' id='subject' className='p-2 rounded outline-none text-slate-800 bg-slate-200' />
          <label htmlFor='msg' className='font-medium text-slate-200 ml-4'>Message</label>
          <textarea value={msg} onChange={(e) => setMsg(e.target.value)} id='msg'className='rounded-lg h-40 resize-none focus:outline-none p-2 text-slate-800 bg-slate-200'></textarea>
          <button onClick={(e) => e.preventDefault(sendMail())} type='submit' className='transition-all duration-200 p-2 bg-emerald-400 hover:bg-emerald-600 rounded text-slate-800 font-medium'><i className='fas fa-paper-plane' /></button>
      </form>
      <div className='mt-4 ml-auto mr-auto h-px bg-slate-400 w-10'></div>
      <h2 className='mt-4 font-medium text-slate-200 text-lg text-center'>Retrouvez moi sur les réseaux sociaux</h2>
      <div className='p-2 mb-10 flex flex-wrap justify-center items-center space-x-2 space-y-2'>
        <a href='#' onClick={(e) => e.preventDefault(handleClick('github'))} className='mt-2 p-2 hover:bg-stone-400 rounded text-lg text-slate-200 hover:text-stone-800'><i className='fab fa-github' /></a>
        <a href='#' onClick={(e) => e.preventDefault(handleClick('linkedin'))} className='mt-2 p-2 hover:bg-sky-400 rounded text-lg text-slate-200 hover:text-sky-800'><i className='fab fa-linkedin' /></a>
        <a href='#' onClick={(e) => e.preventDefault(handleClick('twitch'))} className='mt-2 p-2 hover:bg-purple-400 rounded text-lg text-slate-200 hover:text-purple-800'><i className='fab fa-twitch' /></a>
        <a href='#' onClick={(e) => e.preventDefault(handleClick('twitter'))} className='mt-2 p-2 hover:bg-cyan-400 rounded text-lg text-slate-200 hover:text-cyan-800'><i className='fab fa-twitter' /></a>
        <a href='#' onClick={(e) => e.preventDefault(handleClick('mail'))} className='mt-2 p-2 hover:bg-rose-400 rounded text-lg text-slate-200 hover:text-rose-800'><i className='fas fa-at' /></a>
      </div>
      <footer className='absolute bottom-0 w-full p-2'>
          <p className='text-center font-medium text-slate-300'><i className='fas fa-copyright' /> 2022 - <span className='text-cyan-400 high-blue'>Benoit Garcia</span></p>
      </footer>
    </section>
  )
}
