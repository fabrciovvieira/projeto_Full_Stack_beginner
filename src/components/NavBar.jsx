import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/logo.png'
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import './NavBar.css'


const NavBar = () => {
    const [showTitle, setShowTitle] = useState(false);
    const navRef = useRef();

    const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          if (scrollPosition > 100 || window.innerWidth <= 425) {
            setShowTitle(true);
          } else {
            setShowTitle(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const closeNavbar = () => {
        setOpenMenu(false);
    };
    

  return (
    <header>
        {showTitle ? (
            <h1 className='title-navbar' style={{fontWeight: 'lighter'}}>BMG</h1>
          ) : (
            <img className='logo-navbar' src={logo} alt="logo do clube" />
          )}

        <nav ref={navRef} >
            <Link to="/" onClick={closeNavbar}>Home</Link>
            <Link to="/sobre" onClick={closeNavbar}>Sobre</Link>
            <Link to="/diretoria" onClick={closeNavbar}>Diretoria</Link>
            <Link to="/elenco" onClick={closeNavbar}>Elenco</Link>
            <Link to="/jogos" onClick={closeNavbar} >Jogos</Link>
            <Link to="/" onClick={closeNavbar}>Eventos</Link>
            <Link to="/" onClick={closeNavbar}>Contato</Link>
            <button
                className="nav-btn nav-close-btn"
                onClick={showNavbar}
                >
                <FaTimes />
            </button>
        </nav>
        <button
            className="nav-btn"
            onClick={showNavbar}>
            <FaBars />
        </button>
    </header>
  )
}

export default NavBar