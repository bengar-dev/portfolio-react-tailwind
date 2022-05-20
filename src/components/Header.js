export default function Header() {

  function handleScroll(value, div) {
    var target = window.innerHeight * value

    document.getElementById(div).scrollIntoView({behavior: "smooth", top: 200});
  }

  return (
    <header className='fixed z-10 top-0 w-full h-16 bg-zinc-900 flex items-center justify-center shadow-lg'>
        <nav >
            <ul className='flex space-x-10 text-rose-400'>
                <li className='flex space-x-2'><a href='#home' alt='Accueil' onClick={(e) => e.preventDefault(handleScroll(0, 'home'))} className='flex items-center space-x-2 text-rose-400 hover:text-rose-300'><i className='fas fa-home' /> <span className='hidden md:block text-sm font-medium'>Accueil</span></a></li>
                <li className='flex space-x-2'><a href='#about' alt='A-propos' onClick={(e) => e.preventDefault(handleScroll(1, 'about'))} className='flex items-center space-x-2 text-rose-400 hover:text-rose-300'><i className='fas fa-user-check' /> <span className='hidden md:block text-sm font-medium'>À-propos</span></a></li>
                <li className='flex space-x-2'><a href='#skills' alt='Compétences' onClick={(e) => e.preventDefault(handleScroll(2, 'skills'))} className='flex items-center space-x-2 text-rose-400 hover:text-rose-300'><i className='fas fa-briefcase' /> <span className='hidden md:block text-sm font-medium'>Compétences</span></a></li>
                <li className='flex space-x-2'><a href='#projects' alt='Réalisations' onClick={(e) => e.preventDefault(handleScroll(3, 'projects'))} className='flex items-center space-x-2 text-rose-400 hover:text-rose-300'><i className='far fa-images' /> <span className='hidden md:block text-sm font-medium'>Réalisations</span></a></li>
                <li className='flex space-x-2'><a href='#contact' alt='Contact' onClick={(e) => e.preventDefault(handleScroll(4, 'contact'))} className='flex items-center space-x-2 text-rose-400 hover:text-rose-300'><i className='fas fa-paper-plane' /><span className='hidden md:block text-sm font-medium'>Contact</span></a></li>
            </ul>
        </nav>
    </header>
  )
}
