import { useState } from 'react'
import { StarIcon, TruckIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline'
import './ProductCard.css'

function ProductCard({ product, onAddToCart }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <StarIcon key={i} className="star-icon filled" />
        )
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="star-half">
            <StarIcon className="star-icon filled" />
          </div>
        )
      } else {
        stars.push(
          <StarOutlineIcon key={i} className="star-icon outline" />
        )
      }
    }
    return stars
  }

  const handleAddToCart = () => {
    onAddToCart(product)
    // Add visual feedback
    const button = document.activeElement
    if (button) {
      button.classList.add('added')
      setTimeout(() => {
        button.classList.remove('added')
      }, 1000)
    }
  }

  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-image-container">
        {!isImageLoaded && !imageError && (
          <div className="image-placeholder">
            <div className="image-loading"></div>
          </div>
        )}
        {imageError ? (
          <div className="image-error">
            <span>Image unavailable</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.title}
            className={`product-image ${isImageLoaded ? 'loaded' : ''}`}
            onLoad={() => setIsImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        )}
        
        {/* Prime Badge */}
        {product.prime && (
          <div className="prime-badge">
            <span>Prime</span>
          </div>
        )}

        {/* Discount Badge */}
        {product.originalPrice && (
          <div className="discount-badge">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        
        {/* Rating */}
        <div className="rating-container">
          <div className="stars">
            {renderStars(product.rating)}
          </div>
          <span className="rating-text">{product.rating}</span>
          <span className="reviews-count">({product.reviews.toLocaleString()})</span>
        </div>

        {/* Price */}
        <div className="price-container">
          <span className="current-price">${product.price}</span>
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice}</span>
          )}
        </div>

        {/* Shipping Info */}
        {product.freeShipping && (
          <div className="shipping-info">
            <TruckIcon className="truck-icon" />
            <span>FREE Shipping</span>
          </div>
        )}

        {/* Add to Cart Button */}
        <button
          className="add-to-cart-btn btn btn-primary"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard