import { useState } from 'react'
import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, Bars3Icon } from '@heroicons/react/24/outline'
import './Header.css'

const categories = [
  { id: 'all', name: 'All Departments' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'books', name: 'Books' },
  { id: 'clothing', name: 'Clothing' },
  { id: 'home', name: 'Home & Garden' },
  { id: 'sports', name: 'Sports & Outdoors' },
  { id: 'toys', name: 'Toys & Games' }
]

function Header({ cartItemsCount, onCartClick, searchQuery, onSearchChange, selectedCategory, onCategoryChange }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo">
              <h1>amazon</h1>
              <span>.clone</span>
            </div>

            {/* Search Bar */}
            <div className="search-container">
              <select 
                className="category-select"
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <div className="search-input-container">
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
                <button className="search-button">
                  <MagnifyingGlassIcon className="search-icon" />
                </button>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="header-actions">
              <div className="account-info">
                <span className="greeting">Hello, Sign in</span>
                <span className="account-text">Account & Lists</span>
              </div>
              
              <div className="cart-container" onClick={onCartClick}>
                <div className="cart-icon-wrapper">
                  <ShoppingCartIcon className="cart-icon" />
                  {cartItemsCount > 0 && (
                    <span className="cart-count">{cartItemsCount}</span>
                  )}
                </div>
                <span className="cart-text">Cart</span>
              </div>

              <button 
                className="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Bars3Icon className="menu-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="header-nav">
        <div className="container">
          <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#" className="nav-item">Today's Deals</a>
            <a href="#" className="nav-item">Customer Service</a>
            <a href="#" className="nav-item">Registry</a>
            <a href="#" className="nav-item">Gift Cards</a>
            <a href="#" className="nav-item">Sell</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header