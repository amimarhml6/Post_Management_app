import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import bloggerLogo from "../../assets/bloggerLogo.svg";

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

  return (
    <nav className="navbar" position='static'>
      <div className="navbar-brand">
        <Link to="/Home" className="brand-link">
        <img src={bloggerLogo} alt="Blogger Logo" className="logo" />
          <span className="brand-name">Blogger</span>
        </Link>
      </div>

      {isLoggedIn ? (
        <>
          <div className="navbar-links">
            <Link to="/Home" className="nav-link">Home</Link>
            <Link to="/Create" className="nav-link">Create</Link>
            <a href="#footerid" className="nav-link">Contact Us</a>
          </div>
          <div className='log' style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'25px',marginRight:"100px"}}>
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
