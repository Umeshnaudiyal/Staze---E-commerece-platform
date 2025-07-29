import { useState, useEffect, useMemo } from 'react'
import ProductCard from './ProductCard'
import './ProductGrid.css'

// Mock product data
const mockProducts = [
  {
    id: 1,
    title: 'iPhone 15 Pro Max',
    price: 1199.99,
    originalPrice: 1299.99,
    rating: 4.8,
    reviews: 2547,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'electronics',
    prime: true,
    freeShipping: true
  },
  {
    id: 2,
    title: 'MacBook Pro 14" M3',
    price: 1999.99,
    rating: 4.9,
    reviews: 1823,
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'electronics',
    prime: true,
    freeShipping: true
  },
  {
    id: 3,
    title: 'The Psychology of Money',
    price: 14.99,
    originalPrice: 19.99,
    rating: 4.7,
    reviews: 8932,
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'books',
    prime: true,
    freeShipping: false
  },
  {
    id: 4,
    title: 'Nike Air Max 270',
    price: 149.99,
    originalPrice: 179.99,
    rating: 4.6,
    reviews: 3421,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'clothing',
    prime: true,
    freeShipping: true
  },
  {
    id: 5,
    title: 'Sony WH-1000XM5 Headphones',
    price: 349.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 1567,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'electronics',
    prime: true,
    freeShipping: true
  },
  {
    id: 6,
    title: 'Coffee Maker Deluxe',
    price: 89.99,
    rating: 4.4,
    reviews: 892,
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'home',
    prime: false,
    freeShipping: false
  },
  {
    id: 7,
    title: 'Wireless Gaming Mouse',
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.5,
    reviews: 2134,
    image: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'electronics',
    prime: true,
    freeShipping: true
  },
  {
    id: 8,
    title: 'Yoga Mat Premium',
    price: 29.99,
    rating: 4.3,
    reviews: 1245,
    image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'sports',
    prime: true,
    freeShipping: false
  }
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Customer Rating' },
  { value: 'newest', label: 'Newest Arrivals' }
]

function ProductGrid({ searchQuery, selectedCategory, onAddToCart }) {
  const [sortBy, setSortBy] = useState('featured')
  const [isLoading, setIsLoading] = useState(false)

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = mockProducts

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
     const filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      )
    }

    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'newest':
          return b.id - a.id
        default:
          return 0
      }
    })

    return sorted
  }, [searchQuery, selectedCategory, sortBy])

  // Simulate loading when filters change
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 300)
    return () => clearTimeout(timer)
  }, [searchQuery, selectedCategory, sortBy])

  return (
    <div className="product-grid-container">
      <div className="container">
        {/* Results Header */}
        <div className="results-header">
          <div className="results-info">
            <h2>
              {searchQuery
                ? `Results for "${searchQuery}"`
                : selectedCategory === 'all'
                ? 'All Products'
                : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Products`
              }
            </h2>
            <p className="results-count">
              {filteredAndSortedProducts.length} results
            </p>
          </div>
          
          <div className="sort-container">
            <label htmlFor="sort-select">Sort by:</label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        ) : (
          <>
            {/* No Results */}
            {filteredAndSortedProducts.length === 0 ? (
              <div className="no-results">
                <h3>No results found</h3>
                <p>Try adjusting your search terms or browse our categories.</p>
              </div>
            ) : (
              /* Product Grid */
              <div className="product-grid fade-in">
                {filteredAndSortedProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default ProductGrid