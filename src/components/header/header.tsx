import './header.css'
export default function Header() {
    return (
        <div className="header flex justify-around items-center">
            <div className='header-logo transition-all'>BajaTuVideo</div>
            <nav className='header-opciones hidden lg:block'>
                <a className='header-opcion transition-all' href="/">Inicio</a>
                <a className='header-opcion transition-all' href="/faqs">Faqs</a>
                <a className='header-opcion transition-all' href="">Idioma</a>
            </nav>
            <div className="header-login hidden lg:block transition-all">LOGIN</div>
        </div>
    )
}
