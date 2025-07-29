import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Get to Know Us</h4>
              <ul>
                <li><a href="#about">About Amazonia</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#press">Press Releases</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#sustainability">Sustainability</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Make Money with Us</h4>
              <ul>
                <li><a href="#sell">Sell products</a></li>
                <li><a href="#affiliate">Affiliate Program</a></li>
                <li><a href="#advertise">Advertise Your Products</a></li>
                <li><a href="#fulfillment">Fulfillment by Amazonia</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Let Us Help You</h4>
              <ul>
                <li><a href="#account">Your Account</a></li>
                <li><a href="#orders">Your Orders</a></li>
                <li><a href="#shipping">Shipping Rates & Policies</a></li>
                <li><a href="#returns">Returns & Replacements</a></li>
                <li><a href="#help">Help</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Connect with Us</h4>
              <div className="social-links">
                <a href="#facebook" aria-label="Facebook">
                  <Facebook size={24} />
                </a>
                <a href="#twitter" aria-label="Twitter">
                  <Twitter size={24} />
                </a>
                <a href="#instagram" aria-label="Instagram">
                  <Instagram size={24} />
                </a>
                <a href="#youtube" aria-label="YouTube">
                  <Youtube size={24} />
                </a>
              </div>
              
              <div className="contact-info">
                <div className="contact-item">
                  <Mail size={16} />
                  <span>support@staze.com</span>
                </div>
                <div className="contact-item">
                  <Phone size={16} />
                  <span>8445817527</span>
                </div>
                <div className="contact-item">
                  <MapPin size={16} />
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="logo-section">
              <span className="footer-logo">Staze</span>
              <p>Your one-stop shop for everything</p>
            </div>
            
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
              <a href="#accessibility">Accessibility</a>
            </div>
            
            <div className="copyright">
              <p>&copy; 2025 Staze. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;