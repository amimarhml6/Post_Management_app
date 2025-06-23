
import './Footer.css'
import { Link,useLocation } from 'react-router-dom'
import BloggerLogo from '../../assets/bloggerLogo.svg'

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    
    return (
        <footer id='footerid' className="footer">
            <div className="footer-content">
                <div className="navbar-brand-footer">
                    <Link to="/" className="brand-link" onClick={scrollToTop}>
                        <img src={BloggerLogo} alt="Blogger Logo" className="logo" />
                        <span className="brand-name">Blogger</span>
                    </Link>
                    
                </div>
                <div className="copyright">
                    <p id='copy'>&copy;2025 CopyRight</p>
                </div>

                <div className="footer-Contact">
                    <p id='gmail'>This Web Site is devloped By <a href="https://www.instagram.com/amar_engineer1/" id='gmail-link'>Amar_engineer1</a></p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;



