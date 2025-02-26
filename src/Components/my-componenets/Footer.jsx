

import './Navbar.css'
import { Link,useLocation } from 'react-router-dom'

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    
    return (
        <footer id='footerid' className="footer">
            <div className="footer-content">
                <div className="navbar-brand-footer">
                    <Link to="/" className="brand-link" onClick={scrollToTop}>
                        <img src="/public/bloggerLogo.svg" alt="Blogger Logo" className="logo" />
                        <span className="brand-name">Blogger</span>
                    </Link>
                    <p>&copy;2025 Copy Right Team7</p>
                </div>
                <div>
                 
                    
                </div>
                <div>
                    <h2>Contact us</h2>
      
                <p><a href="mailto:dzi07596@gmail.com" >dzi07596@gmail.com</a></p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;



