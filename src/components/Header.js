export default function Header() {

  function handleScroll(value, div) {
    var target = window.innerHeight * value
    var test = window.innerHeight

    console.log(test)

    document.getElementById(div).scrollIntoView({behavior: "smooth", top: 200});
  }

  return (
    <header className='fixed z-10 top-0 w-full h-16 bg-slate-900 flex items-center justify-center shadow-lg'>
        <nav>
            <ul className='flex space-x-10 text-rose-400'>
                <li><a href='#home' onClick={(e) => e.preventDefault(handleScroll(0, 'home'))} className='text-rose-400 hover:text-rose-300'><i className='fas fa-home' /></a></li>
                <li><a href='#about' onClick={(e) => e.preventDefault(handleScroll(1, 'about'))} className='text-rose-400 hover:text-rose-300'><i className='fas fa-user-check' /></a></li>
                <li><a href='#skills' onClick={(e) => e.preventDefault(handleScroll(2, 'skills'))} className='text-rose-400 hover:text-rose-300'><i className='fas fa-briefcase' /></a></li>
                <li><a href='#projects' onClick={(e) => e.preventDefault(handleScroll(3, 'projects'))} className='text-rose-400 hover:text-rose-300'><i className='far fa-images' /></a></li>
                <li><a href='#' className='text-rose-400 hover:text-rose-300'><i className='fas fa-paper-plane' /></a></li>
            </ul>
        </nav>
    </header>
  )
}
