import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, User, MapPin, LogOutIcon, LogOut } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { gsap } from 'gsap';
import './Header.css';
import Swal from 'sweetalert2';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getTotalItems } = useCart();
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const formref=useRef();
  const navigate = useNavigate();
  const user=JSON.parse(localStorage.getItem('name'));

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    })
  }

  //handle login
  const handleaccount=()=>{
    navigate('/login');
  }
  
  const handlelogout=()=>{
    localStorage.clear();
    Swal.fire({
    title: "Logged out successfully",
    text: "You have been successfully logged out",
    icon: "success"
                   });   
    navigate('/');
  }
  useEffect(() => {
    // GSAP animation for header on mount
    gsap.fromTo(headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    // GSAP animation for mobile menu
    if (isMenuOpen) {
      gsap.fromTo(mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    } else {
      gsap.to(mobileMenuRef.current,
        { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" }
      );
    }
  }, [isMenuOpen]);


  const handleSearch = (e) => {
    e.preventDefault();
    formref.current.reset();
    navigate(`/searchresult/${searchQuery}`);
    setSearchQuery('');
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header-main">
        <div className="container">
          <div className="header-content">
            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>

            {/* Logo */}
            <Link to="/"  className="logo">
              <span >Staze</span>
            </Link>

            {/* Location */}
            <div className="location">
              <MapPin size={16} />
              <div>
                <span className="location-text">Deliver to</span>
                <span className="location-main">New York 10001</span>
              </div>
            </div>

            {/* Search Bar */}
            <form className="search-form" onSubmit={handleSearch} ref={formref}>
              <select className="search-category">
                <option value="all">All</option>
                <option value="electronics">Electronics</option>
                <option value="books">Books</option>
                <option value="clothing">Clothing</option>
                <option value="home">Home & Garden</option>
              </select>
              <input
                type="text"
                placeholder="Search Staze"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-btn">
                <Search size={20} />
              </button>
            </form>

            {/* Right Side Actions */}
            <div className="header-actions">
              <div className="account" >
                {
                !user? 
               <> 
                <User onClick={handleaccount} size={20} />
                <div  onClick={handleaccount}>
                  <span className="account-text">Hello, Sign in</span>
                  <span className="account-main">Account & Lists</span>
                </div>
                </>:
                <>
                <LogOut onClick={handlelogout} size={20} />
                <div  onClick={handlelogout}>
                  <span className="account-text">Hello </span>
                  <span className="account-main">{user}</span>
                </div>
                </>
                }
              
              </div>

              <div className="orders">
                <div>
                  <span className="orders-text">Returns</span>
                  <span className="orders-main">& Orders</span>
                </div>
              </div>

              <Link to="/cart" className="cart-link">
                <div className="cart-icon">
                  <ShoppingCart size={28} />
                  {getTotalItems() > 0 && (
                    <span className="cart-count">{getTotalItems()}</span>
                  )}
                </div>
                <span className="cart-text">Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="nav-bar">
        <div className="container">
          <div className="nav-content">
            <div className="nav-links">
              <Link to="/searchresult/electronics" className="nav-link">Electronics</Link>
              <Link to="/searchresult/books" className="nav-link">Books</Link>
              <Link to="/searchresult/fashion" className="nav-link">Fashion</Link>
              <Link to="/searchresult/home" className="nav-link">Home & Garden</Link>
              <Link to="/searchresult/sports" className="nav-link">Sports</Link>
              <Link onClick={() => scrollToSection('deals')} className="nav-link">Today's Deals</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="mobile-menu" ref={mobileMenuRef}>
        <div className="container">
          <div className="mobile-menu-content">
            <Link to="/searchresult/electronics" className="mobile-nav-link">Electronics</Link>
            <Link to="/searchresult/books" className="mobile-nav-link">Books</Link>
            <Link to="/searchresult/fashion" className="mobile-nav-link">Fashion</Link>
            <Link to="/searchresult/home" className="mobile-nav-link">Home & Garden</Link>
            <Link to="/searchresult/sports" className="mobile-nav-link">Sports</Link>
            <Link  onClick={() => scrollToSection('deals')} className="mobile-nav-link">Today's Deals</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;