import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import bloggerLogo from "../../assets/bloggerLogo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('Login') === 'true');
  const NameUser = localStorage.getItem('userConnected')
  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(localStorage.getItem('Login') === 'true');
    };

    window.addEventListener('storage', checkLogin);
    return () => window.removeEventListener('storage', checkLogin);
  }, []);

  const handleLogout = () => {
    localStorage.setItem('Login', 'false');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

  return (
    <nav className="navbar" position='static'>
      <div className="navbar-brand">
        <Link to="/Home" className="brand-link">
        <img src={bloggerLogo} alt="Blogger Logo" className="logo" />
          <span className="brand-name">Blogger</span>
        </Link>
      </div>

      <div className="iconNavbar" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </div>

      {isLoggedIn ? (
        <>
          <div className={`navbar-links ${isMenuOpen ? 'show-menu' : 'hide-menu'}`}>
            <Link to="/Home" className="nav-link">Home</Link>
            <Link to="/Create" className="nav-link">Create</Link>
            <a href="#footerid" className="nav-link">Contact Us</a>
          </div>
          <div className={`log ${isMenuOpen ? 'show-menu' : 'hide-menu'}`}>
            {NameUser}
            <button onClick={handleLogout} className="nav-link" id='login'>Log Out</button>
          </div>

        </>
      ) : (
        <button onClick={handleLogout} className="nav-link" id='login' style={{backgroundColor:"green", padding:"6px 10px",marginRight:"100px"}}>Log In</button>
      )}




      
    </nav>
  );
}
