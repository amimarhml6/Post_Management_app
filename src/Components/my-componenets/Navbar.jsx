import './Navbar.css'
import {Link} from 'react-router-dom'
import footerid from './Footer'

export default function Navbar(){

  const scrollToBottom = () => {
    window.scrollTo({ Bottom: 0, behavior:'smooth' });
  };

    return(
          <nav className="navbar" position='static'>
          <div className="navbar-brand">
            <Link to="/Home" className="brand-link">
              <img src="/public/bloggerLogo.svg" alt="Blogger Logo" className="logo" />
              <span className="brand-name">Blogger</span>
            </Link>
          </div>
          <div className="navbar-links">
            <Link to="/Home" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Log in</Link>
            <a href='#footerid' className="nav-link" onClick={scrollToBottom}>About</a>
            <a href="#footerid" className="nav-link" onClick={scrollToBottom}>Contact</a>
          </div>
          <div className="navbar-icon">
          <img src="/public/darkIcon.svg" alt="Dark icon" className="icondark" />
          </div>
        </nav>

    )
}