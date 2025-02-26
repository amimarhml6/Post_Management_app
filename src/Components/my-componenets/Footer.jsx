
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
                    <h2>About Us</h2>
                    <p>Oubahi Hadjer</p>
                    <p>Nesrine oubahi</p>
                    <p>Abdou oubahi</p>
                    <p>Amar Houmel</p>
                </div>
                <div>
                    <h2>Contact us</h2>
                <p><a href="mailto:hadjeroubahi14@gmail.com" >hadjeroubahi14@gmail.com</a></p>
                <p><a href="mailto:hadjeroubahi14@gmail.com" >hadjeroubahi14@gmail.com</a></p>
                <p><a href="mailto:belhoutabdou57@gmail.com" >belhoutabdou57@gmail.com</a></p>
                <p><a href="mailto:dzi07596@gmail.com" >dzi07596@gmail.com</a></p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;



